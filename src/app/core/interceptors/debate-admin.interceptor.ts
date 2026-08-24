import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Debate Admin Interceptor
 * Handles admin-specific requests, logging, and error handling
 */
@Injectable()
export class DebateAdminInterceptor implements HttpInterceptor {
  private readonly auth = inject(AuthService);
  private readonly snack = inject(MatSnackBar);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add admin-specific headers
    const adminReq = req.clone({
      setHeaders: {
        'X-Admin-Request': 'true',
        'X-Admin-Id': this.auth.currentUser()?.id || '',
        'X-Request-Time': new Date().toISOString()
      }
    });

    // Log admin actions for audit trail
    if (adminReq.method !== 'GET') {
      console.log(`[Admin Action] ${adminReq.method} ${adminReq.url}`, {
        admin: this.auth.displayName(),
        timestamp: new Date().toISOString()
      });
    }

    return next.handle(adminReq).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';

    if (error.status === 403) {
      errorMessage = 'Access denied: You do not have permission to perform this action';
    } else if (error.status === 401) {
      errorMessage = 'Your session has expired. Please sign in again';
      this.auth.logout('/login');
    } else if (error.status === 404) {
      errorMessage = 'Resource not found';
    } else if (error.status === 422) {
      errorMessage = `Validation error: ${error.error?.message || 'Please check your input'}`;
    } else if (error.status === 500) {
      errorMessage = 'Server error: Please contact system administrator';
    } else if (error.status === 0) {
      errorMessage = 'Network error: Check your connection';
    }

    console.error('[Admin Error]', errorMessage, error);
    this.snack.open(errorMessage, 'Close', { duration: 5000, panelClass: ['ts-snack-error'] });

    return throwError(() => new Error(errorMessage));
  }
}
