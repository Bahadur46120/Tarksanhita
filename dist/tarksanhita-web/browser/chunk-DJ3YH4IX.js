import {
  findResource
} from "./chunk-YU4OLOJI.js";
import {
  MatSnackBar
} from "./chunk-UPWUZDK7.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-WCMIFM3B.js";
import {
  LoadingState
} from "./chunk-JRDIFDAI.js";
import {
  ContentService
} from "./chunk-MBQHVFNQ.js";
import {
  ActivatedRoute,
  Router,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-F5R4JB2K.js";

// src/app/pages/admin/content-form.ts
var _c0 = (a0) => ["/admin", a0];
var _forTrack0 = ($index, $item) => $item.name;
function AdminContentForm_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ts-loading-state", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 12);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r3.hint);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 17);
    \u0275\u0275element(2, "input", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_0_Conditional_4_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("full", field_r3.wide);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", field_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r3.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r3.hint ? 4 : -1);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "textarea", 21);
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "f-" + field_r3.name)("formControlName", field_r3.name);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "textarea", 22);
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "f-" + field_r3.name)("formControlName", field_r3.name);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 23)(1, "option", 31);
    \u0275\u0275text(2, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_6_For_4_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "f-" + field_r3.name)("formControlName", field_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(field_r3.options);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 24);
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "f-" + field_r3.name)("formControlName", field_r3.name);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 25);
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "f-" + field_r3.name)("formControlName", field_r3.name);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 26);
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "f-" + field_r3.name)("formControlName", field_r3.name);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 27);
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "f-" + field_r3.name)("formControlName", field_r3.name);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 28);
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "f-" + field_r3.name)("formControlName", field_r3.name);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 29);
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "f-" + field_r3.name)("formControlName", field_r3.name);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r3.hint);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "This field is required.");
    \u0275\u0275elementEnd();
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Conditional_3_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_4_Template, 1, 2, "textarea", 21)(5, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_5_Template, 1, 2, "textarea", 22)(6, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_6_Template, 5, 2, "select", 23)(7, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_7_Template, 1, 2, "input", 24)(8, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_8_Template, 1, 2, "input", 25)(9, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_9_Template, 1, 2, "input", 26)(10, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_10_Template, 1, 2, "input", 27)(11, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_11_Template, 1, 2, "input", 28)(12, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Case_12_Template, 1, 2, "input", 29);
    \u0275\u0275conditionalCreate(13, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Conditional_13_Template, 2, 1, "span", 19);
    \u0275\u0275conditionalCreate(14, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Conditional_14_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    const field_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("full", field_r3.wide || field_r3.type === "richtext")("invalid", ctx_r1.invalid(field_r3.name));
    \u0275\u0275advance();
    \u0275\u0275attribute("for", "f-" + field_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r3.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r3.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = field_r3.type) === "textarea" ? 4 : tmp_19_0 === "richtext" ? 5 : tmp_19_0 === "select" ? 6 : tmp_19_0 === "number" ? 7 : tmp_19_0 === "date" ? 8 : tmp_19_0 === "datetime" ? 9 : tmp_19_0 === "url" ? 10 : tmp_19_0 === "tags" ? 11 : 12);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(field_r3.hint ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.invalid(field_r3.name) ? 14 : -1);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_0_Template, 5, 5, "div", 14)(1, AdminContentForm_Conditional_0_Conditional_9_For_4_Conditional_1_Template, 15, 10, "div", 15);
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    \u0275\u0275conditional(field_r3.type === "checkbox" ? 0 : 1);
  }
}
function AdminContentForm_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function AdminContentForm_Conditional_0_Conditional_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "div", 8);
    \u0275\u0275repeaterCreate(3, AdminContentForm_Conditional_0_Conditional_9_For_4_Template, 2, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "button", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 11);
    \u0275\u0275listener("click", function AdminContentForm_Conditional_0_Conditional_9_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save(true));
    });
    \u0275\u0275text(9, "Save & Publish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function AdminContentForm_Conditional_0_Conditional_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save(false));
    });
    \u0275\u0275text(11, "Save as Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 13);
    \u0275\u0275listener("click", function AdminContentForm_Conditional_0_Conditional_9_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const def_r5 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(def_r5.fields);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : "Save", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
function AdminContentForm_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, AdminContentForm_Conditional_0_Conditional_8_Template, 1, 1, "ts-loading-state", 4)(9, AdminContentForm_Conditional_0_Conditional_9_Template, 14, 5, "form", 5);
  }
  if (rf & 2) {
    const def_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.editingId() ? "Edit" : "New", " ", def_r5.singular);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(def_r5.description);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, def_r5.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u276E Back to ", def_r5.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading() ? 8 : 9);
  }
}
var AdminContentForm = class _AdminContentForm {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  content = inject(ContentService);
  snack = inject(MatSnackBar);
  resource = signal(null, ...ngDevMode ? [{ debugName: "resource" }] : []);
  editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  form = this.fb.group({});
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const def = findResource(params.get("resource") ?? "");
      if (!def) {
        void this.router.navigateByUrl("/admin");
        return;
      }
      this.resource.set(def);
      this.buildForm(def);
      const id = params.get("id");
      this.editingId.set(id);
      if (id) {
        this.content.for(def.key).byId(id).subscribe({
          next: (record) => {
            this.patch(def, record);
            this.loading.set(false);
          },
          error: () => {
            this.snack.open("That record could not be loaded.", "Dismiss");
            this.loading.set(false);
          }
        });
      } else {
        this.loading.set(false);
      }
    });
  }
  // ------------------------------------------------------------ form building
  buildForm(def) {
    const controls = {};
    for (const field of def.fields) {
      const validators = field.required ? [Validators.required] : [];
      controls[field.name] = [this.initialValue(field), validators];
    }
    this.form = this.fb.group(controls);
  }
  initialValue(field) {
    if (field.default !== void 0)
      return field.default;
    switch (field.type) {
      case "checkbox":
        return false;
      case "number":
        return null;
      case "tags":
        return "";
      case "date":
      case "datetime":
        return this.toInputDate((/* @__PURE__ */ new Date()).toISOString(), field.type);
      default:
        return "";
    }
  }
  /** Copies a loaded record into the form, converting arrays and dates. */
  patch(def, record) {
    const raw = record;
    const patch = {};
    for (const field of def.fields) {
      const value = raw[field.name];
      if (value === void 0 || value === null)
        continue;
      if (field.type === "tags") {
        patch[field.name] = Array.isArray(value) ? value.join(", ") : String(value);
      } else if (field.type === "date" || field.type === "datetime") {
        patch[field.name] = this.toInputDate(String(value), field.type);
      } else {
        patch[field.name] = value;
      }
    }
    this.form.patchValue(patch);
  }
  /** ISO timestamp to the value format expected by date / datetime-local inputs. */
  toInputDate(iso, type) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime()))
      return "";
    const pad = (n) => String(n).padStart(2, "0");
    const day = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    return type === "date" ? day : `${day}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  // ------------------------------------------------------------ save
  save(publish) {
    const def = this.resource();
    if (!def)
      return;
    if (publish !== void 0)
      this.form.patchValue({ isPublished: publish });
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snack.open("Please complete the required fields.", "Dismiss");
      return;
    }
    const payload = this.buildPayload(def);
    this.saving.set(true);
    const id = this.editingId();
    const client = this.content.for(def.key);
    const request = id ? client.update(id, payload) : client.create(payload);
    request.subscribe({
      next: () => {
        this.saving.set(false);
        this.snack.open(`${def.singular} ${id ? "updated" : "created"}.`, "Close", { panelClass: ["ts-snack-ok"] });
        void this.router.navigate(["/admin", def.key]);
      },
      error: () => this.saving.set(false)
    });
  }
  buildPayload(def) {
    const value = this.form.getRawValue();
    const payload = {};
    for (const field of def.fields) {
      const v = value[field.name];
      if (field.type === "tags") {
        payload[field.name] = String(v ?? "").split(",").map((part) => part.trim()).filter(Boolean);
      } else if (field.type === "number") {
        payload[field.name] = v === "" || v === null ? null : Number(v);
      } else if ((field.type === "date" || field.type === "datetime") && v) {
        payload[field.name] = new Date(String(v)).toISOString();
      } else {
        payload[field.name] = v;
      }
    }
    payload["slug"] = "";
    if (def.key === "profiles" && !payload["title"]) {
      payload["title"] = payload["fullName"];
    }
    return payload;
  }
  invalid(name) {
    const control = this.form.get(name);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
  cancel() {
    const def = this.resource();
    void this.router.navigate(["/admin", def?.key ?? ""]);
  }
  static \u0275fac = function AdminContentForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminContentForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminContentForm, selectors: [["ts-admin-content-form"]], decls: 1, vars: 1, consts: [[1, "flex", "items-center", "justify-between", "flex-wrap", "gap-14", 2, "margin-bottom", "14px"], [2, "font-size", "1.3rem"], [1, "muted", 2, "font-size", ".84rem", "margin", "2px 0 0"], [1, "btn", "btn-ghost", 3, "routerLink"], [3, "count"], [3, "formGroup"], [3, "ngSubmit", "formGroup"], [1, "card"], [1, "form-grid"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-navy", 3, "disabled"], ["type", "button", 1, "btn", "btn-gold", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-ghost", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], [1, "field", 3, "full"], [1, "field", 3, "full", "invalid"], [1, "field"], [2, "display", "flex", "align-items", "center", "gap", "8px", "text-transform", "none", "letter-spacing", "normal", "font-size", ".86rem", "font-weight", "500", "cursor", "pointer"], ["type", "checkbox", 2, "width", "auto", 3, "formControlName"], [1, "muted", 2, "font-size", ".72rem"], [2, "color", "var(--danger)"], ["rows", "3", 3, "id", "formControlName"], ["rows", "9", "placeholder", "Plain text. Separate paragraphs with a blank line.", 3, "id", "formControlName"], [3, "id", "formControlName"], ["type", "number", 3, "id", "formControlName"], ["type", "date", 3, "id", "formControlName"], ["type", "datetime-local", 3, "id", "formControlName"], ["type", "url", "placeholder", "https://\u2026", 3, "id", "formControlName"], ["type", "text", "placeholder", "Comma-separated", 3, "id", "formControlName"], ["type", "text", 3, "id", "formControlName"], [1, "err"], ["value", ""], [3, "value"]], template: function AdminContentForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AdminContentForm_Conditional_0_Template, 10, 8);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.resource()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, LoadingState], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminContentForm, [{
    type: Component,
    args: [{ selector: "ts-admin-content-form", standalone: true, imports: [ReactiveFormsModule, RouterLink, LoadingState], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (resource(); as def) {

  <div class="flex items-center justify-between flex-wrap gap-14" style="margin-bottom:14px">
    <div>
      <h2 style="font-size:1.3rem">{{ editingId() ? 'Edit' : 'New' }} {{ def.singular }}</h2>
      <p class="muted" style="font-size:.84rem;margin:2px 0 0">{{ def.description }}</p>
    </div>
    <a class="btn btn-ghost" [routerLink]="['/admin', def.key]">&#10094; Back to {{ def.label }}</a>
  </div>

  @if (loading()) {
    <ts-loading-state [count]="12" />
  } @else {
    <form [formGroup]="form" (ngSubmit)="save()">
      <div class="card">
        <div class="form-grid">
          @for (field of def.fields; track field.name) {

            @if (field.type === 'checkbox') {
              <div class="field" [class.full]="field.wide">
                <label style="display:flex;align-items:center;gap:8px;text-transform:none;letter-spacing:normal;font-size:.86rem;font-weight:500;cursor:pointer">
                  <input type="checkbox" [formControlName]="field.name" style="width:auto" />
                  {{ field.label }}
                </label>
                @if (field.hint) { <span class="muted" style="font-size:.72rem">{{ field.hint }}</span> }
              </div>

            } @else {
              <div class="field" [class.full]="field.wide || field.type === 'richtext'" [class.invalid]="invalid(field.name)">
                <label [attr.for]="'f-' + field.name">
                  {{ field.label }}
                  @if (field.required) { <span style="color:var(--danger)">*</span> }
                </label>

                @switch (field.type) {
                  @case ('textarea') {
                    <textarea [id]="'f-' + field.name" [formControlName]="field.name" rows="3"></textarea>
                  }
                  @case ('richtext') {
                    <textarea [id]="'f-' + field.name" [formControlName]="field.name" rows="9"
                              placeholder="Plain text. Separate paragraphs with a blank line."></textarea>
                  }
                  @case ('select') {
                    <select [id]="'f-' + field.name" [formControlName]="field.name">
                      <option value="">\u2014 Select \u2014</option>
                      @for (option of field.options; track option) {
                        <option [value]="option">{{ option }}</option>
                      }
                    </select>
                  }
                  @case ('number') {
                    <input [id]="'f-' + field.name" type="number" [formControlName]="field.name" />
                  }
                  @case ('date') {
                    <input [id]="'f-' + field.name" type="date" [formControlName]="field.name" />
                  }
                  @case ('datetime') {
                    <input [id]="'f-' + field.name" type="datetime-local" [formControlName]="field.name" />
                  }
                  @case ('url') {
                    <input [id]="'f-' + field.name" type="url" [formControlName]="field.name" placeholder="https://\u2026" />
                  }
                  @case ('tags') {
                    <input [id]="'f-' + field.name" type="text" [formControlName]="field.name" placeholder="Comma-separated" />
                  }
                  @default {
                    <input [id]="'f-' + field.name" type="text" [formControlName]="field.name" />
                  }
                }

                @if (field.hint) { <span class="muted" style="font-size:.72rem">{{ field.hint }}</span> }
                @if (invalid(field.name)) { <span class="err">This field is required.</span> }
              </div>
            }

          }
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-navy" [disabled]="saving()">
            {{ saving() ? 'Saving\u2026' : 'Save' }}
          </button>
          <button type="button" class="btn btn-gold" [disabled]="saving()" (click)="save(true)">Save &amp; Publish</button>
          <button type="button" class="btn btn-ghost" [disabled]="saving()" (click)="save(false)">Save as Draft</button>
          <button type="button" class="btn btn-ghost" (click)="cancel()">Cancel</button>
        </div>
      </div>
    </form>
  }

}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminContentForm, { className: "AdminContentForm", filePath: "src/app/pages/admin/content-form.ts", lineNumber: 22 });
})();
export {
  AdminContentForm
};
//# sourceMappingURL=chunk-DJ3YH4IX.js.map
