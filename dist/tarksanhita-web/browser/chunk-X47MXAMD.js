import {
  EmptyState,
  LoadingState,
  PageBanner
} from "./chunk-JRDIFDAI.js";
import {
  ContentService
} from "./chunk-MBQHVFNQ.js";
import {
  DatePipe,
  RouterLink
} from "./chunk-7TMVEVGK.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F5R4JB2K.js";

// src/app/pages/debates/debates.ts
var _c0 = (a0) => ["/debates", a0];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function DebatesPage_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function DebatesPage_For_5_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setStatus(option_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-gold", ctx_r2.status() === option_r2.value)("btn-ghost-light", ctx_r2.status() !== option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r2.label);
  }
}
function DebatesPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 8);
  }
}
function DebatesPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 6);
  }
}
function DebatesPage_Conditional_8_For_2_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275text(1, "Join Discussion");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const debate_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, debate_r4.slug));
  }
}
function DebatesPage_Conditional_8_For_2_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1, "Read Verdict");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const debate_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, debate_r4.slug));
  }
}
function DebatesPage_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 16)(1, "div", 17)(2, "div")(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20)(10, "div")(11, "b");
    \u0275\u0275text(12, "For the Motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 21)(16, "b");
    \u0275\u0275text(17, "Against the Motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 22)(21, "span")(22, "b");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span")(26, "b");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " arguments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span")(30, "b");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " counterarguments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 23);
    \u0275\u0275element(35, "use", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "a", 25);
    \u0275\u0275text(39, "View Debate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(40, DebatesPage_Conditional_8_For_2_Conditional_40_Template, 2, 3, "a", 26)(41, DebatesPage_Conditional_8_For_2_Conditional_41_Template, 2, 3, "a", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const debate_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(debate_r4.topic);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(debate_r4.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-open", debate_r4.status === "Live")("badge-gold", debate_r4.status === "Draft")("badge-navy", debate_r4.status === "Closed" || debate_r4.status === "Archived");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", debate_r4.status === "Draft" ? "Opening Soon" : debate_r4.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(debate_r4.forSummary);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(debate_r4.againstSummary);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(debate_r4.participants.length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(debate_r4.argumentCount);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(debate_r4.counterArgumentCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 17, debate_r4.scheduledFor, "dd MMM y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c0, debate_r4.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(debate_r4.discussionOpen ? 40 : 41);
  }
}
function DebatesPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, DebatesPage_Conditional_8_For_2_Template, 42, 22, "article", 16, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.debates());
  }
}
var DebatesPage = class _DebatesPage {
  content = inject(ContentService);
  debates = signal([], ...ngDevMode ? [{ debugName: "debates" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  status = signal("", ...ngDevMode ? [{ debugName: "status" }] : []);
  statuses = [
    { label: "All Motions", value: "" },
    { label: "Live", value: "Live" },
    { label: "Opening Soon", value: "Draft" },
    { label: "Archived", value: "Archived" }
  ];
  ngOnInit() {
    this.load();
  }
  setStatus(value) {
    this.status.set(value);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.content.for("debates").list({ pageSize: 24, category: this.status() || void 0 }).subscribe({
      next: (res) => {
        this.debates.set(res.items);
        this.loading.set(false);
      },
      error: () => {
        this.debates.set([]);
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function DebatesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DebatesPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DebatesPage, selectors: [["ts-debates"]], decls: 46, vars: 1, consts: [["heading", "Debate & Logic", "lede", "Motions are published in advance, argued under recorded rules, and decided by adjudicators who must give written reasons."], [1, "section", "deep"], [1, "container"], [1, "list-toolbar", 2, "background", "rgba(255,255,255,.06)", "border-color", "rgba(201,162,39,.3)"], ["type", "button", 1, "btn", "btn-sm", 3, "btn-gold", "btn-ghost-light"], [3, "count"], ["heading", "No motions in this category", "body", "Try another status, or check back when the next round is scheduled."], [1, "debate-grid"], [1, "section"], [1, "sec-title"], [1, "kicker"], [1, "rule"], [1, "res-grid"], [1, "res-item"], [1, "n"], ["type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "debate-card"], [1, "top"], [1, "topic"], [1, "badge"], [1, "stance"], [1, "against"], [1, "debate-meta"], ["width", "13", "height", "13"], ["href", "#i-cal"], [1, "btn", "btn-gold", "btn-sm", 3, "routerLink"], ["fragment", "discussion", 1, "btn", "btn-ghost-light", "btn-sm", 3, "routerLink"], ["fragment", "verdict", 1, "btn", "btn-ghost-light", "btn-sm", 3, "routerLink"]], template: function DebatesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ts-page-banner", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275repeaterCreate(4, DebatesPage_For_5_Template, 2, 5, "button", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, DebatesPage_Conditional_6_Template, 1, 1, "ts-loading-state", 5)(7, DebatesPage_Conditional_7_Template, 1, 0, "ts-empty-state", 6)(8, DebatesPage_Conditional_8_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "section", 8)(10, "div", 2)(11, "div", 9)(12, "div", 10);
      \u0275\u0275text(13, "How It Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h2");
      \u0275\u0275text(15, "Format & Adjudication");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "div", 14);
      \u0275\u0275text(20, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h4");
      \u0275\u0275text(22, "Published Motion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p");
      \u0275\u0275text(24, "Every motion is published with a definitional note at least seven days before the round.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 13)(26, "div", 14);
      \u0275\u0275text(27, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h4");
      \u0275\u0275text(29, "Recorded Rounds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p");
      \u0275\u0275text(31, "Speeches are timed and recorded; transcripts are added to the archive.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 13)(33, "div", 14);
      \u0275\u0275text(34, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "h4");
      \u0275\u0275text(36, "Written Reasons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "Adjudicators publish reasons against the criteria in the rulebook.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 13)(40, "div", 14);
      \u0275\u0275text(41, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h4");
      \u0275\u0275text(43, "Right of Appeal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, "Any decision may be taken to a review panel within fourteen days.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.statuses);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 6 : !ctx.debates().length ? 7 : 8);
    }
  }, dependencies: [RouterLink, PageBanner, LoadingState, EmptyState, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebatesPage, [{
    type: Component,
    args: [{
      selector: "ts-debates",
      standalone: true,
      imports: [RouterLink, DatePipe, PageBanner, LoadingState, EmptyState],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ts-page-banner
      heading="Debate &amp; Logic"
      lede="Motions are published in advance, argued under recorded rules, and decided by adjudicators who must give written reasons." />

    <section class="section deep">
      <div class="container">

        <div class="list-toolbar" style="background:rgba(255,255,255,.06);border-color:rgba(201,162,39,.3)">
          @for (option of statuses; track option.value) {
            <button type="button"
                    class="btn btn-sm"
                    [class.btn-gold]="status() === option.value"
                    [class.btn-ghost-light]="status() !== option.value"
                    (click)="setStatus(option.value)">{{ option.label }}</button>
          }
        </div>

        @if (loading()) {
          <ts-loading-state [count]="8" />
        } @else if (!debates().length) {
          <ts-empty-state heading="No motions in this category" body="Try another status, or check back when the next round is scheduled." />
        } @else {
          <div class="debate-grid">
            @for (debate of debates(); track debate.id) {
              <article class="debate-card">
                <div class="top">
                  <div>
                    <div class="topic">{{ debate.topic }}</div>
                    <h3>{{ debate.title }}</h3>
                  </div>
                  <span class="badge"
                        [class.badge-open]="debate.status === 'Live'"
                        [class.badge-gold]="debate.status === 'Draft'"
                        [class.badge-navy]="debate.status === 'Closed' || debate.status === 'Archived'">
                    {{ debate.status === 'Draft' ? 'Opening Soon' : debate.status }}
                  </span>
                </div>

                <div class="stance">
                  <div><b>For the Motion</b><p>{{ debate.forSummary }}</p></div>
                  <div class="against"><b>Against the Motion</b><p>{{ debate.againstSummary }}</p></div>
                </div>

                <div class="debate-meta">
                  <span><b>{{ debate.participants.length }}</b> participants</span>
                  <span><b>{{ debate.argumentCount }}</b> arguments</span>
                  <span><b>{{ debate.counterArgumentCount }}</b> counterarguments</span>
                  <span><svg width="13" height="13"><use href="#i-cal" /></svg> {{ debate.scheduledFor | date: 'dd MMM y' }}</span>
                </div>

                <a class="btn btn-gold btn-sm" [routerLink]="['/debates', debate.slug]">View Debate</a>
                @if (debate.discussionOpen) {
                  <a class="btn btn-ghost-light btn-sm" [routerLink]="['/debates', debate.slug]" fragment="discussion">Join Discussion</a>
                } @else {
                  <a class="btn btn-ghost-light btn-sm" [routerLink]="['/debates', debate.slug]" fragment="verdict">Read Verdict</a>
                }
              </article>
            }
          </div>
        }

      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="sec-title">
          <div class="kicker">How It Works</div>
          <h2>Format &amp; Adjudication</h2>
          <div class="rule"></div>
        </div>

        <div class="res-grid">
          <div class="res-item"><div class="n">01</div><h4>Published Motion</h4><p>Every motion is published with a definitional note at least seven days before the round.</p></div>
          <div class="res-item"><div class="n">02</div><h4>Recorded Rounds</h4><p>Speeches are timed and recorded; transcripts are added to the archive.</p></div>
          <div class="res-item"><div class="n">03</div><h4>Written Reasons</h4><p>Adjudicators publish reasons against the criteria in the rulebook.</p></div>
          <div class="res-item"><div class="n">04</div><h4>Right of Appeal</h4><p>Any decision may be taken to a review panel within fourteen days.</p></div>
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebatesPage, { className: "DebatesPage", filePath: "src/app/pages/debates/debates.ts", lineNumber: 96 });
})();
export {
  DebatesPage
};
//# sourceMappingURL=chunk-X47MXAMD.js.map
