import {
  findResource
} from "./chunk-YU4OLOJI.js";
import {
  MatSnackBar
} from "./chunk-UPWUZDK7.js";
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
  AuthService
} from "./chunk-FTSBTB32.js";
import {
  EmptyState,
  LoadingState,
  Pager
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F5R4JB2K.js";

// src/app/pages/admin/content-list.ts
var _c0 = (a0) => ["/admin", a0, "new"];
var _c1 = (a0, a1) => ["/admin", a0, a1, "edit"];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.id;
function AdminContentList_Conditional_0_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4.label);
  }
}
function AdminContentList_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 12);
    \u0275\u0275text(2, "Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentList_Conditional_0_Conditional_13_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.category, $event) || (ctx_r1.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AdminContentList_Conditional_0_Conditional_13_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275repeaterCreate(4, AdminContentList_Conditional_0_Conditional_13_For_5_Template, 2, 2, "option", 14, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const def_r5 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.category);
    \u0275\u0275advance();
    \u0275\u0275repeater(def_r5.filters);
  }
}
function AdminContentList_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 10);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 10);
  }
}
function AdminContentList_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 11);
  }
  if (rf & 2) {
    const def_r5 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("body", ctx_r1.search || ctx_r1.category ? "Nothing matched the current filters." : "Create the first " + def_r5.singular.toLowerCase() + " using the button above.");
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r7 = ctx.$implicit;
    \u0275\u0275styleProp("width", column_r7.width);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(column_r7.label);
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const column_r9 = \u0275\u0275nextContext().$implicit;
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.cell(item_r10, column_r9.name), "dd MMM y"), " ");
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r9 = \u0275\u0275nextContext().$implicit;
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cell(item_r10, column_r9.name));
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Yes");
    \u0275\u0275elementEnd();
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "No");
    \u0275\u0275elementEnd();
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_3_Conditional_0_Template, 2, 0, "span", 23)(1, AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_3_Conditional_1_Template, 2, 0, "span", 22);
  }
  if (rf & 2) {
    const column_r9 = \u0275\u0275nextContext().$implicit;
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.cellBool(item_r10, column_r9.name) ? 0 : 1);
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const column_r9 = \u0275\u0275nextContext().$implicit;
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cell(item_r10, column_r9.name), " ");
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_1_Template, 2, 4)(2, AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_2_Template, 2, 1, "span", 30)(3, AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_3_Template, 2, 1)(4, AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Case_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_23_0;
    const column_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_23_0 = column_r9.type) === "date" ? 1 : tmp_23_0 === "badge" ? 2 : tmp_23_0 === "boolean" ? 3 : 4);
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Archived");
    \u0275\u0275elementEnd();
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Live");
    \u0275\u0275elementEnd();
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Draft");
    \u0275\u0275elementEnd();
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function AdminContentList_Conditional_0_Conditional_18_For_12_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const item_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.remove(item_r10));
    });
    \u0275\u0275text(1, "Delete");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.working() === item_r10.id);
  }
}
function AdminContentList_Conditional_0_Conditional_18_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, AdminContentList_Conditional_0_Conditional_18_For_12_For_2_Template, 5, 1, "td", null, _forTrack1);
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, AdminContentList_Conditional_0_Conditional_18_For_12_Conditional_4_Template, 2, 0, "span", 22)(5, AdminContentList_Conditional_0_Conditional_18_For_12_Conditional_5_Template, 2, 0, "span", 23)(6, AdminContentList_Conditional_0_Conditional_18_For_12_Conditional_6_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 25)(8, "a", 26);
    \u0275\u0275text(9, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 27);
    \u0275\u0275listener("click", function AdminContentList_Conditional_0_Conditional_18_For_12_Template_button_click_10_listener() {
      const item_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePublish(item_r10));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 28);
    \u0275\u0275listener("click", function AdminContentList_Conditional_0_Conditional_18_For_12_Template_button_click_12_listener() {
      const item_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleActive(item_r10));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, AdminContentList_Conditional_0_Conditional_18_For_12_Conditional_14_Template, 2, 1, "button", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const def_r5 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("opacity", item_r10.isActive ? 1 : 0.55);
    \u0275\u0275advance();
    \u0275\u0275repeater(def_r5.columns);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!item_r10.isActive ? 4 : item_r10.isPublished ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(13, _c1, def_r5.key, item_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-navy", item_r10.isPublished)("btn-gold", !item_r10.isPublished);
    \u0275\u0275property("disabled", ctx_r1.working() === item_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.isPublished ? "Unpublish" : "Publish", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.working() === item_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.isActive ? "Archive" : "Restore", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.auth.isAdmin() ? 14 : -1);
  }
}
function AdminContentList_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 16)(2, "thead")(3, "tr");
    \u0275\u0275repeaterCreate(4, AdminContentList_Conditional_0_Conditional_18_For_5_Template, 2, 3, "th", 17, _forTrack1);
    \u0275\u0275elementStart(6, "th", 18);
    \u0275\u0275text(7, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 19);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, AdminContentList_Conditional_0_Conditional_18_For_12_Template, 15, 16, "tr", 20, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ts-pager", 21);
    \u0275\u0275listener("pageChange", function AdminContentList_Conditional_0_Conditional_18_Template_ts_pager_pageChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const def_r5 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(def_r5.columns);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r1.page)("totalPages", ctx_r1.totalPages())("total", ctx_r1.total());
  }
}
function AdminContentList_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label", 6);
    \u0275\u0275text(11, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentList_Conditional_0_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminContentList_Conditional_0_Template_input_keyup_enter_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, AdminContentList_Conditional_0_Conditional_13_Template, 6, 1, "div", 8);
    \u0275\u0275elementStart(14, "button", 9);
    \u0275\u0275listener("click", function AdminContentList_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275text(15, "Search");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, AdminContentList_Conditional_0_Conditional_16_Template, 1, 1, "ts-loading-state", 10)(17, AdminContentList_Conditional_0_Conditional_17_Template, 1, 1, "ts-empty-state", 11)(18, AdminContentList_Conditional_0_Conditional_18_Template, 14, 3);
  }
  if (rf & 2) {
    const def_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(def_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(def_r5.description);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, def_r5.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+ New ", def_r5.singular);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.search);
    \u0275\u0275advance();
    \u0275\u0275conditional((def_r5.filters == null ? null : def_r5.filters.length) ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 16 : !ctx_r1.items().length ? 17 : 18);
  }
}
var AdminContentList = class _AdminContentList {
  route = inject(ActivatedRoute);
  router = inject(Router);
  content = inject(ContentService);
  snack = inject(MatSnackBar);
  auth = inject(AuthService);
  resource = signal(null, ...ngDevMode ? [{ debugName: "resource" }] : []);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  working = signal(null, ...ngDevMode ? [{ debugName: "working" }] : []);
  search = "";
  category = "";
  page = 1;
  items = computed(() => this.result()?.items ?? [], ...ngDevMode ? [{ debugName: "items" }] : []);
  total = computed(() => this.result()?.totalCount ?? 0, ...ngDevMode ? [{ debugName: "total" }] : []);
  totalPages = computed(() => this.result()?.totalPages ?? 0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const key = params.get("resource") ?? "";
      const def = findResource(key);
      if (!def) {
        void this.router.navigateByUrl("/admin");
        return;
      }
      this.resource.set(def);
      this.search = "";
      this.category = "";
      this.page = 1;
      this.load();
    });
  }
  load() {
    const def = this.resource();
    if (!def)
      return;
    this.loading.set(true);
    this.content.for(def.key).list({
      page: this.page,
      pageSize: 20,
      search: this.search || void 0,
      category: this.category || void 0,
      // The admin grid must show drafts and archived records too.
      includeUnpublished: true
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
  onSearch() {
    this.page = 1;
    this.load();
  }
  onPage(p) {
    this.page = p;
    this.load();
  }
  // ------------------------------------------------------------ state changes
  togglePublish(item) {
    const def = this.resource();
    if (!def || !item.id)
      return;
    const client = this.content.for(def.key);
    const request = item.isPublished ? client.unpublish(item.id) : client.publish(item.id);
    this.working.set(item.id);
    request.subscribe({
      next: (res) => {
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
        this.working.set(null);
        this.load();
      },
      error: () => this.working.set(null)
    });
  }
  toggleActive(item) {
    const def = this.resource();
    if (!def || !item.id)
      return;
    const client = this.content.for(def.key);
    const request = item.isActive ? client.deactivate(item.id) : client.activate(item.id);
    this.working.set(item.id);
    request.subscribe({
      next: (res) => {
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
        this.working.set(null);
        this.load();
      },
      error: () => this.working.set(null)
    });
  }
  remove(item) {
    const def = this.resource();
    if (!def || !item.id)
      return;
    const ok = confirm(`Delete "${item.title}" permanently?

This cannot be undone. Use Archive instead if you may need it later.`);
    if (!ok)
      return;
    this.working.set(item.id);
    this.content.for(def.key).remove(item.id).subscribe({
      next: (res) => {
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
        this.working.set(null);
        this.load();
      },
      error: () => this.working.set(null)
    });
  }
  // ------------------------------------------------------------ cell rendering
  cell(item, name) {
    const value = item[name];
    if (value === null || value === void 0 || value === "")
      return "\u2014";
    return String(value);
  }
  cellBool(item, name) {
    return Boolean(item[name]);
  }
  static \u0275fac = function AdminContentList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminContentList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminContentList, selectors: [["ts-admin-content-list"]], decls: 1, vars: 1, consts: [[1, "flex", "items-center", "justify-between", "flex-wrap", "gap-14", 2, "margin-bottom", "6px"], [2, "font-size", "1.3rem"], [1, "muted", 2, "font-size", ".84rem", "margin", "2px 0 0"], [1, "btn", "btn-gold", 3, "routerLink"], [1, "list-toolbar"], [1, "field", "grow"], ["for", "admin-search"], ["id", "admin-search", "type", "search", "name", "search", "placeholder", "Search title or summary\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "field"], ["type", "button", 1, "btn", "btn-navy", 2, "align-self", "flex-end", 3, "click"], [3, "count"], ["heading", "No records", 3, "body"], ["for", "admin-filter"], ["id", "admin-filter", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "table-scroll"], [1, "ts-table"], [3, "width"], [2, "width", "110px"], [2, "width", "300px", "text-align", "right"], [3, "opacity"], [3, "pageChange", "page", "totalPages", "total"], [1, "badge", "badge-navy"], [1, "badge", "badge-open"], [1, "badge", "badge-gold"], [1, "actions"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#b3261e", "border-color", "#b3261e", 3, "disabled"], [1, "badge", "badge-outline"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#b3261e", "border-color", "#b3261e", 3, "click", "disabled"]], template: function AdminContentList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AdminContentList_Conditional_0_Template, 19, 9);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.resource()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Pager, LoadingState, EmptyState, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminContentList, [{
    type: Component,
    args: [{ selector: "ts-admin-content-list", standalone: true, imports: [RouterLink, DatePipe, FormsModule, Pager, LoadingState, EmptyState], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (resource(); as def) {

  <div class="flex items-center justify-between flex-wrap gap-14" style="margin-bottom:6px">
    <div>
      <h2 style="font-size:1.3rem">{{ def.label }}</h2>
      <p class="muted" style="font-size:.84rem;margin:2px 0 0">{{ def.description }}</p>
    </div>
    <a class="btn btn-gold" [routerLink]="['/admin', def.key, 'new']">+ New {{ def.singular }}</a>
  </div>

  <div class="list-toolbar">
    <div class="field grow">
      <label for="admin-search">Search</label>
      <input id="admin-search"
             type="search"
             name="search"
             placeholder="Search title or summary\u2026"
             [(ngModel)]="search"
             (keyup.enter)="onSearch()" />
    </div>

    @if (def.filters?.length) {
      <div class="field">
        <label for="admin-filter">Filter</label>
        <select id="admin-filter" [(ngModel)]="category" (change)="onSearch()">
          @for (option of def.filters; track option.value) {
            <option [value]="option.value">{{ option.label }}</option>
          }
        </select>
      </div>
    }

    <button type="button" class="btn btn-navy" (click)="onSearch()" style="align-self:flex-end">Search</button>
  </div>

  @if (loading()) {
    <ts-loading-state [count]="10" />
  } @else if (!items().length) {
    <ts-empty-state
      heading="No records"
      [body]="search || category ? 'Nothing matched the current filters.' : 'Create the first ' + def.singular.toLowerCase() + ' using the button above.'" />
  } @else {

    <div class="table-scroll">
      <table class="ts-table">
        <thead>
          <tr>
            @for (column of def.columns; track column.name) {
              <th [style.width]="column.width">{{ column.label }}</th>
            }
            <th style="width:110px">State</th>
            <th style="width:300px;text-align:right">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (item of items(); track item.id) {
            <tr [style.opacity]="item.isActive ? 1 : 0.55">
              @for (column of def.columns; track column.name) {
                <td>
                  @switch (column.type) {
                    @case ('date') { {{ cell(item, column.name) | date: 'dd MMM y' }} }
                    @case ('badge') { <span class="badge badge-outline">{{ cell(item, column.name) }}</span> }
                    @case ('boolean') {
                      @if (cellBool(item, column.name)) {
                        <span class="badge badge-open">Yes</span>
                      } @else {
                        <span class="badge badge-navy">No</span>
                      }
                    }
                    @default { {{ cell(item, column.name) }} }
                  }
                </td>
              }

              <td>
                @if (!item.isActive) {
                  <span class="badge badge-navy">Archived</span>
                } @else if (item.isPublished) {
                  <span class="badge badge-open">Live</span>
                } @else {
                  <span class="badge badge-gold">Draft</span>
                }
              </td>

              <td class="actions">
                <a class="btn btn-ghost btn-sm" [routerLink]="['/admin', def.key, item.id, 'edit']">Edit</a>

                <button type="button"
                        class="btn btn-sm"
                        [class.btn-navy]="item.isPublished"
                        [class.btn-gold]="!item.isPublished"
                        [disabled]="working() === item.id"
                        (click)="togglePublish(item)">
                  {{ item.isPublished ? 'Unpublish' : 'Publish' }}
                </button>

                <button type="button"
                        class="btn btn-ghost btn-sm"
                        [disabled]="working() === item.id"
                        (click)="toggleActive(item)">
                  {{ item.isActive ? 'Archive' : 'Restore' }}
                </button>

                @if (auth.isAdmin()) {
                  <button type="button"
                          class="btn btn-ghost btn-sm"
                          style="color:#b3261e;border-color:#b3261e"
                          [disabled]="working() === item.id"
                          (click)="remove(item)">Delete</button>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <ts-pager [page]="page" [totalPages]="totalPages()" [total]="total()" (pageChange)="onPage($event)" />
  }

}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminContentList, { className: "AdminContentList", filePath: "src/app/pages/admin/content-list.ts", lineNumber: 24 });
})();
export {
  AdminContentList
};
//# sourceMappingURL=chunk-6NQNJ4GR.js.map
