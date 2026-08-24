import {
  Component,
  OnInit,
  inject,
  signal,
  computed,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DebateAdminService } from '../../debate-admin.service';
import { Debate, DebateStatus } from '../../debate-admin-models';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Debate List Component
 * View, filter, and manage all debates
 */
@Component({
  selector: 'ts-debate-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="debate-list-container">
      <div class="list-header">
        <h2>All Debates</h2>
        <a class="btn btn-primary" routerLink="/admin/debates/create">+ New Debate</a>
      </div>

      <!-- Filters -->
      <div class="filters-section">
        <div class="filter-group">
          <label>Status</label>
          <select [(ngModel)]="statusFilter" (change)="applyFilters()">
            <option value="">All Status</option>
            <option value="draft">Draft</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Category</label>
          <select [(ngModel)]="categoryFilter" (change)="applyFilters()">
            <option value="">All Categories</option>
            <option *ngFor="let cat of categories()" [value]="cat">{{ cat }}</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search debates..."
            [(ngModel)]="searchTerm"
            (keyup)="applyFilters()">
        </div>

        <button class="btn btn-ghost" (click)="resetFilters()">Reset Filters</button>
      </div>

      <!-- Debates Table -->
      @if (loading()) {
        <div class="loading">Loading debates...</div>
      } @else if (filteredDebates().length === 0) {
        <div class="empty-state">
          <p>No debates found. <a routerLink="/admin/debates/create">Create one</a></p>
        </div>
      } @else {
        <div class="table-scroll">
          <table class="debates-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Category</th>
                <th>Start Date</th>
                <th>Participants</th>
                <th>Judges</th>
                <th style="width: 150px">Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (debate of paginatedDebates(); track debate.id) {
                <tr>
                  <td>
                    <strong>{{ debate.title }}</strong>
                    @if (debate.description) {
                      <p class="debate-desc">{{ debate.description | slice: 0: 50 }}...</p>
                    }
                  </td>
                  <td>
                    <span [ngClass]="'badge ' + getStatusClass(debate.status)">
                      {{ debate.status }}
                    </span>
                  </td>
                  <td>{{ debate.category }}</td>
                  <td>{{ debate.startDate | date: 'short' }}</td>
                  <td class="center">
                    {{ debate.participants?.length || 0 }} / {{ debate.maxParticipants }}
                  </td>
                  <td class="center">
                    {{ debate.judges?.length || 0 }} / {{ debate.judgePanelSize }}
                  </td>
                  <td>
                    <div class="actions">
                      <a class="action-link" [routerLink]="['/admin/debates', debate.id]"
                        title="View Details">👁</a>
                      <a class="action-link" [routerLink]="['/admin/debates', debate.id, 'edit']"
                        title="Edit">✏️</a>
                      <button class="action-link" (click)="deleteDebate(debate.id)"
                        title="Delete">🗑️</button>
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button
            class="btn btn-sm"
            [disabled]="currentPage() === 1"
            (click)="previousPage()">
            ← Previous
          </button>
          <span class="page-info">
            Page {{ currentPage() }} of {{ totalPages() }}
          </span>
          <button
            class="btn btn-sm"
            [disabled]="currentPage() >= totalPages()"
            (click)="nextPage()">
            Next →
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    .debate-list-container {
      padding: 2rem;
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 1rem;
    }

    .list-header h2 {
      margin: 0;
    }

    .filters-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: #f9fafb;
      border-radius: 8px;
      align-items: flex-end;
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .filter-group label {
      font-weight: 600;
      font-size: 0.9rem;
      color: #374151;
    }

    .filter-group input,
    .filter-group select {
      padding: 0.5rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-family: inherit;
    }

    .table-scroll {
      overflow-x: auto;
      margin-bottom: 2rem;
    }

    .debates-table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      overflow: hidden;
    }

    .debates-table thead {
      background: #f3f4f6;
      border-bottom: 2px solid #e5e7eb;
    }

    .debates-table th {
      padding: 1rem;
      text-align: left;
      font-weight: 600;
      color: #374151;
      font-size: 0.9rem;
    }

    .debates-table td {
      padding: 1rem;
      border-bottom: 1px solid #e5e7eb;
      color: #1f2937;
    }

    .debates-table tbody tr:hover {
      background: #f9fafb;
    }

    .debate-desc {
      margin: 0.25rem 0 0 0;
      font-size: 0.85rem;
      color: #6b7280;
      font-weight: normal;
    }

    .badge {
      display: inline-block;
      padding: 0.375rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .badge-draft {
      background: #fef3c7;
      color: #92400e;
    }

    .badge-upcoming {
      background: #dbeafe;
      color: #0c4a6e;
    }

    .badge-ongoing {
      background: #d1fae5;
      color: #065f46;
    }

    .badge-completed {
      background: #e0e7ff;
      color: #312e81;
    }

    .badge-cancelled {
      background: #fee2e2;
      color: #7f1d1d;
    }

    .badge-archived {
      background: #f3f4f6;
      color: #4b5563;
    }

    .center {
      text-align: center;
    }

    .actions {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
    }

    .action-link {
      font-size: 1.2rem;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
      color: inherit;
      text-decoration: none;
    }

    .action-link:hover {
      transform: scale(1.2);
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 2rem;
    }

    .page-info {
      color: #6b7280;
      font-size: 0.9rem;
      min-width: 120px;
      text-align: center;
    }

    .btn {
      padding: 0.5rem 1rem;
      border: 1px solid #d1d5db;
      background: white;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;
    }

    .btn-primary {
      background: #3b82f6;
      color: white;
      border-color: #3b82f6;
    }

    .btn-primary:hover {
      background: #2563eb;
    }

    .btn-ghost {
      background: transparent;
      border-color: transparent;
    }

    .btn-ghost:hover {
      background: #f3f4f6;
    }

    .btn-sm {
      padding: 0.375rem 0.75rem;
      font-size: 0.85rem;
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .loading,
    .empty-state {
      text-align: center;
      padding: 3rem;
      color: #9ca3af;
    }
  `]
})
export class DebateListComponent implements OnInit {
  private readonly debateAdmin = inject(DebateAdminService);
  private readonly snack = inject(MatSnackBar);

  readonly debates = signal<Debate[]>([]);
  readonly categories = signal<string[]>([]);
  readonly loading = signal(true);
  readonly statusFilter = signal<string>('');
  readonly categoryFilter = signal<string>('');
  readonly searchTerm = signal<string>('');
  readonly currentPage = signal(1);
  readonly pageSize = 10;

  readonly filteredDebates = computed(() => {
    const all = this.debates();
    const status = this.statusFilter();
    const category = this.categoryFilter();
    const search = this.searchTerm().toLowerCase();

    return all.filter(d => {
      const statusMatch = !status || d.status === status;
      const categoryMatch = !category || d.category === category;
      const searchMatch = !search ||
        d.title.toLowerCase().includes(search) ||
        d.description?.toLowerCase().includes(search);

      return statusMatch && categoryMatch && searchMatch;
    });
  });

  readonly totalPages = computed(() =>
    Math.ceil(this.filteredDebates().length / this.pageSize)
  );

  readonly paginatedDebates = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredDebates().slice(start, start + this.pageSize);
  });

  ngOnInit(): void {
    this.loadDebates();
  }

  private loadDebates(): void {
    this.debateAdmin.getAllDebates({ limit: 1000 }).subscribe({
      next: result => {
        this.debates.set(result.data);
        const cats = [...new Set(result.data.map(d => d.category))];
        this.categories.set(cats);
        this.loading.set(false);
      },
      error: err => {
        this.snack.open('Error loading debates', 'Close');
        this.loading.set(false);
      }
    });
  }

  applyFilters(): void {
    this.currentPage.set(1);
  }

  resetFilters(): void {
    this.statusFilter.set('');
    this.categoryFilter.set('');
    this.searchTerm.set('');
    this.currentPage.set(1);
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
    }
  }

  deleteDebate(debateId: string): void {
    if (confirm('Are you sure you want to delete this debate?')) {
      this.debateAdmin.deleteDebate(debateId).subscribe({
        next: () => {
          this.snack.open('Debate deleted', 'Close');
          this.loadDebates();
        },
        error: err => {
          this.snack.open('Error deleting debate', 'Close');
        }
      });
    }
  }

  getStatusClass(status: string): string {
    return `badge-${status}`;
  }
}
