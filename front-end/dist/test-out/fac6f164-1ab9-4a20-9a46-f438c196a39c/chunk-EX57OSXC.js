import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  init_forms,
  ɵNgNoValidate
} from "./chunk-RYBDXJGT.js";
import {
  BaseModal,
  init_base_modal
} from "./chunk-OHTVP4IB.js";
import {
  CalendarService,
  init_calendar_service
} from "./chunk-NXRHEMFL.js";
import {
  CommonModule,
  init_common
} from "./chunk-EGU5GLVS.js";
import {
  Component,
  Output,
  finalize,
  init_core,
  init_esm,
  inject,
  output,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/calendar/create-calendar-modal/create-calendar-modal.ts
function CreateCalendarModal_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.apiError());
  }
}
var CreateCalendarModal;
var init_create_calendar_modal = __esm({
  "src/app/features/calendar/create-calendar-modal/create-calendar-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_forms();
    init_esm();
    init_base_modal();
    init_calendar_service();
    init_core();
    init_forms();
    CreateCalendarModal = class _CreateCalendarModal {
      fb = inject(FormBuilder);
      calendarService = inject(CalendarService);
      // Outputs (modal-style)
      close = output();
      calendarCreated = output();
      // emits calendar_id
      form = this.fb.group({
        name: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(50)]]
      });
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
      hasError(controlName) {
        const c = this.form.get(controlName);
        return !!c && c.touched && c.invalid;
      }
      getCurrentUserId() {
        const keysToTry = ["user", "currentUser", "auth_user"];
        for (const key of keysToTry) {
          const raw = localStorage.getItem(key);
          if (!raw)
            continue;
          try {
            const obj = JSON.parse(raw);
            const userId = obj?.user_id ?? obj?.id ?? obj?.userId;
            if (typeof userId === "string" && userId.length > 0)
              return userId;
          } catch {
          }
        }
        return null;
      }
      submit() {
        this.apiError.set("");
        if (this.form.invalid) {
          this.form.markAllAsTouched();
          this.apiError.set("Please fix validation errors.");
          return;
        }
        const userId = this.getCurrentUserId();
        if (!userId) {
          this.apiError.set("You must be logged in to create a calendar.");
          return;
        }
        const raw = this.form.getRawValue();
        const dto = {
          user_id: userId,
          name: String(raw.name ?? "").trim()
        };
        if (!dto.name) {
          this.form.markAllAsTouched();
          this.apiError.set("Calendar name is required.");
          return;
        }
        this.isSubmitting.set(true);
        this.calendarService.create(dto).pipe(finalize(() => this.isSubmitting.set(false))).subscribe({
          next: (created) => {
            this.calendarCreated.emit(created.calendar_id);
            this.close.emit();
          },
          error: (err) => {
            const message = err?.error && typeof err.error === "string" && err.error || err?.error?.message || err?.message;
            this.apiError.set(message || "Failed to create calendar. Please try again.");
          }
        });
      }
      onClose() {
        this.close.emit();
      }
      static \u0275fac = function CreateCalendarModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CreateCalendarModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateCalendarModal, selectors: [["app-create-calendar-modal"]], outputs: { close: "close", calendarCreated: "calendarCreated" }, decls: 16, vars: 8, consts: [[3, "close", "title"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "alert", "alert-danger", "mb-3"], [1, "mb-3"], ["for", "calendar-name", 1, "form-label"], ["id", "calendar-name", "type", "text", "formControlName", "name", "placeholder", "Calendar name", "autocomplete", "off", 1, "form-control", "app-input"], [1, "invalid-feedback"], [1, "form-text"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function CreateCalendarModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-base-modal", 0);
          \u0275\u0275listener("close", function CreateCalendarModal_Template_app_base_modal_close_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275elementStart(1, "form", 1);
          \u0275\u0275listener("ngSubmit", function CreateCalendarModal_Template_form_ngSubmit_1_listener() {
            return ctx.submit();
          });
          \u0275\u0275conditionalCreate(2, CreateCalendarModal_Conditional_2_Template, 3, 1, "div", 2);
          \u0275\u0275elementStart(3, "div", 3)(4, "label", 4);
          \u0275\u0275text(5, "Calendar name:");
          \u0275\u0275elementEnd();
          \u0275\u0275element(6, "input", 5);
          \u0275\u0275elementStart(7, "div", 6);
          \u0275\u0275text(8, " Calendar name is required (1\u201350 characters). ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "div", 7);
          \u0275\u0275text(10, " Choose a short, recognizable name (1\u201350 characters). ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
          \u0275\u0275listener("click", function CreateCalendarModal_Template_button_click_12_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(13, " Cancel ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(14, "button", 10);
          \u0275\u0275text(15);
          \u0275\u0275elementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275property("title", "Create Calendar");
          \u0275\u0275advance();
          \u0275\u0275property("formGroup", ctx.form);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.apiError() ? 2 : -1);
          \u0275\u0275advance(4);
          \u0275\u0275classProp("is-invalid", ctx.hasError("name"));
          \u0275\u0275advance(6);
          \u0275\u0275property("disabled", ctx.isSubmitting());
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", ctx.form.invalid || ctx.isSubmitting());
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? "Creating..." : "Create Calendar", " ");
        }
      }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BaseModal], styles: ["\n\n/*# sourceMappingURL=create-calendar-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateCalendarModal, [{
        type: Component,
        args: [{ selector: "app-create-calendar-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule, BaseModal], template: `<app-base-modal
  [title]="'Create Calendar'"
  (close)="onClose()"
>
  <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
    @if (apiError()) {
      <div class="alert alert-danger mb-3">
        <strong>{{ apiError() }}</strong>
      </div>
    }

    <div class="mb-3">
      <label class="form-label" for="calendar-name">Calendar name:</label>

      <input
        id="calendar-name"
        type="text"
        class="form-control app-input"
        formControlName="name"
        placeholder="Calendar name"
        autocomplete="off"
        [class.is-invalid]="hasError('name')"
      />

      <div class="invalid-feedback">
        Calendar name is required (1\u201350 characters).
      </div>

      <div class="form-text">
        Choose a short, recognizable name (1\u201350 characters).
      </div>
    </div>

    <div class="d-flex justify-content-end gap-2 mt-4">
      <button
        type="button"
        class="btn btn-outline-secondary"
        (click)="onClose()"
        [disabled]="isSubmitting()"
      >
        Cancel
      </button>

      <button
        type="submit"
        class="btn btn-primary"
        [disabled]="form.invalid || isSubmitting()"
      >
        {{ isSubmitting() ? 'Creating...' : 'Create Calendar' }}
      </button>
    </div>
  </form>
</app-base-modal>
`, styles: ["/* src/app/features/calendar/create-calendar-modal/create-calendar-modal.css */\n/*# sourceMappingURL=create-calendar-modal.css.map */\n"] }]
      }], null, { close: [{ type: Output, args: ["close"] }], calendarCreated: [{ type: Output, args: ["calendarCreated"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateCalendarModal, { className: "CreateCalendarModal", filePath: "src/app/features/calendar/create-calendar-modal/create-calendar-modal.ts", lineNumber: 20 });
    })();
  }
});

export {
  CreateCalendarModal,
  init_create_calendar_modal
};
//# sourceMappingURL=chunk-EX57OSXC.js.map
