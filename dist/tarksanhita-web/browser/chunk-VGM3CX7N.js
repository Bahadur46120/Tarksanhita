import {
  MatSnackBar
} from "./chunk-UPWUZDK7.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-WCMIFM3B.js";
import {
  PageBanner
} from "./chunk-JRDIFDAI.js";
import {
  ApiService
} from "./chunk-MBQHVFNQ.js";
import "./chunk-7TMVEVGK.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F5R4JB2K.js";

// src/app/pages/contact/contact.ts
function ContactPage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "b");
    \u0275\u0275text(2, "Message received");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Thank you \u2014 your enquiry has been logged and routed to the relevant office. We usually respond within two working days. ");
    \u0275\u0275elementStart(4, "div", 10)(5, "button", 11);
    \u0275\u0275listener("click", function ContactPage_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(6, "Send another");
    \u0275\u0275elementEnd()()();
  }
}
function ContactPage_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Please enter your name.");
    \u0275\u0275elementEnd();
  }
}
function ContactPage_Conditional_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Please enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function ContactPage_Conditional_10_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r4 = ctx.$implicit;
    \u0275\u0275property("value", dept_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r4);
  }
}
function ContactPage_Conditional_10_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Please give the enquiry a subject (at least 3 characters).");
    \u0275\u0275elementEnd();
  }
}
function ContactPage_Conditional_10_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Please write at least 10 characters.");
    \u0275\u0275elementEnd();
  }
}
function ContactPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function ContactPage_Conditional_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14)(3, "label", 15);
    \u0275\u0275text(4, "Full name ");
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 17);
    \u0275\u0275conditionalCreate(8, ContactPage_Conditional_10_Conditional_8_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "label", 19);
    \u0275\u0275text(11, "Email address ");
    \u0275\u0275elementStart(12, "span", 16);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 20);
    \u0275\u0275conditionalCreate(15, ContactPage_Conditional_10_Conditional_15_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 14)(17, "label", 21);
    \u0275\u0275text(18, "Telephone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 14)(21, "label", 23);
    \u0275\u0275text(22, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 24);
    \u0275\u0275repeaterCreate(24, ContactPage_Conditional_10_For_25_Template, 2, 2, "option", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 26)(27, "label", 27);
    \u0275\u0275text(28, "Subject ");
    \u0275\u0275elementStart(29, "span", 16);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 28);
    \u0275\u0275conditionalCreate(32, ContactPage_Conditional_10_Conditional_32_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 26)(34, "label", 29);
    \u0275\u0275text(35, "Message ");
    \u0275\u0275elementStart(36, "span", 16);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(38, "textarea", 30);
    \u0275\u0275conditionalCreate(39, ContactPage_Conditional_10_Conditional_39_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 31)(41, "button", 32);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 33);
    \u0275\u0275listener("click", function ContactPage_Conditional_10_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(44, "Clear");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("invalid", ctx_r1.invalid("name"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.invalid("name") ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ctx_r1.invalid("email"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.invalid("email") ? 15 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.departments);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("invalid", ctx_r1.invalid("subject"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.invalid("subject") ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ctx_r1.invalid("message"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.invalid("message") ? 39 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.busy() ? "Sending\u2026" : "Send Message", " ");
  }
}
var ContactPage = class _ContactPage {
  fb = inject(FormBuilder);
  api = inject(ApiService);
  snack = inject(MatSnackBar);
  departments = ["General", "Admissions", "Library", "Research", "Grievance", "Media"];
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  sent = signal(false, ...ngDevMode ? [{ debugName: "sent" }] : []);
  form = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    phone: [""],
    subject: ["", [Validators.required, Validators.minLength(3)]],
    message: ["", [Validators.required, Validators.minLength(10)]],
    department: ["General", Validators.required]
  });
  invalid(control) {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.dirty || c.touched);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snack.open("Please correct the highlighted fields.", "Dismiss");
      return;
    }
    this.busy.set(true);
    this.api.post("contacts", this.form.getRawValue()).subscribe({
      next: (res) => {
        this.busy.set(false);
        this.sent.set(true);
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
      },
      error: () => this.busy.set(false)
    });
  }
  reset() {
    this.form.reset({ department: "General" });
    this.sent.set(false);
  }
  static \u0275fac = function ContactPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactPage, selectors: [["ts-contact"]], decls: 51, vars: 1, consts: [["heading", "Contact Us", "lede", "Write to the relevant office and we will respond within two working days."], [1, "section"], [1, "container"], [1, "grid3", 2, "grid-template-columns", "minmax(0,1.5fr) minmax(0,1fr)"], [1, "panel"], [1, "panel-head"], [1, "panel-body"], [1, "side-note"], [3, "formGroup"], [1, "panel-body", "prose"], [2, "margin-top", "10px"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "field"], ["for", "c-name"], [2, "color", "var(--danger)"], ["id", "c-name", "formControlName", "name", "autocomplete", "name"], [1, "err"], ["for", "c-email"], ["id", "c-email", "type", "email", "formControlName", "email", "autocomplete", "email"], ["for", "c-phone"], ["id", "c-phone", "formControlName", "phone", "autocomplete", "tel"], ["for", "c-dept"], ["id", "c-dept", "formControlName", "department"], [3, "value"], [1, "field", "full"], ["for", "c-subject"], ["id", "c-subject", "formControlName", "subject"], ["for", "c-message"], ["id", "c-message", "formControlName", "message", "placeholder", "Please include any reference number you have been given."], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-gold", 3, "disabled"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"]], template: function ContactPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ts-page-banner", 0);
      \u0275\u0275elementStart(1, "main", 1)(2, "div", 2)(3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "h2");
      \u0275\u0275text(7, "Send an Enquiry");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275conditionalCreate(9, ContactPage_Conditional_9_Template, 7, 0, "div", 7)(10, ContactPage_Conditional_10_Template, 45, 15, "form", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "aside")(12, "section", 4)(13, "div", 5)(14, "h3");
      \u0275\u0275text(15, "Reach Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 9)(17, "p")(18, "b");
      \u0275\u0275text(19, "Tarksanhita");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "br");
      \u0275\u0275text(21, " Centre for Law, Logic, Debate & Knowledge");
      \u0275\u0275element(22, "br");
      \u0275\u0275text(23, " Knowledge Park Road");
      \u0275\u0275element(24, "br");
      \u0275\u0275text(25, " New Delhi 110 001, India ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p")(27, "b");
      \u0275\u0275text(28, "Telephone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "br");
      \u0275\u0275text(30, " +91 11 4000 0000 (Reception)");
      \u0275\u0275element(31, "br");
      \u0275\u0275text(32, " +91 11 4000 0001 (Admissions) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p")(34, "b");
      \u0275\u0275text(35, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "br");
      \u0275\u0275text(37, " info@tarksanhita.in");
      \u0275\u0275element(38, "br");
      \u0275\u0275text(39, " admissions@tarksanhita.in");
      \u0275\u0275element(40, "br");
      \u0275\u0275text(41, " library@tarksanhita.in ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p")(43, "b");
      \u0275\u0275text(44, "Office hours");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "br");
      \u0275\u0275text(46, " Monday to Saturday, 09:30\u201317:30 IST ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 7)(48, "b");
      \u0275\u0275text(49, "Grievance Redressal");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " Complaints relating to academic matters, harassment or ragging should be addressed to the Registrar and are handled under the Centre's published grievance procedure. ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.sent() ? 9 : 10);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PageBanner], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactPage, [{
    type: Component,
    args: [{
      selector: "ts-contact",
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
                  Thank you \u2014 your enquiry has been logged and routed to the relevant office.
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
                      {{ busy() ? 'Sending\u2026' : 'Send Message' }}
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
                  +91 11 4000 0001 (Admissions)
                </p>
                <p>
                  <b>Email</b><br />
                  info&#64;tarksanhita.in<br />
                  admissions&#64;tarksanhita.in<br />
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
              Complaints relating to academic matters, harassment or ragging should be addressed to the
              Registrar and are handled under the Centre's published grievance procedure.
            </div>
          </aside>

        </div>
      </div>
    </main>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactPage, { className: "ContactPage", filePath: "src/app/pages/contact/contact.ts", lineNumber: 131 });
})();
export {
  ContactPage
};
//# sourceMappingURL=chunk-VGM3CX7N.js.map
