import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-F5R4JB2K.js";

// src/app/core/services/ui.service.ts
var FONT_KEY = "ts.fontIndex";
var CONTRAST_KEY = "ts.highContrast";
var SIZES = [14, 15, 16, 17, 18, 19];
var DEFAULT_INDEX = 2;
var UiService = class _UiService {
  fontIndex = signal(this.readNumber(FONT_KEY, DEFAULT_INDEX), ...ngDevMode ? [{ debugName: "fontIndex" }] : []);
  highContrast = signal(localStorage.getItem(CONTRAST_KEY) === "true", ...ngDevMode ? [{ debugName: "highContrast" }] : []);
  constructor() {
    this.applyFont();
    this.applyContrast();
  }
  changeFont(step) {
    const next = step === 0 ? DEFAULT_INDEX : Math.min(SIZES.length - 1, Math.max(0, this.fontIndex() + step));
    this.fontIndex.set(next);
    localStorage.setItem(FONT_KEY, String(next));
    this.applyFont();
  }
  toggleContrast() {
    this.highContrast.update((v) => !v);
    localStorage.setItem(CONTRAST_KEY, String(this.highContrast()));
    this.applyContrast();
  }
  /** Reads a short page summary aloud where the browser supports speech synthesis. */
  speak(text) {
    if (!("speechSynthesis" in window))
      return;
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    speechSynthesis.speak(utterance);
  }
  applyFont() {
    document.documentElement.style.setProperty("--fs", `${SIZES[this.fontIndex()]}px`);
  }
  applyContrast() {
    document.body.classList.toggle("hc", this.highContrast());
  }
  readNumber(key, fallback) {
    const raw = Number(localStorage.getItem(key));
    return Number.isInteger(raw) && raw >= 0 && raw < SIZES.length ? raw : fallback;
  }
  static \u0275fac = function UiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UiService, factory: _UiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  UiService
};
//# sourceMappingURL=chunk-PAG2NWAG.js.map
