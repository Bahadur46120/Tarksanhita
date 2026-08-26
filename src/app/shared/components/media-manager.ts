import { ChangeDetectionStrategy, Component, DestroyRef, forwardRef, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventMedia } from '../../core/models/models';
import { EventMediaService, normalise } from '../../core/services/event-media.service';
import { MediaUploadService } from '../../core/services/media-upload.service';

/** One file on its way up, kept beside the saved list until it lands. */
interface PendingUpload {
  key: string;
  name: string;
  percent: number;
  error?: string;
}

/**
 * Gallery editor for the admin panel: drop files in, caption them, choose the
 * cover, reorder, remove. Files go straight to their host; the list this
 * component holds is a form value, so it is saved with the record as well as
 * pushed to the media endpoint as each change is made.
 */
@Component({
  selector: 'ts-media-manager',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MediaManager), multi: true }
  ],
  template: `
    <div class="mm">
      <div class="mm-drop"
           [class.over]="dragging()"
           (dragover)="onDragOver($event)"
           (dragleave)="onDragLeave($event)"
           (drop)="onDrop($event)">
        <input #picker type="file" multiple accept="image/*,video/*" hidden (change)="onPicked($event)" />

        <p class="mm-drop-lead">Drop photographs or video here</p>
        <p class="muted mm-drop-hint">
          Images up to {{ imageLimit }} MB.
          @if (videoUploads) { Video up to {{ videoLimit }} MB. } @else { Video is added by link. }
        </p>

        <div class="mm-drop-actions">
          <button type="button" class="btn btn-navy btn-sm" [disabled]="locked()" (click)="picker.click()">Choose files</button>
          <button type="button" class="btn btn-ghost btn-sm" [disabled]="locked()" (click)="linkOpen.set(!linkOpen())">
            {{ linkOpen() ? 'Cancel link' : 'Add by link' }}
          </button>
        </div>

        @if (linkOpen()) {
          <div class="mm-link">
            <input type="url"
                   placeholder="YouTube, Vimeo or direct file address"
                   [(ngModel)]="linkValue"
                   [ngModelOptions]="{ standalone: true }"
                   [disabled]="locked()"
                   (keydown.enter)="addLink($event)" />
            <button type="button" class="btn btn-gold btn-sm" [disabled]="locked()" (click)="addLink()">Add</button>
          </div>
        }
      </div>

      @if (!eventId()) {
        <p class="mm-note">Save the record once and the gallery will be attached to it. Items added now are kept with your first save.</p>
      }

      @for (job of pending(); track job.key) {
        <div class="mm-progress" [class.failed]="!!job.error">
          <div class="mm-progress-head">
            <span>{{ job.name }}</span>
            <span>{{ job.error ? 'Failed' : job.percent + '%' }}</span>
          </div>
          @if (job.error) {
            <p class="mm-error">{{ job.error }} <button type="button" class="mm-link-btn" (click)="dismiss(job.key)">Dismiss</button></p>
          } @else {
            <div class="mm-bar"><i [style.width.%]="job.percent"></i></div>
          }
        </div>
      }

      @if (items().length) {
        <div class="mm-grid">
          @for (item of items(); track item.id; let i = $index) {
            <div class="mm-card" [class.cover]="item.isCover">
              <div class="mm-thumb">
                @if (thumb(item)) {
                  <img [src]="thumb(item)" [alt]="item.caption || item.fileName || ''" loading="lazy" />
                } @else {
                  <span class="mm-fallback">{{ item.kind }}</span>
                }
                <span class="mm-kind">{{ item.kind === 'Video' ? 'Video' : 'Photo' }}</span>
                @if (item.isCover) { <span class="mm-cover-flag">Cover</span> }
              </div>

              <input class="mm-caption"
                     type="text"
                     placeholder="Caption (optional)"
                     [ngModel]="item.caption"
                     [ngModelOptions]="{ standalone: true }"
                     [disabled]="locked()"
                     (ngModelChange)="setCaption(item, $event)"
                     (blur)="pushUpdate(item)" />

              <div class="mm-tools">
                <button type="button" class="mm-tool" title="Move earlier" [disabled]="locked() || i === 0" (click)="move(i, -1)">&#8592;</button>
                <button type="button" class="mm-tool" title="Move later" [disabled]="locked() || i === items().length - 1" (click)="move(i, 1)">&#8594;</button>
                @if (item.kind === 'Image') {
                  <button type="button" class="mm-tool" title="Use as the cover image" [disabled]="locked() || item.isCover" (click)="setCover(item)">Cover</button>
                }
                <a class="mm-tool" [href]="item.url" target="_blank" rel="noopener" title="Open the original">View</a>
                <button type="button" class="mm-tool danger" title="Remove" [disabled]="locked()" (click)="remove(item)">Remove</button>
              </div>
            </div>
          }
        </div>
      } @else if (!pending().length) {
        <p class="mm-note">No photographs or video yet.</p>
      }
    </div>
  `
})
export class MediaManager implements ControlValueAccessor {
  private readonly uploads = inject(MediaUploadService);
  private readonly store = inject(EventMediaService);
  private readonly snack = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  /** The record these items belong to. Null until it has been saved once. */
  readonly eventId = input<string | null>(null);

  readonly items = signal<EventMedia[]>([]);
  readonly pending = signal<PendingUpload[]>([]);
  readonly dragging = signal(false);
  readonly linkOpen = signal(false);
  readonly locked = signal(false);

  linkValue = '';

  readonly videoUploads = this.uploads.videoUploadEnabled;
  readonly imageLimit = Math.round(this.uploads.imageMaxBytes / (1024 * 1024));
  readonly videoLimit = Math.round(this.uploads.videoMaxBytes / (1024 * 1024));

  private onChange: (value: EventMedia[]) => void = () => undefined;
  private onTouched: () => void = () => undefined;
  private disabled = false;

  // ------------------------------------------------------ ControlValueAccessor

  writeValue(value: EventMedia[] | null): void {
    this.items.set(normalise(Array.isArray(value) ? value : []));
  }

  registerOnChange(fn: (value: EventMedia[]) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.locked.set(isDisabled);
  }

  // ------------------------------------------------------------ adding files

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (!this.disabled) this.dragging.set(true);
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(false);
    if (this.disabled) return;

    const files = Array.from(event.dataTransfer?.files ?? []);
    if (files.length) this.accept(files);
  }

  onPicked(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.accept(Array.from(input.files ?? []));
    // Cleared so choosing the same file twice in a row still fires a change.
    input.value = '';
  }

  private accept(files: File[]): void {
    for (const file of files) {
      const refusal = this.uploads.reject(file);
      if (refusal) {
        this.snack.open(refusal, 'Dismiss', { duration: 7000, panelClass: ['ts-snack-error'] });
        continue;
      }
      this.send(file);
    }
  }

  private send(file: File): void {
    const key = `${file.name}-${file.size}-${this.pending().length}-${performance.now()}`;
    this.pending.update(list => [...list, { key, name: file.name, percent: 0 }]);

    this.uploads.upload(file).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: event => {
        if (event.media) {
          this.pending.update(list => list.filter(job => job.key !== key));
          this.append(event.media);
        } else {
          this.pending.update(list => list.map(job => (job.key === key ? { ...job, percent: event.percent } : job)));
        }
      },
      error: (err: unknown) => {
        const message = err instanceof Error ? err.message : 'The upload failed.';
        this.pending.update(list => list.map(job => (job.key === key ? { ...job, error: message } : job)));
      }
    });
  }

  addLink(event?: Event): void {
    event?.preventDefault();
    if (this.disabled) return;

    const media = this.uploads.fromLink(this.linkValue);
    if (!media) {
      this.snack.open('Enter a full web address beginning with http.', 'Dismiss', { duration: 5000 });
      return;
    }

    this.linkValue = '';
    this.linkOpen.set(false);
    this.append(media);
  }

  private append(media: EventMedia): void {
    const next = normalise([...this.items(), { ...media, sortOrder: this.items().length }]);
    this.commit(next);

    const id = this.eventId();
    if (id) this.persist(this.store.add(id, next.find(m => m.id === media.id) ?? media));
  }

  /**
   * Sends one change to the API. A failure is worth saying out loud: the item is
   * still in the form and will go up with the record, but until then the server
   * does not have it.
   */
  private persist(request: Observable<unknown>): void {
    request.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      error: () =>
        this.snack.open(
          'That change has not reached the server yet. Press Save to store it with the record.',
          'Dismiss',
          { duration: 7000, panelClass: ['ts-snack-error'] }
        )
    });
  }

  dismiss(key: string): void {
    this.pending.update(list => list.filter(job => job.key !== key));
  }

  // ------------------------------------------------------------ editing

  setCaption(item: EventMedia, caption: string): void {
    if (this.disabled) return;
    this.commit(this.items().map(m => (m.id === item.id ? { ...m, caption } : m)));
  }

  pushUpdate(item: EventMedia): void {
    const id = this.eventId();
    const current = this.items().find(m => m.id === item.id);
    if (id && current) this.persist(this.store.update(id, current));
  }

  setCover(item: EventMedia): void {
    if (this.disabled) return;
    const next = this.items().map(m => ({ ...m, isCover: m.id === item.id }));
    this.commit(next);

    const id = this.eventId();
    const cover = next.find(m => m.id === item.id);
    if (id && cover) this.persist(this.store.update(id, cover));
  }

  move(index: number, by: number): void {
    if (this.disabled) return;
    const list = [...this.items()];
    const target = index + by;
    if (target < 0 || target >= list.length) return;

    [list[index], list[target]] = [list[target], list[index]];
    const next = normalise(list.map((item, i) => ({ ...item, sortOrder: i })));
    this.commit(next);

    const id = this.eventId();
    if (id) this.persist(this.store.replaceAll(id, next));
  }

  remove(item: EventMedia): void {
    if (this.disabled) return;
    this.commit(this.items().filter(m => m.id !== item.id));

    const id = this.eventId();
    if (id) this.persist(this.store.remove(id, item.id));
    this.store.releaseFromHost(item);
  }

  // ------------------------------------------------------------ helpers

  thumb(item: EventMedia): string | null {
    return item.thumbUrl || (item.kind === 'Image' ? item.url : null);
  }

  /** Single place where the list changes, so the form always sees the new value. */
  private commit(next: EventMedia[]): void {
    const clean = normalise(next);
    this.items.set(clean);
    this.onChange(clean);
    this.onTouched();
  }
}
