import { Component, OnInit, inject, signal, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DebateAdminService } from '../../debate-admin.service';
import { Debate, DebateTopic } from '../../debate-admin-models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ts-debate-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="form-container">
      <h2>{{ isEditing() ? 'Edit Debate' : 'Create New Debate' }}</h2>
      <form [formGroup]="debateForm" (ngSubmit)="submitForm()" class="debate-form">
        <div class="form-group">
          <label>Debate Title *</label>
          <input type="text" formControlName="title" placeholder="e.g., Constitutional Rights in Criminal Law" />
        </div>
        <div class="form-group">
          <label>Topic *</label>
          <select formControlName="topicId">
            <option value="">Select a topic</option>
            @for (topic of topics(); track topic.id) {
              <option [value]="topic.id">{{ topic.title }}</option>
            }
          </select>
        </div>
        <div class="form-group">
          <label>Max Participants *</label>
          <input type="number" formControlName="maxParticipants" min="2" max="20" />
        </div>
        <div class="form-group">
          <label>Debate Statement *</label>
          <textarea formControlName="statement" placeholder="The main proposition to be debated"></textarea>
        </div>
        <div class="form-group">
          <label>Start Date *</label>
          <input type="datetime-local" formControlName="startDate" />
        </div>
        <div class="form-group">
          <label>End Date *</label>
          <input type="datetime-local" formControlName="endDate" />
        </div>
        <div class="form-group">
          <label>Status</label>
          <select formControlName="status">
            <option value="draft">Draft</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit" [disabled]="!debateForm.valid || submitting()">
          {{ submitting() ? 'Saving...' : isEditing() ? 'Update' : 'Create' }}
        </button>
        <button type="button" (click)="cancel()">Cancel</button>
      </form>
    </div>
  `,
  styles: [`
    .form-container { max-width: 600px; margin: 0 auto; padding: 24px; }
    .debate-form { display: flex; flex-direction: column; gap: 16px; }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    label { font-weight: 600; }
    input, textarea, select { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    button { padding: 10px 20px; margin-right: 10px; border: none; border-radius: 4px; cursor: pointer; }
    button[type="submit"] { background: #4338ca; color: white; }
    button[type="button"] { background: #f1f5f9; }
  `]
})
export class DebateFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly debateAdmin = inject(DebateAdminService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snack = inject(MatSnackBar);

  debateId = input<string | null>(null);
  readonly topics = signal<DebateTopic[]>([]);
  readonly submitting = signal(false);
  readonly isEditing = signal(false);

  debateForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
    this.loadTopics();
    this.checkIfEditing();
  }

  private initializeForm(): void {
    this.debateForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      topicId: ['', Validators.required],
      statement: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      maxParticipants: [6, [Validators.required, Validators.min(2), Validators.max(20)]],
      status: ['draft'],
    });
  }

  private loadTopics(): void {
    this.debateAdmin.getAllTopics().subscribe({
      next: (response: any) => {
        // Handle both array and paginated response formats
        const topicsArray = Array.isArray(response) ? response : response.data || [];
        this.topics.set(topicsArray);
      },
      error: () => this.snack.open('Error loading topics', 'Close')
    });
  }

  private checkIfEditing(): void {
    if (this.debateId()) {
      this.isEditing.set(true);
      this.loadDebateForEdit();
    }
  }

  private loadDebateForEdit(): void {
    if (!this.debateId()) return;
    this.debateAdmin.getDebate(this.debateId()!).subscribe({
      next: debate => this.debateForm.patchValue(debate),
      error: () => this.snack.open('Error loading debate', 'Close')
    });
  }

  submitForm(): void {
    if (!this.debateForm.valid) return;
    this.submitting.set(true);
    const formValue = this.debateForm.value;

    const action = this.isEditing() && this.debateId()
      ? this.debateAdmin.updateDebate(this.debateId()!, formValue)
      : this.debateAdmin.createDebate(formValue);

    action.subscribe({
      next: () => {
        this.snack.open('✓ Debate saved', 'Close', { duration: 3000 });
        this.router.navigate(['/admin/debates/debates']);
      },
      error: err => {
        this.snack.open('Error saving debate', 'Close');
        this.submitting.set(false);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/admin/debates/debates']);
  }
}
