import {
  EmptyState,
  LoadingState,
  PageBanner
} from "./chunk-JRDIFDAI.js";
import {
  ContentService
} from "./chunk-MBQHVFNQ.js";
import {
  ActivatedRoute,
  DatePipe,
  Router,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-F5R4JB2K.js";

// src/app/pages/shared-pages/content-detail.ts
function ContentDetailPage_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7)(1, "b");
    \u0275\u0275text(2, "Reference:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.field(record_r1, "referenceNo"));
  }
}
function ContentDetailPage_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7)(1, "b");
    \u0275\u0275text(2, "Issued by:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.field(record_r1, "department"));
  }
}
function ContentDetailPage_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7)(1, "b");
    \u0275\u0275text(2, "Venue:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.field(record_r1, "venue"));
  }
}
function ContentDetailPage_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7)(1, "b");
    \u0275\u0275text(2, "Designation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.field(record_r1, "designation"), " \u2014 ", ctx_r1.field(record_r1, "qualifications"));
  }
}
function ContentDetailPage_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7)(1, "b");
    \u0275\u0275text(2, "Authors:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.list(record_r1, "authors").join(", "));
  }
}
function ContentDetailPage_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7)(1, "b");
    \u0275\u0275text(2, "Citation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.field(record_r1, "citation"));
  }
}
function ContentDetailPage_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.summary(record_r1));
  }
}
function ContentDetailPage_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r3);
  }
}
function ContentDetailPage_Conditional_0_Conditional_20_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const provision_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provision_r4);
  }
}
function ContentDetailPage_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1, "Key Provisions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 11);
    \u0275\u0275repeaterCreate(3, ContentDetailPage_Conditional_0_Conditional_20_For_4_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.list(record_r1, "keyProvisions"));
  }
}
function ContentDetailPage_Conditional_0_Conditional_21_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const judgment_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(judgment_r5);
  }
}
function ContentDetailPage_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1, "Landmark Cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 11);
    \u0275\u0275repeaterCreate(3, ContentDetailPage_Conditional_0_Conditional_21_For_4_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.list(record_r1, "landmarkCases"));
  }
}
function ContentDetailPage_Conditional_0_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r6);
  }
}
function ContentDetailPage_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, ContentDetailPage_Conditional_0_Conditional_22_For_2_Template, 2, 1, "span", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(record_r1.tags);
  }
}
function ContentDetailPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-page-banner", 1);
    \u0275\u0275elementStart(1, "main", 0)(2, "div", 2)(3, "article", 3)(4, "div", 4)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6);
    \u0275\u0275conditionalCreate(11, ContentDetailPage_Conditional_0_Conditional_11_Template, 4, 1, "p", 7);
    \u0275\u0275conditionalCreate(12, ContentDetailPage_Conditional_0_Conditional_12_Template, 4, 1, "p", 7);
    \u0275\u0275conditionalCreate(13, ContentDetailPage_Conditional_0_Conditional_13_Template, 4, 1, "p", 7);
    \u0275\u0275conditionalCreate(14, ContentDetailPage_Conditional_0_Conditional_14_Template, 4, 2, "p", 7);
    \u0275\u0275conditionalCreate(15, ContentDetailPage_Conditional_0_Conditional_15_Template, 4, 1, "p", 7);
    \u0275\u0275conditionalCreate(16, ContentDetailPage_Conditional_0_Conditional_16_Template, 4, 1, "p", 7);
    \u0275\u0275conditionalCreate(17, ContentDetailPage_Conditional_0_Conditional_17_Template, 2, 1, "p", 8);
    \u0275\u0275repeaterCreate(18, ContentDetailPage_Conditional_0_For_19_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(20, ContentDetailPage_Conditional_0_Conditional_20_Template, 5, 0);
    \u0275\u0275conditionalCreate(21, ContentDetailPage_Conditional_0_Conditional_21_Template, 5, 0);
    \u0275\u0275conditionalCreate(22, ContentDetailPage_Conditional_0_Conditional_22_Template, 3, 0, "div", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "a", 10);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const record_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("heading", record_r1.title)("parentLabel", ctx_r1.section())("parentLink", ctx_r1.parent());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.section());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 17, ctx_r1.dateValue(record_r1), "dd MMMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.field(record_r1, "referenceNo") ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.field(record_r1, "department") ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.field(record_r1, "venue") ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.field(record_r1, "designation") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.list(record_r1, "authors").length ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.field(record_r1, "citation") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.summary(record_r1) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.paragraphs(record_r1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.list(record_r1, "keyProvisions").length ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.list(record_r1, "landmarkCases").length ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(record_r1.tags.length ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.parent());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u276E Back to ", ctx_r1.section());
  }
}
function ContentDetailPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "div", 14);
    \u0275\u0275element(2, "ts-loading-state", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("count", 10);
  }
}
function ContentDetailPage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "div", 14);
    \u0275\u0275element(2, "ts-empty-state", 16);
    \u0275\u0275elementStart(3, "div", 17)(4, "a", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.parent());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Back to ", ctx_r1.section());
  }
}
var ContentDetailPage = class _ContentDetailPage {
  route = inject(ActivatedRoute);
  router = inject(Router);
  content = inject(ContentService);
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  section = signal("", ...ngDevMode ? [{ debugName: "section" }] : []);
  parent = signal("/", ...ngDevMode ? [{ debugName: "parent" }] : []);
  ngOnInit() {
    const data = this.route.snapshot.data;
    this.section.set(data["section"] ?? "Back");
    this.parent.set(data["parent"] ?? "/");
    this.route.paramMap.subscribe((params) => {
      const slug = params.get("slug");
      if (!slug)
        return;
      this.loading.set(true);
      this.content.for(data["resource"]).bySlug(slug).subscribe({
        next: (record) => {
          this.item.set(record);
          this.loading.set(false);
        },
        error: () => {
          this.item.set(null);
          this.loading.set(false);
        }
      });
    });
  }
  // ---- field helpers: records vary by type, so read defensively ----
  raw(record) {
    return record;
  }
  field(record, key) {
    const value = this.raw(record)[key];
    return typeof value === "string" ? value : "";
  }
  list(record, key) {
    const value = this.raw(record)[key];
    return Array.isArray(value) ? value : [];
  }
  summary(record) {
    return this.field(record, "summary") || this.field(record, "abstract") || this.field(record, "description") || this.field(record, "shortBio");
  }
  paragraphs(record) {
    const body = this.field(record, "body") || this.field(record, "biography");
    return body ? body.split("\n").map((p) => p.trim()).filter(Boolean) : [];
  }
  dateValue(record) {
    const r = this.raw(record);
    const candidates = ["noticeDate", "publishedAt", "startsAt", "publishedOn", "scheduledFor"];
    for (const key of candidates) {
      if (typeof r[key] === "string")
        return r[key];
    }
    return record.createdAt;
  }
  static \u0275fac = function ContentDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentDetailPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentDetailPage, selectors: [["ts-content-detail"]], decls: 3, vars: 1, consts: [[1, "section"], [3, "heading", "parentLabel", "parentLink"], [1, "container", 2, "max-width", "900px"], [1, "panel"], [1, "panel-head"], [1, "more"], [1, "panel-body", "prose"], [1, "muted"], [2, "font-size", "1rem", "color", "var(--navy-800)", "font-weight", "500"], [1, "flex", "flex-wrap", "gap-8", 2, "margin-top", "18px"], [1, "btn", "btn-ghost", 3, "routerLink"], [1, "link-list"], [2, "padding", "6px 0", "display", "block"], [1, "badge", "badge-outline"], [1, "container"], [3, "count"], ["heading", "Record not found", "body", "This item may have been withdrawn or the address may be incorrect."], [1, "text-center", 2, "margin-top", "18px"], [1, "btn", "btn-navy", 3, "routerLink"]], template: function ContentDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ContentDetailPage_Conditional_0_Template, 25, 20)(1, ContentDetailPage_Conditional_1_Template, 3, 1, "main", 0)(2, ContentDetailPage_Conditional_2_Template, 6, 2, "main", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.item()) ? 0 : ctx.loading() ? 1 : 2, tmp_0_0);
    }
  }, dependencies: [RouterLink, PageBanner, LoadingState, EmptyState, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentDetailPage, [{
    type: Component,
    args: [{
      selector: "ts-content-detail",
      standalone: true,
      imports: [RouterLink, DatePipe, PageBanner, LoadingState, EmptyState],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (item(); as record) {
      <ts-page-banner
        [heading]="record.title"
        [parentLabel]="section()"
        [parentLink]="parent()" />

      <main class="section">
        <div class="container" style="max-width:900px">
          <article class="panel">
            <div class="panel-head">
              <h2>{{ section() }}</h2>
              <span class="more">{{ dateValue(record) | date: 'dd MMMM y' }}</span>
            </div>

            <div class="panel-body prose">
              @if (field(record, 'referenceNo')) {
                <p class="muted"><b>Reference:</b> {{ field(record, 'referenceNo') }}</p>
              }
              @if (field(record, 'department')) {
                <p class="muted"><b>Issued by:</b> {{ field(record, 'department') }}</p>
              }
              @if (field(record, 'venue')) {
                <p class="muted"><b>Venue:</b> {{ field(record, 'venue') }}</p>
              }
              @if (field(record, 'designation')) {
                <p class="muted"><b>Designation:</b> {{ field(record, 'designation') }} &mdash; {{ field(record, 'qualifications') }}</p>
              }
              @if (list(record, 'authors').length) {
                <p class="muted"><b>Authors:</b> {{ list(record, 'authors').join(', ') }}</p>
              }
              @if (field(record, 'citation')) {
                <p class="muted"><b>Citation:</b> {{ field(record, 'citation') }}</p>
              }

              @if (summary(record)) {
                <p style="font-size:1rem;color:var(--navy-800);font-weight:500">{{ summary(record) }}</p>
              }

              @for (paragraph of paragraphs(record); track $index) {
                <p>{{ paragraph }}</p>
              }

              @if (list(record, 'keyProvisions').length) {
                <h3>Key Provisions</h3>
                <ul class="link-list">
                  @for (provision of list(record, 'keyProvisions'); track provision) {
                    <li><span style="padding:6px 0;display:block">{{ provision }}</span></li>
                  }
                </ul>
              }

              @if (list(record, 'landmarkCases').length) {
                <h3>Landmark Cases</h3>
                <ul class="link-list">
                  @for (judgment of list(record, 'landmarkCases'); track judgment) {
                    <li><span style="padding:6px 0;display:block">{{ judgment }}</span></li>
                  }
                </ul>
              }

              @if (record.tags.length) {
                <div class="flex flex-wrap gap-8" style="margin-top:18px">
                  @for (tag of record.tags; track tag) {
                    <span class="badge badge-outline">{{ tag }}</span>
                  }
                </div>
              }
            </div>
          </article>

          <a class="btn btn-ghost" [routerLink]="parent()">&#10094; Back to {{ section() }}</a>
        </div>
      </main>
    } @else if (loading()) {
      <main class="section"><div class="container"><ts-loading-state [count]="10" /></div></main>
    } @else {
      <main class="section">
        <div class="container">
          <ts-empty-state
            heading="Record not found"
            body="This item may have been withdrawn or the address may be incorrect." />
          <div class="text-center" style="margin-top:18px">
            <a class="btn btn-navy" [routerLink]="parent()">Back to {{ section() }}</a>
          </div>
        </div>
      </main>
    }
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentDetailPage, { className: "ContentDetailPage", filePath: "src/app/pages/shared-pages/content-detail.ts", lineNumber: 107 });
})();
export {
  ContentDetailPage
};
//# sourceMappingURL=chunk-DWFM7Y4X.js.map
