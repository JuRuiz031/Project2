import {
  EventService,
  init_event_service
} from "./chunk-UAW7UYFJ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  init_forms,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  computed,
  init_core,
  init_operators,
  inject,
  output,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/event/create-event-modal/create-event-modal.ts
function CreateEventModal_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
function CreateEventModal_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3, "Loading calendars...");
    \u0275\u0275elementEnd()()();
  }
}
function CreateEventModal_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.name);
  }
}
function CreateEventModal_Conditional_4_Conditional_56_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 30);
    \u0275\u0275listener("click", function CreateEventModal_Conditional_4_Conditional_56_For_2_Template_button_click_2_listener() {
      const tag_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeTag(tag_r5));
    });
    \u0275\u0275text(3, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r5, " ");
  }
}
function CreateEventModal_Conditional_4_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, CreateEventModal_Conditional_4_Conditional_56_For_2_Template, 4, 1, "span", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.tags());
  }
}
function CreateEventModal_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Calendar (admin only)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 8)(4, "option", 9);
    \u0275\u0275text(5, "Select calendar (admin only)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, CreateEventModal_Conditional_4_For_7_Template, 2, 2, "option", 10, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275text(9, "Please select an admin calendar.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
    \u0275\u0275text(12, "Event Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 12);
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275text(15, "Title is required (min 2 chars).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "label", 7);
    \u0275\u0275text(19, "Start date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 15);
    \u0275\u0275elementStart(21, "div", 11);
    \u0275\u0275text(22, "Start date required.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 14)(24, "label", 7);
    \u0275\u0275text(25, "Start time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 16);
    \u0275\u0275elementStart(27, "div", 11);
    \u0275\u0275text(28, "Start time required.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 14)(30, "label", 7);
    \u0275\u0275text(31, "End date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 17);
    \u0275\u0275elementStart(33, "div", 11);
    \u0275\u0275text(34, "End date required.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 14)(36, "label", 7);
    \u0275\u0275text(37, "End time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 18);
    \u0275\u0275elementStart(39, "div", 11);
    \u0275\u0275text(40, "End time required.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 19)(42, "label", 7);
    \u0275\u0275text(43, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "textarea", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 6)(46, "label", 7);
    \u0275\u0275text(47, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "textarea", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 6)(50, "label", 7);
    \u0275\u0275text(51, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 22)(53, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEventModal_Conditional_4_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.tagInput, $event) || (ctx_r0.tagInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function CreateEventModal_Conditional_4_Template_input_keypress_53_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTagKeyPress($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 24);
    \u0275\u0275listener("click", function CreateEventModal_Conditional_4_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addTag());
    });
    \u0275\u0275text(55, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(56, CreateEventModal_Conditional_4_Conditional_56_Template, 3, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 26)(58, "button", 27);
    \u0275\u0275listener("click", function CreateEventModal_Conditional_4_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClose());
    });
    \u0275\u0275text(59, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 28);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("calendarId"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.adminCalendars());
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("title"));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("startDate"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("startTime"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("endDate"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("endTime"));
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tagInput);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.tags().length > 0 ? 56 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting() || ctx_r0.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmitting() ? "Creating..." : "Create Event", " ");
  }
}
var _c0, _forTrack0, CreateEventModal;
var init_create_event_modal = __esm({
  "src/app/features/event/create-event-modal/create-event-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_forms();
    init_operators();
    init_base_modal();
    init_event_service();
    init_calendar_service();
    init_core();
    init_forms();
    _c0 = () => ({ standalone: true });
    _forTrack0 = ($index, $item) => $item.id;
    CreateEventModal = class _CreateEventModal {
      fb = inject(FormBuilder);
      eventService = inject(EventService);
      calendarService = inject(CalendarService);
      // Outputs
      close = output();
      eventCreated = output();
      // emits event ID when created
      // Signals (modern Angular)
      calendars = signal([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
      isLoadingCalendars = signal(true, ...ngDevMode ? [{ debugName: "isLoadingCalendars" }] : []);
      tags = signal([], ...ngDevMode ? [{ debugName: "tags" }] : []);
      tagInput = signal("", ...ngDevMode ? [{ debugName: "tagInput" }] : []);
      // Computed signal for derived state
      adminCalendars = computed(() => this.calendars().filter((c) => c.isAdmin), ...ngDevMode ? [{ debugName: "adminCalendars" }] : []);
      form = this.fb.group({
        calendarId: ["", [Validators.required]],
        title: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        startDate: ["", [Validators.required]],
        startTime: ["", [Validators.required]],
        endDate: ["", [Validators.required]],
        endTime: ["", [Validators.required]],
        description: ["", [Validators.maxLength(1e3)]],
        notes: ["", [Validators.maxLength(1e3)]]
      });
      ngOnInit() {
        this.loadCalendars();
      }
      loadCalendars() {
        this.apiError.set("");
        this.calendarService.getHomepage().pipe(take(1)).subscribe({
          next: (home) => {
            this.isLoadingCalendars.set(false);
            const mappedCalendars = home.calendars.map((c) => ({
              id: c.calendar_id,
              name: c.name,
              isAdmin: c.is_admin
            }));
            this.calendars.set(mappedCalendars);
            const firstAdmin = this.adminCalendars()[0];
            const firstAny = mappedCalendars[0];
            const selected = firstAdmin ?? firstAny;
            if (selected) {
              this.form.patchValue({ calendarId: selected.id }, { emitEvent: false });
            } else {
              this.apiError.set("No calendars available. Create or join a calendar first.");
            }
          },
          error: (err) => {
            this.isLoadingCalendars.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not load calendars");
          }
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
      // Deterministic "end after start" check (no timezone surprises)
      isEndAfterStart(startDate, startTime, endDate, endTime) {
        const startKey = `${startDate}T${startTime}`;
        const endKey = `${endDate}T${endTime}`;
        return endKey > startKey;
      }
      submit() {
        this.apiError.set("");
        if (this.form.invalid) {
          this.form.markAllAsTouched();
          return;
        }
        const v = this.form.getRawValue();
        const start = /* @__PURE__ */ new Date(`${v.startDate}T${v.startTime}:00`);
        const end = /* @__PURE__ */ new Date(`${v.endDate}T${v.endTime}:00`);
        if (isNaN(start.getTime())) {
          this.apiError.set("Start date/time is invalid.");
          return;
        }
        if (isNaN(end.getTime())) {
          this.apiError.set("End date/time is invalid.");
          return;
        }
        if (!this.isEndAfterStart(String(v.startDate), String(v.startTime), String(v.endDate), String(v.endTime))) {
          this.apiError.set("End must be after start.");
          return;
        }
        const userId = this.getUserIdFromStorage();
        if (!userId) {
          this.apiError.set("Not logged in (missing user id). Please sign in again.");
          return;
        }
        console.log("[CreateEvent] User entered (local):", {
          start: `${v.startDate}T${v.startTime}`,
          end: `${v.endDate}T${v.endTime}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        });
        console.log("[CreateEvent] Sending to backend (UTC):", {
          start: start.toISOString(),
          end: end.toISOString()
        });
        const dto = {
          user_id: String(userId),
          calendar_id: String(v.calendarId),
          title: String(v.title),
          start_time: start.toISOString(),
          end_time: end.toISOString(),
          description: v.description ?? "",
          notes: v.notes ?? "",
          tags: this.tags()
        };
        this.isSubmitting.set(true);
        this.eventService.create(dto).pipe(take(1)).subscribe({
          next: (created) => {
            this.isSubmitting.set(false);
            this.eventCreated.emit(created.event_id);
            this.close.emit();
          },
          error: (err) => {
            this.isSubmitting.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not create event");
          }
        });
      }
      addTag() {
        const tag = this.tagInput().trim();
        if (tag && !this.tags().includes(tag)) {
          this.tags.update((tags) => [...tags, tag]);
          this.tagInput.set("");
        }
      }
      removeTag(tagToRemove) {
        this.tags.update((tags) => tags.filter((t) => t !== tagToRemove));
      }
      onTagKeyPress(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          this.addTag();
        }
      }
      hasError(controlName) {
        const c = this.form.get(controlName);
        return !!c && c.touched && c.invalid;
      }
      onClose() {
        this.close.emit();
      }
      static \u0275fac = function CreateEventModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CreateEventModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateEventModal, selectors: [["app-create-event-modal"]], outputs: { close: "close", eventCreated: "eventCreated" }, decls: 5, vars: 4, consts: [[3, "close", "title"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "alert", "alert-danger", "mb-3"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mb-3"], [1, "form-label"], ["formControlName", "calendarId", 1, "form-select", "app-select"], ["value", "", "disabled", ""], [3, "value"], [1, "invalid-feedback"], ["type", "text", "placeholder", "Event Title", "formControlName", "title", 1, "form-control", "app-input"], [1, "row", "g-3"], [1, "col-12", "col-md-6"], ["type", "date", "formControlName", "startDate", 1, "form-control", "app-input"], ["type", "time", "formControlName", "startTime", 1, "form-control", "app-input"], ["type", "date", "formControlName", "endDate", 1, "form-control", "app-input"], ["type", "time", "formControlName", "endTime", 1, "form-control", "app-input"], [1, "mt-3", "mb-3"], ["rows", "4", "placeholder", "Description", "formControlName", "description", 1, "form-control", "app-textarea"], ["rows", "4", "placeholder", "Notes", "formControlName", "notes", 1, "form-control", "app-textarea"], [1, "tag-input-container"], ["type", "text", "placeholder", "Type a tag and press Enter", 1, "form-control", "app-input", 3, "ngModelChange", "keypress", "ngModel", "ngModelOptions"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "tags-list"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "tag-chip-editable"], ["type", "button", "aria-label", "Remove tag", 1, "tag-remove", 3, "click"]], template: function CreateEventModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-base-modal", 0);
          \u0275\u0275listener("close", function CreateEventModal_Template_app_base_modal_close_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275elementStart(1, "form", 1);
          \u0275\u0275listener("ngSubmit", function CreateEventModal_Template_form_ngSubmit_1_listener() {
            return ctx.submit();
          });
          \u0275\u0275conditionalCreate(2, CreateEventModal_Conditional_2_Template, 2, 1, "div", 2);
          \u0275\u0275conditionalCreate(3, CreateEventModal_Conditional_3_Template, 4, 0, "div", 3)(4, CreateEventModal_Conditional_4_Template, 62, 19);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("title", "Create Event");
          \u0275\u0275advance();
          \u0275\u0275property("formGroup", ctx.form);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.apiError() ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.isLoadingCalendars() ? 3 : 4);
        }
      }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, BaseModal], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n.tag-chip-editable[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px 4px 12px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background-color 0.2s;\n}\n.tag-chip-editable[_ngcontent-%COMP%]:hover {\n  background-color: #bbdefb;\n}\n.tag-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #1976d2;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s;\n}\n.tag-remove[_ngcontent-%COMP%]:hover {\n  background-color: #ef5350;\n  color: white;\n}\n/*# sourceMappingURL=create-event-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateEventModal, [{
        type: Component,
        args: [{ selector: "app-create-event-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, BaseModal], template: `<app-base-modal 
  [title]="'Create Event'" 
  (close)="onClose()">

  <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
    <!-- API error -->
    @if (apiError()) {
      <div class="alert alert-danger mb-3">
        {{ apiError() }}
      </div>
    }

    <!-- Loading calendars -->
    @if (isLoadingCalendars()) {
      <div class="text-center py-3">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading calendars...</span>
        </div>
      </div>
    } @else {
      <!-- Calendar dropdown -->
      <div class="mb-3">
        <label class="form-label">Calendar (admin only)</label>
        <select
          class="form-select app-select"
          formControlName="calendarId"
          [class.is-invalid]="hasError('calendarId')"
        >
          <option value="" disabled>Select calendar (admin only)</option>
          @for (c of adminCalendars(); track c.id) {
            <option [value]="c.id">{{ c.name }}</option>
          }
        </select>
        <div class="invalid-feedback">Please select an admin calendar.</div>
      </div>

      <!-- Title -->
      <div class="mb-3">
        <label class="form-label">Event Title</label>
        <input
          type="text"
          class="form-control app-input"
          placeholder="Event Title"
          formControlName="title"
          [class.is-invalid]="hasError('title')"
        />
        <div class="invalid-feedback">Title is required (min 2 chars).</div>
      </div>

      <!-- Dates / times -->
      <div class="row g-3">
        <div class="col-12 col-md-6">
          <label class="form-label">Start date</label>
          <input
            type="date"
            class="form-control app-input"
            formControlName="startDate"
            [class.is-invalid]="hasError('startDate')"
          />
          <div class="invalid-feedback">Start date required.</div>
        </div>

        <div class="col-12 col-md-6">
          <label class="form-label">Start time</label>
          <input
            type="time"
            class="form-control app-input"
            formControlName="startTime"
            [class.is-invalid]="hasError('startTime')"
          />
          <div class="invalid-feedback">Start time required.</div>
        </div>

        <div class="col-12 col-md-6">
          <label class="form-label">End date</label>
          <input
            type="date"
            class="form-control app-input"
            formControlName="endDate"
            [class.is-invalid]="hasError('endDate')"
          />
          <div class="invalid-feedback">End date required.</div>
        </div>

        <div class="col-12 col-md-6">
          <label class="form-label">End time</label>
          <input
            type="time"
            class="form-control app-input"
            formControlName="endTime"
            [class.is-invalid]="hasError('endTime')"
          />
          <div class="invalid-feedback">End time required.</div>
        </div>
      </div>

      <!-- Description -->
      <div class="mt-3 mb-3">
        <label class="form-label">Description</label>
        <textarea
          rows="4"
          class="form-control app-textarea"
          placeholder="Description"
          formControlName="description"
        ></textarea>
      </div>

      <!-- Notes -->
      <div class="mb-3">
        <label class="form-label">Notes</label>
        <textarea
          rows="4"
          class="form-control app-textarea"
          placeholder="Notes"
          formControlName="notes"
        ></textarea>
      </div>

      <!-- Tags -->
      <div class="mb-3">
        <label class="form-label">Tags</label>
        <div class="tag-input-container">
          <input
            type="text"
            class="form-control app-input"
            placeholder="Type a tag and press Enter"
            [(ngModel)]="tagInput"
            [ngModelOptions]="{standalone: true}"
            (keypress)="onTagKeyPress($event)"
          />
          <button type="button" class="btn btn-sm btn-outline-primary" (click)="addTag()">
            Add
          </button>
        </div>
        @if (tags().length > 0) {
          <div class="tags-list">
            @for (tag of tags(); track tag) {
              <span class="tag-chip-editable">
                {{ tag }}
                <button type="button" class="tag-remove" (click)="removeTag(tag)" aria-label="Remove tag">
                  \xD7
                </button>
              </span>
            }
          </div>
        }
      </div>

      <!-- Action buttons -->
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
          [disabled]="isSubmitting() || form.invalid"
        >
          {{ isSubmitting() ? 'Creating...' : 'Create Event' }}
        </button>
      </div>
    }
  </form>

</app-base-modal>
`, styles: ["/* src/app/features/event/create-event-modal/create-event-modal.css */\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.tags-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n.tag-chip-editable {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px 4px 12px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background-color 0.2s;\n}\n.tag-chip-editable:hover {\n  background-color: #bbdefb;\n}\n.tag-remove {\n  background: none;\n  border: none;\n  color: #1976d2;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s;\n}\n.tag-remove:hover {\n  background-color: #ef5350;\n  color: white;\n}\n/*# sourceMappingURL=create-event-modal.css.map */\n"] }]
      }], null, { close: [{ type: Output, args: ["close"] }], eventCreated: [{ type: Output, args: ["eventCreated"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateEventModal, { className: "CreateEventModal", filePath: "src/app/features/event/create-event-modal/create-event-modal.ts", lineNumber: 25 });
    })();
  }
});

export {
  CreateEventModal,
  init_create_event_modal
};
//# sourceMappingURL=chunk-PRZLOFED.js.map
