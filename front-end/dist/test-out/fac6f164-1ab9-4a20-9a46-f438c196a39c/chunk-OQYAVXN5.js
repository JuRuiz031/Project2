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
  Input,
  Output,
  computed,
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

// src/app/features/event/edit-event-modal/edit-event-modal.ts
function EditEventModal_Conditional_2_Template(rf, ctx) {
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
function EditEventModal_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function EditEventModal_Conditional_4_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
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
function EditEventModal_Conditional_4_Conditional_59_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 34);
    \u0275\u0275listener("click", function EditEventModal_Conditional_4_Conditional_59_For_2_Template_button_click_2_listener() {
      const tag_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeTag(tag_r5));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r5, " ");
  }
}
function EditEventModal_Conditional_4_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, EditEventModal_Conditional_4_Conditional_59_For_2_Template, 4, 1, "span", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.tags());
  }
}
function EditEventModal_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "label", 9);
    \u0275\u0275text(4, "Calendar (admin only)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 10)(6, "option", 11);
    \u0275\u0275text(7, "Select calendar (admin only)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, EditEventModal_Conditional_4_For_9_Template, 2, 2, "option", 12, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275text(11, "Please select an admin calendar.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
    \u0275\u0275text(14, "Event Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 14);
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275text(17, "Title is required (min 2 chars).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 6)(19, "div", 15)(20, "label", 9);
    \u0275\u0275text(21, "Start date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 16);
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275text(24, "Start date required.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 15)(26, "label", 9);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 17);
    \u0275\u0275elementStart(29, "div", 13);
    \u0275\u0275text(30, "Start time required.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 15)(32, "label", 9);
    \u0275\u0275text(33, "End date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 18);
    \u0275\u0275elementStart(35, "div", 13);
    \u0275\u0275text(36, "End date required.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 15)(38, "label", 9);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 19);
    \u0275\u0275elementStart(41, "div", 13);
    \u0275\u0275text(42, "End time required.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 20)(44, "label", 9);
    \u0275\u0275text(45, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "textarea", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 8)(48, "label", 9);
    \u0275\u0275text(49, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 23)(52, "div", 8)(53, "label", 9);
    \u0275\u0275text(54, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 24)(56, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EditEventModal_Conditional_4_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.tagInput, $event) || (ctx_r0.tagInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function EditEventModal_Conditional_4_Template_input_keypress_56_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTagKeyPress($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 26);
    \u0275\u0275listener("click", function EditEventModal_Conditional_4_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addTag());
    });
    \u0275\u0275text(58, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(59, EditEventModal_Conditional_4_Conditional_59_Template, 3, 0, "div", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 28)(61, "button", 29);
    \u0275\u0275listener("click", function EditEventModal_Conditional_4_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteEvent());
    });
    \u0275\u0275text(62, " Delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 30)(64, "button", 31);
    \u0275\u0275listener("click", function EditEventModal_Conditional_4_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClose());
    });
    \u0275\u0275text(65, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 32);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("calendarId"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.adminCalendars());
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("title"));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("startDate"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Start time (", ctx_r0.getTimezoneAbbr(), ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("startTime"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("endDate"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("End time (", ctx_r0.getTimezoneAbbr(), ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("endTime"));
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tagInput);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.tags().length > 0 ? 59 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting() || ctx_r0.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmitting() ? "Saving..." : "Save Changes", " ");
  }
}
var _c0, _forTrack0, EditEventModal;
var init_edit_event_modal = __esm({
  "src/app/features/event/edit-event-modal/edit-event-modal.ts"() {
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
    EditEventModal = class _EditEventModal {
      fb = inject(FormBuilder);
      eventService = inject(EventService);
      calendarService = inject(CalendarService);
      // Inputs/Outputs
      eventId = input.required(...ngDevMode ? [{ debugName: "eventId" }] : []);
      close = output();
      eventUpdated = output();
      // emits event ID when updated
      deleteRequested = output();
      // emits event ID to switch to delete modal
      eventIdValue = "";
      // Signals
      calendars = signal([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
      isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
      tags = signal([], ...ngDevMode ? [{ debugName: "tags" }] : []);
      tagInput = signal("", ...ngDevMode ? [{ debugName: "tagInput" }] : []);
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
        const id = this.eventId();
        if (!id) {
          this.apiError.set("Missing event id");
          this.isLoading.set(false);
          return;
        }
        this.eventIdValue = id;
        this.loadCalendars();
        this.loadEvent(id);
      }
      loadCalendars() {
        this.calendarService.getHomepage().pipe(take(1)).subscribe({
          next: (home) => {
            const mappedCalendars = (home.calendars ?? []).map((c) => ({
              id: c.calendar_id,
              name: c.name,
              isAdmin: c.is_admin
            }));
            this.calendars.set(mappedCalendars);
          },
          error: (err) => {
            console.warn("Could not load calendars", err);
          }
        });
      }
      loadEvent(id) {
        this.apiError.set("");
        this.isLoading.set(true);
        this.calendarService.getByEventIds([id]).pipe(take(1)).subscribe({
          next: (res) => {
            this.isLoading.set(false);
            const ev = res.events?.[0];
            if (!ev) {
              this.apiError.set("Event not found");
              return;
            }
            const start = this.isoToDateTime(ev.start_time);
            const end = this.isoToDateTime(ev.end_time);
            this.form.patchValue({
              calendarId: ev.calendar_id ?? "",
              title: ev.title ?? "",
              startDate: start.date,
              startTime: start.time,
              endDate: end.date,
              endTime: end.time,
              description: ev.description ?? "",
              notes: ev.notes ?? ""
            }, { emitEvent: false });
            this.tags.set(ev.tags ?? []);
          },
          error: (err) => {
            this.isLoading.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not load event");
          }
        });
      }
      /**
       * If backend sends timestamps without timezone (e.g. "2026-01-26T17:30:00"),
       * JS will treat that as LOCAL time and you get a +6 hour drift.
       * Fix: if no timezone assume UTC and append 'Z'.
       */
      parseServerInstant(iso) {
        const hasTz = /([zZ]|[+\-]\d{2}:\d{2})$/.test(iso);
        return new Date(hasTz ? iso : `${iso}Z`);
      }
      // ✅ ISO -> Local date/time for <input type="date"> and <input type="time">
      isoToDateTime(iso) {
        if (!iso)
          return { date: "", time: "" };
        const d = this.parseServerInstant(iso);
        if (isNaN(d.getTime()))
          return { date: "", time: "" };
        const pad = (n) => String(n).padStart(2, "0");
        const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
        const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
        return { date, time };
      }
      // ✅ Build a Date in LOCAL time (avoids "YYYY-MM-DDTHH:mm" parsing ambiguity)
      toLocalDate(date, time) {
        if (!date || !time)
          return null;
        const [y, m, d] = date.split("-").map(Number);
        const [hh, mm] = time.split(":").map(Number);
        if (![y, m, d, hh, mm].every(Number.isFinite))
          return null;
        const local = new Date(y, m - 1, d, hh, mm, 0, 0);
        return isNaN(local.getTime()) ? null : local;
      }
      saveChanges() {
        this.apiError.set("");
        if (!this.eventIdValue) {
          this.apiError.set("Missing event id");
          return;
        }
        if (this.form.invalid) {
          this.form.markAllAsTouched();
          return;
        }
        const v = this.form.getRawValue();
        const start = this.toLocalDate(String(v.startDate ?? ""), String(v.startTime ?? ""));
        const end = this.toLocalDate(String(v.endDate ?? ""), String(v.endTime ?? ""));
        if (!start) {
          this.apiError.set("Start date/time is invalid.");
          return;
        }
        if (!end) {
          this.apiError.set("End date/time is invalid.");
          return;
        }
        if (end.getTime() <= start.getTime()) {
          this.apiError.set("End must be after start.");
          return;
        }
        const dto = {
          calendar_id: String(v.calendarId ?? ""),
          title: String(v.title ?? ""),
          start_time: start.toISOString(),
          // store UTC instant
          end_time: end.toISOString(),
          description: v.description ?? "",
          notes: v.notes ?? "",
          tags: this.tags()
        };
        this.isSubmitting.set(true);
        this.eventService.update(this.eventIdValue, dto).pipe(take(1)).subscribe({
          next: () => {
            this.isSubmitting.set(false);
            this.eventUpdated.emit(this.eventIdValue);
            this.close.emit();
          },
          error: (err) => {
            this.isSubmitting.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not save changes");
          }
        });
      }
      deleteEvent() {
        this.deleteRequested.emit(this.eventIdValue);
      }
      onClose() {
        this.close.emit();
      }
      hasError(controlName) {
        const c = this.form.get(controlName);
        return !!c && c.touched && c.invalid;
      }
      addTag() {
        const tag = this.tagInput().trim();
        if (tag && !this.tags().includes(tag)) {
          this.tags.update((current) => [...current, tag]);
          this.tagInput.set("");
        }
      }
      removeTag(tag) {
        this.tags.update((current) => current.filter((t) => t !== tag));
      }
      onTagKeyPress(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          this.addTag();
        }
      }
      /**
       * Get user's timezone abbreviation (e.g., EST, PST, UTC)
       */
      getTimezoneAbbr() {
        const now = /* @__PURE__ */ new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZoneName: "short",
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        });
        const parts = formatter.formatToParts(now);
        const tzPart = parts.find((p) => p.type === "timeZoneName");
        return tzPart?.value ?? "UTC";
      }
      static \u0275fac = function EditEventModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _EditEventModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditEventModal, selectors: [["app-edit-event-modal"]], inputs: { eventId: [1, "eventId"] }, outputs: { close: "close", eventUpdated: "eventUpdated", deleteRequested: "deleteRequested" }, decls: 5, vars: 4, consts: [[3, "close", "title"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "alert", "alert-danger", "mb-3"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "row", "g-3"], [1, "col-12", "col-lg-8"], [1, "mb-3"], [1, "form-label"], ["formControlName", "calendarId", 1, "form-select", "app-select"], ["value", "", "disabled", ""], [3, "value"], [1, "invalid-feedback"], ["type", "text", "placeholder", "Event Title", "formControlName", "title", 1, "form-control", "app-input"], [1, "col-12", "col-md-6"], ["type", "date", "formControlName", "startDate", 1, "form-control", "app-input"], ["type", "time", "formControlName", "startTime", 1, "form-control", "app-input"], ["type", "date", "formControlName", "endDate", 1, "form-control", "app-input"], ["type", "time", "formControlName", "endTime", 1, "form-control", "app-input"], [1, "mt-3", "mb-3"], ["rows", "4", "placeholder", "Description", "formControlName", "description", 1, "form-control", "app-textarea"], ["rows", "4", "placeholder", "Notes", "formControlName", "notes", 1, "form-control", "app-textarea"], [1, "col-12", "col-lg-4"], [1, "tag-input-container"], ["type", "text", "placeholder", "Add a tag...", 1, "form-control", "app-input", 3, "ngModelChange", "keypress", "ngModel", "ngModelOptions"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "mt-2", "w-100", 3, "click"], [1, "tags-list"], [1, "d-flex", "justify-content-between", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "disabled"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "tag-chip-editable"], ["type", "button", "title", "Remove tag", 1, "tag-remove", 3, "click"]], template: function EditEventModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-base-modal", 0);
          \u0275\u0275listener("close", function EditEventModal_Template_app_base_modal_close_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275elementStart(1, "form", 1);
          \u0275\u0275listener("ngSubmit", function EditEventModal_Template_form_ngSubmit_1_listener() {
            return ctx.saveChanges();
          });
          \u0275\u0275conditionalCreate(2, EditEventModal_Conditional_2_Template, 2, 1, "div", 2);
          \u0275\u0275conditionalCreate(3, EditEventModal_Conditional_3_Template, 4, 0, "div", 3)(4, EditEventModal_Conditional_4_Template, 68, 22);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("title", "Edit Event");
          \u0275\u0275advance();
          \u0275\u0275property("formGroup", ctx.form);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.apiError() ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.isLoading() ? 3 : 4);
        }
      }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, BaseModal], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.tag-input-container[_ngcontent-%COMP%] {\n}\n.tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n.tag-chip-editable[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px 4px 12px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background-color 0.2s;\n}\n.tag-chip-editable[_ngcontent-%COMP%]:hover {\n  background-color: #bbdefb;\n}\n.tag-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #1976d2;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s;\n}\n.tag-remove[_ngcontent-%COMP%]:hover {\n  background-color: #ef5350;\n  color: white;\n}\n/*# sourceMappingURL=edit-event-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditEventModal, [{
        type: Component,
        args: [{ selector: "app-edit-event-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, BaseModal], template: `<app-base-modal 
  [title]="'Edit Event'" 
  (close)="onClose()">

  <form [formGroup]="form" (ngSubmit)="saveChanges()" novalidate>
    @if (apiError()) {
      <div class="alert alert-danger mb-3">{{ apiError() }}</div>
    }

    @if (isLoading()) {
      <div class="text-center py-3">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    } @else {
      <div class="row g-3">
        <!-- LEFT COLUMN -->
        <div class="col-12 col-lg-8">
          <!-- Calendar dropdown -->
          <div class="mb-3">
            <label class="form-label">Calendar (admin only)</label>
            <select class="form-select app-select" formControlName="calendarId" [class.is-invalid]="hasError('calendarId')">
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
            <input type="text" class="form-control app-input" placeholder="Event Title" formControlName="title" [class.is-invalid]="hasError('title')" />
            <div class="invalid-feedback">Title is required (min 2 chars).</div>
          </div>

          <!-- Dates / times -->
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <label class="form-label">Start date</label>
              <input type="date" class="form-control app-input" formControlName="startDate" [class.is-invalid]="hasError('startDate')" />
              <div class="invalid-feedback">Start date required.</div>
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label">Start time ({{ getTimezoneAbbr() }})</label>
              <input type="time" class="form-control app-input" formControlName="startTime" [class.is-invalid]="hasError('startTime')" />
              <div class="invalid-feedback">Start time required.</div>
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label">End date</label>
              <input type="date" class="form-control app-input" formControlName="endDate" [class.is-invalid]="hasError('endDate')" />
              <div class="invalid-feedback">End date required.</div>
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label">End time ({{ getTimezoneAbbr() }})</label>
              <input type="time" class="form-control app-input" formControlName="endTime" [class.is-invalid]="hasError('endTime')" />
              <div class="invalid-feedback">End time required.</div>
            </div>
          </div>

          <!-- Description -->
          <div class="mt-3 mb-3">
            <label class="form-label">Description</label>
            <textarea rows="4" class="form-control app-textarea" placeholder="Description" formControlName="description"></textarea>
          </div>

          <!-- Notes -->
          <div class="mb-3">
            <label class="form-label">Notes</label>
            <textarea rows="4" class="form-control app-textarea" placeholder="Notes" formControlName="notes"></textarea>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="col-12 col-lg-4">
          <!-- Tags -->
          <div class="mb-3">
            <label class="form-label">Tags</label>
            <div class="tag-input-container">
              <input 
                type="text" 
                class="form-control app-input" 
                placeholder="Add a tag..." 
                [(ngModel)]="tagInput" 
                [ngModelOptions]="{standalone: true}"
                (keypress)="onTagKeyPress($event)" 
              />
              <button type="button" class="btn btn-sm btn-outline-primary mt-2 w-100" (click)="addTag()">Add</button>
            </div>
            @if (tags().length > 0) {
              <div class="tags-list">
                @for (tag of tags(); track tag) {
                  <span class="tag-chip-editable">
                    {{ tag }}
                    <button type="button" class="tag-remove" (click)="removeTag(tag)" title="Remove tag">\xD7</button>
                  </span>
                }
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="d-flex justify-content-between gap-2 mt-4">
        <button type="button" class="btn btn-outline-danger" (click)="deleteEvent()" [disabled]="isSubmitting()">
          Delete
        </button>
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-outline-secondary" (click)="onClose()" [disabled]="isSubmitting()">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary" [disabled]="isSubmitting() || form.invalid">
            {{ isSubmitting() ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </div>
    }
  </form>

</app-base-modal>
`, styles: ["/* src/app/features/event/edit-event-modal/edit-event-modal.css */\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.tag-input-container {\n}\n.tags-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n.tag-chip-editable {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px 4px 12px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background-color 0.2s;\n}\n.tag-chip-editable:hover {\n  background-color: #bbdefb;\n}\n.tag-remove {\n  background: none;\n  border: none;\n  color: #1976d2;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s;\n}\n.tag-remove:hover {\n  background-color: #ef5350;\n  color: white;\n}\n/*# sourceMappingURL=edit-event-modal.css.map */\n"] }]
      }], null, { eventId: [{ type: Input, args: [{ isSignal: true, alias: "eventId", required: true }] }], close: [{ type: Output, args: ["close"] }], eventUpdated: [{ type: Output, args: ["eventUpdated"] }], deleteRequested: [{ type: Output, args: ["deleteRequested"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditEventModal, { className: "EditEventModal", filePath: "src/app/features/event/edit-event-modal/edit-event-modal.ts", lineNumber: 24 });
    })();
  }
});

export {
  EditEventModal,
  init_edit_event_modal
};
//# sourceMappingURL=chunk-OQYAVXN5.js.map
