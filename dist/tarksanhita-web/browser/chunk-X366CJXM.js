import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-WCMIFM3B.js";
import {
  EmptyState,
  LoadingState,
  PageBanner,
  Pager
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F5R4JB2K.js";

// src/app/pages/library/library.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function LibraryPage_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r1.label);
  }
}
function LibraryPage_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275listener("click", function LibraryPage_For_16_Template_a_click_0_listener($event) {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r3.selectType(option_r3.value));
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg");
    \u0275\u0275element(3, "use");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r3.type === option_r3.value ? "var(--gold-500)" : "");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("href", "#i-" + option_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.countFor(option_r3.value), " ", ctx_r3.countFor(option_r3.value) === 1 ? "record" : "records");
  }
}
function LibraryPage_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275text(1, "Clear filters");
    \u0275\u0275elementEnd();
  }
}
function LibraryPage_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 17);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 10);
  }
}
function LibraryPage_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 18);
  }
}
function LibraryPage_Conditional_26_For_18_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Digital");
    \u0275\u0275elementEnd();
  }
}
function LibraryPage_Conditional_26_For_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", item_r6.copiesAvailable, "/", item_r6.copiesTotal);
  }
}
function LibraryPage_Conditional_26_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "code", 33);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 34);
    \u0275\u0275conditionalCreate(17, LibraryPage_Conditional_26_For_18_Conditional_17_Template, 2, 0, "span", 35)(18, LibraryPage_Conditional_26_For_18_Conditional_18_Template, 2, 2, "span", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.resourceType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.authors.join(", ") || item_r6.publisher);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.year);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.shelfCode);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r6.isDigital ? 17 : 18);
  }
}
function LibraryPage_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "table", 29)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Author / Publisher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Shelf");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Access");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, LibraryPage_Conditional_26_For_18_Template, 19, 7, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "ts-pager", 30);
    \u0275\u0275listener("pageChange", function LibraryPage_Conditional_26_Template_ts_pager_pageChange_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r3.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r3.page)("totalPages", ctx_r3.totalPages())("total", ctx_r3.total());
  }
}
var TYPES = [
  { value: "", label: "All Resources", icon: "book", note: "Everything" },
  { value: "Book", label: "Books", icon: "book", note: "Core & reference" },
  { value: "Journal", label: "Journals", icon: "doc", note: "Subscriptions" },
  { value: "ResearchPaper", label: "Research Papers", icon: "flask", note: "Open access" },
  { value: "BareAct", label: "Bare Acts", icon: "scale", note: "Central & State" },
  { value: "CaseLaw", label: "Case Laws", icon: "gavel", note: "Reported judgments" },
  { value: "Constitution", label: "Constitution", icon: "building", note: "Annotated text" },
  { value: "Database", label: "Legal Databases", icon: "globe", note: "Licensed access" },
  { value: "StudyMaterial", label: "Study Materials", icon: "bulb", note: "Course-linked" }
];
var LibraryPage = class _LibraryPage {
  api = inject(ApiService);
  content = inject(ContentService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  types = TYPES;
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  categoryCounts = signal([], ...ngDevMode ? [{ debugName: "categoryCounts" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  search = "";
  type = "";
  page = 1;
  items = computed(() => this.result()?.items ?? [], ...ngDevMode ? [{ debugName: "items" }] : []);
  total = computed(() => this.result()?.totalCount ?? 0, ...ngDevMode ? [{ debugName: "total" }] : []);
  totalPages = computed(() => this.result()?.totalPages ?? 0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  ngOnInit() {
    this.api.get("library/categories").subscribe({
      next: (counts) => this.categoryCounts.set(counts),
      error: () => this.categoryCounts.set([])
    });
    this.route.queryParams.subscribe((params) => {
      this.type = params["type"] ?? "";
      this.search = params["q"] ?? "";
      this.page = 1;
      this.load();
    });
  }
  load() {
    this.loading.set(true);
    this.content.for("library").list({
      page: this.page,
      pageSize: 12,
      search: this.search || void 0,
      category: this.type || void 0,
      sortBy: "title",
      descending: false
    }).subscribe({
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
  /** Keeps the address bar in step so a search can be bookmarked or shared. */
  submitSearch() {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: this.search || null, type: this.type || null },
      queryParamsHandling: "merge"
    });
  }
  selectType(value) {
    this.type = value;
    this.submitSearch();
  }
  onPage(p) {
    this.page = p;
    this.load();
  }
  currentTypeLabel() {
    return TYPES.find((t) => t.value === this.type)?.label ?? "All Resources";
  }
  /** Slice helper for the template — the first entry is the "All Resources" option. */
  get selectableTypes() {
    return TYPES.slice(1);
  }
  countFor(type) {
    return this.categoryCounts().find((c) => c.type === type)?.count ?? 0;
  }
  static \u0275fac = function LibraryPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LibraryPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryPage, selectors: [["ts-library"]], decls: 64, vars: 7, consts: [["heading", "Digital Library", "lede", "Search the catalogue across books, journals, statutes, law reports and study material."], [1, "section"], [1, "container"], ["role", "search", 1, "lib-search", 3, "ngSubmit"], ["for", "lib-type", 1, "sr-only"], ["id", "lib-type", "name", "type", "aria-label", "Resource type", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "lib-q", 1, "sr-only"], ["id", "lib-q", "type", "search", "name", "q", "placeholder", "Search by title, author, citation or keyword\u2026", 3, "ngModelChange", "ngModel"], ["type", "submit"], [1, "lib-grid", 2, "margin-bottom", "28px"], ["href", "#results", 1, "lib-tile", 3, "border-color"], ["id", "results"], [1, "flex", "items-center", "justify-between", "flex-wrap", "gap-14", 2, "margin-bottom", "14px"], [2, "font-size", "1.15rem"], [1, "muted", 2, "font-family", "var(--sans)", "font-size", ".8rem", "font-weight", "400"], ["routerLink", "/library", 1, "btn", "btn-ghost", "btn-sm"], [3, "count"], ["heading", "No matching resources", "body", "Try a broader term, or clear the filters to browse the whole catalogue."], [1, "section", "alt"], [1, "sec-title"], [1, "kicker"], [1, "rule"], [1, "res-grid"], [1, "res-item"], [1, "n"], ["href", "#results", 1, "lib-tile", 3, "click"], [1, "ic"], [1, "table-scroll"], [1, "ts-table"], [3, "pageChange", "page", "totalPages", "total"], [1, "muted", 2, "font-size", ".78rem"], [1, "badge", "badge-outline"], [2, "font-size", ".75rem"], [1, "actions"], [1, "badge", "badge-open"], [1, "badge", "badge-navy"]], template: function LibraryPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ts-page-banner", 0);
      \u0275\u0275elementStart(1, "main", 1)(2, "div", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function LibraryPage_Template_form_ngSubmit_3_listener() {
        return ctx.submitSearch();
      });
      \u0275\u0275elementStart(4, "label", 4);
      \u0275\u0275text(5, "Resource type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function LibraryPage_Template_select_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.type, $event) || (ctx.type = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(7, LibraryPage_For_8_Template, 2, 2, "option", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "label", 7);
      \u0275\u0275text(10, "Search the digital library");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function LibraryPage_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275text(13, "Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10);
      \u0275\u0275repeaterCreate(15, LibraryPage_For_16_Template, 8, 6, "a", 11, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "h2", 14);
      \u0275\u0275text(20);
      \u0275\u0275elementStart(21, "span", 15);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(23, LibraryPage_Conditional_23_Template, 2, 0, "a", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(24, LibraryPage_Conditional_24_Template, 1, 1, "ts-loading-state", 17)(25, LibraryPage_Conditional_25_Template, 1, 0, "ts-empty-state", 18)(26, LibraryPage_Conditional_26_Template, 20, 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "section", 19)(28, "div", 2)(29, "div", 20)(30, "div", 21);
      \u0275\u0275text(31, "Using the Library");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h2");
      \u0275\u0275text(33, "Access & Rules");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 23)(36, "div", 24)(37, "div", 25);
      \u0275\u0275text(38, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "h4");
      \u0275\u0275text(40, "Open to All Learners");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "Every enrolled student has full digital access from the first day of the session.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 24)(44, "div", 25);
      \u0275\u0275text(45, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "h4");
      \u0275\u0275text(47, "Reading Room");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p");
      \u0275\u0275text(49, "Open Monday to Saturday, 09:00\u201320:00 IST. Reference material is not issued for home use.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 24)(51, "div", 25);
      \u0275\u0275text(52, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "h4");
      \u0275\u0275text(54, "Licensed Databases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "Commercial databases are reached through single sign-on from within the campus network.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 24)(58, "div", 25);
      \u0275\u0275text(59, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h4");
      \u0275\u0275text(61, "Inter-Library Requests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p");
      \u0275\u0275text(63, "Titles not held can be requested through the librarian; most arrive within ten days.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.type);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.types);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.selectableTypes);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.currentTypeLabel(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" \u2014 ", ctx.total(), " record", ctx.total() === 1 ? "" : "s", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.type || ctx.search ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 24 : !ctx.items().length ? 25 : 26);
    }
  }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, PageBanner, Pager, LoadingState, EmptyState], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibraryPage, [{
    type: Component,
    args: [{ selector: "ts-library", standalone: true, imports: [RouterLink, FormsModule, PageBanner, Pager, LoadingState, EmptyState], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ts-page-banner
  heading="Digital Library"
  lede="Search the catalogue across books, journals, statutes, law reports and study material." />

<main class="section">
  <div class="container">

    <form class="lib-search" role="search" (ngSubmit)="submitSearch()">
      <label class="sr-only" for="lib-type">Resource type</label>
      <select id="lib-type" [(ngModel)]="type" name="type" aria-label="Resource type">
        @for (option of types; track option.value) {
          <option [value]="option.value">{{ option.label }}</option>
        }
      </select>

      <label class="sr-only" for="lib-q">Search the digital library</label>
      <input id="lib-q"
             type="search"
             name="q"
             [(ngModel)]="search"
             placeholder="Search by title, author, citation or keyword\u2026" />

      <button type="submit">Search</button>
    </form>

    <div class="lib-grid" style="margin-bottom:28px">
      @for (option of selectableTypes; track option.value) {
        <a class="lib-tile"
           href="#results"
           [style.border-color]="type === option.value ? 'var(--gold-500)' : ''"
           (click)="$event.preventDefault(); selectType(option.value)">
          <div class="ic"><svg><use [attr.href]="'#i-' + option.icon" /></svg></div>
          <b>{{ option.label }}</b>
          <small>{{ countFor(option.value) }} {{ countFor(option.value) === 1 ? 'record' : 'records' }}</small>
        </a>
      }
    </div>

    <div id="results">
      <div class="flex items-center justify-between flex-wrap gap-14" style="margin-bottom:14px">
        <h2 style="font-size:1.15rem">
          {{ currentTypeLabel() }}
          <span class="muted" style="font-family:var(--sans);font-size:.8rem;font-weight:400">
            &mdash; {{ total() }} record{{ total() === 1 ? '' : 's' }}
          </span>
        </h2>
        @if (type || search) {
          <a class="btn btn-ghost btn-sm" routerLink="/library">Clear filters</a>
        }
      </div>

      @if (loading()) {
        <ts-loading-state [count]="10" />
      } @else if (!items().length) {
        <ts-empty-state
          heading="No matching resources"
          body="Try a broader term, or clear the filters to browse the whole catalogue." />
      } @else {
        <div class="table-scroll">
          <table class="ts-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Author / Publisher</th>
                <th>Year</th>
                <th>Shelf</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              @for (item of items(); track item.id) {
                <tr>
                  <td>
                    <b>{{ item.title }}</b>
                    <div class="muted" style="font-size:.78rem">{{ item.description }}</div>
                  </td>
                  <td><span class="badge badge-outline">{{ item.resourceType }}</span></td>
                  <td>{{ item.authors.join(', ') || item.publisher }}</td>
                  <td>{{ item.year }}</td>
                  <td><code style="font-size:.75rem">{{ item.shelfCode }}</code></td>
                  <td class="actions">
                    @if (item.isDigital) {
                      <span class="badge badge-open">Digital</span>
                    } @else {
                      <span class="badge badge-navy">{{ item.copiesAvailable }}/{{ item.copiesTotal }}</span>
                    }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <ts-pager [page]="page" [totalPages]="totalPages()" [total]="total()" (pageChange)="onPage($event)" />
      }
    </div>

  </div>
</main>

<section class="section alt">
  <div class="container">
    <div class="sec-title">
      <div class="kicker">Using the Library</div>
      <h2>Access &amp; Rules</h2>
      <div class="rule"></div>
    </div>
    <div class="res-grid">
      <div class="res-item"><div class="n">01</div><h4>Open to All Learners</h4><p>Every enrolled student has full digital access from the first day of the session.</p></div>
      <div class="res-item"><div class="n">02</div><h4>Reading Room</h4><p>Open Monday to Saturday, 09:00\u201320:00 IST. Reference material is not issued for home use.</p></div>
      <div class="res-item"><div class="n">03</div><h4>Licensed Databases</h4><p>Commercial databases are reached through single sign-on from within the campus network.</p></div>
      <div class="res-item"><div class="n">04</div><h4>Inter-Library Requests</h4><p>Titles not held can be requested through the librarian; most arrive within ten days.</p></div>
    </div>
  </div>
</section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryPage, { className: "LibraryPage", filePath: "src/app/pages/library/library.ts", lineNumber: 32 });
})();
export {
  LibraryPage
};
//# sourceMappingURL=chunk-X366CJXM.js.map
