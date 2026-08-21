import {
  RouterLink
} from "./chunk-7TMVEVGK.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-F5R4JB2K.js";

// src/app/shared/components/ui.ts
function PageBanner_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.parentLink());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.parentLabel());
  }
}
function PageBanner_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lede());
  }
}
function SectionTitle_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.kicker());
  }
}
function SectionTitle_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lede());
  }
}
function Pager_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 4);
    \u0275\u0275domListener("click", function Pager_Conditional_0_For_4_Template_button_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pick(p_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r4 === ctx_r1.page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4);
  }
}
function Pager_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275domListener("click", function Pager_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pick(ctx_r1.page() - 1));
    });
    \u0275\u0275text(2, "\u276E Prev");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(3, Pager_Conditional_0_For_4_Template, 2, 3, "button", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementStart(5, "button", 1);
    \u0275\u0275domListener("click", function Pager_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pick(ctx_r1.page() + 1));
    });
    \u0275\u0275text(6, "Next \u276F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 3);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.windowPages());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.page() === ctx_r1.totalPages());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.total(), " item", ctx_r1.total() === 1 ? "" : "s");
  }
}
function LoadingState_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 3);
  }
  if (rf & 2) {
    const $index_r1 = ctx.$index;
    \u0275\u0275styleProp("width", $index_r1 % 3 === 2 ? "55%" : "100%");
  }
}
var _c0 = "\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=ui.css.map */";
var PageBanner = class _PageBanner {
  heading = input.required(...ngDevMode ? [{ debugName: "heading" }] : []);
  lede = input("", ...ngDevMode ? [{ debugName: "lede" }] : []);
  parentLabel = input("", ...ngDevMode ? [{ debugName: "parentLabel" }] : []);
  parentLink = input("/", ...ngDevMode ? [{ debugName: "parentLink" }] : []);
  static \u0275fac = function PageBanner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageBanner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageBanner, selectors: [["ts-page-banner"]], inputs: { heading: [1, "heading"], lede: [1, "lede"], parentLabel: [1, "parentLabel"], parentLink: [1, "parentLink"] }, decls: 11, vars: 4, consts: [[1, "page-banner"], [1, "container"], ["aria-label", "Breadcrumb", 1, "breadcrumbs"], ["routerLink", "/"], [1, "lede"], [3, "routerLink"]], template: function PageBanner_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, PageBanner_Conditional_5_Template, 3, 2, "span");
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "h1");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, PageBanner_Conditional_10_Template, 2, 1, "p", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.parentLabel() ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.heading());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.heading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lede() ? 10 : -1);
    }
  }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageBanner, [{
    type: Component,
    args: [{
      selector: "ts-page-banner",
      standalone: true,
      imports: [RouterLink],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="page-banner">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          @if (parentLabel()) {
            <span><a [routerLink]="parentLink()">{{ parentLabel() }}</a></span>
          }
          <span>{{ heading() }}</span>
        </nav>
        <h1>{{ heading() }}</h1>
        @if (lede()) {
          <p class="lede">{{ lede() }}</p>
        }
      </div>
    </div>
  `
    }]
  }], null, { heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true }] }], lede: [{ type: Input, args: [{ isSignal: true, alias: "lede", required: false }] }], parentLabel: [{ type: Input, args: [{ isSignal: true, alias: "parentLabel", required: false }] }], parentLink: [{ type: Input, args: [{ isSignal: true, alias: "parentLink", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageBanner, { className: "PageBanner", filePath: "src/app/shared/components/ui.ts", lineNumber: 34 });
})();
var SectionTitle = class _SectionTitle {
  heading = input.required(...ngDevMode ? [{ debugName: "heading" }] : []);
  kicker = input("", ...ngDevMode ? [{ debugName: "kicker" }] : []);
  lede = input("", ...ngDevMode ? [{ debugName: "lede" }] : []);
  static \u0275fac = function SectionTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SectionTitle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionTitle, selectors: [["ts-section-title"]], inputs: { heading: [1, "heading"], kicker: [1, "kicker"], lede: [1, "lede"] }, decls: 6, vars: 3, consts: [[1, "sec-title"], [1, "kicker"], [1, "rule"]], template: function SectionTitle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, SectionTitle_Conditional_1_Template, 2, 1, "div", 1);
      \u0275\u0275domElementStart(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(4, "div", 2);
      \u0275\u0275conditionalCreate(5, SectionTitle_Conditional_5_Template, 2, 1, "p");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.kicker() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.heading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.lede() ? 5 : -1);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionTitle, [{
    type: Component,
    args: [{
      selector: "ts-section-title",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="sec-title">
      @if (kicker()) { <div class="kicker">{{ kicker() }}</div> }
      <h2>{{ heading() }}</h2>
      <div class="rule"></div>
      @if (lede()) { <p>{{ lede() }}</p> }
    </div>
  `
    }]
  }], null, { heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true }] }], kicker: [{ type: Input, args: [{ isSignal: true, alias: "kicker", required: false }] }], lede: [{ type: Input, args: [{ isSignal: true, alias: "lede", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionTitle, { className: "SectionTitle", filePath: "src/app/shared/components/ui.ts", lineNumber: 56 });
})();
var Pager = class _Pager {
  page = input.required(...ngDevMode ? [{ debugName: "page" }] : []);
  totalPages = input.required(...ngDevMode ? [{ debugName: "totalPages" }] : []);
  total = input(0, ...ngDevMode ? [{ debugName: "total" }] : []);
  pageChange = output();
  /** Shows at most seven page buttons centred on the current page. */
  windowPages() {
    const last = this.totalPages();
    const current = this.page();
    const span = 7;
    let start = Math.max(1, current - Math.floor(span / 2));
    const end = Math.min(last, start + span - 1);
    start = Math.max(1, end - span + 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  pick(p) {
    if (p < 1 || p > this.totalPages() || p === this.page())
      return;
    this.pageChange.emit(p);
    window.scrollTo({ top: 200, behavior: "smooth" });
  }
  static \u0275fac = function Pager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Pager)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Pager, selectors: [["ts-pager"]], inputs: { page: [1, "page"], totalPages: [1, "totalPages"], total: [1, "total"] }, outputs: { pageChange: "pageChange" }, decls: 1, vars: 1, consts: [["role", "navigation", "aria-label", "Pagination", 1, "pager"], ["type", "button", 3, "click", "disabled"], ["type", "button", 3, "active"], [1, "count"], ["type", "button", 3, "click"]], template: function Pager_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Pager_Conditional_0_Template, 9, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.totalPages() > 1 ? 0 : -1);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pager, [{
    type: Component,
    args: [{
      selector: "ts-pager",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (totalPages() > 1) {
      <div class="pager" role="navigation" aria-label="Pagination">
        <button type="button" [disabled]="page() === 1" (click)="pick(page() - 1)">&#10094; Prev</button>

        @for (p of windowPages(); track p) {
          <button type="button" [class.active]="p === page()" (click)="pick(p)">{{ p }}</button>
        }

        <button type="button" [disabled]="page() === totalPages()" (click)="pick(page() + 1)">Next &#10095;</button>
        <span class="count">{{ total() }} item{{ total() === 1 ? '' : 's' }}</span>
      </div>
    }
  `
    }]
  }], null, { page: [{ type: Input, args: [{ isSignal: true, alias: "page", required: true }] }], totalPages: [{ type: Input, args: [{ isSignal: true, alias: "totalPages", required: true }] }], total: [{ type: Input, args: [{ isSignal: true, alias: "total", required: false }] }], pageChange: [{ type: Output, args: ["pageChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Pager, { className: "Pager", filePath: "src/app/shared/components/ui.ts", lineNumber: 83 });
})();
var EmptyState = class _EmptyState {
  heading = input("Nothing to show yet", ...ngDevMode ? [{ debugName: "heading" }] : []);
  body = input("There are no published records in this section at the moment.", ...ngDevMode ? [{ debugName: "body" }] : []);
  static \u0275fac = function EmptyState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmptyState)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyState, selectors: [["ts-empty-state"]], inputs: { heading: [1, "heading"], body: [1, "body"] }, decls: 4, vars: 2, consts: [[1, "state"]], template: function EmptyState_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "b");
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.heading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.body(), " ");
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmptyState, [{
    type: Component,
    args: [{
      selector: "ts-empty-state",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="state">
      <b>{{ heading() }}</b>
      {{ body() }}
    </div>
  `
    }]
  }], null, { heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: false }] }], body: [{ type: Input, args: [{ isSignal: true, alias: "body", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyState, { className: "EmptyState", filePath: "src/app/shared/components/ui.ts", lineNumber: 122 });
})();
var LoadingState = class _LoadingState {
  count = input(6, ...ngDevMode ? [{ debugName: "count" }] : []);
  get rows() {
    return Array.from({ length: this.count() });
  }
  static \u0275fac = function LoadingState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingState)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingState, selectors: [["ts-loading-state"]], inputs: { count: [1, "count"] }, decls: 5, vars: 1, consts: [["aria-live", "polite"], [1, "sr-only"], [1, "skeleton", "sk-line", 3, "width"], [1, "skeleton", "sk-line"]], template: function LoadingState_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Loading\u2026");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(3, LoadingState_For_4_Template, 1, 2, "div", 2, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-busy", true);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.rows);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingState, [{
    type: Component,
    args: [{
      selector: "ts-loading-state",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div [attr.aria-busy]="true" aria-live="polite">
      <span class="sr-only">Loading\u2026</span>
      @for (row of rows; track $index) {
        <div class="skeleton sk-line" [style.width]="$index % 3 === 2 ? '55%' : '100%'"></div>
      }
    </div>
  `
    }]
  }], null, { count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingState, { className: "LoadingState", filePath: "src/app/shared/components/ui.ts", lineNumber: 140 });
})();
var PlaceholderArt = class _PlaceholderArt {
  seed = input("tarksanhita", ...ngDevMode ? [{ debugName: "seed" }] : []);
  label = input("", ...ngDevMode ? [{ debugName: "label" }] : []);
  static PAIRS = [
    ["#102743", "#1e4a7a"],
    ["#0a1a2f", "#17395f"],
    ["#17395f", "#061224"],
    ["#102743", "#0a1a2f"],
    ["#061224", "#1e4a7a"]
  ];
  get hash() {
    const s = this.seed();
    let h = 0;
    for (let i = 0; i < s.length; i++)
      h = h * 31 + s.charCodeAt(i) >>> 0;
    return h;
  }
  get from() {
    return _PlaceholderArt.PAIRS[this.hash % _PlaceholderArt.PAIRS.length][0];
  }
  get to() {
    return _PlaceholderArt.PAIRS[this.hash % _PlaceholderArt.PAIRS.length][1];
  }
  get dotX() {
    return 40 + this.hash % 240;
  }
  get gradientId() {
    return `ph-${this.hash.toString(36)}`;
  }
  static \u0275fac = function PlaceholderArt_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceholderArt)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceholderArt, selectors: [["ts-placeholder-art"]], inputs: { seed: [1, "seed"], label: [1, "label"] }, decls: 10, vars: 7, consts: [["preserveAspectRatio", "xMidYMid slice", "role", "img"], ["x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", "0"], ["offset", "1"], ["width", "320", "height", "180"], ["stroke", "#c9a227", "fill", "none", "stroke-width", "2", "opacity", "0.9"], ["d", "M110 132h100M160 48v80M160 62l-38 11 38-11 38 11"], ["d", "M122 73l-18 34h36zM198 73l-18 34h36z"], ["cy", "42", "r", "20", "fill", "#c9a227", "opacity", "0.16"]], template: function PlaceholderArt_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(0, "svg", 0)(1, "defs")(2, "linearGradient", 1);
      \u0275\u0275domElement(3, "stop", 2)(4, "stop", 3);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(5, "rect", 4);
      \u0275\u0275domElementStart(6, "g", 5);
      \u0275\u0275domElement(7, "path", 6)(8, "path", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(9, "circle", 8);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("viewBox", "0 0 320 180")("aria-label", ctx.label() || "Decorative illustration");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("id", ctx.gradientId);
      \u0275\u0275advance();
      \u0275\u0275attribute("stop-color", ctx.from);
      \u0275\u0275advance();
      \u0275\u0275attribute("stop-color", ctx.to);
      \u0275\u0275advance();
      \u0275\u0275attribute("fill", "url(#" + ctx.gradientId + ")");
      \u0275\u0275advance(4);
      \u0275\u0275attribute("cx", ctx.dotX);
    }
  }, styles: [_c0], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderArt, [{
    type: Component,
    args: [{ selector: "ts-placeholder-art", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <svg [attr.viewBox]="'0 0 320 180'" preserveAspectRatio="xMidYMid slice" role="img"
         [attr.aria-label]="label() || 'Decorative illustration'">
      <defs>
        <linearGradient [attr.id]="gradientId" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" [attr.stop-color]="from" />
          <stop offset="1" [attr.stop-color]="to" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" [attr.fill]="'url(#' + gradientId + ')'" />
      <g stroke="#c9a227" fill="none" stroke-width="2" opacity="0.9">
        <path d="M110 132h100M160 48v80M160 62l-38 11 38-11 38 11" />
        <path d="M122 73l-18 34h36zM198 73l-18 34h36z" />
      </g>
      <circle [attr.cx]="dotX" cy="42" r="20" fill="#c9a227" opacity="0.16" />
    </svg>
  `, styles: ["/* angular:styles/component:css;d180bdd77cee86874140d735f30778442b1fe0a03b9f295a3cee635595132e43;d:/Tarksanhita/frontend/src/app/shared/components/ui.ts */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\nsvg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=ui.css.map */\n"] }]
  }], null, { seed: [{ type: Input, args: [{ isSignal: true, alias: "seed", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceholderArt, { className: "PlaceholderArt", filePath: "src/app/shared/components/ui.ts", lineNumber: 177 });
})();
var AvatarArt = class _AvatarArt {
  name = input("", ...ngDevMode ? [{ debugName: "name" }] : []);
  get id() {
    const s = this.name() || "avatar";
    let h = 0;
    for (let i = 0; i < s.length; i++)
      h = h * 33 + s.charCodeAt(i) >>> 0;
    return `av-${h.toString(36)}`;
  }
  static \u0275fac = function AvatarArt_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarArt)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvatarArt, selectors: [["ts-avatar-art"]], inputs: { name: [1, "name"] }, decls: 8, vars: 3, consts: [["viewBox", "0 0 100 100", "role", "img"], ["x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", "0", "stop-color", "#17395f"], ["offset", "1", "stop-color", "#0a1a2f"], ["width", "100", "height", "100"], ["cx", "50", "cy", "38", "r", "17", "fill", "none", "stroke", "#c9a227", "stroke-width", "2.4"], ["d", "M20 92a30 30 0 0160 0", "fill", "none", "stroke", "#c9a227", "stroke-width", "2.4"]], template: function AvatarArt_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(0, "svg", 0)(1, "defs")(2, "linearGradient", 1);
      \u0275\u0275domElement(3, "stop", 2)(4, "stop", 3);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(5, "rect", 4)(6, "circle", 5)(7, "path", 6);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", (ctx.name() || "Profile") + " portrait placeholder");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("id", ctx.id);
      \u0275\u0275advance(3);
      \u0275\u0275attribute("fill", "url(#" + ctx.id + ")");
    }
  }, styles: [_c0], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarArt, [{
    type: Component,
    args: [{ selector: "ts-avatar-art", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <svg viewBox="0 0 100 100" role="img" [attr.aria-label]="(name() || 'Profile') + ' portrait placeholder'">
      <defs>
        <linearGradient [attr.id]="id" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#17395f" />
          <stop offset="1" stop-color="#0a1a2f" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" [attr.fill]="'url(#' + id + ')'" />
      <circle cx="50" cy="38" r="17" fill="none" stroke="#c9a227" stroke-width="2.4" />
      <path d="M20 92a30 30 0 0160 0" fill="none" stroke="#c9a227" stroke-width="2.4" />
    </svg>
  `, styles: ["/* angular:styles/component:css;d180bdd77cee86874140d735f30778442b1fe0a03b9f295a3cee635595132e43;d:/Tarksanhita/frontend/src/app/shared/components/ui.ts */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\nsvg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=ui.css.map */\n"] }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvatarArt, { className: "AvatarArt", filePath: "src/app/shared/components/ui.ts", lineNumber: 223 });
})();

export {
  PageBanner,
  SectionTitle,
  Pager,
  EmptyState,
  LoadingState,
  PlaceholderArt,
  AvatarArt
};
//# sourceMappingURL=chunk-JRDIFDAI.js.map
