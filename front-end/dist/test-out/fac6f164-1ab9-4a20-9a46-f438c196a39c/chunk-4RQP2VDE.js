import {
  BaseModal,
  init_base_modal
} from "./chunk-OHTVP4IB.js";
import {
  CommonModule,
  init_common
} from "./chunk-EGU5GLVS.js";
import {
  Component,
  Input,
  Output,
  init_core,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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

// src/app/features/calendar/delete-calendar-modal/delete-calendar-modal.ts
function DeleteCalendarModal_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.apiError());
  }
}
var DeleteCalendarModal;
var init_delete_calendar_modal = __esm({
  "src/app/features/calendar/delete-calendar-modal/delete-calendar-modal.ts"() {
    "use strict";
    init_common();
    init_core();
    init_base_modal();
    init_core();
    DeleteCalendarModal = class _DeleteCalendarModal {
      /**
       * Parent passes the selected calendar/group info into the modal.
       * (Keep names generic so main-page can reuse this for calendars or groups.)
       */
      targetId = input(null, ...ngDevMode ? [{ debugName: "targetId" }] : []);
      targetName = input("this item", ...ngDevMode ? [{ debugName: "targetName" }] : []);
      /**
       * Parent-controlled request state (so parent owns the API call).
       */
      isDeleting = input(false, ...ngDevMode ? [{ debugName: "isDeleting" }] : []);
      apiError = input("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      /**
       * Modal -> parent events (parent decides what to do).
       */
      cancel = output();
      confirmDelete = output();
      onCancel() {
        this.cancel.emit();
      }
      onConfirm() {
        const id = this.targetId();
        if (!id || this.isDeleting())
          return;
        this.confirmDelete.emit(id);
      }
      static \u0275fac = function DeleteCalendarModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DeleteCalendarModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteCalendarModal, selectors: [["app-delete-calendar-modal"]], inputs: { targetId: [1, "targetId"], targetName: [1, "targetName"], isDeleting: [1, "isDeleting"], apiError: [1, "apiError"] }, outputs: { cancel: "cancel", confirmDelete: "confirmDelete" }, decls: 15, vars: 7, consts: [[3, "close", "title", "size"], [1, "text-center"], [1, "alert", "alert-danger", "mb-3"], [1, "mb-4"], [1, "mb-2"], [1, "fs-5"], [1, "mt-2", "text-muted"], [1, "d-flex", "justify-content-center", "gap-3"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"]], template: function DeleteCalendarModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-base-modal", 0);
          \u0275\u0275listener("close", function DeleteCalendarModal_Template_app_base_modal_close_0_listener() {
            return ctx.onCancel();
          });
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275conditionalCreate(2, DeleteCalendarModal_Conditional_2_Template, 2, 1, "div", 2);
          \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
          \u0275\u0275text(5, "Are you sure you want to delete");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "strong", 5);
          \u0275\u0275text(7);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(8, "p", 6);
          \u0275\u0275text(9, "This action cannot be undone.");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
          \u0275\u0275listener("click", function DeleteCalendarModal_Template_button_click_11_listener() {
            return ctx.onConfirm();
          });
          \u0275\u0275text(12);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(13, "button", 9);
          \u0275\u0275listener("click", function DeleteCalendarModal_Template_button_click_13_listener() {
            return ctx.onCancel();
          });
          \u0275\u0275text(14, " Cancel ");
          \u0275\u0275elementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275property("title", "Delete Calendar")("size", "small");
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.apiError() ? 2 : -1);
          \u0275\u0275advance(5);
          \u0275\u0275textInterpolate(ctx.targetName());
          \u0275\u0275advance(4);
          \u0275\u0275property("disabled", ctx.isDeleting() || !ctx.targetId());
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.isDeleting() ? "Deleting..." : "Delete", " ");
          \u0275\u0275advance();
          \u0275\u0275property("disabled", ctx.isDeleting());
        }
      }, dependencies: [CommonModule, BaseModal], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.delete-calendar__message[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.4;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n}\n/*# sourceMappingURL=delete-calendar-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteCalendarModal, [{
        type: Component,
        args: [{ selector: "app-delete-calendar-modal", standalone: true, imports: [CommonModule, BaseModal], template: `<app-base-modal
  [title]="'Delete Calendar'"
  [size]="'small'"
  (close)="onCancel()"
>
  <div class="text-center">
    @if (apiError()) {
      <div class="alert alert-danger mb-3">{{ apiError() }}</div>
    }

    <div class="mb-4">
      <p class="mb-2">Are you sure you want to delete</p>
      <strong class="fs-5">{{ targetName() }}</strong>
      <p class="mt-2 text-muted">This action cannot be undone.</p>
    </div>

    <div class="d-flex justify-content-center gap-3">
      <button
        type="button"
        class="btn btn-danger"
        (click)="onConfirm()"
        [disabled]="isDeleting() || !targetId()"
      >
        {{ isDeleting() ? 'Deleting...' : 'Delete' }}
      </button>

      <button
        type="button"
        class="btn btn-outline-secondary"
        (click)="onCancel()"
        [disabled]="isDeleting()"
      >
        Cancel
      </button>
    </div>
  </div>
</app-base-modal>`, styles: ["/* src/app/features/calendar/delete-calendar-modal/delete-calendar-modal.css */\n.card {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.delete-calendar__message {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.4;\n}\n.card-body {\n  padding: 32px 24px;\n}\n/*# sourceMappingURL=delete-calendar-modal.css.map */\n"] }]
      }], null, { targetId: [{ type: Input, args: [{ isSignal: true, alias: "targetId", required: false }] }], targetName: [{ type: Input, args: [{ isSignal: true, alias: "targetName", required: false }] }], isDeleting: [{ type: Input, args: [{ isSignal: true, alias: "isDeleting", required: false }] }], apiError: [{ type: Input, args: [{ isSignal: true, alias: "apiError", required: false }] }], cancel: [{ type: Output, args: ["cancel"] }], confirmDelete: [{ type: Output, args: ["confirmDelete"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteCalendarModal, { className: "DeleteCalendarModal", filePath: "src/app/features/calendar/delete-calendar-modal/delete-calendar-modal.ts", lineNumber: 13 });
    })();
  }
});

export {
  DeleteCalendarModal,
  init_delete_calendar_modal
};
//# sourceMappingURL=chunk-4RQP2VDE.js.map
