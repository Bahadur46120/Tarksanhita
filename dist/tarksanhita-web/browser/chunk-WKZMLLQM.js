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
  FOUNDER
} from "./chunk-RHDU2RCH.js";
import {
  EmptyState,
  LoadingState
} from "./chunk-JRDIFDAI.js";
import {
  ApiService
} from "./chunk-MBQHVFNQ.js";
import {
  DatePipe,
  DecimalPipe,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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

// src/app/pages/home/home.ts
var _c0 = (a0) => ["/debates", a0];
var _c1 = (a0) => ["/notices", a0];
var _c2 = (a0) => ["/events", a0];
var _c3 = (a0) => ["/legal-topics", a0];
var _c4 = (a0) => ["/news", a0];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function HomePage_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 80);
    \u0275\u0275listener("error", function HomePage_Conditional_17_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bannerPhoto.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
function HomePage_For_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r3);
  }
}
function HomePage_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.founder.signOff);
  }
}
function HomePage_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.founder.name);
  }
}
function HomePage_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 81);
    \u0275\u0275text(2, "Name to be added");
    \u0275\u0275elementEnd()();
  }
}
function HomePage_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.founder.credentials);
  }
}
function HomePage_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 40);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 1);
  }
}
function HomePage_Conditional_97_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 85);
  }
}
function HomePage_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "span", 83);
    \u0275\u0275text(2, "Motion Before the Forum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 84);
    \u0275\u0275conditionalCreate(4, HomePage_Conditional_97_Conditional_4_Template, 1, 0, "span", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h1")(7, "a", 86);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 87);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 88)(13, "div")(14, "span", 89);
    \u0275\u0275text(15, "For the motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 90)(19, "span", 89);
    \u0275\u0275text(20, "Against the motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 91)(24, "div", 92);
    \u0275\u0275element(25, "span", 93)(26, "span", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 95)(28, "span", 96);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 97);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "p", 98)(33, "b");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " debating ");
    \u0275\u0275elementStart(36, "i", 14);
    \u0275\u0275text(37, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "b");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " arguments ");
    \u0275\u0275elementStart(41, "i", 14);
    \u0275\u0275text(42, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "b");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " rebuttals ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 99)(47, "a", 100);
    \u0275\u0275text(48, "Read the Motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "a", 101);
    \u0275\u0275text(50, "Take a Side");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-open", f_r4.status === "Live")("badge-gold", f_r4.status !== "Live");
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r4.status === "Live" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.statusLabel(f_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c0, f_r4.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Filed under ", f_r4.topic, ". Listed for ", \u0275\u0275pipeBind2(11, 24, f_r4.scheduledFor, "d MMMM y"), ". Arguments on both sides are open to members of the forum. ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(f_r4.forSummary);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(f_r4.againstSummary);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Contributions: " + ctx_r1.forShare(f_r4) + " per cent for the motion, " + (100 - ctx_r1.forShare(f_r4)) + " per cent against");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.forShare(f_r4), "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 100 - ctx_r1.forShare(f_r4), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("For ", ctx_r1.forShare(f_r4), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", 100 - ctx_r1.forShare(f_r4), "% Against");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r4.participants.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(f_r4.argumentCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(f_r4.counterArgumentCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c0, f_r4.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(31, _c0, f_r4.slug));
  }
}
function HomePage_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "span", 83);
    \u0275\u0275text(2, "No motion listed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Be the first to open a case.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 87);
    \u0275\u0275text(6, " Nothing is before the forum at this moment. Propose a motion and it will be listed once the adjudication board has settled its terms. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 99)(8, "a", 102);
    \u0275\u0275text(9, "Propose a Motion");
    \u0275\u0275elementEnd()();
  }
}
function HomePage_For_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "time");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notice_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, notice_r5.noticeDate, "d MMM"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, notice_r5.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(notice_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notice_r5.department);
  }
}
function HomePage_ForEmpty_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 46);
    \u0275\u0275text(1, "No notices published.");
    \u0275\u0275elementEnd();
  }
}
function HomePage_For_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "time");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, event_r6.startsAt, "d MMM"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c2, event_r6.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r6.venue);
  }
}
function HomePage_ForEmpty_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 46);
    \u0275\u0275text(1, "No scheduled events.");
    \u0275\u0275elementEnd();
  }
}
function HomePage_For_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function HomePage_For_159_Template_button_click_0_listener() {
      const chip_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filter.set(chip_r8.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chip_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.filter() === chip_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chip_r8.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.countFor(chip_r8.value));
  }
}
function HomePage_Conditional_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 40);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 8);
  }
}
function HomePage_Conditional_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 55);
  }
}
function HomePage_Conditional_162_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 85);
  }
}
function HomePage_Conditional_162_For_2_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 115);
    \u0275\u0275text(1, "Join This Debate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 116);
    \u0275\u0275text(3, "Read Arguments");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const debate_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, debate_r9.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, debate_r9.slug));
  }
}
function HomePage_Conditional_162_For_2_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 114);
    \u0275\u0275text(1, "Read the Verdict");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const debate_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, debate_r9.slug));
  }
}
function HomePage_Conditional_162_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 105)(1, "div", 106)(2, "div", 107);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 84);
    \u0275\u0275conditionalCreate(5, HomePage_Conditional_162_For_2_Conditional_5_Template, 1, 0, "span", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3")(8, "a", 86);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 108)(11, "div")(12, "b");
    \u0275\u0275text(13, "For");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 90)(17, "b");
    \u0275\u0275text(18, "Against");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 91)(22, "div", 109);
    \u0275\u0275element(23, "span", 93)(24, "span", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 110)(26, "span")(27, "b");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " debating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span")(31, "b");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " contributions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 111);
    \u0275\u0275element(36, "use", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 113);
    \u0275\u0275conditionalCreate(40, HomePage_Conditional_162_For_2_Conditional_40_Template, 4, 6)(41, HomePage_Conditional_162_For_2_Conditional_41_Template, 2, 3, "a", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const debate_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(debate_r9.topic);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-open", debate_r9.status === "Live")("badge-gold", debate_r9.status === "Draft")("badge-navy", debate_r9.status === "Archived" || debate_r9.status === "Closed");
    \u0275\u0275advance();
    \u0275\u0275conditional(debate_r9.status === "Live" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.statusLabel(debate_r9), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c0, debate_r9.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(debate_r9.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(debate_r9.forSummary);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(debate_r9.againstSummary);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.forShare(debate_r9), "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 100 - ctx_r1.forShare(debate_r9), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(debate_r9.participants.length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.totalArguments(debate_r9));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 21, debate_r9.scheduledFor, "dd MMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(debate_r9.discussionOpen && debate_r9.status !== "Archived" ? 40 : 41);
  }
}
function HomePage_Conditional_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275repeaterCreate(1, HomePage_Conditional_162_For_2_Template, 42, 26, "article", 105, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visibleDebates());
  }
}
function HomePage_Conditional_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 40);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 6);
  }
}
function HomePage_Conditional_176_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 117)(1, "span", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg");
    \u0275\u0275element(3, "use");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span")(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 119);
    \u0275\u0275text(10, "Enter \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const topic_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c3, topic_r10.slug));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("href", ctx_r1.iconFor(topic_r10.iconKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(topic_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r10.summary);
  }
}
function HomePage_Conditional_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275repeaterCreate(1, HomePage_Conditional_176_For_2_Template, 11, 6, "a", 117, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.topics());
  }
}
function HomePage_For_227_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const topic_r11 = ctx.$implicit;
    \u0275\u0275property("value", topic_r11.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(topic_r11.title);
  }
}
function HomePage_Conditional_231_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Filing as ", ctx_r1.auth.displayName(), ". The motion goes to the adjudication board for a definitional check before it opens. ");
  }
}
function HomePage_Conditional_232_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " You will be asked to sign in before the motion is filed. Registration is free and takes a minute. ");
  }
}
function HomePage_For_280_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 78)(1, "time");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3")(5, "a", 86);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 120);
    \u0275\u0275text(10, "Read");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, item_r12.publishedAt, "d MMMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c4, item_r12.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.summary);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c4, item_r12.slug));
  }
}
function HomePage_ForEmpty_281_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275text(1, "No news published.");
    \u0275\u0275elementEnd();
  }
}
var HomePage = class _HomePage {
  api = inject(ApiService);
  router = inject(Router);
  auth = inject(AuthService);
  founder = FOUNDER;
  /** Dateline for the front-page masthead. */
  today = /* @__PURE__ */ new Date();
  /**
   * Whether the optional banner photograph is present. It is assumed present so
   * the <img> is attempted; the tag's own error handler clears this when the file is
   * missing, and the banner falls back to its typographic form with no broken image.
   */
  bannerPhoto = signal(true, ...ngDevMode ? [{ debugName: "bannerPhoto" }] : []);
  data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  filter = signal("", ...ngDevMode ? [{ debugName: "filter" }] : []);
  /** Quick-start panel state. */
  quickMotion = "";
  quickTopic = "";
  chips = [
    { label: "All Motions", value: "" },
    { label: "Live Now", value: "Live" },
    { label: "Opening Soon", value: "Draft" },
    { label: "Decided", value: "Archived" }
  ];
  debates = computed(() => this.data()?.debates ?? [], ...ngDevMode ? [{ debugName: "debates" }] : []);
  topics = computed(() => this.data()?.topics ?? [], ...ngDevMode ? [{ debugName: "topics" }] : []);
  notices = computed(() => this.data()?.notices?.slice(0, 5) ?? [], ...ngDevMode ? [{ debugName: "notices" }] : []);
  news = computed(() => this.data()?.news?.slice(0, 3) ?? [], ...ngDevMode ? [{ debugName: "news" }] : []);
  events = computed(() => this.data()?.events?.slice(0, 4) ?? [], ...ngDevMode ? [{ debugName: "events" }] : []);
  visibleDebates = computed(() => {
    const all = this.debates();
    const f = this.filter();
    return f ? all.filter((d) => d.status === f) : all;
  }, ...ngDevMode ? [{ debugName: "visibleDebates" }] : []);
  /** The motion featured beside the hero copy — the busiest live one. */
  featured = computed(() => {
    const live = this.debates().filter((d) => d.status === "Live");
    const pool = live.length ? live : this.debates();
    if (!pool.length)
      return null;
    return [...pool].sort((a, b) => this.totalArguments(b) - this.totalArguments(a))[0];
  }, ...ngDevMode ? [{ debugName: "featured" }] : []);
  /** Headline counters for the hero strip. */
  stats = computed(() => {
    const all = this.debates();
    return {
      live: all.filter((d) => d.status === "Live").length,
      arguments: all.reduce((sum, d) => sum + this.totalArguments(d), 0),
      debaters: all.reduce((sum, d) => sum + d.participants.length, 0),
      topics: this.topics().length
    };
  }, ...ngDevMode ? [{ debugName: "stats" }] : []);
  ngOnInit() {
    this.api.get("home").subscribe({
      next: (payload) => {
        this.data.set(payload);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  countFor(value) {
    return value ? this.debates().filter((d) => d.status === value).length : this.debates().length;
  }
  totalArguments(debate) {
    return debate.argumentCount + debate.counterArgumentCount;
  }
  /**
   * Share of contributions on each side, used by the balance meter. Falls back to
   * an even split when a motion has no arguments yet, so the bar never collapses.
   */
  forShare(debate) {
    const total = this.totalArguments(debate);
    if (!total)
      return 50;
    return Math.round(debate.argumentCount / total * 100);
  }
  statusLabel(debate) {
    switch (debate.status) {
      case "Draft":
        return "Opening Soon";
      case "Archived":
        return "Decided";
      case "Closed":
        return "Closed";
      default:
        return "Live";
    }
  }
  iconFor(key) {
    const known = ["scale", "building", "gavel", "doc", "chip", "globe", "bulb", "shield", "book", "flask", "people"];
    return `#i-${key && known.includes(key) ? key : "scale"}`;
  }
  /** Carries whatever the visitor typed into the full submission form. */
  startDebate() {
    void this.router.navigate(["/debates/start"], {
      queryParams: {
        motion: this.quickMotion.trim() || null,
        topic: this.quickTopic || null
      }
    });
  }
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["ts-home"]], decls: 282, vars: 35, consts: [[1, "front-masthead"], [1, "container"], [1, "fm-row"], [1, "fm-title"], [1, "fm-meta"], ["aria-hidden", "true", 1, "sep"], [1, "front-banner"], ["src", "assets/brand/banner.svg", "alt", "Members of the forum debating a motion", 1, "banner-photo"], [1, "banner-grid"], [1, "banner-copy"], [1, "banner-title"], [1, "banner-tagline"], [1, "banner-rule"], [1, "banner-features"], ["aria-hidden", "true"], ["href", "#i-people"], ["href", "#i-chat"], ["href", "#i-award"], ["href", "#i-bulb"], ["routerLink", "/debates/start", 1, "btn", "btn-gold", "banner-cta"], [1, "banner-quote"], [1, "bq-rule"], [1, "bq-attrib"], [1, "forum-section", "front-founder"], [1, "sec-head"], [1, "kicker"], [1, "founder"], [1, "founder-photo"], [3, "src", "alt"], [1, "signoff"], [1, "founder-attrib"], [1, "founder-name"], [1, "founder-role"], [1, "founder-cred"], [1, "founder-actions"], ["routerLink", "/institution", 1, "btn", "btn-ghost", "btn-sm"], ["routerLink", "/about", 1, "btn", "btn-ghost", "btn-sm"], [1, "front-lead"], [1, "fl-grid"], [1, "lead"], [3, "count"], [1, "rail"], [1, "rail-block"], [1, "rail-head"], ["routerLink", "/notices"], [1, "rail-notices"], [1, "none"], ["routerLink", "/events"], [1, "rail-diary"], [1, "front-statement"], [1, "front-figures"], ["id", "motions", 1, "forum-section"], ["routerLink", "/debates", 1, "btn", "btn-ghost"], [1, "chips"], ["type", "button", 1, "chip", 3, "active"], ["heading", "No motions in this category", "body", "Try another filter, or propose a motion of your own \u2014 the forum runs on what its members bring to it."], [1, "motion-grid"], ["id", "topics", 1, "forum-section", "tint"], ["routerLink", "/legal-topics", 1, "btn", "btn-ghost"], [1, "topic-grid"], [1, "forum-section"], [1, "steps"], [1, "step"], [1, "num"], [1, "quickstart"], [1, "qs-row"], ["type", "text", "name", "quickMotion", "aria-label", "Your motion", "placeholder", "This House believes that\u2026", 3, "ngModelChange", "ngModel"], ["name", "quickTopic", "aria-label", "Subject area", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "button", 1, "btn", "btn-navy", 3, "click"], [1, "hint"], [1, "forum-section", "tint"], ["routerLink", "/library", 1, "btn", "btn-ghost"], [1, "charter"], [1, "charter-item"], ["routerLink", "/institution", 1, "btn", "btn-navy"], [1, "news-columns"], [1, "news-col"], [1, "muted", "mb-0"], ["src", "assets/brand/banner.svg", "alt", "Members of the forum debating a motion", 1, "banner-photo", 3, "error"], [1, "name-pending"], [1, "lead-rubric"], [1, "label"], [1, "badge"], [1, "live-dot"], [3, "routerLink"], [1, "standfirst"], [1, "deck"], [1, "side"], [1, "no"], [1, "balance"], ["role", "img", 1, "balance-bar"], [1, "for"], [1, "against"], [1, "balance-legend"], [1, "l"], [1, "r"], [1, "lead-byline"], [1, "lead-actions"], [1, "btn", "btn-navy", 3, "routerLink"], ["fragment", "discussion", 1, "btn", "btn-ghost", 3, "routerLink"], ["routerLink", "/debates/start", 1, "btn", "btn-navy"], ["type", "button", 1, "chip", 3, "click"], [1, "n"], [1, "motion"], [1, "m-top"], [1, "m-topic"], [1, "m-stance"], [1, "balance-bar"], [1, "m-meta"], ["width", "12", "height", "12"], ["href", "#i-cal"], [1, "m-actions"], ["fragment", "verdict", 1, "btn", "btn-navy", "btn-sm", 3, "routerLink"], ["fragment", "discussion", 1, "btn", "btn-gold", "btn-sm", 3, "routerLink"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"], [1, "topic-tile", 3, "routerLink"], [1, "ic"], [1, "cnt"], [1, "read-more", 3, "routerLink"]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "The Debate on Logic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "span");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "span", 5);
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "span", 5);
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "number");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(16, "section", 6);
      \u0275\u0275conditionalCreate(17, HomePage_Conditional_17_Template, 1, 0, "img", 7);
      \u0275\u0275elementStart(18, "div", 1)(19, "div", 8)(20, "div", 9)(21, "h2", 10);
      \u0275\u0275text(22, " Tarksanhita ");
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Debate Forum");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "p", 11);
      \u0275\u0275text(26, "Express \xB7 Challenge \xB7 Persuade \xB7 Enlighten");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "div", 12);
      \u0275\u0275elementStart(28, "ul", 13)(29, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 14);
      \u0275\u0275element(31, "use", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "b");
      \u0275\u0275text(33, "Connect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "with fellow members");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 14);
      \u0275\u0275element(38, "use", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "b");
      \u0275\u0275text(40, "Debate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "on diverse motions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 14);
      \u0275\u0275element(45, "use", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(46, "b");
      \u0275\u0275text(47, "Improve");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "your critical thinking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(51, "svg", 14);
      \u0275\u0275element(52, "use", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "b");
      \u0275\u0275text(54, "Inspire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span");
      \u0275\u0275text(56, "and be inspired");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "a", 19);
      \u0275\u0275text(58, " Raise Your Voice \u2014 Shape Your Future ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "aside", 20)(60, "blockquote");
      \u0275\u0275text(61, "Great debates build better leaders.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "div", 21);
      \u0275\u0275elementStart(63, "p", 22);
      \u0275\u0275text(64, "Centre for Law, Logic, Debate & Knowledge");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "section", 23)(66, "div", 1)(67, "div", 24)(68, "div")(69, "div", 25);
      \u0275\u0275text(70, "From the Founder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "h2");
      \u0275\u0275text(72, "Founder\u2019s Message");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 26)(74, "div", 27);
      \u0275\u0275element(75, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div")(77, "blockquote");
      \u0275\u0275repeaterCreate(78, HomePage_For_79_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(80, HomePage_Conditional_80_Template, 2, 1, "div", 29);
      \u0275\u0275elementStart(81, "div", 30);
      \u0275\u0275conditionalCreate(82, HomePage_Conditional_82_Template, 2, 1, "div", 31)(83, HomePage_Conditional_83_Template, 3, 0, "div", 31);
      \u0275\u0275elementStart(84, "div", 32);
      \u0275\u0275text(85);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(86, HomePage_Conditional_86_Template, 2, 1, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 34)(88, "a", 35);
      \u0275\u0275text(89, "About the Centre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "a", 36);
      \u0275\u0275text(91, "Vision & Mission");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(92, "section", 37)(93, "div", 1)(94, "div", 38)(95, "article", 39);
      \u0275\u0275conditionalCreate(96, HomePage_Conditional_96_Template, 1, 1, "ts-loading-state", 40)(97, HomePage_Conditional_97_Template, 51, 33)(98, HomePage_Conditional_98_Template, 10, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "aside", 41)(100, "section", 42)(101, "h2", 43);
      \u0275\u0275text(102, "Notice Board ");
      \u0275\u0275elementStart(103, "a", 44);
      \u0275\u0275text(104, "All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "ul", 45);
      \u0275\u0275repeaterCreate(106, HomePage_For_107_Template, 8, 9, "li", null, _forTrack0, false, HomePage_ForEmpty_108_Template, 2, 0, "li", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "section", 42)(110, "h2", 43);
      \u0275\u0275text(111, "Diary ");
      \u0275\u0275elementStart(112, "a", 47);
      \u0275\u0275text(113, "All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "ul", 48);
      \u0275\u0275repeaterCreate(115, HomePage_For_116_Template, 8, 9, "li", null, _forTrack0, false, HomePage_ForEmpty_117_Template, 2, 0, "li", 46);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(118, "section", 49)(119, "div", 1)(120, "p");
      \u0275\u0275text(121, " Motions are published in advance, argued under recorded rules, and decided by adjudicators who must give written reasons. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "dl", 50)(123, "div")(124, "dt");
      \u0275\u0275text(125, "Live Motions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "dd");
      \u0275\u0275text(127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div")(129, "dt");
      \u0275\u0275text(130, "Arguments Filed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "dd");
      \u0275\u0275text(132);
      \u0275\u0275pipe(133, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div")(135, "dt");
      \u0275\u0275text(136, "Members Debating");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "dd");
      \u0275\u0275text(138);
      \u0275\u0275pipe(139, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div")(141, "dt");
      \u0275\u0275text(142, "Subject Areas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "dd");
      \u0275\u0275text(144);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(145, "section", 51)(146, "div", 1)(147, "div", 24)(148, "div")(149, "div", 25);
      \u0275\u0275text(150, "Before the Forum");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "h2");
      \u0275\u0275text(152, "Motions Open Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "p");
      \u0275\u0275text(154, "Every motion is listed with the case on each side, so a member can judge where the argument stands before joining it.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "a", 52);
      \u0275\u0275text(156, "All Motions & Archive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 53);
      \u0275\u0275repeaterCreate(158, HomePage_For_159_Template, 4, 4, "button", 54, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(160, HomePage_Conditional_160_Template, 1, 1, "ts-loading-state", 40)(161, HomePage_Conditional_161_Template, 1, 0, "ts-empty-state", 55)(162, HomePage_Conditional_162_Template, 3, 0, "div", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "section", 57)(164, "div", 1)(165, "div", 24)(166, "div")(167, "div", 25);
      \u0275\u0275text(168, "Subject Areas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "h2");
      \u0275\u0275text(170, "Where Motions Are Filed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "p");
      \u0275\u0275text(172, "Motions are filed under subject areas so members can follow the arguments in their own field.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "a", 58);
      \u0275\u0275text(174, "All Subject Areas");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(175, HomePage_Conditional_175_Template, 1, 1, "ts-loading-state", 40)(176, HomePage_Conditional_176_Template, 3, 0, "div", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "section", 60)(178, "div", 1)(179, "div", 24)(180, "div")(181, "div", 25);
      \u0275\u0275text(182, "Procedure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "h2");
      \u0275\u0275text(184, "How a Motion Is Decided");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "p");
      \u0275\u0275text(186, "The format is deliberately strict. It is what separates a debate from an argument.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(187, "ol", 61)(188, "li", 62)(189, "div", 63);
      \u0275\u0275text(190, "I");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "h4");
      \u0275\u0275text(192, "Declare a position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "p");
      \u0275\u0275text(194, "Read the motion and its definitional note, then declare for or against. The position is recorded before any argument is filed.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "li", 62)(196, "div", 63);
      \u0275\u0275text(197, "II");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "h4");
      \u0275\u0275text(199, "File the argument");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "p");
      \u0275\u0275text(201, "State the claim, give the reason it follows, then cite the evidence for the reason. Assertions offered without support are marked as such.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "li", 62)(203, "div", 63);
      \u0275\u0275text(204, "III");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "h4");
      \u0275\u0275text(206, "Answer the other side");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "p");
      \u0275\u0275text(208, "A rebuttal addresses a specific argument, not the member who made it, and is threaded beneath the point it answers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "li", 62)(210, "div", 63);
      \u0275\u0275text(211, "IV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "h4");
      \u0275\u0275text(213, "Adjudication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "p");
      \u0275\u0275text(215, "Adjudicators publish written reasons against the criteria in the rulebook. Any decision may be appealed within fourteen days.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(216, "div", 64)(217, "h3");
      \u0275\u0275text(218, "Have a motion in mind?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "p");
      \u0275\u0275text(220, "Write it as a proposition someone could reasonably oppose \u2014 that is what makes it debatable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 65)(222, "input", 66);
      \u0275\u0275twoWayListener("ngModelChange", function HomePage_Template_input_ngModelChange_222_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.quickMotion, $event) || (ctx.quickMotion = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "select", 67);
      \u0275\u0275twoWayListener("ngModelChange", function HomePage_Template_select_ngModelChange_223_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.quickTopic, $event) || (ctx.quickTopic = $event);
        return $event;
      });
      \u0275\u0275elementStart(224, "option", 68);
      \u0275\u0275text(225, "Subject area\u2026");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(226, HomePage_For_227_Template, 2, 2, "option", 69, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "button", 70);
      \u0275\u0275listener("click", function HomePage_Template_button_click_228_listener() {
        return ctx.startDebate();
      });
      \u0275\u0275text(229, "Submit for Filing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "p", 71);
      \u0275\u0275conditionalCreate(231, HomePage_Conditional_231_Template, 1, 1)(232, HomePage_Conditional_232_Template, 1, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(233, "section", 72)(234, "div", 1)(235, "div", 24)(236, "div")(237, "div", 25);
      \u0275\u0275text(238, "Rules of Engagement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "h2");
      \u0275\u0275text(240, "The Forum Charter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "p");
      \u0275\u0275text(242, "Four rules, enforced by moderators and by the adjudication panel. Breaches are removed, not argued with.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "a", 73);
      \u0275\u0275text(244, "Read the Rulebook");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "ol", 74)(246, "li", 75)(247, "b");
      \u0275\u0275text(248, "Attack the argument");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "span");
      \u0275\u0275text(250, "Address what was said. A submission that characterises the member rather than the claim is withdrawn without notice.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "li", 75)(252, "b");
      \u0275\u0275text(253, "Cite what you claim");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "span");
      \u0275\u0275text(255, "Statute, judgment, data or source. A point with no support may still be filed, but it is weighed as an assertion.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "li", 75)(257, "b");
      \u0275\u0275text(258, "Read before you rebut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "span");
      \u0275\u0275text(260, "Rebuttals are threaded beneath a specific argument. Restating your own case is not a reply to theirs.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "li", 75)(262, "b");
      \u0275\u0275text(263, "Concede when you are wrong");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "span");
      \u0275\u0275text(265, "A recorded concession costs nothing and is respected. Holding a defeated position costs the debate its point.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(266, "section", 60)(267, "div", 1)(268, "div", 24)(269, "div")(270, "div", 25);
      \u0275\u0275text(271, "From the Centre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "h2");
      \u0275\u0275text(273, "Notices, News & Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "p");
      \u0275\u0275text(275, "Tarksanhita is a centre for law, logic, debate and knowledge. The forum is one part of it.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "a", 76);
      \u0275\u0275text(277, "Visit the Institution Pages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "div", 77);
      \u0275\u0275repeaterCreate(279, HomePage_For_280_Template, 11, 12, "article", 78, _forTrack0, false, HomePage_ForEmpty_281_Template, 2, 0, "p", 79);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_12_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 26, ctx.today, "EEEE, d MMMM y"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.stats().live, " motion", ctx.stats().live === 1 ? "" : "s", " live");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("No. ", \u0275\u0275pipeBind1(15, 29, ctx.stats().arguments), " arguments filed");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("has-photo", ctx.bannerPhoto());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.bannerPhoto() ? 17 : -1);
      \u0275\u0275advance(58);
      \u0275\u0275property("src", ctx.founder.photo, \u0275\u0275sanitizeUrl)("alt", ctx.founder.name || ctx.founder.role);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.founder.message);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.founder.signOff ? 80 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.founder.name ? 82 : 83);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.founder.role);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.founder.credentials ? 86 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 96 : (tmp_12_0 = ctx.featured()) ? 97 : 98, tmp_12_0);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.notices());
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.events());
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.stats().live);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(133, 31, ctx.stats().arguments));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(139, 33, ctx.stats().debaters));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.stats().topics);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.chips);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 160 : !ctx.visibleDebates().length ? 161 : 162);
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.loading() ? 175 : 176);
      \u0275\u0275advance(47);
      \u0275\u0275twoWayProperty("ngModel", ctx.quickMotion);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.quickTopic);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.topics());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 231 : 232);
      \u0275\u0275advance(48);
      \u0275\u0275repeater(ctx.news());
    }
  }, dependencies: [RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, LoadingState, EmptyState, DatePipe, DecimalPipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "ts-home", standalone: true, imports: [RouterLink, DatePipe, DecimalPipe, FormsModule, LoadingState, EmptyState], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- ============================================================ FRONT PAGE MASTHEAD -->
<section class="front-masthead">
  <div class="container">
    <div class="fm-row">
      <div class="fm-title">The Debate on Logic</div>
      <div class="fm-meta">
        <span>{{ today | date: 'EEEE, d MMMM y' }}</span>
        <span class="sep" aria-hidden="true"></span>
        <span>{{ stats().live }} motion{{ stats().live === 1 ? '' : 's' }} live</span>
        <span class="sep" aria-hidden="true"></span>
        <span>No. {{ stats().arguments | number }} arguments filed</span>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ BANNER -->
<section class="front-banner" [class.has-photo]="bannerPhoto()">

  <!-- The banner illustration. To use a photograph instead, save it as
       banner.jpg here and change the src below; if the file is ever missing the
       error handler drops the image and the banner falls back to type alone. -->
  @if (bannerPhoto()) {
    <img class="banner-photo"
         src="assets/brand/banner.svg"
         alt="Members of the forum debating a motion"
         (error)="bannerPhoto.set(false)" />
  }

  <div class="container">
    <div class="banner-grid">

      <div class="banner-copy">
        <h2 class="banner-title">
          Tarksanhita
          <span>Debate Forum</span>
        </h2>

        <p class="banner-tagline">Express &middot; Challenge &middot; Persuade &middot; Enlighten</p>
        <div class="banner-rule"></div>

        <ul class="banner-features">
          <li>
            <svg aria-hidden="true"><use href="#i-people" /></svg>
            <b>Connect</b>
            <span>with fellow members</span>
          </li>
          <li>
            <svg aria-hidden="true"><use href="#i-chat" /></svg>
            <b>Debate</b>
            <span>on diverse motions</span>
          </li>
          <li>
            <svg aria-hidden="true"><use href="#i-award" /></svg>
            <b>Improve</b>
            <span>your critical thinking</span>
          </li>
          <li>
            <svg aria-hidden="true"><use href="#i-bulb" /></svg>
            <b>Inspire</b>
            <span>and be inspired</span>
          </li>
        </ul>

        <a class="btn btn-gold banner-cta" routerLink="/debates/start">
          Raise Your Voice &mdash; Shape Your Future
        </a>
      </div>

      <aside class="banner-quote">
        <blockquote>Great debates build better leaders.</blockquote>
        <div class="bq-rule"></div>
        <p class="bq-attrib">Centre for Law, Logic, Debate &amp; Knowledge</p>
      </aside>

    </div>
  </div>
</section>

<!-- ============================================================ FOUNDER -->
<section class="forum-section front-founder">
  <div class="container">
    <div class="sec-head">
      <div>
        <div class="kicker">From the Founder</div>
        <h2>Founder&rsquo;s Message</h2>
      </div>
    </div>

    <div class="founder">

      <div class="founder-photo">
        <img [src]="founder.photo" [alt]="founder.name || founder.role" />
      </div>

      <div>
        <blockquote>
          @for (paragraph of founder.message; track $index) {
            <p>{{ paragraph }}</p>
          }
        </blockquote>

        @if (founder.signOff) {
          <div class="signoff">{{ founder.signOff }}</div>
        }

        <div class="founder-attrib">
          @if (founder.name) {
            <div class="founder-name">{{ founder.name }}</div>
          } @else {
            <!-- No name is shown until a real one is set in core/founder.ts. -->
            <div class="founder-name"><span class="name-pending">Name to be added</span></div>
          }
          <div class="founder-role">{{ founder.role }}</div>
          @if (founder.credentials) {
            <div class="founder-cred">{{ founder.credentials }}</div>
          }
        </div>

        <div class="founder-actions">
          <a class="btn btn-ghost btn-sm" routerLink="/institution">About the Centre</a>
          <a class="btn btn-ghost btn-sm" routerLink="/about">Vision &amp; Mission</a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ LEAD -->
<section class="front-lead">
  <div class="container">
    <div class="fl-grid">

      <!-- lead article: the busiest live motion -->
      <article class="lead">
        @if (loading()) {
          <ts-loading-state [count]="1" />
        } @else if (featured(); as f) {
          <div class="lead-rubric">
            <span class="label">Motion Before the Forum</span>
            <span class="badge"
                  [class.badge-open]="f.status === 'Live'"
                  [class.badge-gold]="f.status !== 'Live'">
              @if (f.status === 'Live') { <span class="live-dot"></span> }{{ statusLabel(f) }}
            </span>
          </div>

          <h1><a [routerLink]="['/debates', f.slug]">{{ f.title }}</a></h1>

          <p class="standfirst">
            Filed under {{ f.topic }}. Listed for {{ f.scheduledFor | date: 'd MMMM y' }}.
            Arguments on both sides are open to members of the forum.
          </p>

          <div class="deck">
            <div>
              <span class="side">For the motion</span>
              <p>{{ f.forSummary }}</p>
            </div>
            <div class="no">
              <span class="side">Against the motion</span>
              <p>{{ f.againstSummary }}</p>
            </div>
          </div>

          <div class="balance">
            <div class="balance-bar" role="img"
                 [attr.aria-label]="'Contributions: ' + forShare(f) + ' per cent for the motion, ' + (100 - forShare(f)) + ' per cent against'">
              <span class="for" [style.width.%]="forShare(f)"></span>
              <span class="against" [style.width.%]="100 - forShare(f)"></span>
            </div>
            <div class="balance-legend">
              <span class="l">For {{ forShare(f) }}%</span>
              <span class="r">{{ 100 - forShare(f) }}% Against</span>
            </div>
          </div>

          <p class="lead-byline">
            <b>{{ f.participants.length }}</b> debating
            <i aria-hidden="true">/</i>
            <b>{{ f.argumentCount }}</b> arguments
            <i aria-hidden="true">/</i>
            <b>{{ f.counterArgumentCount }}</b> rebuttals
          </p>

          <div class="lead-actions">
            <a class="btn btn-navy" [routerLink]="['/debates', f.slug]">Read the Motion</a>
            <a class="btn btn-ghost" [routerLink]="['/debates', f.slug]" fragment="discussion">Take a Side</a>
          </div>
        } @else {
          <div class="lead-rubric"><span class="label">No motion listed</span></div>
          <h1>Be the first to open a case.</h1>
          <p class="standfirst">
            Nothing is before the forum at this moment. Propose a motion and it will be
            listed once the adjudication board has settled its terms.
          </p>

          <div class="lead-actions">
            <a class="btn btn-navy" routerLink="/debates/start">Propose a Motion</a>
          </div>
        }
      </article>

      <!-- rail: notices and diary -->
      <aside class="rail">
        <section class="rail-block">
          <h2 class="rail-head">Notice Board <a routerLink="/notices">All</a></h2>
          <ul class="rail-notices">
            @for (notice of notices(); track notice.id) {
              <li>
                <time>{{ notice.noticeDate | date: 'd MMM' }}</time>
                <a [routerLink]="['/notices', notice.slug]">{{ notice.title }}</a>
                <small>{{ notice.department }}</small>
              </li>
            } @empty {
              <li class="none">No notices published.</li>
            }
          </ul>
        </section>

        <section class="rail-block">
          <h2 class="rail-head">Diary <a routerLink="/events">All</a></h2>
          <ul class="rail-diary">
            @for (event of events(); track event.id) {
              <li>
                <time>{{ event.startsAt | date: 'd MMM' }}</time>
                <a [routerLink]="['/events', event.slug]">{{ event.title }}</a>
                <small>{{ event.venue }}</small>
              </li>
            } @empty {
              <li class="none">No scheduled events.</li>
            }
          </ul>
        </section>
      </aside>

    </div>
  </div>
</section>

<!-- ============================================================ STATEMENT -->
<section class="front-statement">
  <div class="container">
    <p>
      Motions are published in advance, argued under recorded rules, and decided by
      adjudicators who must give written reasons.
    </p>
    <dl class="front-figures">
      <div>
        <dt>Live Motions</dt>
        <dd>{{ stats().live }}</dd>
      </div>
      <div>
        <dt>Arguments Filed</dt>
        <dd>{{ stats().arguments | number }}</dd>
      </div>
      <div>
        <dt>Members Debating</dt>
        <dd>{{ stats().debaters | number }}</dd>
      </div>
      <div>
        <dt>Subject Areas</dt>
        <dd>{{ stats().topics }}</dd>
      </div>
    </dl>
  </div>
</section>

<!-- ============================================================ MOTIONS -->
<section class="forum-section" id="motions">
  <div class="container">

    <div class="sec-head">
      <div>
        <div class="kicker">Before the Forum</div>
        <h2>Motions Open Now</h2>
        <p>Every motion is listed with the case on each side, so a member can judge where the argument stands before joining it.</p>
      </div>
      <a class="btn btn-ghost" routerLink="/debates">All Motions &amp; Archive</a>
    </div>

    <div class="chips">
      @for (chip of chips; track chip.value) {
        <button type="button"
                class="chip"
                [class.active]="filter() === chip.value"
                (click)="filter.set(chip.value)">
          {{ chip.label }}
          <span class="n">{{ countFor(chip.value) }}</span>
        </button>
      }
    </div>

    @if (loading()) {
      <ts-loading-state [count]="8" />
    } @else if (!visibleDebates().length) {
      <ts-empty-state
        heading="No motions in this category"
        body="Try another filter, or propose a motion of your own \u2014 the forum runs on what its members bring to it." />
    } @else {
      <div class="motion-grid">
        @for (debate of visibleDebates(); track debate.id) {
          <article class="motion">
            <div class="m-top">
              <div class="m-topic">{{ debate.topic }}</div>
              <span class="badge"
                    [class.badge-open]="debate.status === 'Live'"
                    [class.badge-gold]="debate.status === 'Draft'"
                    [class.badge-navy]="debate.status === 'Archived' || debate.status === 'Closed'">
                @if (debate.status === 'Live') { <span class="live-dot"></span> }{{ statusLabel(debate) }}
              </span>
            </div>

            <h3><a [routerLink]="['/debates', debate.slug]">{{ debate.title }}</a></h3>

            <div class="m-stance">
              <div>
                <b>For</b>
                <p>{{ debate.forSummary }}</p>
              </div>
              <div class="no">
                <b>Against</b>
                <p>{{ debate.againstSummary }}</p>
              </div>
            </div>

            <div class="balance">
              <div class="balance-bar">
                <span class="for" [style.width.%]="forShare(debate)"></span>
                <span class="against" [style.width.%]="100 - forShare(debate)"></span>
              </div>
            </div>

            <div class="m-meta">
              <span><b>{{ debate.participants.length }}</b> debating</span>
              <span><b>{{ totalArguments(debate) }}</b> contributions</span>
              <span><svg width="12" height="12"><use href="#i-cal" /></svg> {{ debate.scheduledFor | date: 'dd MMM y' }}</span>
            </div>

            <div class="m-actions">
              @if (debate.discussionOpen && debate.status !== 'Archived') {
                <a class="btn btn-gold btn-sm" [routerLink]="['/debates', debate.slug]" fragment="discussion">Join This Debate</a>
                <a class="btn btn-ghost btn-sm" [routerLink]="['/debates', debate.slug]">Read Arguments</a>
              } @else {
                <a class="btn btn-navy btn-sm" [routerLink]="['/debates', debate.slug]" fragment="verdict">Read the Verdict</a>
              }
            </div>
          </article>
        }
      </div>
    }

  </div>
</section>

<!-- ============================================================ TOPICS -->
<section class="forum-section tint" id="topics">
  <div class="container">

    <div class="sec-head">
      <div>
        <div class="kicker">Subject Areas</div>
        <h2>Where Motions Are Filed</h2>
        <p>Motions are filed under subject areas so members can follow the arguments in their own field.</p>
      </div>
      <a class="btn btn-ghost" routerLink="/legal-topics">All Subject Areas</a>
    </div>

    @if (loading()) {
      <ts-loading-state [count]="6" />
    } @else {
      <div class="topic-grid">
        @for (topic of topics(); track topic.id) {
          <a class="topic-tile" [routerLink]="['/legal-topics', topic.slug]">
            <span class="ic"><svg><use [attr.href]="iconFor(topic.iconKey)" /></svg></span>
            <span>
              <b>{{ topic.title }}</b>
              <small>{{ topic.summary }}</small>
              <span class="cnt">Enter &rarr;</span>
            </span>
          </a>
        }
      </div>
    }

  </div>
</section>

<!-- ============================================================ PROCEDURE -->
<section class="forum-section">
  <div class="container">

    <div class="sec-head">
      <div>
        <div class="kicker">Procedure</div>
        <h2>How a Motion Is Decided</h2>
        <p>The format is deliberately strict. It is what separates a debate from an argument.</p>
      </div>
    </div>

    <ol class="steps">
      <li class="step">
        <div class="num">I</div>
        <h4>Declare a position</h4>
        <p>Read the motion and its definitional note, then declare for or against. The position is recorded before any argument is filed.</p>
      </li>
      <li class="step">
        <div class="num">II</div>
        <h4>File the argument</h4>
        <p>State the claim, give the reason it follows, then cite the evidence for the reason. Assertions offered without support are marked as such.</p>
      </li>
      <li class="step">
        <div class="num">III</div>
        <h4>Answer the other side</h4>
        <p>A rebuttal addresses a specific argument, not the member who made it, and is threaded beneath the point it answers.</p>
      </li>
      <li class="step">
        <div class="num">IV</div>
        <h4>Adjudication</h4>
        <p>Adjudicators publish written reasons against the criteria in the rulebook. Any decision may be appealed within fourteen days.</p>
      </li>
    </ol>

    <div class="quickstart">
      <h3>Have a motion in mind?</h3>
      <p>Write it as a proposition someone could reasonably oppose \u2014 that is what makes it debatable.</p>

      <div class="qs-row">
        <input type="text"
               name="quickMotion"
               [(ngModel)]="quickMotion"
               aria-label="Your motion"
               placeholder="This House believes that\u2026" />
        <select [(ngModel)]="quickTopic" name="quickTopic" aria-label="Subject area">
          <option value="">Subject area\u2026</option>
          @for (topic of topics(); track topic.id) {
            <option [value]="topic.slug">{{ topic.title }}</option>
          }
        </select>
        <button type="button" class="btn btn-navy" (click)="startDebate()">Submit for Filing</button>
      </div>

      <p class="hint">
        @if (auth.isAuthenticated()) {
          Filing as {{ auth.displayName() }}. The motion goes to the adjudication board for a definitional check before it opens.
        } @else {
          You will be asked to sign in before the motion is filed. Registration is free and takes a minute.
        }
      </p>
    </div>

  </div>
</section>

<!-- ============================================================ CHARTER -->
<section class="forum-section tint">
  <div class="container">

    <div class="sec-head">
      <div>
        <div class="kicker">Rules of Engagement</div>
        <h2>The Forum Charter</h2>
        <p>Four rules, enforced by moderators and by the adjudication panel. Breaches are removed, not argued with.</p>
      </div>
      <a class="btn btn-ghost" routerLink="/library">Read the Rulebook</a>
    </div>

    <ol class="charter">
      <li class="charter-item">
        <b>Attack the argument</b>
        <span>Address what was said. A submission that characterises the member rather than the claim is withdrawn without notice.</span>
      </li>
      <li class="charter-item">
        <b>Cite what you claim</b>
        <span>Statute, judgment, data or source. A point with no support may still be filed, but it is weighed as an assertion.</span>
      </li>
      <li class="charter-item">
        <b>Read before you rebut</b>
        <span>Rebuttals are threaded beneath a specific argument. Restating your own case is not a reply to theirs.</span>
      </li>
      <li class="charter-item">
        <b>Concede when you are wrong</b>
        <span>A recorded concession costs nothing and is respected. Holding a defeated position costs the debate its point.</span>
      </li>
    </ol>

  </div>
</section>

<!-- ============================================================ FROM THE CENTRE -->
<section class="forum-section">
  <div class="container">

    <div class="sec-head">
      <div>
        <div class="kicker">From the Centre</div>
        <h2>Notices, News &amp; Events</h2>
        <p>Tarksanhita is a centre for law, logic, debate and knowledge. The forum is one part of it.</p>
      </div>
      <a class="btn btn-navy" routerLink="/institution">Visit the Institution Pages</a>
    </div>

    <div class="news-columns">
      @for (item of news(); track item.id) {
        <article class="news-col">
          <time>{{ item.publishedAt | date: 'd MMMM y' }}</time>
          <h3><a [routerLink]="['/news', item.slug]">{{ item.title }}</a></h3>
          <p>{{ item.summary }}</p>
          <a class="read-more" [routerLink]="['/news', item.slug]">Read</a>
        </article>
      } @empty {
        <p class="muted mb-0">No news published.</p>
      }
    </div>

  </div>
</section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/pages/home/home.ts", lineNumber: 28 });
})();
export {
  HomePage
};
//# sourceMappingURL=chunk-WKZMLLQM.js.map
