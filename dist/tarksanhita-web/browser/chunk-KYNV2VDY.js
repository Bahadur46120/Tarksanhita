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
  AuthService
} from "./chunk-FTSBTB32.js";
import {
  PageBanner
} from "./chunk-JRDIFDAI.js";
import {
  ApiService,
  ContentService
} from "./chunk-MBQHVFNQ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-7TMVEVGK.js";
import {
  ChangeDetectionStrategy,
  Component,
  __spreadProps,
  __spreadValues,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F5R4JB2K.js";

// src/app/pages/debates/start-debate.ts
var _forTrack0 = ($index, $item) => $item.id;
function StartDebatePage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 4)(2, "h2");
    \u0275\u0275text(3, "Motion Filed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "b");
    \u0275\u0275text(7, "Thank you \u2014 your motion is with the adjudication board");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " It will be checked for a workable definition and an even burden between the two sides, then opened for argument. You will see it listed under Opening Soon once it is approved. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "a", 8);
    \u0275\u0275text(11, "Browse Open Motions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function StartDebatePage_Conditional_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.again());
    });
    \u0275\u0275text(13, "File Another");
    \u0275\u0275elementEnd()()()();
  }
}
function StartDebatePage_Conditional_4_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Give the debate a title of at least 10 characters.");
    \u0275\u0275elementEnd();
  }
}
function StartDebatePage_Conditional_4_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "State the motion in full (at least 10 characters).");
    \u0275\u0275elementEnd();
  }
}
function StartDebatePage_Conditional_4_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const topic_r4 = ctx.$implicit;
    \u0275\u0275property("value", topic_r4.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(topic_r4.title);
  }
}
function StartDebatePage_Conditional_4_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Choose a subject area.");
    \u0275\u0275elementEnd();
  }
}
function StartDebatePage_Conditional_4_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Please write at least 20 characters.");
    \u0275\u0275elementEnd();
  }
}
function StartDebatePage_Conditional_4_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Please write at least 20 characters.");
    \u0275\u0275elementEnd();
  }
}
function StartDebatePage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "b");
    \u0275\u0275text(2, "What makes a good motion");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " State one proposition, not two. Make it contestable \u2014 if no reasonable person would take the other side, there is no debate. Avoid loaded wording: the motion should read the same to both camps. Conventionally it opens \u201CThis House believes that\u2026\u201D, but that is not required. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 11);
    \u0275\u0275listener("ngSubmit", function StartDebatePage_Conditional_4_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(5, "section", 3)(6, "div", 4)(7, "h2");
    \u0275\u0275text(8, "The Motion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "div", 12)(11, "div", 13)(12, "label", 14);
    \u0275\u0275text(13, "Debate title ");
    \u0275\u0275elementStart(14, "span", 15);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 16);
    \u0275\u0275elementStart(17, "span", 17);
    \u0275\u0275text(18, "The question as it will appear in listings.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, StartDebatePage_Conditional_4_Conditional_19_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13)(21, "label", 19);
    \u0275\u0275text(22, "Motion as put ");
    \u0275\u0275elementStart(23, "span", 15);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "textarea", 20);
    \u0275\u0275conditionalCreate(26, StartDebatePage_Conditional_4_Conditional_26_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 21)(28, "label", 22);
    \u0275\u0275text(29, "Subject area ");
    \u0275\u0275elementStart(30, "span", 15);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "select", 23)(33, "option", 24);
    \u0275\u0275text(34, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(35, StartDebatePage_Conditional_4_For_36_Template, 2, 2, "option", 25, _forTrack0);
    \u0275\u0275elementStart(37, "option", 26);
    \u0275\u0275text(38, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(39, StartDebatePage_Conditional_4_Conditional_39_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 21)(41, "label", 27);
    \u0275\u0275text(42, "The side you intend to argue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 28)(44, "option", 29);
    \u0275\u0275text(45, "Neutral \u2014 I am only proposing it");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 30);
    \u0275\u0275text(47, "For the motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 31);
    \u0275\u0275text(49, "Against the motion");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 13)(51, "label", 32);
    \u0275\u0275text(52, "Summary ");
    \u0275\u0275elementStart(53, "span", 33);
    \u0275\u0275text(54, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(55, "textarea", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 21)(57, "label", 35);
    \u0275\u0275text(58, "Proposed opening date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 36);
    \u0275\u0275elementStart(60, "span", 17);
    \u0275\u0275text(61, "The board may move this.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(62, "section", 3)(63, "div", 4)(64, "h2");
    \u0275\u0275text(65, "The Two Opening Cases");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 5)(67, "p", 37);
    \u0275\u0275text(68, " Write both sides, and write them fairly. A motion whose opposing case is a straw man is returned. This is the single strongest signal that a debate has been proposed in good faith. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 12)(70, "div", 13)(71, "label", 38);
    \u0275\u0275text(72, "Opening case \u2014 for the motion ");
    \u0275\u0275elementStart(73, "span", 15);
    \u0275\u0275text(74, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(75, "textarea", 39);
    \u0275\u0275conditionalCreate(76, StartDebatePage_Conditional_4_Conditional_76_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 13)(78, "label", 40);
    \u0275\u0275text(79, "Opening case \u2014 against the motion ");
    \u0275\u0275elementStart(80, "span", 15);
    \u0275\u0275text(81, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(82, "textarea", 41);
    \u0275\u0275conditionalCreate(83, StartDebatePage_Conditional_4_Conditional_83_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 7)(85, "button", 42);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "a", 43);
    \u0275\u0275text(88, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("invalid", ctx_r1.invalid("title"));
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.invalid("title") ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ctx_r1.invalid("motion"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.invalid("motion") ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ctx_r1.invalid("topic"));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.topics());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.invalid("topic") ? 39 : -1);
    \u0275\u0275advance(31);
    \u0275\u0275classProp("invalid", ctx_r1.invalid("forSummary"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.invalid("forSummary") ? 76 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ctx_r1.invalid("againstSummary"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.invalid("againstSummary") ? 83 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.busy() ? "Filing\u2026" : "File This Motion", " ");
  }
}
var StartDebatePage = class _StartDebatePage {
  fb = inject(FormBuilder);
  api = inject(ApiService);
  content = inject(ContentService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  snack = inject(MatSnackBar);
  auth = inject(AuthService);
  topics = signal([], ...ngDevMode ? [{ debugName: "topics" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  filed = signal(false, ...ngDevMode ? [{ debugName: "filed" }] : []);
  form = this.fb.nonNullable.group({
    title: ["", [Validators.required, Validators.minLength(10)]],
    motion: ["", [Validators.required, Validators.minLength(10)]],
    topic: ["", Validators.required],
    proposerSide: ["Neutral"],
    summary: [""],
    forSummary: ["", [Validators.required, Validators.minLength(20)]],
    againstSummary: ["", [Validators.required, Validators.minLength(20)]],
    scheduledFor: [this.defaultDate()]
  });
  ngOnInit() {
    this.content.for("topics").list({ pageSize: 24, sortBy: "sortOrder", descending: false }).subscribe({
      next: (res) => {
        this.topics.set(res.items);
        this.applyQueryParams();
      },
      error: () => this.applyQueryParams()
    });
  }
  /** Carries over whatever the visitor typed into the homepage quick-start panel. */
  applyQueryParams() {
    const params = this.route.snapshot.queryParamMap;
    const motion = params.get("motion");
    const topicSlug = params.get("topic");
    if (motion) {
      this.form.patchValue({ motion, title: motion });
    }
    if (topicSlug) {
      const match = this.topics().find((t) => t.slug === topicSlug);
      if (match)
        this.form.patchValue({ topic: match.title });
    }
  }
  defaultDate() {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().slice(0, 10);
  }
  invalid(control) {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.dirty || c.touched);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snack.open("Please complete the highlighted fields.", "Dismiss");
      return;
    }
    const value = this.form.getRawValue();
    this.busy.set(true);
    this.api.post("debates/propose", __spreadProps(__spreadValues({}, value), {
      scheduledFor: value.scheduledFor ? new Date(value.scheduledFor).toISOString() : null
    })).subscribe({
      next: (res) => {
        this.busy.set(false);
        this.filed.set(true);
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"], duration: 8e3 });
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      error: () => this.busy.set(false)
    });
  }
  again() {
    this.form.reset({ proposerSide: "Neutral", scheduledFor: this.defaultDate() });
    this.filed.set(false);
  }
  static \u0275fac = function StartDebatePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StartDebatePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StartDebatePage, selectors: [["ts-start-debate"]], decls: 5, vars: 1, consts: [["heading", "Start a Debate", "lede", "Write it as a proposition someone could reasonably oppose \u2014 that is what makes it debatable.", "parentLabel", "Debates", "parentLink", "/debates"], [1, "section"], [1, "container", 2, "max-width", "940px"], [1, "panel"], [1, "panel-head"], [1, "panel-body"], [1, "side-note", 2, "margin", "0"], [1, "form-actions"], ["routerLink", "/debates", 1, "btn", "btn-gold"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], [1, "hint-box", 2, "margin-bottom", "18px"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "field", "full"], ["for", "d-title"], [2, "color", "var(--danger)"], ["id", "d-title", "formControlName", "title", "placeholder", "Is Artificial Intelligence a Threat to Human Rights?"], [1, "muted", 2, "font-size", ".72rem"], [1, "err"], ["for", "d-motion"], ["id", "d-motion", "formControlName", "motion", "rows", "2", "placeholder", "This House believes that artificial intelligence, as currently deployed, is a threat to human rights."], [1, "field"], ["for", "d-topic"], ["id", "d-topic", "formControlName", "topic"], ["value", ""], [3, "value"], ["value", "Other"], ["for", "d-side"], ["id", "d-side", "formControlName", "proposerSide"], ["value", "Neutral"], ["value", "For"], ["value", "Against"], ["for", "d-summary"], [1, "muted"], ["id", "d-summary", "formControlName", "summary", "rows", "2", "placeholder", "One or two lines on why this question is worth contesting now."], ["for", "d-when"], ["id", "d-when", "type", "date", "formControlName", "scheduledFor"], [1, "muted", 2, "font-size", ".85rem"], ["for", "d-for"], ["id", "d-for", "formControlName", "forSummary", "rows", "4", "placeholder", "The strongest version of the case in favour, in two or three sentences."], ["for", "d-against"], ["id", "d-against", "formControlName", "againstSummary", "rows", "4", "placeholder", "The strongest version of the case against \u2014 as its best advocate would put it."], ["type", "submit", 1, "btn", "btn-gold", 3, "disabled"], ["routerLink", "/debates", 1, "btn", "btn-ghost"]], template: function StartDebatePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ts-page-banner", 0);
      \u0275\u0275elementStart(1, "main", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, StartDebatePage_Conditional_3_Template, 14, 0, "section", 3)(4, StartDebatePage_Conditional_4_Template, 89, 18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.filed() ? 3 : 4);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, PageBanner], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StartDebatePage, [{
    type: Component,
    args: [{
      selector: "ts-start-debate",
      standalone: true,
      imports: [ReactiveFormsModule, RouterLink, PageBanner],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ts-page-banner
      heading="Start a Debate"
      lede="Write it as a proposition someone could reasonably oppose \u2014 that is what makes it debatable."
      parentLabel="Debates"
      parentLink="/debates" />

    <main class="section">
      <div class="container" style="max-width:940px">

        @if (filed()) {
          <section class="panel">
            <div class="panel-head"><h2>Motion Filed</h2></div>
            <div class="panel-body">
              <div class="side-note" style="margin:0">
                <b>Thank you \u2014 your motion is with the adjudication board</b>
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
            State one proposition, not two. Make it contestable \u2014 if no reasonable person would take the
            other side, there is no debate. Avoid loaded wording: the motion should read the same to both
            camps. Conventionally it opens \u201CThis House believes that\u2026\u201D, but that is not required.
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
                      <option value="">\u2014 Select \u2014</option>
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
                      <option value="Neutral">Neutral \u2014 I am only proposing it</option>
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
                    <label for="d-for">Opening case \u2014 for the motion <span style="color:var(--danger)">*</span></label>
                    <textarea id="d-for" formControlName="forSummary" rows="4"
                              placeholder="The strongest version of the case in favour, in two or three sentences."></textarea>
                    @if (invalid('forSummary')) { <span class="err">Please write at least 20 characters.</span> }
                  </div>

                  <div class="field full" [class.invalid]="invalid('againstSummary')">
                    <label for="d-against">Opening case \u2014 against the motion <span style="color:var(--danger)">*</span></label>
                    <textarea id="d-against" formControlName="againstSummary" rows="4"
                              placeholder="The strongest version of the case against \u2014 as its best advocate would put it."></textarea>
                    @if (invalid('againstSummary')) { <span class="err">Please write at least 20 characters.</span> }
                  </div>
                </div>

                <div class="form-actions">
                  <button type="submit" class="btn btn-gold" [disabled]="busy()">
                    {{ busy() ? 'Filing\u2026' : 'File This Motion' }}
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
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StartDebatePage, { className: "StartDebatePage", filePath: "src/app/pages/debates/start-debate.ts", lineNumber: 152 });
})();
export {
  StartDebatePage
};
//# sourceMappingURL=chunk-KYNV2VDY.js.map
