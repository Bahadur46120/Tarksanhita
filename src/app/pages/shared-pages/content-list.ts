import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/api.service';
import { ContentEntity, PagedResult, QueryParams } from '../../core/models/models';
import { EmptyState, PageBanner, Pager, PlaceholderArt } from '../../shared/components/ui';

interface FilterOption {
  label: string;
  value: string;
}

interface ListConfig {
  resource: string;
  kind: string;
  title: string;
  lede?: string;
  filters?: FilterOption[];
  fixedCategory?: string;
}

/**
 * One listing component serving every section that shows a paged list of records
 * (notices, news, events, publications, topics, faculty, articles). The section is
 * described entirely by route `data`, so adding a new one means adding a route.
 */
@Component({
  selector: 'ts-content-list',
  standalone: true,
  imports: [RouterLink, DatePipe, FormsModule, PageBanner, Pager, EmptyState, PlaceholderArt],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './content-list.html'
})
export class ContentListPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly content = inject(ContentService);

  readonly config = signal<ListConfig>({ resource: 'notices', kind: 'notice', title: '' });
  readonly result = signal<PagedResult<ContentEntity> | null>(null);
  readonly loading = signal(true);

  search = '';
  category = '';
  page = 1;

  readonly items = computed(() => this.result()?.items ?? []);
  readonly totalPages = computed(() => this.result()?.totalPages ?? 0);
  readonly total = computed(() => this.result()?.totalCount ?? 0);

  ngOnInit(): void {
    // Route data changes when navigating between two sections that share this
    // component (for example /notices to /news), so react rather than read once.
    this.route.data.subscribe(data => {
      this.config.set(data as unknown as ListConfig);
      this.page = 1;
      this.load();
    });

    this.route.queryParams.subscribe(params => {
      const incoming = (params['search'] as string) ?? '';
      if (incoming !== this.search) {
        this.search = incoming;
        this.page = 1;
        this.load();
      }
    });
  }

  load(): void {
    const cfg = this.config();
    this.loading.set(true);

    const query: QueryParams = {
      page: this.page,
      pageSize: 12,
      search: this.search || undefined,
      category: cfg.fixedCategory ?? (this.category || undefined)
    };

    this.content.for<ContentEntity>(cfg.resource).list(query).subscribe({
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

  onFilter(value: string): void {
    this.category = value;
    this.page = 1;
    this.load();
  }

  onPage(p: number): void {
    this.page = p;
    this.load();
  }

  detailLink(item: ContentEntity): unknown[] {
    return [`/${this.routeSegment()}`, item.slug];
  }

  /** Maps an API resource onto the public route that renders its detail page. */
  private routeSegment(): string {
    const cfg = this.config();
    switch (cfg.resource) {
      case 'topics': return 'legal-topics';
      case 'profiles': return 'faculty';
      default: return cfg.resource;
    }
  }

  /** Best-effort date for a record whose date field differs by type. */
  dateOf(item: ContentEntity): string {
    const record = item as unknown as Record<string, string | undefined>;
    return record['noticeDate'] ?? record['publishedAt'] ?? record['startsAt']
      ?? record['publishedOn'] ?? record['scheduledFor'] ?? item.createdAt;
  }

  summaryOf(item: ContentEntity): string {
    const record = item as unknown as Record<string, string | undefined>;
    return record['summary'] ?? record['abstract'] ?? record['description'] ?? record['shortBio'] ?? '';
  }

  metaOf(item: ContentEntity): string {
    const record = item as unknown as Record<string, string | undefined>;
    return record['department'] ?? record['category'] ?? record['eventType']
      ?? record['paperType'] ?? record['resourceType'] ?? record['designation'] ?? '';
  }
}
