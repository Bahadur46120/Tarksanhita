import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DebateAdminService } from '../../debate-admin.service';
import { Debate } from '../../debate-admin-models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ts-debate-detail',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="detail-container">
      @if (debate() !== null) {
        <div class="detail-header">
          <h2>{{ debate()!.title }}</h2>
          <div class="actions">
            <button (click)="edit()">Edit</button>
            <button (click)="delete()">Delete</button>
          </div>
        </div>
        <div class="detail-body">
          <p><strong>Topic:</strong> {{ debate()!.topicId }}</p>
          <p><strong>Status:</strong> {{ debate()!.status }}</p>
          <p><strong>Description:</strong> {{ debate()!.description }}</p>
          <p><strong>Start:</strong> {{ debate()!.startDate }}</p>
          <p><strong>End:</strong> {{ debate()!.endDate }}</p>
          <p><strong>Participants:</strong> {{ debate()!.maxParticipants }}</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .detail-container { max-width: 800px; margin: 0 auto; padding: 24px; }
    .detail-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .actions { display: flex; gap: 12px; }
    button { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
    button:first-child { background: #4338ca; color: white; }
    button:last-child { background: #ef4444; color: white; }
  `]
})
export class DebateDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly debateAdmin = inject(DebateAdminService);
  private readonly snack = inject(MatSnackBar);

  readonly debate = signal<Debate | null>(null);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) this.loadDebate(id);
    });
  }

  private loadDebate(id: string): void {
    this.debateAdmin.getDebate(id).subscribe({
      next: debate => this.debate.set(debate),
      error: () => this.snack.open('Error loading debate', 'Close')
    });
  }

  edit(): void {
    const id = this.debate()?.id;
    if (id) this.router.navigate(['/admin/debates/debates', id, 'edit']);
  }

  delete(): void {
    const id = this.debate()?.id;
    if (!id || !confirm('Are you sure?')) return;
    this.debateAdmin.deleteDebate(id).subscribe({
      next: () => {
        this.snack.open('✓ Debate deleted', 'Close');
        this.router.navigate(['/admin/debates/debates']);
      },
      error: () => this.snack.open('Error deleting debate', 'Close')
    });
  }
}
