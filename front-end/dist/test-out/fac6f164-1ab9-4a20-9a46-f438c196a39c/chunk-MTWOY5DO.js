import {
  EventService,
  init_event_service
} from "./chunk-UAW7UYFJ.js";
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
  Input,
  Output,
  init_core,
  init_operators,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  take,
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

// src/app/features/event/delete-event-modal/delete-event-modal.ts
function DeleteEventModal_Conditional_2_Template(rf, ctx) {
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
var DeleteEventModal;
var init_delete_event_modal = __esm({
  "src/app/features/event/delete-event-modal/delete-event-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_operators();
    init_base_modal();
    init_calendar_service();
    init_event_service();
    init_core();
    DeleteEventModal = class _DeleteEventModal {
      calendarService = inject(CalendarService);
      eventService = inject(EventService);
      // Inputs/Outputs
      eventId = input.required(...ngDevMode ? [{ debugName: "eventId" }] : []);
      close = output();
      eventDeleted = output();
      // emits event ID when deleted
      eventIdValue = "";
      calendarId = "";
      // Signals (modern Angular)
      eventName = signal("", ...ngDevMode ? [{ debugName: "eventName" }] : []);
      calendarName = signal("", ...ngDevMode ? [{ debugName: "calendarName" }] : []);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isDeleting = signal(false, ...ngDevMode ? [{ debugName: "isDeleting" }] : []);
      ngOnInit() {
        this.apiError.set("");
        const id = this.eventId();
        if (!id) {
          this.apiError.set("Missing event id");
          return;
        }
        this.eventIdValue = id;
        this.calendarService.getByEventIds([id]).pipe(take(1)).subscribe({
          next: (res) => {
            const ev = res.events?.[0];
            if (!ev) {
              this.apiError.set("Event not found");
              return;
            }
            this.calendarId = ev.calendar_id ?? "";
            this.eventName.set(ev.title ?? "Event");
            this.calendarService.getHomepage().pipe(take(1)).subscribe({
              next: (home) => {
                const calendar = home.calendars?.find((c) => c.calendar_id === this.calendarId);
                this.calendarName.set(calendar?.name || this.calendarId || "Calendar");
              },
              error: () => {
                this.calendarName.set(this.calendarId || "Calendar");
              }
            });
          },
          error: () => this.apiError.set("Could not load event")
        });
      }
      getUserIdFromStorage() {
        try {
          const raw = localStorage.getItem("user");
          if (!raw)
            return null;
          const u = JSON.parse(raw);
          return u?.user_id ?? u?.id ?? null;
        } catch {
          return null;
        }
      }
      confirmDelete() {
        this.apiError.set("");
        if (!this.eventIdValue) {
          this.apiError.set("Missing event id");
          return;
        }
        const userId = this.getUserIdFromStorage();
        if (!userId) {
          this.apiError.set("Not logged in (missing user id). Please sign in again.");
          return;
        }
        if (!this.calendarId) {
          this.apiError.set("Missing calendar id");
          return;
        }
        const dto = {
          user_id: String(userId),
          calendar_id: String(this.calendarId)
        };
        this.isDeleting.set(true);
        this.eventService.delete(this.eventIdValue, dto).pipe(take(1)).subscribe({
          next: (deleted) => {
            this.isDeleting.set(false);
            if (!deleted) {
              this.apiError.set("Could not delete event");
              return;
            }
            this.eventDeleted.emit(this.eventIdValue);
            this.close.emit();
          },
          error: (err) => {
            this.isDeleting.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not delete event");
          }
        });
      }
      onClose() {
        this.close.emit();
      }
      static \u0275fac = function DeleteEventModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DeleteEventModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteEventModal, selectors: [["app-delete-event-modal"]], inputs: { eventId: [1, "eventId"] }, outputs: { close: "close", eventDeleted: "eventDeleted" }, decls: 15, vars: 8, consts: [[3, "close", "title", "size"], [1, "text-center"], [1, "alert", "alert-danger", "mb-3"], [1, "mb-4"], [1, "mb-2"], [1, "fs-5"], [1, "mt-2", "text-muted"], [1, "d-flex", "justify-content-center", "gap-3"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"]], template: function DeleteEventModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-base-modal", 0);
          \u0275\u0275listener("close", function DeleteEventModal_Template_app_base_modal_close_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275conditionalCreate(2, DeleteEventModal_Conditional_2_Template, 2, 1, "div", 2);
          \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
          \u0275\u0275text(5, "Are you sure you want to delete");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "strong", 5);
          \u0275\u0275text(7);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(8, "p", 6);
          \u0275\u0275text(9);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
          \u0275\u0275listener("click", function DeleteEventModal_Template_button_click_11_listener() {
            return ctx.confirmDelete();
          });
          \u0275\u0275text(12);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(13, "button", 9);
          \u0275\u0275listener("click", function DeleteEventModal_Template_button_click_13_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(14, " Cancel ");
          \u0275\u0275elementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275property("title", "Delete Event")("size", "small");
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.apiError() ? 2 : -1);
          \u0275\u0275advance(5);
          \u0275\u0275textInterpolate(ctx.eventName());
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate1("from ", ctx.calendarName(), "?");
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", ctx.isDeleting());
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.isDeleting() ? "Deleting..." : "Delete", " ");
          \u0275\u0275advance();
          \u0275\u0275property("disabled", ctx.isDeleting());
        }
      }, dependencies: [CommonModule, BaseModal], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.delete-event__message[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.4;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n}\n/*# sourceMappingURL=delete-event-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteEventModal, [{
        type: Component,
        args: [{ selector: "app-delete-event-modal", standalone: true, imports: [CommonModule, BaseModal], template: `<app-base-modal 
  [title]="'Delete Event'" 
  [size]="'small'"
  (close)="onClose()">

  <div class="text-center">
    @if (apiError()) {
      <div class="alert alert-danger mb-3">{{ apiError() }}</div>
    }

    <div class="mb-4">
      <p class="mb-2">Are you sure you want to delete</p>
      <strong class="fs-5">{{ eventName() }}</strong>
      <p class="mt-2 text-muted">from {{ calendarName() }}?</p>
    </div>

    <div class="d-flex justify-content-center gap-3">
      <button type="button" class="btn btn-danger" (click)="confirmDelete()" [disabled]="isDeleting()">
        {{ isDeleting() ? 'Deleting...' : 'Delete' }}
      </button>
      <button type="button" class="btn btn-outline-secondary" (click)="onClose()" [disabled]="isDeleting()">
        Cancel
      </button>
    </div>
  </div>

</app-base-modal>
`, styles: ["/* src/app/features/event/delete-event-modal/delete-event-modal.css */\n.card {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.delete-event__message {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.4;\n}\n.card-body {\n  padding: 32px 24px;\n}\n/*# sourceMappingURL=delete-event-modal.css.map */\n"] }]
      }], null, { eventId: [{ type: Input, args: [{ isSignal: true, alias: "eventId", required: true }] }], close: [{ type: Output, args: ["close"] }], eventDeleted: [{ type: Output, args: ["eventDeleted"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteEventModal, { className: "DeleteEventModal", filePath: "src/app/features/event/delete-event-modal/delete-event-modal.ts", lineNumber: 20 });
    })();
  }
});

export {
  DeleteEventModal,
  init_delete_event_modal
};
//# sourceMappingURL=chunk-MTWOY5DO.js.map
