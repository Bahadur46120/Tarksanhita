import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { HomePayload } from '../../core/models/models';
import { HeroCarousel } from '../../shared/components/hero-carousel';
import { AvatarArt, EmptyState, LoadingState, PlaceholderArt } from '../../shared/components/ui';
import { QUICK_LINKS } from '../../layout/nav.data';

interface WelcomeTab {
  key: string;
  label: string;
}

/**
 * The institutional overview page: a three-column body (information panel, main
 * content, profile column) followed by full-width academic, debate, research,
 * library and student sections. All dynamic content arrives from /api/home in a
 * single request.
 *
 * This was the original homepage; the debate forum now occupies '/' and this
 * lives at '/institution'.
 */
@Component({
  selector: 'ts-institution',
  standalone: true,
  imports: [RouterLink, DatePipe, DecimalPipe, HeroCarousel, PlaceholderArt, AvatarArt, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './institution.html'
})
export class InstitutionPage implements OnInit {
  private readonly api = inject(ApiService);

  readonly data = signal<HomePayload | null>(null);
  readonly loading = signal(true);
  readonly failed = signal(false);

  readonly quickLinks = QUICK_LINKS;

  readonly tabs: WelcomeTab[] = [
    { key: 'about', label: 'About' },
    { key: 'mission', label: 'Our Mission' },
    { key: 'vision', label: 'Our Vision' },
    { key: 'excellence', label: 'Standards of Debate' },
    { key: 'research', label: 'Legal Research' },
    { key: 'debate', label: 'Debate & Logic' }
  ];
  readonly activeTab = signal('about');

  readonly notices = computed(() => this.data()?.notices ?? []);
  readonly news = computed(() => this.data()?.news ?? []);
  readonly events = computed(() => this.data()?.events ?? []);
  readonly debates = computed(() => this.data()?.debates ?? []);
  readonly profiles = computed(() => this.data()?.profiles ?? []);
  readonly topics = computed(() => this.data()?.topics ?? []);
  readonly stats = computed(() => this.data()?.stats);

  /** Notices are duplicated so the vertical marquee loops without a visible seam. */
  readonly noticeLoop = computed(() => {
    const list = this.notices();
    return list.length > 3 ? [...list, ...list] : list;
  });

  ngOnInit(): void {
    this.api.get<HomePayload>('home').subscribe({
      next: payload => {
        this.data.set(payload);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.failed.set(true);
      }
    });
  }

  isNew(iso: string): boolean {
    const days = (Date.now() - new Date(iso).getTime()) / 86_400_000;
    return days <= 14;
  }

  /** Maps an icon key stored against a legal topic onto the shared SVG sprite. */
  iconFor(key: string | undefined): string {
    const known = ['scale', 'building', 'gavel', 'doc', 'chip', 'globe', 'bulb', 'shield', 'book', 'flask', 'people'];
    return `#i-${key && known.includes(key) ? key : 'scale'}`;
  }

  levelFor(index: number): string {
    return ['Moot Court', 'Policy Debate', 'Public Debate', 'Competition Round'][index % 4];
  }
}
