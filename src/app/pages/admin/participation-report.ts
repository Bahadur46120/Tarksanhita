import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParticipationService } from '../../core/services/participation.service';
import { ParticipationReport, StudentParticipation, summarise } from '../../core/participation';
import { EmptyState, LoadingState } from '../../shared/components/ui';

type SortKey = 'fullName' | 'debatesJoined' | 'argumentsPosted' | 'votesReceived' | 'eventsRegistered' | 'lastActivityAt';

@Component({
  selector: 'ts-admin-participation',
  standalone: true,
  imports: [DatePipe, FormsModule, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 style="font-size:1.3rem;margin-bottom:4px">Member Participation</h2>
    <p class="muted" style="font-size:.84rem;margin-bottom:18px">
      Participation is counted from two things only: debates and events —
      debates joined, arguments filed, and event registrations.
      @if (report(); as r) {
        <span> Generated {{ r.generatedAt | date: 'dd MMM y, HH:mm' }}.</span>
      }
    </p>

    @if (loading()) {
      <ts-loading-state [count]="10" />
    } @else if (report(); as r) {

      <div class="tile-grid">
        <div class="tile"><div class="k">Members</div><div class="v">{{ totals().students }}</div><div class="s">registered members</div></div>
        <div class="tile"><div class="k">Participating</div><div class="v">{{ totals().active }}</div><div class="s">{{ participationRate() }}% of members</div></div>
        <div class="tile"><div class="k">Debate Entries</div><div class="v">{{ totals().debates }}</div><div class="s">member–debate pairs</div></div>
        <div class="tile"><div class="k">Arguments</div><div class="v">{{ totals().argumentsPosted }}</div><div class="s">filed in total</div></div>
        <div class="tile"><div class="k">Event Registrations</div><div class="v">{{ totals().events }}</div><div class="s">across all events</div></div>
      </div>

      <div class="list-toolbar" style="margin-top:20px">
        <div class="field grow">
          <label for="p-search">Search</label>
          <input id="p-search" type="search" placeholder="Name, email or membership ID…"
                 [(ngModel)]="search" (ngModelChange)="searchTerm.set($event)" />
        </div>
        <div class="field">
          <label for="p-filter">Show</label>
          <select id="p-filter" [(ngModel)]="filter" (ngModelChange)="filterBy.set($event)">
            <option value="all">All members</option>
            <option value="participating">Participating only</option>
            <option value="none">No participation</option>
          </select>
        </div>
        <button type="button" class="btn btn-ghost" style="align-self:flex-end" (click)="reload()">Refresh</button>
        <button type="button" class="btn btn-navy" style="align-self:flex-end" (click)="exportCsv()">Export CSV</button>
      </div>

      @if (!visible().length) {
        <ts-empty-state heading="No members found" body="Nothing matched the current search or filter." />
      } @else {
        <div class="table-scroll">
          <table class="ts-table report-table">
            <thead>
              <tr>
                <th (click)="sortBy('fullName')" class="sortable">Member {{ arrow('fullName') }}</th>
                <th style="width:150px">Membership ID</th>
                <th style="width:110px" class="sortable num" (click)="sortBy('debatesJoined')">Debates {{ arrow('debatesJoined') }}</th>
                <th style="width:115px" class="sortable num" (click)="sortBy('argumentsPosted')">Arguments {{ arrow('argumentsPosted') }}</th>
                <th style="width:95px" class="sortable num" (click)="sortBy('votesReceived')">Votes {{ arrow('votesReceived') }}</th>
                <th style="width:105px" class="sortable num" (click)="sortBy('eventsRegistered')">Events {{ arrow('eventsRegistered') }}</th>
                <th style="width:135px" class="sortable" (click)="sortBy('lastActivityAt')">Last active {{ arrow('lastActivityAt') }}</th>
                <th style="width:90px;text-align:right">Detail</th>
              </tr>
            </thead>
            <tbody>
              @for (row of visible(); track row.studentId) {
                <tr [style.opacity]="row.isActive ? 1 : 0.55">
                  <td>
                    <b>{{ row.fullName }}</b>
                    <div class="muted" style="font-size:.75rem">{{ row.email }}</div>
                  </td>
                  <td>{{ row.enrolmentNo || '—' }}</td>
                  <td class="num">{{ row.debatesJoined }}</td>
                  <td class="num">{{ row.argumentsPosted }}</td>
                  <td class="num">{{ row.votesReceived }}</td>
                  <td class="num">{{ row.eventsRegistered }}</td>
                  <td class="muted">{{ row.lastActivityAt ? (row.lastActivityAt | date: 'dd MMM y') : '—' }}</td>
                  <td class="actions">
                    <button type="button" class="btn btn-ghost btn-sm" (click)="toggle(row.studentId)">
                      {{ expanded() === row.studentId ? 'Hide' : 'View' }}
                    </button>
                  </td>
                </tr>

                @if (expanded() === row.studentId) {
                  <tr class="detail-row">
                    <td colspan="8">
                      <div class="detail-grid">
                        <div>
                          <b>Debates ({{ row.debates.length }})</b>
                          @if (row.debates.length) {
                            <ul>@for (d of row.debates; track d) { <li>{{ d }}</li> }</ul>
                          } @else {
                            <p class="muted">None recorded.</p>
                          }
                        </div>
                        <div>
                          <b>Events ({{ row.events.length }})</b>
                          @if (row.events.length) {
                            <ul>@for (e of row.events; track e) { <li>{{ e }}</li> }</ul>
                          } @else {
                            <p class="muted">None recorded.</p>
                          }
                        </div>
                      </div>
                    </td>
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>

        <div class="hint-box">
          <b>Where these figures come from</b>
          @for (source of r.sources; track source.label) {
            <div>
              <span class="badge" [class.badge-open]="source.ok" [class.badge-navy]="!source.ok">{{ source.label }}</span>
              {{ source.detail }}
            </div>
          }
        </div>
      }
    }
  `
})
export class AdminParticipationReport implements OnInit {
  private readonly service = inject(ParticipationService);
  private readonly snack = inject(MatSnackBar);

  readonly report = signal<ParticipationReport | null>(null);
  readonly loading = signal(true);
  readonly expanded = signal<string | null>(null);

  readonly searchTerm = signal('');
  readonly filterBy = signal<'all' | 'participating' | 'none'>('all');
  readonly sortKey = signal<SortKey>('debatesJoined');
  readonly descending = signal(true);

  /** ngModel targets — the signals above drive the computed view. */
  search = '';
  filter: 'all' | 'participating' | 'none' = 'all';

  readonly rows = computed(() => this.report()?.rows ?? []);
  readonly totals = computed(() => summarise(this.rows()));

  readonly participationRate = computed(() => {
    const { students, active } = this.totals();
    return students ? Math.round((active / students) * 100) : 0;
  });

  readonly visible = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const mode = this.filterBy();
    const key = this.sortKey();
    const dir = this.descending() ? -1 : 1;

    const filtered = this.rows().filter(row => {
      const participates = row.debatesJoined > 0 || row.eventsRegistered > 0;
      if (mode === 'participating' && !participates) return false;
      if (mode === 'none' && participates) return false;
      if (!term) return true;

      return (
        row.fullName.toLowerCase().includes(term) ||
        row.email.toLowerCase().includes(term) ||
        (row.enrolmentNo ?? '').toLowerCase().includes(term)
      );
    });

    return [...filtered].sort((a, b) => compare(a, b, key) * dir);
  });

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.loading.set(true);
    this.service.load().subscribe({
      next: report => {
        this.report.set(report);
        this.loading.set(false);
      },
      error: () => {
        this.report.set(null);
        this.loading.set(false);
      }
    });
  }

  toggle(id: string): void {
    this.expanded.set(this.expanded() === id ? null : id);
  }

  sortBy(key: SortKey): void {
    if (this.sortKey() === key) {
      this.descending.set(!this.descending());
      return;
    }
    this.sortKey.set(key);
    this.descending.set(key !== 'fullName');
  }

  arrow(key: SortKey): string {
    if (this.sortKey() !== key) return '';
    return this.descending() ? '▼' : '▲';
  }

  exportCsv(): void {
    const header = [
      'Member', 'Email', 'Membership ID', 'Debates joined', 'Arguments posted',
      'Votes received', 'Events registered', 'Last active', 'Debate titles', 'Event titles'
    ];

    const lines = this.visible().map(row => [
      row.fullName,
      row.email,
      row.enrolmentNo ?? '',
      row.debatesJoined,
      row.argumentsPosted,
      row.votesReceived,
      row.eventsRegistered,
      row.lastActivityAt ? row.lastActivityAt.slice(0, 10) : '',
      row.debates.join('; '),
      row.events.join('; ')
    ]);

    const csv = [header, ...lines].map(cells => cells.map(cell => quote(String(cell))).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([`﻿${csv}`], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');

    link.href = url;
    link.download = `student-participation-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);

    this.snack.open(`Exported ${lines.length} rows.`, 'Close', { duration: 3000, panelClass: ['ts-snack-ok'] });
  }
}

function compare(a: StudentParticipation, b: StudentParticipation, key: SortKey): number {
  if (key === 'fullName') return a.fullName.localeCompare(b.fullName);
  if (key === 'lastActivityAt') {
    return new Date(a.lastActivityAt ?? 0).getTime() - new Date(b.lastActivityAt ?? 0).getTime();
  }
  return (a[key] as number) - (b[key] as number);
}

function quote(value: string): string {
  return /[",\r\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}
