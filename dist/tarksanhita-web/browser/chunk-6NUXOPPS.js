import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-WCMIFM3B.js";
import {
  EmptyState,
  PageBanner,
  Pager,
  PlaceholderArt
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
  computed,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F5R4JB2K.js";

// src/app/pages/shared-pages/content-list.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function ContentListPage_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r3.label);
  }
}
function ContentListPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 11);
    \u0275\u0275text(2, "Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ContentListPage_Conditional_8_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.category, $event) || (ctx_r1.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ContentListPage_Conditional_8_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilter(ctx_r1.category));
    });
    \u0275\u0275repeaterCreate(4, ContentListPage_Conditional_8_For_5_Template, 2, 2, "option", 13, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.category);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.config().filters);
  }
}
function ContentListPage_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function ContentListPage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, ContentListPage_Conditional_11_For_2_Template, 2, 0, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ContentListPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("body", ctx_r1.search ? "No results matched your search. Try a different term." : "There are no published records in this section yet.");
  }
}
function ContentListPage_Conditional_13_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.metaOf(item_r5));
  }
}
function ContentListPage_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 14)(1, "div", 17);
    \u0275\u0275element(2, "ts-placeholder-art", 18);
    \u0275\u0275conditionalCreate(3, ContentListPage_Conditional_13_For_2_Conditional_3_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "time");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 21);
    \u0275\u0275text(13, "Read More");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("seed", item_r5.slug)("label", item_r5.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.metaOf(item_r5) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("datetime", ctx_r1.dateOf(item_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, ctx_r1.dateOf(item_r5), "dd MMMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.summaryOf(item_r5));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.detailLink(item_r5));
  }
}
function ContentListPage_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, ContentListPage_Conditional_13_For_2_Template, 14, 11, "article", 14, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ts-pager", 16);
    \u0275\u0275listener("pageChange", function ContentListPage_Conditional_13_Template_ts_pager_pageChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r1.page)("totalPages", ctx_r1.totalPages())("total", ctx_r1.total());
  }
}
var ContentListPage = class _ContentListPage {
  route = inject(ActivatedRoute);
  router = inject(Router);
  content = inject(ContentService);
  config = signal({ resource: "notices", kind: "notice", title: "" }, ...ngDevMode ? [{ debugName: "config" }] : []);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  search = "";
  category = "";
  page = 1;
  items = computed(() => this.result()?.items ?? [], ...ngDevMode ? [{ debugName: "items" }] : []);
  totalPages = computed(() => this.result()?.totalPages ?? 0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  total = computed(() => this.result()?.totalCount ?? 0, ...ngDevMode ? [{ debugName: "total" }] : []);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.config.set(data);
      this.page = 1;
      this.load();
    });
    this.route.queryParams.subscribe((params) => {
      const incoming = params["search"] ?? "";
      if (incoming !== this.search) {
        this.search = incoming;
        this.page = 1;
        this.load();
      }
    });
  }
  load() {
    const cfg = this.config();
    this.loading.set(true);
    const query = {
      page: this.page,
      pageSize: 12,
      search: this.search || void 0,
      category: cfg.fixedCategory ?? (this.category || void 0)
    };
    this.content.for(cfg.resource).list(query).subscribe({
      next: (res) => {
        this.result.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.result.set(null);
        this.loading.set(false);
      }
    });
  }
  onSearch() {
    this.page = 1;
    this.load();
  }
  onFilter(value) {
    this.category = value;
    this.page = 1;
    this.load();
  }
  onPage(p) {
    this.page = p;
    this.load();
  }
  detailLink(item) {
    return [`/${this.routeSegment()}`, item.slug];
  }
  /** Maps an API resource onto the public route that renders its detail page. */
  routeSegment() {
    const cfg = this.config();
    switch (cfg.resource) {
      case "topics":
        return "legal-topics";
      case "profiles":
        return "faculty";
      default:
        return cfg.resource;
    }
  }
  /** Best-effort date for a record whose date field differs by type. */
  dateOf(item) {
    const record = item;
    return record["noticeDate"] ?? record["publishedAt"] ?? record["startsAt"] ?? record["publishedOn"] ?? record["scheduledFor"] ?? item.createdAt;
  }
  summaryOf(item) {
    const record = item;
    return record["summary"] ?? record["abstract"] ?? record["description"] ?? record["shortBio"] ?? "";
  }
  metaOf(item) {
    const record = item;
    return record["department"] ?? record["category"] ?? record["eventType"] ?? record["paperType"] ?? record["resourceType"] ?? record["designation"] ?? "";
  }
  static \u0275fac = function ContentListPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentListPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentListPage, selectors: [["ts-content-list"]], decls: 14, vars: 5, consts: [[3, "heading", "lede"], [1, "section"], [1, "container"], [1, "list-toolbar"], [1, "field", "grow"], ["for", "list-search"], ["id", "list-search", "type", "search", "name", "search", "placeholder", "Search by title or keyword\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "field"], ["type", "button", 1, "btn", "btn-navy", 2, "align-self", "flex-end", 3, "click"], [1, "news-grid"], ["heading", "No records found", 3, "body"], ["for", "list-filter"], ["id", "list-filter", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "news-card"], [1, "skeleton", "sk-card"], [3, "pageChange", "page", "totalPages", "total"], [1, "thumb"], [3, "seed", "label"], [1, "tag"], [1, "body"], [1, "read-more", 3, "routerLink"]], template: function ContentListPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ts-page-banner", 0);
      \u0275\u0275elementStart(1, "main", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
      \u0275\u0275text(6, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ContentListPage_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ContentListPage_Template_input_keyup_enter_7_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, ContentListPage_Conditional_8_Template, 6, 1, "div", 7);
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function ContentListPage_Template_button_click_9_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275text(10, "Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, ContentListPage_Conditional_11_Template, 3, 1, "div", 9)(12, ContentListPage_Conditional_12_Template, 1, 1, "ts-empty-state", 10)(13, ContentListPage_Conditional_13_Template, 4, 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275property("heading", ctx.config().title)("lede", ctx.config().lede ?? "");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_3_0 = ctx.config().filters) == null ? null : tmp_3_0.length) ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 11 : !ctx.items().length ? 12 : 13);
    }
  }, dependencies: [RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, PageBanner, Pager, EmptyState, PlaceholderArt, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentListPage, [{
    type: Component,
    args: [{ selector: "ts-content-list", standalone: true, imports: [RouterLink, DatePipe, FormsModule, PageBanner, Pager, EmptyState, PlaceholderArt], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ts-page-banner [heading]="config().title" [lede]="config().lede ?? ''" />

<main class="section">
  <div class="container">

    <div class="list-toolbar">
      <div class="field grow">
        <label for="list-search">Search</label>
        <input id="list-search"
               type="search"
               name="search"
               placeholder="Search by title or keyword\u2026"
               [(ngModel)]="search"
               (keyup.enter)="onSearch()" />
      </div>

      @if (config().filters?.length) {
        <div class="field">
          <label for="list-filter">Filter</label>
          <select id="list-filter" [(ngModel)]="category" (change)="onFilter(category)">
            @for (option of config().filters; track option.value) {
              <option [value]="option.value">{{ option.label }}</option>
            }
          </select>
        </div>
      }

      <button type="button" class="btn btn-navy" (click)="onSearch()" style="align-self:flex-end">Search</button>
    </div>

    @if (loading()) {
      <div class="news-grid">
        @for (skeleton of [1,2,3,4,5,6]; track skeleton) {
          <div class="news-card"><div class="skeleton sk-card"></div></div>
        }
      </div>
    } @else if (!items().length) {
      <ts-empty-state
        heading="No records found"
        [body]="search ? 'No results matched your search. Try a different term.' : 'There are no published records in this section yet.'" />
    } @else {
      <div class="news-grid">
        @for (item of items(); track item.id) {
          <article class="news-card">
            <div class="thumb">
              <ts-placeholder-art [seed]="item.slug" [label]="item.title" />
              @if (metaOf(item)) { <span class="tag">{{ metaOf(item) }}</span> }
            </div>
            <div class="body">
              <time [attr.datetime]="dateOf(item)">{{ dateOf(item) | date: 'dd MMMM y' }}</time>
              <h4>{{ item.title }}</h4>
              <p>{{ summaryOf(item) }}</p>
              <a class="read-more" [routerLink]="detailLink(item)">Read More</a>
            </div>
          </article>
        }
      </div>

      <ts-pager
        [page]="page"
        [totalPages]="totalPages()"
        [total]="total()"
        (pageChange)="onPage($event)" />
    }

  </div>
</main>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentListPage, { className: "ContentListPage", filePath: "src/app/pages/shared-pages/content-list.ts", lineNumber: 35 });
})();
export {
  ContentListPage
};
//# sourceMappingURL=chunk-6NUXOPPS.js.map
