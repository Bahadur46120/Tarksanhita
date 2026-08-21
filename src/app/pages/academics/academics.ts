import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/api.service';
import { LegalTopic } from '../../core/models/models';
import { EmptyState, LoadingState, PageBanner, SectionTitle } from '../../shared/components/ui';

@Component({
  selector: 'ts-academics',
  standalone: true,
  imports: [RouterLink, PageBanner, SectionTitle, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ts-page-banner
      heading="Academics"
      lede="Certificate, diploma, postgraduate and doctoral programmes across nine subject clusters — each pairing doctrinal instruction with an examined argumentation component." />

    <main class="section">
      <div class="container">

        @if (loading()) {
          <ts-loading-state [count]="8" />
        } @else if (!topics().length) {
          <ts-empty-state heading="Programmes are being published" body="The academic catalogue will appear here shortly." />
        } @else {
          <div class="acad-grid">
            @for (topic of topics(); track topic.id) {
              <a class="acad-card" [routerLink]="['/legal-topics', topic.slug]">
                <div class="ic"><svg><use [attr.href]="iconFor(topic.iconKey)" /></svg></div>
                <h4>{{ topic.title }}</h4>
                <p>{{ topic.summary }}</p>
                <div class="meta">
                  <span>{{ level($index) }}</span>
                  <span>{{ duration($index) }}</span>
                </div>
              </a>
            }
          </div>
        }

      </div>
    </main>

    <section class="section alt">
      <div class="container">
        <ts-section-title
          kicker="How We Teach"
          heading="Academic Framework"
          lede="Assessment is continuous and the argumentation component is compulsory at every level." />

        <div class="res-grid">
          <div class="res-item"><div class="n">01</div><h4>Doctrinal Instruction</h4><p>Statute, precedent and constitutional text read closely, with published reading lists.</p></div>
          <div class="res-item"><div class="n">02</div><h4>Adversarial Exercise</h4><p>Every course carries a moot, oral defence or written adversarial submission.</p></div>
          <div class="res-item"><div class="n">03</div><h4>Continuous Assessment</h4><p>Written submissions, case commentary and oral defence, weighted against published rubrics.</p></div>
          <div class="res-item"><div class="n">04</div><h4>External Review</h4><p>Every course is reviewed by an outside panel once in three years.</p></div>
        </div>

        <div class="text-center" style="margin-top:26px">
          <a class="btn btn-gold" routerLink="/admissions">Apply for Admission</a>
          <a class="btn btn-ghost" routerLink="/faculty">Faculty Directory</a>
          <a class="btn btn-ghost" routerLink="/notices">Academic Notices</a>
        </div>
      </div>
    </section>
  `
})
export class AcademicsPage implements OnInit {
  private readonly content = inject(ContentService);

  readonly topics = signal<LegalTopic[]>([]);
  readonly loading = signal(true);

  ngOnInit(): void {
    this.content.for<LegalTopic>('topics').list({ pageSize: 24, sortBy: 'sortOrder', descending: false }).subscribe({
      next: res => {
        this.topics.set(res.items);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  iconFor(key: string | undefined): string {
    const known = ['scale', 'building', 'gavel', 'doc', 'chip', 'globe', 'bulb', 'shield', 'book', 'flask', 'people'];
    return `#i-${key && known.includes(key) ? key : 'scale'}`;
  }

  level(index: number): string {
    return ['Diploma · PG', 'PG · Doctoral', 'PG', 'Certificate · PG'][index % 4];
  }

  duration(index: number): string {
    return ['3–24 Months', '12–36 Months', '12–24 Months', '6–18 Months'][index % 4];
  }
}
