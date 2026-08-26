import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ContentService } from '../../core/services/api.service';
import { ContentEntity, EventMedia } from '../../core/models/models';
import { coverImage, normalise } from '../../core/services/event-media.service';
import { MediaManager } from '../../shared/components/media-manager';
import { LoadingState } from '../../shared/components/ui';
import { FieldDef, ResourceDef, findResource } from './resources';

/**
 * Create and edit form for every content type. The controls are generated from
 * the resource registry, so a new managed collection needs no new component.
 */
@Component({
  selector: 'ts-admin-content-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, LoadingState, MediaManager],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './content-form.html'
})
export class AdminContentForm implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly content = inject(ContentService);
  private readonly snack = inject(MatSnackBar);

  readonly resource = signal<ResourceDef | null>(null);
  readonly editingId = signal<string | null>(null);
  readonly loading = signal(true);
  readonly saving = signal(false);

  form: FormGroup = this.fb.group({});

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const def = findResource(params.get('resource') ?? '');
      if (!def) {
        void this.router.navigateByUrl('/admin');
        return;
      }

      this.resource.set(def);
      this.buildForm(def);

      const id = params.get('id');
      this.editingId.set(id);

      if (id) {
        this.content.for<ContentEntity>(def.key).byId(id).subscribe({
          next: record => {
            this.patch(def, record);
            this.loading.set(false);
          },
          error: () => {
            this.snack.open('That record could not be loaded.', 'Dismiss');
            this.loading.set(false);
          }
        });
      } else {
        this.loading.set(false);
      }
    });
  }

  // ------------------------------------------------------------ form building

  private buildForm(def: ResourceDef): void {
    const controls: Record<string, unknown[]> = {};

    for (const field of def.fields) {
      const validators = field.required ? [Validators.required] : [];
      controls[field.name] = [this.initialValue(field), validators];
    }

    this.form = this.fb.group(controls);
  }

  private initialValue(field: FieldDef): unknown {
    if (field.default !== undefined) return field.default;
    switch (field.type) {
      case 'checkbox': return false;
      case 'number': return null;
      case 'media': return [];
      case 'tags': return '';
      case 'date':
      case 'datetime': return this.toInputDate(new Date().toISOString(), field.type);
      default: return '';
    }
  }

  /** Copies a loaded record into the form, converting arrays and dates. */
  private patch(def: ResourceDef, record: ContentEntity): void {
    const raw = record as unknown as Record<string, unknown>;
    const patch: Record<string, unknown> = {};

    for (const field of def.fields) {
      const value = raw[field.name];
      if (value === undefined || value === null) continue;

      if (field.type === 'tags') {
        patch[field.name] = Array.isArray(value) ? (value as string[]).join(', ') : String(value);
      } else if (field.type === 'media') {
        patch[field.name] = normalise(Array.isArray(value) ? (value as EventMedia[]) : []);
      } else if (field.type === 'date' || field.type === 'datetime') {
        patch[field.name] = this.toInputDate(String(value), field.type);
      } else {
        patch[field.name] = value;
      }
    }

    this.form.patchValue(patch);
  }

  /** ISO timestamp to the value format expected by date / datetime-local inputs. */
  private toInputDate(iso: string, type: 'date' | 'datetime'): string {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    const pad = (n: number) => String(n).padStart(2, '0');
    const day = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    return type === 'date' ? day : `${day}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  // ------------------------------------------------------------ save

  save(publish?: boolean): void {
    const def = this.resource();
    if (!def) return;

    if (publish !== undefined) this.form.patchValue({ isPublished: publish });

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snack.open('Please complete the required fields.', 'Dismiss');
      return;
    }

    const payload = this.buildPayload(def);
    this.saving.set(true);

    const id = this.editingId();
    const client = this.content.for<ContentEntity>(def.key);
    // The two calls return different shapes; only completion matters here.
    const request: Observable<unknown> = id ? client.update(id, payload) : client.create(payload);

    request.subscribe({
      next: () => {
        this.saving.set(false);
        this.snack.open(`${def.singular} ${id ? 'updated' : 'created'}.`, 'Close', { panelClass: ['ts-snack-ok'] });
        void this.router.navigate(['/admin', def.key]);
      },
      error: () => this.saving.set(false)
    });
  }

  private buildPayload(def: ResourceDef): Partial<ContentEntity> {
    const value = this.form.getRawValue() as Record<string, unknown>;
    const payload: Record<string, unknown> = {};

    for (const field of def.fields) {
      const v = value[field.name];

      if (field.type === 'tags') {
        payload[field.name] = String(v ?? '')
          .split(',')
          .map(part => part.trim())
          .filter(Boolean);
      } else if (field.type === 'media') {
        payload[field.name] = normalise(Array.isArray(v) ? (v as EventMedia[]) : []);
      } else if (field.type === 'number') {
        payload[field.name] = v === '' || v === null ? null : Number(v);
      } else if ((field.type === 'date' || field.type === 'datetime') && v) {
        payload[field.name] = new Date(String(v)).toISOString();
      } else {
        payload[field.name] = v;
      }
    }

    // The API derives the slug from the title when one is not supplied.
    payload['slug'] = '';

    // Profiles display the person's name; keep title in step so listings read well.
    if (def.key === 'profiles' && !payload['title']) {
      payload['title'] = payload['fullName'];
    }

    // Listing cards and the homepage read imageUrl, so the chosen cover fills it.
    const gallery = payload['mediaItems'] as EventMedia[] | undefined;
    if (gallery) {
      const cover = coverImage(gallery);
      if (cover) payload['imageUrl'] = cover.url;
    }

    return payload as Partial<ContentEntity>;
  }

  invalid(name: string): boolean {
    const control = this.form.get(name);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  cancel(): void {
    const def = this.resource();
    void this.router.navigate(['/admin', def?.key ?? '']);
  }
}
