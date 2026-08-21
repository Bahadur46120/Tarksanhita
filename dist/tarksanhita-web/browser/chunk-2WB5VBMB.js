import {
  UiService
} from "./chunk-PAG2NWAG.js";
import {
  MatSnackBar
} from "./chunk-UPWUZDK7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-WCMIFM3B.js";
import {
  AuthService
} from "./chunk-FTSBTB32.js";
import {
  MAIN_NAV
} from "./chunk-LEEVYR4T.js";
import {
  ApiService,
  environment
} from "./chunk-MBQHVFNQ.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-7TMVEVGK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F5R4JB2K.js";

// src/app/layout/account-menu.ts
function AccountMenu_Conditional_1_Conditional_9_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label(role_r4));
  }
}
function AccountMenu_Conditional_1_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("click", function AccountMenu_Conditional_1_Conditional_9_Conditional_11_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(1, "Administration");
    \u0275\u0275elementEnd();
  }
}
function AccountMenu_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275repeaterCreate(7, AccountMenu_Conditional_1_Conditional_9_For_8_Template, 2, 1, "span", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 9);
    \u0275\u0275listener("click", function AccountMenu_Conditional_1_Conditional_9_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(10, "My Account");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, AccountMenu_Conditional_1_Conditional_9_Conditional_11_Template, 2, 0, "a", 10);
    \u0275\u0275elementStart(12, "a", 11);
    \u0275\u0275listener("click", function AccountMenu_Conditional_1_Conditional_9_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(13, "Propose a Motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 12);
    \u0275\u0275listener("click", function AccountMenu_Conditional_1_Conditional_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.signOut());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.auth.displayName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.auth.user()) == null ? null : tmp_3_0.email);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.auth.roles());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.auth.isContentManager() ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.busy() ? "Signing out\u2026" : "Sign Out", " ");
  }
}
function AccountMenu_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function AccountMenu_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3)(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, AccountMenu_Conditional_1_Conditional_9_Template, 16, 5, "div", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-expanded", ctx_r1.open());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.initials());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.auth.displayName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.primaryRole());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.open() ? 9 : -1);
  }
}
function AccountMenu_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 15);
    \u0275\u0275text(3, "Register");
    \u0275\u0275elementEnd();
  }
}
var ROLE_ORDER = ["Admin", "Editor", "Faculty", "Student", "User"];
var ROLE_LABEL = {
  Admin: "Administrator",
  Editor: "Editor",
  Faculty: "Faculty",
  Student: "Student",
  User: "Member"
};
var AccountMenu = class _AccountMenu {
  auth = inject(AuthService);
  snack = inject(MatSnackBar);
  host = inject(ElementRef);
  open = signal(false, ...ngDevMode ? [{ debugName: "open" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  /** Up to two initials, taken from the first and last parts of the name. */
  initials = computed(() => {
    const parts = this.auth.displayName().trim().split(/\s+/).filter(Boolean);
    if (!parts.length)
      return "?";
    const first = parts[0][0];
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
  }, ...ngDevMode ? [{ debugName: "initials" }] : []);
  primaryRole = computed(() => {
    const mine = this.auth.roles();
    const senior = ROLE_ORDER.find((r) => mine.includes(r));
    return senior ? ROLE_LABEL[senior] : "Member";
  }, ...ngDevMode ? [{ debugName: "primaryRole" }] : []);
  label(role) {
    return ROLE_LABEL[role] ?? role;
  }
  toggle() {
    this.open.update((v) => !v);
  }
  close() {
    this.open.set(false);
  }
  /** Any click outside the control dismisses the menu. */
  onDocumentClick(event) {
    if (this.open() && !this.host.nativeElement.contains(event.target))
      this.close();
  }
  onEscape() {
    this.close();
  }
  signOut() {
    this.busy.set(true);
    this.close();
    this.snack.open("You have been signed out.", "Close", { duration: 4e3, panelClass: ["ts-snack-ok"] });
    this.auth.logout("/");
    this.busy.set(false);
  }
  static \u0275fac = function AccountMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountMenu, selectors: [["ts-account-menu"]], hostBindings: function AccountMenu_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AccountMenu_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument)("keydown.escape", function AccountMenu_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 3, vars: 1, consts: [[1, "account"], ["type", "button", "aria-haspopup", "true", "aria-controls", "account-menu", 1, "account-trigger", 3, "click"], ["aria-hidden", "true", 1, "avatar"], [1, "who"], ["aria-hidden", "true", 1, "caret"], ["id", "account-menu", "role", "menu", 1, "account-menu"], [1, "head"], [1, "roles"], [1, "badge", "badge-outline"], ["routerLink", "/profile", "role", "menuitem", 3, "click"], ["routerLink", "/admin", "role", "menuitem"], ["routerLink", "/debates/start", "role", "menuitem", 3, "click"], ["type", "button", "role", "menuitem", 1, "sign-out", 3, "click", "disabled"], ["routerLink", "/admin", "role", "menuitem", 3, "click"], ["routerLink", "/login", 1, "sign-in"], ["routerLink", "/register", 1, "register"]], template: function AccountMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, AccountMenu_Conditional_1_Template, 10, 5)(2, AccountMenu_Conditional_2_Template, 4, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 1 : 2);
    }
  }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountMenu, [{
    type: Component,
    args: [{
      selector: "ts-account-menu",
      standalone: true,
      imports: [RouterLink],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="account">
      @if (auth.isAuthenticated()) {

        <button type="button"
                class="account-trigger"
                [attr.aria-expanded]="open()"
                aria-haspopup="true"
                aria-controls="account-menu"
                (click)="toggle()">
          <span class="avatar" aria-hidden="true">{{ initials() }}</span>
          <span class="who">
            <b>{{ auth.displayName() }}</b>
            <small>{{ primaryRole() }}</small>
          </span>
          <span class="caret" aria-hidden="true"></span>
        </button>

        @if (open()) {
          <div class="account-menu" id="account-menu" role="menu">
            <div class="head">
              <b>{{ auth.displayName() }}</b>
              <span>{{ auth.user()?.email }}</span>
              <div class="roles">
                @for (role of auth.roles(); track role) {
                  <span class="badge badge-outline">{{ label(role) }}</span>
                }
              </div>
            </div>

            <a routerLink="/profile" role="menuitem" (click)="close()">My Account</a>
            @if (auth.isContentManager()) {
              <a routerLink="/admin" role="menuitem" (click)="close()">Administration</a>
            }
            <a routerLink="/debates/start" role="menuitem" (click)="close()">Propose a Motion</a>

            <button type="button"
                    class="sign-out"
                    role="menuitem"
                    [disabled]="busy()"
                    (click)="signOut()">
              {{ busy() ? 'Signing out\u2026' : 'Sign Out' }}
            </button>
          </div>
        }

      } @else {
        <a class="sign-in" routerLink="/login">Sign In</a>
        <a class="register" routerLink="/register">Register</a>
      }
    </div>
  `
    }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountMenu, { className: "AccountMenu", filePath: "src/app/layout/account-menu.ts", lineNumber: 82 });
})();

// src/app/layout/top-bar.ts
var TopBar = class _TopBar {
  router = inject(Router);
  term = "";
  search() {
    const q = this.term.trim();
    if (q.length < 2)
      return;
    void this.router.navigate(["/notices"], { queryParams: { search: q } });
  }
  static \u0275fac = function TopBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopBar, selectors: [["ts-top-bar"]], decls: 10, vars: 1, consts: [[1, "utility"], [1, "container"], [1, "spacer"], ["role", "search", 1, "util-search", 3, "ngSubmit"], ["for", "site-search", 1, "sr-only"], ["id", "site-search", "type", "search", "name", "q", "placeholder", "Search\u2026", 3, "ngModelChange", "ngModel"], ["type", "submit", "aria-label", "Search"]], template: function TopBar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function TopBar_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "label", 4);
      \u0275\u0275text(5, "Search the site");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function TopBar_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.term, $event) || (ctx.term = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275text(8, "Go");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "ts-account-menu");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.term);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, AccountMenu], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopBar, [{
    type: Component,
    args: [{
      selector: "ts-top-bar",
      standalone: true,
      imports: [FormsModule, AccountMenu],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="utility">
      <div class="container">
        <span class="spacer"></span>

        <form class="util-search" role="search" (ngSubmit)="search()">
          <label class="sr-only" for="site-search">Search the site</label>
          <input id="site-search" type="search" name="q" placeholder="Search\u2026" [(ngModel)]="term" />
          <button type="submit" aria-label="Search">Go</button>
        </form>

        <ts-account-menu />
      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopBar, { className: "TopBar", filePath: "src/app/layout/top-bar.ts", lineNumber: 32 });
})();

// src/app/layout/site-header.ts
var SiteHeader = class _SiteHeader {
  ui = inject(UiService);
  tagline = environment.tagline;
  subtitle = environment.subtitle;
  readAloud() {
    this.ui.speak("Tarksanhita. The Debate on Logic. Centre for Law, Logic, Debate and Knowledge. Use the main navigation to reach academics, debates, research, library and student sections.");
  }
  static \u0275fac = function SiteHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SiteHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteHeader, selectors: [["ts-site-header"]], decls: 38, vars: 4, consts: [[1, "masthead"], [1, "container"], ["routerLink", "/", "aria-label", "Tarksanhita home", 1, "brand-mark"], ["src", "assets/brand/tarksanhita-logo.jpeg", "alt", "Tarksanhita emblem \u2014 scales of justice above an open book"], [1, "brand-text"], [1, "name"], [1, "tagline"], [1, "rule"], [1, "subtitle"], [1, "devanagari"], [1, "head-right"], [1, "accred"], [1, "seal"], [1, "txt"], ["role", "group", "aria-label", "Accessibility controls", 1, "a11y"], [1, "lbl"], ["type", "button", "aria-label", "Decrease text size", 3, "click"], ["type", "button", "aria-label", "Reset text size", 3, "click"], ["type", "button", "aria-label", "Increase text size", 3, "click"], ["type", "button", "aria-label", "Toggle high contrast", "title", "High contrast", 3, "click"], ["type", "button", "aria-label", "Screen reader mode", "title", "Read page intro", 3, "click"]], template: function SiteHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6, "TARK");
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "SANHITA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 7);
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275text(15, "\u0924\u0930\u094D\u0915\u0938\u0902\u0939\u093F\u0924\u093E \u2014 \u0935\u093F\u0927\u093F, \u0924\u0930\u094D\u0915 \u090F\u0935\u0902 \u091C\u094D\u091E\u093E\u0928 \u0915\u0947\u0928\u094D\u0926\u094D\u0930");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "div", 12);
      \u0275\u0275text(19, "A+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "b");
      \u0275\u0275text(22, "Accredited Institution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "small");
      \u0275\u0275text(24, "Estd. 2016 \xB7 Reg. No. TS/2016/0421");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 14)(26, "span", 15);
      \u0275\u0275text(27, "Text size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 16);
      \u0275\u0275listener("click", function SiteHeader_Template_button_click_28_listener() {
        return ctx.ui.changeFont(-1);
      });
      \u0275\u0275text(29, "A\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 17);
      \u0275\u0275listener("click", function SiteHeader_Template_button_click_30_listener() {
        return ctx.ui.changeFont(0);
      });
      \u0275\u0275text(31, "A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 18);
      \u0275\u0275listener("click", function SiteHeader_Template_button_click_32_listener() {
        return ctx.ui.changeFont(1);
      });
      \u0275\u0275text(33, "A+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 19);
      \u0275\u0275listener("click", function SiteHeader_Template_button_click_34_listener() {
        return ctx.ui.toggleContrast();
      });
      \u0275\u0275text(35, "\u25D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275listener("click", function SiteHeader_Template_button_click_36_listener() {
        return ctx.readAloud();
      });
      \u0275\u0275text(37, "\u266A");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.tagline);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.subtitle);
      \u0275\u0275advance(21);
      \u0275\u0275classProp("active", ctx.ui.highContrast());
    }
  }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteHeader, [{
    type: Component,
    args: [{
      selector: "ts-site-header",
      standalone: true,
      imports: [RouterLink],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <header class="masthead">
      <div class="container">
        <a class="brand-mark" routerLink="/" aria-label="Tarksanhita home">
          <img src="assets/brand/tarksanhita-logo.jpeg"
               alt="Tarksanhita emblem \u2014 scales of justice above an open book" />
        </a>

        <div class="brand-text">
          <div class="name">TARK<span>SANHITA</span></div>
          <div class="tagline">{{ tagline }}</div>
          <div class="rule"></div>
          <div class="subtitle">{{ subtitle }}</div>
          <div class="devanagari">\u0924\u0930\u094D\u0915\u0938\u0902\u0939\u093F\u0924\u093E &mdash; \u0935\u093F\u0927\u093F, \u0924\u0930\u094D\u0915 \u090F\u0935\u0902 \u091C\u094D\u091E\u093E\u0928 \u0915\u0947\u0928\u094D\u0926\u094D\u0930</div>
        </div>

        <div class="head-right">
          <div class="accred">
            <div class="seal">A+</div>
            <div class="txt">
              <b>Accredited Institution</b>
              <small>Estd. 2016 &middot; Reg. No. TS/2016/0421</small>
            </div>
          </div>

          <div class="a11y" role="group" aria-label="Accessibility controls">
            <span class="lbl">Text size</span>
            <button type="button" (click)="ui.changeFont(-1)" aria-label="Decrease text size">A&minus;</button>
            <button type="button" (click)="ui.changeFont(0)" aria-label="Reset text size">A</button>
            <button type="button" (click)="ui.changeFont(1)" aria-label="Increase text size">A+</button>
            <button type="button"
                    [class.active]="ui.highContrast()"
                    (click)="ui.toggleContrast()"
                    aria-label="Toggle high contrast"
                    title="High contrast">&#9680;</button>
            <button type="button" (click)="readAloud()" aria-label="Screen reader mode" title="Read page intro">&#9834;</button>
          </div>
        </div>
      </div>
    </header>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteHeader, { className: "SiteHeader", filePath: "src/app/layout/site-header.ts", lineNumber: 53 });
})();

// src/app/layout/main-nav.ts
var _c0 = (a0) => ({ exact: a0 });
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.label + $item.link;
function MainNav_For_10_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275listener("click", function MainNav_For_10_Conditional_1_For_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.closeAll());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", child_r5.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(child_r5.label);
  }
}
function MainNav_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275listener("click", function MainNav_For_10_Conditional_1_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const $index_r2 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onParentClick($event, $index_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275element(2, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, MainNav_For_10_Conditional_1_For_5_Template, 2, 2, "a", 7, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r6.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6.label, " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(item_r6.children);
  }
}
function MainNav_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275listener("click", function MainNav_For_10_Conditional_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeAll());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r6.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.label);
  }
}
function MainNav_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 6);
    \u0275\u0275conditionalCreate(1, MainNav_For_10_Conditional_1_Template, 6, 2)(2, MainNav_For_10_Conditional_2_Template, 2, 2, "a", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r2.openIndex() === $index_r2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r6.link === "/"));
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r6.children == null ? null : item_r6.children.length) ? 1 : 2);
  }
}
var MainNav = class _MainNav {
  nav = MAIN_NAV;
  mobileOpen = signal(false, ...ngDevMode ? [{ debugName: "mobileOpen" }] : []);
  openIndex = signal(-1, ...ngDevMode ? [{ debugName: "openIndex" }] : []);
  /**
   * On narrow screens the top-level link toggles its submenu instead of
   * navigating, which is the only way to reach the children by touch.
   */
  onParentClick(event, index) {
    if (window.innerWidth > 900) {
      this.closeAll();
      return;
    }
    event.preventDefault();
    this.openIndex.set(this.openIndex() === index ? -1 : index);
  }
  closeAll() {
    this.mobileOpen.set(false);
    this.openIndex.set(-1);
  }
  onEscape() {
    this.closeAll();
  }
  static \u0275fac = function MainNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainNav)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainNav, selectors: [["ts-main-nav"]], hostBindings: function MainNav_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function MainNav_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 11, vars: 3, consts: [["aria-label", "Main", 1, "mainnav"], [1, "container"], ["type", "button", "aria-controls", "navbar", 1, "nav-toggle", 3, "click"], [1, "bars"], ["id", "navbar", 1, "navbar"], ["routerLinkActive", "active", 3, "open", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions"], [3, "routerLink"], [3, "click", "routerLink"], [1, "caret"], [1, "dropdown"]], template: function MainNav_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function MainNav_Template_button_click_2_listener() {
        return ctx.mobileOpen.set(!ctx.mobileOpen());
      });
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275element(4, "i")(5, "i")(6, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " MENU ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ul", 4);
      \u0275\u0275repeaterCreate(9, MainNav_For_10_Template, 3, 6, "li", 5, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-expanded", ctx.mobileOpen());
      \u0275\u0275advance(6);
      \u0275\u0275classProp("open", ctx.mobileOpen());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.nav);
    }
  }, dependencies: [RouterLink, RouterLinkActive], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainNav, [{
    type: Component,
    args: [{
      selector: "ts-main-nav",
      standalone: true,
      imports: [RouterLink, RouterLinkActive],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <nav class="mainnav" aria-label="Main">
      <div class="container">
        <button class="nav-toggle"
                type="button"
                [attr.aria-expanded]="mobileOpen()"
                aria-controls="navbar"
                (click)="mobileOpen.set(!mobileOpen())">
          <span class="bars"><i></i><i></i><i></i></span> MENU
        </button>

        <ul class="navbar" id="navbar" [class.open]="mobileOpen()">
          @for (item of nav; track item.label) {
            <li [class.open]="openIndex() === $index"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: item.link === '/' }">
              @if (item.children?.length) {
                <a [routerLink]="item.link" (click)="onParentClick($event, $index)">
                  {{ item.label }} <i class="caret"></i>
                </a>
                <div class="dropdown">
                  @for (child of item.children; track child.label + child.link) {
                    <a [routerLink]="child.link" (click)="closeAll()">{{ child.label }}</a>
                  }
                </div>
              } @else {
                <a [routerLink]="item.link" (click)="closeAll()">{{ item.label }}</a>
              }
            </li>
          }
        </ul>
      </div>
    </nav>
  `
    }]
  }], null, { onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainNav, { className: "MainNav", filePath: "src/app/layout/main-nav.ts", lineNumber: 50 });
})();

// src/app/layout/news-ticker.ts
var _c02 = (a0) => ["/notices", a0];
function NewsTicker_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "span", 5);
    \u0275\u0275text(2, "\u25C6");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c02, item_r1.slug));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r1.title, " ");
  }
}
function NewsTicker_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275text(2, "Latest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
    \u0275\u0275repeaterCreate(5, NewsTicker_Conditional_0_For_6_Template, 4, 4, "a", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.doubled());
  }
}
var NewsTicker = class _NewsTicker {
  api = inject(ApiService);
  items = signal([], ...ngDevMode ? [{ debugName: "items" }] : []);
  ngOnInit() {
    this.api.get("home/ticker").subscribe({
      next: (list) => this.items.set(list),
      // A missing ticker is not worth an error message; the strip simply hides.
      error: () => this.items.set([])
    });
  }
  doubled() {
    return [...this.items(), ...this.items()];
  }
  static \u0275fac = function NewsTicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NewsTicker)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsTicker, selectors: [["ts-news-ticker"]], decls: 1, vars: 1, consts: [["aria-label", "Latest announcements", 1, "ticker"], [1, "tag"], [1, "ticker-viewport"], [1, "ticker-track"], [3, "routerLink"], [1, "dot"]], template: function NewsTicker_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, NewsTicker_Conditional_0_Template, 7, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.items().length ? 0 : -1);
    }
  }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewsTicker, [{
    type: Component,
    args: [{
      selector: "ts-news-ticker",
      standalone: true,
      imports: [RouterLink],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (items().length) {
      <div class="ticker" aria-label="Latest announcements">
        <span class="tag">Latest</span>
        <div class="ticker-viewport">
          <div class="ticker-track">
            @for (item of doubled(); track $index) {
              <a [routerLink]="['/notices', item.slug]">
                <span class="dot">&#9670;</span>{{ item.title }}
              </a>
            }
          </div>
        </div>
      </div>
    }
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsTicker, { className: "NewsTicker", filePath: "src/app/layout/news-ticker.ts", lineNumber: 38 });
})();

// src/app/layout/site-footer.ts
var SiteFooter = class _SiteFooter {
  year = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function SiteFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SiteFooter)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteFooter, selectors: [["ts-site-footer"]], decls: 134, vars: 1, consts: [[1, "site-footer"], [1, "container"], [1, "foot-grid"], [1, "foot-brand"], ["src", "assets/brand/tarksanhita-logo.jpeg", "alt", "Tarksanhita emblem"], [1, "t"], [1, "n"], [1, "s"], [1, "foot-social"], ["href", "#", "aria-label", "Facebook"], ["href", "#", "aria-label", "X"], ["href", "#", "aria-label", "LinkedIn"], ["href", "#", "aria-label", "YouTube"], ["href", "#", "aria-label", "Instagram"], [1, "foot-links"], ["routerLink", "/admissions"], ["routerLink", "/events"], ["routerLink", "/students"], ["routerLink", "/notices"], ["routerLink", "/careers"], ["routerLink", "/academics"], ["routerLink", "/faculty"], ["routerLink", "/debates"], ["routerLink", "/library"], ["routerLink", "/debates/start"], ["routerLink", "/articles"], ["routerLink", "/news"], [1, "foot-contact"], [1, "ic"], [2, "border-top", "1px solid rgba(255,255,255,.1)"], [1, "container", "foot-bottom"], ["aria-label", "Legal"], ["href", "#"]], template: function SiteFooter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h5");
      \u0275\u0275text(5, "About Tarksanhita");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275element(7, "img", 4);
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
      \u0275\u0275text(10, "TARKSANHITA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275text(12, "The Debate on Logic");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, " A centre for law, logic, debate and knowledge \u2014 training jurists who reason from evidence and argue in good faith. Established 2016. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "a", 9);
      \u0275\u0275text(17, "f");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 10);
      \u0275\u0275text(19, "X");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 11);
      \u0275\u0275text(21, "in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 12);
      \u0275\u0275text(23, "\u25B6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 13);
      \u0275\u0275text(25, "\u25CE");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div")(27, "h5");
      \u0275\u0275text(28, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "ul", 14)(30, "li")(31, "a", 15);
      \u0275\u0275text(32, "Admissions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 16);
      \u0275\u0275text(35, "Academic Calendar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "li")(37, "a", 17);
      \u0275\u0275text(38, "Examinations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li")(40, "a", 17);
      \u0275\u0275text(41, "Results");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 18);
      \u0275\u0275text(44, "Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 17);
      \u0275\u0275text(47, "Downloads");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 19);
      \u0275\u0275text(50, "Careers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div")(52, "h5");
      \u0275\u0275text(53, "Academics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 14)(55, "li")(56, "a", 20);
      \u0275\u0275text(57, "Programmes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 21);
      \u0275\u0275text(60, "Faculty Directory");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 22);
      \u0275\u0275text(63, "Debate & Moot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 23);
      \u0275\u0275text(66, "Digital Library");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li")(68, "a", 17);
      \u0275\u0275text(69, "Student Corner");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "div")(71, "h5");
      \u0275\u0275text(72, "The Forum");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "ul", 14)(74, "li")(75, "a", 22);
      \u0275\u0275text(76, "Motions Before the Forum");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 24);
      \u0275\u0275text(79, "Propose a Motion");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 25);
      \u0275\u0275text(82, "Articles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "li")(84, "a", 18);
      \u0275\u0275text(85, "Notices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li")(87, "a", 26);
      \u0275\u0275text(88, "News");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(89, "div")(90, "h5");
      \u0275\u0275text(91, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "ul", 27)(93, "li")(94, "span", 28);
      \u0275\u0275text(95, "\u25C9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97, "Tarksanhita Campus, Knowledge Park Road,");
      \u0275\u0275element(98, "br");
      \u0275\u0275text(99, "New Delhi 110 001, India");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "li")(101, "span", 28);
      \u0275\u0275text(102, "\u2706");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span");
      \u0275\u0275text(104, "+91 11 4000 0000");
      \u0275\u0275element(105, "br");
      \u0275\u0275text(106, "+91 11 4000 0001 (Admissions)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "li")(108, "span", 28);
      \u0275\u0275text(109, "\u2709");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "span");
      \u0275\u0275text(111, "info@tarksanhita.in");
      \u0275\u0275element(112, "br");
      \u0275\u0275text(113, "admissions@tarksanhita.in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "li")(115, "span", 28);
      \u0275\u0275text(116, "\u25F7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "Mon\u2013Sat, 09:30\u201317:30 IST");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(119, "div", 29)(120, "div", 30)(121, "div");
      \u0275\u0275text(122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "nav", 31)(124, "a", 32);
      \u0275\u0275text(125, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "a", 32);
      \u0275\u0275text(127, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 32);
      \u0275\u0275text(129, "Disclaimer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "a", 32);
      \u0275\u0275text(131, "Accessibility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "a", 18);
      \u0275\u0275text(133, "Sitemap");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(122);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Tarksanhita. All Rights Reserved.");
    }
  }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteFooter, [{
    type: Component,
    args: [{
      selector: "ts-site-footer",
      standalone: true,
      imports: [RouterLink],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <footer class="site-footer">
      <div class="container">
        <div class="foot-grid">

          <div>
            <h5>About Tarksanhita</h5>
            <div class="foot-brand">
              <img src="assets/brand/tarksanhita-logo.jpeg" alt="Tarksanhita emblem" />
              <div class="t">
                <div class="n">TARKSANHITA</div>
                <div class="s">The Debate on Logic</div>
              </div>
            </div>
            <p>
              A centre for law, logic, debate and knowledge \u2014 training jurists who reason
              from evidence and argue in good faith. Established 2016.
            </p>
            <div class="foot-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="X">X</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">&#9654;</a>
              <a href="#" aria-label="Instagram">&#9678;</a>
            </div>
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul class="foot-links">
              <li><a routerLink="/admissions">Admissions</a></li>
              <li><a routerLink="/events">Academic Calendar</a></li>
              <li><a routerLink="/students">Examinations</a></li>
              <li><a routerLink="/students">Results</a></li>
              <li><a routerLink="/notices">Notifications</a></li>
              <li><a routerLink="/students">Downloads</a></li>
              <li><a routerLink="/careers">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5>Academics</h5>
            <ul class="foot-links">
              <li><a routerLink="/academics">Programmes</a></li>
              <li><a routerLink="/faculty">Faculty Directory</a></li>
              <li><a routerLink="/debates">Debate &amp; Moot</a></li>
              <li><a routerLink="/library">Digital Library</a></li>
              <li><a routerLink="/students">Student Corner</a></li>
            </ul>
          </div>

          <div>
            <h5>The Forum</h5>
            <ul class="foot-links">
              <li><a routerLink="/debates">Motions Before the Forum</a></li>
              <li><a routerLink="/debates/start">Propose a Motion</a></li>
              <li><a routerLink="/articles">Articles</a></li>
              <li><a routerLink="/notices">Notices</a></li>
              <li><a routerLink="/news">News</a></li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul class="foot-contact">
              <li><span class="ic">&#9673;</span><span>Tarksanhita Campus, Knowledge Park Road,<br />New Delhi 110 001, India</span></li>
              <li><span class="ic">&#9990;</span><span>+91 11 4000 0000<br />+91 11 4000 0001 (Admissions)</span></li>
              <li><span class="ic">&#9993;</span><span>info&#64;tarksanhita.in<br />admissions&#64;tarksanhita.in</span></li>
              <li><span class="ic">&#9719;</span><span>Mon&ndash;Sat, 09:30&ndash;17:30 IST</span></li>
            </ul>
          </div>

        </div>
      </div>

      <div style="border-top:1px solid rgba(255,255,255,.1)">
        <div class="container foot-bottom">
          <div>&copy; {{ year }} Tarksanhita. All Rights Reserved.</div>
          <nav aria-label="Legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Disclaimer</a>
            <a href="#">Accessibility</a>
            <a routerLink="/notices">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteFooter, { className: "SiteFooter", filePath: "src/app/layout/site-footer.ts", lineNumber: 99 });
})();

// src/app/layout/public-layout.ts
var PublicLayout = class _PublicLayout {
  showTop = signal(false, ...ngDevMode ? [{ debugName: "showTop" }] : []);
  constructor() {
    window.addEventListener("scroll", () => this.showTop.set(window.scrollY > 420), { passive: true });
  }
  scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static \u0275fac = function PublicLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLayout, selectors: [["ts-public-layout"]], decls: 11, vars: 2, consts: [["href", "#main", 1, "skip-link"], ["id", "main"], ["type", "button", "aria-label", "Back to top", 1, "to-top", 3, "click"]], template: function PublicLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275text(1, "Skip to main content");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "ts-top-bar")(3, "ts-site-header")(4, "ts-main-nav")(5, "ts-news-ticker");
      \u0275\u0275elementStart(6, "div", 1);
      \u0275\u0275element(7, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "ts-site-footer");
      \u0275\u0275elementStart(9, "button", 2);
      \u0275\u0275listener("click", function PublicLayout_Template_button_click_9_listener() {
        return ctx.scrollTop();
      });
      \u0275\u0275text(10, "\u25B2");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("show", ctx.showTop());
    }
  }, dependencies: [RouterOutlet, TopBar, SiteHeader, MainNav, NewsTicker, SiteFooter], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicLayout, [{
    type: Component,
    args: [{
      selector: "ts-public-layout",
      standalone: true,
      imports: [RouterOutlet, TopBar, SiteHeader, MainNav, NewsTicker, SiteFooter],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <a class="skip-link" href="#main">Skip to main content</a>

    <ts-top-bar />
    <ts-site-header />
    <ts-main-nav />
    <ts-news-ticker />

    <div id="main">
      <router-outlet />
    </div>

    <ts-site-footer />

    <button
      type="button"
      class="to-top"
      [class.show]="showTop()"
      (click)="scrollTop()"
      aria-label="Back to top">&#9650;</button>
  `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayout, { className: "PublicLayout", filePath: "src/app/layout/public-layout.ts", lineNumber: 40 });
})();
export {
  PublicLayout
};
//# sourceMappingURL=chunk-2WB5VBMB.js.map
