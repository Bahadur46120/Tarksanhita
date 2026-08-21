import {
  QUICK_LINKS
} from "./chunk-LEEVYR4T.js";
import {
  AvatarArt,
  EmptyState,
  LoadingState,
  PlaceholderArt
} from "./chunk-JRDIFDAI.js";
import {
  ApiService
} from "./chunk-MBQHVFNQ.js";
import {
  DatePipe,
  DecimalPipe,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F5R4JB2K.js";

// src/app/shared/components/hero-carousel.ts
function HeroCarousel_For_189_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 113);
    \u0275\u0275domListener("click", function HeroCarousel_For_189_Template_button_click_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.go($index_r2));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.index() === $index_r2);
    \u0275\u0275attribute("aria-selected", ctx_r2.index() === $index_r2)("aria-label", "Go to slide " + ($index_r2 + 1));
  }
}
var HeroCarousel = class _HeroCarousel {
  static COUNT = 7;
  static INTERVAL_MS = 6e3;
  index = signal(0, ...ngDevMode ? [{ debugName: "index" }] : []);
  dots = Array.from({ length: _HeroCarousel.COUNT });
  timer;
  ngOnInit() {
    this.restart();
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  move(direction) {
    const next = (this.index() + direction + _HeroCarousel.COUNT) % _HeroCarousel.COUNT;
    this.go(next);
  }
  go(next) {
    this.index.set(next);
    this.restart();
  }
  /** Restarts the timer on every interaction so a manual change gets a full dwell. */
  restart() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.move(1), _HeroCarousel.INTERVAL_MS);
  }
  static \u0275fac = function HeroCarousel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroCarousel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroCarousel, selectors: [["ts-hero-carousel"]], decls: 190, vars: 14, consts: [["aria-roledescription", "carousel", "aria-label", "Highlights", 1, "carousel"], [1, "slides"], ["role", "group", "aria-label", "1 of 7", 1, "slide"], ["viewBox", "0 0 800 405", "preserveAspectRatio", "xMidYMid slice"], ["id", "s1", "x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", "0", "stop-color", "#061224"], ["offset", ".55", "stop-color", "#102743"], ["offset", "1", "stop-color", "#1e4a7a"], ["width", "800", "height", "405", "fill", "url(#s1)"], ["opacity", ".12", "stroke", "#e8cd74", "stroke-width", "1"], ["d", "M0 340h800M0 300h800M0 260h800M0 220h800"], ["stroke", "#c9a227", "fill", "none", "stroke-width", "2.2"], ["d", "M120 330h560M150 330V160M210 330V160M270 330V160M530 330V160M590 330V160M650 330V160"], ["d", "M130 160h540L400 70 130 160z"], ["d", "M110 342h580v14H110z"], ["d", "M340 330v-92a60 60 0 01120 0v92"], ["cx", "400", "cy", "256", "r", "17", "fill", "none", "stroke", "#e8cd74", "stroke-width", "2.2"], ["fill", "#e8cd74", "opacity", ".22"], ["cx", "700", "cy", "80", "r", "52"], ["cx", "90", "cy", "360", "r", "34"], [1, "slide-cap"], [1, "k"], ["role", "group", "aria-label", "2 of 7", 1, "slide"], ["id", "s2", "x1", "0", "y1", "1", "x2", "1", "y2", "0"], ["offset", "0", "stop-color", "#0a1a2f"], ["offset", "1", "stop-color", "#17395f"], ["width", "800", "height", "405", "fill", "url(#s2)"], ["stroke", "#c9a227", "fill", "none", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M250 300h240M400 110v170M400 140l-92 26 92-26 92 26"], ["d", "M308 166l-44 84h88zM492 166l-44 84h88z"], ["d", "M264 250a44 44 0 0088 0M448 250a44 44 0 0088 0"], ["d", "M360 300h80v14h-80z"], ["stroke", "#e8cd74", "fill", "none", "stroke-width", "2", "opacity", ".55"], ["d", "M120 350h180M120 350V300a30 30 0 0130-30h120M660 60v60"], ["fill", "#c9a227", "opacity", ".14"], ["cx", "140", "cy", "120", "r", "58"], ["cx", "670", "cy", "330", "r", "44"], ["role", "group", "aria-label", "3 of 7", 1, "slide"], ["id", "s3", "x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", "0", "stop-color", "#102743"], ["offset", "1", "stop-color", "#061224"], ["width", "800", "height", "405", "fill", "url(#s3)"], ["stroke", "#c9a227", "fill", "none", "stroke-width", "2.4", "stroke-linejoin", "round"], ["d", "M330 330h140M370 330v-70h60v70M340 260h120l-12-40H352z"], ["cx", "400", "cy", "180", "r", "26"], ["d", "M150 330h120M180 330v-60h60v60M170 270h80l-8-32h-64z"], ["cx", "210", "cy", "206", "r", "22"], ["d", "M530 330h120M560 330v-60h60v60M550 270h80l-8-32h-64z"], ["cx", "590", "cy", "206", "r", "22"], ["stroke", "#e8cd74", "stroke-width", "1.8", "fill", "none", "opacity", ".6"], ["d", "M270 150h60M470 150h60M300 120v60M500 120v60"], ["fill", "#c9a227", "opacity", ".13"], ["cx", "90", "cy", "90", "r", "46"], ["cx", "720", "cy", "120", "r", "60"], ["role", "group", "aria-label", "4 of 7", 1, "slide"], ["id", "s4", "x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["width", "800", "height", "405", "fill", "url(#s4)"], ["d", "M360 90h80M375 90v70l-52 116a22 22 0 0020 31h114a22 22 0 0020-31l-52-116V90"], ["d", "M338 246h124"], ["cx", "390", "cy", "278", "r", "9"], ["cx", "424", "cy", "300", "r", "6"], ["cx", "404", "cy", "256", "r", "5"], ["cx", "180", "cy", "160", "r", "42"], ["d", "M212 192l40 40"], ["d", "M560 250h140M560 285h110M560 320h140"], ["fill", "#c9a227", "opacity", ".12"], ["cx", "660", "cy", "90", "r", "54"], ["role", "group", "aria-label", "5 of 7", 1, "slide"], ["id", "s5", "x1", "0", "y1", "1", "x2", "1", "y2", "0"], ["width", "800", "height", "405", "fill", "url(#s5)"], ["stroke", "#c9a227", "fill", "none", "stroke-width", "2.3", "stroke-linejoin", "round"], ["cx", "250", "cy", "170", "r", "34"], ["d", "M190 320a60 60 0 01120 0"], ["cx", "400", "cy", "150", "r", "40"], ["d", "M332 320a68 68 0 01136 0"], ["cx", "552", "cy", "170", "r", "34"], ["d", "M492 320a60 60 0 01120 0"], ["d", "M360 118h80l-40-24z"], ["stroke", "#e8cd74", "stroke-width", "1.8", "fill", "none", "opacity", ".5"], ["d", "M120 340h560"], ["d", "M660 120h80v54h-80z"], ["d", "M660 120l40 24 40-24"], ["cx", "110", "cy", "120", "r", "50"], ["role", "group", "aria-label", "6 of 7", 1, "slide"], ["id", "s6", "x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", "1", "stop-color", "#0a1a2f"], ["width", "800", "height", "405", "fill", "url(#s6)"], ["d", "M140 340h520M180 340V120h100v220M320 340V150h100v190M460 340V110h100v230M600 340V170h60v170"], ["d", "M180 180h100M180 240h100M320 210h100M320 270h100M460 170h100M460 230h100M460 290h100M600 230h60"], ["stroke", "#e8cd74", "fill", "none", "stroke-width", "2.2", "opacity", ".8"], ["d", "M300 96h200M400 40v56M340 56h120"], ["cx", "700", "cy", "80", "r", "46"], ["cx", "90", "cy", "300", "r", "40"], ["role", "group", "aria-label", "7 of 7", 1, "slide"], ["id", "s7", "x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", ".6", "stop-color", "#17395f"], ["width", "800", "height", "405", "fill", "url(#s7)"], ["x", "250", "y", "70", "width", "300", "height", "150", "rx", "4"], ["d", "M290 110h220M290 140h180M290 170h220"], ["d", "M160 300h480M160 340h480"], ["stroke", "#e8cd74", "fill", "none", "stroke-width", "2", "opacity", ".7"], ["cx", "220", "cy", "278", "r", "14"], ["cx", "330", "cy", "278", "r", "14"], ["cx", "440", "cy", "278", "r", "14"], ["cx", "550", "cy", "278", "r", "14"], ["cx", "275", "cy", "320", "r", "14"], ["cx", "385", "cy", "320", "r", "14"], ["cx", "495", "cy", "320", "r", "14"], ["cx", "700", "cy", "330", "r", "50"], ["type", "button", "aria-label", "Previous slide", 1, "car-btn", "car-prev", 3, "click"], ["type", "button", "aria-label", "Next slide", 1, "car-btn", "car-next", 3, "click"], ["role", "tablist", "aria-label", "Choose slide", 1, "dots"], ["type", "button", "role", "tab", 3, "active"], ["type", "button", "role", "tab", 3, "click"]], template: function HeroCarousel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(3, "svg", 3)(4, "defs")(5, "linearGradient", 4);
      \u0275\u0275domElement(6, "stop", 5)(7, "stop", 6)(8, "stop", 7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(9, "rect", 8);
      \u0275\u0275domElementStart(10, "g", 9);
      \u0275\u0275domElement(11, "path", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "g", 11);
      \u0275\u0275domElement(13, "path", 12)(14, "path", 13)(15, "path", 14)(16, "path", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(17, "circle", 16);
      \u0275\u0275domElementStart(18, "g", 17);
      \u0275\u0275domElement(19, "circle", 18)(20, "circle", 19);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(21, "div", 20)(22, "div", 21);
      \u0275\u0275text(23, "The Campus");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "h3");
      \u0275\u0275text(25, "A Home for Argument, Evidence and Enquiry");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "p");
      \u0275\u0275text(27, "Purpose-built halls, moot courts and a research library at the heart of the Tarksanhita academic block.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(28, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(29, "svg", 3)(30, "defs")(31, "linearGradient", 23);
      \u0275\u0275domElement(32, "stop", 24)(33, "stop", 25);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(34, "rect", 26);
      \u0275\u0275domElementStart(35, "g", 27);
      \u0275\u0275domElement(36, "path", 28)(37, "path", 29)(38, "path", 30)(39, "path", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "g", 32);
      \u0275\u0275domElement(41, "path", 33);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "g", 34);
      \u0275\u0275domElement(43, "circle", 35)(44, "circle", 36);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(45, "div", 20)(46, "div", 21);
      \u0275\u0275text(47, "Legal Education");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "h3");
      \u0275\u0275text(49, "Law Taught as a Discipline of Reasoning");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "p");
      \u0275\u0275text(51, "Doctrine, procedure and jurisprudence delivered through case method, clinic work and structured argument.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(52, "div", 37);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(53, "svg", 3)(54, "defs")(55, "linearGradient", 38);
      \u0275\u0275domElement(56, "stop", 39)(57, "stop", 40);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(58, "rect", 41);
      \u0275\u0275domElementStart(59, "g", 42);
      \u0275\u0275domElement(60, "path", 43)(61, "circle", 44)(62, "path", 45)(63, "circle", 46)(64, "path", 47)(65, "circle", 48);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(66, "g", 49);
      \u0275\u0275domElement(67, "path", 50);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(68, "g", 51);
      \u0275\u0275domElement(69, "circle", 52)(70, "circle", 53);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(71, "div", 20)(72, "div", 21);
      \u0275\u0275text(73, "Debate & Logic");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(74, "h3");
      \u0275\u0275text(75, "Motions Contested on Reason, Not Volume");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(76, "p");
      \u0275\u0275text(77, "Weekly parliamentary and adjudicated debates on questions of constitutional and public importance.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(78, "div", 54);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(79, "svg", 3)(80, "defs")(81, "linearGradient", 55);
      \u0275\u0275domElement(82, "stop", 24)(83, "stop", 7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(84, "rect", 56);
      \u0275\u0275domElementStart(85, "g", 27);
      \u0275\u0275domElement(86, "path", 57)(87, "path", 58)(88, "circle", 59)(89, "circle", 60)(90, "circle", 61);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "g", 32);
      \u0275\u0275domElement(92, "circle", 62)(93, "path", 63)(94, "path", 64);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(95, "g", 65);
      \u0275\u0275domElement(96, "circle", 66);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(97, "div", 20)(98, "div", 21);
      \u0275\u0275text(99, "Research");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(100, "h3");
      \u0275\u0275text(101, "Evidence-Led Legal Scholarship");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(102, "p");
      \u0275\u0275text(103, "Doctrinal, empirical and comparative research across constitutional, criminal and technology law.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(104, "div", 67);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(105, "svg", 3)(106, "defs")(107, "linearGradient", 68);
      \u0275\u0275domElement(108, "stop", 5)(109, "stop", 25);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(110, "rect", 69);
      \u0275\u0275domElementStart(111, "g", 70);
      \u0275\u0275domElement(112, "circle", 71)(113, "path", 72)(114, "circle", 73)(115, "path", 74)(116, "circle", 75)(117, "path", 76)(118, "path", 77);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(119, "g", 78);
      \u0275\u0275domElement(120, "path", 79)(121, "path", 80)(122, "path", 81);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(123, "g", 65);
      \u0275\u0275domElement(124, "circle", 82);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(125, "div", 20)(126, "div", 21);
      \u0275\u0275text(127, "Students");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(128, "h3");
      \u0275\u0275text(129, "A Community of Careful Thinkers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(130, "p");
      \u0275\u0275text(131, "Mentored cohorts, student-run journals, moot teams and an active grievance and welfare framework.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(132, "div", 83);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(133, "svg", 3)(134, "defs")(135, "linearGradient", 84);
      \u0275\u0275domElement(136, "stop", 39)(137, "stop", 85);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(138, "rect", 86);
      \u0275\u0275domElementStart(139, "g", 11);
      \u0275\u0275domElement(140, "path", 87)(141, "path", 88);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(142, "g", 89);
      \u0275\u0275domElement(143, "path", 90);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(144, "g", 65);
      \u0275\u0275domElement(145, "circle", 91)(146, "circle", 92);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(147, "div", 20)(148, "div", 21);
      \u0275\u0275text(149, "Digital Library");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(150, "h3");
      \u0275\u0275text(151, "Bare Acts, Reports and Journals in One Place");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(152, "p");
      \u0275\u0275text(153, "A curated collection of statutes, law reports, e-journals and study material, searchable end to end.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(154, "div", 93);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(155, "svg", 3)(156, "defs")(157, "linearGradient", 94);
      \u0275\u0275domElement(158, "stop", 24)(159, "stop", 95)(160, "stop", 40);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(161, "rect", 96);
      \u0275\u0275domElementStart(162, "g", 11);
      \u0275\u0275domElement(163, "rect", 97)(164, "path", 98)(165, "path", 99);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(166, "g", 100);
      \u0275\u0275domElement(167, "circle", 101)(168, "circle", 102)(169, "circle", 103)(170, "circle", 104)(171, "circle", 105)(172, "circle", 106)(173, "circle", 107);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(174, "g", 65);
      \u0275\u0275domElement(175, "circle", 108);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(176, "div", 20)(177, "div", 21);
      \u0275\u0275text(178, "Seminars & Conferences");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(179, "h3");
      \u0275\u0275text(180, "Public Reasoning, Publicly Conducted");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(181, "p");
      \u0275\u0275text(182, "Guest lectures, doctrinal colloquia and national conferences open to students and practitioners.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(183, "button", 109);
      \u0275\u0275domListener("click", function HeroCarousel_Template_button_click_183_listener() {
        return ctx.move(-1);
      });
      \u0275\u0275text(184, "\u276E");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(185, "button", 110);
      \u0275\u0275domListener("click", function HeroCarousel_Template_button_click_185_listener() {
        return ctx.move(1);
      });
      \u0275\u0275text(186, "\u276F");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(187, "div", 111);
      \u0275\u0275repeaterCreate(188, HeroCarousel_For_189_Template, 1, 4, "button", 112, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.index() === 0);
      \u0275\u0275advance(26);
      \u0275\u0275classProp("active", ctx.index() === 1);
      \u0275\u0275advance(24);
      \u0275\u0275classProp("active", ctx.index() === 2);
      \u0275\u0275advance(26);
      \u0275\u0275classProp("active", ctx.index() === 3);
      \u0275\u0275advance(26);
      \u0275\u0275classProp("active", ctx.index() === 4);
      \u0275\u0275advance(28);
      \u0275\u0275classProp("active", ctx.index() === 5);
      \u0275\u0275advance(22);
      \u0275\u0275classProp("active", ctx.index() === 6);
      \u0275\u0275advance(34);
      \u0275\u0275repeater(ctx.dots);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroCarousel, [{
    type: Component,
    args: [{
      selector: "ts-hero-carousel",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section class="carousel" aria-roledescription="carousel" aria-label="Highlights">
      <div class="slides">


      <div class="slide" [class.active]="index() === 0" role="group" aria-label="1 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#061224"/><stop offset=".55" stop-color="#102743"/><stop offset="1" stop-color="#1e4a7a"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s1)"/>
          <g opacity=".12" stroke="#e8cd74" stroke-width="1"><path d="M0 340h800M0 300h800M0 260h800M0 220h800"/></g>
          <g stroke="#c9a227" fill="none" stroke-width="2.2">
            <path d="M120 330h560M150 330V160M210 330V160M270 330V160M530 330V160M590 330V160M650 330V160"/>
            <path d="M130 160h540L400 70 130 160z"/><path d="M110 342h580v14H110z"/>
            <path d="M340 330v-92a60 60 0 01120 0v92"/>
          </g>
          <circle cx="400" cy="256" r="17" fill="none" stroke="#e8cd74" stroke-width="2.2"/>
          <g fill="#e8cd74" opacity=".22"><circle cx="700" cy="80" r="52"/><circle cx="90" cy="360" r="34"/></g>
        </svg>
        <div class="slide-cap"><div class="k">The Campus</div><h3>A Home for Argument, Evidence and Enquiry</h3><p>Purpose-built halls, moot courts and a research library at the heart of the Tarksanhita academic block.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 1" role="group" aria-label="2 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s2" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#0a1a2f"/><stop offset="1" stop-color="#17395f"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s2)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M250 300h240M400 110v170M400 140l-92 26 92-26 92 26"/>
            <path d="M308 166l-44 84h88zM492 166l-44 84h88z"/>
            <path d="M264 250a44 44 0 0088 0M448 250a44 44 0 0088 0"/>
            <path d="M360 300h80v14h-80z"/>
          </g>
          <g stroke="#e8cd74" fill="none" stroke-width="2" opacity=".55"><path d="M120 350h180M120 350V300a30 30 0 0130-30h120M660 60v60"/></g>
          <g fill="#c9a227" opacity=".14"><circle cx="140" cy="120" r="58"/><circle cx="670" cy="330" r="44"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Legal Education</div><h3>Law Taught as a Discipline of Reasoning</h3><p>Doctrine, procedure and jurisprudence delivered through case method, clinic work and structured argument.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 2" role="group" aria-label="3 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#102743"/><stop offset="1" stop-color="#061224"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s3)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.4" stroke-linejoin="round">
            <path d="M330 330h140M370 330v-70h60v70M340 260h120l-12-40H352z"/>
            <circle cx="400" cy="180" r="26"/>
            <path d="M150 330h120M180 330v-60h60v60M170 270h80l-8-32h-64z"/><circle cx="210" cy="206" r="22"/>
            <path d="M530 330h120M560 330v-60h60v60M550 270h80l-8-32h-64z"/><circle cx="590" cy="206" r="22"/>
          </g>
          <g stroke="#e8cd74" stroke-width="1.8" fill="none" opacity=".6"><path d="M270 150h60M470 150h60M300 120v60M500 120v60"/></g>
          <g fill="#c9a227" opacity=".13"><circle cx="90" cy="90" r="46"/><circle cx="720" cy="120" r="60"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Debate &amp; Logic</div><h3>Motions Contested on Reason, Not Volume</h3><p>Weekly parliamentary and adjudicated debates on questions of constitutional and public importance.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 3" role="group" aria-label="4 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a1a2f"/><stop offset="1" stop-color="#1e4a7a"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s4)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M360 90h80M375 90v70l-52 116a22 22 0 0020 31h114a22 22 0 0020-31l-52-116V90"/>
            <path d="M338 246h124"/>
            <circle cx="390" cy="278" r="9"/><circle cx="424" cy="300" r="6"/><circle cx="404" cy="256" r="5"/>
          </g>
          <g stroke="#e8cd74" fill="none" stroke-width="2" opacity=".55">
            <circle cx="180" cy="160" r="42"/><path d="M212 192l40 40"/>
            <path d="M560 250h140M560 285h110M560 320h140"/>
          </g>
          <g fill="#c9a227" opacity=".12"><circle cx="660" cy="90" r="54"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Research</div><h3>Evidence-Led Legal Scholarship</h3><p>Doctrinal, empirical and comparative research across constitutional, criminal and technology law.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 4" role="group" aria-label="5 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s5" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#061224"/><stop offset="1" stop-color="#17395f"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s5)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.3" stroke-linejoin="round">
            <circle cx="250" cy="170" r="34"/><path d="M190 320a60 60 0 01120 0"/>
            <circle cx="400" cy="150" r="40"/><path d="M332 320a68 68 0 01136 0"/>
            <circle cx="552" cy="170" r="34"/><path d="M492 320a60 60 0 01120 0"/>
            <path d="M360 118h80l-40-24z"/>
          </g>
          <g stroke="#e8cd74" stroke-width="1.8" fill="none" opacity=".5"><path d="M120 340h560"/><path d="M660 120h80v54h-80z"/><path d="M660 120l40 24 40-24"/></g>
          <g fill="#c9a227" opacity=".12"><circle cx="110" cy="120" r="50"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Students</div><h3>A Community of Careful Thinkers</h3><p>Mentored cohorts, student-run journals, moot teams and an active grievance and welfare framework.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 5" role="group" aria-label="6 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s6" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#102743"/><stop offset="1" stop-color="#0a1a2f"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s6)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.2">
            <path d="M140 340h520M180 340V120h100v220M320 340V150h100v190M460 340V110h100v230M600 340V170h60v170"/>
            <path d="M180 180h100M180 240h100M320 210h100M320 270h100M460 170h100M460 230h100M460 290h100M600 230h60"/>
          </g>
          <g stroke="#e8cd74" fill="none" stroke-width="2.2" opacity=".8">
            <path d="M300 96h200M400 40v56M340 56h120"/>
          </g>
          <g fill="#c9a227" opacity=".12"><circle cx="700" cy="80" r="46"/><circle cx="90" cy="300" r="40"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Digital Library</div><h3>Bare Acts, Reports and Journals in One Place</h3><p>A curated collection of statutes, law reports, e-journals and study material, searchable end to end.</p></div>
      </div>

      <div class="slide" [class.active]="index() === 6" role="group" aria-label="7 of 7">
        <svg viewBox="0 0 800 405" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="s7" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a1a2f"/><stop offset=".6" stop-color="#17395f"/><stop offset="1" stop-color="#061224"/></linearGradient></defs>
          <rect width="800" height="405" fill="url(#s7)"/>
          <g stroke="#c9a227" fill="none" stroke-width="2.2">
            <rect x="250" y="70" width="300" height="150" rx="4"/>
            <path d="M290 110h220M290 140h180M290 170h220"/>
            <path d="M160 300h480M160 340h480"/>
          </g>
          <g stroke="#e8cd74" fill="none" stroke-width="2" opacity=".7">
            <circle cx="220" cy="278" r="14"/><circle cx="330" cy="278" r="14"/><circle cx="440" cy="278" r="14"/><circle cx="550" cy="278" r="14"/>
            <circle cx="275" cy="320" r="14"/><circle cx="385" cy="320" r="14"/><circle cx="495" cy="320" r="14"/>
          </g>
          <g fill="#c9a227" opacity=".12"><circle cx="700" cy="330" r="50"/></g>
        </svg>
        <div class="slide-cap"><div class="k">Seminars &amp; Conferences</div><h3>Public Reasoning, Publicly Conducted</h3><p>Guest lectures, doctrinal colloquia and national conferences open to students and practitioners.</p></div>
      </div>
      </div>

      <button type="button" class="car-btn car-prev" (click)="move(-1)" aria-label="Previous slide">&#10094;</button>
      <button type="button" class="car-btn car-next" (click)="move(1)" aria-label="Next slide">&#10095;</button>

      <div class="dots" role="tablist" aria-label="Choose slide">
        @for (dot of dots; track $index) {
          <button type="button"
                  role="tab"
                  [class.active]="index() === $index"
                  [attr.aria-selected]="index() === $index"
                  [attr.aria-label]="'Go to slide ' + ($index + 1)"
                  (click)="go($index)"></button>
        }
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroCarousel, { className: "HeroCarousel", filePath: "src/app/shared/components/hero-carousel.ts", lineNumber: 150 });
})();

// src/app/pages/institution/institution.ts
var _c0 = () => ({ type: "Book" });
var _c1 = () => ({ type: "Journal" });
var _c2 = () => ({ type: "ResearchPaper" });
var _c3 = () => ({ type: "BareAct" });
var _c4 = () => ({ type: "CaseLaw" });
var _c5 = () => ({ type: "Constitution" });
var _c6 = () => ({ type: "Database" });
var _c7 = () => ({ type: "StudyMaterial" });
var _c8 = (a0) => ["/notices", a0];
var _c9 = (a0) => ["/news", a0];
var _c10 = (a0) => ["/events", a0];
var _c11 = (a0) => ["/faculty", a0];
var _c12 = (a0) => ["/legal-topics", a0];
var _c13 = (a0) => ["/debates", a0];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.id;
function InstitutionPage_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 108)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "Learners");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 108)(8, "b");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11, "Faculty & Fellows");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 108)(13, "b");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "small");
    \u0275\u0275text(16, "Programmes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 108)(18, "b");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "small");
    \u0275\u0275text(21, "Publications");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, s_r1.learners));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(s_r1.faculty);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r1.programmes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r1.publications);
  }
}
function InstitutionPage_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 109);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r2.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r2.label);
  }
}
function InstitutionPage_For_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 110);
    \u0275\u0275listener("click", function InstitutionPage_For_68_Template_button_click_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.activeTab.set(tab_r4.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r4.activeTab() === tab_r4.key);
    \u0275\u0275attribute("aria-selected", ctx_r4.activeTab() === tab_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r4.label);
  }
}
function InstitutionPage_Case_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h4");
    \u0275\u0275text(2, "About Tarksanhita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Tarksanhita \u2014 the ");
    \u0275\u0275elementStart(5, "em");
    \u0275\u0275text(6, "Compendium of Reasoning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \u2014 is a centre for law, logic, debate and knowledge. It was established to address a simple gap in legal training: students learn what the law says long before they learn how to argue about it well. The Centre exists to close that gap. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, " Teaching here is organised around the argument rather than the syllabus alone. Every course pairs doctrinal instruction with an adversarial exercise, every research fellow defends their thesis before a mixed panel, and every student passes through the moot court before they graduate. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 111)(11, "div", 112)(12, "b");
    \u0275\u0275text(13, "Doctrine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Statute, precedent and constitutional text read closely.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 112)(17, "b");
    \u0275\u0275text(18, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Formal and informal logic applied to legal reasoning.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 112)(22, "b");
    \u0275\u0275text(23, "Practice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Moot courts, clinics and legal-aid engagement.");
    \u0275\u0275elementEnd()()()();
  }
}
function InstitutionPage_Case_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h4");
    \u0275\u0275text(2, "Our Mission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " To cultivate jurists, scholars and citizens who reason from evidence, argue in good faith and hold their own conclusions to the same scrutiny they apply to others'. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " The Centre pursues this through four commitments: accessible legal education without dilution of rigour; research that is published, cited and contestable; debate conducted under published rules and neutral adjudication; and a library open to every enrolled learner without gatekeeping. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 111)(8, "div", 112)(9, "b");
    \u0275\u0275text(10, "Rigour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "No claim without a source; no source without scrutiny.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 112)(14, "b");
    \u0275\u0275text(15, "Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Fee waivers and open digital resources.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 112)(19, "b");
    \u0275\u0275text(20, "Integrity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Published conflict-of-interest and ethics norms.");
    \u0275\u0275elementEnd()()()();
  }
}
function InstitutionPage_Case_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h4");
    \u0275\u0275text(2, "Our Vision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " To become the foremost Indian forum where law, logic and public reasoning meet \u2014 a place practitioners consult, scholars publish in, and students are formed by. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " Over the coming decade the Centre intends to build a fully open case-law and bare-act repository, host an annual national conference on legal reasoning, and place a trained adjudicator in every affiliated debating society in the country. ");
    \u0275\u0275elementEnd()();
  }
}
function InstitutionPage_Case_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h4");
    \u0275\u0275text(2, "Academic Excellence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Programmes span certificate, diploma, postgraduate and doctoral levels across nine subject clusters. Assessment is continuous: written submissions, oral defence, case commentary and a compulsory moot component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " Faculty are drawn from the academy, the bar and the bench, and every course is externally reviewed once every three years. Course outlines, reading lists and assessment rubrics are published before enrolment opens. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 111)(8, "div", 112)(9, "b");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Certificate to doctoral level.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 112)(14, "b");
    \u0275\u0275text(15, "1:14 Ratio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Faculty to enrolled learner.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 112)(19, "b");
    \u0275\u0275text(20, "External Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Triennial audit of every course.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r4.topics().length || 9, " Clusters");
  }
}
function InstitutionPage_Case_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h4");
    \u0275\u0275text(2, "Legal Research");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Research is organised into standing centres for constitutional studies, criminal justice, technology & law, and human rights. Each runs a working-paper series, an annual call for papers and a public seminar programme. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " The Centre operates a double-blind peer review process for its two flagship journals and maintains an ethics committee that clears all empirical work involving human participants. ");
    \u0275\u0275elementEnd()();
  }
}
function InstitutionPage_Case_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h4");
    \u0275\u0275text(2, "Debate & Logic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " The debating programme is not an extracurricular add-on \u2014 it is examined. Students are trained in argument construction, fallacy identification, burden allocation and rebuttal, then tested in adjudicated rounds against published criteria. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " Motions are drawn from live legal and policy controversies. Adjudicators publish written reasons, and every decision may be appealed to a review panel \u2014 the same discipline the Centre expects of courts. ");
    \u0275\u0275elementEnd()();
  }
}
function InstitutionPage_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "ts-loading-state", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("count", 6);
  }
}
function InstitutionPage_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "ts-empty-state", 113);
    \u0275\u0275elementEnd();
  }
}
function InstitutionPage_Conditional_83_For_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
function InstitutionPage_Conditional_83_For_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const notice_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 Ref ", notice_r6.referenceNo, " ");
  }
}
function InstitutionPage_Conditional_83_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 114)(1, "div", 115)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 116)(9, "a", 109);
    \u0275\u0275text(10);
    \u0275\u0275conditionalCreate(11, InstitutionPage_Conditional_83_For_3_Conditional_11_Template, 2, 0, "span", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small");
    \u0275\u0275text(13);
    \u0275\u0275conditionalCreate(14, InstitutionPage_Conditional_83_For_3_Conditional_14_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "a", 118);
    \u0275\u0275text(16, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notice_r6 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 8, notice_r6.noticeDate, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, notice_r6.noticeDate, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c8, notice_r6.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", notice_r6.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.isNew(notice_r6.noticeDate) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", notice_r6.department, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(notice_r6.referenceNo ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c8, notice_r6.slug));
  }
}
function InstitutionPage_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "ul");
    \u0275\u0275repeaterCreate(2, InstitutionPage_Conditional_83_For_3_Template, 17, 18, "li", 114, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.noticeLoop());
  }
}
function InstitutionPage_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 28);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 4);
  }
}
function InstitutionPage_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 29);
  }
}
function InstitutionPage_Conditional_93_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 121);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r7.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r7.title);
  }
}
function InstitutionPage_Conditional_93_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-placeholder-art", 122);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("seed", item_r7.slug)("label", item_r7.title);
  }
}
function InstitutionPage_Conditional_93_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 119)(1, "div", 120);
    \u0275\u0275conditionalCreate(2, InstitutionPage_Conditional_93_For_2_Conditional_2_Template, 1, 2, "img", 121)(3, InstitutionPage_Conditional_93_For_2_Conditional_3_Template, 1, 2, "ts-placeholder-art", 122);
    \u0275\u0275elementStart(4, "span", 123);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 124)(7, "time");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h4");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 125);
    \u0275\u0275text(15, "Read More");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r7.imageUrl ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.category);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("datetime", item_r7.publishedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 7, item_r7.publishedAt, "dd MMMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.summary);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c9, item_r7.slug));
  }
}
function InstitutionPage_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, InstitutionPage_Conditional_93_For_2_Template, 16, 12, "article", 119, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.news());
  }
}
function InstitutionPage_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "ts-loading-state", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("count", 5);
  }
}
function InstitutionPage_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "ts-empty-state", 126);
    \u0275\u0275elementEnd();
  }
}
function InstitutionPage_Conditional_102_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 137);
    \u0275\u0275text(1, "Registration Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 138);
    \u0275\u0275text(3, "Register");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c10, event_r8.slug));
  }
}
function InstitutionPage_Conditional_102_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275text(1, "Open to All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 118);
    \u0275\u0275text(3, "Details");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c10, event_r8.slug));
  }
}
function InstitutionPage_Conditional_102_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 128)(2, "div", 129);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 130);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 131);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 132)(12, "h4");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 133)(15, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 134);
    \u0275\u0275element(17, "use", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 134);
    \u0275\u0275element(21, "use", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 136);
    \u0275\u0275conditionalCreate(25, InstitutionPage_Conditional_102_For_2_Conditional_25_Template, 4, 3)(26, InstitutionPage_Conditional_102_For_2_Conditional_26_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 7, event_r8.startsAt, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, event_r8.startsAt, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 13, event_r8.startsAt, "y"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r8.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", event_r8.venue);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 16, event_r8.startsAt, "HH:mm"), " IST");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(event_r8.registrationOpen ? 25 : 26);
  }
}
function InstitutionPage_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, InstitutionPage_Conditional_102_For_2_Template, 27, 19, "div", 127, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.events());
  }
}
function InstitutionPage_For_106_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 121);
  }
  if (rf & 2) {
    const person_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", person_r9.photoUrl, \u0275\u0275sanitizeUrl)("alt", person_r9.fullName);
  }
}
function InstitutionPage_For_106_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-avatar-art", 142);
  }
  if (rf & 2) {
    const person_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("name", person_r9.fullName);
  }
}
function InstitutionPage_For_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 140);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 141);
    \u0275\u0275conditionalCreate(4, InstitutionPage_For_106_Conditional_4_Template, 1, 2, "img", 121)(5, InstitutionPage_For_106_Conditional_5_Template, 1, 1, "ts-avatar-art", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 143);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 144);
    \u0275\u0275text(13, "View Profile");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const person_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r9.designation);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(person_r9.photoUrl ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(person_r9.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r9.qualifications);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r9.shortBio);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c11, person_r9.slug));
  }
}
function InstitutionPage_ForEmpty_107_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 145);
  }
}
function InstitutionPage_ForEmpty_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InstitutionPage_ForEmpty_107_Conditional_0_Template, 1, 0, "ts-empty-state", 145);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r4.loading() ? 0 : -1);
  }
}
function InstitutionPage_Conditional_164_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 146)(1, "div", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg");
    \u0275\u0275element(3, "use");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 116)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "3\u201336 Months");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const topic_r10 = ctx.$implicit;
    const $index_r11 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c12, topic_r10.slug));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("href", ctx_r4.iconFor(topic_r10.iconKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r10.summary);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.levelFor($index_r11));
  }
}
function InstitutionPage_Conditional_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275repeaterCreate(1, InstitutionPage_Conditional_164_For_2_Template, 13, 7, "a", 146, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.topics());
  }
}
function InstitutionPage_Conditional_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 54);
  }
}
function InstitutionPage_Conditional_181_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 147)(1, "div", 148)(2, "div")(3, "div", 149);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 150);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 151)(10, "div")(11, "b");
    \u0275\u0275text(12, "For the Motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 152)(16, "b");
    \u0275\u0275text(17, "Against the Motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 153)(21, "span")(22, "b");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span")(26, "b");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " arguments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span")(30, "b");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " counterarguments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 134);
    \u0275\u0275element(35, "use", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "a", 138);
    \u0275\u0275text(39, "View Debate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 154);
    \u0275\u0275text(41, "Join Discussion");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const debate_r12 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(debate_r12.topic);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(debate_r12.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-open", debate_r12.status === "Live")("badge-navy", debate_r12.status !== "Live");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", debate_r12.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(debate_r12.forSummary);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(debate_r12.againstSummary);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(debate_r12.participants.length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(debate_r12.argumentCount);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(debate_r12.counterArgumentCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 15, debate_r12.scheduledFor, "dd MMM y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c13, debate_r12.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c13, debate_r12.slug));
  }
}
function InstitutionPage_Conditional_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275repeaterCreate(1, InstitutionPage_Conditional_181_For_2_Template, 42, 22, "article", 147, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.debates());
  }
}
function InstitutionPage_Conditional_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-empty-state", 60);
  }
}
var InstitutionPage = class _InstitutionPage {
  api = inject(ApiService);
  data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  failed = signal(false, ...ngDevMode ? [{ debugName: "failed" }] : []);
  quickLinks = QUICK_LINKS;
  tabs = [
    { key: "about", label: "About" },
    { key: "mission", label: "Our Mission" },
    { key: "vision", label: "Our Vision" },
    { key: "excellence", label: "Academic Excellence" },
    { key: "research", label: "Legal Research" },
    { key: "debate", label: "Debate & Logic" }
  ];
  activeTab = signal("about", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  notices = computed(() => this.data()?.notices ?? [], ...ngDevMode ? [{ debugName: "notices" }] : []);
  news = computed(() => this.data()?.news ?? [], ...ngDevMode ? [{ debugName: "news" }] : []);
  events = computed(() => this.data()?.events ?? [], ...ngDevMode ? [{ debugName: "events" }] : []);
  debates = computed(() => this.data()?.debates ?? [], ...ngDevMode ? [{ debugName: "debates" }] : []);
  profiles = computed(() => this.data()?.profiles ?? [], ...ngDevMode ? [{ debugName: "profiles" }] : []);
  topics = computed(() => this.data()?.topics ?? [], ...ngDevMode ? [{ debugName: "topics" }] : []);
  stats = computed(() => this.data()?.stats, ...ngDevMode ? [{ debugName: "stats" }] : []);
  /** Notices are duplicated so the vertical marquee loops without a visible seam. */
  noticeLoop = computed(() => {
    const list = this.notices();
    return list.length > 3 ? [...list, ...list] : list;
  }, ...ngDevMode ? [{ debugName: "noticeLoop" }] : []);
  ngOnInit() {
    this.api.get("home").subscribe({
      next: (payload) => {
        this.data.set(payload);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.failed.set(true);
      }
    });
  }
  isNew(iso) {
    const days = (Date.now() - new Date(iso).getTime()) / 864e5;
    return days <= 14;
  }
  /** Maps an icon key stored against a legal topic onto the shared SVG sprite. */
  iconFor(key) {
    const known = ["scale", "building", "gavel", "doc", "chip", "globe", "bulb", "shield", "book", "flask", "people"];
    return `#i-${key && known.includes(key) ? key : "scale"}`;
  }
  levelFor(index) {
    return ["Diploma \xB7 PG", "PG \xB7 Doctoral", "PG", "Certificate \xB7 PG"][index % 4];
  }
  static \u0275fac = function InstitutionPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstitutionPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstitutionPage, selectors: [["ts-institution"]], decls: 456, vars: 24, consts: [[1, "page"], [1, "container"], [1, "grid3"], [1, "col-left"], [1, "panel"], [1, "panel-head"], [1, "panel-body"], [1, "about-thumb", 2, "height", "132px", "padding", "0", "overflow", "hidden"], ["seed", "about-tarksanhita", "label", "Tarksanhita academic block"], [1, "mini-head"], ["routerLink", "/about", 1, "btn", "btn-ghost", "btn-sm"], [1, "stat-row"], [1, "link-list", "panel-body", 2, "padding", "6px 12px"], ["routerLink", "/students", 1, "more"], ["routerLink", "/admissions"], [1, "badge", "badge-outline"], ["routerLink", "/debates"], ["routerLink", "/library"], [1, "col-center"], [1, "panel", "welcome"], [1, "more"], ["role", "tablist", 1, "tabs"], ["type", "button", "role", "tab", 3, "active"], [1, "tab-panel", "active"], ["id", "notices", 1, "panel"], ["routerLink", "/notices", 1, "more"], [1, "notice-scroll"], ["routerLink", "/news", 1, "more"], [3, "count"], ["heading", "No news yet", "body", "Announcements from the Centre will be listed here."], [1, "news-grid"], ["id", "events", 1, "panel"], ["routerLink", "/events", 1, "more"], [1, "col-right"], [1, "profile-wrap"], [1, "profile-card"], [1, "side-note"], [2, "margin-top", "9px"], ["routerLink", "/contact", 1, "btn", "btn-gold", "btn-sm"], ["routerLink", "/login"], ["routerLink", "/students"], ["routerLink", "/contact"], ["routerLink", "/admin"], [1, "social-row"], ["href", "#", "aria-label", "Facebook"], ["href", "#", "aria-label", "X"], ["href", "#", "aria-label", "LinkedIn"], ["href", "#", "aria-label", "YouTube"], ["href", "#", "aria-label", "Instagram"], ["id", "academics", 1, "section", "alt"], [1, "sec-title"], [1, "kicker"], [1, "rule"], [1, "acad-grid"], ["heading", "Programmes are being published", "body", "The academic catalogue will appear here shortly."], [1, "text-center", 2, "margin-top", "26px"], ["routerLink", "/academics", 1, "btn", "btn-navy"], ["routerLink", "/admissions", 1, "btn", "btn-gold"], ["id", "debates", 1, "section", "deep"], [1, "debate-grid"], ["heading", "No live motions", "body", "Scheduled debates will be listed here once published."], ["routerLink", "/debates", 1, "btn", "btn-ghost-light"], ["id", "research", 1, "section"], [1, "res-grid"], [1, "res-item"], [1, "n"], ["routerLink", "/publications", 1, "read-more"], ["routerLink", "/articles", 1, "read-more"], ["routerLink", "/case-studies", 1, "read-more"], ["routerLink", "/research", 1, "read-more"], ["routerLink", "/notices", 1, "read-more"], ["id", "library", 1, "section", "alt"], [1, "lib-grid"], ["routerLink", "/library", 1, "lib-tile", 3, "queryParams"], [1, "ic"], ["href", "#i-book"], ["href", "#i-doc"], ["href", "#i-flask"], ["href", "#i-scale"], ["href", "#i-gavel"], ["href", "#i-building"], ["href", "#i-globe"], ["href", "#i-bulb"], ["id", "students", 1, "section", "deep"], [1, "student-wrap"], [1, "kicker", 2, "font-size", ".68rem", "letter-spacing", ".3em", "text-transform", "uppercase", "color", "var(--gold-400)", "font-weight", "700"], [2, "font-size", "clamp(1.4rem,2.7vw,2.05rem)", "margin", "8px 0 12px"], [2, "width", "96px", "height", "3px", "background", "linear-gradient(90deg,var(--gold-600),var(--gold-300))", "margin-bottom", "16px"], [2, "font-size", ".92rem", "color", "#a9bcd4", "max-width", "520px"], [2, "margin-top", "18px"], ["routerLink", "/login", 1, "btn", "btn-gold"], ["routerLink", "/register", 1, "btn", "btn-ghost-light"], [1, "student-links"], [1, "b"], ["routerLink", "/events"], ["routerLink", "/notices"], [1, "section", "alt", 2, "padding", "30px 0"], [1, "sec-title", 2, "margin-bottom", "20px"], [2, "font-size", "1.35rem"], [1, "imp-strip"], ["href", "#i-cal"], ["href", "#i-award"], ["href", "#i-chat"], ["routerLink", "/research"], ["href", "#i-down"], ["routerLink", "/careers"], ["href", "#i-people"], ["href", "#i-pin"], [1, "stat"], [3, "routerLink"], ["type", "button", "role", "tab", 3, "click"], [1, "pillars"], [1, "pillar"], ["heading", "No notices published", "body", "New notifications will appear here as they are issued."], [1, "notice"], [1, "date"], [1, "meta"], [1, "badge", "badge-new"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"], [1, "news-card"], [1, "thumb"], [2, "width", "100%", "height", "100%", "object-fit", "cover", 3, "src", "alt"], [3, "seed", "label"], [1, "tag"], [1, "body"], [1, "read-more", 3, "routerLink"], ["heading", "No scheduled events", "body", "Conferences, seminars and competitions will be listed here."], [1, "event"], [1, "cal"], [1, "m"], [1, "d"], [1, "y"], [1, "info"], [1, "place"], ["width", "13", "height", "13"], ["href", "#i-clock"], [1, "act"], [1, "badge", "badge-open"], [1, "btn", "btn-gold", "btn-sm", 3, "routerLink"], [1, "badge", "badge-navy"], [1, "role"], [1, "ph"], [3, "name"], [1, "qual"], [1, "btn", "btn-navy", "btn-sm", 3, "routerLink"], ["heading", "Profiles pending", "body", "Leadership profiles will appear here once published."], [1, "acad-card", 3, "routerLink"], [1, "debate-card"], [1, "top"], [1, "topic"], [1, "badge"], [1, "stance"], [1, "against"], [1, "debate-meta"], ["fragment", "discussion", 1, "btn", "btn-ghost-light", "btn-sm", 3, "routerLink"]], template: function InstitutionPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "aside", 3)(4, "section", 4)(5, "div", 5)(6, "h3");
      \u0275\u0275text(7, "About Tarksanhita");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
      \u0275\u0275element(10, "ts-placeholder-art", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, " Tarksanhita is an independent centre for legal education, structured debate and applied reasoning, founded on the conviction that sound law rests on sound logic. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, " The Centre brings together students, practitioners and scholars to examine legal questions through disciplined argument, rigorous research and open academic exchange. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275text(16, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "To cultivate a generation of jurists who argue with evidence, reason with clarity and act with integrity.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 9);
      \u0275\u0275text(20, "Our Vision");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "To become India's foremost forum where law, logic and public reasoning meet.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 10);
      \u0275\u0275text(24, "Read More");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(25, InstitutionPage_Conditional_25_Template, 22, 6, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "section", 4)(27, "div", 5)(28, "h3");
      \u0275\u0275text(29, "Important Links");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "ul", 12);
      \u0275\u0275repeaterCreate(31, InstitutionPage_For_32_Template, 3, 2, "li", null, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "section", 4)(34, "div", 5)(35, "h3");
      \u0275\u0275text(36, "Downloads");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 13);
      \u0275\u0275text(38, "All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "ul", 12)(40, "li")(41, "a", 14);
      \u0275\u0275text(42, "Prospectus 2026\u201327 ");
      \u0275\u0275elementStart(43, "span", 15);
      \u0275\u0275text(44, "PDF");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "li")(46, "a", 14);
      \u0275\u0275text(47, "Admission Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 14);
      \u0275\u0275text(50, "Fee Structure");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "a", 16);
      \u0275\u0275text(53, "Debate Rulebook");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 17);
      \u0275\u0275text(56, "Citation Style Guide");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(57, "div", 18);
      \u0275\u0275element(58, "ts-hero-carousel");
      \u0275\u0275elementStart(59, "section", 19)(60, "div", 5)(61, "h2");
      \u0275\u0275text(62, "Welcome to Tarksanhita");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span", 20);
      \u0275\u0275text(64, "Estd. 2016");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 6)(66, "div", 21);
      \u0275\u0275repeaterCreate(67, InstitutionPage_For_68_Template, 2, 4, "button", 22, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(69, InstitutionPage_Case_69_Template, 26, 0, "div", 23)(70, InstitutionPage_Case_70_Template, 23, 0, "div", 23)(71, InstitutionPage_Case_71_Template, 7, 0, "div", 23)(72, InstitutionPage_Case_72_Template, 23, 1, "div", 23)(73, InstitutionPage_Case_73_Template, 7, 0, "div", 23)(74, InstitutionPage_Case_74_Template, 7, 0, "div", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "section", 24)(76, "div", 5)(77, "h2");
      \u0275\u0275text(78, "Notice Board");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "a", 25);
      \u0275\u0275text(80, "View All Notices");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(81, InstitutionPage_Conditional_81_Template, 2, 1, "div", 6)(82, InstitutionPage_Conditional_82_Template, 2, 0, "div", 6)(83, InstitutionPage_Conditional_83_Template, 4, 0, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "section", 4)(85, "div", 5)(86, "h2");
      \u0275\u0275text(87, "Latest News");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "a", 27);
      \u0275\u0275text(89, "All News");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 6);
      \u0275\u0275conditionalCreate(91, InstitutionPage_Conditional_91_Template, 1, 1, "ts-loading-state", 28)(92, InstitutionPage_Conditional_92_Template, 1, 0, "ts-empty-state", 29)(93, InstitutionPage_Conditional_93_Template, 3, 0, "div", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "section", 31)(95, "div", 5)(96, "h2");
      \u0275\u0275text(97, "Upcoming Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "a", 32);
      \u0275\u0275text(99, "Full Calendar");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(100, InstitutionPage_Conditional_100_Template, 2, 1, "div", 6)(101, InstitutionPage_Conditional_101_Template, 2, 0, "div", 6)(102, InstitutionPage_Conditional_102_Template, 3, 0, "div");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "aside", 33)(104, "div", 34);
      \u0275\u0275repeaterCreate(105, InstitutionPage_For_106_Template, 14, 8, "div", 35, _forTrack2, false, InstitutionPage_ForEmpty_107_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 36)(109, "b");
      \u0275\u0275text(110, "Admission Helpdesk");
      \u0275\u0275elementEnd();
      \u0275\u0275text(111, " Counselling for the 2026\u201327 session is available on working days, 10:00\u201317:00 IST. ");
      \u0275\u0275elementStart(112, "div", 37)(113, "a", 38);
      \u0275\u0275text(114, "Talk to Us");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "section", 4)(116, "div", 5)(117, "h3");
      \u0275\u0275text(118, "Quick Access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "ul", 12)(120, "li")(121, "a", 39);
      \u0275\u0275text(122, "Student Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "li")(124, "a", 39);
      \u0275\u0275text(125, "Faculty Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "li")(127, "a", 40);
      \u0275\u0275text(128, "Examination Portal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "li")(130, "a", 40);
      \u0275\u0275text(131, "Fee Payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "li")(133, "a", 41);
      \u0275\u0275text(134, "Grievance Redressal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "li")(136, "a", 42);
      \u0275\u0275text(137, "Admin Panel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(138, "section", 4)(139, "div", 5)(140, "h3");
      \u0275\u0275text(141, "Follow Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 6)(143, "div", 43)(144, "a", 44);
      \u0275\u0275text(145, "f");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "a", 45);
      \u0275\u0275text(147, "X");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "a", 46);
      \u0275\u0275text(149, "in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "a", 47);
      \u0275\u0275text(151, "\u25B6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "a", 48);
      \u0275\u0275text(153, "\u25CE");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(154, "section", 49)(155, "div", 1)(156, "div", 50)(157, "div", 51);
      \u0275\u0275text(158, "Programmes & Departments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "h2");
      \u0275\u0275text(160, "Academics");
      \u0275\u0275elementEnd();
      \u0275\u0275element(161, "div", 52);
      \u0275\u0275elementStart(162, "p");
      \u0275\u0275text(163, "Subject clusters spanning certificate, diploma, postgraduate and doctoral study. Every cluster pairs doctrinal instruction with an examined argumentation component.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(164, InstitutionPage_Conditional_164_Template, 3, 0, "div", 53)(165, InstitutionPage_Conditional_165_Template, 1, 0, "ts-empty-state", 54);
      \u0275\u0275elementStart(166, "div", 55)(167, "a", 56);
      \u0275\u0275text(168, "View All Programmes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "a", 57);
      \u0275\u0275text(170, "Apply for Admission");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(171, "section", 58)(172, "div", 1)(173, "div", 50)(174, "div", 51);
      \u0275\u0275text(175, "Active Motions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "h2");
      \u0275\u0275text(177, "Debate & Logic");
      \u0275\u0275elementEnd();
      \u0275\u0275element(178, "div", 52);
      \u0275\u0275elementStart(179, "p");
      \u0275\u0275text(180, "Motions are published in advance, argued under recorded rules and decided by adjudicators who must give written reasons. Registered members may join the discussion on any live motion.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(181, InstitutionPage_Conditional_181_Template, 3, 0, "div", 59)(182, InstitutionPage_Conditional_182_Template, 1, 0, "ts-empty-state", 60);
      \u0275\u0275elementStart(183, "div", 55)(184, "a", 61);
      \u0275\u0275text(185, "All Debates & Archive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(186, "section", 62)(187, "div", 1)(188, "div", 50)(189, "div", 51);
      \u0275\u0275text(190, "Scholarship");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "h2");
      \u0275\u0275text(192, "Research & Publications");
      \u0275\u0275elementEnd();
      \u0275\u0275element(193, "div", 52);
      \u0275\u0275elementStart(194, "p");
      \u0275\u0275text(195, "Two peer-reviewed journals, a working-paper series and an open repository of case notes produced by faculty, fellows and students.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "div", 63)(197, "div", 64)(198, "div", 65);
      \u0275\u0275text(199, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "h4");
      \u0275\u0275text(201, "Research Papers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "p");
      \u0275\u0275text(203, "Doctrinal, empirical and comparative papers across all four standing research centres.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "a", 66);
      \u0275\u0275text(205, "Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 64)(207, "div", 65);
      \u0275\u0275text(208, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "h4");
      \u0275\u0275text(210, "Journals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "p");
      \u0275\u0275text(212, "Tarksanhita Law Review and the Journal of Logic & Argument, both double-blind reviewed.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "a", 66);
      \u0275\u0275text(214, "Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "div", 64)(216, "div", 65);
      \u0275\u0275text(217, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "h4");
      \u0275\u0275text(219, "Articles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "p");
      \u0275\u0275text(221, "Shorter commentary on legislative developments and recent judgments.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "a", 67);
      \u0275\u0275text(223, "Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "div", 64)(225, "div", 65);
      \u0275\u0275text(226, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "h4");
      \u0275\u0275text(228, "Case Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "p");
      \u0275\u0275text(230, "Structured notes on landmark judgments with argument maps and dissent analysis.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "a", 68);
      \u0275\u0275text(232, "Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div", 64)(234, "div", 65);
      \u0275\u0275text(235, "05");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "h4");
      \u0275\u0275text(237, "Legal Research");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "p");
      \u0275\u0275text(239, "Methodology guides, datasets and replication material for empirical legal work.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "a", 69);
      \u0275\u0275text(241, "Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "div", 64)(243, "div", 65);
      \u0275\u0275text(244, "06");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "h4");
      \u0275\u0275text(246, "Faculty Publications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "p");
      \u0275\u0275text(248, "Books, monographs and externally published work by Centre faculty.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "a", 66);
      \u0275\u0275text(250, "Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "div", 64)(252, "div", 65);
      \u0275\u0275text(253, "07");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "h4");
      \u0275\u0275text(255, "Student Research");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "p");
      \u0275\u0275text(257, "Dissertations, prize essays and student-led working papers.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "a", 66);
      \u0275\u0275text(259, "Browse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 64)(261, "div", 65);
      \u0275\u0275text(262, "08");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "h4");
      \u0275\u0275text(264, "Call for Papers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "p");
      \u0275\u0275text(266, "Open calls, submission windows and editorial guidelines for forthcoming volumes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "a", 70);
      \u0275\u0275text(268, "Browse");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(269, "section", 71)(270, "div", 1)(271, "div", 50)(272, "div", 51);
      \u0275\u0275text(273, "Knowledge Resources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "h2");
      \u0275\u0275text(275, "Digital Library");
      \u0275\u0275elementEnd();
      \u0275\u0275element(276, "div", 52);
      \u0275\u0275elementStart(277, "p");
      \u0275\u0275text(278, "Search the catalogue across books, journals, statutes, law reports and study material.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "div", 72)(280, "a", 73)(281, "div", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(282, "svg");
      \u0275\u0275element(283, "use", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(284, "b");
      \u0275\u0275text(285, "Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "small");
      \u0275\u0275text(287, "Core & reference");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "a", 73)(289, "div", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(290, "svg");
      \u0275\u0275element(291, "use", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(292, "b");
      \u0275\u0275text(293, "Journals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "small");
      \u0275\u0275text(295, "Subscriptions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "a", 73)(297, "div", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(298, "svg");
      \u0275\u0275element(299, "use", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(300, "b");
      \u0275\u0275text(301, "Research Papers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "small");
      \u0275\u0275text(303, "Open access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "a", 73)(305, "div", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(306, "svg");
      \u0275\u0275element(307, "use", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(308, "b");
      \u0275\u0275text(309, "Bare Acts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "small");
      \u0275\u0275text(311, "Central & State");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "a", 73)(313, "div", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(314, "svg");
      \u0275\u0275element(315, "use", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(316, "b");
      \u0275\u0275text(317, "Case Laws");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "small");
      \u0275\u0275text(319, "Reported judgments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "a", 73)(321, "div", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(322, "svg");
      \u0275\u0275element(323, "use", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(324, "b");
      \u0275\u0275text(325, "Constitution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "small");
      \u0275\u0275text(327, "Annotated text");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(328, "a", 73)(329, "div", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(330, "svg");
      \u0275\u0275element(331, "use", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(332, "b");
      \u0275\u0275text(333, "Legal Databases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "small");
      \u0275\u0275text(335, "Licensed access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(336, "a", 73)(337, "div", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(338, "svg");
      \u0275\u0275element(339, "use", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(340, "b");
      \u0275\u0275text(341, "Study Materials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "small");
      \u0275\u0275text(343, "Course-linked");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(344, "section", 83)(345, "div", 1)(346, "div", 84)(347, "div")(348, "div", 85);
      \u0275\u0275text(349, "For Enrolled Learners");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "h2", 86);
      \u0275\u0275text(351, "Student Corner");
      \u0275\u0275elementEnd();
      \u0275\u0275element(352, "div", 87);
      \u0275\u0275elementStart(353, "p", 88);
      \u0275\u0275text(354, " Everything an enrolled student needs in one place \u2014 results, examination forms, assignment submission, scholarships, certificates and downloads. Sign in with your enrolment number to access personalised records. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "div", 89)(356, "a", 90);
      \u0275\u0275text(357, "Student Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "a", 91);
      \u0275\u0275text(359, "New Registration");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(360, "div", 92)(361, "a", 39)(362, "span", 93);
      \u0275\u0275text(363, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275text(364, " Student Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "a", 40)(366, "span", 93);
      \u0275\u0275text(367, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275text(368, " Results");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "a", 40)(370, "span", 93);
      \u0275\u0275text(371, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275text(372, " Examination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "a", 40)(374, "span", 93);
      \u0275\u0275text(375, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275text(376, " Assignments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "a", 17)(378, "span", 93);
      \u0275\u0275text(379, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275text(380, " Study Materials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "a", 94)(382, "span", 93);
      \u0275\u0275text(383, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275text(384, " Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "a", 95)(386, "span", 93);
      \u0275\u0275text(387, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275text(388, " Scholarships");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "a", 40)(390, "span", 93);
      \u0275\u0275text(391, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275text(392, " Certificates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "a", 40)(394, "span", 93);
      \u0275\u0275text(395, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275text(396, " Downloads");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(397, "section", 96)(398, "div", 1)(399, "div", 97)(400, "div", 51);
      \u0275\u0275text(401, "Frequently Visited");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "h2", 98);
      \u0275\u0275text(403, "Important Links");
      \u0275\u0275elementEnd();
      \u0275\u0275element(404, "div", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "div", 99)(406, "a", 14)(407, "span", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(408, "svg");
      \u0275\u0275element(409, "use", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(410, "Admissions");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(411, "a", 40)(412, "span", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(413, "svg");
      \u0275\u0275element(414, "use", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(415, "Examination");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(416, "a", 40)(417, "span", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(418, "svg");
      \u0275\u0275element(419, "use", 101);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(420, "Results");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(421, "a", 95)(422, "span", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(423, "svg");
      \u0275\u0275element(424, "use", 102);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(425, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(426, "a", 94)(427, "span", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(428, "svg");
      \u0275\u0275element(429, "use", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(430, "Academic Calendar");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(431, "a", 103)(432, "span", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(433, "svg");
      \u0275\u0275element(434, "use", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(435, "Research");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(436, "a", 17)(437, "span", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(438, "svg");
      \u0275\u0275element(439, "use", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(440, "Library");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(441, "a", 40)(442, "span", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(443, "svg");
      \u0275\u0275element(444, "use", 104);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(445, "Downloads");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(446, "a", 105)(447, "span", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(448, "svg");
      \u0275\u0275element(449, "use", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(450, "Careers");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(451, "a", 41)(452, "span", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(453, "svg");
      \u0275\u0275element(454, "use", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(455, "Contact");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_3_0;
      \u0275\u0275advance(25);
      \u0275\u0275conditional((tmp_0_0 = ctx.stats()) ? 25 : -1, tmp_0_0);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.quickLinks);
      \u0275\u0275advance(36);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_3_0 = ctx.activeTab()) === "about" ? 69 : tmp_3_0 === "mission" ? 70 : tmp_3_0 === "vision" ? 71 : tmp_3_0 === "excellence" ? 72 : tmp_3_0 === "research" ? 73 : tmp_3_0 === "debate" ? 74 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 81 : !ctx.notices().length ? 82 : 83);
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 91 : !ctx.news().length ? 92 : 93);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.loading() ? 100 : !ctx.events().length ? 101 : 102);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.profiles());
      \u0275\u0275advance(59);
      \u0275\u0275conditional(ctx.topics().length ? 164 : !ctx.loading() ? 165 : -1);
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.debates().length ? 181 : !ctx.loading() ? 182 : -1);
      \u0275\u0275advance(99);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(17, _c1));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(18, _c2));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(19, _c3));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(20, _c4));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(21, _c5));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(22, _c6));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(23, _c7));
    }
  }, dependencies: [RouterLink, HeroCarousel, PlaceholderArt, AvatarArt, LoadingState, EmptyState, DatePipe, DecimalPipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstitutionPage, [{
    type: Component,
    args: [{ selector: "ts-institution", standalone: true, imports: [RouterLink, DatePipe, DecimalPipe, HeroCarousel, PlaceholderArt, AvatarArt, LoadingState, EmptyState], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="page">
  <div class="container">
    <div class="grid3">

      <!-- ==================================================== LEFT SIDEBAR -->
      <aside class="col-left">

        <section class="panel">
          <div class="panel-head"><h3>About Tarksanhita</h3></div>
          <div class="panel-body">
            <div class="about-thumb" style="height:132px;padding:0;overflow:hidden">
              <ts-placeholder-art seed="about-tarksanhita" label="Tarksanhita academic block" />
            </div>
            <p>
              Tarksanhita is an independent centre for legal education, structured debate and
              applied reasoning, founded on the conviction that sound law rests on sound logic.
            </p>
            <p>
              The Centre brings together students, practitioners and scholars to examine legal
              questions through disciplined argument, rigorous research and open academic exchange.
            </p>

            <div class="mini-head">Our Mission</div>
            <p>To cultivate a generation of jurists who argue with evidence, reason with clarity and act with integrity.</p>

            <div class="mini-head">Our Vision</div>
            <p>To become India's foremost forum where law, logic and public reasoning meet.</p>

            <a class="btn btn-ghost btn-sm" routerLink="/about">Read More</a>
          </div>

          @if (stats(); as s) {
            <div class="stat-row">
              <div class="stat"><b>{{ s.learners | number }}</b><small>Learners</small></div>
              <div class="stat"><b>{{ s.faculty }}</b><small>Faculty &amp; Fellows</small></div>
              <div class="stat"><b>{{ s.programmes }}</b><small>Programmes</small></div>
              <div class="stat"><b>{{ s.publications }}</b><small>Publications</small></div>
            </div>
          }
        </section>

        <section class="panel">
          <div class="panel-head"><h3>Important Links</h3></div>
          <ul class="link-list panel-body" style="padding:6px 12px">
            @for (link of quickLinks; track link.label) {
              <li><a [routerLink]="link.link">{{ link.label }}</a></li>
            }
          </ul>
        </section>

        <section class="panel">
          <div class="panel-head"><h3>Downloads</h3><a class="more" routerLink="/students">All</a></div>
          <ul class="link-list panel-body" style="padding:6px 12px">
            <li><a routerLink="/admissions">Prospectus 2026&ndash;27 <span class="badge badge-outline">PDF</span></a></li>
            <li><a routerLink="/admissions">Admission Form</a></li>
            <li><a routerLink="/admissions">Fee Structure</a></li>
            <li><a routerLink="/debates">Debate Rulebook</a></li>
            <li><a routerLink="/library">Citation Style Guide</a></li>
          </ul>
        </section>

      </aside>

      <!-- ==================================================== CENTRE COLUMN -->
      <div class="col-center">

        <ts-hero-carousel />

        <!-- Welcome -->
        <section class="panel welcome">
          <div class="panel-head"><h2>Welcome to Tarksanhita</h2><span class="more">Estd. 2016</span></div>
          <div class="panel-body">
            <div class="tabs" role="tablist">
              @for (tab of tabs; track tab.key) {
                <button type="button"
                        role="tab"
                        [class.active]="activeTab() === tab.key"
                        [attr.aria-selected]="activeTab() === tab.key"
                        (click)="activeTab.set(tab.key)">{{ tab.label }}</button>
              }
            </div>

            @switch (activeTab()) {
              @case ('about') {
                <div class="tab-panel active">
                  <h4>About Tarksanhita</h4>
                  <p>
                    Tarksanhita &mdash; the <em>Compendium of Reasoning</em> &mdash; is a centre for law, logic,
                    debate and knowledge. It was established to address a simple gap in legal training:
                    students learn what the law says long before they learn how to argue about it well.
                    The Centre exists to close that gap.
                  </p>
                  <p>
                    Teaching here is organised around the argument rather than the syllabus alone. Every
                    course pairs doctrinal instruction with an adversarial exercise, every research fellow
                    defends their thesis before a mixed panel, and every student passes through the moot
                    court before they graduate.
                  </p>
                  <div class="pillars">
                    <div class="pillar"><b>Doctrine</b><span>Statute, precedent and constitutional text read closely.</span></div>
                    <div class="pillar"><b>Method</b><span>Formal and informal logic applied to legal reasoning.</span></div>
                    <div class="pillar"><b>Practice</b><span>Moot courts, clinics and legal-aid engagement.</span></div>
                  </div>
                </div>
              }
              @case ('mission') {
                <div class="tab-panel active">
                  <h4>Our Mission</h4>
                  <p>
                    To cultivate jurists, scholars and citizens who reason from evidence, argue in good
                    faith and hold their own conclusions to the same scrutiny they apply to others'.
                  </p>
                  <p>
                    The Centre pursues this through four commitments: accessible legal education without
                    dilution of rigour; research that is published, cited and contestable; debate conducted
                    under published rules and neutral adjudication; and a library open to every enrolled
                    learner without gatekeeping.
                  </p>
                  <div class="pillars">
                    <div class="pillar"><b>Rigour</b><span>No claim without a source; no source without scrutiny.</span></div>
                    <div class="pillar"><b>Access</b><span>Fee waivers and open digital resources.</span></div>
                    <div class="pillar"><b>Integrity</b><span>Published conflict-of-interest and ethics norms.</span></div>
                  </div>
                </div>
              }
              @case ('vision') {
                <div class="tab-panel active">
                  <h4>Our Vision</h4>
                  <p>
                    To become the foremost Indian forum where law, logic and public reasoning meet &mdash; a
                    place practitioners consult, scholars publish in, and students are formed by.
                  </p>
                  <p>
                    Over the coming decade the Centre intends to build a fully open case-law and bare-act
                    repository, host an annual national conference on legal reasoning, and place a trained
                    adjudicator in every affiliated debating society in the country.
                  </p>
                </div>
              }
              @case ('excellence') {
                <div class="tab-panel active">
                  <h4>Academic Excellence</h4>
                  <p>
                    Programmes span certificate, diploma, postgraduate and doctoral levels across nine
                    subject clusters. Assessment is continuous: written submissions, oral defence, case
                    commentary and a compulsory moot component.
                  </p>
                  <p>
                    Faculty are drawn from the academy, the bar and the bench, and every course is
                    externally reviewed once every three years. Course outlines, reading lists and
                    assessment rubrics are published before enrolment opens.
                  </p>
                  <div class="pillars">
                    <div class="pillar"><b>{{ topics().length || 9 }} Clusters</b><span>Certificate to doctoral level.</span></div>
                    <div class="pillar"><b>1:14 Ratio</b><span>Faculty to enrolled learner.</span></div>
                    <div class="pillar"><b>External Review</b><span>Triennial audit of every course.</span></div>
                  </div>
                </div>
              }
              @case ('research') {
                <div class="tab-panel active">
                  <h4>Legal Research</h4>
                  <p>
                    Research is organised into standing centres for constitutional studies, criminal
                    justice, technology &amp; law, and human rights. Each runs a working-paper series, an
                    annual call for papers and a public seminar programme.
                  </p>
                  <p>
                    The Centre operates a double-blind peer review process for its two flagship journals
                    and maintains an ethics committee that clears all empirical work involving human
                    participants.
                  </p>
                </div>
              }
              @case ('debate') {
                <div class="tab-panel active">
                  <h4>Debate &amp; Logic</h4>
                  <p>
                    The debating programme is not an extracurricular add-on &mdash; it is examined. Students
                    are trained in argument construction, fallacy identification, burden allocation and
                    rebuttal, then tested in adjudicated rounds against published criteria.
                  </p>
                  <p>
                    Motions are drawn from live legal and policy controversies. Adjudicators publish
                    written reasons, and every decision may be appealed to a review panel &mdash; the same
                    discipline the Centre expects of courts.
                  </p>
                </div>
              }
            }
          </div>
        </section>

        <!-- Notice board -->
        <section class="panel" id="notices">
          <div class="panel-head"><h2>Notice Board</h2><a class="more" routerLink="/notices">View All Notices</a></div>

          @if (loading()) {
            <div class="panel-body"><ts-loading-state [count]="6" /></div>
          } @else if (!notices().length) {
            <div class="panel-body"><ts-empty-state heading="No notices published" body="New notifications will appear here as they are issued." /></div>
          } @else {
            <div class="notice-scroll">
              <ul>
                @for (notice of noticeLoop(); track $index) {
                  <li class="notice">
                    <div class="date">
                      <b>{{ notice.noticeDate | date: 'dd' }}</b>
                      <span>{{ notice.noticeDate | date: 'MMM' }}</span>
                    </div>
                    <div class="meta">
                      <a [routerLink]="['/notices', notice.slug]">
                        {{ notice.title }}
                        @if (isNew(notice.noticeDate)) { <span class="badge badge-new">New</span> }
                      </a>
                      <small>
                        {{ notice.department }}
                        @if (notice.referenceNo) { &middot; Ref {{ notice.referenceNo }} }
                      </small>
                    </div>
                    <a class="btn btn-ghost btn-sm" [routerLink]="['/notices', notice.slug]">View</a>
                  </li>
                }
              </ul>
            </div>
          }
        </section>

        <!-- Latest news -->
        <section class="panel">
          <div class="panel-head"><h2>Latest News</h2><a class="more" routerLink="/news">All News</a></div>
          <div class="panel-body">
            @if (loading()) {
              <ts-loading-state [count]="4" />
            } @else if (!news().length) {
              <ts-empty-state heading="No news yet" body="Announcements from the Centre will be listed here." />
            } @else {
              <div class="news-grid">
                @for (item of news(); track item.id) {
                  <article class="news-card">
                    <div class="thumb">
                      @if (item.imageUrl) {
                        <img [src]="item.imageUrl" [alt]="item.title" style="width:100%;height:100%;object-fit:cover" />
                      } @else {
                        <ts-placeholder-art [seed]="item.slug" [label]="item.title" />
                      }
                      <span class="tag">{{ item.category }}</span>
                    </div>
                    <div class="body">
                      <time [attr.datetime]="item.publishedAt">{{ item.publishedAt | date: 'dd MMMM y' }}</time>
                      <h4>{{ item.title }}</h4>
                      <p>{{ item.summary }}</p>
                      <a class="read-more" [routerLink]="['/news', item.slug]">Read More</a>
                    </div>
                  </article>
                }
              </div>
            }
          </div>
        </section>

        <!-- Upcoming events -->
        <section class="panel" id="events">
          <div class="panel-head"><h2>Upcoming Events</h2><a class="more" routerLink="/events">Full Calendar</a></div>

          @if (loading()) {
            <div class="panel-body"><ts-loading-state [count]="5" /></div>
          } @else if (!events().length) {
            <div class="panel-body"><ts-empty-state heading="No scheduled events" body="Conferences, seminars and competitions will be listed here." /></div>
          } @else {
            <div>
              @for (event of events(); track event.id) {
                <div class="event">
                  <div class="cal">
                    <div class="m">{{ event.startsAt | date: 'MMM' }}</div>
                    <div class="d">{{ event.startsAt | date: 'dd' }}</div>
                    <div class="y">{{ event.startsAt | date: 'y' }}</div>
                  </div>
                  <div class="info">
                    <h4>{{ event.title }}</h4>
                    <div class="place">
                      <span><svg width="13" height="13"><use href="#i-pin" /></svg> {{ event.venue }}</span>
                      <span><svg width="13" height="13"><use href="#i-clock" /></svg> {{ event.startsAt | date: 'HH:mm' }} IST</span>
                    </div>
                  </div>
                  <div class="act">
                    @if (event.registrationOpen) {
                      <span class="badge badge-open">Registration Open</span>
                      <a class="btn btn-gold btn-sm" [routerLink]="['/events', event.slug]">Register</a>
                    } @else {
                      <span class="badge badge-navy">Open to All</span>
                      <a class="btn btn-ghost btn-sm" [routerLink]="['/events', event.slug]">Details</a>
                    }
                  </div>
                </div>
              }
            </div>
          }
        </section>

      </div>

      <!-- ==================================================== RIGHT SIDEBAR -->
      <aside class="col-right">
        <div class="profile-wrap">
          @for (person of profiles(); track person.id) {
            <div class="profile-card">
              <div class="role">{{ person.designation }}</div>
              <div class="ph">
                @if (person.photoUrl) {
                  <img [src]="person.photoUrl" [alt]="person.fullName" style="width:100%;height:100%;object-fit:cover" />
                } @else {
                  <ts-avatar-art [name]="person.fullName" />
                }
              </div>
              <h4>{{ person.fullName }}</h4>
              <div class="qual">{{ person.qualifications }}</div>
              <p>{{ person.shortBio }}</p>
              <a class="btn btn-navy btn-sm" [routerLink]="['/faculty', person.slug]">View Profile</a>
            </div>
          } @empty {
            @if (!loading()) {
              <ts-empty-state heading="Profiles pending" body="Leadership profiles will appear here once published." />
            }
          }
        </div>

        <div class="side-note">
          <b>Admission Helpdesk</b>
          Counselling for the 2026&ndash;27 session is available on working days, 10:00&ndash;17:00 IST.
          <div style="margin-top:9px"><a class="btn btn-gold btn-sm" routerLink="/contact">Talk to Us</a></div>
        </div>

        <section class="panel">
          <div class="panel-head"><h3>Quick Access</h3></div>
          <ul class="link-list panel-body" style="padding:6px 12px">
            <li><a routerLink="/login">Student Login</a></li>
            <li><a routerLink="/login">Faculty Login</a></li>
            <li><a routerLink="/students">Examination Portal</a></li>
            <li><a routerLink="/students">Fee Payment</a></li>
            <li><a routerLink="/contact">Grievance Redressal</a></li>
            <li><a routerLink="/admin">Admin Panel</a></li>
          </ul>
        </section>

        <section class="panel">
          <div class="panel-head"><h3>Follow Us</h3></div>
          <div class="panel-body">
            <div class="social-row">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="X">X</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">&#9654;</a>
              <a href="#" aria-label="Instagram">&#9678;</a>
            </div>
          </div>
        </section>
      </aside>

    </div>
  </div>
</main>

<!-- ======================================================== ACADEMICS -->
<section class="section alt" id="academics">
  <div class="container">
    <div class="sec-title">
      <div class="kicker">Programmes &amp; Departments</div>
      <h2>Academics</h2>
      <div class="rule"></div>
      <p>Subject clusters spanning certificate, diploma, postgraduate and doctoral study. Every cluster pairs doctrinal instruction with an examined argumentation component.</p>
    </div>

    @if (topics().length) {
      <div class="acad-grid">
        @for (topic of topics(); track topic.id) {
          <a class="acad-card" [routerLink]="['/legal-topics', topic.slug]">
            <div class="ic"><svg><use [attr.href]="iconFor(topic.iconKey)" /></svg></div>
            <h4>{{ topic.title }}</h4>
            <p>{{ topic.summary }}</p>
            <div class="meta"><span>{{ levelFor($index) }}</span><span>3&ndash;36 Months</span></div>
          </a>
        }
      </div>
    } @else if (!loading()) {
      <ts-empty-state heading="Programmes are being published" body="The academic catalogue will appear here shortly." />
    }

    <div class="text-center" style="margin-top:26px">
      <a class="btn btn-navy" routerLink="/academics">View All Programmes</a>
      <a class="btn btn-gold" routerLink="/admissions">Apply for Admission</a>
    </div>
  </div>
</section>

<!-- ======================================================== DEBATES -->
<section class="section deep" id="debates">
  <div class="container">
    <div class="sec-title">
      <div class="kicker">Active Motions</div>
      <h2>Debate &amp; Logic</h2>
      <div class="rule"></div>
      <p>Motions are published in advance, argued under recorded rules and decided by adjudicators who must give written reasons. Registered members may join the discussion on any live motion.</p>
    </div>

    @if (debates().length) {
      <div class="debate-grid">
        @for (debate of debates(); track debate.id) {
          <article class="debate-card">
            <div class="top">
              <div>
                <div class="topic">{{ debate.topic }}</div>
                <h3>{{ debate.title }}</h3>
              </div>
              <span class="badge" [class.badge-open]="debate.status === 'Live'" [class.badge-navy]="debate.status !== 'Live'">
                {{ debate.status }}
              </span>
            </div>

            <div class="stance">
              <div><b>For the Motion</b><p>{{ debate.forSummary }}</p></div>
              <div class="against"><b>Against the Motion</b><p>{{ debate.againstSummary }}</p></div>
            </div>

            <div class="debate-meta">
              <span><b>{{ debate.participants.length }}</b> participants</span>
              <span><b>{{ debate.argumentCount }}</b> arguments</span>
              <span><b>{{ debate.counterArgumentCount }}</b> counterarguments</span>
              <span><svg width="13" height="13"><use href="#i-cal" /></svg> {{ debate.scheduledFor | date: 'dd MMM y' }}</span>
            </div>

            <a class="btn btn-gold btn-sm" [routerLink]="['/debates', debate.slug]">View Debate</a>
            <a class="btn btn-ghost-light btn-sm" [routerLink]="['/debates', debate.slug]" fragment="discussion">Join Discussion</a>
          </article>
        }
      </div>
    } @else if (!loading()) {
      <ts-empty-state heading="No live motions" body="Scheduled debates will be listed here once published." />
    }

    <div class="text-center" style="margin-top:26px">
      <a class="btn btn-ghost-light" routerLink="/debates">All Debates &amp; Archive</a>
    </div>
  </div>
</section>

<!-- ======================================================== RESEARCH -->
<section class="section" id="research">
  <div class="container">
    <div class="sec-title">
      <div class="kicker">Scholarship</div>
      <h2>Research &amp; Publications</h2>
      <div class="rule"></div>
      <p>Two peer-reviewed journals, a working-paper series and an open repository of case notes produced by faculty, fellows and students.</p>
    </div>

    <div class="res-grid">
      <div class="res-item"><div class="n">01</div><h4>Research Papers</h4><p>Doctrinal, empirical and comparative papers across all four standing research centres.</p><a class="read-more" routerLink="/publications">Browse</a></div>
      <div class="res-item"><div class="n">02</div><h4>Journals</h4><p>Tarksanhita Law Review and the Journal of Logic &amp; Argument, both double-blind reviewed.</p><a class="read-more" routerLink="/publications">Browse</a></div>
      <div class="res-item"><div class="n">03</div><h4>Articles</h4><p>Shorter commentary on legislative developments and recent judgments.</p><a class="read-more" routerLink="/articles">Browse</a></div>
      <div class="res-item"><div class="n">04</div><h4>Case Studies</h4><p>Structured notes on landmark judgments with argument maps and dissent analysis.</p><a class="read-more" routerLink="/case-studies">Browse</a></div>
      <div class="res-item"><div class="n">05</div><h4>Legal Research</h4><p>Methodology guides, datasets and replication material for empirical legal work.</p><a class="read-more" routerLink="/research">Browse</a></div>
      <div class="res-item"><div class="n">06</div><h4>Faculty Publications</h4><p>Books, monographs and externally published work by Centre faculty.</p><a class="read-more" routerLink="/publications">Browse</a></div>
      <div class="res-item"><div class="n">07</div><h4>Student Research</h4><p>Dissertations, prize essays and student-led working papers.</p><a class="read-more" routerLink="/publications">Browse</a></div>
      <div class="res-item"><div class="n">08</div><h4>Call for Papers</h4><p>Open calls, submission windows and editorial guidelines for forthcoming volumes.</p><a class="read-more" routerLink="/notices">Browse</a></div>
    </div>
  </div>
</section>

<!-- ======================================================== LIBRARY -->
<section class="section alt" id="library">
  <div class="container">
    <div class="sec-title">
      <div class="kicker">Knowledge Resources</div>
      <h2>Digital Library</h2>
      <div class="rule"></div>
      <p>Search the catalogue across books, journals, statutes, law reports and study material.</p>
    </div>

    <div class="lib-grid">
      <a class="lib-tile" routerLink="/library" [queryParams]="{ type: 'Book' }"><div class="ic"><svg><use href="#i-book" /></svg></div><b>Books</b><small>Core &amp; reference</small></a>
      <a class="lib-tile" routerLink="/library" [queryParams]="{ type: 'Journal' }"><div class="ic"><svg><use href="#i-doc" /></svg></div><b>Journals</b><small>Subscriptions</small></a>
      <a class="lib-tile" routerLink="/library" [queryParams]="{ type: 'ResearchPaper' }"><div class="ic"><svg><use href="#i-flask" /></svg></div><b>Research Papers</b><small>Open access</small></a>
      <a class="lib-tile" routerLink="/library" [queryParams]="{ type: 'BareAct' }"><div class="ic"><svg><use href="#i-scale" /></svg></div><b>Bare Acts</b><small>Central &amp; State</small></a>
      <a class="lib-tile" routerLink="/library" [queryParams]="{ type: 'CaseLaw' }"><div class="ic"><svg><use href="#i-gavel" /></svg></div><b>Case Laws</b><small>Reported judgments</small></a>
      <a class="lib-tile" routerLink="/library" [queryParams]="{ type: 'Constitution' }"><div class="ic"><svg><use href="#i-building" /></svg></div><b>Constitution</b><small>Annotated text</small></a>
      <a class="lib-tile" routerLink="/library" [queryParams]="{ type: 'Database' }"><div class="ic"><svg><use href="#i-globe" /></svg></div><b>Legal Databases</b><small>Licensed access</small></a>
      <a class="lib-tile" routerLink="/library" [queryParams]="{ type: 'StudyMaterial' }"><div class="ic"><svg><use href="#i-bulb" /></svg></div><b>Study Materials</b><small>Course-linked</small></a>
    </div>
  </div>
</section>

<!-- ======================================================== STUDENT CORNER -->
<section class="section deep" id="students">
  <div class="container">
    <div class="student-wrap">
      <div>
        <div class="kicker" style="font-size:.68rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold-400);font-weight:700">For Enrolled Learners</div>
        <h2 style="font-size:clamp(1.4rem,2.7vw,2.05rem);margin:8px 0 12px">Student Corner</h2>
        <div style="width:96px;height:3px;background:linear-gradient(90deg,var(--gold-600),var(--gold-300));margin-bottom:16px"></div>
        <p style="font-size:.92rem;color:#a9bcd4;max-width:520px">
          Everything an enrolled student needs in one place &mdash; results, examination forms, assignment
          submission, scholarships, certificates and downloads. Sign in with your enrolment number to
          access personalised records.
        </p>
        <div style="margin-top:18px">
          <a class="btn btn-gold" routerLink="/login">Student Login</a>
          <a class="btn btn-ghost-light" routerLink="/register">New Registration</a>
        </div>
      </div>

      <div class="student-links">
        <a routerLink="/login"><span class="b">&rarr;</span> Student Login</a>
        <a routerLink="/students"><span class="b">&rarr;</span> Results</a>
        <a routerLink="/students"><span class="b">&rarr;</span> Examination</a>
        <a routerLink="/students"><span class="b">&rarr;</span> Assignments</a>
        <a routerLink="/library"><span class="b">&rarr;</span> Study Materials</a>
        <a routerLink="/events"><span class="b">&rarr;</span> Events</a>
        <a routerLink="/notices"><span class="b">&rarr;</span> Scholarships</a>
        <a routerLink="/students"><span class="b">&rarr;</span> Certificates</a>
        <a routerLink="/students"><span class="b">&rarr;</span> Downloads</a>
      </div>
    </div>
  </div>
</section>

<!-- ======================================================== IMPORTANT LINKS -->
<section class="section alt" style="padding:30px 0">
  <div class="container">
    <div class="sec-title" style="margin-bottom:20px">
      <div class="kicker">Frequently Visited</div>
      <h2 style="font-size:1.35rem">Important Links</h2>
      <div class="rule"></div>
    </div>

    <div class="imp-strip">
      <a routerLink="/admissions"><span class="ic"><svg><use href="#i-doc" /></svg></span>Admissions</a>
      <a routerLink="/students"><span class="ic"><svg><use href="#i-cal" /></svg></span>Examination</a>
      <a routerLink="/students"><span class="ic"><svg><use href="#i-award" /></svg></span>Results</a>
      <a routerLink="/notices"><span class="ic"><svg><use href="#i-chat" /></svg></span>Notifications</a>
      <a routerLink="/events"><span class="ic"><svg><use href="#i-cal" /></svg></span>Academic Calendar</a>
      <a routerLink="/research"><span class="ic"><svg><use href="#i-flask" /></svg></span>Research</a>
      <a routerLink="/library"><span class="ic"><svg><use href="#i-book" /></svg></span>Library</a>
      <a routerLink="/students"><span class="ic"><svg><use href="#i-down" /></svg></span>Downloads</a>
      <a routerLink="/careers"><span class="ic"><svg><use href="#i-people" /></svg></span>Careers</a>
      <a routerLink="/contact"><span class="ic"><svg><use href="#i-pin" /></svg></span>Contact</a>
    </div>
  </div>
</section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstitutionPage, { className: "InstitutionPage", filePath: "src/app/pages/institution/institution.ts", lineNumber: 31 });
})();
export {
  InstitutionPage
};
//# sourceMappingURL=chunk-WHHKZ6ZO.js.map
