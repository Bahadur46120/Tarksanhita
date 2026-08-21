import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ContentEntity, PagedResult } from '../../core/models/models';
import { EmptyState, LoadingState, Pager } from '../../shared/components/ui';
import { ResourceDef, findResource } from './resources';

/**
 * The admin grid. One component manages every content collection, reading the
 * column definitions from the resource registry and calling the shared CRUD
 * endpoints. Includes publish/unpublish, activate/deactivate and delete.
 */
@Component({
  selector: 'ts-admin-content-list',
  standalone: true,
  imports: [RouterLink, DatePipe, FormsModule, Pager, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './content-list.html'
})
export class AdminContentList implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly content = inject(ContentService);
  private readonly snack = inject(MatSnackBar);
  readonly auth = inject(AuthService);

  readonly resource = signal<ResourceDef | null>(null);
  readonly result = signal<PagedResult<ContentEntity> | null>(null);
  readonly loading = signal(true);
  readonly working = signal<string | null>(null);

  search = '';
  category = '';
  page = 1;

  readonly items = computed(() => this.result()?.items ?? []);
  readonly total = computed(() => this.result()?.totalCount ?? 0);
  readonly totalPages = computed(() => this.result()?.totalPages ?? 0);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const key = params.get('resource') ?? '';
      const def = findResource(key);

      if (!def) {
        void this.router.navigateByUrl('/admin');
        return;
      }

      this.resource.set(def);
      this.search = '';
      this.category = '';
      this.page = 1;
      this.load();
    });
  }

  load(): void {
    const def = this.resource();
    if (!def) return;

    this.loading.set(true);
    this.content.for<ContentEntity>(def.key).list({
      page: this.page,
      pageSize: 20,
      search: this.search || undefined,
      category: this.category || undefined,
      // The admin grid must show drafts and archived records too.
      includeUnpublished: true
    }).subscribe({
      next: res => {
        this.result.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.result.set(null);
        this.loading.set(false);
      }
    });
  }

  onSearch(): void {
    this.page = 1;
    this.load();
  }

  onPage(p: number): void {
    this.page = p;
    this.load();
  }

  // ------------------------------------------------------------ state changes

  togglePublish(item: ContentEntity): void {
    const def = this.resource();
    if (!def || !item.id) return;

    const client = this.content.for<ContentEntity>(def.key);
    const request = item.isPublished ? client.unpublish(item.id) : client.publish(item.id);

    this.working.set(item.id);
    request.subscribe({
      next: res => {
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
        this.working.set(null);
        this.load();
      },
      error: () => this.working.set(null)
    });
  }

  toggleActive(item: ContentEntity): void {
    const def = this.resource();
    if (!def || !item.id) return;

    const client = this.content.for<ContentEntity>(def.key);
    const request = item.isActive ? client.deactivate(item.id) : client.activate(item.id);

    this.working.set(item.id);
    request.subscribe({
      next: res => {
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
        this.working.set(null);
        this.load();
      },
      error: () => this.working.set(null)
    });
  }

  remove(item: ContentEntity): void {
    const def = this.resource();
    if (!def || !item.id) return;

    // Deletion is permanent; archiving is the reversible alternative and is
    // offered in the same row, so a plain confirmation is enough here.
    const ok = confirm(`Delete "${item.title}" permanently?\n\nThis cannot be undone. Use Archive instead if you may need it later.`);
    if (!ok) return;

    this.working.set(item.id);
    this.content.for<ContentEntity>(def.key).remove(item.id).subscribe({
      next: res => {
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
        this.working.set(null);
        this.load();
      },
      error: () => this.working.set(null)
    });
  }

  // ------------------------------------------------------------ cell rendering

  cell(item: ContentEntity, name: string): string {
    const value = (item as unknown as Record<string, unknown>)[name];
    if (value === null || value === undefined || value === '') return '—';
    return String(value);
  }

  cellBool(item: ContentEntity, name: string): boolean {
    return Boolean((item as unknown as Record<string, unknown>)[name]);
  }
}
