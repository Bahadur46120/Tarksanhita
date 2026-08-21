import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Small presentational building blocks shared across pages. Grouped in one file
 * because each is a handful of lines and they are almost always imported together.
 */

// ---------------------------------------------------------------- page banner

@Component({
  selector: 'ts-page-banner',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-banner">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          @if (parentLabel()) {
            <span><a [routerLink]="parentLink()">{{ parentLabel() }}</a></span>
          }
          <span>{{ heading() }}</span>
        </nav>
        <h1>{{ heading() }}</h1>
        @if (lede()) {
          <p class="lede">{{ lede() }}</p>
        }
      </div>
    </div>
  `
})
export class PageBanner {
  readonly heading = input.required<string>();
  readonly lede = input<string>('');
  readonly parentLabel = input<string>('');
  readonly parentLink = input<string>('/');
}

// ---------------------------------------------------------------- section title

@Component({
  selector: 'ts-section-title',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="sec-title">
      @if (kicker()) { <div class="kicker">{{ kicker() }}</div> }
      <h2>{{ heading() }}</h2>
      <div class="rule"></div>
      @if (lede()) { <p>{{ lede() }}</p> }
    </div>
  `
})
export class SectionTitle {
  readonly heading = input.required<string>();
  readonly kicker = input<string>('');
  readonly lede = input<string>('');
}

// ---------------------------------------------------------------- pagination

@Component({
  selector: 'ts-pager',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (totalPages() > 1) {
      <div class="pager" role="navigation" aria-label="Pagination">
        <button type="button" [disabled]="page() === 1" (click)="pick(page() - 1)">&#10094; Prev</button>

        @for (p of windowPages(); track p) {
          <button type="button" [class.active]="p === page()" (click)="pick(p)">{{ p }}</button>
        }

        <button type="button" [disabled]="page() === totalPages()" (click)="pick(page() + 1)">Next &#10095;</button>
        <span class="count">{{ total() }} item{{ total() === 1 ? '' : 's' }}</span>
      </div>
    }
  `
})
export class Pager {
  readonly page = input.required<number>();
  readonly totalPages = input.required<number>();
  readonly total = input<number>(0);
  readonly pageChange = output<number>();

  /** Shows at most seven page buttons centred on the current page. */
  windowPages(): number[] {
    const last = this.totalPages();
    const current = this.page();
    const span = 7;

    let start = Math.max(1, current - Math.floor(span / 2));
    const end = Math.min(last, start + span - 1);
    start = Math.max(1, end - span + 1);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  pick(p: number): void {
    if (p < 1 || p > this.totalPages() || p === this.page()) return;
    this.pageChange.emit(p);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }
}

// ---------------------------------------------------------------- states

@Component({
  selector: 'ts-empty-state',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="state">
      <b>{{ heading() }}</b>
      {{ body() }}
    </div>
  `
})
export class EmptyState {
  readonly heading = input<string>('Nothing to show yet');
  readonly body = input<string>('There are no published records in this section at the moment.');
}

@Component({
  selector: 'ts-loading-state',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [attr.aria-busy]="true" aria-live="polite">
      <span class="sr-only">Loading…</span>
      @for (row of rows; track $index) {
        <div class="skeleton sk-line" [style.width]="$index % 3 === 2 ? '55%' : '100%'"></div>
      }
    </div>
  `
})
export class LoadingState {
  readonly count = input<number>(6);
  get rows(): unknown[] {
    return Array.from({ length: this.count() });
  }
}

// ---------------------------------------------------------------- placeholder art

/**
 * Deterministic decorative artwork for records that have no uploaded image.
 * The same seed always produces the same gradient, so a card does not change
 * appearance between visits.
 */
@Component({
  selector: 'ts-placeholder-art',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg [attr.viewBox]="'0 0 320 180'" preserveAspectRatio="xMidYMid slice" role="img"
         [attr.aria-label]="label() || 'Decorative illustration'">
      <defs>
        <linearGradient [attr.id]="gradientId" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" [attr.stop-color]="from" />
          <stop offset="1" [attr.stop-color]="to" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" [attr.fill]="'url(#' + gradientId + ')'" />
      <g stroke="#c9a227" fill="none" stroke-width="2" opacity="0.9">
        <path d="M110 132h100M160 48v80M160 62l-38 11 38-11 38 11" />
        <path d="M122 73l-18 34h36zM198 73l-18 34h36z" />
      </g>
      <circle [attr.cx]="dotX" cy="42" r="20" fill="#c9a227" opacity="0.16" />
    </svg>
  `,
  styles: [':host{display:block;width:100%;height:100%} svg{width:100%;height:100%;display:block}']
})
export class PlaceholderArt {
  readonly seed = input<string>('tarksanhita');
  readonly label = input<string>('');

  private static readonly PAIRS: ReadonlyArray<[string, string]> = [
    ['#102743', '#1e4a7a'],
    ['#0a1a2f', '#17395f'],
    ['#17395f', '#061224'],
    ['#102743', '#0a1a2f'],
    ['#061224', '#1e4a7a']
  ];

  private get hash(): number {
    const s = this.seed();
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h;
  }

  get from(): string { return PlaceholderArt.PAIRS[this.hash % PlaceholderArt.PAIRS.length][0]; }
  get to(): string { return PlaceholderArt.PAIRS[this.hash % PlaceholderArt.PAIRS.length][1]; }
  get dotX(): number { return 40 + (this.hash % 240); }
  get gradientId(): string { return `ph-${this.hash.toString(36)}`; }
}

// ---------------------------------------------------------------- profile card

@Component({
  selector: 'ts-avatar-art',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 100 100" role="img" [attr.aria-label]="(name() || 'Profile') + ' portrait placeholder'">
      <defs>
        <linearGradient [attr.id]="id" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#17395f" />
          <stop offset="1" stop-color="#0a1a2f" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" [attr.fill]="'url(#' + id + ')'" />
      <circle cx="50" cy="38" r="17" fill="none" stroke="#c9a227" stroke-width="2.4" />
      <path d="M20 92a30 30 0 0160 0" fill="none" stroke="#c9a227" stroke-width="2.4" />
    </svg>
  `,
  styles: [':host{display:block;width:100%;height:100%} svg{width:100%;height:100%;display:block}']
})
export class AvatarArt {
  readonly name = input<string>('');
  get id(): string {
    const s = this.name() || 'avatar';
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0;
    return `av-${h.toString(36)}`;
  }
}
