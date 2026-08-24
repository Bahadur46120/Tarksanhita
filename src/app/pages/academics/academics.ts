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
      heading="What the Centre Runs"
      lede="Debate formats, moot courts, competitions, lectures and conferences — organised across nine subject benches from which every motion is drawn." />

    <main class="section">
      <div class="container">

        @if (loading()) {
          <ts-loading-state [count]="8" />
        } @else if (!topics().length) {
          <ts-empty-state heading="Subject benches are being published" body="The benches and the motions drawn from them will appear here shortly." />
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
          kicker="How a Motion Runs"
          heading="Formats &amp; Adjudication"
          lede="Every motion is published in advance, argued under a recorded rulebook and decided with written reasons." />

        <div class="res-grid">
          <div class="res-item"><div class="n">01</div><h4>Motions</h4><p>Drawn from live legal and policy controversy, published with a briefing pack and reading list.</p></div>
          <div class="res-item"><div class="n">02</div><h4>Moot Courts</h4><p>Problem, memorials and oral rounds before a bench, with the same discipline of citation as a court.</p></div>
          <div class="res-item"><div class="n">03</div><h4>Adjudication Standards</h4><p>Speakers scored against published criteria; every panel gives written reasons, and decisions may be appealed.</p></div>
          <div class="res-item"><div class="n">04</div><h4>Lectures &amp; Conferences</h4><p>A standing lecture series, an annual national conference on legal reasoning, and invited round tables.</p></div>
        </div>

        <div class="text-center" style="margin-top:26px">
          <a class="btn btn-gold" routerLink="/admissions">Become a Member</a>
          <a class="btn btn-ghost" routerLink="/faculty">Faculty Directory</a>
          <a class="btn btn-ghost" routerLink="/notices">Notices &amp; Circulars</a>
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
    return ['Moot Court', 'Policy Debate', 'Public Debate', 'Competition Round'][index % 4];
  }

  duration(index: number): string {
    return ['Adjudicated', 'Written reasons', 'Open to the public', 'Members only'][index % 4];
  }
}
