import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from './top-bar';
import { SiteHeader } from './site-header';
import { MainNav } from './main-nav';
import { NewsTicker } from './news-ticker';
import { SiteFooter } from './site-footer';

/**
 * The institutional shell: utility bar, masthead, navigation, ticker, page
 * content and footer. Every public route renders inside this component.
 */
@Component({
  selector: 'ts-public-layout',
  standalone: true,
  imports: [RouterOutlet, TopBar, SiteHeader, MainNav, NewsTicker, SiteFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#main">Skip to main content</a>

    <ts-top-bar />
    <ts-site-header />
    <ts-main-nav />
    <ts-news-ticker />

    <div id="main">
      <router-outlet />
    </div>

    <ts-site-footer />

    <button
      type="button"
      class="to-top"
      [class.show]="showTop()"
      (click)="scrollTop()"
      aria-label="Back to top">&#9650;</button>
  `
})
export class PublicLayout {
  readonly showTop = signal(false);

  constructor() {
    window.addEventListener('scroll', () => this.showTop.set(window.scrollY > 420), { passive: true });
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
