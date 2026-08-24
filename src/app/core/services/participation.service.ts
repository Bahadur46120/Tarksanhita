import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AppUser, Debate, EventItem, PagedResult } from '../models/models';
import {
  EventRegistration,
  ParticipationReport,
  ParticipationSource,
  StudentParticipation
} from '../participation';
import { DEMO_PARTICIPATION } from '../demo-participation';
import { environment } from '../../../environments/environment';

const PAGE = 500;

/**
 * Builds the member participation report.
 *
 * There is no single API endpoint for this, so the report is assembled in the
 * browser from the collections that do exist: users, debates (listed participants
 * and posted arguments) and — where the API offers it — event registrations.
 * Anything the API cannot supply is reported honestly under the table rather than
 * shown as a zero. A demo session, or an API that cannot be reached at all, falls
 * back to the sample rows in demo-participation.ts.
 */
@Injectable({ providedIn: 'root' })
export class ParticipationService {
  private readonly api = inject(ApiService);
  private readonly auth = inject(AuthService);

  load(): Observable<ParticipationReport> {
    if (environment.demoLogin && this.auth.isDemoSession()) {
      return of(this.demoReport('Demonstration session — sample records, not live data.'));
    }

    return forkJoin({
      users: this.get<PagedResult<AppUser>>('admin/users', { page: 1, pageSize: PAGE, category: 'Student' }),
      debates: this.get<PagedResult<Debate>>('debates', { page: 1, pageSize: PAGE, includeUnpublished: true }),
      events: this.get<PagedResult<EventItem>>('events', { page: 1, pageSize: PAGE, includeUnpublished: true }),
      registrations: this.get<EventRegistration[]>('admin/event-registrations')
    }).pipe(
      map(res => this.build(res)),
      catchError(() => of(this.demoReport('The API could not be reached — showing sample records.')))
    );
  }

  /** A failed collection must not fail the whole report. */
  private get<T>(path: string, query?: Record<string, unknown>): Observable<T | null> {
    return this.api.get<T>(path, query).pipe(catchError(() => of(null)));
  }

  private build(res: {
    users: PagedResult<AppUser> | null;
    debates: PagedResult<Debate> | null;
    events: PagedResult<EventItem> | null;
    registrations: EventRegistration[] | null;
  }): ParticipationReport {
    const users = (res.users?.items ?? []).filter(u => u.roles.includes('Student'));

    if (!users.length && !res.debates) {
      return this.demoReport('The API returned no members — showing sample records.');
    }

    const rows = new Map<string, StudentParticipation>();
    const byKey = new Map<string, StudentParticipation>();

    const remember = (row: StudentParticipation) => {
      rows.set(row.studentId, row);
      byKey.set(row.studentId.toLowerCase(), row);
      byKey.set(row.email.toLowerCase(), row);
      byKey.set(row.fullName.trim().toLowerCase(), row);
    };

    for (const user of users) {
      remember({
        studentId: user.id,
        fullName: user.fullName,
        email: user.email,
        enrolmentNo: user.enrolmentNo,
        roles: user.roles,
        isActive: user.isActive,
        debatesJoined: 0,
        argumentsPosted: 0,
        votesReceived: 0,
        eventsRegistered: 0,
        debates: [],
        events: [],
        lastActivityAt: user.lastLoginAt
      });
    }

    // A debate names its participants and carries every argument posted in it.
    for (const debate of res.debates?.items ?? []) {
      const title = debate.motion || debate.title;
      const touched = new Set<StudentParticipation>();

      for (const name of debate.participants ?? []) {
        const row = byKey.get(name.trim().toLowerCase());
        if (row) touched.add(row);
      }

      for (const argument of debate.arguments ?? []) {
        const row =
          (argument.authorId ? byKey.get(argument.authorId.toLowerCase()) : undefined) ??
          byKey.get(argument.authorName.trim().toLowerCase());
        if (!row) continue;

        touched.add(row);
        row.argumentsPosted += 1;
        row.votesReceived += argument.votes ?? 0;
        row.lastActivityAt = later(row.lastActivityAt, argument.postedAt);
      }

      for (const row of touched) {
        row.debatesJoined += 1;
        row.debates.push(title);
      }
    }

    const eventTitles = new Map((res.events?.items ?? []).map(e => [e.id ?? '', e.title] as const));

    for (const reg of res.registrations ?? []) {
      const row =
        (reg.userId ? byKey.get(reg.userId.toLowerCase()) : undefined) ??
        (reg.userEmail ? byKey.get(reg.userEmail.toLowerCase()) : undefined);
      if (!row) continue;

      row.eventsRegistered += 1;
      row.events.push(reg.eventTitle ?? eventTitles.get(reg.eventId) ?? 'Event');
      row.lastActivityAt = later(row.lastActivityAt, reg.registeredAt);
    }

    const sources: ParticipationSource[] = [
      {
        label: 'Members',
        detail: res.users ? `${users.length} accounts holding the Member role.` : 'admin/users could not be read.',
        ok: !!res.users
      },
      {
        label: 'Debates',
        detail: res.debates
          ? `${res.debates.items.length} debates: listed participants and posted arguments.`
          : 'debates could not be read.',
        ok: !!res.debates
      },
      {
        label: 'Events',
        detail: res.registrations
          ? `${res.registrations.length} registrations.`
          : 'The API exposes no per-member event registrations (admin/event-registrations), so event counts are unavailable.',
        ok: !!res.registrations
      }
    ];

    return {
      rows: [...rows.values()].sort(byActivity),
      generatedAt: new Date().toISOString(),
      sources
    };
  }

  private demoReport(note: string): ParticipationReport {
    return {
      rows: DEMO_PARTICIPATION.map(row => ({ ...row, debates: [...row.debates], events: [...row.events] })).sort(
        byActivity
      ),
      generatedAt: new Date().toISOString(),
      sources: [{ label: 'Sample data', detail: note, ok: false }]
    };
  }
}

/** Most engaged first, then alphabetically. */
function byActivity(a: StudentParticipation, b: StudentParticipation): number {
  const score = (r: StudentParticipation) => r.debatesJoined * 3 + r.argumentsPosted + r.eventsRegistered * 2;
  return score(b) - score(a) || a.fullName.localeCompare(b.fullName);
}

function later(current: string | undefined, candidate: string | undefined): string | undefined {
  if (!candidate) return current;
  if (!current) return candidate;
  return new Date(candidate) > new Date(current) ? candidate : current;
}
