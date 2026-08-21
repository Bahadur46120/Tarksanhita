import {
  ActivatedRoute,
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F5R4JB2K.js";

// src/app/pages/shared-pages/message-page.ts
var MessagePage = class _MessagePage {
  route = inject(ActivatedRoute);
  code = signal("404", ...ngDevMode ? [{ debugName: "code" }] : []);
  heading = signal("Page Not Found", ...ngDevMode ? [{ debugName: "heading" }] : []);
  body = signal("The page you requested does not exist or has been moved.", ...ngDevMode ? [{ debugName: "body" }] : []);
  ngOnInit() {
    const data = this.route.snapshot.data;
    if (data["code"])
      this.code.set(data["code"]);
    if (data["heading"])
      this.heading.set(data["heading"]);
    if (data["body"])
      this.body.set(data["body"]);
  }
  static \u0275fac = function MessagePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessagePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessagePage, selectors: [["ts-message-page"]], decls: 14, vars: 3, consts: [[1, "section", 2, "min-height", "52vh", "display", "grid", "place-items", "center"], [1, "container", "text-center", 2, "max-width", "620px"], [2, "font-family", "var(--serif)", "font-size", "clamp(3.4rem,12vw,6rem)", "color", "var(--gold-500)", "line-height", "1"], [2, "margin", "6px 0 10px"], [2, "width", "96px", "height", "3px", "background", "linear-gradient(90deg,var(--gold-600),var(--gold-300))", "margin", "0 auto 16px"], [1, "muted", 2, "font-size", ".94rem"], [2, "margin-top", "20px"], ["routerLink", "/", 1, "btn", "btn-gold"], ["routerLink", "/contact", 1, "btn", "btn-ghost"]], template: function MessagePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "div", 4);
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "a", 7);
      \u0275\u0275text(11, "Return Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 8);
      \u0275\u0275text(13, "Contact Us");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.code(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.heading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.body());
    }
  }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagePage, [{
    type: Component,
    args: [{
      selector: "ts-message-page",
      standalone: true,
      imports: [RouterLink],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <main class="section" style="min-height:52vh;display:grid;place-items:center">
      <div class="container text-center" style="max-width:620px">
        <div style="font-family:var(--serif);font-size:clamp(3.4rem,12vw,6rem);color:var(--gold-500);line-height:1">
          {{ code() }}
        </div>
        <h1 style="margin:6px 0 10px">{{ heading() }}</h1>
        <div style="width:96px;height:3px;background:linear-gradient(90deg,var(--gold-600),var(--gold-300));margin:0 auto 16px"></div>
        <p class="muted" style="font-size:.94rem">{{ body() }}</p>
        <div style="margin-top:20px">
          <a class="btn btn-gold" routerLink="/">Return Home</a>
          <a class="btn btn-ghost" routerLink="/contact">Contact Us</a>
        </div>
      </div>
    </main>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessagePage, { className: "MessagePage", filePath: "src/app/pages/shared-pages/message-page.ts", lineNumber: 27 });
})();
export {
  MessagePage
};
//# sourceMappingURL=chunk-5CPBP7SR.js.map
