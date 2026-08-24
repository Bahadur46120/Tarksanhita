import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../core/services/api.service';
import { ApiMessage } from '../../core/models/models';
import { PageBanner } from '../../shared/components/ui';

@Component({
  selector: 'ts-contact',
  standalone: true,
  imports: [ReactiveFormsModule, PageBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ts-page-banner
      heading="Contact Us"
      lede="Write to the relevant office and we will respond within two working days." />

    <main class="section">
      <div class="container">
        <div class="grid3" style="grid-template-columns:minmax(0,1.5fr) minmax(0,1fr)">

          <section class="panel">
            <div class="panel-head"><h2>Send an Enquiry</h2></div>
            <div class="panel-body">

              @if (sent()) {
                <div class="side-note">
                  <b>Message received</b>
                  Thank you — your enquiry has been logged and routed to the relevant office.
                  We usually respond within two working days.
                  <div style="margin-top:10px">
                    <button type="button" class="btn btn-ghost btn-sm" (click)="reset()">Send another</button>
                  </div>
                </div>
              } @else {
                <form [formGroup]="form" (ngSubmit)="submit()">
                  <div class="form-grid">

                    <div class="field" [class.invalid]="invalid('name')">
                      <label for="c-name">Full name <span style="color:var(--danger)">*</span></label>
                      <input id="c-name" formControlName="name" autocomplete="name" />
                      @if (invalid('name')) { <span class="err">Please enter your name.</span> }
                    </div>

                    <div class="field" [class.invalid]="invalid('email')">
                      <label for="c-email">Email address <span style="color:var(--danger)">*</span></label>
                      <input id="c-email" type="email" formControlName="email" autocomplete="email" />
                      @if (invalid('email')) { <span class="err">Please enter a valid email address.</span> }
                    </div>

                    <div class="field">
                      <label for="c-phone">Telephone</label>
                      <input id="c-phone" formControlName="phone" autocomplete="tel" />
                    </div>

                    <div class="field">
                      <label for="c-dept">Department</label>
                      <select id="c-dept" formControlName="department">
                        @for (dept of departments; track dept) {
                          <option [value]="dept">{{ dept }}</option>
                        }
                      </select>
                    </div>

                    <div class="field full" [class.invalid]="invalid('subject')">
                      <label for="c-subject">Subject <span style="color:var(--danger)">*</span></label>
                      <input id="c-subject" formControlName="subject" />
                      @if (invalid('subject')) { <span class="err">Please give the enquiry a subject (at least 3 characters).</span> }
                    </div>

                    <div class="field full" [class.invalid]="invalid('message')">
                      <label for="c-message">Message <span style="color:var(--danger)">*</span></label>
                      <textarea id="c-message" formControlName="message" placeholder="Please include any reference number you have been given."></textarea>
                      @if (invalid('message')) { <span class="err">Please write at least 10 characters.</span> }
                    </div>

                  </div>

                  <div class="form-actions">
                    <button type="submit" class="btn btn-gold" [disabled]="busy()">
                      {{ busy() ? 'Sending…' : 'Send Message' }}
                    </button>
                    <button type="button" class="btn btn-ghost" (click)="reset()">Clear</button>
                  </div>
                </form>
              }

            </div>
          </section>

          <aside>
            <section class="panel">
              <div class="panel-head"><h3>Reach Us</h3></div>
              <div class="panel-body prose">
                <p>
                  <b>Tarksanhita</b><br />
                  Centre for Law, Logic, Debate &amp; Knowledge<br />
                  Knowledge Park Road<br />
                  New Delhi 110 001, India
                </p>
                <p>
                  <b>Telephone</b><br />
                  +91 11 4000 0000 (Reception)<br />
                  +91 11 4000 0001 (Membership)
                </p>
                <p>
                  <b>Email</b><br />
                  info&#64;tarksanhita.in<br />
                  membership&#64;tarksanhita.in<br />
                  library&#64;tarksanhita.in
                </p>
                <p>
                  <b>Office hours</b><br />
                  Monday to Saturday, 09:30&ndash;17:30 IST
                </p>
              </div>
            </section>

            <div class="side-note">
              <b>Grievance Redressal</b>
              Complaints relating to membership, conduct or harassment should be addressed to the
              Registrar and are handled under the Centre's published grievance procedure.
            </div>
          </aside>

        </div>
      </div>
    </main>
  `
})
export class ContactPage {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private readonly snack = inject(MatSnackBar);

  readonly departments = ['General', 'Membership', 'Library', 'Research', 'Grievance', 'Media'];
  readonly busy = signal(false);
  readonly sent = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    department: ['General', Validators.required]
  });

  invalid(control: string): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snack.open('Please correct the highlighted fields.', 'Dismiss');
      return;
    }

    this.busy.set(true);
    this.api.post<ApiMessage>('contacts', this.form.getRawValue()).subscribe({
      next: res => {
        this.busy.set(false);
        this.sent.set(true);
        this.snack.open(res.message, 'Close', { panelClass: ['ts-snack-ok'] });
      },
      error: () => this.busy.set(false)
    });
  }

  reset(): void {
    this.form.reset({ department: 'General' });
    this.sent.set(false);
  }
}
