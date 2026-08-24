import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, tap, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { ApiMessage, AppUser, AuthResponse, LoginRequest, RegisterRequest, Role } from '../models/models';
import { demoAccountByEmail, demoAuthResponse, findDemoAccount, isDemoEmail, isDemoUser } from '../demo-accounts';
import { environment } from '../../../environments/environment';

const TOKEN_KEY = 'ts.access';
const REFRESH_KEY = 'ts.refresh';
const USER_KEY = 'ts.user';

/**
 * Session state for the portal. Tokens are held in localStorage so a refresh does
 * not sign the user out; the signals below drive every role-aware part of the UI.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);

  private readonly _user = signal<AppUser | null>(this.readStoredUser());

  readonly user = this._user.asReadonly();
  readonly isAuthenticated = computed(() => this._user() !== null);
  readonly roles = computed<Role[]>(() => this._user()?.roles ?? []);
  readonly isAdmin = computed(() => this.roles().includes('Admin'));
  readonly isContentManager = computed(() => this.roles().some(r => r === 'Admin' || r === 'Editor'));
  readonly displayName = computed(() => this._user()?.fullName ?? 'Guest');

  get accessToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  get refreshToken(): string | null {
    return localStorage.getItem(REFRESH_KEY);
  }

  hasRole(...roles: Role[]): boolean {
    const mine = this.roles();
    return roles.some(r => mine.includes(r));
  }

  /** True while the current session came from a built-in demo account. */
  readonly isDemoSession = computed(() => isDemoUser(this._user()));

  login(req: LoginRequest): Observable<AuthResponse> {
    if (environment.demoLogin && isDemoEmail(req.email)) {
      const account = findDemoAccount(req.email, req.password);

      // A demo address never falls through to the API: a wrong password has to
      // read as a rejected sign-in, not as an unreachable server.
      if (!account) {
        return throwError(
          () => new HttpErrorResponse({ status: 401, statusText: 'Unauthorized', url: 'demo://auth/login' })
        );
      }

      return of(demoAuthResponse(account)).pipe(
        delay(300),
        tap(res => this.store(res))
      );
    }

    return this.api.post<AuthResponse>('auth/login', req).pipe(tap(res => this.store(res)));
  }

  register(req: RegisterRequest): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('auth/register', req).pipe(tap(res => this.store(res)));
  }

  refresh(): Observable<AuthResponse> {
    const current = this._user();

    // A demo session has no server-side token to renew — reissue it locally so a
    // stray 401 from the API cannot sign the demo user out.
    if (environment.demoLogin && isDemoUser(current)) {
      const account = demoAccountByEmail(current!.email);
      if (account) {
        return of(demoAuthResponse(account)).pipe(tap(res => this.store(res)));
      }
    }

    return this.api
      .post<AuthResponse>('auth/refresh', {
        accessToken: this.accessToken ?? '',
        refreshToken: this.refreshToken ?? ''
      })
      .pipe(tap(res => this.store(res)));
  }

  changePassword(currentPassword: string, newPassword: string): Observable<ApiMessage> {
    return this.api.post<ApiMessage>('auth/change-password', { currentPassword, newPassword });
  }

  logout(redirectTo: string | null = '/'): void {
    // A demo session exists only in this browser — nothing to tell the server.
    if (this.isDemoSession()) {
      this.clear(redirectTo);
      return;
    }

    // Tell the server to drop the refresh token, but clear locally regardless of
    // the outcome — the user has asked to sign out.
    this.api.post<ApiMessage>('auth/logout', {}).subscribe({
      next: () => this.clear(redirectTo),
      error: () => this.clear(redirectTo)
    });
  }

  private store(res: AuthResponse): void {
    localStorage.setItem(TOKEN_KEY, res.accessToken);
    localStorage.setItem(REFRESH_KEY, res.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(res.user));
    this._user.set(res.user);
  }

  clear(redirectTo: string | null = null): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(USER_KEY);
    this._user.set(null);
    if (redirectTo) void this.router.navigateByUrl(redirectTo);
  }

  private readStoredUser(): AppUser | null {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? (JSON.parse(raw) as AppUser) : null;
    } catch {
      // Corrupt storage should never break application start-up.
      return null;
    }
  }
}
