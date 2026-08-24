import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { Notice } from '../../core/models/models';
import { EmptyState, PageBanner, SectionTitle } from '../../shared/components/ui';

interface CornerLink {
  label: string;
  link: string;
  requiresAuth: boolean;
  note: string;
}

@Component({
  selector: 'ts-students',
  standalone: true,
  imports: [RouterLink, DatePipe, PageBanner, SectionTitle, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ts-page-banner
      heading="Member Corner"
      lede="Join a live motion, register for an event, and download rulebooks, briefing packs and participation records — in one place." />

    <main class="section">
      <div class="container">

        @if (!auth.isAuthenticated()) {
          <div class="side-note" style="margin-bottom:22px">
            <b>Sign in for your own record</b>
            Speaking slots, adjudication feedback and participation records are available once you sign
            in with your membership number. Public information below is open to everyone.
            <div style="margin-top:10px">
              <a class="btn btn-gold btn-sm" routerLink="/login" [queryParams]="{ returnUrl: '/students' }">Member Login</a>
              <a class="btn btn-ghost btn-sm" routerLink="/register">New Registration</a>
            </div>
          </div>
        } @else {
          <div class="side-note" style="margin-bottom:22px">
            <b>Welcome, {{ auth.displayName() }}</b>
            @if (auth.user()?.enrolmentNo) {
              Membership number {{ auth.user()?.enrolmentNo }}.
            }
            Your record and registrations are available from the links below.
            <div style="margin-top:10px">
              <a class="btn btn-gold btn-sm" routerLink="/profile">My Account</a>
            </div>
          </div>
        }

        <div class="acad-grid">
          @for (item of links; track item.label) {
            <a class="acad-card" [routerLink]="item.link">
              <div class="ic"><svg><use href="#i-doc" /></svg></div>
              <h4>{{ item.label }}</h4>
              <p>{{ item.note }}</p>
              <div class="meta">
                <span>{{ item.requiresAuth ? 'Sign-in required' : 'Open access' }}</span>
              </div>
            </a>
          }
        </div>

      </div>
    </main>

    <section class="section alt">
      <div class="container">
        <ts-section-title kicker="Notifications" heading="Notices for Members"
          lede="Motion calendars, registration windows and circulars affecting members of the Centre." />

        @if (!notices().length) {
          <ts-empty-state heading="No current notices" body="Notifications for members will appear here as they are issued." />
        } @else {
          <div class="panel">
            @for (notice of notices(); track notice.id) {
              <div class="notice">
                <div class="date">
                  <b>{{ notice.noticeDate | date: 'dd' }}</b>
                  <span>{{ notice.noticeDate | date: 'MMM' }}</span>
                </div>
                <div class="meta">
                  <a [routerLink]="['/notices', notice.slug]">{{ notice.title }}</a>
                  <small>{{ notice.department }}</small>
                </div>
                <a class="btn btn-ghost btn-sm" [routerLink]="['/notices', notice.slug]">View</a>
              </div>
            }
          </div>
          <div class="text-center" style="margin-top:20px">
            <a class="btn btn-navy" routerLink="/notices">All Notices</a>
          </div>
        }
      </div>
    </section>
  `
})
export class StudentsPage implements OnInit {
  private readonly content = inject(ContentService);
  readonly auth = inject(AuthService);

  readonly notices = signal<Notice[]>([]);

  readonly links: CornerLink[] = [
    { label: 'Member Login',       link: '/login',    requiresAuth: false, note: 'Sign in with your membership number to reach your own record.' },
    { label: 'Join a Debate',      link: '/profile',  requiresAuth: true,  note: 'Put your name down for a side on any live motion.' },
    { label: 'Event Registration', link: '/notices',  requiresAuth: false, note: 'Registration windows for competitions, lectures and conferences.' },
    { label: 'Speaking Slots',     link: '/profile',  requiresAuth: true,  note: 'Confirmed rounds, running order and adjudication feedback.' },
    { label: 'Briefing Material',  link: '/library',  requiresAuth: false, note: 'Motion packs, the memorial bank and the debate rulebook.' },
    { label: 'Events',             link: '/events',   requiresAuth: false, note: 'Competitions, lectures and conferences open to members.' },
    { label: 'Bursaries',          link: '/notices',  requiresAuth: false, note: 'Travel and entry support for competition teams.' },
    { label: 'Participation Records', link: '/profile', requiresAuth: true, note: 'Motions argued, rounds adjudicated and letters of participation.' },
    { label: 'Downloads',          link: '/admissions', requiresAuth: false, note: 'Membership forms, rulebooks, fee schedule and style guides.' }
  ];

  ngOnInit(): void {
    this.content.for<Notice>('notices').list({ pageSize: 6 }).subscribe({
      next: res => this.notices.set(res.items),
      error: () => this.notices.set([])
    });
  }
}
