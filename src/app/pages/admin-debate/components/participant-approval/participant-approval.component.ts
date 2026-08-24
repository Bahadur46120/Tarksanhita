import {
  Component,
  OnInit,
  inject,
  signal,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DebateAdminService } from '../../debate-admin.service';
import { Participant } from '../../debate-admin-models';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Participant Approval Component
 * Review and approve/reject debate participant registrations
 */
@Component({
  selector: 'ts-participant-approval',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="approval-container">
      <div class="approval-header">
        <h2>Participant Registrations</h2>
        <p class="subtitle">Review and approve participant registrations</p>
      </div>

      @if (loading()) {
        <div class="loading">Loading pending approvals...</div>
      } @else if (pendingParticipants().length === 0) {
        <div class="empty-state">
          <p>✓ No pending approvals. All participants have been reviewed.</p>
        </div>
      } @else {
        <div class="stats-bar">
          <div class="stat">
            <span class="stat-label">Pending Approvals</span>
            <span class="stat-value">{{ pendingParticipants().length }}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Approved</span>
            <span class="stat-value approved">{{ approvedCount }}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Rejected</span>
            <span class="stat-value rejected">{{ rejectedCount }}</span>
          </div>
        </div>

        <div class="approvals-grid">
          @for (participant of pendingParticipants(); track participant.id) {
            <div class="approval-card">
              <div class="card-header">
                <div class="student-info">
                  <h3>{{ participant.student?.firstName }} {{ participant.student?.lastName }}</h3>
                  <p class="institution">{{ participant.student?.institution }}</p>
                </div>
                <span [ngClass]="'badge badge-' + participant.position">
                  {{ participant.position }}
                </span>
              </div>

              <div class="card-details">
                <div class="detail-row">
                  <span class="label">Email:</span>
                  <span class="value">{{ participant.student?.email }}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Phone:</span>
                  <span class="value">{{ participant.student?.phone || 'N/A' }}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Registered:</span>
                  <span class="value">{{ participant.joinedAt | date: 'short' }}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Student Tier:</span>
                  <span class="value">{{ participant.student?.tier || 'Unknown' }}</span>
                </div>
                @if (participant.student?.bio) {
                  <div class="detail-row bio">
                    <span class="label">Bio:</span>
                    <span class="value">{{ participant.student?.bio }}</span>
                  </div>
                }
              </div>

              <div class="card-stats">
                <div class="stat-mini">
                  <span class="label">Debates</span>
                  <span class="value">{{ participant.student?.totalDebates || 0 }}</span>
                </div>
                <div class="stat-mini">
                  <span class="label">Wins</span>
                  <span class="value">{{ participant.student?.winsCount || 0 }}</span>
                </div>
                <div class="stat-mini">
                  <span class="label">Avg Score</span>
                  <span class="value">{{ participant.student?.averageScore || 0 | number: '1.1' }}</span>
                </div>
              </div>

              <div class="card-actions">
                <button class="btn btn-success" (click)="approveParticipant(participant.id)">
                  ✓ Approve
                </button>
                <button class="btn btn-reject" (click)="showRejectForm(participant.id)">
                  ✗ Reject
                </button>
              </div>

              @if (showingRejectForm === participant.id) {
                <div class="reject-form">
                  <textarea
                    placeholder="Reason for rejection (optional)"
                    [(ngModel)]="rejectionReason">
                  </textarea>
                  <div class="form-actions">
                    <button class="btn btn-sm" (click)="confirmReject(participant.id)">
                      Confirm Rejection
                    </button>
                    <button class="btn btn-sm btn-ghost" (click)="cancelReject()">
                      Cancel
                    </button>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .approval-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .approval-header {
      margin-bottom: 2rem;
    }

    .approval-header h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1.8rem;
    }

    .subtitle {
      margin: 0;
      color: #6b7280;
    }

    .stats-bar {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 8px;
      color: white;
    }

    .stat {
      display: flex;
      flex-direction: column;
    }

    .stat-label {
      font-size: 0.85rem;
      opacity: 0.9;
      margin-bottom: 0.25rem;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
    }

    .stat-value.approved {
      color: #10b981;
    }

    .stat-value.rejected {
      color: #ef4444;
    }

    .approvals-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 1.5rem;
    }

    .approval-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .approval-card:hover {
      border-color: #3b82f6;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
    }

    .card-header {
      padding: 1.5rem;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
    }

    .student-info h3 {
      margin: 0 0 0.25rem 0;
      color: #1f2937;
    }

    .institution {
      margin: 0;
      font-size: 0.9rem;
      color: #6b7280;
    }

    .badge {
      display: inline-block;
      padding: 0.375rem 0.75rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
      white-space: nowrap;
    }

    .badge-for {
      background: #d1fae5;
      color: #065f46;
    }

    .badge-against {
      background: #fee2e2;
      color: #7f1d1d;
    }

    .badge-observer {
      background: #dbeafe;
      color: #0c4a6e;
    }

    .card-details {
      padding: 1.5rem;
      border-bottom: 1px solid #e5e7eb;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
    }

    .detail-row.bio {
      flex-direction: column;
    }

    .detail-row .label {
      color: #6b7280;
      font-weight: 600;
    }

    .detail-row .value {
      color: #1f2937;
      text-align: right;
    }

    .detail-row.bio .value {
      text-align: left;
      margin-top: 0.25rem;
      color: #4b5563;
      font-style: italic;
    }

    .card-stats {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      padding: 1rem;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
    }

    .stat-mini {
      text-align: center;
    }

    .stat-mini .label {
      display: block;
      font-size: 0.75rem;
      color: #6b7280;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .stat-mini .value {
      display: block;
      font-size: 1.25rem;
      font-weight: 700;
      color: #1f2937;
    }

    .card-actions {
      padding: 1rem;
      display: flex;
      gap: 0.75rem;
    }

    .btn {
      flex: 1;
      padding: 0.75rem 1rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }

    .btn-success {
      background: #10b981;
      color: white;
    }

    .btn-success:hover {
      background: #059669;
      transform: translateY(-2px);
    }

    .btn-reject {
      background: #f3f4f6;
      color: #7f1d1d;
      border: 1px solid #fee2e2;
    }

    .btn-reject:hover {
      background: #fee2e2;
    }

    .btn-ghost {
      background: transparent;
      border: 1px solid #d1d5db;
      color: #4b5563;
    }

    .btn-ghost:hover {
      background: #f9fafb;
    }

    .btn-sm {
      padding: 0.5rem 0.75rem;
      font-size: 0.85rem;
    }

    .reject-form {
      padding: 1rem;
      background: #fef2f2;
      border-top: 1px solid #fee2e2;
    }

    .reject-form textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #fecaca;
      border-radius: 4px;
      font-family: inherit;
      font-size: 0.9rem;
      resize: vertical;
      min-height: 60px;
      margin-bottom: 0.75rem;
    }

    .form-actions {
      display: flex;
      gap: 0.5rem;
    }

    .loading,
    .empty-state {
      text-align: center;
      padding: 3rem;
      color: #9ca3af;
    }

    .empty-state p {
      margin: 0;
    }
  `]
})
export class ParticipantApprovalComponent implements OnInit {
  private readonly debateAdmin = inject(DebateAdminService);
  private readonly snack = inject(MatSnackBar);

  readonly pendingParticipants = signal<Participant[]>([]);
  readonly loading = signal(true);

  showingRejectForm: string | null = null;
  rejectionReason: string = '';
  approvedCount = 0;
  rejectedCount = 0;

  ngOnInit(): void {
    this.loadPendingApprovals();
  }

  private loadPendingApprovals(): void {
    this.debateAdmin.getPendingApprovals().subscribe({
      next: participants => {
        this.pendingParticipants.set(participants);
        this.loading.set(false);
      },
      error: err => {
        this.snack.open('Error loading pending approvals', 'Close');
        this.loading.set(false);
      }
    });
  }

  approveParticipant(participantId: string): void {
    this.debateAdmin.approveParticipant(participantId).subscribe({
      next: () => {
        this.snack.open('Participant approved ✓', 'Close', { duration: 3000 });
        this.approvedCount++;
        this.loadPendingApprovals();
      },
      error: err => {
        this.snack.open('Error approving participant', 'Close');
      }
    });
  }

  showRejectForm(participantId: string): void {
    this.showingRejectForm = participantId;
    this.rejectionReason = '';
  }

  confirmReject(participantId: string): void {
    this.debateAdmin.rejectParticipant(participantId, this.rejectionReason).subscribe({
      next: () => {
        this.snack.open('Participant rejected', 'Close', { duration: 3000 });
        this.rejectedCount++;
        this.showingRejectForm = null;
        this.loadPendingApprovals();
      },
      error: err => {
        this.snack.open('Error rejecting participant', 'Close');
      }
    });
  }

  cancelReject(): void {
    this.showingRejectForm = null;
    this.rejectionReason = '';
  }
}
