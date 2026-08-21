import {
  ApiService
} from "./chunk-MBQHVFNQ.js";
import {
  Router
} from "./chunk-7TMVEVGK.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-F5R4JB2K.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "ts.access";
var REFRESH_KEY = "ts.refresh";
var USER_KEY = "ts.user";
var AuthService = class _AuthService {
  api = inject(ApiService);
  router = inject(Router);
  _user = signal(this.readStoredUser(), ...ngDevMode ? [{ debugName: "_user" }] : []);
  user = this._user.asReadonly();
  isAuthenticated = computed(() => this._user() !== null, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  roles = computed(() => this._user()?.roles ?? [], ...ngDevMode ? [{ debugName: "roles" }] : []);
  isAdmin = computed(() => this.roles().includes("Admin"), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  isContentManager = computed(() => this.roles().some((r) => r === "Admin" || r === "Editor"), ...ngDevMode ? [{ debugName: "isContentManager" }] : []);
  displayName = computed(() => this._user()?.fullName ?? "Guest", ...ngDevMode ? [{ debugName: "displayName" }] : []);
  get accessToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  get refreshToken() {
    return localStorage.getItem(REFRESH_KEY);
  }
  hasRole(...roles) {
    const mine = this.roles();
    return roles.some((r) => mine.includes(r));
  }
  login(req) {
    return this.api.post("auth/login", req).pipe(tap((res) => this.store(res)));
  }
  register(req) {
    return this.api.post("auth/register", req).pipe(tap((res) => this.store(res)));
  }
  refresh() {
    return this.api.post("auth/refresh", {
      accessToken: this.accessToken ?? "",
      refreshToken: this.refreshToken ?? ""
    }).pipe(tap((res) => this.store(res)));
  }
  changePassword(currentPassword, newPassword) {
    return this.api.post("auth/change-password", { currentPassword, newPassword });
  }
  logout(redirectTo = "/") {
    this.api.post("auth/logout", {}).subscribe({
      next: () => this.clear(redirectTo),
      error: () => this.clear(redirectTo)
    });
  }
  store(res) {
    localStorage.setItem(TOKEN_KEY, res.accessToken);
    localStorage.setItem(REFRESH_KEY, res.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(res.user));
    this._user.set(res.user);
  }
  clear(redirectTo = null) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(USER_KEY);
    this._user.set(null);
    if (redirectTo)
      void this.router.navigateByUrl(redirectTo);
  }
  readStoredUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-FTSBTB32.js.map
