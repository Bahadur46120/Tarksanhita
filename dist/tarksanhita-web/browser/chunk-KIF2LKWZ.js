import {
  EmptyState,
  LoadingState,
  PageBanner,
  SectionTitle
} from "./chunk-JRDIFDAI.js";
import {
  ApiService,
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-F5R4JB2K.js";

// src/app/pages/research/research.ts
var _c0 = (a0) => ({ type: a0 });
var _c1 = (a0) => ["/research", a0];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function ResearchPage_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6, "View all \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(3, _c0, entry_r1.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.count);
  }
}
function ResearchPage_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 16);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 8);
  }
}
function ResearchPage_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 17);
  }
}
function ResearchPage_Conditional_46_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 27)(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 29)(16, "a", 30);
    \u0275\u0275text(17, "Read");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const paper_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c1, paper_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(paper_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(paper_r2.authors.join(", "));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.label(paper_r2.paperType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(paper_r2.researchCentre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 7, paper_r2.publishedOn, "MMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, paper_r2.slug));
  }
}
function ResearchPage_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Authors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Centre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, ResearchPage_Conditional_46_For_17_Template, 18, 14, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 23)(19, "a", 24);
    \u0275\u0275text(20, "All Publications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 25);
    \u0275\u0275text(22, "Case Studies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 26);
    \u0275\u0275text(24, "Articles & Commentary");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.papers());
  }
}
var TYPE_LABELS = {
  Journal: "Journal Articles",
  WorkingPaper: "Working Papers",
  Dissertation: "Dissertations",
  CaseStudy: "Case Studies",
  Monograph: "Monographs",
  FacultyPublication: "Faculty Publications",
  StudentResearch: "Student Research"
};
var ResearchPage = class _ResearchPage {
  api = inject(ApiService);
  content = inject(ContentService);
  papers = signal([], ...ngDevMode ? [{ debugName: "papers" }] : []);
  counts = signal([], ...ngDevMode ? [{ debugName: "counts" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  ngOnInit() {
    this.api.get("research/summary").subscribe({
      next: (summary) => this.counts.set(Object.entries(summary).map(([key, count]) => ({ key, label: TYPE_LABELS[key] ?? key, count }))),
      error: () => this.counts.set([])
    });
    this.content.for("research").list({ pageSize: 10 }).subscribe({
      next: (res) => {
        this.papers.set(res.items);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  label(type) {
    return TYPE_LABELS[type] ?? type;
  }
  static \u0275fac = function ResearchPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResearchPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResearchPage, selectors: [["ts-research"]], decls: 47, vars: 1, consts: [["heading", "Research & Publications", "lede", "Four standing research centres, two peer-reviewed journals and an open working-paper series."], [1, "section"], [1, "container"], ["kicker", "By Category", "heading", "Research Output"], [1, "tile-grid"], ["routerLink", "/publications", 1, "tile", 2, "text-decoration", "none", 3, "queryParams"], ["kicker", "Standing Centres", "heading", "Research Centres", "lede", "Each centre runs a working-paper series, an annual call for papers and a public seminar programme."], [1, "acad-grid"], [1, "acad-card"], [1, "ic"], ["href", "#i-building"], ["href", "#i-gavel"], ["href", "#i-chip"], ["href", "#i-globe"], [1, "section", "alt"], ["kicker", "Recently Published", "heading", "Latest Papers"], [3, "count"], ["heading", "No papers published yet", "body", "The repository will list papers as they are released."], [1, "k"], [1, "v"], [1, "s"], [1, "table-scroll"], [1, "ts-table"], [1, "text-center", 2, "margin-top", "24px"], ["routerLink", "/publications", 1, "btn", "btn-navy"], ["routerLink", "/case-studies", 1, "btn", "btn-ghost"], ["routerLink", "/articles", 1, "btn", "btn-ghost"], [3, "routerLink"], [1, "badge", "badge-outline"], [1, "actions"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"]], template: function ResearchPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ts-page-banner", 0);
      \u0275\u0275elementStart(1, "main", 1)(2, "div", 2);
      \u0275\u0275element(3, "ts-section-title", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275repeaterCreate(5, ResearchPage_For_6_Template, 7, 5, "a", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "ts-section-title", 6);
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg");
      \u0275\u0275element(12, "use", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "h4");
      \u0275\u0275text(14, "Constitutional Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "Fundamental rights, federalism, judicial review and the limits of the amending power.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 8)(18, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg");
      \u0275\u0275element(20, "use", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "h4");
      \u0275\u0275text(22, "Criminal Justice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p");
      \u0275\u0275text(24, "Sentencing, evidence, pre-trial detention and the empirical study of reported judgments.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 8)(26, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg");
      \u0275\u0275element(28, "use", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "h4");
      \u0275\u0275text(30, "Technology & Law");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "Data protection, algorithmic accountability, platform liability and digital evidence.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 8)(34, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg");
      \u0275\u0275element(36, "use", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "h4");
      \u0275\u0275text(38, "Human Rights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, "Constitutional and international human rights, legal aid and access-to-justice research.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(41, "section", 14)(42, "div", 2);
      \u0275\u0275element(43, "ts-section-title", 15);
      \u0275\u0275conditionalCreate(44, ResearchPage_Conditional_44_Template, 1, 1, "ts-loading-state", 16)(45, ResearchPage_Conditional_45_Template, 1, 0, "ts-empty-state", 17)(46, ResearchPage_Conditional_46_Template, 25, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.counts());
      \u0275\u0275advance(39);
      \u0275\u0275conditional(ctx.loading() ? 44 : !ctx.papers().length ? 45 : 46);
    }
  }, dependencies: [RouterLink, PageBanner, SectionTitle, LoadingState, EmptyState, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResearchPage, [{
    type: Component,
    args: [{
      selector: "ts-research",
      standalone: true,
      imports: [RouterLink, DatePipe, PageBanner, SectionTitle, LoadingState, EmptyState],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ts-page-banner
      heading="Research &amp; Publications"
      lede="Four standing research centres, two peer-reviewed journals and an open working-paper series." />

    <main class="section">
      <div class="container">

        <ts-section-title kicker="By Category" heading="Research Output" />

        <div class="tile-grid">
          @for (entry of counts(); track entry.key) {
            <a class="tile" routerLink="/publications" [queryParams]="{ type: entry.key }" style="text-decoration:none">
              <div class="k">{{ entry.label }}</div>
              <div class="v">{{ entry.count }}</div>
              <div class="s">View all &rarr;</div>
            </a>
          }
        </div>

        <ts-section-title kicker="Standing Centres" heading="Research Centres"
          lede="Each centre runs a working-paper series, an annual call for papers and a public seminar programme." />

        <div class="acad-grid">
          <div class="acad-card">
            <div class="ic"><svg><use href="#i-building" /></svg></div>
            <h4>Constitutional Studies</h4>
            <p>Fundamental rights, federalism, judicial review and the limits of the amending power.</p>
          </div>
          <div class="acad-card">
            <div class="ic"><svg><use href="#i-gavel" /></svg></div>
            <h4>Criminal Justice</h4>
            <p>Sentencing, evidence, pre-trial detention and the empirical study of reported judgments.</p>
          </div>
          <div class="acad-card">
            <div class="ic"><svg><use href="#i-chip" /></svg></div>
            <h4>Technology &amp; Law</h4>
            <p>Data protection, algorithmic accountability, platform liability and digital evidence.</p>
          </div>
          <div class="acad-card">
            <div class="ic"><svg><use href="#i-globe" /></svg></div>
            <h4>Human Rights</h4>
            <p>Constitutional and international human rights, legal aid and access-to-justice research.</p>
          </div>
        </div>

      </div>
    </main>

    <section class="section alt">
      <div class="container">
        <ts-section-title kicker="Recently Published" heading="Latest Papers" />

        @if (loading()) {
          <ts-loading-state [count]="8" />
        } @else if (!papers().length) {
          <ts-empty-state heading="No papers published yet" body="The repository will list papers as they are released." />
        } @else {
          <div class="table-scroll">
            <table class="ts-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Authors</th>
                  <th>Type</th>
                  <th>Centre</th>
                  <th>Published</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                @for (paper of papers(); track paper.id) {
                  <tr>
                    <td><a [routerLink]="['/research', paper.slug]"><b>{{ paper.title }}</b></a></td>
                    <td>{{ paper.authors.join(', ') }}</td>
                    <td><span class="badge badge-outline">{{ label(paper.paperType) }}</span></td>
                    <td>{{ paper.researchCentre }}</td>
                    <td>{{ paper.publishedOn | date: 'MMM y' }}</td>
                    <td class="actions"><a class="btn btn-ghost btn-sm" [routerLink]="['/research', paper.slug]">Read</a></td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          <div class="text-center" style="margin-top:24px">
            <a class="btn btn-navy" routerLink="/publications">All Publications</a>
            <a class="btn btn-ghost" routerLink="/case-studies">Case Studies</a>
            <a class="btn btn-ghost" routerLink="/articles">Articles &amp; Commentary</a>
          </div>
        }
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResearchPage, { className: "ResearchPage", filePath: "src/app/pages/research/research.ts", lineNumber: 118 });
})();
export {
  ResearchPage
};
//# sourceMappingURL=chunk-KIF2LKWZ.js.map
