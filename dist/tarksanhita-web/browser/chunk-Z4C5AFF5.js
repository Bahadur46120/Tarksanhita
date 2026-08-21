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
  PageBanner
} from "./chunk-JRDIFDAI.js";
import {
  ApiService,
  ContentService
} from "./chunk-MBQHVFNQ.js";
import {
  ActivatedRoute,
  DatePipe,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F5R4JB2K.js";

// src/app/pages/debates/debate-detail.ts
var _c0 = (a0) => ({ returnUrl: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function DebateDetailPage_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14)(1, "b", 25);
    \u0275\u0275text(2, "Participants:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", d_r1.participants.join(", "), " ");
  }
}
function DebateDetailPage_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15)(1, "b", 25);
    \u0275\u0275text(2, "Adjudicators:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", d_r1.adjudicators.join(", "), " ");
  }
}
function DebateDetailPage_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "b");
    \u0275\u0275text(2, "Adjudicators' Verdict");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", d_r1.verdict, " ");
  }
}
function DebateDetailPage_Conditional_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 20);
  }
}
function DebateDetailPage_Conditional_0_Conditional_53_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29)(1, "b");
    \u0275\u0275text(2, "Cited:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const argument_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", argument_r2.citations.join("; "), " ");
  }
}
function DebateDetailPage_Conditional_0_Conditional_53_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function DebateDetailPage_Conditional_0_Conditional_53_For_1_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const argument_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.startRebuttal(argument_r2));
    });
    \u0275\u0275text(1, "Rebut This");
    \u0275\u0275elementEnd();
  }
}
function DebateDetailPage_Conditional_0_Conditional_53_For_1_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rebuttal_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Counterargument \u2014 ", rebuttal_r5.side, " \u2014 ", rebuttal_r5.authorName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rebuttal_r5.text);
  }
}
function DebateDetailPage_Conditional_0_Conditional_53_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 26)(1, "div", 22)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 28)(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, DebateDetailPage_Conditional_0_Conditional_53_For_1_Conditional_10_Template, 4, 1, "p", 29);
    \u0275\u0275conditionalCreate(11, DebateDetailPage_Conditional_0_Conditional_53_For_1_Conditional_11_Template, 2, 0, "button", 30);
    \u0275\u0275repeaterCreate(12, DebateDetailPage_Conditional_0_Conditional_53_For_1_For_13_Template, 5, 3, "div", 31, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const argument_r2 = ctx.$implicit;
    const d_r1 = \u0275\u0275nextContext(2);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", argument_r2.side === "For" ? "linear-gradient(135deg,#0a1a2f,#17395f)" : "linear-gradient(135deg,#4a1f18,#7a3226)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", argument_r2.side === "For" ? "For the Motion" : "Against the Motion", " \u2014 ", argument_r2.authorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 8, argument_r2.postedAt, "dd MMM y"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(argument_r2.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(argument_r2.citations.length ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.discussionOpen && ctx_r3.auth.isAuthenticated() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.rebuttalsFor(argument_r2.id));
  }
}
function DebateDetailPage_Conditional_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DebateDetailPage_Conditional_0_Conditional_53_For_1_Template, 14, 11, "article", 26, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r3.openingArguments());
  }
}
function DebateDetailPage_Conditional_0_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, " Submissions are open to registered members. Sign in to post an argument or a rebuttal. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 35);
    \u0275\u0275text(3, "Sign In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 36);
    \u0275\u0275text(5, "Register");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c0, "/debates/" + d_r1.slug));
  }
}
function DebateDetailPage_Conditional_0_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, "This motion is closed. The record above is final; the verdict may be appealed to the review panel.");
    \u0275\u0275elementEnd();
  }
}
function DebateDetailPage_Conditional_0_Conditional_61_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "b");
    \u0275\u0275text(2, "Replying to an argument");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Your submission will be recorded as a counterargument. ");
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function DebateDetailPage_Conditional_0_Conditional_61_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.cancelRebuttal());
    });
    \u0275\u0275text(5, "Cancel reply");
    \u0275\u0275elementEnd()();
  }
}
function DebateDetailPage_Conditional_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, DebateDetailPage_Conditional_0_Conditional_61_Conditional_0_Template, 6, 0, "div", 37);
    \u0275\u0275elementStart(1, "div", 38)(2, "div", 39)(3, "label", 40);
    \u0275\u0275text(4, "Side");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function DebateDetailPage_Conditional_0_Conditional_61_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.side, $event) || (ctx_r3.side = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 42);
    \u0275\u0275text(7, "For the Motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 43);
    \u0275\u0275text(9, "Against the Motion");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 44)(11, "label", 45);
    \u0275\u0275text(12, "Your argument");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 46);
    \u0275\u0275twoWayListener("ngModelChange", function DebateDetailPage_Conditional_0_Conditional_61_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.text, $event) || (ctx_r3.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 47);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 48)(17, "button", 49);
    \u0275\u0275listener("click", function DebateDetailPage_Conditional_0_Conditional_61_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.submit());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 50);
    \u0275\u0275text(20, "Back to Debates");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.rebuts ? 0 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.side);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.text.length, " characters \xB7 minimum 10");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.submitting() ? "Submitting\u2026" : "Submit Argument", " ");
  }
}
function DebateDetailPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-page-banner", 1);
    \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "article", 4)(4, "div", 5)(5, "div")(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "div")(14, "b");
    \u0275\u0275text(15, "Opening Case \u2014 For");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "b");
    \u0275\u0275text(20, "Opening Case \u2014 Against");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 11)(24, "span")(25, "b");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span")(29, "b");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " arguments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span")(33, "b");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " counterarguments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 12);
    \u0275\u0275element(38, "use", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, DebateDetailPage_Conditional_0_Conditional_41_Template, 4, 1, "p", 14);
    \u0275\u0275conditionalCreate(42, DebateDetailPage_Conditional_0_Conditional_42_Template, 4, 1, "p", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(43, DebateDetailPage_Conditional_0_Conditional_43_Template, 4, 1, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "main", 0)(45, "div", 3)(46, "div", 17)(47, "div", 18);
    \u0275\u0275text(48, "The Record");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h2");
    \u0275\u0275text(50, "Arguments & Counterarguments");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(52, DebateDetailPage_Conditional_0_Conditional_52_Template, 1, 0, "ts-empty-state", 20)(53, DebateDetailPage_Conditional_0_Conditional_53_Template, 2, 0);
    \u0275\u0275elementStart(54, "section", 21)(55, "div", 22)(56, "h2");
    \u0275\u0275text(57, "Join the Discussion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 23);
    \u0275\u0275conditionalCreate(59, DebateDetailPage_Conditional_0_Conditional_59_Template, 6, 3)(60, DebateDetailPage_Conditional_0_Conditional_60_Template, 2, 0, "p", 24)(61, DebateDetailPage_Conditional_0_Conditional_61_Template, 21, 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const d_r1 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("heading", d_r1.title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r1.topic);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.motion);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-open", d_r1.status === "Live")("badge-gold", d_r1.status === "Draft")("badge-navy", d_r1.status === "Closed" || d_r1.status === "Archived");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r1.forSummary);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r1.againstSummary);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r1.participants.length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r1.argumentCount);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r1.counterArgumentCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 21, d_r1.scheduledFor, "dd MMMM y"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r1.participants.length ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.adjudicators.length ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.verdict ? 43 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(!ctx_r3.openingArguments().length ? 52 : 53);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx_r3.auth.isAuthenticated() ? 59 : !d_r1.discussionOpen || d_r1.status === "Closed" || d_r1.status === "Archived" ? 60 : 61);
  }
}
function DebateDetailPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "div", 52);
    \u0275\u0275element(2, "ts-loading-state", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("count", 12);
  }
}
function DebateDetailPage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "div", 52);
    \u0275\u0275element(2, "ts-empty-state", 54);
    \u0275\u0275elementStart(3, "div", 55)(4, "a", 56);
    \u0275\u0275text(5, "Back to Debates");
    \u0275\u0275elementEnd()()()();
  }
}
var DebateDetailPage = class _DebateDetailPage {
  route = inject(ActivatedRoute);
  content = inject(ContentService);
  api = inject(ApiService);
  snack = inject(MatSnackBar);
  auth = inject(AuthService);
  debate = signal(null, ...ngDevMode ? [{ debugName: "debate" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : []);
  side = "For";
  text = "";
  rebuts = null;
  /** Opening arguments only — rebuttals are nested beneath their target. */
  openingArguments = computed(() => (this.debate()?.arguments ?? []).filter((a) => !a.rebutsArgumentId && a.isApproved), ...ngDevMode ? [{ debugName: "openingArguments" }] : []);
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get("slug");
      if (!slug)
        return;
      this.loading.set(true);
      this.content.for("debates").bySlug(slug).subscribe({
        next: (d) => {
          this.debate.set(d);
          this.loading.set(false);
        },
        error: () => {
          this.debate.set(null);
          this.loading.set(false);
        }
      });
    });
  }
  rebuttalsFor(argumentId) {
    return (this.debate()?.arguments ?? []).filter((a) => a.rebutsArgumentId === argumentId && a.isApproved);
  }
  startRebuttal(argument) {
    this.rebuts = argument.id;
    this.side = argument.side === "For" ? "Against" : "For";
    document.getElementById("discussion")?.scrollIntoView({ behavior: "smooth" });
  }
  cancelRebuttal() {
    this.rebuts = null;
  }
  submit() {
    const debate = this.debate();
    if (!debate?.id)
      return;
    const body = this.text.trim();
    if (body.length < 10) {
      this.snack.open("An argument must be at least ten characters long.", "Dismiss");
      return;
    }
    this.submitting.set(true);
    this.api.post(`debates/${debate.id}/arguments`, {
      side: this.side,
      text: body,
      rebutsArgumentId: this.rebuts,
      citations: []
    }).subscribe({
      next: (res) => {
        this.snack.open(res.message, "Close", { panelClass: ["ts-snack-ok"] });
        this.text = "";
        this.rebuts = null;
        this.submitting.set(false);
        this.reload();
      },
      error: () => this.submitting.set(false)
    });
  }
  reload() {
    const slug = this.debate()?.slug;
    if (!slug)
      return;
    this.content.for("debates").bySlug(slug).subscribe({
      next: (d) => this.debate.set(d)
    });
  }
  static \u0275fac = function DebateDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DebateDetailPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DebateDetailPage, selectors: [["ts-debate-detail"]], decls: 3, vars: 1, consts: [[1, "section"], ["parentLabel", "Debates", "parentLink", "/debates", 3, "heading"], [1, "section", "deep", 2, "padding-top", "26px"], [1, "container", 2, "max-width", "1000px"], [1, "debate-card"], [1, "top"], [1, "topic"], [2, "font-size", "1.1rem"], [1, "badge"], [1, "stance"], [1, "against"], [1, "debate-meta"], ["width", "13", "height", "13"], ["href", "#i-cal"], [2, "font-size", ".8rem", "color", "#9db0c8", "margin", "0"], [2, "font-size", ".8rem", "color", "#9db0c8", "margin", "4px 0 0"], ["id", "verdict", 1, "side-note", 2, "margin-top", "18px"], [1, "sec-title", 2, "margin-bottom", "20px"], [1, "kicker"], [1, "rule"], ["heading", "No arguments recorded yet", "body", "Be the first to open a case on this motion."], ["id", "discussion", 1, "panel"], [1, "panel-head"], [1, "panel-body"], [1, "muted"], [2, "color", "var(--gold-300)"], [1, "panel"], [1, "more"], [1, "panel-body", "prose"], [1, "muted", 2, "font-size", ".78rem"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm"], [2, "margin-top", "14px", "padding", "12px 14px", "border-left", "3px solid var(--gold-500)", "background", "var(--surface-alt)"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [2, "font-size", ".66rem", "text-transform", "uppercase", "letter-spacing", ".12em", "color", "var(--gold-600)", "font-weight", "800"], [2, "margin", "6px 0 0", "font-size", ".86rem"], ["routerLink", "/login", 1, "btn", "btn-gold", 3, "queryParams"], ["routerLink", "/register", 1, "btn", "btn-ghost"], [1, "hint-box", 2, "margin-bottom", "14px"], [1, "form-grid"], [1, "field"], ["for", "side"], ["id", "side", "name", "side", 3, "ngModelChange", "ngModel"], ["value", "For"], ["value", "Against"], [1, "field", "full"], ["for", "argument"], ["id", "argument", "name", "argument", "placeholder", "State your claim, then the reason it follows, then the evidence for the reason.", 3, "ngModelChange", "ngModel"], [1, "muted", 2, "font-size", ".72rem"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-gold", 3, "click", "disabled"], ["routerLink", "/debates", 1, "btn", "btn-ghost"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 2, "margin-top", "8px", 3, "click"], [1, "container"], [3, "count"], ["heading", "Debate not found", "body", "This motion may have been withdrawn, or the address may be incorrect."], [1, "text-center", 2, "margin-top", "18px"], ["routerLink", "/debates", 1, "btn", "btn-navy"]], template: function DebateDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DebateDetailPage_Conditional_0_Template, 62, 24)(1, DebateDetailPage_Conditional_1_Template, 3, 1, "main", 0)(2, DebateDetailPage_Conditional_2_Template, 6, 0, "main", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.debate()) ? 0 : ctx.loading() ? 1 : 2, tmp_0_0);
    }
  }, dependencies: [RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, PageBanner, LoadingState, EmptyState, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebateDetailPage, [{
    type: Component,
    args: [{ selector: "ts-debate-detail", standalone: true, imports: [RouterLink, DatePipe, FormsModule, PageBanner, LoadingState, EmptyState], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (debate(); as d) {
  <ts-page-banner [heading]="d.title" parentLabel="Debates" parentLink="/debates" />

  <section class="section deep" style="padding-top:26px">
    <div class="container" style="max-width:1000px">

      <article class="debate-card">
        <div class="top">
          <div>
            <div class="topic">{{ d.topic }}</div>
            <h3 style="font-size:1.1rem">{{ d.motion }}</h3>
          </div>
          <span class="badge"
                [class.badge-open]="d.status === 'Live'"
                [class.badge-gold]="d.status === 'Draft'"
                [class.badge-navy]="d.status === 'Closed' || d.status === 'Archived'">{{ d.status }}</span>
        </div>

        <div class="stance">
          <div><b>Opening Case \u2014 For</b><p>{{ d.forSummary }}</p></div>
          <div class="against"><b>Opening Case \u2014 Against</b><p>{{ d.againstSummary }}</p></div>
        </div>

        <div class="debate-meta">
          <span><b>{{ d.participants.length }}</b> participants</span>
          <span><b>{{ d.argumentCount }}</b> arguments</span>
          <span><b>{{ d.counterArgumentCount }}</b> counterarguments</span>
          <span><svg width="13" height="13"><use href="#i-cal" /></svg> {{ d.scheduledFor | date: 'dd MMMM y' }}</span>
        </div>

        @if (d.participants.length) {
          <p style="font-size:.8rem;color:#9db0c8;margin:0">
            <b style="color:var(--gold-300)">Participants:</b> {{ d.participants.join(', ') }}
          </p>
        }
        @if (d.adjudicators.length) {
          <p style="font-size:.8rem;color:#9db0c8;margin:4px 0 0">
            <b style="color:var(--gold-300)">Adjudicators:</b> {{ d.adjudicators.join(', ') }}
          </p>
        }
      </article>

      @if (d.verdict) {
        <div id="verdict" class="side-note" style="margin-top:18px">
          <b>Adjudicators' Verdict</b>
          {{ d.verdict }}
        </div>
      }
    </div>
  </section>

  <main class="section">
    <div class="container" style="max-width:1000px">

      <div class="sec-title" style="margin-bottom:20px">
        <div class="kicker">The Record</div>
        <h2>Arguments &amp; Counterarguments</h2>
        <div class="rule"></div>
      </div>

      @if (!openingArguments().length) {
        <ts-empty-state
          heading="No arguments recorded yet"
          body="Be the first to open a case on this motion." />
      } @else {
        @for (argument of openingArguments(); track argument.id) {
          <article class="panel">
            <div class="panel-head"
                 [style.background]="argument.side === 'For'
                   ? 'linear-gradient(135deg,#0a1a2f,#17395f)'
                   : 'linear-gradient(135deg,#4a1f18,#7a3226)'">
              <h3>{{ argument.side === 'For' ? 'For the Motion' : 'Against the Motion' }} &mdash; {{ argument.authorName }}</h3>
              <span class="more">{{ argument.postedAt | date: 'dd MMM y' }}</span>
            </div>
            <div class="panel-body prose">
              <p>{{ argument.text }}</p>

              @if (argument.citations.length) {
                <p class="muted" style="font-size:.78rem">
                  <b>Cited:</b> {{ argument.citations.join('; ') }}
                </p>
              }

              @if (d.discussionOpen && auth.isAuthenticated()) {
                <button type="button" class="btn btn-ghost btn-sm" (click)="startRebuttal(argument)">Rebut This</button>
              }

              @for (rebuttal of rebuttalsFor(argument.id); track rebuttal.id) {
                <div style="margin-top:14px;padding:12px 14px;border-left:3px solid var(--gold-500);background:var(--surface-alt)">
                  <div style="font-size:.66rem;text-transform:uppercase;letter-spacing:.12em;color:var(--gold-600);font-weight:800">
                    Counterargument &mdash; {{ rebuttal.side }} &mdash; {{ rebuttal.authorName }}
                  </div>
                  <p style="margin:6px 0 0;font-size:.86rem">{{ rebuttal.text }}</p>
                </div>
              }
            </div>
          </article>
        }
      }

      <!-- ---------------- submission ---------------- -->
      <section class="panel" id="discussion">
        <div class="panel-head"><h2>Join the Discussion</h2></div>
        <div class="panel-body">

          @if (!auth.isAuthenticated()) {
            <p class="muted">
              Submissions are open to registered members. Sign in to post an argument or a rebuttal.
            </p>
            <a class="btn btn-gold" routerLink="/login" [queryParams]="{ returnUrl: '/debates/' + d.slug }">Sign In</a>
            <a class="btn btn-ghost" routerLink="/register">Register</a>

          } @else if (!d.discussionOpen || d.status === 'Closed' || d.status === 'Archived') {
            <p class="muted">This motion is closed. The record above is final; the verdict may be appealed to the review panel.</p>

          } @else {
            @if (rebuts) {
              <div class="hint-box" style="margin-bottom:14px">
                <b>Replying to an argument</b>
                Your submission will be recorded as a counterargument.
                <button type="button" class="btn btn-ghost btn-sm" style="margin-top:8px" (click)="cancelRebuttal()">Cancel reply</button>
              </div>
            }

            <div class="form-grid">
              <div class="field">
                <label for="side">Side</label>
                <select id="side" [(ngModel)]="side" name="side">
                  <option value="For">For the Motion</option>
                  <option value="Against">Against the Motion</option>
                </select>
              </div>

              <div class="field full">
                <label for="argument">Your argument</label>
                <textarea id="argument"
                          name="argument"
                          [(ngModel)]="text"
                          placeholder="State your claim, then the reason it follows, then the evidence for the reason."></textarea>
                <span class="muted" style="font-size:.72rem">{{ text.length }} characters &middot; minimum 10</span>
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-gold" [disabled]="submitting()" (click)="submit()">
                {{ submitting() ? 'Submitting\u2026' : 'Submit Argument' }}
              </button>
              <a class="btn btn-ghost" routerLink="/debates">Back to Debates</a>
            </div>
          }

        </div>
      </section>

    </div>
  </main>

} @else if (loading()) {
  <main class="section"><div class="container"><ts-loading-state [count]="12" /></div></main>
} @else {
  <main class="section">
    <div class="container">
      <ts-empty-state heading="Debate not found" body="This motion may have been withdrawn, or the address may be incorrect." />
      <div class="text-center" style="margin-top:18px">
        <a class="btn btn-navy" routerLink="/debates">Back to Debates</a>
      </div>
    </div>
  </main>
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebateDetailPage, { className: "DebateDetailPage", filePath: "src/app/pages/debates/debate-detail.ts", lineNumber: 22 });
})();
export {
  DebateDetailPage
};
//# sourceMappingURL=chunk-Z4C5AFF5.js.map
