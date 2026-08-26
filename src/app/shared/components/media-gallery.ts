import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EventMedia } from '../../core/models/models';
import { embedSrc } from '../../core/services/media-upload.service';

/**
 * Public gallery for a record's photographs and videos: a thumbnail grid that
 * opens into a lightbox. Videos play where they are hosted — an uploaded file in
 * the browser's own player, a YouTube or Vimeo link in the host's embed.
 */
@Component({
  selector: 'ts-media-gallery',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (items().length) {
      <section class="media-gallery">
        <div class="mg-head">
          <h3>{{ heading() }}</h3>
          <span class="muted">{{ countLabel() }}</span>
        </div>

        <div class="mg-grid">
          @for (item of items(); track item.id; let i = $index) {
            <button type="button"
                    class="mg-tile"
                    [class.is-video]="item.kind === 'Video'"
                    (click)="open(i)"
                    [attr.aria-label]="'Open ' + (item.caption || item.fileName || (item.kind === 'Video' ? 'video' : 'photograph')) + ', item ' + (i + 1) + ' of ' + items().length">
              @if (thumb(item)) {
                <img [src]="thumb(item)" [alt]="item.caption || ''" loading="lazy" decoding="async" />
              } @else {
                <span class="mg-fallback">{{ item.kind === 'Video' ? 'Video' : 'Image' }}</span>
              }

              @if (item.kind === 'Video') {
                <span class="mg-play" aria-hidden="true">
                  <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" /><path d="M19 15l16 9-16 9z" /></svg>
                </span>
              }

              @if (item.caption) { <span class="mg-cap">{{ item.caption }}</span> }
            </button>
          }
        </div>
      </section>

      @if (openIndex() !== null && current(); as media) {
        <div class="mg-lightbox" role="dialog" aria-modal="true" [attr.aria-label]="media.caption || 'Media viewer'">
          <div class="mg-backdrop" (click)="close()"></div>

          <div class="mg-stage">
            <div class="mg-bar">
              <span>{{ (openIndex() ?? 0) + 1 }} / {{ items().length }}</span>
              <button type="button" class="mg-btn" (click)="close()" aria-label="Close viewer">&#10005;</button>
            </div>

            <div class="mg-frame">
              @if (media.kind === 'Video') {
                @if (embed(media); as src) {
                  <iframe [src]="src" title="Event video" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
                } @else {
                  <video [src]="media.url" [attr.poster]="media.thumbUrl || null" controls autoplay playsinline></video>
                }
              } @else {
                <img [src]="media.url" [alt]="media.caption || 'Event photograph'" />
              }
            </div>

            @if (media.caption) { <p class="mg-caption">{{ media.caption }}</p> }

            @if (items().length > 1) {
              <button type="button" class="mg-nav prev" (click)="step(-1)" aria-label="Previous item">&#10094;</button>
              <button type="button" class="mg-nav next" (click)="step(1)" aria-label="Next item">&#10095;</button>
            }
          </div>
        </div>
      }
    }
  `
})
export class MediaGallery implements OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);

  readonly media = input<EventMedia[] | null | undefined>([]);
  readonly heading = input<string>('Photographs & Video');

  readonly openIndex = signal<number | null>(null);

  readonly items = computed(() =>
    [...(this.media() ?? [])]
      .filter(m => !!m?.url)
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
  );

  readonly current = computed(() => {
    const index = this.openIndex();
    return index === null ? null : this.items()[index] ?? null;
  });

  readonly countLabel = computed(() => {
    const all = this.items();
    const videos = all.filter(m => m.kind === 'Video').length;
    const photos = all.length - videos;

    const parts: string[] = [];
    if (photos) parts.push(`${photos} ${photos === 1 ? 'photograph' : 'photographs'}`);
    if (videos) parts.push(`${videos} ${videos === 1 ? 'video' : 'videos'}`);
    return parts.join(' · ');
  });

  thumb(item: EventMedia): string | null {
    return item.thumbUrl || (item.kind === 'Image' ? item.url : null);
  }

  embed(item: EventMedia): SafeResourceUrl | null {
    const src = embedSrc(item);
    return src ? this.sanitizer.bypassSecurityTrustResourceUrl(src) : null;
  }

  open(index: number): void {
    this.openIndex.set(index);
    document.body.classList.add('mg-open');
  }

  close(): void {
    this.openIndex.set(null);
    document.body.classList.remove('mg-open');
  }

  /** Wraps around, so arrow keys never dead-end at either edge. */
  step(by: number): void {
    const total = this.items().length;
    if (!total) return;
    const from = this.openIndex() ?? 0;
    this.openIndex.set((from + by + total) % total);
  }

  /**
   * The open lightbox locks page scrolling, so the lock has to come off even
   * when the component leaves without close() being called — a browser Back
   * press out of an event page, for instance.
   */
  ngOnDestroy(): void {
    document.body.classList.remove('mg-open');
  }

  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (this.openIndex() === null) return;

    if (event.key === 'Escape') { this.close(); event.preventDefault(); }
    else if (event.key === 'ArrowRight') { this.step(1); event.preventDefault(); }
    else if (event.key === 'ArrowLeft') { this.step(-1); event.preventDefault(); }
  }
}
