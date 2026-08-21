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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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

// src/app/pages/admin/users.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminUsers_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("value", r_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1);
  }
}
function AdminUsers_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 12);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 10);
  }
}
function AdminUsers_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 13);
  }
}
function AdminUsers_Conditional_21_For_20_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 27)(1, "input", 28);
    \u0275\u0275listener("change", function AdminUsers_Conditional_21_For_20_Conditional_9_For_2_Template_input_change_1_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.toggleRole(r_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r4.draftRoles().includes(r_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4, " ");
  }
}
function AdminUsers_Conditional_21_For_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, AdminUsers_Conditional_21_For_20_Conditional_9_For_2_Template, 3, 2, "label", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.allRoles);
  }
}
function AdminUsers_Conditional_21_For_20_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6);
  }
}
function AdminUsers_Conditional_21_For_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AdminUsers_Conditional_21_For_20_Conditional_10_For_1_Template, 2, 1, "span", 29, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(user_r7.roles);
  }
}
function AdminUsers_Conditional_21_For_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function AdminUsers_Conditional_21_For_20_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Disabled");
    \u0275\u0275elementEnd();
  }
}
function AdminUsers_Conditional_21_For_20_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function AdminUsers_Conditional_21_For_20_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const user_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.saveRoles(user_r7));
    });
    \u0275\u0275text(1, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function AdminUsers_Conditional_21_For_20_Conditional_18_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.editing.set(null));
    });
    \u0275\u0275text(3, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function AdminUsers_Conditional_21_For_20_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function AdminUsers_Conditional_21_For_20_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.startEdit(user_r7));
    });
    \u0275\u0275text(1, "Edit Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 32);
    \u0275\u0275listener("click", function AdminUsers_Conditional_21_For_20_Conditional_19_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleActive(user_r7));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-navy", user_r7.isActive)("btn-gold", !user_r7.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r7.isActive ? "Disable" : "Enable", " ");
  }
}
function AdminUsers_Conditional_21_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, AdminUsers_Conditional_21_For_20_Conditional_9_Template, 3, 0, "div", 22)(10, AdminUsers_Conditional_21_For_20_Conditional_10_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, AdminUsers_Conditional_21_For_20_Conditional_12_Template, 2, 0, "span", 23)(13, AdminUsers_Conditional_21_For_20_Conditional_13_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 26);
    \u0275\u0275conditionalCreate(18, AdminUsers_Conditional_21_For_20_Conditional_18_Template, 4, 0)(19, AdminUsers_Conditional_21_For_20_Conditional_19_Template, 4, 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("opacity", user_r7.isActive ? 1 : 0.55);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.enrolmentNo || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.editing() === user_r7.id ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(user_r7.isActive ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.lastLoginAt ? \u0275\u0275pipeBind2(16, 9, user_r7.lastLoginAt, "dd MMM y") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r4.editing() === user_r7.id ? 18 : 19);
  }
}
function AdminUsers_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "table", 15)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 16);
    \u0275\u0275text(9, "Enrolment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 17);
    \u0275\u0275text(11, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 18);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 16);
    \u0275\u0275text(15, "Last sign-in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 19);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, AdminUsers_Conditional_21_For_20_Template, 20, 12, "tr", 20, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "ts-pager", 21);
    \u0275\u0275listener("pageChange", function AdminUsers_Conditional_21_Template_ts_pager_pageChange_21_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r4.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r4.page)("totalPages", ctx_r4.totalPages())("total", ctx_r4.total());
  }
}
var ALL_ROLES = ["Admin", "Editor", "Faculty", "Student", "User"];
var AdminUsers = class _AdminUsers {
  api = inject(ApiService);
  snack = inject(MatSnackBar);
  auth = inject(AuthService);
  allRoles = ALL_ROLES;
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  editing = signal(null, ...ngDevMode ? [{ debugName: "editing" }] : []);
  draftRoles = signal([], ...ngDevMode ? [{ debugName: "draftRoles" }] : []);
  search = "";
  role = "";
  page = 1;
  items = computed(() => this.result()?.items ?? [], ...ngDevMode ? [{ debugName: "items" }] : []);
  total = computed(() => this.result()?.totalCount ?? 0, ...ngDevMode ? [{ debugName: "total" }] : []);
  totalPages = computed(() => this.result()?.totalPages ?? 0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.get("admin/users", {
      page: this.page,
      pageSize: 20,
      search: this.search || void 0,
      category: this.role || void 0
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
  startEdit(user) {
    this.editing.set(user.id);
    this.draftRoles.set([...user.roles]);
  }
  toggleRole(role) {
    const current = this.draftRoles();
    this.draftRoles.set(current.includes(role) ? current.filter((r) => r !== role) : [...current, role]);
  }
  saveRoles(user) {
    const roles = this.draftRoles();
    if (!roles.length) {
      this.snack.open("A user must hold at least one role.", "Dismiss");
      return;
    }
    this.api.put(`admin/users/${user.id}/roles`, { roles }).subscribe({
      next: (res) => {
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
        this.editing.set(null);
        this.load();
      }
    });
  }
  toggleActive(user) {
    const action = user.isActive ? "deactivate" : "activate";
    this.api.patch(`admin/users/${user.id}/${action}`).subscribe({
      next: (res) => {
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
        this.load();
      }
    });
  }
  static \u0275fac = function AdminUsers_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUsers)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsers, selectors: [["ts-admin-users"]], decls: 22, vars: 3, consts: [[2, "font-size", "1.3rem", "margin-bottom", "4px"], [1, "muted", 2, "font-size", ".84rem", "margin-bottom", "18px"], [1, "list-toolbar"], [1, "field", "grow"], ["for", "u-search"], ["id", "u-search", "type", "search", "placeholder", "Name, email or enrolment number\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "field"], ["for", "u-role"], ["id", "u-role", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], ["type", "button", 1, "btn", "btn-navy", 2, "align-self", "flex-end", 3, "click"], [3, "count"], ["heading", "No users found", "body", "Nothing matched the current filters."], [1, "table-scroll"], [1, "ts-table"], [2, "width", "130px"], [2, "width", "250px"], [2, "width", "110px"], [2, "width", "230px", "text-align", "right"], [3, "opacity"], [3, "pageChange", "page", "totalPages", "total"], [1, "flex", "flex-wrap", "gap-8"], [1, "badge", "badge-open"], [1, "badge", "badge-navy"], [1, "muted"], [1, "actions"], [2, "font-size", ".76rem", "display", "flex", "align-items", "center", "gap", "4px", "cursor", "pointer"], ["type", "checkbox", 3, "change", "checked"], [1, "badge", "badge-gold", 2, "margin-right", "4px"], ["type", "button", 1, "btn", "btn-gold", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-sm", 3, "click"]], template: function AdminUsers_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "p", 1);
      \u0275\u0275text(3, " Assign roles and control account access. Only administrators can change roles. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
      \u0275\u0275text(7, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function AdminUsers_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function AdminUsers_Template_input_keyup_enter_8_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "label", 7);
      \u0275\u0275text(11, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AdminUsers_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.role, $event) || (ctx.role = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdminUsers_Template_select_change_12_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementStart(13, "option", 9);
      \u0275\u0275text(14, "All roles");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(15, AdminUsers_For_16_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275listener("click", function AdminUsers_Template_button_click_17_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275text(18, "Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(19, AdminUsers_Conditional_19_Template, 1, 1, "ts-loading-state", 12)(20, AdminUsers_Conditional_20_Template, 1, 0, "ts-empty-state", 13)(21, AdminUsers_Conditional_21_Template, 22, 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.role);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.allRoles);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 19 : !ctx.items().length ? 20 : 21);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Pager, LoadingState, EmptyState, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminUsers, [{
    type: Component,
    args: [{
      selector: "ts-admin-users",
      standalone: true,
      imports: [DatePipe, FormsModule, Pager, LoadingState, EmptyState],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <h2 style="font-size:1.3rem;margin-bottom:4px">Users</h2>
    <p class="muted" style="font-size:.84rem;margin-bottom:18px">
      Assign roles and control account access. Only administrators can change roles.
    </p>

    <div class="list-toolbar">
      <div class="field grow">
        <label for="u-search">Search</label>
        <input id="u-search" type="search" placeholder="Name, email or enrolment number\u2026"
               [(ngModel)]="search" (keyup.enter)="onSearch()" />
      </div>
      <div class="field">
        <label for="u-role">Role</label>
        <select id="u-role" [(ngModel)]="role" (change)="onSearch()">
          <option value="">All roles</option>
          @for (r of allRoles; track r) { <option [value]="r">{{ r }}</option> }
        </select>
      </div>
      <button type="button" class="btn btn-navy" (click)="onSearch()" style="align-self:flex-end">Search</button>
    </div>

    @if (loading()) {
      <ts-loading-state [count]="10" />
    } @else if (!items().length) {
      <ts-empty-state heading="No users found" body="Nothing matched the current filters." />
    } @else {
      <div class="table-scroll">
        <table class="ts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th style="width:130px">Enrolment</th>
              <th style="width:250px">Roles</th>
              <th style="width:110px">Status</th>
              <th style="width:130px">Last sign-in</th>
              <th style="width:230px;text-align:right">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (user of items(); track user.id) {
              <tr [style.opacity]="user.isActive ? 1 : 0.55">
                <td><b>{{ user.fullName }}</b></td>
                <td>{{ user.email }}</td>
                <td>{{ user.enrolmentNo || '\u2014' }}</td>
                <td>
                  @if (editing() === user.id) {
                    <div class="flex flex-wrap gap-8">
                      @for (r of allRoles; track r) {
                        <label style="font-size:.76rem;display:flex;align-items:center;gap:4px;cursor:pointer">
                          <input type="checkbox"
                                 [checked]="draftRoles().includes(r)"
                                 (change)="toggleRole(r)" />
                          {{ r }}
                        </label>
                      }
                    </div>
                  } @else {
                    @for (r of user.roles; track r) {
                      <span class="badge badge-gold" style="margin-right:4px">{{ r }}</span>
                    }
                  }
                </td>
                <td>
                  @if (user.isActive) {
                    <span class="badge badge-open">Active</span>
                  } @else {
                    <span class="badge badge-navy">Disabled</span>
                  }
                </td>
                <td class="muted">{{ user.lastLoginAt ? (user.lastLoginAt | date: 'dd MMM y') : '\u2014' }}</td>
                <td class="actions">
                  @if (editing() === user.id) {
                    <button type="button" class="btn btn-gold btn-sm" (click)="saveRoles(user)">Save</button>
                    <button type="button" class="btn btn-ghost btn-sm" (click)="editing.set(null)">Cancel</button>
                  } @else {
                    <button type="button" class="btn btn-ghost btn-sm" (click)="startEdit(user)">Edit Roles</button>
                    <button type="button" class="btn btn-sm"
                            [class.btn-navy]="user.isActive"
                            [class.btn-gold]="!user.isActive"
                            (click)="toggleActive(user)">
                      {{ user.isActive ? 'Disable' : 'Enable' }}
                    </button>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <ts-pager [page]="page" [totalPages]="totalPages()" [total]="total()" (pageChange)="onPage($event)" />
    }
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsers, { className: "AdminUsers", filePath: "src/app/pages/admin/users.ts", lineNumber: 113 });
})();
export {
  AdminUsers
};
//# sourceMappingURL=chunk-7IDWAJZ7.js.map
