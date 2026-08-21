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
  PageBanner
} from "./chunk-JRDIFDAI.js";
import "./chunk-MBQHVFNQ.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F5R4JB2K.js";

// src/app/pages/account/profile.ts
function ProfilePage_Conditional_3_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r2);
  }
}
function ProfilePage_Conditional_3_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1, "Open Admin Panel");
    \u0275\u0275elementEnd();
  }
}
function ProfilePage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 4)(2, "h2");
    \u0275\u0275text(3, "Account Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "table", 7)(7, "tbody")(8, "tr")(9, "th", 8);
    \u0275\u0275text(10, "Full name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tr")(14, "th");
    \u0275\u0275text(15, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tr")(19, "th");
    \u0275\u0275text(20, "Telephone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "tr")(24, "th");
    \u0275\u0275text(25, "Enrolment number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "tr")(29, "th");
    \u0275\u0275text(30, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275repeaterCreate(32, ProfilePage_Conditional_3_For_33_Template, 2, 1, "span", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "tr")(35, "th");
    \u0275\u0275text(36, "Member since");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "tr")(41, "th");
    \u0275\u0275text(42, "Last sign-in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "date");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(46, "div", 10);
    \u0275\u0275conditionalCreate(47, ProfilePage_Conditional_3_Conditional_47_Template, 2, 0, "a", 11);
    \u0275\u0275elementStart(48, "a", 12);
    \u0275\u0275text(49, "Student Corner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 13);
    \u0275\u0275listener("click", function ProfilePage_Conditional_3_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.auth.logout("/"));
    });
    \u0275\u0275text(51, "Sign Out");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "section", 3)(53, "div", 4)(54, "h2");
    \u0275\u0275text(55, "Change Password");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 5)(57, "form", 14);
    \u0275\u0275listener("ngSubmit", function ProfilePage_Conditional_3_Template_form_ngSubmit_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275elementStart(58, "div", 15)(59, "div", 16)(60, "label", 17);
    \u0275\u0275text(61, "Current password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 16)(64, "label", 19);
    \u0275\u0275text(65, "New password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 10)(68, "button", 21);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "p", 22);
    \u0275\u0275text(71, " Changing your password signs you out of every device. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r4 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(user_r4.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(user_r4.phone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(user_r4.enrolmentNo || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(user_r4.roles);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 10, user_r4.createdAt, "dd MMMM y"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(user_r4.lastLoginAt ? \u0275\u0275pipeBind2(45, 13, user_r4.lastLoginAt, "dd MMM y, HH:mm") : "This session");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.auth.isContentManager() ? 47 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r2.busy() || ctx_r2.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.busy() ? "Updating\u2026" : "Update Password", " ");
  }
}
var ProfilePage = class _ProfilePage {
  fb = inject(FormBuilder);
  snack = inject(MatSnackBar);
  auth = inject(AuthService);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  form = this.fb.nonNullable.group({
    currentPassword: ["", Validators.required],
    newPassword: ["", [Validators.required, Validators.pattern(/^\d{4}$/)]]
  });
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { currentPassword, newPassword } = this.form.getRawValue();
    this.busy.set(true);
    this.auth.changePassword(currentPassword, newPassword).subscribe({
      next: (res) => {
        this.busy.set(false);
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
        this.auth.clear("/login");
      },
      error: () => this.busy.set(false)
    });
  }
  static \u0275fac = function ProfilePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfilePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilePage, selectors: [["ts-profile"]], decls: 4, vars: 1, consts: [["heading", "My Account", "lede", "Your account details, roles and password."], [1, "section"], [1, "container", 2, "max-width", "900px"], [1, "panel"], [1, "panel-head"], [1, "panel-body"], [1, "table-scroll"], [1, "ts-table"], [2, "width", "190px"], [1, "badge", "badge-gold", 2, "margin-right", "5px"], [1, "form-actions"], ["routerLink", "/admin", 1, "btn", "btn-gold"], ["routerLink", "/students", 1, "btn", "btn-ghost"], ["type", "button", 1, "btn", "btn-navy", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "field"], ["for", "p-current"], ["id", "p-current", "type", "password", "formControlName", "currentPassword", "inputmode", "numeric", "maxlength", "4", "autocomplete", "current-password"], ["for", "p-new"], ["id", "p-new", "type", "password", "formControlName", "newPassword", "inputmode", "numeric", "maxlength", "4", "autocomplete", "new-password"], ["type", "submit", 1, "btn", "btn-gold", 3, "disabled"], [1, "muted", 2, "font-size", ".78rem", "margin-top", "10px"]], template: function ProfilePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ts-page-banner", 0);
      \u0275\u0275elementStart(1, "main", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, ProfilePage_Conditional_3_Template, 72, 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_0_0 = ctx.auth.user()) ? 3 : -1, tmp_0_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterLink, PageBanner, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfilePage, [{
    type: Component,
    args: [{
      selector: "ts-profile",
      standalone: true,
      imports: [ReactiveFormsModule, RouterLink, DatePipe, PageBanner],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ts-page-banner heading="My Account" lede="Your account details, roles and password." />

    <main class="section">
      <div class="container" style="max-width:900px">

        @if (auth.user(); as user) {
          <section class="panel">
            <div class="panel-head"><h2>Account Details</h2></div>
            <div class="panel-body">
              <div class="table-scroll">
                <table class="ts-table">
                  <tbody>
                    <tr><th style="width:190px">Full name</th><td>{{ user.fullName }}</td></tr>
                    <tr><th>Email address</th><td>{{ user.email }}</td></tr>
                    <tr><th>Telephone</th><td>{{ user.phone || '\u2014' }}</td></tr>
                    <tr><th>Enrolment number</th><td>{{ user.enrolmentNo || '\u2014' }}</td></tr>
                    <tr>
                      <th>Roles</th>
                      <td>
                        @for (role of user.roles; track role) {
                          <span class="badge badge-gold" style="margin-right:5px">{{ role }}</span>
                        }
                      </td>
                    </tr>
                    <tr><th>Member since</th><td>{{ user.createdAt | date: 'dd MMMM y' }}</td></tr>
                    <tr><th>Last sign-in</th><td>{{ user.lastLoginAt ? (user.lastLoginAt | date: 'dd MMM y, HH:mm') : 'This session' }}</td></tr>
                  </tbody>
                </table>
              </div>

              <div class="form-actions">
                @if (auth.isContentManager()) {
                  <a class="btn btn-gold" routerLink="/admin">Open Admin Panel</a>
                }
                <a class="btn btn-ghost" routerLink="/students">Student Corner</a>
                <button type="button" class="btn btn-navy" (click)="auth.logout('/')">Sign Out</button>
              </div>
            </div>
          </section>

          <section class="panel">
            <div class="panel-head"><h2>Change Password</h2></div>
            <div class="panel-body">
              <form [formGroup]="form" (ngSubmit)="submit()">
                <div class="form-grid">
                  <div class="field">
                    <label for="p-current">Current password</label>
                    <input id="p-current" type="password" formControlName="currentPassword" inputmode="numeric" maxlength="4" autocomplete="current-password" />
                  </div>
                  <div class="field">
                    <label for="p-new">New password</label>
                    <input id="p-new" type="password" formControlName="newPassword" inputmode="numeric" maxlength="4" autocomplete="new-password" />
                  </div>
                </div>

                <div class="form-actions">
                  <button type="submit" class="btn btn-gold" [disabled]="busy() || form.invalid">
                    {{ busy() ? 'Updating\u2026' : 'Update Password' }}
                  </button>
                </div>
              </form>

              <p class="muted" style="font-size:.78rem;margin-top:10px">
                Changing your password signs you out of every device.
              </p>
            </div>
          </section>
        }

      </div>
    </main>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilePage, { className: "ProfilePage", filePath: "src/app/pages/account/profile.ts", lineNumber: 88 });
})();
export {
  ProfilePage
};
//# sourceMappingURL=chunk-YUIIEQ73.js.map
