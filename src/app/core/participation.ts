import { Role } from './models/models';

/** One row of the member participation report. */
export interface StudentParticipation {
  studentId: string;
  fullName: string;
  email: string;
  enrolmentNo?: string;
  roles: Role[];
  isActive: boolean;

  /** Debates the member was listed on or posted in. */
  debatesJoined: number;
  /** Arguments and rebuttals posted across all debates. */
  argumentsPosted: number;
  /** Votes those arguments received. */
  votesReceived: number;
  /** Events the member is registered for. */
  eventsRegistered: number;

  /** Titles behind the counts, for the expanded row. */
  debates: string[];
  events: string[];

  /** Most recent dated activity, ISO. */
  lastActivityAt?: string;
}

/**
 * Optional API shape: one member registered for one event. Read from
 * `admin/event-registrations` when the API offers it.
 */
export interface EventRegistration {
  eventId: string;
  eventTitle?: string;
  userId?: string;
  userName?: string;
  userEmail?: string;
  registeredAt?: string;
}

export interface ParticipationReport {
  rows: StudentParticipation[];
  generatedAt: string;
  /** Where each part of the report came from — shown under the table. */
  sources: ParticipationSource[];
}

export interface ParticipationSource {
  label: string;
  detail: string;
  ok: boolean;
}

/** Totals across the whole report. */
export function summarise(rows: StudentParticipation[]) {
  return {
    students: rows.length,
    active: rows.filter(r => r.debatesJoined > 0 || r.eventsRegistered > 0).length,
    debates: rows.reduce((n, r) => n + r.debatesJoined, 0),
    argumentsPosted: rows.reduce((n, r) => n + r.argumentsPosted, 0),
    events: rows.reduce((n, r) => n + r.eventsRegistered, 0)
  };
}
