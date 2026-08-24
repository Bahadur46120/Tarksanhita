import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { DEMO_ACCOUNTS, DemoAccount } from '../../core/demo-accounts';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ts-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="auth-wrap">
      <div class="auth-card">

        <aside class="auth-aside">
          <div class="mark">
            <img src="assets/brand/tarksanhita-logo.jpeg" alt="Tarksanhita emblem" />
            <div>
              <b>TARKSANHITA</b>
              <small>The Debate on Logic</small>
            </div>
          </div>

          <p class="statement">
            Centre for Law, Logic, Debate &amp; Knowledge.
          </p>

          <ul>
            <li>File arguments and rebuttals on any open motion.</li>
            <li>Propose motions for the adjudication board.</li>
            <li>Register for events and download research papers.</li>
          </ul>

          <div class="aside-foot">
            Accounts are held in the name of the member and are not to be shared.
            For help with access, <a routerLink="/contact">contact the Centre</a>.
          </div>
        </aside>

        <div class="auth-form">
          <h1>Sign In</h1>
          <p class="sub">
            @if (returnUrl()) {
              Sign in to continue to the page you requested.
            } @else {
              Access your member, fellow or administrative account.
            }
          </p>

          <form [formGroup]="form" (ngSubmit)="submit()" novalidate>

            @if (error(); as message) {
              <div class="form-alert" role="alert">
                <div>
                  <b>Sign-in failed</b>
                  {{ message }}
                </div>
              </div>
            }

            <div class="field" [class.invalid]="invalid('email')">
              <label for="l-email">Email address</label>
              <input id="l-email" type="email" formControlName="email" autocomplete="username" />
              @if (invalid('email')) { <span class="err">Enter a valid email address.</span> }
            </div>

            <div class="field" [class.invalid]="invalid('password')">
              <label for="l-password">Password</label>
              <div class="pw-box">
                <input id="l-password"
                       [type]="reveal() ? 'text' : 'password'"
                       formControlName="password"
                       inputmode="numeric"
                       maxlength="4"
                       autocomplete="current-password" />
                <button type="button"
                        class="reveal"
                        [attr.aria-label]="reveal() ? 'Hide password' : 'Show password'"
                        (click)="reveal.set(!reveal())">
                  {{ reveal() ? 'Hide' : 'Show' }}
                </button>
              </div>
              @if (invalid('password')) { <span class="err">Enter your password.</span> }
            </div>

            <button type="submit" class="btn btn-gold submit" [disabled]="busy()">
              {{ busy() ? 'Signing in…' : 'Sign In' }}
            </button>
          </form>

          @if (showDemoAccounts) {
            <div class="hint-box demo-box">
              <b>Demonstration accounts</b>
              <ul class="demo-list">
                @for (account of demoAccounts; track account.email) {
                  <li>
                    <button type="button" class="demo-fill" [disabled]="busy()" (click)="useDemo(account)">
                      <code>{{ account.email }} / {{ account.password }}</code>
                      <span>{{ account.label }}</span>
                    </button>
                  </li>
                }
              </ul>
              These sign in without the API — pick one to fill the form, then Sign In.
            </div>
          }

          <div class="auth-foot">
            <span>No account yet? <a routerLink="/register">Register here</a></span>
            <a routerLink="/">Back to site</a>
          </div>
        </div>

      </div>
    </div>
  `
})
export class LoginPage {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly snack = inject(MatSnackBar);

  readonly busy = signal(false);
  readonly reveal = signal(false);

  /** A failed sign-in is reported on the form itself — a 401 raises no snackbar. */
  readonly error = signal<string | null>(null);

  readonly returnUrl = signal(this.route.snapshot.queryParamMap.get('returnUrl'));

  /** The panel only makes sense while the built-in accounts are switched on. */
  readonly showDemoAccounts = environment.demoLogin;
  readonly demoAccounts = DEMO_ACCOUNTS;

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  invalid(control: string): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  /** Fills the form from the demo panel; the user still presses Sign In. */
  useDemo(account: DemoAccount): void {
    this.error.set(null);
    this.form.setValue({ email: account.email, password: account.password });
    this.form.markAsPristine();
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.busy.set(true);
    this.error.set(null);

    this.auth.login(this.form.getRawValue()).subscribe({
      next: res => {
        this.busy.set(false);
        this.snack.open(`Signed in as ${res.user.fullName}.`, 'Close', {
          duration: 4000,
          panelClass: ['ts-snack-ok']
        });

        // Home is the landing page for everyone. Content managers reach the admin
        // panel from the account menu, or by the returnUrl that sent them here.
        void this.router.navigateByUrl(this.returnUrl() ?? '/');
      },
      error: (err: unknown) => {
        this.busy.set(false);
        this.error.set(this.describe(err));
        this.form.get('password')?.reset();
      }
    });
  }

  private describe(err: unknown): string {
    if (!(err instanceof HttpErrorResponse)) return 'Something went wrong. Please try again.';
    if (err.status === 0) return 'Cannot reach the server. Check that the API is running and try again.';
    if (err.status === 401) return 'That email address and password do not match an account.';
    if (err.status === 403) return 'This account has been deactivated. Please contact the Centre.';

    const body = err.error as { message?: string; title?: string } | null;
    return body?.message ?? body?.title ?? `Sign-in failed (${err.status}).`;
  }
}
