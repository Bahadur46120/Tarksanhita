import {
  RESOURCES
} from "./chunk-YU4OLOJI.js";
import {
  MatSnackBar
} from "./chunk-UPWUZDK7.js";
import {
  AuthService
} from "./chunk-FTSBTB32.js";
import {
  ApiService
} from "./chunk-MBQHVFNQ.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F5R4JB2K.js";

// src/app/pages/admin/admin-layout.ts
var _c0 = () => ({ exact: true });
var _c1 = (a0) => ["/admin", a0];
var _forTrack0 = ($index, $item) => $item.key;
function AdminLayout_For_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.countFor(resource_r1.key));
  }
}
function AdminLayout_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AdminLayout_For_17_Conditional_2_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c1, resource_r1.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", resource_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.countFor(resource_r1.key) !== null ? 2 : -1);
  }
}
function AdminLayout_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.users);
  }
}
function AdminLayout_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1, " Users ");
    \u0275\u0275conditionalCreate(2, AdminLayout_Conditional_20_Conditional_2_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.stats()) ? 2 : -1, tmp_1_0);
  }
}
function AdminLayout_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.newContacts);
  }
}
function AdminLayout_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminLayout_Conditional_23_Conditional_0_Template, 2, 1, "span", 18);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.newContacts > 0 ? 0 : -1);
  }
}
var AdminLayout = class _AdminLayout {
  api = inject(ApiService);
  auth = inject(AuthService);
  snack = inject(MatSnackBar);
  resources = RESOURCES;
  stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : []);
  ngOnInit() {
    this.api.get("admin/dashboard").subscribe({
      next: (s) => this.stats.set(s),
      error: () => this.stats.set(null)
    });
  }
  /** Maps a resource key onto the matching dashboard counter. */
  countFor(key) {
    const s = this.stats();
    if (!s)
      return null;
    const map = {
      notices: s.notices,
      news: s.news,
      events: s.events,
      debates: s.debates,
      articles: s.articles,
      research: s.researchPapers,
      topics: s.legalTopics,
      library: s.libraryResources,
      profiles: s.profiles
    };
    return map[key] ?? null;
  }
  signOut() {
    this.snack.open("You have been signed out.", "Close", { duration: 4e3, panelClass: ["ts-snack-ok"] });
    this.auth.logout("/");
  }
  static \u0275fac = function AdminLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayout, selectors: [["ts-admin-layout"]], decls: 42, vars: 6, consts: [[1, "admin-shell"], [1, "admin-side"], ["routerLink", "/admin", 1, "brand"], ["src", "assets/brand/tarksanhita-logo.jpeg", "alt", "Tarksanhita emblem"], [1, "links"], [1, "grp"], ["routerLink", "/admin", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "routerLink"], ["routerLink", "/admin/users", "routerLinkActive", "active"], ["routerLink", "/admin/contacts", "routerLinkActive", "active"], ["routerLink", "/"], ["type", "button", 1, "side-sign-out", 3, "click"], [1, "admin-main"], [1, "admin-topbar"], [1, "who"], ["routerLink", "/", 1, "btn", "btn-ghost", "btn-sm"], [1, "admin-body"], [1, "n"], [1, "n", "alert"]], template: function AdminLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "a", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "span")(5, "b");
      \u0275\u0275text(6, "TARKSANHITA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "small");
      \u0275\u0275text(8, "Content Management");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5);
      \u0275\u0275text(11, "Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 6);
      \u0275\u0275text(13, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 5);
      \u0275\u0275text(15, "Content");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(16, AdminLayout_For_17_Template, 3, 5, "a", 7, _forTrack0);
      \u0275\u0275elementStart(18, "div", 5);
      \u0275\u0275text(19, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, AdminLayout_Conditional_20_Template, 3, 1, "a", 8);
      \u0275\u0275elementStart(21, "a", 9);
      \u0275\u0275text(22, " Enquiries ");
      \u0275\u0275conditionalCreate(23, AdminLayout_Conditional_23_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 5);
      \u0275\u0275text(25, "Site");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 10);
      \u0275\u0275text(27, "View Public Site");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 11);
      \u0275\u0275listener("click", function AdminLayout_Template_button_click_28_listener() {
        return ctx.signOut();
      });
      \u0275\u0275text(29, "Sign Out");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 12)(31, "div", 13)(32, "h1");
      \u0275\u0275text(33, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 14)(35, "b");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "a", 15);
      \u0275\u0275text(39, "Public Site");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 16);
      \u0275\u0275element(41, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.resources);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.auth.isAdmin() ? 20 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_3_0 = ctx.stats()) ? 23 : -1, tmp_3_0);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.auth.displayName());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.auth.roles().join(", "), " ");
    }
  }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayout, [{
    type: Component,
    args: [{
      selector: "ts-admin-layout",
      standalone: true,
      imports: [RouterOutlet, RouterLink, RouterLinkActive],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="admin-shell">

      <aside class="admin-side">
        <a class="brand" routerLink="/admin">
          <img src="assets/brand/tarksanhita-logo.jpeg" alt="Tarksanhita emblem" />
          <span>
            <b>TARKSANHITA</b>
            <small>Content Management</small>
          </span>
        </a>

        <div class="links">
          <div class="grp">Overview</div>
          <a routerLink="/admin" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>

          <div class="grp">Content</div>
          @for (resource of resources; track resource.key) {
            <a [routerLink]="['/admin', resource.key]" routerLinkActive="active">
              {{ resource.label }}
              @if (countFor(resource.key) !== null) {
                <span class="n">{{ countFor(resource.key) }}</span>
              }
            </a>
          }

          <div class="grp">Administration</div>
          @if (auth.isAdmin()) {
            <a routerLink="/admin/users" routerLinkActive="active">
              Users
              @if (stats(); as s) { <span class="n">{{ s.users }}</span> }
            </a>
          }
          <a routerLink="/admin/contacts" routerLinkActive="active">
            Enquiries
            @if (stats(); as s) {
              @if (s.newContacts > 0) { <span class="n alert">{{ s.newContacts }}</span> }
            }
          </a>

          <div class="grp">Site</div>
          <a routerLink="/">View Public Site</a>
          <button type="button" class="side-sign-out" (click)="signOut()">Sign Out</button>
        </div>
      </aside>

      <div class="admin-main">
        <div class="admin-topbar">
          <h1>Administration</h1>
          <div class="who">
            <b>{{ auth.displayName() }}</b>
            {{ auth.roles().join(', ') }}
          </div>
          <a class="btn btn-ghost btn-sm" routerLink="/">Public Site</a>
        </div>

        <div class="admin-body">
          <router-outlet />
        </div>
      </div>

    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayout, { className: "AdminLayout", filePath: "src/app/pages/admin/admin-layout.ts", lineNumber: 82 });
})();
export {
  AdminLayout
};
//# sourceMappingURL=chunk-GIZGK6RT.js.map
