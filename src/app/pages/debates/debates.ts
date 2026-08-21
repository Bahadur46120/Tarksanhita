import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/api.service';
import { Debate } from '../../core/models/models';
import { EmptyState, LoadingState, PageBanner } from '../../shared/components/ui';

@Component({
  selector: 'ts-debates',
  standalone: true,
  imports: [RouterLink, DatePipe, PageBanner, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ts-page-banner
      heading="Debate &amp; Logic"
      lede="Motions are published in advance, argued under recorded rules, and decided by adjudicators who must give written reasons." />

    <section class="section deep">
      <div class="container">

        <div class="list-toolbar" style="background:rgba(255,255,255,.06);border-color:rgba(201,162,39,.3)">
          @for (option of statuses; track option.value) {
            <button type="button"
                    class="btn btn-sm"
                    [class.btn-gold]="status() === option.value"
                    [class.btn-ghost-light]="status() !== option.value"
                    (click)="setStatus(option.value)">{{ option.label }}</button>
          }
        </div>

        @if (loading()) {
          <ts-loading-state [count]="8" />
        } @else if (!debates().length) {
          <ts-empty-state heading="No motions in this category" body="Try another status, or check back when the next round is scheduled." />
        } @else {
          <div class="debate-grid">
            @for (debate of debates(); track debate.id) {
              <article class="debate-card">
                <div class="top">
                  <div>
                    <div class="topic">{{ debate.topic }}</div>
                    <h3>{{ debate.title }}</h3>
                  </div>
                  <span class="badge"
                        [class.badge-open]="debate.status === 'Live'"
                        [class.badge-gold]="debate.status === 'Draft'"
                        [class.badge-navy]="debate.status === 'Closed' || debate.status === 'Archived'">
                    {{ debate.status === 'Draft' ? 'Opening Soon' : debate.status }}
                  </span>
                </div>

                <div class="stance">
                  <div><b>For the Motion</b><p>{{ debate.forSummary }}</p></div>
                  <div class="against"><b>Against the Motion</b><p>{{ debate.againstSummary }}</p></div>
                </div>

                <div class="debate-meta">
                  <span><b>{{ debate.participants.length }}</b> participants</span>
                  <span><b>{{ debate.argumentCount }}</b> arguments</span>
                  <span><b>{{ debate.counterArgumentCount }}</b> counterarguments</span>
                  <span><svg width="13" height="13"><use href="#i-cal" /></svg> {{ debate.scheduledFor | date: 'dd MMM y' }}</span>
                </div>

                <a class="btn btn-gold btn-sm" [routerLink]="['/debates', debate.slug]">View Debate</a>
                @if (debate.discussionOpen) {
                  <a class="btn btn-ghost-light btn-sm" [routerLink]="['/debates', debate.slug]" fragment="discussion">Join Discussion</a>
                } @else {
                  <a class="btn btn-ghost-light btn-sm" [routerLink]="['/debates', debate.slug]" fragment="verdict">Read Verdict</a>
                }
              </article>
            }
          </div>
        }

      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="sec-title">
          <div class="kicker">How It Works</div>
          <h2>Format &amp; Adjudication</h2>
          <div class="rule"></div>
        </div>

        <div class="res-grid">
          <div class="res-item"><div class="n">01</div><h4>Published Motion</h4><p>Every motion is published with a definitional note at least seven days before the round.</p></div>
          <div class="res-item"><div class="n">02</div><h4>Recorded Rounds</h4><p>Speeches are timed and recorded; transcripts are added to the archive.</p></div>
          <div class="res-item"><div class="n">03</div><h4>Written Reasons</h4><p>Adjudicators publish reasons against the criteria in the rulebook.</p></div>
          <div class="res-item"><div class="n">04</div><h4>Right of Appeal</h4><p>Any decision may be taken to a review panel within fourteen days.</p></div>
        </div>
      </div>
    </section>
  `
})
export class DebatesPage implements OnInit {
  private readonly content = inject(ContentService);

  readonly debates = signal<Debate[]>([]);
  readonly loading = signal(true);
  readonly status = signal('');

  readonly statuses = [
    { label: 'All Motions', value: '' },
    { label: 'Live', value: 'Live' },
    { label: 'Opening Soon', value: 'Draft' },
    { label: 'Archived', value: 'Archived' }
  ];

  ngOnInit(): void {
    this.load();
  }

  setStatus(value: string): void {
    this.status.set(value);
    this.load();
  }

  private load(): void {
    this.loading.set(true);
    this.content.for<Debate>('debates')
      .list({ pageSize: 24, category: this.status() || undefined })
      .subscribe({
        next: res => {
          this.debates.set(res.items);
          this.loading.set(false);
        },
        error: () => {
          this.debates.set([]);
          this.loading.set(false);
        }
      });
  }
}
