import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService, ContentService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ApiMessage, Debate, DebateArgument } from '../../core/models/models';
import { EmptyState, LoadingState, PageBanner } from '../../shared/components/ui';

/**
 * A single motion: the two opening cases, the threaded argument record, and the
 * submission form for signed-in members.
 */
@Component({
  selector: 'ts-debate-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, FormsModule, PageBanner, LoadingState, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './debate-detail.html'
})
export class DebateDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly content = inject(ContentService);
  private readonly api = inject(ApiService);
  private readonly snack = inject(MatSnackBar);
  readonly auth = inject(AuthService);

  readonly debate = signal<Debate | null>(null);
  readonly loading = signal(true);
  readonly submitting = signal(false);

  side: 'For' | 'Against' = 'For';
  text = '';
  rebuts: string | null = null;

  /** Opening arguments only — rebuttals are nested beneath their target. */
  readonly openingArguments = computed(() =>
    (this.debate()?.arguments ?? []).filter(a => !a.rebutsArgumentId && a.isApproved)
  );

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (!slug) return;
      this.loading.set(true);
      this.content.for<Debate>('debates').bySlug(slug).subscribe({
        next: d => {
          this.debate.set(d);
          this.loading.set(false);
        },
        error: () => {
          this.debate.set(null);
          this.loading.set(false);
        }
      });
    });
  }

  rebuttalsFor(argumentId: string): DebateArgument[] {
    return (this.debate()?.arguments ?? [])
      .filter(a => a.rebutsArgumentId === argumentId && a.isApproved);
  }

  startRebuttal(argument: DebateArgument): void {
    this.rebuts = argument.id;
    this.side = argument.side === 'For' ? 'Against' : 'For';
    document.getElementById('discussion')?.scrollIntoView({ behavior: 'smooth' });
  }

  cancelRebuttal(): void {
    this.rebuts = null;
  }

  submit(): void {
    const debate = this.debate();
    if (!debate?.id) return;

    const body = this.text.trim();
    if (body.length < 10) {
      this.snack.open('An argument must be at least ten characters long.', 'Dismiss');
      return;
    }

    this.submitting.set(true);
    this.api.post<ApiMessage>(`debates/${debate.id}/arguments`, {
      side: this.side,
      text: body,
      rebutsArgumentId: this.rebuts,
      citations: []
    }).subscribe({
      next: res => {
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
        this.text = '';
        this.rebuts = null;
        this.submitting.set(false);
        this.reload();
      },
      error: () => this.submitting.set(false)
    });
  }

  private reload(): void {
    const slug = this.debate()?.slug;
    if (!slug) return;
    this.content.for<Debate>('debates').bySlug(slug).subscribe({
      next: d => this.debate.set(d)
    });
  }
}
