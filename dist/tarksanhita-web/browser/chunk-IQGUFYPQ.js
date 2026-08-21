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
import "./chunk-MBQHVFNQ.js";
import {
  Router,
  RouterLink
} from "./chunk-7TMVEVGK.js";
import {
  ChangeDetectionStrategy,
  Component,
  __objRest,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-F5R4JB2K.js";

// src/app/pages/auth/register.ts
function RegisterPage_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Please enter your full name.");
    \u0275\u0275elementEnd();
  }
}
function RegisterPage_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function RegisterPage_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "The two passwords do not match.");
    \u0275\u0275elementEnd();
  }
}
function passwordsMatch(group) {
  const password = group.get("password")?.value;
  const confirm = group.get("confirmPassword")?.value;
  return password && confirm && password !== confirm ? { mismatch: true } : null;
}
var RegisterPage = class _RegisterPage {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);
  snack = inject(MatSnackBar);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  form = this.fb.nonNullable.group({
    fullName: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    phone: [""],
    enrolmentNo: [""],
    password: ["", [Validators.required, Validators.pattern(/^\d{4}$/)]],
    confirmPassword: ["", [Validators.required]]
  }, { validators: passwordsMatch });
  invalid(control) {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.dirty || c.touched);
  }
  mismatch() {
    return this.form.hasError("mismatch") && !!this.form.get("confirmPassword")?.touched;
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const _a = this.form.getRawValue(), { confirmPassword } = _a, payload = __objRest(_a, ["confirmPassword"]);
    void confirmPassword;
    this.busy.set(true);
    this.auth.register(payload).subscribe({
      next: (res) => {
        this.busy.set(false);
        this.snack.open(`Welcome, ${res.user.fullName}.`, "Close", { panelClass: ["ts-snack-ok"] });
        void this.router.navigateByUrl("/");
      },
      error: () => this.busy.set(false)
    });
  }
  static \u0275fac = function RegisterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPage, selectors: [["ts-register"]], decls: 75, vars: 14, consts: [[1, "auth-wrap"], [1, "auth-card"], [1, "auth-aside"], [1, "mark"], ["src", "assets/brand/tarksanhita-logo.jpeg", "alt", "Tarksanhita emblem"], [1, "statement"], [1, "aside-foot"], ["routerLink", "/contact"], [1, "auth-form"], [1, "sub"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "field", "full"], ["for", "r-name"], ["id", "r-name", "formControlName", "fullName", "autocomplete", "name"], [1, "err"], ["for", "r-email"], ["id", "r-email", "type", "email", "formControlName", "email", "autocomplete", "email"], [1, "field"], ["for", "r-phone"], [1, "muted"], ["id", "r-phone", "formControlName", "phone", "autocomplete", "tel"], ["for", "r-enrol"], ["id", "r-enrol", "formControlName", "enrolmentNo"], ["for", "r-password"], ["id", "r-password", "type", "password", "formControlName", "password", "inputmode", "numeric", "autocomplete", "new-password", "maxlength", "4"], ["for", "r-confirm"], ["id", "r-confirm", "type", "password", "formControlName", "confirmPassword", "inputmode", "numeric", "autocomplete", "new-password", "maxlength", "4"], ["type", "submit", 1, "btn", "btn-gold", "submit", 3, "disabled"], [1, "hint-box"], [1, "auth-foot"], ["routerLink", "/login"], ["routerLink", "/"]], template: function RegisterPage_Template(rf, ctx) {
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
      \u0275\u0275text(11, " Membership of the forum is open, and free. ");
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
      \u0275\u0275text(20, " Please register in your own name. Accounts found to be duplicates or pseudonymous are withdrawn. ");
      \u0275\u0275elementStart(21, "a", 7);
      \u0275\u0275text(22, "Contact the Centre");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " for help. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 8)(25, "h1");
      \u0275\u0275text(26, "Create an Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 9);
      \u0275\u0275text(28, "Registration gives you access to debates, saved resources and event registration.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "form", 10);
      \u0275\u0275listener("ngSubmit", function RegisterPage_Template_form_ngSubmit_29_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(30, "div", 11)(31, "div", 12)(32, "label", 13);
      \u0275\u0275text(33, "Full name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 14);
      \u0275\u0275conditionalCreate(35, RegisterPage_Conditional_35_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 12)(37, "label", 16);
      \u0275\u0275text(38, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 17);
      \u0275\u0275conditionalCreate(40, RegisterPage_Conditional_40_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 18)(42, "label", 19);
      \u0275\u0275text(43, "Telephone ");
      \u0275\u0275elementStart(44, "span", 20);
      \u0275\u0275text(45, "(optional)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(46, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 18)(48, "label", 22);
      \u0275\u0275text(49, "Enrolment no. ");
      \u0275\u0275elementStart(50, "span", 20);
      \u0275\u0275text(51, "(if enrolled)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(52, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 18)(54, "label", 24);
      \u0275\u0275text(55, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 18)(58, "label", 26);
      \u0275\u0275text(59, "Confirm password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "input", 27);
      \u0275\u0275conditionalCreate(61, RegisterPage_Conditional_61_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "button", 28);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 29)(65, "b");
      \u0275\u0275text(66, "After registration");
      \u0275\u0275elementEnd();
      \u0275\u0275text(67, " New accounts receive the standard member role. Faculty, editor and administrative rights are granted by an administrator after verification. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 30)(69, "span");
      \u0275\u0275text(70, "Already registered? ");
      \u0275\u0275elementStart(71, "a", 31);
      \u0275\u0275text(72, "Sign in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "a", 32);
      \u0275\u0275text(74, "Back to site");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("invalid", ctx.invalid("fullName"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.invalid("fullName") ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.invalid("email"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.invalid("email") ? 40 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("invalid", ctx.invalid("password"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.invalid("confirmPassword") || ctx.mismatch());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.mismatch() ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.busy() ? "Creating account\u2026" : "Create Account", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterPage, [{
    type: Component,
    args: [{
      selector: "ts-register",
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
            Membership of the forum is open, and free.
          </p>

          <ul>
            <li>File arguments and rebuttals on any open motion.</li>
            <li>Propose motions for the adjudication board.</li>
            <li>Register for events and download research papers.</li>
          </ul>

          <div class="aside-foot">
            Please register in your own name. Accounts found to be duplicates or
            pseudonymous are withdrawn. <a routerLink="/contact">Contact the Centre</a> for help.
          </div>
        </aside>

        <div class="auth-form">
          <h1>Create an Account</h1>
          <p class="sub">Registration gives you access to debates, saved resources and event registration.</p>

          <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
            <div class="form-grid">

              <div class="field full" [class.invalid]="invalid('fullName')">
                <label for="r-name">Full name</label>
                <input id="r-name" formControlName="fullName" autocomplete="name" />
                @if (invalid('fullName')) { <span class="err">Please enter your full name.</span> }
              </div>

              <div class="field full" [class.invalid]="invalid('email')">
                <label for="r-email">Email address</label>
                <input id="r-email" type="email" formControlName="email" autocomplete="email" />
                @if (invalid('email')) { <span class="err">Enter a valid email address.</span> }
              </div>

              <div class="field">
                <label for="r-phone">Telephone <span class="muted">(optional)</span></label>
                <input id="r-phone" formControlName="phone" autocomplete="tel" />
              </div>

              <div class="field">
                <label for="r-enrol">Enrolment no. <span class="muted">(if enrolled)</span></label>
                <input id="r-enrol" formControlName="enrolmentNo" />
              </div>

              <div class="field" [class.invalid]="invalid('password')">
                <label for="r-password">Password</label>
                <input id="r-password"
                       type="password"
                       formControlName="password"
                       inputmode="numeric"
                       autocomplete="new-password"
                       maxlength="4" />
              </div>

              <div class="field" [class.invalid]="invalid('confirmPassword') || mismatch()">
                <label for="r-confirm">Confirm password</label>
                <input id="r-confirm"
                       type="password"
                       formControlName="confirmPassword"
                       inputmode="numeric"
                       autocomplete="new-password"
                       maxlength="4" />
                @if (mismatch()) { <span class="err">The two passwords do not match.</span> }
              </div>

            </div>

            <button type="submit" class="btn btn-gold submit" [disabled]="busy()">
              {{ busy() ? 'Creating account\u2026' : 'Create Account' }}
            </button>
          </form>

          <div class="hint-box">
            <b>After registration</b>
            New accounts receive the standard member role. Faculty, editor and administrative
            rights are granted by an administrator after verification.
          </div>

          <div class="auth-foot">
            <span>Already registered? <a routerLink="/login">Sign in</a></span>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPage, { className: "RegisterPage", filePath: "src/app/pages/auth/register.ts", lineNumber: 121 });
})();
export {
  RegisterPage
};
//# sourceMappingURL=chunk-IQGUFYPQ.js.map
