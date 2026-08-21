import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountMenu } from './account-menu';

/**
 * The utility strip above the masthead. It carries only site search and the
 * account control; the standing links that used to sit here are reachable from
 * the main navigation and the footer.
 */
@Component({
  selector: 'ts-top-bar',
  standalone: true,
  imports: [FormsModule, AccountMenu],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="utility">
      <div class="container">
        <span class="spacer"></span>

        <form class="util-search" role="search" (ngSubmit)="search()">
          <label class="sr-only" for="site-search">Search the site</label>
          <input id="site-search" type="search" name="q" placeholder="Search…" [(ngModel)]="term" />
          <button type="submit" aria-label="Search">Go</button>
        </form>

        <ts-account-menu />
      </div>
    </div>
  `
})
export class TopBar {
  private readonly router = inject(Router);

  term = '';

  search(): void {
    const q = this.term.trim();
    if (q.length < 2) return;
    void this.router.navigate(['/notices'], { queryParams: { search: q } });
  }
}
