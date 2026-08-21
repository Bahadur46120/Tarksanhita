import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ApiMessage, AppUser, PagedResult, Role } from '../../core/models/models';
import { EmptyState, LoadingState, Pager } from '../../shared/components/ui';

const ALL_ROLES: Role[] = ['Admin', 'Editor', 'Faculty', 'Student', 'User'];

@Component({
  selector: 'ts-admin-users',
  standalone: true,
  imports: [DatePipe, FormsModule, Pager, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 style="font-size:1.3rem;margin-bottom:4px">Users</h2>
    <p class="muted" style="font-size:.84rem;margin-bottom:18px">
      Assign roles and control account access. Only administrators can change roles.
    </p>

    <div class="list-toolbar">
      <div class="field grow">
        <label for="u-search">Search</label>
        <input id="u-search" type="search" placeholder="Name, email or enrolment number…"
               [(ngModel)]="search" (keyup.enter)="onSearch()" />
      </div>
      <div class="field">
        <label for="u-role">Role</label>
        <select id="u-role" [(ngModel)]="role" (change)="onSearch()">
          <option value="">All roles</option>
          @for (r of allRoles; track r) { <option [value]="r">{{ r }}</option> }
        </select>
      </div>
      <button type="button" class="btn btn-navy" (click)="onSearch()" style="align-self:flex-end">Search</button>
    </div>

    @if (loading()) {
      <ts-loading-state [count]="10" />
    } @else if (!items().length) {
      <ts-empty-state heading="No users found" body="Nothing matched the current filters." />
    } @else {
      <div class="table-scroll">
        <table class="ts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th style="width:130px">Enrolment</th>
              <th style="width:250px">Roles</th>
              <th style="width:110px">Status</th>
              <th style="width:130px">Last sign-in</th>
              <th style="width:230px;text-align:right">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (user of items(); track user.id) {
              <tr [style.opacity]="user.isActive ? 1 : 0.55">
                <td><b>{{ user.fullName }}</b></td>
                <td>{{ user.email }}</td>
                <td>{{ user.enrolmentNo || '—' }}</td>
                <td>
                  @if (editing() === user.id) {
                    <div class="flex flex-wrap gap-8">
                      @for (r of allRoles; track r) {
                        <label style="font-size:.76rem;display:flex;align-items:center;gap:4px;cursor:pointer">
                          <input type="checkbox"
                                 [checked]="draftRoles().includes(r)"
                                 (change)="toggleRole(r)" />
                          {{ r }}
                        </label>
                      }
                    </div>
                  } @else {
                    @for (r of user.roles; track r) {
                      <span class="badge badge-gold" style="margin-right:4px">{{ r }}</span>
                    }
                  }
                </td>
                <td>
                  @if (user.isActive) {
                    <span class="badge badge-open">Active</span>
                  } @else {
                    <span class="badge badge-navy">Disabled</span>
                  }
                </td>
                <td class="muted">{{ user.lastLoginAt ? (user.lastLoginAt | date: 'dd MMM y') : '—' }}</td>
                <td class="actions">
                  @if (editing() === user.id) {
                    <button type="button" class="btn btn-gold btn-sm" (click)="saveRoles(user)">Save</button>
                    <button type="button" class="btn btn-ghost btn-sm" (click)="editing.set(null)">Cancel</button>
                  } @else {
                    <button type="button" class="btn btn-ghost btn-sm" (click)="startEdit(user)">Edit Roles</button>
                    <button type="button" class="btn btn-sm"
                            [class.btn-navy]="user.isActive"
                            [class.btn-gold]="!user.isActive"
                            (click)="toggleActive(user)">
                      {{ user.isActive ? 'Disable' : 'Enable' }}
                    </button>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <ts-pager [page]="page" [totalPages]="totalPages()" [total]="total()" (pageChange)="onPage($event)" />
    }
  `
})
export class AdminUsers implements OnInit {
  private readonly api = inject(ApiService);
  private readonly snack = inject(MatSnackBar);
  readonly auth = inject(AuthService);

  readonly allRoles = ALL_ROLES;
  readonly result = signal<PagedResult<AppUser> | null>(null);
  readonly loading = signal(true);
  readonly editing = signal<string | null>(null);
  readonly draftRoles = signal<Role[]>([]);

  search = '';
  role = '';
  page = 1;

  readonly items = computed(() => this.result()?.items ?? []);
  readonly total = computed(() => this.result()?.totalCount ?? 0);
  readonly totalPages = computed(() => this.result()?.totalPages ?? 0);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.api.get<PagedResult<AppUser>>('admin/users', {
      page: this.page,
      pageSize: 20,
      search: this.search || undefined,
      category: this.role || undefined
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

  startEdit(user: AppUser): void {
    this.editing.set(user.id);
    this.draftRoles.set([...user.roles]);
  }

  toggleRole(role: Role): void {
    const current = this.draftRoles();
    this.draftRoles.set(
      current.includes(role) ? current.filter(r => r !== role) : [...current, role]
    );
  }

  saveRoles(user: AppUser): void {
    const roles = this.draftRoles();
    if (!roles.length) {
      this.snack.open('A user must hold at least one role.', 'Dismiss');
      return;
    }

    this.api.put<ApiMessage>(`admin/users/${user.id}/roles`, { roles }).subscribe({
      next: res => {
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
        this.editing.set(null);
        this.load();
      }
    });
  }

  toggleActive(user: AppUser): void {
    const action = user.isActive ? 'deactivate' : 'activate';
    this.api.patch<ApiMessage>(`admin/users/${user.id}/${action}`).subscribe({
      next: res => {
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
        this.load();
      }
    });
  }
}
