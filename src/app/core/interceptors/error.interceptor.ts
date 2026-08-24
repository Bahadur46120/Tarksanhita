import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

/**
 * Surfaces API failures so no request fails silently: a snackbar for most errors,
 * a blocking browser alert for a duplicate sign-up email. 401s are left alone —
 * the auth interceptor owns that path and handles the redirect itself.
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snack = inject(MatSnackBar);

  return next(req).pipe(
    catchError((err: unknown) => {
      if (err instanceof HttpErrorResponse && err.status !== 401) {
        const message = describe(err);

        if (message === DUPLICATE_EMAIL && typeof window !== 'undefined') {
          window.alert(message);
        } else {
          snack.open(message, 'Dismiss', {
            duration: 6000,
            panelClass: ['ts-snack-error']
          });
        }
      }
      return throwError(() => err);
    })
  );
};

const DUPLICATE_EMAIL = 'An account with this email address already exists';

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

  const firstValidationError = body?.errors
    ? Object.values(body.errors).find(messages => messages?.length)?.[0]
    : undefined;

  const message = firstValidationError ?? body?.message ?? body?.title;

  // The API words this several ways ("Email already in use", "duplicate", a 409
  // with no body); the sign-up screen should always read the same.
  if (isDuplicateEmail(err, message)) {
    return DUPLICATE_EMAIL;
  }

  return message ?? `Request failed (${err.status}).`;
}

function isDuplicateEmail(err: HttpErrorResponse, message: string | undefined): boolean {
  const text = (message ?? '').toLowerCase();

  if (text.includes('email') && /already|exist|in use|taken|registered|duplicate/.test(text)) {
    return true;
  }

  return err.status === 409 && (err.url ?? '').includes('/auth/register');
}
