import {
  PollService,
  init_poll_service
} from "./chunk-QKB7UDAX.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
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
  NgClass,
  init_common
} from "./chunk-EGU5GLVS.js";
import {
  Component,
  Input,
  Output,
  computed,
  init_core,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/poll/create-poll-modal/create-poll-modal.ts
function CreatePollModal_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
function CreatePollModal_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("value", c_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.name, " ");
  }
}
function CreatePollModal_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "input", 38);
    \u0275\u0275elementStart(2, "button", 39);
    \u0275\u0275listener("click", function CreatePollModal_For_59_Template_button_click_2_listener() {
      const \u0275$index_104_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeOption(\u0275$index_104_r4));
    });
    \u0275\u0275text(3, " \u2715 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const optCtrl_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControl", optCtrl_r5);
  }
}
function CreatePollModal_Conditional_68_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 41);
    \u0275\u0275listener("click", function CreatePollModal_Conditional_68_For_2_Template_button_click_2_listener() {
      const \u0275$index_129_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeTag(\u0275$index_129_r7));
    });
    \u0275\u0275text(3, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tagCtrl_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tagCtrl_r8.value, " ");
  }
}
function CreatePollModal_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, CreatePollModal_Conditional_68_For_2_Template, 4, 1, "span", 40, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.tags.controls);
  }
}
var _c0, _c1, _forTrack0, CreatePollModal;
var init_create_poll_modal = __esm({
  "src/app/features/poll/create-poll-modal/create-poll-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_forms();
    init_forms();
    init_base_modal();
    init_calendar_service();
    init_poll_service();
    init_core();
    init_common();
    init_forms();
    _c0 = (a0) => ({ "is-invalid": a0 });
    _c1 = () => ({ standalone: true });
    _forTrack0 = ($index, $item) => $item.id;
    CreatePollModal = class _CreatePollModal {
      fb = inject(FormBuilder);
      calendarService = inject(CalendarService);
      pollService = inject(PollService);
      // Optional inputs if you want to control behavior from parent later
      title = input("Create Poll", ...ngDevMode ? [{ debugName: "title" }] : []);
      // Outputs
      close = output();
      pollCreated = output();
      // emits poll_id after successful create
      // State (signals, consistent with other modals)
      calendars = signal([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
      isLoadingCalendars = signal(false, ...ngDevMode ? [{ debugName: "isLoadingCalendars" }] : []);
      adminCalendars = computed(() => this.calendars().filter((c) => c.isAdmin), ...ngDevMode ? [{ debugName: "adminCalendars" }] : []);
      // UI-only inputs for add rows
      tagInput = "";
      optionInput = "";
      form = this.fb.group({
        calendarId: ["", Validators.required],
        title: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
        description: ["", [Validators.maxLength(1e3)]],
        notes: ["", [Validators.maxLength(1e3)]],
        startDate: ["", Validators.required],
        startTime: ["", Validators.required],
        endDate: ["", Validators.required],
        endTime: ["", Validators.required],
        results_visible: [true, Validators.required],
        allow_multiple_votes: [false, Validators.required],
        tags: this.fb.array([]),
        // UI-only option strings -> mapped to {description}[]
        options: this.fb.array([
          this.fb.control("Option 1", [Validators.required, Validators.minLength(1), Validators.maxLength(80)]),
          this.fb.control("Option 2", [Validators.required, Validators.minLength(1), Validators.maxLength(80)])
        ])
      });
      ngOnInit() {
        this.loadCalendars();
      }
      // ---- FormArray getters ----
      get tags() {
        return this.form.get("tags");
      }
      get options() {
        return this.form.get("options");
      }
      // ---- Calendars ----
      loadCalendars() {
        this.apiError.set("");
        this.isLoadingCalendars.set(true);
        this.calendarService.getHomepage().subscribe({
          next: (home) => {
            this.isLoadingCalendars.set(false);
            const mapped = (home.calendars ?? []).map((c) => ({
              id: c.calendar_id,
              name: c.name,
              isAdmin: c.is_admin
            }));
            this.calendars.set(mapped);
            const firstAdmin = mapped.find((c) => c.isAdmin);
            const firstAny = mapped[0];
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
      // ---- Auth helper ----
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
      // ---- Timezone-safe: Local inputs -> local Date -> UTC instant string ----
      // This matches your working event fix and avoids the +6 hour incremental bug.
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
      // ---- TAGS ----
      addTag() {
        this.apiError.set("");
        const value = (this.tagInput || "").trim();
        if (!value)
          return;
        const exists = this.tags.controls.some((c) => (c.value || "").toLowerCase() === value.toLowerCase());
        if (exists) {
          this.apiError.set("Tag already exists.");
          return;
        }
        if (value.length > 30) {
          this.apiError.set("Tag is too long (max 30 chars).");
          return;
        }
        this.tags.push(this.fb.control(value, [Validators.required, Validators.maxLength(30)]));
        this.tagInput = "";
      }
      removeTag(index) {
        this.tags.removeAt(index);
      }
      // ---- OPTIONS ----
      addOption() {
        this.apiError.set("");
        const value = (this.optionInput || "").trim();
        if (!value)
          return;
        if (this.options.length >= 20) {
          this.apiError.set("Max 20 options allowed.");
          return;
        }
        this.options.push(this.fb.control(value, [Validators.required, Validators.minLength(1), Validators.maxLength(80)]));
        this.optionInput = "";
      }
      removeOption(index) {
        if (this.options.length <= 2) {
          this.apiError.set("A poll must have at least 2 options.");
          return;
        }
        this.options.removeAt(index);
      }
      // ---- SUBMIT ----
      submit() {
        this.apiError.set("");
        if (this.form.invalid) {
          this.form.markAllAsTouched();
          this.apiError.set("Please fix validation errors.");
          return;
        }
        if (this.options.length < 2) {
          this.apiError.set("A poll must have at least 2 options.");
          return;
        }
        const userId = this.getUserIdFromStorage();
        if (!userId) {
          this.apiError.set("Not logged in (missing user id). Please sign in again.");
          return;
        }
        const v = this.form.getRawValue();
        const start = this.toLocalDate(String(v.startDate), String(v.startTime));
        const end = this.toLocalDate(String(v.endDate), String(v.endTime));
        if (!start || !end) {
          this.apiError.set("Start/End date-time is invalid.");
          return;
        }
        if (end.getTime() <= start.getTime()) {
          this.apiError.set("End must be after start.");
          return;
        }
        const tags = (v.tags ?? []).map((t) => (t ?? "").trim()).filter((t) => t.length > 0);
        const options = (v.options ?? []).map((o) => (o ?? "").trim()).filter((o) => o.length > 0).map((o) => ({ description: o }));
        if (options.length < 2) {
          this.apiError.set("A poll must have at least 2 options.");
          return;
        }
        const dto = {
          user_id: String(userId),
          calendar_id: String(v.calendarId),
          title: String(v.title),
          description: String(v.description ?? "").trim() || void 0,
          notes: String(v.notes ?? "").trim() || void 0,
          // store UTC instants
          start_time: start.toISOString(),
          end_time: end.toISOString(),
          results_visible: Boolean(v.results_visible),
          allow_multiple_votes: Boolean(v.allow_multiple_votes),
          options,
          tags
        };
        this.isSubmitting.set(true);
        this.pollService.create(dto).subscribe({
          next: (created) => {
            this.isSubmitting.set(false);
            this.pollCreated.emit(created.poll_id);
            this.close.emit();
          },
          error: (err) => {
            this.isSubmitting.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not create poll");
          }
        });
      }
      onClose() {
        this.close.emit();
      }
      // If you want a Back button later, wire output like other modals.
      onBack() {
      }
      hasError(name) {
        const c = this.form.get(name);
        return !!c && c.touched && c.invalid;
      }
      static \u0275fac = function CreatePollModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CreatePollModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePollModal, selectors: [["app-create-poll-modal"]], inputs: { title: [1, "title"] }, outputs: { close: "close", pollCreated: "pollCreated" }, decls: 78, vars: 36, consts: [[3, "close", "title", "showBackButton", "size"], [1, "alert", "alert-danger", "mb-3"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-12", "col-lg-7"], [1, "mb-3"], [1, "form-label"], ["formControlName", "calendarId", 1, "form-select", "app-select", 3, "ngClass"], ["value", "", "disabled", ""], [3, "value"], [1, "invalid-feedback"], ["type", "text", "placeholder", "Poll title", "formControlName", "title", 1, "form-control", "app-input", 3, "ngClass"], ["rows", "3", "placeholder", "Optional description for this poll", "formControlName", "description", 1, "form-control", "app-input", 3, "ngClass"], [1, "row", "g-3", "mb-3"], [1, "col-12", "col-md-6"], ["type", "date", "formControlName", "startDate", 1, "form-control", "app-input", 3, "ngClass"], ["type", "time", "formControlName", "startTime", 1, "form-control", "app-input", 3, "ngClass"], ["type", "date", "formControlName", "endDate", 1, "form-control", "app-input", 3, "ngClass"], ["type", "time", "formControlName", "endTime", 1, "form-control", "app-input", 3, "ngClass"], [1, "border", "rounded", "p-3", "mb-3"], [1, "fw-semibold", "mb-2"], [1, "form-check"], ["type", "checkbox", "id", "allowMultipleVotes", "formControlName", "allow_multiple_votes", 1, "form-check-input"], ["for", "allowMultipleVotes", 1, "form-check-label"], [1, "form-text", "text-secondary"], [1, "border", "rounded", "p-3"], [1, "d-grid", "gap-2"], [1, "input-group"], [1, "input-group", "mt-3"], ["type", "text", "placeholder", "Option text", 1, "form-control", "app-input", 3, "ngModelChange", "keydown.enter", "ngModel", "ngModelOptions"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "col-12", "col-lg-5"], [1, "fw-semibold", "mb-3"], [1, "d-flex", "flex-wrap", "gap-2", "mb-3"], ["type", "text", "placeholder", "Add a tag...", 1, "form-control", "app-input", 3, "ngModelChange", "keydown.enter", "ngModel", "ngModelOptions"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "form-control", "app-input", 3, "formControl"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "badge", "d-inline-flex", "align-items-center"], ["type", "button", "aria-label", "Remove tag", 1, "btn-sm", 3, "click"]], template: function CreatePollModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-base-modal", 0);
          \u0275\u0275listener("close", function CreatePollModal_Template_app_base_modal_close_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275conditionalCreate(1, CreatePollModal_Conditional_1_Template, 2, 1, "div", 1);
          \u0275\u0275elementStart(2, "form", 2);
          \u0275\u0275listener("ngSubmit", function CreatePollModal_Template_form_ngSubmit_2_listener() {
            return ctx.submit();
          });
          \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "label", 6);
          \u0275\u0275text(7, "Calendar (admin only)");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(8, "select", 7)(9, "option", 8);
          \u0275\u0275text(10, "Select calendar (admin only)");
          \u0275\u0275elementEnd();
          \u0275\u0275repeaterCreate(11, CreatePollModal_For_12_Template, 2, 2, "option", 9, _forTrack0);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(13, "div", 10);
          \u0275\u0275text(14, "Select an admin calendar.");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(15, "div", 5)(16, "label", 6);
          \u0275\u0275text(17, "Poll Title");
          \u0275\u0275elementEnd();
          \u0275\u0275element(18, "input", 11);
          \u0275\u0275elementStart(19, "div", 10);
          \u0275\u0275text(20, "Title required (min 2 chars).");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(21, "div", 5)(22, "label", 6);
          \u0275\u0275text(23, "Description (optional)");
          \u0275\u0275elementEnd();
          \u0275\u0275element(24, "textarea", 12);
          \u0275\u0275elementStart(25, "div", 10);
          \u0275\u0275text(26, " Description is too long. ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(27, "div", 13)(28, "div", 14)(29, "label", 6);
          \u0275\u0275text(30, "Start date");
          \u0275\u0275elementEnd();
          \u0275\u0275element(31, "input", 15);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(32, "div", 14)(33, "label", 6);
          \u0275\u0275text(34, "Start time");
          \u0275\u0275elementEnd();
          \u0275\u0275element(35, "input", 16);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(36, "div", 13)(37, "div", 14)(38, "label", 6);
          \u0275\u0275text(39, "End date");
          \u0275\u0275elementEnd();
          \u0275\u0275element(40, "input", 17);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(41, "div", 14)(42, "label", 6);
          \u0275\u0275text(43, "End time");
          \u0275\u0275elementEnd();
          \u0275\u0275element(44, "input", 18);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(45, "div", 19)(46, "div", 20);
          \u0275\u0275text(47, "Voting");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(48, "div", 21);
          \u0275\u0275element(49, "input", 22);
          \u0275\u0275elementStart(50, "label", 23);
          \u0275\u0275text(51, " Allow multiple votes (choose more than one option) ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(52, "div", 24);
          \u0275\u0275text(53, " If unchecked, users can vote for only one option. ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(54, "div", 25)(55, "div", 20);
          \u0275\u0275text(56, "Options");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(57, "div", 26);
          \u0275\u0275repeaterCreate(58, CreatePollModal_For_59_Template, 4, 1, "div", 27, \u0275\u0275repeaterTrackByIndex);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(60, "div", 28)(61, "input", 29);
          \u0275\u0275twoWayListener("ngModelChange", function CreatePollModal_Template_input_ngModelChange_61_listener($event) {
            \u0275\u0275twoWayBindingSet(ctx.optionInput, $event) || (ctx.optionInput = $event);
            return $event;
          });
          \u0275\u0275listener("keydown.enter", function CreatePollModal_Template_input_keydown_enter_61_listener() {
            return ctx.addOption();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(62, "button", 30);
          \u0275\u0275listener("click", function CreatePollModal_Template_button_click_62_listener() {
            return ctx.addOption();
          });
          \u0275\u0275text(63, " Add ");
          \u0275\u0275elementEnd()()()();
          \u0275\u0275elementStart(64, "div", 31)(65, "div", 25)(66, "div", 32);
          \u0275\u0275text(67, "Tags");
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(68, CreatePollModal_Conditional_68_Template, 3, 0, "div", 33);
          \u0275\u0275elementStart(69, "div", 27)(70, "input", 34);
          \u0275\u0275twoWayListener("ngModelChange", function CreatePollModal_Template_input_ngModelChange_70_listener($event) {
            \u0275\u0275twoWayBindingSet(ctx.tagInput, $event) || (ctx.tagInput = $event);
            return $event;
          });
          \u0275\u0275listener("keydown.enter", function CreatePollModal_Template_input_keydown_enter_70_listener() {
            return ctx.addTag();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(71, "button", 30);
          \u0275\u0275listener("click", function CreatePollModal_Template_button_click_71_listener() {
            return ctx.addTag();
          });
          \u0275\u0275text(72, " Add ");
          \u0275\u0275elementEnd()()()()();
          \u0275\u0275elementStart(73, "div", 35)(74, "button", 36);
          \u0275\u0275listener("click", function CreatePollModal_Template_button_click_74_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(75, " Cancel ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(76, "button", 37);
          \u0275\u0275text(77);
          \u0275\u0275elementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275property("title", ctx.title())("showBackButton", false)("size", "large");
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.apiError() ? 1 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("formGroup", ctx.form);
          \u0275\u0275advance(6);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c0, ctx.hasError("calendarId")));
          \u0275\u0275advance(3);
          \u0275\u0275repeater(ctx.adminCalendars());
          \u0275\u0275advance(7);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c0, ctx.hasError("title")));
          \u0275\u0275advance(6);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c0, ctx.hasError("description")));
          \u0275\u0275advance(7);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c0, ctx.hasError("startDate")));
          \u0275\u0275advance(4);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(28, _c0, ctx.hasError("startTime")));
          \u0275\u0275advance(5);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c0, ctx.hasError("endDate")));
          \u0275\u0275advance(4);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c0, ctx.hasError("endTime")));
          \u0275\u0275advance(14);
          \u0275\u0275repeater(ctx.options.controls);
          \u0275\u0275advance(3);
          \u0275\u0275twoWayProperty("ngModel", ctx.optionInput);
          \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(34, _c1));
          \u0275\u0275advance(7);
          \u0275\u0275conditional(ctx.tags.controls.length > 0 ? 68 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275twoWayProperty("ngModel", ctx.tagInput);
          \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(35, _c1));
          \u0275\u0275advance(4);
          \u0275\u0275property("disabled", ctx.isSubmitting());
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", ctx.isSubmitting());
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? "Creating\u2026" : "Create Poll", " ");
        }
      }, dependencies: [CommonModule, NgClass, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, FormsModule, NgModel, BaseModal], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 8px 4px 12px;\n  background-color: #e3f2fd !important;\n  color: #1976d2 !important;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n  border: none;\n}\n.badge[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #1976d2;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0;\n  margin-left: 4px;\n  width: 20px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s;\n}\n.badge[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:hover {\n  background-color: #ef5350;\n  color: white;\n}\n.border.rounded[_ngcontent-%COMP%] {\n  border-color: #e0e0e0 !important;\n}\n.border.rounded.p-3[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.form-control.app-input[_ngcontent-%COMP%], \n.form-select.app-select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control.app-input[_ngcontent-%COMP%]:focus, \n.form-select.app-select[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border: 1px solid #007bff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n  border-color: #004085;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  border-color: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #007bff;\n  color: #007bff;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #007bff;\n  color: white;\n  border-color: #007bff;\n}\n.input-group[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=create-poll-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatePollModal, [{
        type: Component,
        args: [{ selector: "app-create-poll-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, BaseModal], template: `<app-base-modal
  [title]="title()"
  [showBackButton]="false"
  [size]="'large'"
  (close)="onClose()"
>
  <!-- API error -->
  @if (apiError()) {
    <div class="alert alert-danger mb-3">
      {{ apiError() }}
    </div>
  }

  <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
    <div class="row g-3">

      <!-- LEFT COLUMN -->
      <div class="col-12 col-lg-7">
        <!-- Calendar -->
        <div class="mb-3">
          <label class="form-label">Calendar (admin only)</label>
          <select
            class="form-select app-select"
            formControlName="calendarId"
            [ngClass]="{ 'is-invalid': hasError('calendarId') }"
          >
            <option value="" disabled>Select calendar (admin only)</option>
            @for (c of adminCalendars(); track c.id) {
              <option [value]="c.id">
                {{ c.name }}
              </option>
            }
          </select>
          <div class="invalid-feedback">Select an admin calendar.</div>
        </div>

        <!-- Title -->
        <div class="mb-3">
          <label class="form-label">Poll Title</label>
          <input
            type="text"
            class="form-control app-input"
            placeholder="Poll title"
            formControlName="title"
            [ngClass]="{ 'is-invalid': hasError('title') }"
          />
          <div class="invalid-feedback">Title required (min 2 chars).</div>
        </div>

        <!-- Description -->
        <div class="mb-3">
          <label class="form-label">Description (optional)</label>
          <textarea
            class="form-control app-input"
            rows="3"
            placeholder="Optional description for this poll"
            formControlName="description"
            [ngClass]="{ 'is-invalid': hasError('description') }"
          ></textarea>

          <div class="invalid-feedback">
            Description is too long.
          </div>
        </div>


        <!-- Start -->
        <div class="row g-3 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">Start date</label>
            <input
              type="date"
              class="form-control app-input"
              formControlName="startDate"
              [ngClass]="{ 'is-invalid': hasError('startDate') }"
            />
          </div>

          <div class="col-12 col-md-6">
            <label class="form-label">Start time</label>
            <input
              type="time"
              class="form-control app-input"
              formControlName="startTime"
              [ngClass]="{ 'is-invalid': hasError('startTime') }"
            />
          </div>
        </div>

        <!-- End -->
        <div class="row g-3 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">End date</label>
            <input
              type="date"
              class="form-control app-input"
              formControlName="endDate"
              [ngClass]="{ 'is-invalid': hasError('endDate') }"
            />
          </div>

          <div class="col-12 col-md-6">
            <label class="form-label">End time</label>
            <input
              type="time"
              class="form-control app-input"
              formControlName="endTime"
              [ngClass]="{ 'is-invalid': hasError('endTime') }"
            />
          </div>
        </div>

        <!-- Voting settings -->
        <div class="border rounded p-3 mb-3">
          <div class="fw-semibold mb-2">Voting</div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="allowMultipleVotes"
              formControlName="allow_multiple_votes"
            />
            <label class="form-check-label" for="allowMultipleVotes">
              Allow multiple votes (choose more than one option)
            </label>
          </div>

          <div class="form-text text-secondary">
            If unchecked, users can vote for only one option.
          </div>
        </div>


        <!-- OPTIONS -->
        <div class="border rounded p-3">
          <div class="fw-semibold mb-2">Options</div>

          <div class="d-grid gap-2">
            @for (optCtrl of options.controls; track $index; let i = $index) {
              <div class="input-group">
                <input class="form-control app-input" [formControl]="optCtrl" />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  (click)="removeOption(i)"
                >
                  \u2715
                </button>
              </div>
            }
          </div>

          <div class="input-group mt-3">
            <input
              class="form-control app-input"
              type="text"
              placeholder="Option text"
              [(ngModel)]="optionInput"
              [ngModelOptions]="{ standalone: true }"
              (keydown.enter)="addOption()"
            />
            <button class="btn btn-outline-primary" type="button" (click)="addOption()">
              Add
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN -->
      <div class="col-12 col-lg-5">
        <div class="border rounded p-3">
          <div class="fw-semibold mb-3">Tags</div>

          @if (tags.controls.length > 0) {
            <div class="d-flex flex-wrap gap-2 mb-3">
              @for (tagCtrl of tags.controls; track $index; let i = $index) {
                <span class="badge d-inline-flex align-items-center">
                  {{ tagCtrl.value }}
                  <button
                    type="button"
                    class="btn-sm"
                    (click)="removeTag(i)"
                    aria-label="Remove tag"
                  >
                    \xD7
                  </button>
                </span>
              }
            </div>
          }

          <div class="input-group">
            <input
              class="form-control app-input"
              type="text"
              placeholder="Add a tag..."
              [(ngModel)]="tagInput"
              [ngModelOptions]="{ standalone: true }"
              (keydown.enter)="addTag()"
            />
            <button class="btn btn-outline-primary" type="button" (click)="addTag()">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL FOOTER -->
    <div class="d-flex justify-content-end gap-2 mt-4">
      <button type="button" class="btn btn-outline-secondary" (click)="onClose()" [disabled]="isSubmitting()">
        Cancel
      </button>

      <button type="submit" class="btn btn-primary" [disabled]="isSubmitting()">
        {{ isSubmitting() ? 'Creating\u2026' : 'Create Poll' }}
      </button>
    </div>
  </form>
</app-base-modal>
`, styles: ["/* src/app/features/poll/create-poll-modal/create-poll-modal.css */\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.badge {\n  padding: 4px 8px 4px 12px;\n  background-color: #e3f2fd !important;\n  color: #1976d2 !important;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n  border: none;\n}\n.badge .btn-sm {\n  background: none;\n  border: none;\n  color: #1976d2;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0;\n  margin-left: 4px;\n  width: 20px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s;\n}\n.badge .btn-sm:hover {\n  background-color: #ef5350;\n  color: white;\n}\n.border.rounded {\n  border-color: #e0e0e0 !important;\n}\n.border.rounded.p-3 {\n  background-color: #f8f9fa;\n}\n.form-control.app-input,\n.form-select.app-select {\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control.app-input:focus,\n.form-select.app-select:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn-primary {\n  background-color: #007bff;\n  border: 1px solid #007bff;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #0056b3;\n  border-color: #004085;\n}\n.btn-primary:disabled {\n  background-color: #ccc;\n  border-color: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.btn-outline-secondary {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary:hover {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n.btn-outline-primary {\n  background: white;\n  border: 1px solid #007bff;\n  color: #007bff;\n}\n.btn-outline-primary:hover {\n  background-color: #007bff;\n  color: white;\n  border-color: #007bff;\n}\n.input-group .btn-outline-secondary {\n  border-left: none;\n}\n.form-check-input {\n  cursor: pointer;\n}\n.form-check-input:checked {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.form-check-label {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=create-poll-modal.css.map */\n"] }]
      }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], close: [{ type: Output, args: ["close"] }], pollCreated: [{ type: Output, args: ["pollCreated"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePollModal, { className: "CreatePollModal", filePath: "src/app/features/poll/create-poll-modal/create-poll-modal.ts", lineNumber: 31 });
    })();
  }
});

export {
  CreatePollModal,
  init_create_poll_modal
};
//# sourceMappingURL=chunk-TLEX6OXM.js.map
