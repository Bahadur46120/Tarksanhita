import { AppUser, AuthResponse, Role } from './models/models';

/**
 * Built-in accounts that sign in without the API.
 *
 * They exist so the portal can be demonstrated — and every role-aware screen
 * exercised — while the ASP.NET Core backend is not running. `environment.demoLogin`
 * switches the whole mechanism off; set it to false once the API seeds real users.
 */
export interface DemoAccount {
  email: string;
  password: string;
  /** Shown next to the credentials on the sign-in screen. */
  label: string;
  fullName: string;
  roles: Role[];
}

export const DEMO_ACCOUNTS: readonly DemoAccount[] = [
  // {
  //   email: 'admin@tarksanhita.in',
  //   password: '1111',
  //   label: 'Administration',
  //   fullName: 'Centre Administrator',
  //   roles: ['Admin']
  // },
  // {
  //   email: 'editor@tarksanhita.in',
  //   password: '2222',
  //   label: 'Content management',
  //   fullName: 'Content Editor',
  //   roles: ['Editor']
  // },
  // {
  //   email: 'student@tarksanhita.in',
  //   password: '4444',
  //   label: 'Member view',
  //   fullName: 'Student Member',
  //   roles: ['Student', 'User']
  // }
];

/** True when the email belongs to a demo account, whatever the password. */
export function isDemoEmail(email: string): boolean {
  return DEMO_ACCOUNTS.some(a => a.email === normalise(email));
}

/** The account for an address, ignoring the password. */
export function demoAccountByEmail(email: string): DemoAccount | undefined {
  return DEMO_ACCOUNTS.find(a => a.email === normalise(email));
}

/** The account matching both email and password, or undefined. */
export function findDemoAccount(email: string, password: string): DemoAccount | undefined {
  return DEMO_ACCOUNTS.find(a => a.email === normalise(email) && a.password === password);
}

/**
 * Builds the same shape the API returns, so nothing downstream has to know the
 * session is local. The token is inert — it is never accepted by the real API.
 */
export function demoAuthResponse(account: DemoAccount): AuthResponse {
  const now = Date.now();
  const user: AppUser = {
    id: `demo-${account.roles[0].toLowerCase()}`,
    fullName: account.fullName,
    email: account.email,
    roles: [...account.roles],
    isActive: true,
    createdAt: new Date(now).toISOString(),
    lastLoginAt: new Date(now).toISOString()
  };

  return {
    accessToken: `demo.${btoa(account.email)}.${now}`,
    refreshToken: `demo-refresh.${btoa(account.email)}`,
    expiresAt: new Date(now + 12 * 60 * 60 * 1000).toISOString(),
    user
  };
}

/** A demo session is recognisable from the stored user alone. */
export function isDemoUser(user: AppUser | null): boolean {
  return !!user && user.id.startsWith('demo-');
}

function normalise(email: string): string {
  return email.trim().toLowerCase();
}
