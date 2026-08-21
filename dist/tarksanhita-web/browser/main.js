import {
  UiService
} from "./chunk-PAG2NWAG.js";
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBar
} from "./chunk-UPWUZDK7.js";
import {
  AuthService
} from "./chunk-FTSBTB32.js";
import "./chunk-MBQHVFNQ.js";
import {
  DomRendererFactory2,
  HttpErrorResponse,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withComponentInputBinding,
  withFetch,
  withInMemoryScrolling,
  withInterceptors
} from "./chunk-7TMVEVGK.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Injectable,
  InjectionToken,
  Injector,
  NgZone,
  RendererFactory2,
  RuntimeError,
  catchError,
  filter,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  setClassMetadata,
  switchMap,
  take,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵinvalidFactory
} from "./chunk-F5R4JB2K.js";

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-7TWXTAVU.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/core/guards/guards.ts
var authGuard = (_route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated())
    return true;
  return router.createUrlTree(["/login"], { queryParams: { returnUrl: state.url } });
};
var adminGuard = (_route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) {
    return router.createUrlTree(["/login"], { queryParams: { returnUrl: state.url } });
  }
  if (auth.isContentManager())
    return true;
  return router.createUrlTree(["/forbidden"]);
};
var guestGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isAuthenticated() ? router.createUrlTree(["/"]) : true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-2WB5VBMB.js").then((m) => m.PublicLayout),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-WKZMLLQM.js").then((m) => m.HomePage),
        title: "Tarksanhita Debate Forum \u2014 Express, Challenge, Persuade, Enlighten"
      },
      // The institutional overview — the original homepage, kept in full.
      {
        path: "institution",
        loadComponent: () => import("./chunk-WHHKZ6ZO.js").then((m) => m.InstitutionPage),
        title: "The Institution \u2014 Tarksanhita"
      },
      // ---------------------------------------------------------- About
      {
        path: "about",
        loadComponent: () => import("./chunk-FMWFFPPL.js").then((m) => m.AboutPage),
        title: "About Us \u2014 Tarksanhita"
      },
      // ---------------------------------------------------------- Academics
      {
        path: "academics",
        loadComponent: () => import("./chunk-AYN47HB3.js").then((m) => m.AcademicsPage),
        title: "Academics \u2014 Tarksanhita"
      },
      {
        path: "academics/:slug",
        loadComponent: () => import("./chunk-DWFM7Y4X.js").then((m) => m.ContentDetailPage),
        data: { resource: "topics", kind: "topic", section: "Academics", parent: "/academics" }
      },
      // ---------------------------------------------------------- Debates
      {
        path: "debates",
        loadComponent: () => import("./chunk-X47MXAMD.js").then((m) => m.DebatesPage),
        title: "Debate & Logic \u2014 Tarksanhita"
      },
      // Declared before ':slug' so the literal segment wins the match.
      {
        path: "debates/start",
        loadComponent: () => import("./chunk-KYNV2VDY.js").then((m) => m.StartDebatePage),
        canActivate: [authGuard],
        title: "Start a Debate \u2014 Tarksanhita"
      },
      {
        path: "debates/:slug",
        loadComponent: () => import("./chunk-Z4C5AFF5.js").then((m) => m.DebateDetailPage),
        title: "Debate \u2014 Tarksanhita"
      },
      // ---------------------------------------------------------- Research & publications
      {
        path: "research",
        loadComponent: () => import("./chunk-KIF2LKWZ.js").then((m) => m.ResearchPage),
        title: "Research & Publications \u2014 Tarksanhita"
      },
      {
        path: "publications",
        loadComponent: () => import("./chunk-6NUXOPPS.js").then((m) => m.ContentListPage),
        data: {
          resource: "research",
          kind: "research",
          title: "Publications",
          lede: "Journals, monographs and occasional papers published by the Centre.",
          filters: [
            { label: "All", value: "" },
            { label: "Journal Articles", value: "Journal" },
            { label: "Monographs", value: "Monograph" },
            { label: "Working Papers", value: "WorkingPaper" },
            { label: "Faculty Publications", value: "FacultyPublication" }
          ]
        },
        title: "Publications \u2014 Tarksanhita"
      },
      {
        path: "case-studies",
        loadComponent: () => import("./chunk-6NUXOPPS.js").then((m) => m.ContentListPage),
        data: {
          resource: "research",
          kind: "research",
          fixedCategory: "CaseStudy",
          title: "Case Studies",
          lede: "Structured notes on landmark judgments, with argument maps and analysis of dissents."
        },
        title: "Case Studies \u2014 Tarksanhita"
      },
      {
        path: "research/:slug",
        loadComponent: () => import("./chunk-DWFM7Y4X.js").then((m) => m.ContentDetailPage),
        data: { resource: "research", kind: "research", section: "Research", parent: "/research" }
      },
      // ---------------------------------------------------------- Legal topics
      {
        path: "legal-topics",
        loadComponent: () => import("./chunk-6NUXOPPS.js").then((m) => m.ContentListPage),
        data: {
          resource: "topics",
          kind: "topic",
          title: "Legal Topics",
          lede: "Subject clusters across constitutional, criminal, civil, corporate, technology and human rights law."
        },
        title: "Legal Topics \u2014 Tarksanhita"
      },
      {
        path: "legal-topics/:slug",
        loadComponent: () => import("./chunk-DWFM7Y4X.js").then((m) => m.ContentDetailPage),
        data: { resource: "topics", kind: "topic", section: "Legal Topics", parent: "/legal-topics" }
      },
      // ---------------------------------------------------------- Library
      {
        path: "library",
        loadComponent: () => import("./chunk-X366CJXM.js").then((m) => m.LibraryPage),
        title: "Digital Library \u2014 Tarksanhita"
      },
      // ---------------------------------------------------------- Events
      {
        path: "events",
        loadComponent: () => import("./chunk-6NUXOPPS.js").then((m) => m.ContentListPage),
        data: {
          resource: "events",
          kind: "event",
          title: "Events",
          lede: "Conferences, seminars, guest lectures, competitions and observances.",
          filters: [
            { label: "All", value: "" },
            { label: "Conferences", value: "Conference" },
            { label: "Seminars", value: "Seminar" },
            { label: "Competitions", value: "Competition" },
            { label: "Lectures", value: "Lecture" }
          ]
        },
        title: "Events \u2014 Tarksanhita"
      },
      {
        path: "events/:slug",
        loadComponent: () => import("./chunk-DWFM7Y4X.js").then((m) => m.ContentDetailPage),
        data: { resource: "events", kind: "event", section: "Events", parent: "/events" }
      },
      // ---------------------------------------------------------- Notices & news
      {
        path: "notices",
        loadComponent: () => import("./chunk-6NUXOPPS.js").then((m) => m.ContentListPage),
        data: {
          resource: "notices",
          kind: "notice",
          title: "Notice Board",
          lede: "Official notifications, circulars and announcements issued by the Centre.",
          filters: [
            { label: "All", value: "" },
            { label: "Admission", value: "Admission" },
            { label: "Examination", value: "Examination" },
            { label: "Scholarship", value: "Scholarship" },
            { label: "Circular", value: "Circular" }
          ]
        },
        title: "Notice Board \u2014 Tarksanhita"
      },
      {
        path: "notices/:slug",
        loadComponent: () => import("./chunk-DWFM7Y4X.js").then((m) => m.ContentDetailPage),
        data: { resource: "notices", kind: "notice", section: "Notices", parent: "/notices" }
      },
      {
        path: "news",
        loadComponent: () => import("./chunk-6NUXOPPS.js").then((m) => m.ContentListPage),
        data: { resource: "news", kind: "news", title: "Latest News", lede: "News and announcements from across the Centre." },
        title: "News \u2014 Tarksanhita"
      },
      {
        path: "news/:slug",
        loadComponent: () => import("./chunk-DWFM7Y4X.js").then((m) => m.ContentDetailPage),
        data: { resource: "news", kind: "news", section: "News", parent: "/news" }
      },
      {
        path: "articles",
        loadComponent: () => import("./chunk-6NUXOPPS.js").then((m) => m.ContentListPage),
        data: { resource: "articles", kind: "article", title: "Articles & Commentary", lede: "Short-form commentary on legislation, judgments and legal method." },
        title: "Articles \u2014 Tarksanhita"
      },
      {
        path: "articles/:slug",
        loadComponent: () => import("./chunk-DWFM7Y4X.js").then((m) => m.ContentDetailPage),
        data: { resource: "articles", kind: "article", section: "Articles", parent: "/articles" }
      },
      // ---------------------------------------------------------- People
      {
        path: "faculty",
        loadComponent: () => import("./chunk-6NUXOPPS.js").then((m) => m.ContentListPage),
        data: { resource: "profiles", kind: "profile", title: "Faculty Directory", lede: "Academic staff, fellows and members of the governing council." },
        title: "Faculty \u2014 Tarksanhita"
      },
      {
        path: "faculty/:slug",
        loadComponent: () => import("./chunk-DWFM7Y4X.js").then((m) => m.ContentDetailPage),
        data: { resource: "profiles", kind: "profile", section: "Faculty", parent: "/faculty" }
      },
      // ---------------------------------------------------------- Students, alumni, careers
      {
        path: "students",
        loadComponent: () => import("./chunk-F2ADIOPY.js").then((m) => m.StudentsPage),
        title: "Student Corner \u2014 Tarksanhita"
      },
      {
        path: "alumni",
        loadComponent: () => import("./chunk-XLKGPQZU.js").then((m) => m.StaticPage),
        data: { pageKey: "alumni" },
        title: "Alumni \u2014 Tarksanhita"
      },
      {
        path: "careers",
        loadComponent: () => import("./chunk-XLKGPQZU.js").then((m) => m.StaticPage),
        data: { pageKey: "careers" },
        title: "Careers \u2014 Tarksanhita"
      },
      {
        path: "admissions",
        loadComponent: () => import("./chunk-XLKGPQZU.js").then((m) => m.StaticPage),
        data: { pageKey: "admissions" },
        title: "Admissions \u2014 Tarksanhita"
      },
      // ---------------------------------------------------------- Contact & account
      {
        path: "contact",
        loadComponent: () => import("./chunk-VGM3CX7N.js").then((m) => m.ContactPage),
        title: "Contact Us \u2014 Tarksanhita"
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-YUIIEQ73.js").then((m) => m.ProfilePage),
        canActivate: [authGuard],
        title: "My Account \u2014 Tarksanhita"
      },
      {
        path: "forbidden",
        loadComponent: () => import("./chunk-5CPBP7SR.js").then((m) => m.MessagePage),
        data: { code: "403", heading: "Access Denied", body: "Your account does not carry the role required for this section." }
      },
      {
        path: "not-found",
        loadComponent: () => import("./chunk-5CPBP7SR.js").then((m) => m.MessagePage),
        data: { code: "404", heading: "Page Not Found", body: "The page you requested does not exist or has been moved." }
      }
    ]
  },
  // ---------------------------------------------------------------- Auth
  {
    path: "login",
    loadComponent: () => import("./chunk-7BYUXJE2.js").then((m) => m.LoginPage),
    canActivate: [guestGuard],
    title: "Sign In \u2014 Tarksanhita"
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-IQGUFYPQ.js").then((m) => m.RegisterPage),
    canActivate: [guestGuard],
    title: "Register \u2014 Tarksanhita"
  },
  // ---------------------------------------------------------------- Admin CMS
  {
    path: "admin",
    loadComponent: () => import("./chunk-GIZGK6RT.js").then((m) => m.AdminLayout),
    canActivate: [adminGuard],
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-RQOYYDJA.js").then((m) => m.AdminDashboard),
        title: "Dashboard \u2014 Tarksanhita Admin"
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-7IDWAJZ7.js").then((m) => m.AdminUsers),
        title: "Users \u2014 Tarksanhita Admin"
      },
      {
        path: "contacts",
        loadComponent: () => import("./chunk-7HP62BBO.js").then((m) => m.AdminContacts),
        title: "Enquiries \u2014 Tarksanhita Admin"
      },
      {
        path: ":resource/new",
        loadComponent: () => import("./chunk-DJ3YH4IX.js").then((m) => m.AdminContentForm)
      },
      {
        path: ":resource/:id/edit",
        loadComponent: () => import("./chunk-DJ3YH4IX.js").then((m) => m.AdminContentForm)
      },
      {
        path: ":resource",
        loadComponent: () => import("./chunk-6NQNJ4GR.js").then((m) => m.AdminContentList)
      }
    ]
  },
  { path: "**", redirectTo: "not-found" }
];

// src/app/core/interceptors/auth.interceptor.ts
var refreshing = false;
var refreshed$ = new BehaviorSubject(null);
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.accessToken;
  const authorised = token ? withToken(req, token) : req;
  return next(authorised).pipe(catchError((err) => {
    const is401 = err instanceof HttpErrorResponse && err.status === 401;
    const isAuthCall = req.url.includes("/auth/login") || req.url.includes("/auth/register") || req.url.includes("/auth/refresh");
    if (!is401 || isAuthCall || !auth.refreshToken) {
      if (is401 && !isAuthCall)
        auth.clear();
      return throwError(() => err);
    }
    return handleRefresh(req, next, auth);
  }));
};
function withToken(req, token) {
  return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
}
function handleRefresh(req, next, auth) {
  if (refreshing) {
    return refreshed$.pipe(filter((t) => t !== null), take(1), switchMap((t) => next(withToken(req, t))));
  }
  refreshing = true;
  refreshed$.next(null);
  return auth.refresh().pipe(switchMap((res) => {
    refreshing = false;
    refreshed$.next(res.accessToken);
    return next(withToken(req, res.accessToken));
  }), catchError((err) => {
    refreshing = false;
    auth.clear("/login");
    return throwError(() => err);
  }));
}

// src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  const snack = inject(MatSnackBar);
  return next(req).pipe(catchError((err) => {
    if (err instanceof HttpErrorResponse && err.status !== 401) {
      snack.open(describe(err), "Dismiss", {
        duration: 6e3,
        panelClass: ["ts-snack-error"]
      });
    }
    return throwError(() => err);
  }));
};
function describe(err) {
  if (err.status === 0) {
    return "Cannot reach the server. Check that the API is running.";
  }
  if (err.status === 403) {
    return "You do not have permission to perform this action.";
  }
  if (err.status === 404) {
    return "The requested item could not be found.";
  }
  const body = err.error;
  if (body?.errors) {
    const first = Object.values(body.errors)[0];
    if (first?.length)
      return first[0];
  }
  return body?.message ?? body?.title ?? `Request failed (${err.status}).`;
}

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      // Restores scroll position on back/forward and jumps to #fragments.
      withInMemoryScrolling({ scrollPositionRestoration: "enabled", anchorScrolling: "enabled" }),
      withComponentInputBinding()
    ),
    provideHttpClient(
      withFetch(),
      // Order matters: the auth interceptor runs first so a refreshed request is
      // not reported as an error by the one below it.
      withInterceptors([authInterceptor, errorInterceptor])
    ),
    provideAnimationsAsync(),
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 4e3, horizontalPosition: "right", verticalPosition: "bottom" }
    }
  ]
};

// src/app/app.ts
var App = class _App {
  // Constructing the service applies the stored text-size and contrast settings
  // before the first page is painted.
  ui = inject(UiService);
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["ts-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "ts-root",
      standalone: true,
      imports: [RouterOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<router-outlet />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v20.3.29
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
