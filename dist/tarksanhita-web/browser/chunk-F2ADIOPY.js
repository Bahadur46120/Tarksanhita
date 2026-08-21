import {
  AuthService
} from "./chunk-FTSBTB32.js";
import {
  EmptyState,
  PageBanner,
  SectionTitle
} from "./chunk-JRDIFDAI.js";
import {
  ContentService
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F5R4JB2K.js";

// src/app/pages/students/students.ts
var _c0 = () => ({ returnUrl: "/students" });
var _c1 = (a0) => ["/notices", a0];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function StudentsPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "b");
    \u0275\u0275text(2, "Sign in for personalised records");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Results, assignment submission and certificates are available once you sign in with your enrolment number. Public information below is open to everyone. ");
    \u0275\u0275elementStart(4, "div", 9)(5, "a", 10);
    \u0275\u0275text(6, "Student Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 11);
    \u0275\u0275text(8, "New Registration");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function StudentsPage_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Enrolment number ", (tmp_2_0 = ctx_r0.auth.user()) == null ? null : tmp_2_0.enrolmentNo, ". ");
  }
}
function StudentsPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, StudentsPage_Conditional_4_Conditional_3_Template, 1, 1);
    \u0275\u0275text(4, " Your records are available from the links below. ");
    \u0275\u0275elementStart(5, "div", 9)(6, "a", 12);
    \u0275\u0275text(7, "My Account");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Welcome, ", ctx_r0.auth.displayName());
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.auth.user()) == null ? null : tmp_2_0.enrolmentNo) ? 3 : -1);
  }
}
function StudentsPage_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg");
    \u0275\u0275element(3, "use", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r2.link);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.note);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.requiresAuth ? "Sign-in required" : "Open access");
  }
}
function StudentsPage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 8);
  }
}
function StudentsPage_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 20)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 15)(9, "a", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 22);
    \u0275\u0275text(14, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notice_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 6, notice_r3.noticeDate, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 9, notice_r3.noticeDate, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, notice_r3.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(notice_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notice_r3.department);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c1, notice_r3.slug));
  }
}
function StudentsPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, StudentsPage_Conditional_12_For_2_Template, 15, 16, "div", 17, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "a", 19);
    \u0275\u0275text(5, "All Notices");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.notices());
  }
}
var StudentsPage = class _StudentsPage {
  content = inject(ContentService);
  auth = inject(AuthService);
  notices = signal([], ...ngDevMode ? [{ debugName: "notices" }] : []);
  links = [
    { label: "Student Login", link: "/login", requiresAuth: false, note: "Sign in with your enrolment number to reach personalised records." },
    { label: "Results", link: "/profile", requiresAuth: true, note: "Semester results and consolidated mark statements." },
    { label: "Examination", link: "/notices", requiresAuth: false, note: "Examination schedule, hall tickets and revaluation forms." },
    { label: "Assignments", link: "/profile", requiresAuth: true, note: "Submission windows, uploads and marked feedback." },
    { label: "Study Materials", link: "/library", requiresAuth: false, note: "Course-linked reading, memorial bank and the debate rulebook." },
    { label: "Events", link: "/events", requiresAuth: false, note: "Competitions, seminars and guest lectures open to students." },
    { label: "Scholarships", link: "/notices", requiresAuth: false, note: "Merit-cum-means awards and application windows." },
    { label: "Certificates", link: "/profile", requiresAuth: true, note: "Course completion, participation and bonafide certificates." },
    { label: "Downloads", link: "/admissions", requiresAuth: false, note: "Forms, the prospectus, fee structure and style guides." }
  ];
  ngOnInit() {
    this.content.for("notices").list({ pageSize: 6 }).subscribe({
      next: (res) => this.notices.set(res.items),
      error: () => this.notices.set([])
    });
  }
  static \u0275fac = function StudentsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentsPage, selectors: [["ts-students"]], decls: 13, vars: 2, consts: [["heading", "Student Corner", "lede", "Results, examination forms, assignments, scholarships, certificates and downloads \u2014 in one place."], [1, "section"], [1, "container"], [1, "side-note", 2, "margin-bottom", "22px"], [1, "acad-grid"], [1, "acad-card", 3, "routerLink"], [1, "section", "alt"], ["kicker", "Notifications", "heading", "Notices for Students", "lede", "Examination schedules, scholarship windows and circulars affecting enrolled learners."], ["heading", "No current notices", "body", "Student notifications will appear here as they are issued."], [2, "margin-top", "10px"], ["routerLink", "/login", 1, "btn", "btn-gold", "btn-sm", 3, "queryParams"], ["routerLink", "/register", 1, "btn", "btn-ghost", "btn-sm"], ["routerLink", "/profile", 1, "btn", "btn-gold", "btn-sm"], [1, "ic"], ["href", "#i-doc"], [1, "meta"], [1, "panel"], [1, "notice"], [1, "text-center", 2, "margin-top", "20px"], ["routerLink", "/notices", 1, "btn", "btn-navy"], [1, "date"], [3, "routerLink"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"]], template: function StudentsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ts-page-banner", 0);
      \u0275\u0275elementStart(1, "main", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, StudentsPage_Conditional_3_Template, 9, 2, "div", 3)(4, StudentsPage_Conditional_4_Template, 8, 2, "div", 3);
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275repeaterCreate(6, StudentsPage_For_7_Template, 11, 4, "a", 5, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section", 6)(9, "div", 2);
      \u0275\u0275element(10, "ts-section-title", 7);
      \u0275\u0275conditionalCreate(11, StudentsPage_Conditional_11_Template, 1, 0, "ts-empty-state", 8)(12, StudentsPage_Conditional_12_Template, 6, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.auth.isAuthenticated() ? 3 : 4);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.links);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.notices().length ? 11 : 12);
    }
  }, dependencies: [RouterLink, PageBanner, SectionTitle, EmptyState, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentsPage, [{
    type: Component,
    args: [{
      selector: "ts-students",
      standalone: true,
      imports: [RouterLink, DatePipe, PageBanner, SectionTitle, EmptyState],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ts-page-banner
      heading="Student Corner"
      lede="Results, examination forms, assignments, scholarships, certificates and downloads \u2014 in one place." />

    <main class="section">
      <div class="container">

        @if (!auth.isAuthenticated()) {
          <div class="side-note" style="margin-bottom:22px">
            <b>Sign in for personalised records</b>
            Results, assignment submission and certificates are available once you sign in with your
            enrolment number. Public information below is open to everyone.
            <div style="margin-top:10px">
              <a class="btn btn-gold btn-sm" routerLink="/login" [queryParams]="{ returnUrl: '/students' }">Student Login</a>
              <a class="btn btn-ghost btn-sm" routerLink="/register">New Registration</a>
            </div>
          </div>
        } @else {
          <div class="side-note" style="margin-bottom:22px">
            <b>Welcome, {{ auth.displayName() }}</b>
            @if (auth.user()?.enrolmentNo) {
              Enrolment number {{ auth.user()?.enrolmentNo }}.
            }
            Your records are available from the links below.
            <div style="margin-top:10px">
              <a class="btn btn-gold btn-sm" routerLink="/profile">My Account</a>
            </div>
          </div>
        }

        <div class="acad-grid">
          @for (item of links; track item.label) {
            <a class="acad-card" [routerLink]="item.link">
              <div class="ic"><svg><use href="#i-doc" /></svg></div>
              <h4>{{ item.label }}</h4>
              <p>{{ item.note }}</p>
              <div class="meta">
                <span>{{ item.requiresAuth ? 'Sign-in required' : 'Open access' }}</span>
              </div>
            </a>
          }
        </div>

      </div>
    </main>

    <section class="section alt">
      <div class="container">
        <ts-section-title kicker="Notifications" heading="Notices for Students"
          lede="Examination schedules, scholarship windows and circulars affecting enrolled learners." />

        @if (!notices().length) {
          <ts-empty-state heading="No current notices" body="Student notifications will appear here as they are issued." />
        } @else {
          <div class="panel">
            @for (notice of notices(); track notice.id) {
              <div class="notice">
                <div class="date">
                  <b>{{ notice.noticeDate | date: 'dd' }}</b>
                  <span>{{ notice.noticeDate | date: 'MMM' }}</span>
                </div>
                <div class="meta">
                  <a [routerLink]="['/notices', notice.slug]">{{ notice.title }}</a>
                  <small>{{ notice.department }}</small>
                </div>
                <a class="btn btn-ghost btn-sm" [routerLink]="['/notices', notice.slug]">View</a>
              </div>
            }
          </div>
          <div class="text-center" style="margin-top:20px">
            <a class="btn btn-navy" routerLink="/notices">All Notices</a>
          </div>
        }
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentsPage, { className: "StudentsPage", filePath: "src/app/pages/students/students.ts", lineNumber: 99 });
})();
export {
  StudentsPage
};
//# sourceMappingURL=chunk-F2ADIOPY.js.map
