import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService, ContentService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ApiMessage, LegalTopic } from '../../core/models/models';
import { PageBanner } from '../../shared/components/ui';

/**
 * Files a new motion. Members submit through /api/debates/propose, which stores the
 * motion unpublished for a definitional check; content managers may open it
 * immediately from the admin panel.
 */
@Component({
  selector: 'ts-start-debate',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, PageBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ts-page-banner
      heading="Start a Debate"
      lede="Write it as a proposition someone could reasonably oppose — that is what makes it debatable."
      parentLabel="Debates"
      parentLink="/debates" />

    <main class="section">
      <div class="container" style="max-width:940px">

        @if (filed()) {
          <section class="panel">
            <div class="panel-head"><h2>Motion Filed</h2></div>
            <div class="panel-body">
              <div class="side-note" style="margin:0">
                <b>Thank you — your motion is with the adjudication board</b>
                It will be checked for a workable definition and an even burden between the two sides,
                then opened for argument. You will see it listed under Opening Soon once it is approved.
              </div>
              <div class="form-actions">
                <a class="btn btn-gold" routerLink="/debates">Browse Open Motions</a>
                <button type="button" class="btn btn-ghost" (click)="again()">File Another</button>
              </div>
            </div>
          </section>

        } @else {

          <div class="hint-box" style="margin-bottom:18px">
            <b>What makes a good motion</b>
            State one proposition, not two. Make it contestable — if no reasonable person would take the
            other side, there is no debate. Avoid loaded wording: the motion should read the same to both
            camps. Conventionally it opens “This House believes that…”, but that is not required.
          </div>

          <form [formGroup]="form" (ngSubmit)="submit()">
            <section class="panel">
              <div class="panel-head"><h2>The Motion</h2></div>
              <div class="panel-body">
                <div class="form-grid">

                  <div class="field full" [class.invalid]="invalid('title')">
                    <label for="d-title">Debate title <span style="color:var(--danger)">*</span></label>
                    <input id="d-title" formControlName="title"
                           placeholder="Is Artificial Intelligence a Threat to Human Rights?" />
                    <span class="muted" style="font-size:.72rem">The question as it will appear in listings.</span>
                    @if (invalid('title')) { <span class="err">Give the debate a title of at least 10 characters.</span> }
                  </div>

                  <div class="field full" [class.invalid]="invalid('motion')">
                    <label for="d-motion">Motion as put <span style="color:var(--danger)">*</span></label>
                    <textarea id="d-motion" formControlName="motion" rows="2"
                              placeholder="This House believes that artificial intelligence, as currently deployed, is a threat to human rights."></textarea>
                    @if (invalid('motion')) { <span class="err">State the motion in full (at least 10 characters).</span> }
                  </div>

                  <div class="field" [class.invalid]="invalid('topic')">
                    <label for="d-topic">Subject area <span style="color:var(--danger)">*</span></label>
                    <select id="d-topic" formControlName="topic">
                      <option value="">— Select —</option>
                      @for (topic of topics(); track topic.id) {
                        <option [value]="topic.title">{{ topic.title }}</option>
                      }
                      <option value="Other">Other</option>
                    </select>
                    @if (invalid('topic')) { <span class="err">Choose a subject area.</span> }
                  </div>

                  <div class="field">
                    <label for="d-side">The side you intend to argue</label>
                    <select id="d-side" formControlName="proposerSide">
                      <option value="Neutral">Neutral — I am only proposing it</option>
                      <option value="For">For the motion</option>
                      <option value="Against">Against the motion</option>
                    </select>
                  </div>

                  <div class="field full">
                    <label for="d-summary">Summary <span class="muted">(optional)</span></label>
                    <textarea id="d-summary" formControlName="summary" rows="2"
                              placeholder="One or two lines on why this question is worth contesting now."></textarea>
                  </div>

                  <div class="field">
                    <label for="d-when">Proposed opening date</label>
                    <input id="d-when" type="date" formControlName="scheduledFor" />
                    <span class="muted" style="font-size:.72rem">The board may move this.</span>
                  </div>

                </div>
              </div>
            </section>

            <section class="panel">
              <div class="panel-head"><h2>The Two Opening Cases</h2></div>
              <div class="panel-body">
                <p class="muted" style="font-size:.85rem">
                  Write both sides, and write them fairly. A motion whose opposing case is a straw man is
                  returned. This is the single strongest signal that a debate has been proposed in good faith.
                </p>

                <div class="form-grid">
                  <div class="field full" [class.invalid]="invalid('forSummary')">
                    <label for="d-for">Opening case — for the motion <span style="color:var(--danger)">*</span></label>
                    <textarea id="d-for" formControlName="forSummary" rows="4"
                              placeholder="The strongest version of the case in favour, in two or three sentences."></textarea>
                    @if (invalid('forSummary')) { <span class="err">Please write at least 20 characters.</span> }
                  </div>

                  <div class="field full" [class.invalid]="invalid('againstSummary')">
                    <label for="d-against">Opening case — against the motion <span style="color:var(--danger)">*</span></label>
                    <textarea id="d-against" formControlName="againstSummary" rows="4"
                              placeholder="The strongest version of the case against — as its best advocate would put it."></textarea>
                    @if (invalid('againstSummary')) { <span class="err">Please write at least 20 characters.</span> }
                  </div>
                </div>

                <div class="form-actions">
                  <button type="submit" class="btn btn-gold" [disabled]="busy()">
                    {{ busy() ? 'Filing…' : 'File This Motion' }}
                  </button>
                  <a class="btn btn-ghost" routerLink="/debates">Cancel</a>
                </div>
              </div>
            </section>
          </form>
        }

      </div>
    </main>
  `
})
export class StartDebatePage implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private readonly content = inject(ContentService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snack = inject(MatSnackBar);
  readonly auth = inject(AuthService);

  readonly topics = signal<LegalTopic[]>([]);
  readonly busy = signal(false);
  readonly filed = signal(false);

  readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(10)]],
    motion: ['', [Validators.required, Validators.minLength(10)]],
    topic: ['', Validators.required],
    proposerSide: ['Neutral'],
    summary: [''],
    forSummary: ['', [Validators.required, Validators.minLength(20)]],
    againstSummary: ['', [Validators.required, Validators.minLength(20)]],
    scheduledFor: [this.defaultDate()]
  });

  ngOnInit(): void {
    this.content.for<LegalTopic>('topics')
      .list({ pageSize: 24, sortBy: 'sortOrder', descending: false })
      .subscribe({
        next: res => {
          this.topics.set(res.items);
          this.applyQueryParams();
        },
        error: () => this.applyQueryParams()
      });
  }

  /** Carries over whatever the visitor typed into the homepage quick-start panel. */
  private applyQueryParams(): void {
    const params = this.route.snapshot.queryParamMap;
    const motion = params.get('motion');
    const topicSlug = params.get('topic');

    if (motion) {
      this.form.patchValue({ motion, title: motion });
    }
    if (topicSlug) {
      const match = this.topics().find(t => t.slug === topicSlug);
      if (match) this.form.patchValue({ topic: match.title });
    }
  }

  private defaultDate(): string {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().slice(0, 10);
  }

  invalid(control: string): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snack.open('Please complete the highlighted fields.', 'Dismiss');
      return;
    }

    const value = this.form.getRawValue();
    this.busy.set(true);

    this.api.post<ApiMessage>('debates/propose', {
      ...value,
      scheduledFor: value.scheduledFor ? new Date(value.scheduledFor).toISOString() : null
    }).subscribe({
      next: res => {
        this.busy.set(false);
        this.filed.set(true);
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'], duration: 8000 });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: () => this.busy.set(false)
    });
  }

  again(): void {
    this.form.reset({ proposerSide: 'Neutral', scheduledFor: this.defaultDate() });
    this.filed.set(false);
  }
}
