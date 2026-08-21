import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { PageBanner } from '../../shared/components/ui';

@Component({
  selector: 'ts-profile',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, DatePipe, PageBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ts-page-banner heading="My Account" lede="Your account details, roles and password." />

    <main class="section">
      <div class="container" style="max-width:900px">

        @if (auth.user(); as user) {
          <section class="panel">
            <div class="panel-head"><h2>Account Details</h2></div>
            <div class="panel-body">
              <div class="table-scroll">
                <table class="ts-table">
                  <tbody>
                    <tr><th style="width:190px">Full name</th><td>{{ user.fullName }}</td></tr>
                    <tr><th>Email address</th><td>{{ user.email }}</td></tr>
                    <tr><th>Telephone</th><td>{{ user.phone || '—' }}</td></tr>
                    <tr><th>Enrolment number</th><td>{{ user.enrolmentNo || '—' }}</td></tr>
                    <tr>
                      <th>Roles</th>
                      <td>
                        @for (role of user.roles; track role) {
                          <span class="badge badge-gold" style="margin-right:5px">{{ role }}</span>
                        }
                      </td>
                    </tr>
                    <tr><th>Member since</th><td>{{ user.createdAt | date: 'dd MMMM y' }}</td></tr>
                    <tr><th>Last sign-in</th><td>{{ user.lastLoginAt ? (user.lastLoginAt | date: 'dd MMM y, HH:mm') : 'This session' }}</td></tr>
                  </tbody>
                </table>
              </div>

              <div class="form-actions">
                @if (auth.isContentManager()) {
                  <a class="btn btn-gold" routerLink="/admin">Open Admin Panel</a>
                }
                <a class="btn btn-ghost" routerLink="/students">Student Corner</a>
                <button type="button" class="btn btn-navy" (click)="auth.logout('/')">Sign Out</button>
              </div>
            </div>
          </section>

          <section class="panel">
            <div class="panel-head"><h2>Change Password</h2></div>
            <div class="panel-body">
              <form [formGroup]="form" (ngSubmit)="submit()">
                <div class="form-grid">
                  <div class="field">
                    <label for="p-current">Current password</label>
                    <input id="p-current" type="password" formControlName="currentPassword" inputmode="numeric" maxlength="4" autocomplete="current-password" />
                  </div>
                  <div class="field">
                    <label for="p-new">New password</label>
                    <input id="p-new" type="password" formControlName="newPassword" inputmode="numeric" maxlength="4" autocomplete="new-password" />
                  </div>
                </div>

                <div class="form-actions">
                  <button type="submit" class="btn btn-gold" [disabled]="busy() || form.invalid">
                    {{ busy() ? 'Updating…' : 'Update Password' }}
                  </button>
                </div>
              </form>

              <p class="muted" style="font-size:.78rem;margin-top:10px">
                Changing your password signs you out of every device.
              </p>
            </div>
          </section>
        }

      </div>
    </main>
  `
})
export class ProfilePage {
  private readonly fb = inject(FormBuilder);
  private readonly snack = inject(MatSnackBar);
  readonly auth = inject(AuthService);

  readonly busy = signal(false);

  readonly form = this.fb.nonNullable.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { currentPassword, newPassword } = this.form.getRawValue();
    this.busy.set(true);

    this.auth.changePassword(currentPassword, newPassword).subscribe({
      next: res => {
        this.busy.set(false);
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
        // The server has revoked the refresh token, so end the session here too.
        this.auth.clear('/login');
      },
      error: () => this.busy.set(false)
    });
  }
}
