import {
  HttpClient,
  HttpParams
} from "./chunk-7TMVEVGK.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-F5R4JB2K.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "https://localhost:7185/api",
  siteName: "Tarksanhita",
  tagline: "The Debate on Logic",
  subtitle: "Centre for Law, Logic, Debate & Knowledge"
};

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  http = inject(HttpClient);
  base = environment.apiUrl;
  toParams(q) {
    let params = new HttpParams();
    if (!q)
      return params;
    for (const [key, value] of Object.entries(q)) {
      if (value === void 0 || value === null || value === "")
        continue;
      params = params.set(key, String(value));
    }
    return params;
  }
  get(path, query) {
    return this.http.get(`${this.base}/${path}`, { params: this.toParams(query) });
  }
  post(path, body) {
    return this.http.post(`${this.base}/${path}`, body);
  }
  put(path, body) {
    return this.http.put(`${this.base}/${path}`, body);
  }
  patch(path, body = {}) {
    return this.http.patch(`${this.base}/${path}`, body);
  }
  delete(path) {
    return this.http.delete(`${this.base}/${path}`);
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var ContentClient = class {
  api;
  resource;
  constructor(api, resource) {
    this.api = api;
    this.resource = resource;
  }
  list(q = {}) {
    return this.api.get(this.resource, q);
  }
  byId(id) {
    return this.api.get(`${this.resource}/${id}`);
  }
  bySlug(slug) {
    return this.api.get(`${this.resource}/slug/${slug}`);
  }
  create(item) {
    return this.api.post(this.resource, item);
  }
  update(id, item) {
    return this.api.put(`${this.resource}/${id}`, item);
  }
  remove(id) {
    return this.api.delete(`${this.resource}/${id}`);
  }
  publish(id) {
    return this.api.patch(`${this.resource}/${id}/publish`);
  }
  unpublish(id) {
    return this.api.patch(`${this.resource}/${id}/unpublish`);
  }
  activate(id) {
    return this.api.patch(`${this.resource}/${id}/activate`);
  }
  deactivate(id) {
    return this.api.patch(`${this.resource}/${id}/deactivate`);
  }
};
var ContentService = class _ContentService {
  api = inject(ApiService);
  cache = /* @__PURE__ */ new Map();
  /** Returns a cached client for the given API resource segment. */
  for(resource) {
    if (!this.cache.has(resource)) {
      this.cache.set(resource, new ContentClient(this.api, resource));
    }
    return this.cache.get(resource);
  }
  static \u0275fac = function ContentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContentService, factory: _ContentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  environment,
  ApiService,
  ContentService
};
//# sourceMappingURL=chunk-MBQHVFNQ.js.map
