import {
  FOUNDER
} from "./chunk-RHDU2RCH.js";
import {
  AvatarArt,
  PageBanner,
  SectionTitle
} from "./chunk-JRDIFDAI.js";
import {
  ContentService
} from "./chunk-MBQHVFNQ.js";
import {
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-F5R4JB2K.js";

// src/app/pages/about/about.ts
var _c0 = (a0) => ["/faculty", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AboutPage_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r1);
  }
}
function AboutPage_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.founder.signOff);
  }
}
function AboutPage_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.founder.name);
  }
}
function AboutPage_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 32);
    \u0275\u0275text(2, "Name to be added");
    \u0275\u0275elementEnd()();
  }
}
function AboutPage_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.founder.credentials);
  }
}
function AboutPage_For_127_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
  if (rf & 2) {
    const person_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", person_r3.photoUrl, \u0275\u0275sanitizeUrl)("alt", person_r3.fullName);
  }
}
function AboutPage_For_127_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-avatar-art", 36);
  }
  if (rf & 2) {
    const person_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("name", person_r3.fullName);
  }
}
function AboutPage_For_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275conditionalCreate(4, AboutPage_For_127_Conditional_4_Template, 1, 2, "img", 35)(5, AboutPage_For_127_Conditional_5_Template, 1, 1, "ts-avatar-art", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 38);
    \u0275\u0275text(13, "View Profile");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const person_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r3.designation);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(person_r3.photoUrl ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(person_r3.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r3.qualifications);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r3.shortBio);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, person_r3.slug));
  }
}
var AboutPage = class _AboutPage {
  content = inject(ContentService);
  founder = FOUNDER;
  people = signal([], ...ngDevMode ? [{ debugName: "people" }] : []);
  ngOnInit() {
    this.content.for("profiles").list({ pageSize: 8 }).subscribe({
      next: (res) => this.people.set(res.items),
      error: () => this.people.set([])
    });
  }
  static \u0275fac = function AboutPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutPage, selectors: [["ts-about"]], decls: 128, vars: 6, consts: [["heading", "About Tarksanhita", "lede", "A centre for law, logic, debate and knowledge \u2014 established 2016."], [1, "section"], [1, "container"], [1, "grid3", 2, "grid-template-columns", "minmax(0,2fr) minmax(0,1fr)"], [1, "panel"], [1, "panel-head"], [1, "panel-body", "prose"], [1, "pillars"], [1, "pillar"], [1, "panel-body"], [1, "founder"], [1, "founder-photo"], [3, "src", "alt"], [1, "signoff"], [1, "founder-attrib"], [1, "founder-name"], [1, "founder-role"], [1, "founder-cred"], [1, "link-list"], ["routerLink", "/academics"], ["routerLink", "/research"], ["routerLink", "/debates"], ["routerLink", "/library"], ["routerLink", "/faculty"], ["routerLink", "/contact"], [1, "stat-row"], [1, "stat"], [1, "side-note"], [1, "section", "alt"], ["kicker", "Leadership", "heading", "Governing Council", "lede", "The Council sets academic policy, approves the annual budget and appoints external reviewers."], [1, "acad-grid"], [1, "profile-card"], [1, "name-pending"], [1, "role"], [1, "ph"], [2, "width", "100%", "height", "100%", "object-fit", "cover", 3, "src", "alt"], [3, "name"], [1, "qual"], [1, "btn", "btn-navy", "btn-sm", 3, "routerLink"]], template: function AboutPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ts-page-banner", 0);
      \u0275\u0275elementStart(1, "main", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "section", 4)(6, "div", 5)(7, "h2");
      \u0275\u0275text(8, "Introduction");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "p");
      \u0275\u0275text(11, " Tarksanhita \u2014 literally, a ");
      \u0275\u0275elementStart(12, "em");
      \u0275\u0275text(13, "compendium of reasoning");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " \u2014 was founded on a practical observation. Legal education in India teaches the content of the law thoroughly and the craft of arguing about it almost by accident. Students absorb doctrine, then learn advocacy by watching, imitating and hoping. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, " The Centre was established to make that second half explicit. Argument construction, burden allocation, fallacy identification and rebuttal are taught here as a discipline, examined like any other subject, and applied to live legal controversy rather than to abstract puzzles. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, " Everything else follows from that commitment: a curriculum that pairs every doctrinal course with an adversarial exercise, a research programme that publishes its methods alongside its conclusions, a debating format with written adjudication and a right of appeal, and a library open to every enrolled learner without gatekeeping. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "section", 4)(20, "div", 5)(21, "h2");
      \u0275\u0275text(22, "Vision & Mission");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 6)(24, "h3");
      \u0275\u0275text(25, "Our Vision");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, " To become the foremost Indian forum where law, logic and public reasoning meet \u2014 a place practitioners consult, scholars publish in, and students are formed by. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h3");
      \u0275\u0275text(29, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p");
      \u0275\u0275text(31, " To cultivate jurists, scholars and citizens who reason from evidence, argue in good faith and hold their own conclusions to the same scrutiny they apply to others'. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 7)(33, "div", 8)(34, "b");
      \u0275\u0275text(35, "Rigour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "No claim without a source; no source without scrutiny.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 8)(39, "b");
      \u0275\u0275text(40, "Access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Fee waivers, open digital resources, no gatekeeping.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 8)(44, "b");
      \u0275\u0275text(45, "Integrity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "Published ethics and conflict-of-interest norms.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 8)(49, "b");
      \u0275\u0275text(50, "Openness");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Reasons published; decisions appealable.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(53, "section", 4)(54, "div", 5)(55, "h2");
      \u0275\u0275text(56, "Founder's Message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 9)(58, "div", 10)(59, "div", 11);
      \u0275\u0275element(60, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div")(62, "blockquote");
      \u0275\u0275repeaterCreate(63, AboutPage_For_64_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(65, AboutPage_Conditional_65_Template, 2, 1, "div", 13);
      \u0275\u0275elementStart(66, "div", 14);
      \u0275\u0275conditionalCreate(67, AboutPage_Conditional_67_Template, 2, 1, "div", 15)(68, AboutPage_Conditional_68_Template, 3, 0, "div", 15);
      \u0275\u0275elementStart(69, "div", 16);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(71, AboutPage_Conditional_71_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(72, "aside")(73, "section", 4)(74, "div", 5)(75, "h3");
      \u0275\u0275text(76, "At a Glance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 9)(78, "ul", 18)(79, "li")(80, "a", 19);
      \u0275\u0275text(81, "Programmes & departments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "li")(83, "a", 20);
      \u0275\u0275text(84, "Four standing research centres");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "li")(86, "a", 21);
      \u0275\u0275text(87, "Adjudicated debate programme");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "li")(89, "a", 22);
      \u0275\u0275text(90, "Open digital library");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "li")(92, "a", 23);
      \u0275\u0275text(93, "Faculty directory");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "li")(95, "a", 24);
      \u0275\u0275text(96, "Contact the Centre");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "div", 25)(98, "div", 26)(99, "b");
      \u0275\u0275text(100, "2016");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "small");
      \u0275\u0275text(102, "Established");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 26)(104, "b");
      \u0275\u0275text(105, "9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "small");
      \u0275\u0275text(107, "Subject Clusters");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 26)(109, "b");
      \u0275\u0275text(110, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "small");
      \u0275\u0275text(112, "Research Centres");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 26)(114, "b");
      \u0275\u0275text(115, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "small");
      \u0275\u0275text(117, "Peer-Reviewed Journals");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "div", 27)(119, "b");
      \u0275\u0275text(120, "Recognition");
      \u0275\u0275elementEnd();
      \u0275\u0275text(121, " The Centre publishes its affiliation agreements, annual report and audited accounts. Copies are available from the Registrar on request. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(122, "section", 28)(123, "div", 2);
      \u0275\u0275element(124, "ts-section-title", 29);
      \u0275\u0275elementStart(125, "div", 30);
      \u0275\u0275repeaterCreate(126, AboutPage_For_127_Template, 14, 8, "div", 31, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(60);
      \u0275\u0275property("src", ctx.founder.photo, \u0275\u0275sanitizeUrl)("alt", ctx.founder.name || ctx.founder.role);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.founder.message);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.founder.signOff ? 65 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.founder.name ? 67 : 68);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.founder.role);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.founder.credentials ? 71 : -1);
      \u0275\u0275advance(55);
      \u0275\u0275repeater(ctx.people());
    }
  }, dependencies: [RouterLink, PageBanner, SectionTitle, AvatarArt], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutPage, [{
    type: Component,
    args: [{
      selector: "ts-about",
      standalone: true,
      imports: [RouterLink, PageBanner, SectionTitle, AvatarArt],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ts-page-banner
      heading="About Tarksanhita"
      lede="A centre for law, logic, debate and knowledge \u2014 established 2016." />

    <main class="section">
      <div class="container">
        <div class="grid3" style="grid-template-columns:minmax(0,2fr) minmax(0,1fr)">

          <div>
            <section class="panel">
              <div class="panel-head"><h2>Introduction</h2></div>
              <div class="panel-body prose">
                <p>
                  Tarksanhita &mdash; literally, a <em>compendium of reasoning</em> &mdash; was founded on a
                  practical observation. Legal education in India teaches the content of the law
                  thoroughly and the craft of arguing about it almost by accident. Students absorb
                  doctrine, then learn advocacy by watching, imitating and hoping.
                </p>
                <p>
                  The Centre was established to make that second half explicit. Argument construction,
                  burden allocation, fallacy identification and rebuttal are taught here as a
                  discipline, examined like any other subject, and applied to live legal controversy
                  rather than to abstract puzzles.
                </p>
                <p>
                  Everything else follows from that commitment: a curriculum that pairs every
                  doctrinal course with an adversarial exercise, a research programme that publishes
                  its methods alongside its conclusions, a debating format with written adjudication
                  and a right of appeal, and a library open to every enrolled learner without
                  gatekeeping.
                </p>
              </div>
            </section>

            <section class="panel">
              <div class="panel-head"><h2>Vision &amp; Mission</h2></div>
              <div class="panel-body prose">
                <h3>Our Vision</h3>
                <p>
                  To become the foremost Indian forum where law, logic and public reasoning meet &mdash;
                  a place practitioners consult, scholars publish in, and students are formed by.
                </p>
                <h3>Our Mission</h3>
                <p>
                  To cultivate jurists, scholars and citizens who reason from evidence, argue in good
                  faith and hold their own conclusions to the same scrutiny they apply to others'.
                </p>
                <div class="pillars">
                  <div class="pillar"><b>Rigour</b><span>No claim without a source; no source without scrutiny.</span></div>
                  <div class="pillar"><b>Access</b><span>Fee waivers, open digital resources, no gatekeeping.</span></div>
                  <div class="pillar"><b>Integrity</b><span>Published ethics and conflict-of-interest norms.</span></div>
                  <div class="pillar"><b>Openness</b><span>Reasons published; decisions appealable.</span></div>
                </div>
              </div>
            </section>

            <section class="panel">
              <div class="panel-head"><h2>Founder's Message</h2></div>
              <div class="panel-body">
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
                        <div class="founder-name"><span class="name-pending">Name to be added</span></div>
                      }
                      <div class="founder-role">{{ founder.role }}</div>
                      @if (founder.credentials) {
                        <div class="founder-cred">{{ founder.credentials }}</div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside>
            <section class="panel">
              <div class="panel-head"><h3>At a Glance</h3></div>
              <div class="panel-body">
                <ul class="link-list">
                  <li><a routerLink="/academics">Programmes &amp; departments</a></li>
                  <li><a routerLink="/research">Four standing research centres</a></li>
                  <li><a routerLink="/debates">Adjudicated debate programme</a></li>
                  <li><a routerLink="/library">Open digital library</a></li>
                  <li><a routerLink="/faculty">Faculty directory</a></li>
                  <li><a routerLink="/contact">Contact the Centre</a></li>
                </ul>
              </div>
              <div class="stat-row">
                <div class="stat"><b>2016</b><small>Established</small></div>
                <div class="stat"><b>9</b><small>Subject Clusters</small></div>
                <div class="stat"><b>4</b><small>Research Centres</small></div>
                <div class="stat"><b>2</b><small>Peer-Reviewed Journals</small></div>
              </div>
            </section>

            <div class="side-note">
              <b>Recognition</b>
              The Centre publishes its affiliation agreements, annual report and audited accounts.
              Copies are available from the Registrar on request.
            </div>
          </aside>

        </div>
      </div>
    </main>

    <section class="section alt">
      <div class="container">
        <ts-section-title
          kicker="Leadership"
          heading="Governing Council"
          lede="The Council sets academic policy, approves the annual budget and appoints external reviewers." />

        <div class="acad-grid">
          @for (person of people(); track person.id) {
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
          }
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutPage, { className: "AboutPage", filePath: "src/app/pages/about/about.ts", lineNumber: 164 });
})();
export {
  AboutPage
};
//# sourceMappingURL=chunk-FMWFFPPL.js.map
