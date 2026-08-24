import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { DashboardStats } from '../../core/models/models';
import { RESOURCES } from './resources';

/**
 * Shell for the admin CMS: a fixed sidebar listing every managed collection and a
 * content area. Entry is guarded by `adminGuard` (Admin or Editor).
 */
@Component({
  selector: 'ts-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="admin-shell">

      <aside class="admin-side">
        <a class="brand" routerLink="/admin">
          <img src="assets/brand/tarksanhita-logo.jpeg" alt="Tarksanhita emblem" />
          <span>
            <b>TARKSANHITA</b>
            <small>Content Management</small>
          </span>
        </a>

        <div class="links">
          <div class="grp">Overview</div>
          <a routerLink="/admin" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>

          <div class="grp">Content</div>
          @for (resource of resources; track resource.key) {
            <a [routerLink]="['/admin', resource.key]" routerLinkActive="active">
              {{ resource.label }}
              @if (countFor(resource.key) !== null) {
                <span class="n">{{ countFor(resource.key) }}</span>
              }
            </a>
          }

          <div class="grp">Administration</div>
          @if (auth.isAdmin()) {
            <a routerLink="/admin/users" routerLinkActive="active">
              Users
              @if (stats(); as s) { <span class="n">{{ s.users }}</span> }
            </a>
            <a routerLink="/admin/reports/participation" routerLinkActive="active">
              Student Participation
            </a>
          }
          <a routerLink="/admin/contacts" routerLinkActive="active">
            Enquiries
            @if (stats(); as s) {
              @if (s.newContacts > 0) { <span class="n alert">{{ s.newContacts }}</span> }
            }
          </a>

          <div class="grp">Site</div>
          <a routerLink="/">View Public Site</a>
          <button type="button" class="side-sign-out" (click)="signOut()">Sign Out</button>
        </div>
      </aside>

      <div class="admin-main">
        <div class="admin-topbar">
          <h1>Administration</h1>
          <div class="who">
            <b>{{ auth.displayName() }}</b>
            {{ auth.roles().join(', ') }}
          </div>
          <a class="btn btn-ghost btn-sm" routerLink="/">Public Site</a>
        </div>

        <div class="admin-body">
          <router-outlet />
        </div>
      </div>

    </div>
  `
})
export class AdminLayout implements OnInit {
  private readonly api = inject(ApiService);
  readonly auth = inject(AuthService);
  private readonly snack = inject(MatSnackBar);

  readonly resources = RESOURCES;
  readonly stats = signal<DashboardStats | null>(null);

  ngOnInit(): void {
    this.api.get<DashboardStats>('admin/dashboard').subscribe({
      next: s => this.stats.set(s),
      error: () => this.stats.set(null)
    });
  }

  /** Maps a resource key onto the matching dashboard counter. */
  countFor(key: string): number | null {
    const s = this.stats();
    if (!s) return null;
    const map: Record<string, number> = {
      notices: s.notices,
      news: s.news,
      events: s.events,
      debates: s.debates,
      articles: s.articles,
      research: s.researchPapers,
      topics: s.legalTopics,
      library: s.libraryResources,
      profiles: s.profiles
    };
    return map[key] ?? null;
  }

  signOut(): void {
    this.snack.open('You have been signed out.', 'Close', { duration: 4000, panelClass: ['ts-snack-ok'] });
    this.auth.logout('/');
  }
}
