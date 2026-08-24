import {
  Component,
  OnInit,
  inject,
  signal,
  computed,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DebateAdminService } from './debate-admin.service';
import { AuthService } from '../../core/services/auth.service';
import { AdminDashboardStats, Debate, Participant, DebateStatus } from './debate-admin-models';

/**
 * Debate Admin Dashboard
 * Main admin interface for debate management
 * Features: Analytics, student management, debate control, judge assignment, scoring, results
 */
@Component({
  selector: 'ts-debate-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="admin-dashboard-container">
      <!-- Header -->
      <div class="db-header">
        <div class="db-h-content">
          <h1>Debate Administration</h1>
          <p class="db-subtitle">Manage debates, students, judges, and results</p>
        </div>
        <div class="db-h-actions">
          <button class="btn btn-primary" [routerLink]="['/admin/debates/create']">
            <span>+ New Debate</span>
          </button>
          <button class="btn btn-ghost" [routerLink]="['/admin/debates/topics']">
            Topics
          </button>
        </div>
      </div>

      <!-- Stats Grid -->
      @if (stats(); as s) {
        <div class="stats-grid">
          <!-- Students -->
          <div class="stat-card">
            <div class="stat-icon students">👥</div>
            <div class="stat-content">
              <div class="stat-label">Total Students</div>
              <div class="stat-value">{{ s.totalStudents }}</div>
              <div class="stat-sub">{{ s.activeStudents }} active</div>
            </div>
            <a class="stat-link" [routerLink]="['/admin/debates/students']">Manage →</a>
          </div>

          <!-- Debates -->
          <div class="stat-card">
            <div class="stat-icon debates">🎤</div>
            <div class="stat-content">
              <div class="stat-label">Total Debates</div>
              <div class="stat-value">{{ s.totalDebates }}</div>
              <div class="stat-sub">{{ s.ongoingDebates }} ongoing · {{ s.completedDebates }} completed</div>
            </div>
            <a class="stat-link" [routerLink]="['/admin/debates/list']">Manage →</a>
          </div>

          <!-- Judges -->
          <div class="stat-card">
            <div class="stat-icon judges">⚖️</div>
            <div class="stat-content">
              <div class="stat-label">Available Judges</div>
              <div class="stat-value">{{ s.totalJudges }}</div>
              <div class="stat-sub">{{ s.averageParticipationScore | number:'1.1' }}% avg score</div>
            </div>
            <a class="stat-link" [routerLink]="['/admin/debates/judges']">Manage →</a>
          </div>

          <!-- Pending Actions -->
          <div class="stat-card alert">
            <div class="stat-icon pending">⏳</div>
            <div class="stat-content">
              <div class="stat-label">Pending Approvals</div>
              <div class="stat-value">{{ s.pendingApprovals }}</div>
              <div class="stat-sub">{{ s.pendingResults }} results awaiting publication</div>
            </div>
            <a class="stat-link" [routerLink]="['/admin/debates/approvals']">Review →</a>
          </div>
        </div>
      } @else {
        <div class="loading-spinner">Loading dashboard...</div>
      }

      <!-- Main Content Grid -->
      <div class="dashboard-grid">
        <!-- Left Column -->
        <div class="col-main">
          <!-- Ongoing Debates -->
          <div class="card">
            <div class="card-header">
              <h3>Ongoing Debates</h3>
              <a class="link-sm" [routerLink]="['/admin/debates/list', { status: 'ongoing' }]">View All</a>
            </div>
            <div class="card-body">
              @if (ongoingDebates().length === 0) {
                <p class="empty-state">No debates currently ongoing</p>
              } @else {
                <div class="debates-list">
                  @for (debate of ongoingDebates(); track debate.id) {
                    <div class="debate-item">
                      <div class="debate-main">
                        <h4>{{ debate.title }}</h4>
                        <p class="debate-meta">
                          <span class="badge">{{ debate.category }}</span>
                          <span class="meta-text">
                            Started: {{ debate.startDate | date: 'short' }}
                          </span>
                        </p>
                      </div>
                      <div class="debate-actions">
                        <button
                          class="btn btn-sm btn-ghost"
                          [routerLink]="['/admin/debates', debate.id]">
                          Manage
                        </button>
                        <button
                          class="btn btn-sm"
                          (click)="endDebate(debate.id)">
                          End Debate
                        </button>
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          </div>

          <!-- Recent Participant Registrations -->
          <div class="card">
            <div class="card-header">
              <h3>Pending Approvals</h3>
              <a class="link-sm" [routerLink]="['/admin/debates/approvals']">View All</a>
            </div>
            <div class="card-body">
              @if (pendingParticipants().length === 0) {
                <p class="empty-state">No pending approvals</p>
              } @else {
                <div class="approvals-list">
                  @for (participant of pendingParticipants().slice(0, 5); track participant.id) {
                    <div class="approval-item">
                      <div class="approval-info">
                        <h4>{{ participant.student?.firstName }} {{ participant.student?.lastName }}</h4>
                        <p class="approval-meta">
                          <span>{{ participant.student?.institution }}</span>
                          <span class="dot">•</span>
                          <span>Applied {{ participant.joinedAt | date: 'short' }}</span>
                        </p>
                      </div>
                      <div class="approval-actions">
                        <button
                          class="btn btn-sm btn-success"
                          (click)="approveParticipant(participant.id)">
                          Approve
                        </button>
                        <button
                          class="btn btn-sm btn-ghost"
                          (click)="rejectParticipant(participant.id)">
                          Reject
                        </button>
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="col-side">
          <!-- Quick Actions -->
          <div class="card">
            <h3>Quick Actions</h3>
            <div class="actions-grid">
              <a class="action-btn" [routerLink]="['/admin/debates/create']">
                <span class="icon">📝</span>
                <span>Create Debate</span>
              </a>
              <a class="action-btn" [routerLink]="['/admin/debates/topics/new']">
                <span class="icon">💡</span>
                <span>Add Topic</span>
              </a>
              <a class="action-btn" [routerLink]="['/admin/debates/judges']">
                <span class="icon">⚖️</span>
                <span>Assign Judges</span>
              </a>
              <a class="action-btn" [routerLink]="['/admin/debates/reports']">
                <span class="icon">📊</span>
                <span>Generate Reports</span>
              </a>
              <a class="action-btn" [routerLink]="['/admin/debates/categories']">
                <span class="icon">📂</span>
                <span>Manage Categories</span>
              </a>
              <a class="action-btn" [routerLink]="['/admin/debates/students']">
                <span class="icon">👥</span>
                <span>Student Registry</span>
              </a>
            </div>
          </div>

          <!-- Categories Overview -->
          @if (stats(); as s) {
            <div class="card">
              <h3>Categories</h3>
              <div class="categories-list">
                @for (topic of s.topicsStats.slice(0, 5); track topic.topicId) {
                  <div class="category-item">
                    <span class="cat-title">{{ topic.topicTitle | slice: 0: 20 }}...</span>
                    <span class="cat-badge">{{ topic.debateCount }} debates</span>
                  </div>
                }
              </div>
              <a class="link-primary" [routerLink]="['/admin/debates/categories']">
                Manage All Categories →
              </a>
            </div>
          }

          <!-- Recent Activity -->
          <div class="card">
            <h3>System Status</h3>
            <div class="status-list">
              <div class="status-item">
                <span class="status-label">API Connection</span>
                <span class="badge badge-success">Connected</span>
              </div>
              <div class="status-item">
                <span class="status-label">Database</span>
                <span class="badge badge-success">Healthy</span>
              </div>
              <div class="status-item">
                <span class="status-label">Admin Rights</span>
                <span class="badge badge-success">{{ auth.roles().join(', ') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-dashboard-container {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .db-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #e5e7eb;
    }

    .db-h-content h1 {
      margin: 0;
      font-size: 2rem;
      color: #1f2937;
    }

    .db-subtitle {
      margin: 0.5rem 0 0 0;
      color: #6b7280;
      font-size: 0.95rem;
    }

    .db-h-actions {
      display: flex;
      gap: 1rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: all 0.2s ease;
    }

    .stat-card:hover {
      border-color: #3b82f6;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .stat-card.alert {
      border-color: #fca5a5;
      background: #fef2f2;
    }

    .stat-icon {
      font-size: 2.5rem;
      min-width: 60px;
      text-align: center;
    }

    .stat-content {
      flex: 1;
    }

    .stat-label {
      font-size: 0.85rem;
      color: #6b7280;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .stat-value {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1f2937;
      line-height: 1;
    }

    .stat-sub {
      font-size: 0.8rem;
      color: #9ca3af;
      margin-top: 0.25rem;
    }

    .stat-link {
      color: #3b82f6;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 600;
      white-space: nowrap;
      padding: 0.25rem 0.5rem;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
    }

    .card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 2rem;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      border-bottom: 1px solid #e5e7eb;
    }

    .card-header h3 {
      margin: 0;
      font-size: 1.1rem;
    }

    .link-sm {
      color: #3b82f6;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 600;
    }

    .card-body {
      padding: 1.5rem;
    }

    .empty-state {
      text-align: center;
      color: #9ca3af;
      padding: 2rem;
      margin: 0;
    }

    .debates-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .debate-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #f9fafb;
      border-radius: 6px;
      gap: 1rem;
    }

    .debate-main h4 {
      margin: 0 0 0.5rem 0;
      color: #1f2937;
    }

    .debate-meta {
      margin: 0;
      font-size: 0.85rem;
      color: #6b7280;
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: #dbeafe;
      color: #0c4a6e;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .meta-text {
      white-space: nowrap;
    }

    .debate-actions {
      display: flex;
      gap: 0.5rem;
    }

    .approvals-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .approval-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #f9fafb;
      border-radius: 6px;
      gap: 1rem;
    }

    .approval-info h4 {
      margin: 0 0 0.5rem 0;
      color: #1f2937;
    }

    .approval-meta {
      margin: 0;
      font-size: 0.85rem;
      color: #6b7280;
    }

    .dot {
      margin: 0 0.5rem;
    }

    .approval-actions {
      display: flex;
      gap: 0.5rem;
    }

    .btn {
      padding: 0.5rem 1rem;
      border: 1px solid #d1d5db;
      background: white;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
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

    .btn-success {
      background: #10b981;
      color: white;
      border-color: #10b981;
    }

    .btn-sm {
      padding: 0.375rem 0.75rem;
      font-size: 0.85rem;
    }

    .actions-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
    }

    .action-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      text-decoration: none;
      color: #1f2937;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 500;
      font-size: 0.85rem;
    }

    .action-btn:hover {
      background: #f3f4f6;
      border-color: #3b82f6;
      color: #3b82f6;
    }

    .icon {
      font-size: 1.5rem;
    }

    .categories-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .category-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem;
      background: #f9fafb;
      border-radius: 4px;
      font-size: 0.9rem;
    }

    .cat-title {
      color: #1f2937;
    }

    .cat-badge {
      background: #dbeafe;
      color: #0c4a6e;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .link-primary {
      color: #3b82f6;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .status-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .status-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem;
      background: #f9fafb;
      border-radius: 4px;
    }

    .status-label {
      color: #6b7280;
      font-size: 0.9rem;
    }

    .badge-success {
      background: #d1fae5;
      color: #065f46;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .loading-spinner {
      text-align: center;
      padding: 3rem;
      color: #9ca3af;
    }

    @media (max-width: 1024px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DebateAdminDashboard implements OnInit {
  private readonly debateAdmin = inject(DebateAdminService);
  readonly auth = inject(AuthService);

  readonly stats = signal<AdminDashboardStats | null>(null);
  readonly debates = signal<Debate[]>([]);
  readonly pendingApprovals = signal<Participant[]>([]);
  readonly loading = signal(true);

  readonly ongoingDebates = computed(() =>
    this.debates().filter(d => d.status === DebateStatus.ONGOING)
  );

  readonly pendingParticipants = computed(() =>
    this.pendingApprovals()
  );

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    // Load dashboard stats
    this.debateAdmin.getDashboardStats().subscribe({
      next: stats => {
        this.stats.set(stats);
      },
      error: err => {
        console.error('Error loading dashboard stats:', err);
        this.loading.set(false);
      }
    });

    // Load ongoing debates
    this.debateAdmin.getAllDebates({
      status: DebateStatus.ONGOING,
      limit: 10
    }).subscribe({
      next: result => {
        this.debates.set(result.data);
      },
      error: err => {
        console.error('Error loading debates:', err);
      }
    });

    // Load pending approvals
    this.debateAdmin.getPendingApprovals().subscribe({
      next: approvals => {
        this.pendingApprovals.set(approvals);
        this.loading.set(false);
      },
      error: err => {
        console.error('Error loading pending approvals:', err);
        this.loading.set(false);
      }
    });
  }

  endDebate(debateId: string): void {
    if (confirm('Are you sure you want to end this debate?')) {
      this.debateAdmin.endDebate(debateId).subscribe({
        next: () => {
          this.loadDashboardData();
        },
        error: err => {
          alert('Error ending debate: ' + err.message);
        }
      });
    }
  }

  approveParticipant(participantId: string): void {
    this.debateAdmin.approveParticipant(participantId).subscribe({
      next: () => {
        this.loadDashboardData();
      },
      error: err => {
        alert('Error approving participant: ' + err.message);
      }
    });
  }

  rejectParticipant(participantId: string): void {
    const reason = prompt('Provide rejection reason (optional):');
    if (reason !== null) {
      this.debateAdmin.rejectParticipant(participantId, reason).subscribe({
        next: () => {
          this.loadDashboardData();
        },
        error: err => {
          alert('Error rejecting participant: ' + err.message);
        }
      });
    }
  }
}
