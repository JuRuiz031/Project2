import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/calendar/edit-calendar-modal/edit-calendar-modal.ts
function EditCalendarModal_Conditional_2_Template(rf, ctx) {
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
function EditCalendarModal_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function EditCalendarModal_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "No users returned for this calendar.");
    \u0275\u0275elementEnd();
  }
}
function EditCalendarModal_Conditional_4_Conditional_10_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Admin (you) ");
  }
}
function EditCalendarModal_Conditional_4_Conditional_10_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Non-admin ");
  }
}
function EditCalendarModal_Conditional_4_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275listener("click", function EditCalendarModal_Conditional_4_Conditional_10_For_2_Template_li_click_0_listener() {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectUser(u_r4.user_id));
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275conditionalCreate(4, EditCalendarModal_Conditional_4_Conditional_10_For_2_Conditional_4_Template, 1, 0)(5, EditCalendarModal_Conditional_4_Conditional_10_For_2_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("user-row--selected", ctx_r0.selectedUserId() === u_r4.user_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.username);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-bg-primary", ctx_r0.isRequesterAdmin(u_r4.user_id))("text-bg-secondary", !ctx_r0.isRequesterAdmin(u_r4.user_id));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isRequesterAdmin(u_r4.user_id) ? 4 : 5);
  }
}
function EditCalendarModal_Conditional_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 13);
    \u0275\u0275repeaterCreate(1, EditCalendarModal_Conditional_4_Conditional_10_For_2_Template, 6, 8, "li", 19, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.users());
  }
}
function EditCalendarModal_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Calendar name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 8);
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5, "Name must be 2\u2013100 characters.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "h3", 11);
    \u0275\u0275text(8, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, EditCalendarModal_Conditional_4_Conditional_9_Template, 2, 0, "p", 12)(10, EditCalendarModal_Conditional_4_Conditional_10_Template, 3, 0, "ul", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14)(12, "button", 15);
    \u0275\u0275listener("click", function EditCalendarModal_Conditional_4_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteCalendarGroup());
    });
    \u0275\u0275text(13, " Delete calendar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 16)(15, "button", 17);
    \u0275\u0275listener("click", function EditCalendarModal_Conditional_4_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClose());
    });
    \u0275\u0275text(16, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 18);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r0.hasError("name"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.users().length === 0 ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting() || ctx_r0.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmitting() ? "Saving..." : "Save Changes", " ");
  }
}
var _forTrack0, EditCalendarModal;
var init_edit_calendar_modal = __esm({
  "src/app/features/calendar/edit-calendar-modal/edit-calendar-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_forms();
    init_operators();
    init_base_modal();
    init_calendar_service();
    init_core();
    init_forms();
    _forTrack0 = ($index, $item) => $item.user_id;
    EditCalendarModal = class _EditCalendarModal {
      fb = inject(FormBuilder);
      calendarService = inject(CalendarService);
      // Inputs/Outputs
      calendarId = input.required(...ngDevMode ? [{ debugName: "calendarId" }] : []);
      // add this alongside calendarId input
      currentUserId = input.required(...ngDevMode ? [{ debugName: "currentUserId" }] : []);
      isRequesterAdmin(userId) {
        return String(userId) === String(this.currentUserId());
      }
      close = output();
      calendarUpdated = output();
      // emits calendarId
      deleteRequested = output();
      // switch to delete-calendar modal
      // State
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
      isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
      calendarName = signal("", ...ngDevMode ? [{ debugName: "calendarName" }] : []);
      // display + form init
      users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
      selectedUserId = signal(null, ...ngDevMode ? [{ debugName: "selectedUserId" }] : []);
      // Form
      form = this.fb.group({
        name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
      });
      selectedUser = computed(() => {
        const id = this.selectedUserId();
        if (!id)
          return null;
        return this.users().find((u) => u.user_id === id) ?? null;
      }, ...ngDevMode ? [{ debugName: "selectedUser" }] : []);
      ngOnInit() {
        const id = this.calendarId();
        if (!id) {
          this.apiError.set("Missing calendar id");
          this.isLoading.set(false);
          return;
        }
        this.loadCalendarName(id);
        this.loadCalendarUsers(id);
      }
      loadCalendarName(calendarId) {
        this.calendarService.getHomepage().pipe(take(1)).subscribe({
          next: (home) => {
            const found = (home.calendars ?? []).find((c) => String(c.calendar_id) === String(calendarId));
            const name = found?.name ?? "";
            this.calendarName.set(name);
            this.form.patchValue({ name }, { emitEvent: false });
          },
          error: () => {
          }
        });
      }
      loadCalendarUsers(calendarId) {
        this.apiError.set("");
        this.isLoading.set(true);
        this.calendarService.getByCalendarIds([calendarId]).pipe(take(1)).subscribe({
          next: (res) => {
            this.isLoading.set(false);
            const rows = (res.users ?? []).filter((u) => String(u.calendar_id) === String(calendarId)).map((u) => ({
              calendar_id: String(u.calendar_id),
              user_id: String(u.user_id),
              username: String(u.username ?? "")
            })).filter((u) => u.user_id && u.username);
            this.users.set(rows);
            const cur = this.selectedUserId();
            if (cur && !rows.some((r) => r.user_id === cur)) {
              this.selectedUserId.set(null);
            }
          },
          error: (err) => {
            this.isLoading.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not load calendar users");
          }
        });
      }
      selectUser(userId) {
        this.selectedUserId.set(userId);
      }
      saveChanges() {
        this.apiError.set("");
        const id = this.calendarId();
        if (!id) {
          this.apiError.set("Missing calendar id");
          return;
        }
        if (this.form.invalid) {
          this.form.markAllAsTouched();
          return;
        }
        const name = String(this.form.getRawValue().name ?? "").trim();
        if (!name) {
          this.apiError.set("Calendar name is required.");
          return;
        }
        const dto = { name };
        this.isSubmitting.set(true);
        this.calendarService.update(id, dto).pipe(take(1)).subscribe({
          next: () => {
            this.isSubmitting.set(false);
            this.calendarUpdated.emit(id);
            this.close.emit();
          },
          error: (err) => {
            this.isSubmitting.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not save calendar changes");
          }
        });
      }
      promoteSelectedToAdmin() {
        this.apiError.set("");
        const id = this.calendarId();
        const selected = this.selectedUserId();
        if (!id) {
          this.apiError.set("Missing calendar id");
          return;
        }
        if (!selected)
          return;
        const dto = { admins: [selected] };
        this.isSubmitting.set(true);
        this.calendarService.update(id, dto).pipe(take(1)).subscribe({
          next: () => {
            this.isSubmitting.set(false);
            this.loadCalendarUsers(id);
          },
          error: (err) => {
            this.isSubmitting.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not promote user to admin");
          }
        });
      }
      deleteCalendarGroup() {
        const id = this.calendarId();
        if (id)
          this.deleteRequested.emit(id);
      }
      onClose() {
        this.close.emit();
      }
      hasError(controlName) {
        const c = this.form.get(controlName);
        return !!c && c.touched && c.invalid;
      }
      static \u0275fac = function EditCalendarModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _EditCalendarModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditCalendarModal, selectors: [["app-edit-calendar-modal"]], inputs: { calendarId: [1, "calendarId"], currentUserId: [1, "currentUserId"] }, outputs: { close: "close", calendarUpdated: "calendarUpdated", deleteRequested: "deleteRequested" }, decls: 5, vars: 4, consts: [[3, "close", "title"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "alert", "alert-danger", "mb-3"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "Calendar name", "formControlName", "name", 1, "form-control", "app-input"], [1, "invalid-feedback"], [1, "mt-4"], [1, "h5", "mb-2"], [1, "text-muted", "mb-0"], [1, "list-group"], [1, "d-flex", "justify-content-between", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "disabled"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "user-row", 3, "user-row--selected"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "user-row", 3, "click"], [1, "user-name"], [1, "badge", "rounded-pill"]], template: function EditCalendarModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-base-modal", 0);
          \u0275\u0275listener("close", function EditCalendarModal_Template_app_base_modal_close_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275elementStart(1, "form", 1);
          \u0275\u0275listener("ngSubmit", function EditCalendarModal_Template_form_ngSubmit_1_listener() {
            return ctx.saveChanges();
          });
          \u0275\u0275conditionalCreate(2, EditCalendarModal_Conditional_2_Template, 2, 1, "div", 2);
          \u0275\u0275conditionalCreate(3, EditCalendarModal_Conditional_3_Template, 4, 0, "div", 3)(4, EditCalendarModal_Conditional_4_Template, 19, 7);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("title", "Edit Calendar");
          \u0275\u0275advance();
          \u0275\u0275property("formGroup", ctx.form);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.apiError() ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.isLoading() ? 3 : 4);
        }
      }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, BaseModal], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.user-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.user-row--selected[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-color: #90caf9;\n}\n.user-row--selected[_ngcontent-%COMP%]:hover {\n  background-color: #bbdefb;\n}\n.badge[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=edit-calendar-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditCalendarModal, [{
        type: Component,
        args: [{ selector: "app-edit-calendar-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, BaseModal], template: `<app-base-modal
  [title]="'Edit Calendar'"
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
      <!-- Calendar name -->
      <div class="mb-3">
        <label class="form-label">Calendar name</label>
        <input
          type="text"
          class="form-control app-input"
          placeholder="Calendar name"
          formControlName="name"
          [class.is-invalid]="hasError('name')"
        />
        <div class="invalid-feedback">Name must be 2\u2013100 characters.</div>
      </div>

      <!-- Users -->
      <div class="mt-4">
        <h3 class="h5 mb-2">Users</h3>

        @if (users().length === 0) {
          <p class="text-muted mb-0">No users returned for this calendar.</p>
        } @else {
          <ul class="list-group">
            @for (u of users(); track u.user_id) {
              <li
                class="list-group-item d-flex justify-content-between align-items-center user-row"
                [class.user-row--selected]="selectedUserId() === u.user_id"
                (click)="selectUser(u.user_id)"
              >
                <span class="user-name">{{ u.username }}</span>

                <span
                  class="badge rounded-pill"
                  [class.text-bg-primary]="isRequesterAdmin(u.user_id)"
                  [class.text-bg-secondary]="!isRequesterAdmin(u.user_id)"
                >
                  @if (isRequesterAdmin(u.user_id)) {
                    Admin (you)
                  } @else {
                    Non-admin
                  }
                </span>
              </li>
            }
          </ul>

          <!-- <div class="mt-3">
            <button
              type="button"
              class="btn btn-outline-primary"
              (click)="promoteSelectedToAdmin()"
              [disabled]="!selectedUserId() || isSubmitting()"
            >
              Promote selected to admin
            </button>
          </div> -->
        }
      </div>

      <!-- Action buttons -->
      <div class="d-flex justify-content-between gap-2 mt-4">
        <button
          type="button"
          class="btn btn-outline-danger"
          (click)="deleteCalendarGroup()"
          [disabled]="isSubmitting()"
        >
          Delete calendar
        </button>

        <div class="d-flex gap-2">
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
            {{ isSubmitting() ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </div>
    }
  </form>

</app-base-modal>
`, styles: ["/* src/app/features/calendar/edit-calendar-modal/edit-calendar-modal.css */\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.user-row {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.user-row--selected {\n  background-color: #e3f2fd;\n  border-color: #90caf9;\n}\n.user-row--selected:hover {\n  background-color: #bbdefb;\n}\n.badge {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=edit-calendar-modal.css.map */\n"] }]
      }], null, { calendarId: [{ type: Input, args: [{ isSignal: true, alias: "calendarId", required: true }] }], currentUserId: [{ type: Input, args: [{ isSignal: true, alias: "currentUserId", required: true }] }], close: [{ type: Output, args: ["close"] }], calendarUpdated: [{ type: Output, args: ["calendarUpdated"] }], deleteRequested: [{ type: Output, args: ["deleteRequested"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditCalendarModal, { className: "EditCalendarModal", filePath: "src/app/features/calendar/edit-calendar-modal/edit-calendar-modal.ts", lineNumber: 27 });
    })();
  }
});

export {
  EditCalendarModal,
  init_edit_calendar_modal
};
//# sourceMappingURL=chunk-UZFNZ4BC.js.map
