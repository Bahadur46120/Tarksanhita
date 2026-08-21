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
  ApiService
} from "./chunk-MBQHVFNQ.js";
import {
  DatePipe
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F5R4JB2K.js";

// src/app/pages/admin/contacts.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminContacts_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function AdminContacts_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 12);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 10);
  }
}
function AdminContacts_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 13);
  }
}
function AdminContacts_Conditional_21_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const message_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2014 ", message_r3.phone, " ");
  }
}
function AdminContacts_Conditional_21_For_1_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Handled by ", message_r3.handledBy);
  }
}
function AdminContacts_Conditional_21_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "b");
    \u0275\u0275text(2, "Internal note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, AdminContacts_Conditional_21_For_1_Conditional_18_Conditional_4_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", message_r3.responseNote, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(message_r3.handledBy ? 4 : -1);
  }
}
function AdminContacts_Conditional_21_For_1_Conditional_19_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275property("value", s_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6);
  }
}
function AdminContacts_Conditional_21_For_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 6)(2, "label");
    \u0275\u0275text(3, "New status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContacts_Conditional_21_For_1_Conditional_19_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r4.draftStatus, $event) || (ctx_r4.draftStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, AdminContacts_Conditional_21_For_1_Conditional_19_For_6_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "label");
    \u0275\u0275text(9, "Internal note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContacts_Conditional_21_For_1_Conditional_19_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r4.draftNote, $event) || (ctx_r4.draftNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 32)(12, "button", 33);
    \u0275\u0275listener("click", function AdminContacts_Conditional_21_For_1_Conditional_19_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const message_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.saveStatus(message_r3));
    });
    \u0275\u0275text(13, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 34);
    \u0275\u0275listener("click", function AdminContacts_Conditional_21_For_1_Conditional_19_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.editing.set(null));
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("for", "st-" + message_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "st-" + message_r3.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.draftStatus);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.statuses);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("for", "nt-" + message_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "nt-" + message_r3.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.draftNote);
  }
}
function AdminContacts_Conditional_21_For_1_Conditional_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function AdminContacts_Conditional_21_For_1_Conditional_20_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const message_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.remove(message_r3));
    });
    \u0275\u0275text(1, "Delete");
    \u0275\u0275elementEnd();
  }
}
function AdminContacts_Conditional_21_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 35);
    \u0275\u0275listener("click", function AdminContacts_Conditional_21_For_1_Conditional_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const message_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.startEdit(message_r3));
    });
    \u0275\u0275text(2, "Update Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 36);
    \u0275\u0275text(4, "Reply by Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35);
    \u0275\u0275listener("click", function AdminContacts_Conditional_21_For_1_Conditional_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const message_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.archive(message_r3));
    });
    \u0275\u0275text(6, "Archive");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AdminContacts_Conditional_21_For_1_Conditional_20_Conditional_7_Template, 2, 0, "button", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "mailto:" + message_r3.email + "?subject=Re: " + message_r3.subject, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r4.auth.isAdmin() ? 7 : -1);
  }
}
function AdminContacts_Conditional_21_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div")(3, "h3", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, AdminContacts_Conditional_21_For_1_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "span", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 23);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "p", 24);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, AdminContacts_Conditional_21_For_1_Conditional_18_Template, 5, 2, "div", 25);
    \u0275\u0275conditionalCreate(19, AdminContacts_Conditional_21_For_1_Conditional_19_Template, 16, 6)(20, AdminContacts_Conditional_21_For_1_Conditional_20_Template, 8, 2, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-left", "4px solid " + ctx_r4.colourFor(message_r3.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(message_r3.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", message_r3.name, " \u2014 ", message_r3.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(message_r3.phone ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r4.colourFor(message_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(message_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r3.department);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 14, message_r3.createdAt, "dd MMM y, HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r3.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(message_r3.responseNote ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.editing() === message_r3.id ? 19 : 20);
  }
}
function AdminContacts_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275repeaterCreate(0, AdminContacts_Conditional_21_For_1_Template, 21, 17, "div", 14, _forTrack0);
    \u0275\u0275elementStart(2, "ts-pager", 15);
    \u0275\u0275listener("pageChange", function AdminContacts_Conditional_21_Template_ts_pager_pageChange_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r4.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r4.page)("totalPages", ctx_r4.totalPages())("total", ctx_r4.total());
  }
}
var STATUSES = ["New", "InProgress", "Resolved", "Spam"];
var AdminContacts = class _AdminContacts {
  api = inject(ApiService);
  snack = inject(MatSnackBar);
  auth = inject(AuthService);
  statuses = STATUSES;
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  editing = signal(null, ...ngDevMode ? [{ debugName: "editing" }] : []);
  search = "";
  status = "";
  page = 1;
  draftStatus = "New";
  draftNote = "";
  items = computed(() => this.result()?.items ?? [], ...ngDevMode ? [{ debugName: "items" }] : []);
  total = computed(() => this.result()?.totalCount ?? 0, ...ngDevMode ? [{ debugName: "total" }] : []);
  totalPages = computed(() => this.result()?.totalPages ?? 0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.get("contacts", {
      page: this.page,
      pageSize: 10,
      search: this.search || void 0,
      category: this.status || void 0
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
  startEdit(message) {
    this.editing.set(message.id ?? null);
    this.draftStatus = message.status;
    this.draftNote = message.responseNote ?? "";
  }
  saveStatus(message) {
    this.api.patch(`contacts/${message.id}/status`, {
      status: this.draftStatus,
      responseNote: this.draftNote || null
    }).subscribe({
      next: (res) => {
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
        this.editing.set(null);
        this.load();
      }
    });
  }
  archive(message) {
    this.api.patch(`contacts/${message.id}/deactivate`).subscribe({
      next: (res) => {
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
        this.load();
      }
    });
  }
  remove(message) {
    if (!confirm(`Delete the enquiry from ${message.name} permanently?`))
      return;
    this.api.delete(`contacts/${message.id}`).subscribe({
      next: (res) => {
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
        this.load();
      }
    });
  }
  colourFor(status) {
    switch (status) {
      case "New":
        return "#b3261e";
      case "InProgress":
        return "#a8861c";
      case "Resolved":
        return "#1d6f42";
      default:
        return "#465063";
    }
  }
  static \u0275fac = function AdminContacts_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminContacts)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminContacts, selectors: [["ts-admin-contacts"]], decls: 22, vars: 3, consts: [[2, "font-size", "1.3rem", "margin-bottom", "4px"], [1, "muted", 2, "font-size", ".84rem", "margin-bottom", "18px"], [1, "list-toolbar"], [1, "field", "grow"], ["for", "c-search"], ["id", "c-search", "type", "search", "placeholder", "Name, email or subject\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "field"], ["for", "c-status"], ["id", "c-status", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], ["type", "button", 1, "btn", "btn-navy", 2, "align-self", "flex-end", 3, "click"], [3, "count"], ["heading", "No enquiries", "body", "Messages sent through the contact form will appear here."], [1, "card", 3, "border-left"], [3, "pageChange", "page", "totalPages", "total"], [1, "card"], [1, "flex", "items-center", "justify-between", "flex-wrap", "gap-14"], [2, "border", "0", "padding", "0", "margin", "0", "display", "block", "font-size", "1rem"], [1, "muted", 2, "font-size", ".8rem"], [1, "text-end"], [1, "badge", 2, "color", "#fff"], [1, "badge", "badge-outline", 2, "margin-left", "5px"], [1, "muted", 2, "font-size", ".74rem", "margin-top", "4px"], [2, "margin", "12px 0", "font-size", ".88rem", "white-space", "pre-wrap"], [1, "hint-box", 2, "margin-bottom", "10px"], [1, "flex", "flex-wrap", "gap-8"], [1, "muted", 2, "margin-top", "4px"], [1, "form-grid"], [3, "ngModelChange", "id", "ngModel"], [1, "field", "full"], ["rows", "3", "placeholder", "Record what was done, for the audit trail.", 3, "ngModelChange", "id", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-gold", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "btn", "btn-ghost", "btn-sm", 3, "href"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#b3261e", "border-color", "#b3261e"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 2, "color", "#b3261e", "border-color", "#b3261e", 3, "click"]], template: function AdminContacts_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "Enquiries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "p", 1);
      \u0275\u0275text(3, " Messages submitted through the public contact form. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
      \u0275\u0275text(7, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function AdminContacts_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function AdminContacts_Template_input_keyup_enter_8_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "label", 7);
      \u0275\u0275text(11, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AdminContacts_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdminContacts_Template_select_change_12_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementStart(13, "option", 9);
      \u0275\u0275text(14, "All statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(15, AdminContacts_For_16_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275listener("click", function AdminContacts_Template_button_click_17_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275text(18, "Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(19, AdminContacts_Conditional_19_Template, 1, 1, "ts-loading-state", 12)(20, AdminContacts_Conditional_20_Template, 1, 0, "ts-empty-state", 13)(21, AdminContacts_Conditional_21_Template, 3, 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.statuses);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 19 : !ctx.items().length ? 20 : 21);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Pager, LoadingState, EmptyState, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminContacts, [{
    type: Component,
    args: [{
      selector: "ts-admin-contacts",
      standalone: true,
      imports: [DatePipe, FormsModule, Pager, LoadingState, EmptyState],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <h2 style="font-size:1.3rem;margin-bottom:4px">Enquiries</h2>
    <p class="muted" style="font-size:.84rem;margin-bottom:18px">
      Messages submitted through the public contact form.
    </p>

    <div class="list-toolbar">
      <div class="field grow">
        <label for="c-search">Search</label>
        <input id="c-search" type="search" placeholder="Name, email or subject\u2026"
               [(ngModel)]="search" (keyup.enter)="onSearch()" />
      </div>
      <div class="field">
        <label for="c-status">Status</label>
        <select id="c-status" [(ngModel)]="status" (change)="onSearch()">
          <option value="">All statuses</option>
          @for (s of statuses; track s) { <option [value]="s">{{ s }}</option> }
        </select>
      </div>
      <button type="button" class="btn btn-navy" (click)="onSearch()" style="align-self:flex-end">Search</button>
    </div>

    @if (loading()) {
      <ts-loading-state [count]="10" />
    } @else if (!items().length) {
      <ts-empty-state heading="No enquiries" body="Messages sent through the contact form will appear here." />
    } @else {
      @for (message of items(); track message.id) {
        <div class="card" [style.border-left]="'4px solid ' + colourFor(message.status)">
          <div class="flex items-center justify-between flex-wrap gap-14">
            <div>
              <h3 style="border:0;padding:0;margin:0;display:block;font-size:1rem">{{ message.subject }}</h3>
              <div class="muted" style="font-size:.8rem">
                {{ message.name }} &mdash; {{ message.email }}
                @if (message.phone) { &mdash; {{ message.phone }} }
              </div>
            </div>
            <div class="text-end">
              <span class="badge" [style.background]="colourFor(message.status)" style="color:#fff">{{ message.status }}</span>
              <span class="badge badge-outline" style="margin-left:5px">{{ message.department }}</span>
              <div class="muted" style="font-size:.74rem;margin-top:4px">{{ message.createdAt | date: 'dd MMM y, HH:mm' }}</div>
            </div>
          </div>

          <p style="margin:12px 0;font-size:.88rem;white-space:pre-wrap">{{ message.message }}</p>

          @if (message.responseNote) {
            <div class="hint-box" style="margin-bottom:10px">
              <b>Internal note</b>
              {{ message.responseNote }}
              @if (message.handledBy) { <div class="muted" style="margin-top:4px">Handled by {{ message.handledBy }}</div> }
            </div>
          }

          @if (editing() === message.id) {
            <div class="form-grid">
              <div class="field">
                <label [attr.for]="'st-' + message.id">New status</label>
                <select [id]="'st-' + message.id" [(ngModel)]="draftStatus">
                  @for (s of statuses; track s) { <option [value]="s">{{ s }}</option> }
                </select>
              </div>
              <div class="field full">
                <label [attr.for]="'nt-' + message.id">Internal note</label>
                <textarea [id]="'nt-' + message.id" rows="3" [(ngModel)]="draftNote"
                          placeholder="Record what was done, for the audit trail."></textarea>
              </div>
            </div>
            <div class="form-actions">
              <button type="button" class="btn btn-gold" (click)="saveStatus(message)">Save</button>
              <button type="button" class="btn btn-ghost" (click)="editing.set(null)">Cancel</button>
            </div>
          } @else {
            <div class="flex flex-wrap gap-8">
              <button type="button" class="btn btn-ghost btn-sm" (click)="startEdit(message)">Update Status</button>
              <a class="btn btn-ghost btn-sm" [href]="'mailto:' + message.email + '?subject=Re: ' + message.subject">Reply by Email</a>
              <button type="button" class="btn btn-ghost btn-sm" (click)="archive(message)">Archive</button>
              @if (auth.isAdmin()) {
                <button type="button" class="btn btn-ghost btn-sm"
                        style="color:#b3261e;border-color:#b3261e"
                        (click)="remove(message)">Delete</button>
              }
            </div>
          }
        </div>
      }

      <ts-pager [page]="page" [totalPages]="totalPages()" [total]="total()" (pageChange)="onPage($event)" />
    }
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminContacts, { className: "AdminContacts", filePath: "src/app/pages/admin/contacts.ts", lineNumber: 108 });
})();
export {
  AdminContacts
};
//# sourceMappingURL=chunk-7HP62BBO.js.map
