import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ApiMessage, ContactMessage, PagedResult } from '../../core/models/models';
import { EmptyState, LoadingState, Pager } from '../../shared/components/ui';

const STATUSES = ['New', 'InProgress', 'Resolved', 'Spam'] as const;

@Component({
  selector: 'ts-admin-contacts',
  standalone: true,
  imports: [DatePipe, FormsModule, Pager, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 style="font-size:1.3rem;margin-bottom:4px">Enquiries</h2>
    <p class="muted" style="font-size:.84rem;margin-bottom:18px">
      Messages submitted through the public contact form.
    </p>

    <div class="list-toolbar">
      <div class="field grow">
        <label for="c-search">Search</label>
        <input id="c-search" type="search" placeholder="Name, email or subject…"
               [(ngModel)]="search" (keyup.enter)="onSearch()" />
      </div>
      <div class="field">
        <label for="c-status">Status</label>
        <select id="c-status" [(ngModel)]="status" (change)="onSearch()">
          <option value="">All statuses</option>
          @for (s of statuses; track s) { <option [value]="s">{{ s }}</option> }
        </select>
      </div>
      <button type="button" class="btn btn-navy" (click)="onSearch()" style="align-self:flex-end">Search</button>
    </div>

    @if (loading()) {
      <ts-loading-state [count]="10" />
    } @else if (!items().length) {
      <ts-empty-state heading="No enquiries" body="Messages sent through the contact form will appear here." />
    } @else {
      @for (message of items(); track message.id) {
        <div class="card" [style.border-left]="'4px solid ' + colourFor(message.status)">
          <div class="flex items-center justify-between flex-wrap gap-14">
            <div>
              <h3 style="border:0;padding:0;margin:0;display:block;font-size:1rem">{{ message.subject }}</h3>
              <div class="muted" style="font-size:.8rem">
                {{ message.name }} &mdash; {{ message.email }}
                @if (message.phone) { &mdash; {{ message.phone }} }
              </div>
            </div>
            <div class="text-end">
              <span class="badge" [style.background]="colourFor(message.status)" style="color:#fff">{{ message.status }}</span>
              <span class="badge badge-outline" style="margin-left:5px">{{ message.department }}</span>
              <div class="muted" style="font-size:.74rem;margin-top:4px">{{ message.createdAt | date: 'dd MMM y, HH:mm' }}</div>
            </div>
          </div>

          <p style="margin:12px 0;font-size:.88rem;white-space:pre-wrap">{{ message.message }}</p>

          @if (message.responseNote) {
            <div class="hint-box" style="margin-bottom:10px">
              <b>Internal note</b>
              {{ message.responseNote }}
              @if (message.handledBy) { <div class="muted" style="margin-top:4px">Handled by {{ message.handledBy }}</div> }
            </div>
          }

          @if (editing() === message.id) {
            <div class="form-grid">
              <div class="field">
                <label [attr.for]="'st-' + message.id">New status</label>
                <select [id]="'st-' + message.id" [(ngModel)]="draftStatus">
                  @for (s of statuses; track s) { <option [value]="s">{{ s }}</option> }
                </select>
              </div>
              <div class="field full">
                <label [attr.for]="'nt-' + message.id">Internal note</label>
                <textarea [id]="'nt-' + message.id" rows="3" [(ngModel)]="draftNote"
                          placeholder="Record what was done, for the audit trail."></textarea>
              </div>
            </div>
            <div class="form-actions">
              <button type="button" class="btn btn-gold" (click)="saveStatus(message)">Save</button>
              <button type="button" class="btn btn-ghost" (click)="editing.set(null)">Cancel</button>
            </div>
          } @else {
            <div class="flex flex-wrap gap-8">
              <button type="button" class="btn btn-ghost btn-sm" (click)="startEdit(message)">Update Status</button>
              <a class="btn btn-ghost btn-sm" [href]="'mailto:' + message.email + '?subject=Re: ' + message.subject">Reply by Email</a>
              <button type="button" class="btn btn-ghost btn-sm" (click)="archive(message)">Archive</button>
              @if (auth.isAdmin()) {
                <button type="button" class="btn btn-ghost btn-sm"
                        style="color:#b3261e;border-color:#b3261e"
                        (click)="remove(message)">Delete</button>
              }
            </div>
          }
        </div>
      }

      <ts-pager [page]="page" [totalPages]="totalPages()" [total]="total()" (pageChange)="onPage($event)" />
    }
  `
})
export class AdminContacts implements OnInit {
  private readonly api = inject(ApiService);
  private readonly snack = inject(MatSnackBar);
  readonly auth = inject(AuthService);

  readonly statuses = STATUSES;
  readonly result = signal<PagedResult<ContactMessage> | null>(null);
  readonly loading = signal(true);
  readonly editing = signal<string | null>(null);

  search = '';
  status = '';
  page = 1;
  draftStatus = 'New';
  draftNote = '';

  readonly items = computed(() => this.result()?.items ?? []);
  readonly total = computed(() => this.result()?.totalCount ?? 0);
  readonly totalPages = computed(() => this.result()?.totalPages ?? 0);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.api.get<PagedResult<ContactMessage>>('contacts', {
      page: this.page,
      pageSize: 10,
      search: this.search || undefined,
      category: this.status || undefined
    }).subscribe({
      next: res => {
        this.result.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.result.set(null);
        this.loading.set(false);
      }
    });
  }

  onSearch(): void {
    this.page = 1;
    this.load();
  }

  onPage(p: number): void {
    this.page = p;
    this.load();
  }

  startEdit(message: ContactMessage): void {
    this.editing.set(message.id ?? null);
    this.draftStatus = message.status;
    this.draftNote = message.responseNote ?? '';
  }

  saveStatus(message: ContactMessage): void {
    this.api.patch<ApiMessage>(`contacts/${message.id}/status`, {
      status: this.draftStatus,
      responseNote: this.draftNote || null
    }).subscribe({
      next: res => {
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
        this.editing.set(null);
        this.load();
      }
    });
  }

  archive(message: ContactMessage): void {
    this.api.patch<ApiMessage>(`contacts/${message.id}/deactivate`).subscribe({
      next: res => {
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
        this.load();
      }
    });
  }

  remove(message: ContactMessage): void {
    if (!confirm(`Delete the enquiry from ${message.name} permanently?`)) return;

    this.api.delete<ApiMessage>(`contacts/${message.id}`).subscribe({
      next: res => {
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
        this.load();
      }
    });
  }

  colourFor(status: string): string {
    switch (status) {
      case 'New': return '#b3261e';
      case 'InProgress': return '#a8861c';
      case 'Resolved': return '#1d6f42';
      default: return '#465063';
    }
  }
}
