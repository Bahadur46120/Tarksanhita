import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { Debate, HomePayload } from '../../core/models/models';
import { FOUNDER } from '../../core/founder';
import { EmptyState, LoadingState } from '../../shared/components/ui';

interface Chip {
  label: string;
  value: string;
}

/**
 * The debate forum homepage. Built around three actions — start a debate, join a
 * debate, explore topics — with the Centre's institutional material moved to
 * '/institution' and summarised at the foot of this page.
 */
@Component({
  selector: 'ts-home',
  standalone: true,
  imports: [RouterLink, DatePipe, DecimalPipe, FormsModule, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html'
})
export class HomePage implements OnInit {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  readonly auth = inject(AuthService);

  readonly founder = FOUNDER;

  /** Dateline for the front-page masthead. */
  readonly today = new Date();

  /**
   * Whether the optional banner photograph is present. It is assumed present so
   * the <img> is attempted; the tag's own error handler clears this when the file is
   * missing, and the banner falls back to its typographic form with no broken image.
   */
  readonly bannerPhoto = signal(true);

  readonly data = signal<HomePayload | null>(null);
  readonly loading = signal(true);
  readonly filter = signal('');

  /** Quick-start panel state. */
  quickMotion = '';
  quickTopic = '';

  readonly chips: Chip[] = [
    { label: 'All Motions', value: '' },
    { label: 'Live Now', value: 'Live' },
    { label: 'Opening Soon', value: 'Draft' },
    { label: 'Decided', value: 'Archived' }
  ];

  readonly debates = computed(() => this.data()?.debates ?? []);
  readonly topics = computed(() => this.data()?.topics ?? []);
  readonly notices = computed(() => this.data()?.notices?.slice(0, 5) ?? []);
  readonly news = computed(() => this.data()?.news?.slice(0, 3) ?? []);
  readonly events = computed(() => this.data()?.events?.slice(0, 4) ?? []);

  readonly visibleDebates = computed(() => {
    const all = this.debates();
    const f = this.filter();
    return f ? all.filter(d => d.status === f) : all;
  });

  /** The motion featured beside the hero copy — the busiest live one. */
  readonly featured = computed<Debate | null>(() => {
    const live = this.debates().filter(d => d.status === 'Live');
    const pool = live.length ? live : this.debates();
    if (!pool.length) return null;
    return [...pool].sort((a, b) => this.totalArguments(b) - this.totalArguments(a))[0];
  });

  /** Headline counters for the hero strip. */
  readonly stats = computed(() => {
    const all = this.debates();
    return {
      live: all.filter(d => d.status === 'Live').length,
      arguments: all.reduce((sum, d) => sum + this.totalArguments(d), 0),
      debaters: all.reduce((sum, d) => sum + d.participants.length, 0),
      topics: this.topics().length
    };
  });

  ngOnInit(): void {
    this.api.get<HomePayload>('home').subscribe({
      next: payload => {
        this.data.set(payload);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  countFor(value: string): number {
    return value ? this.debates().filter(d => d.status === value).length : this.debates().length;
  }

  totalArguments(debate: Debate): number {
    return debate.argumentCount + debate.counterArgumentCount;
  }

  /**
   * Share of contributions on each side, used by the balance meter. Falls back to
   * an even split when a motion has no arguments yet, so the bar never collapses.
   */
  forShare(debate: Debate): number {
    const total = this.totalArguments(debate);
    if (!total) return 50;
    return Math.round((debate.argumentCount / total) * 100);
  }

  statusLabel(debate: Debate): string {
    switch (debate.status) {
      case 'Draft': return 'Opening Soon';
      case 'Archived': return 'Decided';
      case 'Closed': return 'Closed';
      default: return 'Live';
    }
  }

  iconFor(key: string | undefined): string {
    const known = ['scale', 'building', 'gavel', 'doc', 'chip', 'globe', 'bulb', 'shield', 'book', 'flask', 'people'];
    return `#i-${key && known.includes(key) ? key : 'scale'}`;
  }

  /** Carries whatever the visitor typed into the full submission form. */
  startDebate(): void {
    void this.router.navigate(['/debates/start'], {
      queryParams: {
        motion: this.quickMotion.trim() || null,
        topic: this.quickTopic || null
      }
    });
  }
}
