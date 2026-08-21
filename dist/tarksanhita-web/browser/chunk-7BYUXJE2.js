import {
  MatSnackBar
} from "./chunk-UPWUZDK7.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-WCMIFM3B.js";
import {
  AuthService
} from "./chunk-FTSBTB32.js";
import {
  environment
} from "./chunk-MBQHVFNQ.js";
import {
  ActivatedRoute,
  HttpErrorResponse,
  Router,
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
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-F5R4JB2K.js";

// src/app/pages/auth/login.ts
function LoginPage_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign in to continue to the page you requested. ");
  }
}
function LoginPage_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Access your member, faculty or administrative account. ");
  }
}
function LoginPage_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div")(2, "b");
    \u0275\u0275text(3, "Sign-in failed");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function LoginPage_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function LoginPage_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Enter your password.");
    \u0275\u0275elementEnd();
  }
}
function LoginPage_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "b");
    \u0275\u0275text(2, "Development accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code");
    \u0275\u0275text(4, "admin@tarksanhita.in / 1111");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u2014 administration");
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "code");
    \u0275\u0275text(8, "editor@tarksanhita.in / 2222");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " \u2014 content management");
    \u0275\u0275element(10, "br");
    \u0275\u0275elementStart(11, "code");
    \u0275\u0275text(12, "student@tarksanhita.in / 4444");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " \u2014 member view");
    \u0275\u0275element(14, "br");
    \u0275\u0275text(15, " Seeded by the API on first run. This panel is hidden in production builds. ");
    \u0275\u0275elementEnd();
  }
}
var LoginPage = class _LoginPage {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  snack = inject(MatSnackBar);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  reveal = signal(false, ...ngDevMode ? [{ debugName: "reveal" }] : []);
  /** A failed sign-in is reported on the form itself — a 401 raises no snackbar. */
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  returnUrl = signal(this.route.snapshot.queryParamMap.get("returnUrl"), ...ngDevMode ? [{ debugName: "returnUrl" }] : []);
  /** Seeded credentials are a development convenience and never ship. */
  showDemoAccounts = !environment.production;
  form = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  invalid(control) {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.dirty || c.touched);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy.set(true);
    this.error.set(null);
    this.auth.login(this.form.getRawValue()).subscribe({
      next: (res) => {
        this.busy.set(false);
        this.snack.open(`Signed in as ${res.user.fullName}.`, "Close", {
          duration: 4e3,
          panelClass: ["ts-snack-ok"]
        });
        void this.router.navigateByUrl(this.returnUrl() ?? "/");
      },
      error: (err) => {
        this.busy.set(false);
        this.error.set(this.describe(err));
        this.form.get("password")?.reset();
      }
    });
  }
  describe(err) {
    if (!(err instanceof HttpErrorResponse))
      return "Something went wrong. Please try again.";
    if (err.status === 0)
      return "Cannot reach the server. Check that the API is running and try again.";
    if (err.status === 401)
      return "That email address and password do not match an account.";
    if (err.status === 403)
      return "This account has been deactivated. Please contact the Centre.";
    const body = err.error;
    return body?.message ?? body?.title ?? `Sign-in failed (${err.status}).`;
  }
  static \u0275fac = function LoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["ts-login"]], decls: 55, vars: 15, consts: [[1, "auth-wrap"], [1, "auth-card"], [1, "auth-aside"], [1, "mark"], ["src", "assets/brand/tarksanhita-logo.jpeg", "alt", "Tarksanhita emblem"], [1, "statement"], [1, "aside-foot"], ["routerLink", "/contact"], [1, "auth-form"], [1, "sub"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["role", "alert", 1, "form-alert"], [1, "field"], ["for", "l-email"], ["id", "l-email", "type", "email", "formControlName", "email", "autocomplete", "username"], [1, "err"], ["for", "l-password"], [1, "pw-box"], ["id", "l-password", "formControlName", "password", "inputmode", "numeric", "maxlength", "4", "autocomplete", "current-password", 3, "type"], ["type", "button", 1, "reveal", 3, "click"], ["type", "submit", 1, "btn", "btn-gold", "submit", 3, "disabled"], [1, "hint-box"], [1, "auth-foot"], ["routerLink", "/register"], ["routerLink", "/"]], template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementStart(5, "div")(6, "b");
      \u0275\u0275text(7, "TARKSANHITA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "small");
      \u0275\u0275text(9, "The Debate on Logic");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "p", 5);
      \u0275\u0275text(11, " Centre for Law, Logic, Debate & Knowledge. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul")(13, "li");
      \u0275\u0275text(14, "File arguments and rebuttals on any open motion.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li");
      \u0275\u0275text(16, "Propose motions for the adjudication board.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "li");
      \u0275\u0275text(18, "Register for events and download research papers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 6);
      \u0275\u0275text(20, " Accounts are held in the name of the member and are not to be shared. For help with access, ");
      \u0275\u0275elementStart(21, "a", 7);
      \u0275\u0275text(22, "contact the Centre");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, ". ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 8)(25, "h1");
      \u0275\u0275text(26, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 9);
      \u0275\u0275conditionalCreate(28, LoginPage_Conditional_28_Template, 1, 0)(29, LoginPage_Conditional_29_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "form", 10);
      \u0275\u0275listener("ngSubmit", function LoginPage_Template_form_ngSubmit_30_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(31, LoginPage_Conditional_31_Template, 5, 1, "div", 11);
      \u0275\u0275elementStart(32, "div", 12)(33, "label", 13);
      \u0275\u0275text(34, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 14);
      \u0275\u0275conditionalCreate(36, LoginPage_Conditional_36_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 12)(38, "label", 16);
      \u0275\u0275text(39, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 17);
      \u0275\u0275element(41, "input", 18);
      \u0275\u0275elementStart(42, "button", 19);
      \u0275\u0275listener("click", function LoginPage_Template_button_click_42_listener() {
        return ctx.reveal.set(!ctx.reveal());
      });
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(44, LoginPage_Conditional_44_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 20);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(47, LoginPage_Conditional_47_Template, 16, 0, "div", 21);
      \u0275\u0275elementStart(48, "div", 22)(49, "span");
      \u0275\u0275text(50, "No account yet? ");
      \u0275\u0275elementStart(51, "a", 23);
      \u0275\u0275text(52, "Register here");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "a", 24);
      \u0275\u0275text(54, "Back to site");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(28);
      \u0275\u0275conditional(ctx.returnUrl() ? 28 : 29);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.error()) ? 31 : -1, tmp_2_0);
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.invalid("email"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.invalid("email") ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.invalid("password"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.reveal() ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.reveal() ? "Hide password" : "Show password");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.reveal() ? "Hide" : "Show", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.invalid("password") ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.busy() ? "Signing in\u2026" : "Sign In", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showDemoAccounts ? 47 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{
      selector: "ts-login",
      standalone: true,
      imports: [ReactiveFormsModule, RouterLink],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="auth-wrap">
      <div class="auth-card">

        <aside class="auth-aside">
          <div class="mark">
            <img src="assets/brand/tarksanhita-logo.jpeg" alt="Tarksanhita emblem" />
            <div>
              <b>TARKSANHITA</b>
              <small>The Debate on Logic</small>
            </div>
          </div>

          <p class="statement">
            Centre for Law, Logic, Debate &amp; Knowledge.
          </p>

          <ul>
            <li>File arguments and rebuttals on any open motion.</li>
            <li>Propose motions for the adjudication board.</li>
            <li>Register for events and download research papers.</li>
          </ul>

          <div class="aside-foot">
            Accounts are held in the name of the member and are not to be shared.
            For help with access, <a routerLink="/contact">contact the Centre</a>.
          </div>
        </aside>

        <div class="auth-form">
          <h1>Sign In</h1>
          <p class="sub">
            @if (returnUrl()) {
              Sign in to continue to the page you requested.
            } @else {
              Access your member, faculty or administrative account.
            }
          </p>

          <form [formGroup]="form" (ngSubmit)="submit()" novalidate>

            @if (error(); as message) {
              <div class="form-alert" role="alert">
                <div>
                  <b>Sign-in failed</b>
                  {{ message }}
                </div>
              </div>
            }

            <div class="field" [class.invalid]="invalid('email')">
              <label for="l-email">Email address</label>
              <input id="l-email" type="email" formControlName="email" autocomplete="username" />
              @if (invalid('email')) { <span class="err">Enter a valid email address.</span> }
            </div>

            <div class="field" [class.invalid]="invalid('password')">
              <label for="l-password">Password</label>
              <div class="pw-box">
                <input id="l-password"
                       [type]="reveal() ? 'text' : 'password'"
                       formControlName="password"
                       inputmode="numeric"
                       maxlength="4"
                       autocomplete="current-password" />
                <button type="button"
                        class="reveal"
                        [attr.aria-label]="reveal() ? 'Hide password' : 'Show password'"
                        (click)="reveal.set(!reveal())">
                  {{ reveal() ? 'Hide' : 'Show' }}
                </button>
              </div>
              @if (invalid('password')) { <span class="err">Enter your password.</span> }
            </div>

            <button type="submit" class="btn btn-gold submit" [disabled]="busy()">
              {{ busy() ? 'Signing in\u2026' : 'Sign In' }}
            </button>
          </form>

          @if (showDemoAccounts) {
            <div class="hint-box">
              <b>Development accounts</b>
              <code>admin&#64;tarksanhita.in / 1111</code> \u2014 administration<br />
              <code>editor&#64;tarksanhita.in / 2222</code> \u2014 content management<br />
              <code>student&#64;tarksanhita.in / 4444</code> \u2014 member view<br />
              Seeded by the API on first run. This panel is hidden in production builds.
            </div>
          }

          <div class="auth-foot">
            <span>No account yet? <a routerLink="/register">Register here</a></span>
            <a routerLink="/">Back to site</a>
          </div>
        </div>

      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/pages/auth/login.ts", lineNumber: 114 });
})();
export {
  LoginPage
};
//# sourceMappingURL=chunk-7BYUXJE2.js.map
