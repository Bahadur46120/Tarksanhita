import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../core/services/api.service';

interface TickerItem {
  id: string;
  title: string;
  slug: string;
  date: string;
}

/**
 * The scrolling announcement strip. Items are duplicated once so the CSS
 * translate(-50%) loop is seamless.
 */
@Component({
  selector: 'ts-news-ticker',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (items().length) {
      <div class="ticker" aria-label="Latest announcements">
        <span class="tag">Latest</span>
        <div class="ticker-viewport">
          <div class="ticker-track">
            @for (item of doubled(); track $index) {
              <a [routerLink]="['/notices', item.slug]">
                <span class="dot">&#9670;</span>{{ item.title }}
              </a>
            }
          </div>
        </div>
      </div>
    }
  `
})
export class NewsTicker implements OnInit {
  private readonly api = inject(ApiService);
  readonly items = signal<TickerItem[]>([]);

  ngOnInit(): void {
    this.api.get<TickerItem[]>('home/ticker').subscribe({
      next: list => this.items.set(list),
      // A missing ticker is not worth an error message; the strip simply hides.
      error: () => this.items.set([])
    });
  }

  doubled(): TickerItem[] {
    return [...this.items(), ...this.items()];
  }
}
