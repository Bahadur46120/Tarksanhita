import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { DashboardStats } from '../../core/models/models';
import { EmptyState, LoadingState } from '../../shared/components/ui';
import { RESOURCES } from './resources';

interface ActivityRow {
  kind: string;
  id: string;
  title: string;
  slug: string;
  isPublished: boolean;
  isActive: boolean;
  updatedAt: string;
  updatedBy?: string;
}

@Component({
  selector: 'ts-admin-dashboard',
  standalone: true,
  imports: [RouterLink, DatePipe, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="admin-banner">
      <div class="ab-mark"><svg aria-hidden="true"><use href="#i-shield" /></svg></div>

      <div class="ab-copy">
        <h2>Admin Panel</h2>
        <p class="ab-sub">Tarksanhita Debate Forum</p>
        <div class="ab-rule"></div>
        <p class="ab-lede">
          Manage members, subject areas, motions and activity from one place.
          Signed in as {{ auth.displayName() }} ({{ auth.roles().join(', ') }}).
        </p>

        <ul class="ab-features">
          <li>
            <svg aria-hidden="true"><use href="#i-people" /></svg>
            <span>User<br />Management</span>
          </li>
          <li>
            <svg aria-hidden="true"><use href="#i-doc" /></svg>
            <span>Topic &amp; Debate<br />Management</span>
          </li>
          <li>
            <svg aria-hidden="true"><use href="#i-award" /></svg>
            <span>Reports &amp;<br />Analytics</span>
          </li>
          <li>
            <svg aria-hidden="true"><use href="#i-chip" /></svg>
            <span>System<br />Settings</span>
          </li>
        </ul>
      </div>
    </section>

    @if (loading()) {
      <ts-loading-state [count]="8" />
    } @else if (stats(); as s) {

      <div class="tile-grid">
        <div class="tile"><div class="k">Notices</div><div class="v">{{ s.notices }}</div><div class="s"><a routerLink="/admin/notices">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">News</div><div class="v">{{ s.news }}</div><div class="s"><a routerLink="/admin/news">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Events</div><div class="v">{{ s.events }}</div><div class="s"><a routerLink="/admin/events">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Debates</div><div class="v">{{ s.debates }}</div><div class="s"><a routerLink="/admin/debates">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Articles</div><div class="v">{{ s.articles }}</div><div class="s"><a routerLink="/admin/articles">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Research Papers</div><div class="v">{{ s.researchPapers }}</div><div class="s"><a routerLink="/admin/research">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Legal Topics</div><div class="v">{{ s.legalTopics }}</div><div class="s"><a routerLink="/admin/topics">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Gallery</div><div class="v">{{ s.galleryAlbums }}</div><div class="s"><a routerLink="/admin/gallery">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Library</div><div class="v">{{ s.libraryResources }}</div><div class="s"><a routerLink="/admin/library">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Profiles</div><div class="v">{{ s.profiles }}</div><div class="s"><a routerLink="/admin/profiles">Manage &rarr;</a></div></div>

        <div class="tile" style="border-left-color:#b3261e">
          <div class="k">New Enquiries</div>
          <div class="v">{{ s.newContacts }}</div>
          <div class="s"><a routerLink="/admin/contacts">Review &rarr;</a></div>
        </div>

        <div class="tile" style="border-left-color:#1d6f42">
          <div class="k">Unpublished Drafts</div>
          <div class="v">{{ s.unpublishedItems }}</div>
          <div class="s">Awaiting release</div>
        </div>

        @if (auth.isAdmin()) {
          <div class="tile">
            <div class="k">Users</div>
            <div class="v">{{ s.users }}</div>
            <div class="s"><a routerLink="/admin/users">Manage &rarr;</a></div>
          </div>
        }
      </div>

      <div class="card">
        <h3>Create New</h3>
        <div class="flex flex-wrap gap-8">
          @for (resource of resources; track resource.key) {
            <a class="btn btn-ghost btn-sm" [routerLink]="['/admin', resource.key, 'new']">+ {{ resource.singular }}</a>
          }
        </div>
      </div>

      <div class="card">
        <h3>Recent Activity</h3>
        @if (!activity().length) {
          <ts-empty-state heading="Nothing changed yet" body="Edits made through the panel are listed here." />
        } @else {
          <div class="table-scroll">
            <table class="ts-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Title</th>
                  <th style="width:110px">State</th>
                  <th style="width:150px">Updated</th>
                  <th style="width:190px">By</th>
                </tr>
              </thead>
              <tbody>
                @for (row of activity(); track row.id + row.kind) {
                  <tr>
                    <td><span class="badge badge-outline">{{ row.kind }}</span></td>
                    <td>{{ row.title }}</td>
                    <td>
                      @if (!row.isActive) {
                        <span class="badge badge-navy">Archived</span>
                      } @else if (row.isPublished) {
                        <span class="badge badge-open">Published</span>
                      } @else {
                        <span class="badge badge-gold">Draft</span>
                      }
                    </td>
                    <td>{{ row.updatedAt | date: 'dd MMM y, HH:mm' }}</td>
                    <td class="muted">{{ row.updatedBy || '—' }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>

    } @else {
      <ts-empty-state
        heading="Dashboard unavailable"
        body="The API could not be reached. Check that the backend is running and that MongoDB is available." />
    }
  `
})
export class AdminDashboard implements OnInit {
  private readonly api = inject(ApiService);
  readonly auth = inject(AuthService);

  readonly resources = RESOURCES;
  readonly stats = signal<DashboardStats | null>(null);
  readonly activity = signal<ActivityRow[]>([]);
  readonly loading = signal(true);

  ngOnInit(): void {
    this.api.get<DashboardStats>('admin/dashboard').subscribe({
      next: s => {
        this.stats.set(s);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });

    this.api.get<ActivityRow[]>('admin/recent-activity', { take: 12 }).subscribe({
      next: rows => this.activity.set(rows),
      error: () => this.activity.set([])
    });
  }
}
