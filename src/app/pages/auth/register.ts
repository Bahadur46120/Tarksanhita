import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';

/** Cross-field check: the two password boxes must agree. */
function passwordsMatch(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return password && confirm && password !== confirm ? { mismatch: true } : null;
}

@Component({
  selector: 'ts-register',
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
            Membership of the forum is open, and free.
          </p>

          <ul>
            <li>File arguments and rebuttals on any open motion.</li>
            <li>Propose motions for the adjudication board.</li>
            <li>Register for events and download research papers.</li>
          </ul>

          <div class="aside-foot">
            Please register in your own name. Accounts found to be duplicates or
            pseudonymous are withdrawn. <a routerLink="/contact">Contact the Centre</a> for help.
          </div>
        </aside>

        <div class="auth-form">
          <h1>Create an Account</h1>
          <p class="sub">Registration gives you access to debates, saved resources and event registration.</p>

          <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
            <div class="form-grid">

              <div class="field full" [class.invalid]="invalid('fullName')">
                <label for="r-name">Full name</label>
                <input id="r-name" formControlName="fullName" autocomplete="name" />
                @if (invalid('fullName')) { <span class="err">Please enter your full name.</span> }
              </div>

              <div class="field full" [class.invalid]="invalid('email')">
                <label for="r-email">Email address</label>
                <input id="r-email" type="email" formControlName="email" autocomplete="email" />
                @if (invalid('email')) { <span class="err">Enter a valid email address.</span> }
              </div>

              <div class="field">
                <label for="r-phone">Telephone <span class="muted">(optional)</span></label>
                <input id="r-phone" formControlName="phone" autocomplete="tel" />
              </div>

              <div class="field">
                <label for="r-enrol">Enrolment no. <span class="muted">(if enrolled)</span></label>
                <input id="r-enrol" formControlName="enrolmentNo" />
              </div>

              <div class="field" [class.invalid]="invalid('password')">
                <label for="r-password">Password</label>
                <input id="r-password"
                       type="password"
                       formControlName="password"
                       inputmode="numeric"
                       autocomplete="new-password"
                       maxlength="4" />
              </div>

              <div class="field" [class.invalid]="invalid('confirmPassword') || mismatch()">
                <label for="r-confirm">Confirm password</label>
                <input id="r-confirm"
                       type="password"
                       formControlName="confirmPassword"
                       inputmode="numeric"
                       autocomplete="new-password"
                       maxlength="4" />
                @if (mismatch()) { <span class="err">The two passwords do not match.</span> }
              </div>

            </div>

            <button type="submit" class="btn btn-gold submit" [disabled]="busy()">
              {{ busy() ? 'Creating account…' : 'Create Account' }}
            </button>
          </form>

          <div class="hint-box">
            <b>After registration</b>
            New accounts receive the standard member role. Faculty, editor and administrative
            rights are granted by an administrator after verification.
          </div>

          <div class="auth-foot">
            <span>Already registered? <a routerLink="/login">Sign in</a></span>
            <a routerLink="/">Back to site</a>
          </div>
        </div>

      </div>
    </div>
  `
})
export class RegisterPage {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly snack = inject(MatSnackBar);

  readonly busy = signal(false);

  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    enrolmentNo: [''],
    password: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: passwordsMatch });

  invalid(control: string): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  mismatch(): boolean {
    return this.form.hasError('mismatch') && !!this.form.get('confirmPassword')?.touched;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { confirmPassword, ...payload } = this.form.getRawValue();
    void confirmPassword;

    this.busy.set(true);
    this.auth.register(payload).subscribe({
      next: res => {
        this.busy.set(false);
        this.snack.open(`Welcome, ${res.user.fullName}.`, 'Close', { panelClass: ['ts-snack-ok'] });
        void this.router.navigateByUrl('/');
      },
      error: () => this.busy.set(false)
    });
  }
}
