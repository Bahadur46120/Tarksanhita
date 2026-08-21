import {
  RESOURCES
} from "./chunk-YU4OLOJI.js";
import {
  AuthService
} from "./chunk-FTSBTB32.js";
import {
  EmptyState,
  LoadingState
} from "./chunk-JRDIFDAI.js";
import {
  ApiService
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-F5R4JB2K.js";

// src/app/pages/admin/dashboard.ts
var _c0 = (a0) => ["/admin", a0, "new"];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id + $item.kind;
function AdminDashboard_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 8);
  }
}
function AdminDashboard_Conditional_42_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "a", 37);
    \u0275\u0275text(7, "Manage \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r1.users);
  }
}
function AdminDashboard_Conditional_42_For_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, resource_r2.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+ ", resource_r2.singular);
  }
}
function AdminDashboard_Conditional_42_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 35);
  }
}
function AdminDashboard_Conditional_42_Conditional_99_For_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "Archived");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboard_Conditional_42_Conditional_99_For_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Published");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboard_Conditional_42_Conditional_99_For_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Draft");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboard_Conditional_42_Conditional_99_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, AdminDashboard_Conditional_42_Conditional_99_For_16_Conditional_7_Template, 2, 0, "span", 43)(8, AdminDashboard_Conditional_42_Conditional_99_For_16_Conditional_8_Template, 2, 0, "span", 44)(9, AdminDashboard_Conditional_42_Conditional_99_For_16_Conditional_9_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.kind);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!row_r3.isActive ? 7 : row_r3.isPublished ? 8 : 9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 5, row_r3.updatedAt, "dd MMM y, HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.updatedBy || "\u2014");
  }
}
function AdminDashboard_Conditional_42_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "table", 38)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 39);
    \u0275\u0275text(9, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 40);
    \u0275\u0275text(11, "Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 41);
    \u0275\u0275text(13, "By");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, AdminDashboard_Conditional_42_Conditional_99_For_16_Template, 15, 8, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r3.activity());
  }
}
function AdminDashboard_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3, "Notices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19)(7, "a", 20);
    \u0275\u0275text(8, "Manage \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 16)(10, "div", 17);
    \u0275\u0275text(11, "News");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 19)(15, "a", 21);
    \u0275\u0275text(16, "Manage \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17);
    \u0275\u0275text(19, "Events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19)(23, "a", 22);
    \u0275\u0275text(24, "Manage \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 16)(26, "div", 17);
    \u0275\u0275text(27, "Debates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 18);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 19)(31, "a", 23);
    \u0275\u0275text(32, "Manage \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 16)(34, "div", 17);
    \u0275\u0275text(35, "Articles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 19)(39, "a", 24);
    \u0275\u0275text(40, "Manage \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 16)(42, "div", 17);
    \u0275\u0275text(43, "Research Papers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 18);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 19)(47, "a", 25);
    \u0275\u0275text(48, "Manage \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 16)(50, "div", 17);
    \u0275\u0275text(51, "Legal Topics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 18);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 19)(55, "a", 26);
    \u0275\u0275text(56, "Manage \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 16)(58, "div", 17);
    \u0275\u0275text(59, "Library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 18);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 19)(63, "a", 27);
    \u0275\u0275text(64, "Manage \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 16)(66, "div", 17);
    \u0275\u0275text(67, "Profiles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 18);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 19)(71, "a", 28);
    \u0275\u0275text(72, "Manage \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 29)(74, "div", 17);
    \u0275\u0275text(75, "New Enquiries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 18);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 19)(79, "a", 30);
    \u0275\u0275text(80, "Review \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 31)(82, "div", 17);
    \u0275\u0275text(83, "Unpublished Drafts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 18);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 19);
    \u0275\u0275text(87, "Awaiting release");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(88, AdminDashboard_Conditional_42_Conditional_88_Template, 8, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 32)(90, "h3");
    \u0275\u0275text(91, "Create New");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 33);
    \u0275\u0275repeaterCreate(93, AdminDashboard_Conditional_42_For_94_Template, 2, 4, "a", 34, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 32)(96, "h3");
    \u0275\u0275text(97, "Recent Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(98, AdminDashboard_Conditional_42_Conditional_98_Template, 1, 0, "ts-empty-state", 35)(99, AdminDashboard_Conditional_42_Conditional_99_Template, 17, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r1.notices);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r1.news);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r1.events);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r1.debates);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r1.articles);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r1.researchPapers);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r1.legalTopics);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r1.libraryResources);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r1.profiles);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r1.newContacts);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r1.unpublishedItems);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.auth.isAdmin() ? 88 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r3.resources);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r3.activity().length ? 98 : 99);
  }
}
function AdminDashboard_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 14);
  }
}
var AdminDashboard = class _AdminDashboard {
  api = inject(ApiService);
  auth = inject(AuthService);
  resources = RESOURCES;
  stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : []);
  activity = signal([], ...ngDevMode ? [{ debugName: "activity" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  ngOnInit() {
    this.api.get("admin/dashboard").subscribe({
      next: (s) => {
        this.stats.set(s);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
    this.api.get("admin/recent-activity", { take: 12 }).subscribe({
      next: (rows) => this.activity.set(rows),
      error: () => this.activity.set([])
    });
  }
  static \u0275fac = function AdminDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboard, selectors: [["ts-admin-dashboard"]], decls: 44, vars: 3, consts: [[1, "admin-banner"], [1, "ab-mark"], ["aria-hidden", "true"], ["href", "#i-shield"], [1, "ab-copy"], [1, "ab-sub"], [1, "ab-rule"], [1, "ab-lede"], [1, "ab-features"], ["href", "#i-people"], ["href", "#i-doc"], ["href", "#i-award"], ["href", "#i-chip"], [3, "count"], ["heading", "Dashboard unavailable", "body", "The API could not be reached. Check that the backend is running and that MongoDB is available."], [1, "tile-grid"], [1, "tile"], [1, "k"], [1, "v"], [1, "s"], ["routerLink", "/admin/notices"], ["routerLink", "/admin/news"], ["routerLink", "/admin/events"], ["routerLink", "/admin/debates"], ["routerLink", "/admin/articles"], ["routerLink", "/admin/research"], ["routerLink", "/admin/topics"], ["routerLink", "/admin/library"], ["routerLink", "/admin/profiles"], [1, "tile", 2, "border-left-color", "#b3261e"], ["routerLink", "/admin/contacts"], [1, "tile", 2, "border-left-color", "#1d6f42"], [1, "card"], [1, "flex", "flex-wrap", "gap-8"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"], ["heading", "Nothing changed yet", "body", "Edits made through the panel are listed here."], [1, "table-scroll"], ["routerLink", "/admin/users"], [1, "ts-table"], [2, "width", "110px"], [2, "width", "150px"], [2, "width", "190px"], [1, "badge", "badge-outline"], [1, "badge", "badge-navy"], [1, "badge", "badge-open"], [1, "badge", "badge-gold"], [1, "muted"]], template: function AdminDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "use", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "div", 4)(5, "h2");
      \u0275\u0275text(6, "Admin Panel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Tarksanhita Debate Forum");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "div", 6);
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul", 8)(13, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 2);
      \u0275\u0275element(15, "use", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "User");
      \u0275\u0275element(18, "br");
      \u0275\u0275text(19, "Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 2);
      \u0275\u0275element(22, "use", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Topic & Debate");
      \u0275\u0275element(25, "br");
      \u0275\u0275text(26, "Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 2);
      \u0275\u0275element(29, "use", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Reports &");
      \u0275\u0275element(32, "br");
      \u0275\u0275text(33, "Analytics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 2);
      \u0275\u0275element(36, "use", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "System");
      \u0275\u0275element(39, "br");
      \u0275\u0275text(40, "Settings");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(41, AdminDashboard_Conditional_41_Template, 1, 1, "ts-loading-state", 13)(42, AdminDashboard_Conditional_42_Template, 100, 13)(43, AdminDashboard_Conditional_43_Template, 1, 0, "ts-empty-state", 14);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate2(" Manage members, subject areas, motions and activity from one place. Signed in as ", ctx.auth.displayName(), " (", ctx.auth.roles().join(", "), "). ");
      \u0275\u0275advance(30);
      \u0275\u0275conditional(ctx.loading() ? 41 : (tmp_1_0 = ctx.stats()) ? 42 : 43, tmp_1_0);
    }
  }, dependencies: [RouterLink, LoadingState, EmptyState, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboard, [{
    type: Component,
    args: [{
      selector: "ts-admin-dashboard",
      standalone: true,
      imports: [RouterLink, DatePipe, LoadingState, EmptyState],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section class="admin-banner">
      <div class="ab-mark"><svg aria-hidden="true"><use href="#i-shield" /></svg></div>

      <div class="ab-copy">
        <h2>Admin Panel</h2>
        <p class="ab-sub">Tarksanhita Debate Forum</p>
        <div class="ab-rule"></div>
        <p class="ab-lede">
          Manage members, subject areas, motions and activity from one place.
          Signed in as {{ auth.displayName() }} ({{ auth.roles().join(', ') }}).
        </p>

        <ul class="ab-features">
          <li>
            <svg aria-hidden="true"><use href="#i-people" /></svg>
            <span>User<br />Management</span>
          </li>
          <li>
            <svg aria-hidden="true"><use href="#i-doc" /></svg>
            <span>Topic &amp; Debate<br />Management</span>
          </li>
          <li>
            <svg aria-hidden="true"><use href="#i-award" /></svg>
            <span>Reports &amp;<br />Analytics</span>
          </li>
          <li>
            <svg aria-hidden="true"><use href="#i-chip" /></svg>
            <span>System<br />Settings</span>
          </li>
        </ul>
      </div>
    </section>

    @if (loading()) {
      <ts-loading-state [count]="8" />
    } @else if (stats(); as s) {

      <div class="tile-grid">
        <div class="tile"><div class="k">Notices</div><div class="v">{{ s.notices }}</div><div class="s"><a routerLink="/admin/notices">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">News</div><div class="v">{{ s.news }}</div><div class="s"><a routerLink="/admin/news">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Events</div><div class="v">{{ s.events }}</div><div class="s"><a routerLink="/admin/events">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Debates</div><div class="v">{{ s.debates }}</div><div class="s"><a routerLink="/admin/debates">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Articles</div><div class="v">{{ s.articles }}</div><div class="s"><a routerLink="/admin/articles">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Research Papers</div><div class="v">{{ s.researchPapers }}</div><div class="s"><a routerLink="/admin/research">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Legal Topics</div><div class="v">{{ s.legalTopics }}</div><div class="s"><a routerLink="/admin/topics">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Library</div><div class="v">{{ s.libraryResources }}</div><div class="s"><a routerLink="/admin/library">Manage &rarr;</a></div></div>
        <div class="tile"><div class="k">Profiles</div><div class="v">{{ s.profiles }}</div><div class="s"><a routerLink="/admin/profiles">Manage &rarr;</a></div></div>

        <div class="tile" style="border-left-color:#b3261e">
          <div class="k">New Enquiries</div>
          <div class="v">{{ s.newContacts }}</div>
          <div class="s"><a routerLink="/admin/contacts">Review &rarr;</a></div>
        </div>

        <div class="tile" style="border-left-color:#1d6f42">
          <div class="k">Unpublished Drafts</div>
          <div class="v">{{ s.unpublishedItems }}</div>
          <div class="s">Awaiting release</div>
        </div>

        @if (auth.isAdmin()) {
          <div class="tile">
            <div class="k">Users</div>
            <div class="v">{{ s.users }}</div>
            <div class="s"><a routerLink="/admin/users">Manage &rarr;</a></div>
          </div>
        }
      </div>

      <div class="card">
        <h3>Create New</h3>
        <div class="flex flex-wrap gap-8">
          @for (resource of resources; track resource.key) {
            <a class="btn btn-ghost btn-sm" [routerLink]="['/admin', resource.key, 'new']">+ {{ resource.singular }}</a>
          }
        </div>
      </div>

      <div class="card">
        <h3>Recent Activity</h3>
        @if (!activity().length) {
          <ts-empty-state heading="Nothing changed yet" body="Edits made through the panel are listed here." />
        } @else {
          <div class="table-scroll">
            <table class="ts-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Title</th>
                  <th style="width:110px">State</th>
                  <th style="width:150px">Updated</th>
                  <th style="width:190px">By</th>
                </tr>
              </thead>
              <tbody>
                @for (row of activity(); track row.id + row.kind) {
                  <tr>
                    <td><span class="badge badge-outline">{{ row.kind }}</span></td>
                    <td>{{ row.title }}</td>
                    <td>
                      @if (!row.isActive) {
                        <span class="badge badge-navy">Archived</span>
                      } @else if (row.isPublished) {
                        <span class="badge badge-open">Published</span>
                      } @else {
                        <span class="badge badge-gold">Draft</span>
                      }
                    </td>
                    <td>{{ row.updatedAt | date: 'dd MMM y, HH:mm' }}</td>
                    <td class="muted">{{ row.updatedBy || '\u2014' }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>

    } @else {
      <ts-empty-state
        heading="Dashboard unavailable"
        body="The API could not be reached. Check that the backend is running and that MongoDB is available." />
    }
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboard, { className: "AdminDashboard", filePath: "src/app/pages/admin/dashboard.ts", lineNumber: 152 });
})();
export {
  AdminDashboard
};
//# sourceMappingURL=chunk-RQOYYDJA.js.map
