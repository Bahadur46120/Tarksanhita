import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService, ContentService } from '../../core/services/api.service';
import { LibraryResource, PagedResult } from '../../core/models/models';
import { EmptyState, LoadingState, PageBanner, Pager } from '../../shared/components/ui';

interface CategoryCount {
  type: string;
  count: number;
}

const TYPES: { value: string; label: string; icon: string; note: string }[] = [
  { value: '',              label: 'All Resources',    icon: 'book',     note: 'Everything' },
  { value: 'Book',          label: 'Books',            icon: 'book',     note: 'Core & reference' },
  { value: 'Journal',       label: 'Journals',         icon: 'doc',      note: 'Subscriptions' },
  { value: 'ResearchPaper', label: 'Research Papers',  icon: 'flask',    note: 'Open access' },
  { value: 'BareAct',       label: 'Bare Acts',        icon: 'scale',    note: 'Central & State' },
  { value: 'CaseLaw',       label: 'Case Laws',        icon: 'gavel',    note: 'Reported judgments' },
  { value: 'Constitution',  label: 'Constitution',     icon: 'building', note: 'Annotated text' },
  { value: 'Database',      label: 'Legal Databases',  icon: 'globe',    note: 'Licensed access' },
  { value: 'StudyMaterial', label: 'Study Materials',  icon: 'bulb',     note: 'Course-linked' }
];

@Component({
  selector: 'ts-library',
  standalone: true,
  imports: [RouterLink, FormsModule, PageBanner, Pager, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './library.html'
})
export class LibraryPage implements OnInit {
  private readonly api = inject(ApiService);
  private readonly content = inject(ContentService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly types = TYPES;
  readonly result = signal<PagedResult<LibraryResource> | null>(null);
  readonly categoryCounts = signal<CategoryCount[]>([]);
  readonly loading = signal(true);

  search = '';
  type = '';
  page = 1;

  readonly items = computed(() => this.result()?.items ?? []);
  readonly total = computed(() => this.result()?.totalCount ?? 0);
  readonly totalPages = computed(() => this.result()?.totalPages ?? 0);

  ngOnInit(): void {
    this.api.get<CategoryCount[]>('library/categories').subscribe({
      next: counts => this.categoryCounts.set(counts),
      error: () => this.categoryCounts.set([])
    });

    // The homepage library tiles deep-link here with ?type=BareAct and similar.
    this.route.queryParams.subscribe(params => {
      this.type = (params['type'] as string) ?? '';
      this.search = (params['q'] as string) ?? '';
      this.page = 1;
      this.load();
    });
  }

  load(): void {
    this.loading.set(true);
    this.content.for<LibraryResource>('library')
      .list({
        page: this.page,
        pageSize: 12,
        search: this.search || undefined,
        category: this.type || undefined,
        sortBy: 'title',
        descending: false
      })
      .subscribe({
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

  /** Keeps the address bar in step so a search can be bookmarked or shared. */
  submitSearch(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: this.search || null, type: this.type || null },
      queryParamsHandling: 'merge'
    });
  }

  selectType(value: string): void {
    this.type = value;
    this.submitSearch();
  }

  onPage(p: number): void {
    this.page = p;
    this.load();
  }

  currentTypeLabel(): string {
    return TYPES.find(t => t.value === this.type)?.label ?? 'All Resources';
  }

  /** Slice helper for the template — the first entry is the "All Resources" option. */
  get selectableTypes(): typeof TYPES {
    return TYPES.slice(1);
  }

  countFor(type: string): number {
    return this.categoryCounts().find(c => c.type === type)?.count ?? 0;
  }
}
