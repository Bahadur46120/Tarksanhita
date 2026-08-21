import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

/**
 * Surfaces API failures as a snackbar so no request fails silently. 401s are left
 * alone — the auth interceptor owns that path and handles the redirect itself.
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snack = inject(MatSnackBar);

  return next(req).pipe(
    catchError((err: unknown) => {
      if (err instanceof HttpErrorResponse && err.status !== 401) {
        snack.open(describe(err), 'Dismiss', {
          duration: 6000,
          panelClass: ['ts-snack-error']
        });
      }
      return throwError(() => err);
    })
  );
};

function describe(err: HttpErrorResponse): string {
  if (err.status === 0) {
    return 'Cannot reach the server. Check that the API is running.';
  }
  if (err.status === 403) {
    return 'You do not have permission to perform this action.';
  }
  if (err.status === 404) {
    return 'The requested item could not be found.';
  }

  // ASP.NET Core returns either { message } from this API or a ProblemDetails body.
  const body = err.error as { message?: string; title?: string; errors?: Record<string, string[]> } | null;

  if (body?.errors) {
    const first = Object.values(body.errors)[0];
    if (first?.length) return first[0];
  }

  return body?.message ?? body?.title ?? `Request failed (${err.status}).`;
}
