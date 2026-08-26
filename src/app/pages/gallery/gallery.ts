import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EventItem, EventMedia, GalleryAlbum, PagedResult } from '../../core/models/models';
import { ContentService } from '../../core/services/api.service';
import { coverImage } from '../../core/services/event-media.service';
import { EmptyState, PageBanner, PlaceholderArt } from '../../shared/components/ui';

/** One tile on the Gallery page, whatever kind of record it came from. */
interface GalleryEntry {
  id: string;
  title: string;
  summary: string;
  kicker: string;
  date: string;
  link: unknown[];
  cover: string | null;
  photos: number;
  videos: number;
}

type Lens = 'all' | 'photo' | 'video';

/**
 * The Gallery landing page. Two kinds of record carry media — albums created in
 * the admin panel, and events with their own photographs — and both belong here,
 * so they are loaded together and shown as one wall of tiles.
 */
@Component({
  selector: 'ts-gallery',
  standalone: true,
  imports: [RouterLink, DatePipe, FormsModule, PageBanner, EmptyState, PlaceholderArt],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ts-page-banner
      heading="Gallery"
      lede="Photographs and video from debates, conferences, competitions and life at the Centre." />

    <main class="section">
      <div class="container">

        <div class="list-toolbar">
          <div class="field grow">
            <label for="gallery-search">Search</label>
            <input id="gallery-search"
                   type="search"
                   placeholder="Search albums and events…"
                   [(ngModel)]="search"
                   (input)="term.set(search)" />
          </div>

          <div class="gl-lenses" role="group" aria-label="Filter by media type">
            <button type="button" class="gl-lens" [class.on]="lens() === 'all'" (click)="lens.set('all')">
              All <span>{{ counts().all }}</span>
            </button>
            <button type="button" class="gl-lens" [class.on]="lens() === 'photo'" (click)="lens.set('photo')">
              Photographs <span>{{ counts().photo }}</span>
            </button>
            <button type="button" class="gl-lens" [class.on]="lens() === 'video'" (click)="lens.set('video')">
              Video <span>{{ counts().video }}</span>
            </button>
          </div>
        </div>

        @if (loading()) {
          <div class="news-grid">
            @for (skeleton of [1,2,3,4,5,6,7,8]; track skeleton) {
              <div class="news-card"><div class="skeleton sk-card"></div></div>
            }
          </div>
        } @else if (!visible().length) {
          <ts-empty-state
            heading="Nothing here yet"
            [body]="term() ? 'No album or event matched your search.' : 'Photographs and video will appear here as soon as they are published.'" />
        } @else {
          <div class="gl-grid">
            @for (entry of visible(); track entry.id) {
              <a class="gl-card" [routerLink]="entry.link">
                <div class="gl-shot">
                  @if (entry.cover) {
                    <img [src]="entry.cover" [alt]="entry.title" loading="lazy" decoding="async" />
                  } @else {
                    <ts-placeholder-art [seed]="entry.id" [label]="entry.title" />
                  }
                  <span class="gl-kicker">{{ entry.kicker }}</span>
                  <span class="gl-counts">
                    @if (entry.photos) { <b>{{ entry.photos }}</b> photo{{ entry.photos === 1 ? '' : 's' }} }
                    @if (entry.photos && entry.videos) { <i>·</i> }
                    @if (entry.videos) { <b>{{ entry.videos }}</b> video{{ entry.videos === 1 ? '' : 's' }} }
                  </span>
                </div>
                <div class="gl-body">
                  <time [attr.datetime]="entry.date">{{ entry.date | date: 'dd MMMM y' }}</time>
                  <h4>{{ entry.title }}</h4>
                  @if (entry.summary) { <p>{{ entry.summary }}</p> }
                </div>
              </a>
            }
          </div>
        }

      </div>
    </main>
  `
})
export class GalleryPage implements OnInit {
  private readonly content = inject(ContentService);

  readonly loading = signal(true);
  readonly entries = signal<GalleryEntry[]>([]);
  readonly lens = signal<Lens>('all');
  readonly term = signal('');

  search = '';

  readonly counts = computed(() => {
    const all = this.entries();
    return {
      all: all.length,
      photo: all.filter(e => e.photos > 0).length,
      video: all.filter(e => e.videos > 0).length
    };
  });

  readonly visible = computed(() => {
    const lens = this.lens();
    const needle = this.term().trim().toLowerCase();

    return this.entries().filter(entry => {
      if (lens === 'photo' && !entry.photos) return false;
      if (lens === 'video' && !entry.videos) return false;
      if (!needle) return true;
      return `${entry.title} ${entry.summary} ${entry.kicker}`.toLowerCase().includes(needle);
    });
  });

  ngOnInit(): void {
    // A failure on either side should still leave the other one showing.
    const albums = this.content.for<GalleryAlbum>('gallery').list({ page: 1, pageSize: 48 })
      .pipe(catchError(() => of(null)));
    const events = this.content.for<EventItem>('events').list({ page: 1, pageSize: 48, sortBy: 'startsAt', descending: true })
      .pipe(catchError(() => of(null)));

    forkJoin({ albums, events }).subscribe(({ albums, events }) => {
      const tiles = [
        ...this.fromAlbums(albums),
        ...this.fromEvents(events)
      ].sort((a, b) => b.date.localeCompare(a.date));

      this.entries.set(tiles);
      this.loading.set(false);
    });
  }

  private fromAlbums(result: PagedResult<GalleryAlbum> | null): GalleryEntry[] {
    return (result?.items ?? [])
      .filter(album => this.media(album.mediaItems).length)
      .map(album => this.entry({
        id: `album-${album.id}`,
        title: album.title,
        summary: album.summary,
        kicker: album.albumType || 'Album',
        date: album.albumDate,
        link: ['/gallery', album.slug],
        media: this.media(album.mediaItems),
        imageUrl: album.imageUrl
      }));
  }

  private fromEvents(result: PagedResult<EventItem> | null): GalleryEntry[] {
    return (result?.items ?? [])
      .filter(event => this.media(event.mediaItems).length)
      .map(event => this.entry({
        id: `event-${event.id}`,
        title: event.title,
        summary: event.summary,
        kicker: event.eventType || 'Event',
        date: event.startsAt,
        link: ['/events', event.slug],
        media: this.media(event.mediaItems),
        imageUrl: event.imageUrl
      }));
  }

  private entry(source: {
    id: string; title: string; summary: string; kicker: string; date: string;
    link: unknown[]; media: EventMedia[]; imageUrl?: string;
  }): GalleryEntry {
    const videos = source.media.filter(m => m.kind === 'Video').length;

    return {
      id: source.id,
      title: source.title,
      summary: source.summary ?? '',
      kicker: source.kicker,
      date: source.date,
      link: source.link,
      cover: coverImage(source.media)?.url ?? source.imageUrl ?? null,
      photos: source.media.length - videos,
      videos
    };
  }

  private media(items: EventMedia[] | undefined): EventMedia[] {
    return (items ?? []).filter(item => !!item?.url);
  }
}
