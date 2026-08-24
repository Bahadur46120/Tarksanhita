import { ChangeDetectionStrategy, Component, ElementRef, HostListener, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../core/services/auth.service';
import { Role } from '../core/models/models';

/** Roles in order of seniority — the first one a member holds is the one shown. */
const ROLE_ORDER: Role[] = ['Admin', 'Editor', 'Faculty', 'Student', 'User'];

const ROLE_LABEL: Record<Role, string> = {
  Admin: 'Administrator',
  Editor: 'Editor',
  Faculty: 'Fellow',
  Student: 'Member',
  User: 'Registered User'
};

/**
 * The account control in the utility bar. Signed out it offers sign-in and
 * registration; signed in it becomes a named menu carrying the member's identity,
 * their roles and the sign-out command, so signing out is a deliberate act rather
 * than one more link in a row of links.
 */
@Component({
  selector: 'ts-account-menu',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="account">
      @if (auth.isAuthenticated()) {

        <button type="button"
                class="account-trigger"
                [attr.aria-expanded]="open()"
                aria-haspopup="true"
                aria-controls="account-menu"
                (click)="toggle()">
          <span class="avatar" aria-hidden="true">{{ initials() }}</span>
          <span class="who">
            <b>{{ auth.displayName() }}</b>
            <small>{{ primaryRole() }}</small>
          </span>
          <span class="caret" aria-hidden="true"></span>
        </button>

        @if (open()) {
          <div class="account-menu" id="account-menu" role="menu">
            <div class="head">
              <b>{{ auth.displayName() }}</b>
              <span>{{ auth.user()?.email }}</span>
              <div class="roles">
                @for (role of auth.roles(); track role) {
                  <span class="badge badge-outline">{{ label(role) }}</span>
                }
              </div>
            </div>

            <a routerLink="/profile" role="menuitem" (click)="close()">My Account</a>
            @if (auth.isContentManager()) {
              <a routerLink="/admin" role="menuitem" (click)="close()">Administration</a>
            }
            <a routerLink="/debates/start" role="menuitem" (click)="close()">Propose a Motion</a>

            <button type="button"
                    class="sign-out"
                    role="menuitem"
                    [disabled]="busy()"
                    (click)="signOut()">
              {{ busy() ? 'Signing out…' : 'Sign Out' }}
            </button>
          </div>
        }

      } @else {
        <a class="sign-in" routerLink="/login">Sign In</a>
        <a class="register" routerLink="/register">Register</a>
      }
    </div>
  `
})
export class AccountMenu {
  readonly auth = inject(AuthService);
  private readonly snack = inject(MatSnackBar);
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly open = signal(false);
  readonly busy = signal(false);

  /** Up to two initials, taken from the first and last parts of the name. */
  readonly initials = computed(() => {
    const parts = this.auth.displayName().trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    const first = parts[0][0];
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  });

  readonly primaryRole = computed(() => {
    const mine = this.auth.roles();
    const senior = ROLE_ORDER.find(r => mine.includes(r));
    return senior ? ROLE_LABEL[senior] : 'Member';
  });

  label(role: Role): string {
    return ROLE_LABEL[role] ?? role;
  }

  toggle(): void {
    this.open.update(v => !v);
  }

  close(): void {
    this.open.set(false);
  }

  /** Any click outside the control dismisses the menu. */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.open() && !this.host.nativeElement.contains(event.target as Node)) this.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  signOut(): void {
    // The session is cleared locally whether or not the server call succeeds, so
    // the confirmation is accurate the moment it is shown.
    this.busy.set(true);
    this.close();
    this.snack.open('You have been signed out.', 'Close', { duration: 4000, panelClass: ['ts-snack-ok'] });
    this.auth.logout('/');
    this.busy.set(false);
  }
}
