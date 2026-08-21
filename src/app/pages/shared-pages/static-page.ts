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
    title: 'Alumni',
    lede: 'The Tarksanhita Alumni Association keeps former students connected to the Centre, to each other and to the work.',
    sections: [
      {
        heading: 'Alumni Association',
        paragraphs: [
          'Membership is open to every person who has completed a certificate, diploma, postgraduate or doctoral programme at the Centre. There is no membership fee.',
          'The Association runs a mentoring scheme pairing recent graduates with practising members, maintains a searchable directory, and convenes an annual meet on the Saturday closest to Constitution Day.'
        ],
        bullets: [
          'Register as alumni and receive the quarterly newsletter',
          'Join the mentoring panel for current students',
          'Nominate a peer for the Distinguished Alumnus award',
          'Support a scholarship or endow a moot court prize'
        ]
      },
      {
        heading: 'Staying Involved',
        paragraphs: [
          'Alumni adjudicate at internal debates, sit on mock interview panels for the placement cell, and contribute case notes to the Centre\'s repository.',
          'Those wishing to teach a short module or supervise a dissertation should write to the Academic Head with a brief outline.'
        ]
      }
    ],
    cta: { label: 'Contact the Association', link: '/contact' }
  },

  careers: {
    title: 'Careers',
    lede: 'Academic, research and administrative appointments at the Centre, and placement support for our students.',
    sections: [
      {
        heading: 'Working at Tarksanhita',
        paragraphs: [
          'The Centre recruits faculty on the strength of teaching ability, published work and willingness to be argued with. Appointments are made against published criteria and every shortlisted candidate delivers an open lecture.',
          'Administrative and library appointments are advertised as they arise. All positions are open to applicants regardless of background, and the Centre operates a published equal-opportunity policy.'
        ],
        bullets: [
          'Faculty and visiting-faculty appointments',
          'Research fellowships and doctoral assistantships',
          'Library, examinations and administrative roles',
          'Internships for enrolled students'
        ]
      },
      {
        heading: 'Placement Cell',
        paragraphs: [
          'The placement cell coordinates internships and recruitment for students in their final year, maintains relationships with chambers, firms and public-interest organisations, and runs a preparation programme covering written assessment and interview.',
          'Current openings are posted to the notice board; students should register with the cell at the start of the academic year.'
        ]
      }
    ],
    cta: { label: 'View Current Notices', link: '/notices' }
  },

  admissions: {
    title: 'Admissions',
    lede: 'Applications for the 2026–27 academic session. Read the eligibility conditions before applying.',
    sections: [
      {
        heading: 'How to Apply',
        paragraphs: [
          'Applications are made online. Create an account, complete the form, upload the supporting documents listed against your chosen programme, and pay the application fee. An acknowledgement is issued immediately; the admission cell contacts shortlisted applicants directly.',
          'Applicants to postgraduate and doctoral programmes are additionally required to submit a writing sample and, for doctoral study, a research proposal of not more than 2,000 words.'
        ],
        bullets: [
          'Certificate and diploma programmes — rolling admission',
          'Postgraduate programmes — one intake, closing 30 September',
          'Doctoral programmes — proposal and interview',
          'Fee waivers available on a merit-cum-means basis'
        ]
      },
      {
        heading: 'Documents Required',
        paragraphs: [
          'Proof of identity, evidence of prior qualification, transcripts, and a passport-size photograph. Applicants claiming a fee waiver should attach the income declaration prescribed in the prospectus.',
          'Original documents are verified at enrolment. An offer made on the basis of a misdescription is withdrawn.'
        ]
      },
      {
        heading: 'Admission Helpdesk',
        paragraphs: [
          'Counselling is available on working days between 10:00 and 17:00 IST, in person at the admissions office or by telephone. Written queries are answered within two working days.'
        ]
      }
    ],
    cta: { label: 'Contact the Admissions Cell', link: '/contact' }
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
