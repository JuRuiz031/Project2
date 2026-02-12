import {
  PollService,
  init_poll_service
} from "./chunk-QKB7UDAX.js";
import {
  CheckboxControlValueAccessor,
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

// src/app/features/poll/edit-poll-modal/edit-poll-modal.ts
function EditPollModal_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, " Loading... ");
    \u0275\u0275elementEnd();
  }
}
function EditPollModal_Conditional_2_Template(rf, ctx) {
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
function EditPollModal_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
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
function EditPollModal_Conditional_58_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function EditPollModal_Conditional_58_For_2_Template_button_click_0_listener() {
      const \u0275$index_109_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectOption(\u0275$index_109_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const optCtrl_r5 = ctx.$implicit;
    const \u0275$index_109_r4 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.selectedOptionIndex() === \u0275$index_109_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", optCtrl_r5.value, " ");
  }
}
function EditPollModal_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, EditPollModal_Conditional_58_For_2_Template, 2, 3, "button", 42, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.options.controls);
  }
}
function EditPollModal_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, " No options yet ");
    \u0275\u0275elementEnd();
  }
}
function EditPollModal_Conditional_74_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 45);
    \u0275\u0275listener("click", function EditPollModal_Conditional_74_For_2_Template_button_click_2_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeTag($index_r7));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tagCtrl_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tagCtrl_r8.value, " ");
  }
}
function EditPollModal_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275repeaterCreate(1, EditPollModal_Conditional_74_For_2_Template, 4, 1, "span", 44, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.tags.controls);
  }
}
var _c0, _c1, _forTrack0, EditPollModal;
var init_edit_poll_modal = __esm({
  "src/app/features/poll/edit-poll-modal/edit-poll-modal.ts"() {
    "use strict";
    init_core();
    init_common();
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
    EditPollModal = class _EditPollModal {
      fb = inject(FormBuilder);
      calendarService = inject(CalendarService);
      pollService = inject(PollService);
      title = input("Edit Poll", ...ngDevMode ? [{ debugName: "title" }] : []);
      pollId = input("", ...ngDevMode ? [{ debugName: "pollId" }] : []);
      // ✅ passed from parent
      close = output();
      saved = output();
      // emits poll_id after save
      deleted = output();
      // emits poll_id if you wire deletion later
      calendars = signal([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      adminCalendars = computed(() => this.calendars().filter((c) => c.isAdmin), ...ngDevMode ? [{ debugName: "adminCalendars" }] : []);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
      isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
      isLoadingCalendars = signal(false, ...ngDevMode ? [{ debugName: "isLoadingCalendars" }] : []);
      tagInput = "";
      optionInput = "";
      selectedOptionIndex = signal(null, ...ngDevMode ? [{ debugName: "selectedOptionIndex" }] : []);
      // ✅ keeps option_id aligned with each FormArray index
      optionsMeta = signal([], ...ngDevMode ? [{ debugName: "optionsMeta" }] : []);
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
        options: this.fb.array([])
      });
      ngOnInit() {
        const id = (this.pollId() || "").trim();
        if (!id) {
          this.apiError.set("Missing poll id");
          return;
        }
        this.loadCalendars();
        this.loadPoll(id);
      }
      // ---- getters ----
      get tags() {
        return this.form.get("tags");
      }
      get options() {
        return this.form.get("options");
      }
      // ----------------------------
      // Calendars
      // ----------------------------
      loadCalendars() {
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
            const current = this.form.get("calendarId")?.value;
            if (!current) {
              const firstAdmin = mapped.find((c) => c.isAdmin);
              const firstAny = mapped[0];
              const selected = firstAdmin ?? firstAny;
              if (selected) {
                this.form.patchValue({ calendarId: selected.id }, { emitEvent: false });
              }
            }
          },
          error: (err) => {
            this.isLoadingCalendars.set(false);
            console.warn("Could not load calendars", err);
          }
        });
      }
      // ----------------------------
      // Load Poll
      // ----------------------------
      loadPoll(pollId) {
        this.apiError.set("");
        this.isLoading.set(true);
        this.calendarService.getByPollIds([pollId]).subscribe({
          next: (res) => {
            this.isLoading.set(false);
            const poll = res.polls?.[0];
            if (!poll) {
              this.apiError.set("Poll not found");
              return;
            }
            this.patchFormFromPoll(poll);
          },
          error: (err) => {
            this.isLoading.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not load poll");
          }
        });
      }
      patchFormFromPoll(poll) {
        const start = this.isoToDateTime(poll.start_time);
        const end = this.isoToDateTime(poll.end_time);
        this.form.patchValue({
          calendarId: poll.calendar_id ?? "",
          title: poll.title ?? "",
          description: poll.description ?? "",
          notes: poll.notes ?? "",
          startDate: start.date,
          startTime: start.time,
          endDate: end.date,
          endTime: end.time,
          results_visible: !!poll.results_visible,
          allow_multiple_votes: !!poll.allow_multiple_votes
        }, { emitEvent: false });
        this.tags.clear();
        (poll.tags ?? []).forEach((t) => this.tags.push(this.fb.control(t, [Validators.required, Validators.maxLength(30)])));
        this.options.clear();
        const meta = (poll.options ?? []).map((opt) => ({
          option_id: opt.option_id,
          description: opt.description ?? ""
        }));
        meta.forEach((m) => this.options.push(this.fb.control(m.description, [Validators.required, Validators.minLength(1), Validators.maxLength(80)])));
        while (this.options.length < 2) {
          meta.push({ option_id: void 0, description: "" });
          this.options.push(this.fb.control("", [Validators.required, Validators.minLength(1), Validators.maxLength(80)]));
        }
        this.optionsMeta.set(meta);
      }
      // ----------------------------
      // Time helpers
      // ----------------------------
      parseServerInstant(iso) {
        const hasTz = /([zZ]|[+\-]\d{2}:\d{2})$/.test(iso);
        return new Date(hasTz ? iso : `${iso}Z`);
      }
      isoToDateTime(iso) {
        if (!iso)
          return { date: "", time: "" };
        const d = this.parseServerInstant(iso);
        if (isNaN(d.getTime()))
          return { date: "", time: "" };
        const pad = (n) => String(n).padStart(2, "0");
        return {
          date: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
          time: `${pad(d.getHours())}:${pad(d.getMinutes())}`
        };
      }
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
      // ----------------------------
      // Selection
      // ----------------------------
      selectOption(i) {
        this.selectedOptionIndex.set(i);
      }
      // ----------------------------
      // Tags
      // ----------------------------
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
      removeTag(i) {
        this.tags.removeAt(i);
      }
      // ----------------------------
      // Options (keep meta in sync!)
      // ----------------------------
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
        const meta = [...this.optionsMeta()];
        meta.push({ option_id: void 0, description: value });
        this.optionsMeta.set(meta);
        this.optionInput = "";
        this.selectedOptionIndex.set(null);
      }
      deleteSelectedOption() {
        const idx = this.selectedOptionIndex();
        if (idx === null)
          return;
        if (this.options.length <= 2) {
          this.apiError.set("A poll must have at least 2 options.");
          return;
        }
        this.options.removeAt(idx);
        const meta = [...this.optionsMeta()];
        meta.splice(idx, 1);
        this.optionsMeta.set(meta);
        this.selectedOptionIndex.set(null);
      }
      // ----------------------------
      // Save
      // ----------------------------
      confirmEdit() {
        this.apiError.set("");
        const pollId = (this.pollId() || "").trim();
        if (!pollId) {
          this.apiError.set("Missing poll id");
          return;
        }
        if (this.form.invalid) {
          this.form.markAllAsTouched();
          this.apiError.set("Please fix validation errors.");
          return;
        }
        if (this.options.length < 2) {
          this.apiError.set("A poll must have at least 2 options.");
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
        const descriptions = (v.options ?? []).map((o) => (o ?? "").trim()).filter((o) => o.length > 0);
        if (descriptions.length < 2) {
          this.apiError.set("A poll must have at least 2 options.");
          return;
        }
        const meta = this.optionsMeta();
        const options = descriptions.map((desc, i) => ({
          option_id: meta[i]?.option_id,
          description: desc
        }));
        const userId = this.getUserIdFromStorage();
        if (!userId) {
          this.apiError.set("Not logged in (missing user id). Please sign in again.");
          return;
        }
        const dto = {
          user_id: String(userId),
          calendar_id: String(v.calendarId),
          title: String(v.title),
          description: String(v.description ?? "").trim() || void 0,
          notes: String(v.notes ?? "").trim() || void 0,
          start_time: start.toISOString(),
          end_time: end.toISOString(),
          results_visible: Boolean(v.results_visible),
          allow_multiple_votes: Boolean(v.allow_multiple_votes),
          options,
          tags
        };
        this.isSubmitting.set(true);
        this.pollService.update(pollId, dto).subscribe({
          next: () => {
            this.isSubmitting.set(false);
            this.saved.emit(pollId);
            this.close.emit();
          },
          error: (err) => {
            this.isSubmitting.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not update poll");
          }
        });
      }
      onDelete() {
        const id = (this.pollId() || "").trim();
        if (id)
          this.deleted.emit(id);
      }
      onClose() {
        this.close.emit();
      }
      hasError(name) {
        const c = this.form.get(name);
        return !!c && c.touched && c.invalid;
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
      static \u0275fac = function EditPollModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _EditPollModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPollModal, selectors: [["app-edit-poll-modal"]], inputs: { title: [1, "title"], pollId: [1, "pollId"] }, outputs: { close: "close", saved: "saved", deleted: "deleted" }, decls: 82, vars: 40, consts: [[3, "close", "title", "showBackButton", "size"], [1, "text-secondary", "mb-3"], [1, "alert", "alert-danger", "mb-3"], ["novalidate", "", 3, "formGroup"], [1, "row", "g-3"], [1, "col-12", "col-lg-7"], [1, "mb-3"], [1, "form-label"], ["formControlName", "calendarId", 1, "form-select", "app-select", 3, "ngClass"], ["value", "", "disabled", ""], [3, "value"], [1, "invalid-feedback"], ["type", "text", "placeholder", "Poll title", "formControlName", "title", 1, "form-control", "app-input", 3, "ngClass"], ["rows", "3", "placeholder", "Optional description", "formControlName", "description", 1, "form-control", "app-input", 3, "ngClass"], [1, "row", "g-3", "mb-3"], [1, "col-12", "col-md-6"], ["type", "date", "formControlName", "startDate", 1, "form-control", "app-input", 3, "ngClass"], ["type", "time", "formControlName", "startTime", 1, "form-control", "app-input", 3, "ngClass"], ["type", "date", "formControlName", "endDate", 1, "form-control", "app-input", 3, "ngClass"], ["type", "time", "formControlName", "endTime", 1, "form-control", "app-input", 3, "ngClass"], [1, "border", "rounded", "p-3", "mb-3"], [1, "fw-semibold", "mb-2"], [1, "form-check"], ["type", "checkbox", "id", "allowMultipleVotesEdit", "formControlName", "allow_multiple_votes", 1, "form-check-input"], ["for", "allowMultipleVotesEdit", 1, "form-check-label"], [1, "form-text", "text-secondary"], [1, "border", "rounded", "p-3"], [1, "list-group", "mb-3"], [1, "text-secondary", "text-center", "py-3", "mb-3"], [1, "input-group", "mb-2"], ["type", "text", "placeholder", "Add an option...", 1, "form-control", "app-input", 3, "ngModelChange", "keydown.enter", "ngModel", "ngModelOptions"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", "w-100", 3, "click", "disabled"], [1, "col-12", "col-lg-5"], [1, "tag-input-container"], ["type", "text", "placeholder", "Add a tag...", 1, "form-control", "app-input", 3, "ngModelChange", "keydown.enter", "ngModel", "ngModelOptions"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "mt-2", "w-100", 3, "click"], [1, "tags-list"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "active"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "tag-chip-editable"], ["type", "button", "title", "Remove tag", 1, "tag-remove", 3, "click"]], template: function EditPollModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-base-modal", 0);
          \u0275\u0275listener("close", function EditPollModal_Template_app_base_modal_close_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275conditionalCreate(1, EditPollModal_Conditional_1_Template, 2, 0, "div", 1);
          \u0275\u0275conditionalCreate(2, EditPollModal_Conditional_2_Template, 2, 1, "div", 2);
          \u0275\u0275elementStart(3, "form", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "label", 7);
          \u0275\u0275text(8, "Calendar (admin only)");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "select", 8)(10, "option", 9);
          \u0275\u0275text(11, "Select calendar (admin only)");
          \u0275\u0275elementEnd();
          \u0275\u0275repeaterCreate(12, EditPollModal_For_13_Template, 2, 2, "option", 10, _forTrack0);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(14, "div", 11);
          \u0275\u0275text(15, "Select an admin calendar.");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(16, "div", 6)(17, "label", 7);
          \u0275\u0275text(18, "Poll Title");
          \u0275\u0275elementEnd();
          \u0275\u0275element(19, "input", 12);
          \u0275\u0275elementStart(20, "div", 11);
          \u0275\u0275text(21, "Title required (min 2 chars).");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(22, "div", 6)(23, "label", 7);
          \u0275\u0275text(24, "Description (optional)");
          \u0275\u0275elementEnd();
          \u0275\u0275element(25, "textarea", 13);
          \u0275\u0275elementStart(26, "div", 11);
          \u0275\u0275text(27, "Description too long.");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(28, "div", 14)(29, "div", 15)(30, "label", 7);
          \u0275\u0275text(31, "Start date");
          \u0275\u0275elementEnd();
          \u0275\u0275element(32, "input", 16);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(33, "div", 15)(34, "label", 7);
          \u0275\u0275text(35, "Start time");
          \u0275\u0275elementEnd();
          \u0275\u0275element(36, "input", 17);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(37, "div", 14)(38, "div", 15)(39, "label", 7);
          \u0275\u0275text(40, "End date");
          \u0275\u0275elementEnd();
          \u0275\u0275element(41, "input", 18);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(42, "div", 15)(43, "label", 7);
          \u0275\u0275text(44, "End time");
          \u0275\u0275elementEnd();
          \u0275\u0275element(45, "input", 19);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(46, "div", 20)(47, "div", 21);
          \u0275\u0275text(48, "Voting");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(49, "div", 22);
          \u0275\u0275element(50, "input", 23);
          \u0275\u0275elementStart(51, "label", 24);
          \u0275\u0275text(52, " Allow multiple votes (choose more than one option) ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(53, "div", 25);
          \u0275\u0275text(54, " If unchecked, users can vote for only one option. ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(55, "div", 26)(56, "div", 21);
          \u0275\u0275text(57, "Options");
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(58, EditPollModal_Conditional_58_Template, 3, 0, "div", 27)(59, EditPollModal_Conditional_59_Template, 2, 0, "div", 28);
          \u0275\u0275elementStart(60, "div", 29)(61, "input", 30);
          \u0275\u0275twoWayListener("ngModelChange", function EditPollModal_Template_input_ngModelChange_61_listener($event) {
            \u0275\u0275twoWayBindingSet(ctx.optionInput, $event) || (ctx.optionInput = $event);
            return $event;
          });
          \u0275\u0275listener("keydown.enter", function EditPollModal_Template_input_keydown_enter_61_listener() {
            return ctx.addOption();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(62, "button", 31);
          \u0275\u0275listener("click", function EditPollModal_Template_button_click_62_listener() {
            return ctx.addOption();
          });
          \u0275\u0275text(63, " Add ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(64, "button", 32);
          \u0275\u0275listener("click", function EditPollModal_Template_button_click_64_listener() {
            return ctx.deleteSelectedOption();
          });
          \u0275\u0275text(65, " Delete Selected Option ");
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(66, "div", 33)(67, "div", 6)(68, "label", 7);
          \u0275\u0275text(69, "Tags");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(70, "div", 34)(71, "input", 35);
          \u0275\u0275twoWayListener("ngModelChange", function EditPollModal_Template_input_ngModelChange_71_listener($event) {
            \u0275\u0275twoWayBindingSet(ctx.tagInput, $event) || (ctx.tagInput = $event);
            return $event;
          });
          \u0275\u0275listener("keydown.enter", function EditPollModal_Template_input_keydown_enter_71_listener() {
            return ctx.addTag();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(72, "button", 36);
          \u0275\u0275listener("click", function EditPollModal_Template_button_click_72_listener() {
            return ctx.addTag();
          });
          \u0275\u0275text(73, " Add ");
          \u0275\u0275elementEnd()();
          \u0275\u0275conditionalCreate(74, EditPollModal_Conditional_74_Template, 3, 0, "div", 37);
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(75, "div", 38)(76, "button", 39);
          \u0275\u0275listener("click", function EditPollModal_Template_button_click_76_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(77, " Cancel ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(78, "button", 40);
          \u0275\u0275listener("click", function EditPollModal_Template_button_click_78_listener() {
            return ctx.confirmEdit();
          });
          \u0275\u0275text(79);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(80, "button", 41);
          \u0275\u0275listener("click", function EditPollModal_Template_button_click_80_listener() {
            return ctx.onDelete();
          });
          \u0275\u0275text(81, " Delete Poll ");
          \u0275\u0275elementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275property("title", ctx.title())("showBackButton", false)("size", "large");
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.isLoading() ? 1 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.apiError() ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("formGroup", ctx.form);
          \u0275\u0275advance(6);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c0, ctx.hasError("calendarId")));
          \u0275\u0275advance(3);
          \u0275\u0275repeater(ctx.adminCalendars());
          \u0275\u0275advance(7);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c0, ctx.hasError("title")));
          \u0275\u0275advance(6);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(28, _c0, ctx.hasError("description")));
          \u0275\u0275advance(7);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c0, ctx.hasError("startDate")));
          \u0275\u0275advance(4);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c0, ctx.hasError("startTime")));
          \u0275\u0275advance(5);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c0, ctx.hasError("endDate")));
          \u0275\u0275advance(4);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(36, _c0, ctx.hasError("endTime")));
          \u0275\u0275advance(13);
          \u0275\u0275conditional(ctx.options.controls.length > 0 ? 58 : 59);
          \u0275\u0275advance(3);
          \u0275\u0275twoWayProperty("ngModel", ctx.optionInput);
          \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(38, _c1));
          \u0275\u0275advance(3);
          \u0275\u0275property("disabled", ctx.selectedOptionIndex() === null);
          \u0275\u0275advance(7);
          \u0275\u0275twoWayProperty("ngModel", ctx.tagInput);
          \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(39, _c1));
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.tags.controls.length > 0 ? 74 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", ctx.isSubmitting());
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", ctx.isSubmitting() || ctx.isLoading());
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? "Saving\u2026" : "Save Changes", " ");
          \u0275\u0275advance();
          \u0275\u0275property("disabled", ctx.isSubmitting() || ctx.isLoading());
        }
      }, dependencies: [CommonModule, NgClass, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, BaseModal], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n.tag-chip-editable[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px 4px 12px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background-color 0.2s;\n}\n.tag-chip-editable[_ngcontent-%COMP%]:hover {\n  background-color: #bbdefb;\n}\n.tag-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #1976d2;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s;\n}\n.tag-remove[_ngcontent-%COMP%]:hover {\n  background-color: #ef5350;\n  color: white;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid #e0e0e0;\n  color: #333;\n  padding: 10px 15px;\n  transition: all 0.2s;\n}\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.list-group-item.active[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.list-group-item.active[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n  border-color: #0056b3;\n}\n.border.rounded[_ngcontent-%COMP%], \n.border.border-secondary.rounded[_ngcontent-%COMP%] {\n  border-color: #e0e0e0 !important;\n}\n.border.border-secondary.rounded.p-3[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-color: #e0e0e0 !important;\n}\n.form-control.app-input[_ngcontent-%COMP%], \n.form-select.app-select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control.app-input[_ngcontent-%COMP%]:focus, \n.form-select.app-select[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border: 1px solid #007bff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n  border-color: #004085;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  border-color: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #007bff;\n  color: #007bff;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #007bff;\n  color: white;\n  border-color: #007bff;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dc3545;\n  color: #dc3545;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #dc3545;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  border: 1px solid #dc3545;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.input-group[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=edit-poll-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditPollModal, [{
        type: Component,
        args: [{ selector: "app-edit-poll-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, BaseModal], template: `<app-base-modal
  [title]="title()"
  [showBackButton]="false"
  [size]="'large'"
  (close)="onClose()"
>
  <!-- Loading -->
  @if (isLoading()) {
    <div class="text-secondary mb-3">
      Loading...
    </div>
  }

  <!-- API error -->
  @if (apiError()) {
    <div class="alert alert-danger mb-3">
      {{ apiError() }}
    </div>
  }

  <form [formGroup]="form" novalidate>
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
            placeholder="Optional description"
            formControlName="description"
            [ngClass]="{ 'is-invalid': hasError('description') }"
          ></textarea>
          <div class="invalid-feedback">Description too long.</div>
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
              id="allowMultipleVotesEdit"
              formControlName="allow_multiple_votes"
            />
            <label class="form-check-label" for="allowMultipleVotesEdit">
              Allow multiple votes (choose more than one option)
            </label>
          </div>

          <div class="form-text text-secondary">
            If unchecked, users can vote for only one option.
          </div>
        </div>


        <!-- OPTIONS MENU -->
        <div class="border rounded p-3">
          <div class="fw-semibold mb-2">Options</div>

          @if (options.controls.length > 0) {
            <div class="list-group mb-3">
              @for (optCtrl of options.controls; track $index; let i = $index) {
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  (click)="selectOption(i)"
                  [class.active]="selectedOptionIndex() === i"
                >
                  {{ optCtrl.value }}
                </button>
              }
            </div>
          } @else {
            <div class="text-secondary text-center py-3 mb-3">
              No options yet
            </div>
          }

          <div class="input-group mb-2">
            <input
              class="form-control app-input"
              type="text"
              placeholder="Add an option..."
              [(ngModel)]="optionInput"
              [ngModelOptions]="{ standalone: true }"
              (keydown.enter)="addOption()"
            />
            <button class="btn btn-outline-primary" type="button" (click)="addOption()">
              Add
            </button>
          </div>

          <button
            class="btn btn-outline-danger w-100"
            type="button"
            (click)="deleteSelectedOption()"
            [disabled]="selectedOptionIndex() === null"
          >
            Delete Selected Option
          </button>
        </div>
      </div>

      <!-- RIGHT COLUMN -->
      <div class="col-12 col-lg-5">
        <!-- TAGS -->
        <div class="mb-3">
          <label class="form-label">Tags</label>
          <div class="tag-input-container">
            <input
              class="form-control app-input"
              type="text"
              placeholder="Add a tag..."
              [(ngModel)]="tagInput"
              [ngModelOptions]="{ standalone: true }"
              (keydown.enter)="addTag()"
            />
            <button class="btn btn-sm btn-outline-primary mt-2 w-100" type="button" (click)="addTag()">
              Add
            </button>
          </div>
          @if (tags.controls.length > 0) {
            <div class="tags-list">
              @for (tagCtrl of tags.controls; track $index) {
                <span class="tag-chip-editable">
                  {{ tagCtrl.value }}
                  <button type="button" class="tag-remove" (click)="removeTag($index)" title="Remove tag">\xD7</button>
                </span>
              }
            </div>
          }
        </div>
      </div>
    </div>

    <!-- MODAL FOOTER -->
    <div class="d-flex justify-content-end gap-2 mt-4">
      <button class="btn btn-outline-secondary" type="button" (click)="onClose()" [disabled]="isSubmitting()">
        Cancel
      </button>

      <button
        type="button"
        class="btn btn-primary"
        (click)="confirmEdit()"
        [disabled]="isSubmitting() || isLoading()"
      >
        {{ isSubmitting() ? 'Saving\u2026' : 'Save Changes' }}
      </button>

      <button class="btn btn-danger" type="button" (click)="onDelete()" [disabled]="isSubmitting() || isLoading()">
        Delete Poll
      </button>
    </div>
  </form>
</app-base-modal>
`, styles: ["/* src/app/features/poll/edit-poll-modal/edit-poll-modal.css */\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.tags-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n.tag-chip-editable {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px 4px 12px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background-color 0.2s;\n}\n.tag-chip-editable:hover {\n  background-color: #bbdefb;\n}\n.tag-remove {\n  background: none;\n  border: none;\n  color: #1976d2;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s, color 0.2s;\n}\n.tag-remove:hover {\n  background-color: #ef5350;\n  color: white;\n}\n.list-group-item {\n  background-color: transparent;\n  border: 1px solid #e0e0e0;\n  color: #333;\n  padding: 10px 15px;\n  transition: all 0.2s;\n}\n.list-group-item:hover {\n  background-color: #f8f9fa;\n}\n.list-group-item.active {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.list-group-item.active:hover {\n  background-color: #0056b3;\n  border-color: #0056b3;\n}\n.border.rounded,\n.border.border-secondary.rounded {\n  border-color: #e0e0e0 !important;\n}\n.border.border-secondary.rounded.p-3 {\n  background-color: #f8f9fa;\n  border-color: #e0e0e0 !important;\n}\n.form-control.app-input,\n.form-select.app-select {\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control.app-input:focus,\n.form-select.app-select:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn-primary {\n  background-color: #007bff;\n  border: 1px solid #007bff;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #0056b3;\n  border-color: #004085;\n}\n.btn-primary:disabled {\n  background-color: #ccc;\n  border-color: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.btn-outline-secondary {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary:hover:not(:disabled) {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n.btn-outline-primary {\n  background: white;\n  border: 1px solid #007bff;\n  color: #007bff;\n}\n.btn-outline-primary:hover {\n  background-color: #007bff;\n  color: white;\n  border-color: #007bff;\n}\n.btn-outline-danger {\n  background: white;\n  border: 1px solid #dc3545;\n  color: #dc3545;\n}\n.btn-outline-danger:hover:not(:disabled) {\n  background-color: #dc3545;\n  color: white;\n}\n.btn-danger {\n  background-color: #dc3545;\n  border: 1px solid #dc3545;\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.input-group .btn-outline-secondary {\n  border-left: none;\n}\n.form-check-input {\n  cursor: pointer;\n}\n.form-check-input:checked {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.form-check-label {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=edit-poll-modal.css.map */\n"] }]
      }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], pollId: [{ type: Input, args: [{ isSignal: true, alias: "pollId", required: false }] }], close: [{ type: Output, args: ["close"] }], saved: [{ type: Output, args: ["saved"] }], deleted: [{ type: Output, args: ["deleted"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPollModal, { className: "EditPollModal", filePath: "src/app/features/poll/edit-poll-modal/edit-poll-modal.ts", lineNumber: 34 });
    })();
  }
});

export {
  EditPollModal,
  init_edit_poll_modal
};
//# sourceMappingURL=chunk-JUTM37J5.js.map
