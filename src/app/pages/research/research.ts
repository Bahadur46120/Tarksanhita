import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService, ContentService } from '../../core/services/api.service';
import { ResearchPaper } from '../../core/models/models';
import { EmptyState, LoadingState, PageBanner, SectionTitle } from '../../shared/components/ui';

const TYPE_LABELS: Record<string, string> = {
  Journal: 'Journal Articles',
  WorkingPaper: 'Working Papers',
  Dissertation: 'Long-Form Studies',
  CaseStudy: 'Case Studies',
  Monograph: 'Monographs',
  FacultyPublication: 'Faculty Publications',
  StudentResearch: 'Member Research'
};

@Component({
  selector: 'ts-research',
  standalone: true,
  imports: [RouterLink, DatePipe, PageBanner, SectionTitle, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ts-page-banner
      heading="Research &amp; Publications"
      lede="Four standing research centres, two peer-reviewed journals, an open working-paper series and commentary written by the Centre's fellows and members." />

    <main class="section">
      <div class="container">

        <ts-section-title kicker="By Category" heading="Research Output" />

        <div class="tile-grid">
          @for (entry of counts(); track entry.key) {
            <a class="tile" routerLink="/publications" [queryParams]="{ type: entry.key }" style="text-decoration:none">
              <div class="k">{{ entry.label }}</div>
              <div class="v">{{ entry.count }}</div>
              <div class="s">View all &rarr;</div>
            </a>
          }
        </div>

        <ts-section-title kicker="Standing Centres" heading="Research Centres"
          lede="Each centre runs a working-paper series, an annual call for papers and a public lecture series." />

        <div class="acad-grid">
          <div class="acad-card">
            <div class="ic"><svg><use href="#i-building" /></svg></div>
            <h4>Constitutional Studies</h4>
            <p>Fundamental rights, federalism, judicial review and the limits of the amending power.</p>
          </div>
          <div class="acad-card">
            <div class="ic"><svg><use href="#i-gavel" /></svg></div>
            <h4>Criminal Justice</h4>
            <p>Sentencing, evidence, pre-trial detention and the empirical study of reported judgments.</p>
          </div>
          <div class="acad-card">
            <div class="ic"><svg><use href="#i-chip" /></svg></div>
            <h4>Technology &amp; Law</h4>
            <p>Data protection, algorithmic accountability, platform liability and digital evidence.</p>
          </div>
          <div class="acad-card">
            <div class="ic"><svg><use href="#i-globe" /></svg></div>
            <h4>Human Rights</h4>
            <p>Constitutional and international human rights, legal aid and access-to-justice research.</p>
          </div>
        </div>

      </div>
    </main>

    <section class="section alt">
      <div class="container">
        <ts-section-title kicker="Recently Published" heading="Latest Papers" />

        @if (loading()) {
          <ts-loading-state [count]="8" />
        } @else if (!papers().length) {
          <ts-empty-state heading="No papers published yet" body="The repository will list papers as they are released." />
        } @else {
          <div class="table-scroll">
            <table class="ts-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Authors</th>
                  <th>Type</th>
                  <th>Centre</th>
                  <th>Published</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                @for (paper of papers(); track paper.id) {
                  <tr>
                    <td><a [routerLink]="['/research', paper.slug]"><b>{{ paper.title }}</b></a></td>
                    <td>{{ paper.authors.join(', ') }}</td>
                    <td><span class="badge badge-outline">{{ label(paper.paperType) }}</span></td>
                    <td>{{ paper.researchCentre }}</td>
                    <td>{{ paper.publishedOn | date: 'MMM y' }}</td>
                    <td class="actions"><a class="btn btn-ghost btn-sm" [routerLink]="['/research', paper.slug]">Read</a></td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          <div class="text-center" style="margin-top:24px">
            <a class="btn btn-navy" routerLink="/publications">All Publications</a>
            <a class="btn btn-ghost" routerLink="/case-studies">Case Studies</a>
            <a class="btn btn-ghost" routerLink="/articles">Articles &amp; Commentary</a>
          </div>
        }
      </div>
    </section>
  `
})
export class ResearchPage implements OnInit {
  private readonly api = inject(ApiService);
  private readonly content = inject(ContentService);

  readonly papers = signal<ResearchPaper[]>([]);
  readonly counts = signal<{ key: string; label: string; count: number }[]>([]);
  readonly loading = signal(true);

  ngOnInit(): void {
    this.api.get<Record<string, number>>('research/summary').subscribe({
      next: summary => this.counts.set(
        Object.entries(summary).map(([key, count]) => ({ key, label: TYPE_LABELS[key] ?? key, count }))
      ),
      error: () => this.counts.set([])
    });

    this.content.for<ResearchPaper>('research').list({ pageSize: 10 }).subscribe({
      next: res => {
        this.papers.set(res.items);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  label(type: string): string {
    return TYPE_LABELS[type] ?? type;
  }
}
