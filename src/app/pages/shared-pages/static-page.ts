import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PageBanner } from '../../shared/components/ui';

interface StaticSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

interface StaticContent {
  title: string;
  lede: string;
  sections: StaticSection[];
  cta?: { label: string; link: string };
}

/**
 * Informational pages whose content is editorial rather than database-driven.
 * Once the CMS holds these as pages, swap the lookup below for an API call —
 * the template does not change.
 */
const PAGES: Record<string, StaticContent> = {
  alumni: {
    title: 'Past Members',
    lede: 'The Tarksanhita Members\' Association keeps past speakers and adjudicators connected to the Centre, to each other and to the work.',
    sections: [
      {
        heading: 'Members\' Association',
        paragraphs: [
          'The Association is open to every person who has spoken, adjudicated or convened at the Centre, whether or not their membership is current. There is no fee to join it.',
          'It runs a pairing scheme that puts newer speakers alongside experienced counsel, maintains a searchable directory, and convenes an annual meet on the Saturday closest to Constitution Day.'
        ],
        bullets: [
          'Join the Association and receive the quarterly newsletter',
          'Sit on the pairing panel for newer speakers',
          'Nominate a peer for the Distinguished Speaker award',
          'Endow a moot court prize or a competition bursary'
        ]
      },
      {
        heading: 'Staying Involved',
        paragraphs: [
          'Past members adjudicate at internal debates, sit on the panels that set motions, and contribute case notes and commentary to the Centre\'s repository.',
          'Those wishing to deliver a lecture or convene a round table should write to the Convenor with a brief outline.'
        ]
      }
    ],
    cta: { label: 'Contact the Association', link: '/contact' }
  },

  careers: {
    title: 'Careers',
    lede: 'Research, adjudication and administrative appointments at the Centre, and the panels members can be appointed to.',
    sections: [
      {
        heading: 'Working at Tarksanhita',
        paragraphs: [
          'The Centre appoints fellows and adjudicators on the strength of published work, command of a subject bench and willingness to be argued with. Appointments are made against published criteria and every shortlisted candidate delivers an open lecture.',
          'Administrative and library appointments are advertised as they arise. All positions are open to applicants regardless of background, and the Centre operates a published equal-opportunity policy.'
        ],
        bullets: [
          'Research fellowships, resident and visiting',
          'Adjudicators and members of the moot court bench',
          'Library, events and administrative roles',
          'Editorial assistants for the journals and working-paper series'
        ]
      },
      {
        heading: 'Panels & Honorary Roles',
        paragraphs: [
          'Members in good standing may be appointed to the panels that draft motions, write briefing packs, adjudicate competition rounds or referee submissions to the journals. These roles are honorary; travel and entry costs are reimbursed.',
          'Openings are posted to the notice board. Expressions of interest may be sent at any time and are considered when a panel is next constituted.'
        ]
      }
    ],
    cta: { label: 'View Current Notices', link: '/notices' }
  },

  admissions: {
    title: 'Membership',
    lede: 'Join the Centre as a speaking member, an associate or a subscribing institution. Membership runs for the calendar year 2026–27.',
    sections: [
      {
        heading: 'How to Join',
        paragraphs: [
          'Applications are made online. Create an account, complete the membership form, upload the documents listed against the category you are applying under, and pay the annual subscription. An acknowledgement is issued immediately; the membership office writes to you once your category is confirmed.',
          'Anyone applying as a speaking member is asked for a short writing sample — a case note, a motion brief or a published piece — so that the convenors can place them on a suitable bench.'
        ],
        bullets: [
          'Speaking members — argue motions and enter competitions',
          'Associate members — attend debates, lectures and conferences',
          'Adjudicator panel — by nomination, after a written round',
          'Institutional subscription — for debating societies and chambers'
        ]
      },
      {
        heading: 'Documents Required',
        paragraphs: [
          'Proof of identity, a passport-size photograph, and — for the speaking category — the writing sample described above. Applicants seeking a concessional subscription should attach the income declaration set out in the Centre handbook.',
          'Originals are verified once, when the membership card is issued. A membership obtained on a misdescription is withdrawn.'
        ]
      },
      {
        heading: 'Membership Helpdesk',
        paragraphs: [
          'The membership office is open on working days between 10:00 and 17:00 IST, in person or by telephone, for help with joining a motion or registering for an event. Written queries are answered within two working days.'
        ]
      }
    ],
    cta: { label: 'Contact the Membership Office', link: '/contact' }
  }
};

@Component({
  selector: 'ts-static-page',
  standalone: true,
  imports: [RouterLink, PageBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (content(); as page) {
      <ts-page-banner [heading]="page.title" [lede]="page.lede" />

      <main class="section">
        <div class="container" style="max-width:920px">
          @for (section of page.sections; track section.heading) {
            <section class="panel">
              <div class="panel-head"><h2>{{ section.heading }}</h2></div>
              <div class="panel-body prose">
                @for (paragraph of section.paragraphs; track $index) {
                  <p>{{ paragraph }}</p>
                }
                @if (section.bullets?.length) {
                  <ul class="link-list" style="margin-top:8px">
                    @for (bullet of section.bullets; track bullet) {
                      <li><span style="padding:8px 0;display:block;font-size:.86rem">{{ bullet }}</span></li>
                    }
                  </ul>
                }
              </div>
            </section>
          }

          @if (page.cta) {
            <div class="text-center">
              <a class="btn btn-gold" [routerLink]="page.cta.link">{{ page.cta.label }}</a>
            </div>
          }
        </div>
      </main>
    }
  `
})
export class StaticPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  readonly content = signal<StaticContent | null>(null);

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const key = data['pageKey'] as string;
      this.content.set(PAGES[key] ?? null);
    });
  }
}
