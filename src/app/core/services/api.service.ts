import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiMessage, ContentEntity, PagedResult, QueryParams } from '../models/models';

/**
 * Thin wrapper over HttpClient that knows the API base URL and converts
 * QueryParams objects into HttpParams, dropping undefined values.
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  /** Public so callers needing HttpContext or progress can reach it directly. */
  readonly http = inject(HttpClient);
  readonly base = environment.apiUrl;

  private toParams(q?: QueryParams | Record<string, unknown>): HttpParams {
    let params = new HttpParams();
    if (!q) return params;
    for (const [key, value] of Object.entries(q)) {
      if (value === undefined || value === null || value === '') continue;
      params = params.set(key, String(value));
    }
    return params;
  }

  get<T>(path: string, query?: QueryParams | Record<string, unknown>): Observable<T> {
    return this.http.get<T>(`${this.base}/${path}`, { params: this.toParams(query) });
  }

  post<T>(path: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${this.base}/${path}`, body);
  }

  put<T>(path: string, body: unknown): Observable<T> {
    return this.http.put<T>(`${this.base}/${path}`, body);
  }

  patch<T>(path: string, body: unknown = {}): Observable<T> {
    return this.http.patch<T>(`${this.base}/${path}`, body);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.base}/${path}`);
  }
}

/**
 * Generic CRUD client for any of the API's content resources. One instance is
 * created per resource via `ContentService.for('notices')`, so the notice board,
 * the events page and the admin grid all share the same request logic.
 */
export class ContentClient<T extends ContentEntity> {
  constructor(private readonly api: ApiService, public readonly resource: string) {}

  list(q: QueryParams = {}): Observable<PagedResult<T>> {
    return this.api.get<PagedResult<T>>(this.resource, q);
  }

  byId(id: string): Observable<T> {
    return this.api.get<T>(`${this.resource}/${id}`);
  }

  bySlug(slug: string): Observable<T> {
    return this.api.get<T>(`${this.resource}/slug/${slug}`);
  }

  create(item: Partial<T>): Observable<T> {
    return this.api.post<T>(this.resource, item);
  }

  update(id: string, item: Partial<T>): Observable<ApiMessage> {
    return this.api.put<ApiMessage>(`${this.resource}/${id}`, item);
  }

  remove(id: string): Observable<ApiMessage> {
    return this.api.delete<ApiMessage>(`${this.resource}/${id}`);
  }

  publish(id: string): Observable<ApiMessage> {
    return this.api.patch<ApiMessage>(`${this.resource}/${id}/publish`);
  }

  unpublish(id: string): Observable<ApiMessage> {
    return this.api.patch<ApiMessage>(`${this.resource}/${id}/unpublish`);
  }

  activate(id: string): Observable<ApiMessage> {
    return this.api.patch<ApiMessage>(`${this.resource}/${id}/activate`);
  }

  deactivate(id: string): Observable<ApiMessage> {
    return this.api.patch<ApiMessage>(`${this.resource}/${id}/deactivate`);
  }
}

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly api = inject(ApiService);
  private readonly cache = new Map<string, ContentClient<ContentEntity>>();

  /** Returns a cached client for the given API resource segment. */
  for<T extends ContentEntity>(resource: string): ContentClient<T> {
    if (!this.cache.has(resource)) {
      this.cache.set(resource, new ContentClient<ContentEntity>(this.api, resource));
    }
    return this.cache.get(resource) as unknown as ContentClient<T>;
  }
}
