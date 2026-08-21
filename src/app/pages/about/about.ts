import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/api.service';
import { ProfileEntry } from '../../core/models/models';
import { FOUNDER } from '../../core/founder';
import { AvatarArt, PageBanner, SectionTitle } from '../../shared/components/ui';

@Component({
  selector: 'ts-about',
  standalone: true,
  imports: [RouterLink, PageBanner, SectionTitle, AvatarArt],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ts-page-banner
      heading="About Tarksanhita"
      lede="A centre for law, logic, debate and knowledge — established 2016." />

    <main class="section">
      <div class="container">
        <div class="grid3" style="grid-template-columns:minmax(0,2fr) minmax(0,1fr)">

          <div>
            <section class="panel">
              <div class="panel-head"><h2>Introduction</h2></div>
              <div class="panel-body prose">
                <p>
                  Tarksanhita &mdash; literally, a <em>compendium of reasoning</em> &mdash; was founded on a
                  practical observation. Legal education in India teaches the content of the law
                  thoroughly and the craft of arguing about it almost by accident. Students absorb
                  doctrine, then learn advocacy by watching, imitating and hoping.
                </p>
                <p>
                  The Centre was established to make that second half explicit. Argument construction,
                  burden allocation, fallacy identification and rebuttal are taught here as a
                  discipline, examined like any other subject, and applied to live legal controversy
                  rather than to abstract puzzles.
                </p>
                <p>
                  Everything else follows from that commitment: a curriculum that pairs every
                  doctrinal course with an adversarial exercise, a research programme that publishes
                  its methods alongside its conclusions, a debating format with written adjudication
                  and a right of appeal, and a library open to every enrolled learner without
                  gatekeeping.
                </p>
              </div>
            </section>

            <section class="panel">
              <div class="panel-head"><h2>Vision &amp; Mission</h2></div>
              <div class="panel-body prose">
                <h3>Our Vision</h3>
                <p>
                  To become the foremost Indian forum where law, logic and public reasoning meet &mdash;
                  a place practitioners consult, scholars publish in, and students are formed by.
                </p>
                <h3>Our Mission</h3>
                <p>
                  To cultivate jurists, scholars and citizens who reason from evidence, argue in good
                  faith and hold their own conclusions to the same scrutiny they apply to others'.
                </p>
                <div class="pillars">
                  <div class="pillar"><b>Rigour</b><span>No claim without a source; no source without scrutiny.</span></div>
                  <div class="pillar"><b>Access</b><span>Fee waivers, open digital resources, no gatekeeping.</span></div>
                  <div class="pillar"><b>Integrity</b><span>Published ethics and conflict-of-interest norms.</span></div>
                  <div class="pillar"><b>Openness</b><span>Reasons published; decisions appealable.</span></div>
                </div>
              </div>
            </section>

            <section class="panel">
              <div class="panel-head"><h2>Founder's Message</h2></div>
              <div class="panel-body">
                <div class="founder">
                  <div class="founder-photo">
                    <img [src]="founder.photo" [alt]="founder.name || founder.role" />
                  </div>
                  <div>
                    <blockquote>
                      @for (paragraph of founder.message; track $index) {
                        <p>{{ paragraph }}</p>
                      }
                    </blockquote>
                    @if (founder.signOff) {
                      <div class="signoff">{{ founder.signOff }}</div>
                    }
                    <div class="founder-attrib">
                      @if (founder.name) {
                        <div class="founder-name">{{ founder.name }}</div>
                      } @else {
                        <div class="founder-name"><span class="name-pending">Name to be added</span></div>
                      }
                      <div class="founder-role">{{ founder.role }}</div>
                      @if (founder.credentials) {
                        <div class="founder-cred">{{ founder.credentials }}</div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside>
            <section class="panel">
              <div class="panel-head"><h3>At a Glance</h3></div>
              <div class="panel-body">
                <ul class="link-list">
                  <li><a routerLink="/academics">Programmes &amp; departments</a></li>
                  <li><a routerLink="/research">Four standing research centres</a></li>
                  <li><a routerLink="/debates">Adjudicated debate programme</a></li>
                  <li><a routerLink="/library">Open digital library</a></li>
                  <li><a routerLink="/faculty">Faculty directory</a></li>
                  <li><a routerLink="/contact">Contact the Centre</a></li>
                </ul>
              </div>
              <div class="stat-row">
                <div class="stat"><b>2016</b><small>Established</small></div>
                <div class="stat"><b>9</b><small>Subject Clusters</small></div>
                <div class="stat"><b>4</b><small>Research Centres</small></div>
                <div class="stat"><b>2</b><small>Peer-Reviewed Journals</small></div>
              </div>
            </section>

            <div class="side-note">
              <b>Recognition</b>
              The Centre publishes its affiliation agreements, annual report and audited accounts.
              Copies are available from the Registrar on request.
            </div>
          </aside>

        </div>
      </div>
    </main>

    <section class="section alt">
      <div class="container">
        <ts-section-title
          kicker="Leadership"
          heading="Governing Council"
          lede="The Council sets academic policy, approves the annual budget and appoints external reviewers." />

        <div class="acad-grid">
          @for (person of people(); track person.id) {
            <div class="profile-card">
              <div class="role">{{ person.designation }}</div>
              <div class="ph">
                @if (person.photoUrl) {
                  <img [src]="person.photoUrl" [alt]="person.fullName" style="width:100%;height:100%;object-fit:cover" />
                } @else {
                  <ts-avatar-art [name]="person.fullName" />
                }
              </div>
              <h4>{{ person.fullName }}</h4>
              <div class="qual">{{ person.qualifications }}</div>
              <p>{{ person.shortBio }}</p>
              <a class="btn btn-navy btn-sm" [routerLink]="['/faculty', person.slug]">View Profile</a>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class AboutPage implements OnInit {
  private readonly content = inject(ContentService);

  readonly founder = FOUNDER;
  readonly people = signal<ProfileEntry[]>([]);

  ngOnInit(): void {
    this.content.for<ProfileEntry>('profiles').list({ pageSize: 8 }).subscribe({
      next: res => this.people.set(res.items),
      error: () => this.people.set([])
    });
  }
}
