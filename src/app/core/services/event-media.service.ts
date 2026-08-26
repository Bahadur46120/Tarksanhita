import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, firstValueFrom, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { silent } from '../interceptors/http-context';
import { EventMedia } from '../models/models';
import { ApiService } from './api.service';

/**
 * Keeps a record's gallery in step with the API. Events and gallery albums both
 * carry one, so every call names the resource it is working on.
 *
 * The list is also part of the record itself, so a change is never lost: it is
 * pushed to `/api/{resource}/{id}/media` the moment it is made, and saved again
 * with the record when the editor presses Save. Where the media endpoints are
 * not deployed the immediate call is skipped quietly and the record carries the
 * change on its own.
 */
@Injectable({ providedIn: 'root' })
export class EventMediaService {
  private readonly api = inject(ApiService);

  /** Flipped off for the session the first time the endpoint answers "not there". */
  private endpointAvailable = environment.media.useMediaEndpoint;

  private path(resource: string, id: string, mediaId?: string): string {
    const base = `${resource}/${id}/media`;
    return mediaId ? `${base}/${mediaId}` : base;
  }

  /** Reads the gallery back from the API; an empty list when it cannot be read. */
  list(resource: string, id: string): Observable<EventMedia[]> {
    return this.guard(
      this.api.http.get<EventMedia[]>(`${this.api.base}/${this.path(resource, id)}`, { context: silent() })
    ).pipe(map(items => normalise(items ?? [])));
  }

  /** Attaches one item. Resolves to null when the endpoint is not available. */
  add(resource: string, id: string, media: EventMedia): Observable<EventMedia | null> {
    if (!this.canCall(id)) return of(null);
    return this.queue(() =>
      this.api.http.post<EventMedia>(`${this.api.base}/${this.path(resource, id)}`, media, { context: silent() })
    );
  }

  update(resource: string, id: string, media: EventMedia): Observable<EventMedia | null> {
    if (!this.canCall(id)) return of(null);
    return this.queue(() =>
      this.api.http.put<EventMedia>(`${this.api.base}/${this.path(resource, id, media.id)}`, media, { context: silent() })
    );
  }

  remove(resource: string, id: string, mediaId: string): Observable<unknown> {
    if (!this.canCall(id)) return of(null);
    return this.queue(() =>
      this.api.http.delete(`${this.api.base}/${this.path(resource, id, mediaId)}`, { context: silent() })
    );
  }

  /** Replaces the whole list — the cheapest way to persist a reorder. */
  replaceAll(resource: string, id: string, items: EventMedia[]): Observable<EventMedia[] | null> {
    if (!this.canCall(id)) return of(null);
    return this.queue(() =>
      this.api.http.put<EventMedia[]>(`${this.api.base}/${this.path(resource, id)}`, normalise(items), { context: silent() })
    );
  }

  /**
   * Asks the host to drop its copy where that can be done without a person.
   * Cloudinary issues an unsigned token that is called directly; it expires
   * within minutes, so a failure here is not worth reporting. ImgBB's removal
   * link is a web page rather than an API call, so its copy stays until someone
   * opens that link — the address is kept on the record for exactly that.
   */
  releaseFromHost(media: EventMedia): void {
    if (media.provider !== 'cloudinary' || !media.deleteUrl) return;
    void fetch(media.deleteUrl, { method: 'POST', mode: 'no-cors' }).catch(() => undefined);
  }

  // ------------------------------------------------------------ internals

  private canCall(id: string): boolean {
    return this.endpointAvailable && !!id;
  }

  /**
   * Runs writes one after another. Dropping several files at once finishes their
   * uploads in any order, and overlapping writes to the same gallery would
   * otherwise race each other.
   */
  private tail: Promise<unknown> = Promise.resolve();

  private queue<T>(request: () => Observable<T>): Observable<T | null> {
    const run = this.tail.then(() => firstValueFrom(this.guard(request())));
    this.tail = run.catch(() => undefined);
    return from(run);
  }

  /**
   * Treats "no such endpoint" as a signal to stop calling rather than an error:
   * the gallery still saves with the record. A 404 the API itself worded — a
   * deleted event, an item another editor already removed — is a real answer and
   * must not switch the endpoint off, so only a routing miss counts.
   */
  private guard<T>(source: Observable<T>): Observable<T | null> {
    return source.pipe(
      catchError((err: unknown) => {
        if (this.isMissingEndpoint(err)) {
          this.endpointAvailable = false;
          return of(null);
        }
        throw err;
      })
    );
  }

  private isMissingEndpoint(err: unknown): boolean {
    if (!(err instanceof HttpErrorResponse)) return false;
    if (err.status === 405 || err.status === 501) return true;
    if (err.status !== 404) return false;

    // Our API always answers a genuine 404 with { message, success: false }.
    const body = err.error as { message?: string } | null;
    return !body?.message;
  }
}

/** Sorts by position and renumbers, leaving at most one cover. */
export function normalise(items: EventMedia[]): EventMedia[] {
  const ordered = [...items].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
  const cover = ordered.find(m => m.isCover && m.kind === 'Image') ?? ordered.find(m => m.kind === 'Image');

  return ordered.map((item, index) => ({
    ...item,
    sortOrder: index,
    isCover: !!cover && item.id === cover.id
  }));
}

/** The still a listing card should show for a record, if it has one. */
export function coverImage(items: EventMedia[] | undefined | null): EventMedia | null {
  if (!items?.length) return null;
  return items.find(m => m.isCover && m.kind === 'Image')
    ?? items.find(m => m.kind === 'Image')
    ?? null;
}
