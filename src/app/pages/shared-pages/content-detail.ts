import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/api.service';
import { ContentEntity } from '../../core/models/models';
import { EmptyState, LoadingState, PageBanner } from '../../shared/components/ui';

/**
 * Generic detail view. Records differ in which fields they carry, so the template
 * asks for fields by name and simply omits the ones a given record does not have.
 */
@Component({
  selector: 'ts-content-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, PageBanner, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (item(); as record) {
      <ts-page-banner
        [heading]="record.title"
        [parentLabel]="section()"
        [parentLink]="parent()" />

      <main class="section">
        <div class="container" style="max-width:900px">
          <article class="panel">
            <div class="panel-head">
              <h2>{{ section() }}</h2>
              <span class="more">{{ dateValue(record) | date: 'dd MMMM y' }}</span>
            </div>

            <div class="panel-body prose">
              @if (field(record, 'referenceNo')) {
                <p class="muted"><b>Reference:</b> {{ field(record, 'referenceNo') }}</p>
              }
              @if (field(record, 'department')) {
                <p class="muted"><b>Issued by:</b> {{ field(record, 'department') }}</p>
              }
              @if (field(record, 'venue')) {
                <p class="muted"><b>Venue:</b> {{ field(record, 'venue') }}</p>
              }
              @if (field(record, 'designation')) {
                <p class="muted"><b>Designation:</b> {{ field(record, 'designation') }} &mdash; {{ field(record, 'qualifications') }}</p>
              }
              @if (list(record, 'authors').length) {
                <p class="muted"><b>Authors:</b> {{ list(record, 'authors').join(', ') }}</p>
              }
              @if (field(record, 'citation')) {
                <p class="muted"><b>Citation:</b> {{ field(record, 'citation') }}</p>
              }

              @if (summary(record)) {
                <p style="font-size:1rem;color:var(--navy-800);font-weight:500">{{ summary(record) }}</p>
              }

              @for (paragraph of paragraphs(record); track $index) {
                <p>{{ paragraph }}</p>
              }

              @if (list(record, 'keyProvisions').length) {
                <h3>Key Provisions</h3>
                <ul class="link-list">
                  @for (provision of list(record, 'keyProvisions'); track provision) {
                    <li><span style="padding:6px 0;display:block">{{ provision }}</span></li>
                  }
                </ul>
              }

              @if (list(record, 'landmarkCases').length) {
                <h3>Landmark Cases</h3>
                <ul class="link-list">
                  @for (judgment of list(record, 'landmarkCases'); track judgment) {
                    <li><span style="padding:6px 0;display:block">{{ judgment }}</span></li>
                  }
                </ul>
              }

              @if (record.tags.length) {
                <div class="flex flex-wrap gap-8" style="margin-top:18px">
                  @for (tag of record.tags; track tag) {
                    <span class="badge badge-outline">{{ tag }}</span>
                  }
                </div>
              }
            </div>
          </article>

          <a class="btn btn-ghost" [routerLink]="parent()">&#10094; Back to {{ section() }}</a>
        </div>
      </main>
    } @else if (loading()) {
      <main class="section"><div class="container"><ts-loading-state [count]="10" /></div></main>
    } @else {
      <main class="section">
        <div class="container">
          <ts-empty-state
            heading="Record not found"
            body="This item may have been withdrawn or the address may be incorrect." />
          <div class="text-center" style="margin-top:18px">
            <a class="btn btn-navy" [routerLink]="parent()">Back to {{ section() }}</a>
          </div>
        </div>
      </main>
    }
  `
})
export class ContentDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly content = inject(ContentService);

  readonly item = signal<ContentEntity | null>(null);
  readonly loading = signal(true);
  readonly section = signal('');
  readonly parent = signal('/');

  ngOnInit(): void {
    const data = this.route.snapshot.data;
    this.section.set((data['section'] as string) ?? 'Back');
    this.parent.set((data['parent'] as string) ?? '/');

    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (!slug) return;

      this.loading.set(true);
      this.content.for<ContentEntity>(data['resource'] as string).bySlug(slug).subscribe({
        next: record => {
          this.item.set(record);
          this.loading.set(false);
        },
        error: () => {
          this.item.set(null);
          this.loading.set(false);
        }
      });
    });
  }

  // ---- field helpers: records vary by type, so read defensively ----

  private raw(record: ContentEntity): Record<string, unknown> {
    return record as unknown as Record<string, unknown>;
  }

  field(record: ContentEntity, key: string): string {
    const value = this.raw(record)[key];
    return typeof value === 'string' ? value : '';
  }

  list(record: ContentEntity, key: string): string[] {
    const value = this.raw(record)[key];
    return Array.isArray(value) ? (value as string[]) : [];
  }

  summary(record: ContentEntity): string {
    return this.field(record, 'summary')
      || this.field(record, 'abstract')
      || this.field(record, 'description')
      || this.field(record, 'shortBio');
  }

  paragraphs(record: ContentEntity): string[] {
    const body = this.field(record, 'body') || this.field(record, 'biography');
    return body ? body.split('\n').map(p => p.trim()).filter(Boolean) : [];
  }

  dateValue(record: ContentEntity): string {
    const r = this.raw(record);
    const candidates = ['noticeDate', 'publishedAt', 'startsAt', 'publishedOn', 'scheduledFor'];
    for (const key of candidates) {
      if (typeof r[key] === 'string') return r[key] as string;
    }
    return record.createdAt;
  }
}
