import {
  EmptyState,
  LoadingState,
  PageBanner,
  SectionTitle
} from "./chunk-JRDIFDAI.js";
import {
  ContentService
} from "./chunk-MBQHVFNQ.js";
import {
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
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-F5R4JB2K.js";

// src/app/pages/academics/academics.ts
var _c0 = (a0) => ["/legal-topics", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AcademicsPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 8);
  }
}
function AcademicsPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 4);
  }
}
function AcademicsPage_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg");
    \u0275\u0275element(3, "use");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const topic_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, topic_r1.slug));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("href", ctx_r2.iconFor(topic_r1.iconKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r1.summary);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.level($index_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.duration($index_r2));
  }
}
function AcademicsPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, AcademicsPage_Conditional_5_For_2_Template, 13, 8, "a", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.topics());
  }
}
var AcademicsPage = class _AcademicsPage {
  content = inject(ContentService);
  topics = signal([], ...ngDevMode ? [{ debugName: "topics" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  ngOnInit() {
    this.content.for("topics").list({ pageSize: 24, sortBy: "sortOrder", descending: false }).subscribe({
      next: (res) => {
        this.topics.set(res.items);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  iconFor(key) {
    const known = ["scale", "building", "gavel", "doc", "chip", "globe", "bulb", "shield", "book", "flask", "people"];
    return `#i-${key && known.includes(key) ? key : "scale"}`;
  }
  level(index) {
    return ["Diploma \xB7 PG", "PG \xB7 Doctoral", "PG", "Certificate \xB7 PG"][index % 4];
  }
  duration(index) {
    return ["3\u201324 Months", "12\u201336 Months", "12\u201324 Months", "6\u201318 Months"][index % 4];
  }
  static \u0275fac = function AcademicsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AcademicsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcademicsPage, selectors: [["ts-academics"]], decls: 45, vars: 1, consts: [["heading", "Academics", "lede", "Certificate, diploma, postgraduate and doctoral programmes across nine subject clusters \u2014 each pairing doctrinal instruction with an examined argumentation component."], [1, "section"], [1, "container"], [3, "count"], ["heading", "Programmes are being published", "body", "The academic catalogue will appear here shortly."], [1, "acad-grid"], [1, "section", "alt"], ["kicker", "How We Teach", "heading", "Academic Framework", "lede", "Assessment is continuous and the argumentation component is compulsory at every level."], [1, "res-grid"], [1, "res-item"], [1, "n"], [1, "text-center", 2, "margin-top", "26px"], ["routerLink", "/admissions", 1, "btn", "btn-gold"], ["routerLink", "/faculty", 1, "btn", "btn-ghost"], ["routerLink", "/notices", 1, "btn", "btn-ghost"], [1, "acad-card", 3, "routerLink"], [1, "ic"], [1, "meta"]], template: function AcademicsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ts-page-banner", 0);
      \u0275\u0275elementStart(1, "main", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, AcademicsPage_Conditional_3_Template, 1, 1, "ts-loading-state", 3)(4, AcademicsPage_Conditional_4_Template, 1, 0, "ts-empty-state", 4)(5, AcademicsPage_Conditional_5_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "section", 6)(7, "div", 2);
      \u0275\u0275element(8, "ts-section-title", 7);
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10);
      \u0275\u0275text(12, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h4");
      \u0275\u0275text(14, "Doctrinal Instruction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "Statute, precedent and constitutional text read closely, with published reading lists.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10);
      \u0275\u0275text(19, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h4");
      \u0275\u0275text(21, "Adversarial Exercise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "Every course carries a moot, oral defence or written adversarial submission.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 9)(25, "div", 10);
      \u0275\u0275text(26, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h4");
      \u0275\u0275text(28, "Continuous Assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "Written submissions, case commentary and oral defence, weighted against published rubrics.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 9)(32, "div", 10);
      \u0275\u0275text(33, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "h4");
      \u0275\u0275text(35, "External Review");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "Every course is reviewed by an outside panel once in three years.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 11)(39, "a", 12);
      \u0275\u0275text(40, "Apply for Admission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 13);
      \u0275\u0275text(42, "Faculty Directory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "a", 14);
      \u0275\u0275text(44, "Academic Notices");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : !ctx.topics().length ? 4 : 5);
    }
  }, dependencies: [RouterLink, PageBanner, SectionTitle, LoadingState, EmptyState], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AcademicsPage, [{
    type: Component,
    args: [{
      selector: "ts-academics",
      standalone: true,
      imports: [RouterLink, PageBanner, SectionTitle, LoadingState, EmptyState],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ts-page-banner
      heading="Academics"
      lede="Certificate, diploma, postgraduate and doctoral programmes across nine subject clusters \u2014 each pairing doctrinal instruction with an examined argumentation component." />

    <main class="section">
      <div class="container">

        @if (loading()) {
          <ts-loading-state [count]="8" />
        } @else if (!topics().length) {
          <ts-empty-state heading="Programmes are being published" body="The academic catalogue will appear here shortly." />
        } @else {
          <div class="acad-grid">
            @for (topic of topics(); track topic.id) {
              <a class="acad-card" [routerLink]="['/legal-topics', topic.slug]">
                <div class="ic"><svg><use [attr.href]="iconFor(topic.iconKey)" /></svg></div>
                <h4>{{ topic.title }}</h4>
                <p>{{ topic.summary }}</p>
                <div class="meta">
                  <span>{{ level($index) }}</span>
                  <span>{{ duration($index) }}</span>
                </div>
              </a>
            }
          </div>
        }

      </div>
    </main>

    <section class="section alt">
      <div class="container">
        <ts-section-title
          kicker="How We Teach"
          heading="Academic Framework"
          lede="Assessment is continuous and the argumentation component is compulsory at every level." />

        <div class="res-grid">
          <div class="res-item"><div class="n">01</div><h4>Doctrinal Instruction</h4><p>Statute, precedent and constitutional text read closely, with published reading lists.</p></div>
          <div class="res-item"><div class="n">02</div><h4>Adversarial Exercise</h4><p>Every course carries a moot, oral defence or written adversarial submission.</p></div>
          <div class="res-item"><div class="n">03</div><h4>Continuous Assessment</h4><p>Written submissions, case commentary and oral defence, weighted against published rubrics.</p></div>
          <div class="res-item"><div class="n">04</div><h4>External Review</h4><p>Every course is reviewed by an outside panel once in three years.</p></div>
        </div>

        <div class="text-center" style="margin-top:26px">
          <a class="btn btn-gold" routerLink="/admissions">Apply for Admission</a>
          <a class="btn btn-ghost" routerLink="/faculty">Faculty Directory</a>
          <a class="btn btn-ghost" routerLink="/notices">Academic Notices</a>
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcademicsPage, { className: "AcademicsPage", filePath: "src/app/pages/academics/academics.ts", lineNumber: 66 });
})();
export {
  AcademicsPage
};
//# sourceMappingURL=chunk-AYN47HB3.js.map
