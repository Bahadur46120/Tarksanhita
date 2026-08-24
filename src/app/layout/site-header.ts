import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiService } from '../core/services/ui.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'ts-site-header',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="masthead">
      <div class="container">
        <a class="brand-mark" routerLink="/" aria-label="Tarksanhita home">
          <img src="assets/brand/tarksanhita-logo.jpeg"
               alt="Tarksanhita emblem — scales of justice above an open book" />
        </a>

        <div class="brand-text">
          <div class="name">TARK<span>SANHITA</span></div>
          <div class="tagline">{{ tagline }}</div>
          <div class="rule"></div>
          <div class="subtitle">{{ subtitle }}</div>
          <div class="devanagari">तर्कसंहिता &mdash; विधि, तर्क एवं ज्ञान केन्द्र</div>
        </div>

        <div class="head-right">
          <div class="accred">
            <div class="seal">TS</div>
            <div class="txt">
              <b>Registered Institution</b>
              <small>Estd. 2016 &middot; Reg. No. TS/2016/0421</small>
            </div>
          </div>

          <div class="a11y" role="group" aria-label="Accessibility controls">
            <span class="lbl">Text size</span>
            <button type="button" (click)="ui.changeFont(-1)" aria-label="Decrease text size">A&minus;</button>
            <button type="button" (click)="ui.changeFont(0)" aria-label="Reset text size">A</button>
            <button type="button" (click)="ui.changeFont(1)" aria-label="Increase text size">A+</button>
            <button type="button"
                    [class.active]="ui.highContrast()"
                    (click)="ui.toggleContrast()"
                    aria-label="Toggle high contrast"
                    title="High contrast">&#9680;</button>
            <button type="button" (click)="readAloud()" aria-label="Screen reader mode" title="Read page intro">&#9834;</button>
          </div>
        </div>
      </div>
    </header>
  `
})
export class SiteHeader {
  readonly ui = inject(UiService);
  readonly tagline = environment.tagline;
  readonly subtitle = environment.subtitle;

  readAloud(): void {
    this.ui.speak(
      'Tarksanhita. The Debate on Logic. Centre for Law, Logic, Debate and Knowledge. ' +
      'Use the main navigation to reach debates, events, the library, notices and the sections about the Centre.'
    );
  }
}
