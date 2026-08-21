import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';

/**
 * Homepage highlight carousel. The seven slides are hand-drawn inline SVG so the
 * page carries no external image weight and stays crisp at any size; replace the
 * <svg> block of any slide with an <img> once photography is available.
 */
@Component({
  selector: 'ts-hero-carousel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="carousel" aria-roledescription="carousel" aria-label="Highlights">
      <div class="slides">


      <div class="slide" [class.active]="index() === 0" role="group" aria-label="1 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#061224"/><stop offset=".55" stop-color="#102743"/><stop offset="1" stop-color="#1e4a7a"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s1)"/>
          <g opacity=".12" stroke="#e8cd74" stroke-width="1"><path d="M0 340h800M0 300h800M0 260h800M0 220h800"/></g>
          <g stroke="#c9a227" fill="none" stroke-width="2.2">
            <path d="M120 330h560M150 330V160M210 330V160M270 330V160M530 330V160M590 330V160M650 330V160"/>
            <path d="M130 160h540L400 70 130 160z"/><path d="M110 342h580v14H110z"/>
            <path d="M340 330v-92a60 60 0 01120 0v92"/>
          </g>
          <circle cx="400" cy="256" r="17" fill="none" stroke="#e8cd74" stroke-width="2.2"/>
          <g fill="#e8cd74" opacity=".22"><circle cx="700" cy="80" r="52"/><circle cx="90" cy="360" r="34"/></g>
        </svg>
        <div class="slide-cap"><div class="k">The Campus</div><h3>A Home for Argument, Evidence and Enquiry</h3><p>Purpose-built halls, moot courts and a research library at the heart of the Tarksanhita academic block.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 1" role="group" aria-label="2 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s2" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#0a1a2f"/><stop offset="1" stop-color="#17395f"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s2)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M250 300h240M400 110v170M400 140l-92 26 92-26 92 26"/>
            <path d="M308 166l-44 84h88zM492 166l-44 84h88z"/>
            <path d="M264 250a44 44 0 0088 0M448 250a44 44 0 0088 0"/>
            <path d="M360 300h80v14h-80z"/>
          </g>
          <g stroke="#e8cd74" fill="none" stroke-width="2" opacity=".55"><path d="M120 350h180M120 350V300a30 30 0 0130-30h120M660 60v60"/></g>
          <g fill="#c9a227" opacity=".14"><circle cx="140" cy="120" r="58"/><circle cx="670" cy="330" r="44"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Legal Education</div><h3>Law Taught as a Discipline of Reasoning</h3><p>Doctrine, procedure and jurisprudence delivered through case method, clinic work and structured argument.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 2" role="group" aria-label="3 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#102743"/><stop offset="1" stop-color="#061224"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s3)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.4" stroke-linejoin="round">
            <path d="M330 330h140M370 330v-70h60v70M340 260h120l-12-40H352z"/>
            <circle cx="400" cy="180" r="26"/>
            <path d="M150 330h120M180 330v-60h60v60M170 270h80l-8-32h-64z"/><circle cx="210" cy="206" r="22"/>
            <path d="M530 330h120M560 330v-60h60v60M550 270h80l-8-32h-64z"/><circle cx="590" cy="206" r="22"/>
          </g>
          <g stroke="#e8cd74" stroke-width="1.8" fill="none" opacity=".6"><path d="M270 150h60M470 150h60M300 120v60M500 120v60"/></g>
          <g fill="#c9a227" opacity=".13"><circle cx="90" cy="90" r="46"/><circle cx="720" cy="120" r="60"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Debate &amp; Logic</div><h3>Motions Contested on Reason, Not Volume</h3><p>Weekly parliamentary and adjudicated debates on questions of constitutional and public importance.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 3" role="group" aria-label="4 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a1a2f"/><stop offset="1" stop-color="#1e4a7a"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s4)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M360 90h80M375 90v70l-52 116a22 22 0 0020 31h114a22 22 0 0020-31l-52-116V90"/>
            <path d="M338 246h124"/>
            <circle cx="390" cy="278" r="9"/><circle cx="424" cy="300" r="6"/><circle cx="404" cy="256" r="5"/>
          </g>
          <g stroke="#e8cd74" fill="none" stroke-width="2" opacity=".55">
            <circle cx="180" cy="160" r="42"/><path d="M212 192l40 40"/>
            <path d="M560 250h140M560 285h110M560 320h140"/>
          </g>
          <g fill="#c9a227" opacity=".12"><circle cx="660" cy="90" r="54"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Research</div><h3>Evidence-Led Legal Scholarship</h3><p>Doctrinal, empirical and comparative research across constitutional, criminal and technology law.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 4" role="group" aria-label="5 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s5" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#061224"/><stop offset="1" stop-color="#17395f"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s5)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.3" stroke-linejoin="round">
            <circle cx="250" cy="170" r="34"/><path d="M190 320a60 60 0 01120 0"/>
            <circle cx="400" cy="150" r="40"/><path d="M332 320a68 68 0 01136 0"/>
            <circle cx="552" cy="170" r="34"/><path d="M492 320a60 60 0 01120 0"/>
            <path d="M360 118h80l-40-24z"/>
          </g>
          <g stroke="#e8cd74" stroke-width="1.8" fill="none" opacity=".5"><path d="M120 340h560"/><path d="M660 120h80v54h-80z"/><path d="M660 120l40 24 40-24"/></g>
          <g fill="#c9a227" opacity=".12"><circle cx="110" cy="120" r="50"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Students</div><h3>A Community of Careful Thinkers</h3><p>Mentored cohorts, student-run journals, moot teams and an active grievance and welfare framework.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 5" role="group" aria-label="6 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s6" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#102743"/><stop offset="1" stop-color="#0a1a2f"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s6)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.2">
            <path d="M140 340h520M180 340V120h100v220M320 340V150h100v190M460 340V110h100v230M600 340V170h60v170"/>
            <path d="M180 180h100M180 240h100M320 210h100M320 270h100M460 170h100M460 230h100M460 290h100M600 230h60"/>
          </g>
          <g stroke="#e8cd74" fill="none" stroke-width="2.2" opacity=".8">
            <path d="M300 96h200M400 40v56M340 56h120"/>
          </g>
          <g fill="#c9a227" opacity=".12"><circle cx="700" cy="80" r="46"/><circle cx="90" cy="300" r="40"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Digital Library</div><h3>Bare Acts, Reports and Journals in One Place</h3><p>A curated collection of statutes, law reports, e-journals and study material, searchable end to end.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 6" role="group" aria-label="7 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s7" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a1a2f"/><stop offset=".6" stop-color="#17395f"/><stop offset="1" stop-color="#061224"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s7)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.2">
            <rect x="250" y="70" width="300" height="150" rx="4"/>
            <path d="M290 110h220M290 140h180M290 170h220"/>
            <path d="M160 300h480M160 340h480"/>
          </g>
          <g stroke="#e8cd74" fill="none" stroke-width="2" opacity=".7">
            <circle cx="220" cy="278" r="14"/><circle cx="330" cy="278" r="14"/><circle cx="440" cy="278" r="14"/><circle cx="550" cy="278" r="14"/>
            <circle cx="275" cy="320" r="14"/><circle cx="385" cy="320" r="14"/><circle cx="495" cy="320" r="14"/>
          </g>
          <g fill="#c9a227" opacity=".12"><circle cx="700" cy="330" r="50"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Seminars &amp; Conferences</div><h3>Public Reasoning, Publicly Conducted</h3><p>Guest lectures, doctrinal colloquia and national conferences open to students and practitioners.</p></div>
      </div>
      </div>

      <button type="button" class="car-btn car-prev" (click)="move(-1)" aria-label="Previous slide">&#10094;</button>
      <button type="button" class="car-btn car-next" (click)="move(1)" aria-label="Next slide">&#10095;</button>

      <div class="dots" role="tablist" aria-label="Choose slide">
        @for (dot of dots; track $index) {
          <button type="button"
                  role="tab"
                  [class.active]="index() === $index"
                  [attr.aria-selected]="index() === $index"
                  [attr.aria-label]="'Go to slide ' + ($index + 1)"
                  (click)="go($index)"></button>
        }
      </div>
    </section>
  `
})
export class HeroCarousel implements OnInit, OnDestroy {
  private static readonly COUNT = 7;
  private static readonly INTERVAL_MS = 6000;

  readonly index = signal(0);
  readonly dots = Array.from({ length: HeroCarousel.COUNT });

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.restart();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  move(direction: number): void {
    const next = (this.index() + direction + HeroCarousel.COUNT) % HeroCarousel.COUNT;
    this.go(next);
  }

  go(next: number): void {
    this.index.set(next);
    this.restart();
  }

  /** Restarts the timer on every interaction so a manual change gets a full dwell. */
  private restart(): void {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.move(1), HeroCarousel.INTERVAL_MS);
  }
}
