import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';

// Shared across calls so that several parallel 401s trigger exactly one refresh.
let refreshing = false;
const refreshed$ = new BehaviorSubject<string | null>(null);

/**
 * Attaches the bearer token to every API request and, on a 401, attempts a single
 * token refresh before replaying the failed requests.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.accessToken;

  const authorised = token ? withToken(req, token) : req;

  return next(authorised).pipe(
    catchError((err: unknown) => {
      const is401 = err instanceof HttpErrorResponse && err.status === 401;
      const isAuthCall = req.url.includes('/auth/login')
        || req.url.includes('/auth/register')
        || req.url.includes('/auth/refresh');

      if (!is401 || isAuthCall || !auth.refreshToken) {
        if (is401 && !isAuthCall) auth.clear();
        return throwError(() => err);
      }

      return handleRefresh(req, next, auth);
    })
  );
};

function withToken(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
}

function handleRefresh(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  auth: AuthService
): Observable<HttpEvent<unknown>> {
  if (refreshing) {
    // A refresh is already in flight — wait for it, then replay.
    return refreshed$.pipe(
      filter((t): t is string => t !== null),
      take(1),
      switchMap(t => next(withToken(req, t)))
    );
  }

  refreshing = true;
  refreshed$.next(null);

  return auth.refresh().pipe(
    switchMap(res => {
      refreshing = false;
      refreshed$.next(res.accessToken);
      return next(withToken(req, res.accessToken));
    }),
    catchError(err => {
      refreshing = false;
      auth.clear('/login');
      return throwError(() => err);
    })
  );
}
