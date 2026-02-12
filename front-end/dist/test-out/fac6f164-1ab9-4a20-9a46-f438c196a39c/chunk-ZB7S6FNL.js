import {
  getCalendarColor,
  init_calendar_colors
} from "./chunk-RBWGVD5O.js";
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
  catchError,
  computed,
  effect,
  init_core,
  init_esm,
  init_operators,
  inject,
  input,
  map,
  of,
  output,
  setClassMetadata,
  signal,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/calendar/view-calendar-modal/view-calendar-modal.ts
function ViewCalendarModal_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function ViewCalendarModal_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function ViewCalendarModal_Conditional_19_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function ViewCalendarModal_Conditional_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275domElementEnd()()();
  }
}
function ViewCalendarModal_Conditional_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 27);
    \u0275\u0275text(1, "No users returned for this calendar.");
    \u0275\u0275domElementEnd();
  }
}
function ViewCalendarModal_Conditional_19_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 31)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const u_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r1.username);
  }
}
function ViewCalendarModal_Conditional_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 28);
    \u0275\u0275repeaterCreate(1, ViewCalendarModal_Conditional_19_Conditional_10_For_2_Template, 3, 1, "li", 31, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.users());
  }
}
function ViewCalendarModal_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21)(1, "label", 22);
    \u0275\u0275text(2, "Calendar Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(3, "input", 23);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 24)(5, "h3", 25);
    \u0275\u0275text(6, "Users");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, ViewCalendarModal_Conditional_19_Conditional_7_Template, 2, 1, "div", 14);
    \u0275\u0275conditionalCreate(8, ViewCalendarModal_Conditional_19_Conditional_8_Template, 4, 0, "div", 26)(9, ViewCalendarModal_Conditional_19_Conditional_9_Template, 2, 0, "p", 27)(10, ViewCalendarModal_Conditional_19_Conditional_10_Template, 3, 0, "ul", 28);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const cal_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("border-color", ctx_r1.getColor(cal_r3.id).primary)("color", ctx_r1.getColor(cal_r3.id).primary)("background-color", ctx_r1.getColor(cal_r3.id).secondary);
    \u0275\u0275domProperty("value", cal_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.usersError()) ? 7 : -1, tmp_6_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoadingUsers() ? 8 : ctx_r1.users().length === 0 ? 9 : 10);
  }
}
function ViewCalendarModal_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 33);
    \u0275\u0275domListener("click", function ViewCalendarModal_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditCalendar());
    });
    \u0275\u0275text(1, "Edit Calendar");
    \u0275\u0275domElementEnd();
  }
}
function ViewCalendarModal_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "button", 19);
    \u0275\u0275text(1, " Edit Calendar ");
    \u0275\u0275domElementEnd();
  }
}
function ViewCalendarModal_Conditional_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 39);
    \u0275\u0275domElement(1, "div", 41);
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, "Generating invite link...");
    \u0275\u0275domElementEnd()();
  }
}
function ViewCalendarModal_Conditional_25_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "p", 42);
    \u0275\u0275text(1, " Share this link to invite others to view this calendar: ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 43)(3, "input", 44);
    \u0275\u0275domListener("click", function ViewCalendarModal_Conditional_25_Conditional_9_Template_input_click_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.target.select());
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 45);
    \u0275\u0275domListener("click", function ViewCalendarModal_Conditional_25_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyShareLink());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(5, "svg", 6);
    \u0275\u0275domElement(6, "rect", 46)(7, "path", 47);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(9, "p", 48);
    \u0275\u0275text(10, "This link will expire in 7 days.");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("value", ctx_r1.shareLink());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.copySuccess() ? "Copied!" : "Copy", " ");
  }
}
function ViewCalendarModal_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 34);
    \u0275\u0275domListener("click", function ViewCalendarModal_Conditional_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSharePopup());
    });
    \u0275\u0275domElementStart(1, "div", 35);
    \u0275\u0275domListener("click", function ViewCalendarModal_Conditional_25_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElementStart(2, "div", 36)(3, "h3");
    \u0275\u0275text(4, "Share Calendar");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 37);
    \u0275\u0275domListener("click", function ViewCalendarModal_Conditional_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSharePopup());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 38);
    \u0275\u0275conditionalCreate(8, ViewCalendarModal_Conditional_25_Conditional_8_Template, 4, 0, "div", 39)(9, ViewCalendarModal_Conditional_25_Conditional_9_Template, 11, 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 40)(11, "button", 17);
    \u0275\u0275domListener("click", function ViewCalendarModal_Conditional_25_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSharePopup());
    });
    \u0275\u0275text(12, "Close");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.isGeneratingLink() ? 8 : ctx_r1.shareLink() ? 9 : -1);
  }
}
var _forTrack0, ViewCalendarModal;
var init_view_calendar_modal = __esm({
  "src/app/features/calendar/view-calendar-modal/view-calendar-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_operators();
    init_esm();
    init_calendar_service();
    init_calendar_colors();
    init_core();
    _forTrack0 = ($index, $item) => $item.user_id;
    ViewCalendarModal = class _ViewCalendarModal {
      calendarService = inject(CalendarService);
      calendarId = input(null, ...ngDevMode ? [{ debugName: "calendarId" }] : []);
      back = output();
      close = output();
      // Used by parent to open edit-calendar-modal
      editCalendar = output();
      // State
      calendars = signal([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      toast = signal("", ...ngDevMode ? [{ debugName: "toast" }] : []);
      inviteLink = signal("", ...ngDevMode ? [{ debugName: "inviteLink" }] : []);
      // Users (list only – no admin/user tags)
      users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
      usersError = signal("", ...ngDevMode ? [{ debugName: "usersError" }] : []);
      isLoadingUsers = signal(false, ...ngDevMode ? [{ debugName: "isLoadingUsers" }] : []);
      // Share popup state (matches ViewEventModal pattern)
      showSharePopup = signal(false, ...ngDevMode ? [{ debugName: "showSharePopup" }] : []);
      shareLink = signal("", ...ngDevMode ? [{ debugName: "shareLink" }] : []);
      isGeneratingLink = signal(false, ...ngDevMode ? [{ debugName: "isGeneratingLink" }] : []);
      copySuccess = signal(false, ...ngDevMode ? [{ debugName: "copySuccess" }] : []);
      // Current calendar
      currentCalendar = computed(() => {
        const id = this.calendarId();
        if (!id)
          return null;
        return this.calendars().find((c) => c.id === id) ?? null;
      }, ...ngDevMode ? [{ debugName: "currentCalendar" }] : []);
      isAdmin = computed(() => !!this.currentCalendar()?.isAdmin, ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
      constructor() {
        document.body.style.overflow = "hidden";
        effect(() => {
          const id = this.calendarId();
          if (!id)
            return;
          this.apiError.set("");
          this.toast.set("");
          this.inviteLink.set("");
          this.users.set([]);
          this.usersError.set("");
          this.isLoadingUsers.set(false);
          this.showSharePopup.set(false);
          this.shareLink.set("");
          this.isGeneratingLink.set(false);
          this.copySuccess.set(false);
          this.loadCalendars();
          this.loadCalendarUsers(id);
        });
      }
      ngOnDestroy() {
        document.body.style.overflow = "";
      }
      loadCalendars() {
        this.calendarService.getHomepage().pipe(map((home) => this.mapCalendars(home?.calendars ?? [])), tap((calendars) => console.log("[ViewCalendarModal] Calendars loaded:", calendars)), catchError((err) => {
          console.error("[ViewCalendarModal] Failed to load calendars:", err);
          this.apiError.set("Could not load calendars");
          return of([]);
        })).subscribe((calendars) => {
          this.calendars.set(calendars);
          const id = this.calendarId();
          if (id && !calendars.some((c) => c.id === id)) {
            this.apiError.set("Calendar not found");
          }
        });
      }
      loadCalendarUsers(calendarId) {
        this.usersError.set("");
        this.isLoadingUsers.set(true);
        this.calendarService.getByCalendarIds([calendarId]).pipe(map((res) => {
          const rows = (res.users ?? []).filter((u) => String(u.calendar_id) === String(calendarId)).map((u) => ({
            calendar_id: String(u.calendar_id),
            user_id: String(u.user_id),
            username: String(u.username ?? "")
          })).filter((u) => u.user_id && u.username);
          return rows;
        }), catchError((err) => {
          console.error("[ViewCalendarModal] Failed to load calendar users:", err);
          this.usersError.set("Could not load calendar users");
          return of([]);
        })).subscribe((rows) => {
          this.isLoadingUsers.set(false);
          this.users.set(rows);
        });
      }
      mapCalendars(rawCalendars) {
        return rawCalendars.map((c) => ({
          id: String(c.calendar_id ?? c.id ?? c.calendarId ?? c._id ?? ""),
          name: String(c.name ?? c.title ?? c.calendar_name ?? "Untitled"),
          isAdmin: c.isAdmin ?? c.is_admin ?? false
        })).filter((c) => c.id);
      }
      onEditCalendar() {
        this.clearToast();
        const id = this.calendarId();
        if (!id)
          return;
        if (!this.isAdmin()) {
          this.showNotAdmin();
          return;
        }
        this.editCalendar.emit(id);
      }
      // Share button flow (instead of "Generate Invite Link" button)
      onShare() {
        this.clearToast();
        const id = this.calendarId();
        if (!id || !this.isAdmin()) {
          this.showNotAdmin();
          return;
        }
        this.showSharePopup.set(true);
        this.isGeneratingLink.set(true);
        this.shareLink.set("");
        this.copySuccess.set(false);
        const token = Math.random().toString(36).slice(2, 10);
        const link = `https://yourapp/invite/calendars/${id}/${token}`;
        setTimeout(() => {
          this.inviteLink.set(link);
          this.shareLink.set(link);
          this.isGeneratingLink.set(false);
        }, 400);
      }
      closeSharePopup() {
        this.showSharePopup.set(false);
        this.shareLink.set("");
        this.copySuccess.set(false);
      }
      copyShareLink() {
        const link = this.shareLink();
        if (!link)
          return;
        navigator.clipboard.writeText(link).then(() => {
          this.copySuccess.set(true);
          setTimeout(() => this.copySuccess.set(false), 2e3);
        }).catch((err) => {
          console.error("[ViewCalendarModal] Failed to copy link:", err);
        });
      }
      showNotAdmin() {
        this.toast.set("You are not an admin of this calendar.");
      }
      clearToast() {
        this.toast.set("");
      }
      onBack() {
        this.back.emit();
      }
      onClose() {
        this.close.emit();
      }
      getColor(calendarId) {
        return getCalendarColor(calendarId);
      }
      static \u0275fac = function ViewCalendarModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ViewCalendarModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCalendarModal, selectors: [["app-view-calendar-modal"]], inputs: { calendarId: [1, "calendarId"] }, outputs: { back: "back", close: "close", editCalendar: "editCalendar" }, decls: 26, vars: 7, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "header-left"], [1, "modal-title"], [1, "btn-share", 3, "click", "disabled", "title"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "18", "cy", "5", "r", "3"], ["cx", "6", "cy", "12", "r", "3"], ["cx", "18", "cy", "19", "r", "3"], ["x1", "8.59", "y1", "13.51", "x2", "15.42", "y2", "17.49"], ["x1", "15.41", "y1", "6.51", "x2", "8.59", "y2", "10.49"], ["aria-label", "Close modal", 1, "modal-close-btn", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger", "mb-3"], [1, "alert", "alert-warning", "mb-3"], [1, "modal-footer"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-primary"], ["disabled", "", "title", "You don't have permission to edit this calendar", 1, "btn", "btn-primary"], [1, "share-overlay"], [1, "mb-3"], [1, "form-label"], ["disabled", "", 1, "form-control", "app-input", "calendar-name-input", 3, "value"], [1, "mt-4"], [1, "h5", "mb-2"], [1, "text-center", "py-2"], [1, "text-muted", "mb-0"], [1, "list-group"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "list-group-item", "user-row"], [1, "user-name"], [1, "btn", "btn-primary", 3, "click"], [1, "share-overlay", 3, "click"], [1, "share-popup", 3, "click"], [1, "share-popup-header"], ["aria-label", "Close popup", 1, "popup-close-btn", 3, "click"], [1, "share-popup-body"], [1, "loading-state"], [1, "share-popup-footer"], [1, "spinner-border"], [1, "share-description"], [1, "share-link-container"], ["type", "text", "readonly", "", 1, "share-link-input", 3, "click", "value"], [1, "btn", "btn-primary", "btn-copy", 3, "click"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], [1, "share-note"]], template: function ViewCalendarModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "div", 0);
          \u0275\u0275domListener("click", function ViewCalendarModal_Template_div_click_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275domElementStart(1, "div", 1);
          \u0275\u0275domListener("click", function ViewCalendarModal_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
          });
          \u0275\u0275domElementStart(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          \u0275\u0275text(5, "View Calendar");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(6, "button", 5);
          \u0275\u0275domListener("click", function ViewCalendarModal_Template_button_click_6_listener() {
            return ctx.onShare();
          });
          \u0275\u0275namespaceSVG();
          \u0275\u0275domElementStart(7, "svg", 6);
          \u0275\u0275domElement(8, "circle", 7)(9, "circle", 8)(10, "circle", 9)(11, "line", 10)(12, "line", 11);
          \u0275\u0275domElementEnd();
          \u0275\u0275text(13, " Share ");
          \u0275\u0275domElementEnd()();
          \u0275\u0275namespaceHTML();
          \u0275\u0275domElementStart(14, "button", 12);
          \u0275\u0275domListener("click", function ViewCalendarModal_Template_button_click_14_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(15, "\u2715");
          \u0275\u0275domElementEnd()();
          \u0275\u0275domElementStart(16, "div", 13);
          \u0275\u0275conditionalCreate(17, ViewCalendarModal_Conditional_17_Template, 2, 1, "div", 14);
          \u0275\u0275conditionalCreate(18, ViewCalendarModal_Conditional_18_Template, 2, 1, "div", 15);
          \u0275\u0275conditionalCreate(19, ViewCalendarModal_Conditional_19_Template, 11, 9);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(20, "div", 16)(21, "button", 17);
          \u0275\u0275domListener("click", function ViewCalendarModal_Template_button_click_21_listener() {
            return ctx.onBack();
          });
          \u0275\u0275text(22, "\u2190 Back");
          \u0275\u0275domElementEnd();
          \u0275\u0275conditionalCreate(23, ViewCalendarModal_Conditional_23_Template, 2, 0, "button", 18)(24, ViewCalendarModal_Conditional_24_Template, 2, 0, "button", 19);
          \u0275\u0275domElementEnd();
          \u0275\u0275conditionalCreate(25, ViewCalendarModal_Conditional_25_Template, 13, 1, "div", 20);
          \u0275\u0275domElementEnd()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          \u0275\u0275advance(6);
          \u0275\u0275domProperty("disabled", !ctx.isAdmin())("title", ctx.isAdmin() ? "Share this calendar" : "Only admins can generate invite links");
          \u0275\u0275advance(11);
          \u0275\u0275conditional((tmp_2_0 = ctx.apiError()) ? 17 : -1, tmp_2_0);
          \u0275\u0275advance();
          \u0275\u0275conditional((tmp_3_0 = ctx.toast()) ? 18 : -1, tmp_3_0);
          \u0275\u0275advance();
          \u0275\u0275conditional((tmp_4_0 = ctx.currentCalendar()) ? 19 : -1, tmp_4_0);
          \u0275\u0275advance(4);
          \u0275\u0275conditional(ctx.isAdmin() ? 23 : 24);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.showSharePopup() ? 25 : -1);
        }
      }, dependencies: [CommonModule], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 90%;\n  max-width: 650px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n  flex-shrink: 0;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.btn-share[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.btn-share[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0056b3;\n}\n.btn-share[_ngcontent-%COMP%]:disabled {\n  background: #6c757d;\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.btn-share[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.share-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1002;\n  border-radius: 8px;\n}\n.share-popup[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\n  width: 90%;\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n}\n.share-popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.share-popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.popup-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.popup-close-btn[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.share-popup-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 150px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.share-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #555;\n  font-size: 14px;\n}\n.share-link-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.share-link-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: monospace;\n  background: #f8f9fa;\n}\n.share-link-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n}\n.btn-copy[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-copy[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.share-note[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 12px;\n  font-style: italic;\n}\n.share-popup-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: flex-end;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #777;\n}\n.user-row[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.calendar-name-input[_ngcontent-%COMP%]:disabled {\n  opacity: 1;\n  font-weight: 600;\n}\n/*# sourceMappingURL=view-calendar-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCalendarModal, [{
        type: Component,
        args: [{ selector: "app-view-calendar-modal", standalone: true, imports: [CommonModule], template: `<div class="modal-overlay" (click)="onClose()">
  <div class="modal-content" (click)="$event.stopPropagation()">
    <!-- Header -->
    <div class="modal-header">
      <div class="header-left">
        <h2 class="modal-title">View Calendar</h2>

        <button
          class="btn-share"
          (click)="onShare()"
          [disabled]="!isAdmin()"
          [title]="isAdmin() ? 'Share this calendar' : 'Only admins can generate invite links'"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share
        </button>
      </div>

      <button class="modal-close-btn" (click)="onClose()" aria-label="Close modal">\u2715</button>
    </div>

    <!-- Body -->
    <div class="modal-body">
      @if (apiError(); as err) {
        <div class="alert alert-danger mb-3">
          {{ err }}
        </div>
      }

      @if (toast(); as msg) {
        <div class="alert alert-warning mb-3">
          {{ msg }}
        </div>
      }

      @if (currentCalendar(); as cal) {
        <div class="mb-3">
          <label class="form-label">Calendar Name</label>
          <input
            class="form-control app-input calendar-name-input"
            [value]="cal.name"
            disabled
            [style.border-color]="getColor(cal.id).primary"
            [style.color]="getColor(cal.id).primary"
            [style.background-color]="getColor(cal.id).secondary"
          />
        </div>

        <!-- Users (list only \u2013 no admin/user tags) -->
        <div class="mt-4">
          <h3 class="h5 mb-2">Users</h3>

          @if (usersError(); as uErr) {
            <div class="alert alert-danger mb-3">
              {{ uErr }}
            </div>
          }

          @if (isLoadingUsers()) {
            <div class="text-center py-2">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          } @else if (users().length === 0) {
            <p class="text-muted mb-0">No users returned for this calendar.</p>
          } @else {
            <ul class="list-group">
              @for (u of users(); track u.user_id) {
                <li class="list-group-item user-row">
                  <span class="user-name">{{ u.username }}</span>
                </li>
              }
            </ul>
          }
        </div>
      }
    </div>

    <!-- Footer (match ViewEventModal layout) -->
    <div class="modal-footer">
      <button class="btn btn-outline-secondary" (click)="onBack()">\u2190 Back</button>

      @if (isAdmin()) {
        <button class="btn btn-primary" (click)="onEditCalendar()">Edit Calendar</button>
      } @else {
        <button class="btn btn-primary" disabled title="You don't have permission to edit this calendar">
          Edit Calendar
        </button>
      }
    </div>

    <!-- Share Popup Overlay -->
    @if (showSharePopup()) {
      <div class="share-overlay" (click)="closeSharePopup()">
        <div class="share-popup" (click)="$event.stopPropagation()">
          <!-- Popup Header -->
          <div class="share-popup-header">
            <h3>Share Calendar</h3>
            <button class="popup-close-btn" (click)="closeSharePopup()" aria-label="Close popup">\u2715</button>
          </div>

          <!-- Popup Body -->
          <div class="share-popup-body">
            @if (isGeneratingLink()) {
              <div class="loading-state">
                <div class="spinner-border"></div>
                <p>Generating invite link...</p>
              </div>
            } @else if (shareLink()) {
              <p class="share-description">
                Share this link to invite others to view this calendar:
              </p>

              <div class="share-link-container">
                <input
                  type="text"
                  class="share-link-input"
                  [value]="shareLink()"
                  readonly
                  (click)="$event.target.select()"
                />
                <button class="btn btn-primary btn-copy" (click)="copyShareLink()">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  {{ copySuccess() ? 'Copied!' : 'Copy' }}
                </button>
              </div>

              <p class="share-note">This link will expire in 7 days.</p>
            }
          </div>

          <!-- Popup Footer -->
          <div class="share-popup-footer">
            <button class="btn btn-outline-secondary" (click)="closeSharePopup()">Close</button>
          </div>
        </div>
      </div>
    }
  </div>
</div>`, styles: ["/* src/app/features/calendar/view-calendar-modal/view-calendar-modal.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 90%;\n  max-width: 650px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n  flex-shrink: 0;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.modal-title {\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow: auto;\n}\n.modal-footer {\n  padding: 16px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.btn-share {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.btn-share:hover:not(:disabled) {\n  background: #0056b3;\n}\n.btn-share:disabled {\n  background: #6c757d;\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.btn-share svg {\n  width: 14px;\n  height: 14px;\n}\n.share-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1002;\n  border-radius: 8px;\n}\n.share-popup {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\n  width: 90%;\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n}\n.share-popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.share-popup-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.popup-close-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.popup-close-btn:hover {\n  color: #000;\n}\n.share-popup-body {\n  padding: 20px;\n  min-height: 150px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n}\n.loading-state p {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.share-description {\n  margin: 0 0 12px 0;\n  color: #555;\n  font-size: 14px;\n}\n.share-link-container {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.share-link-input {\n  flex: 1;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: monospace;\n  background: #f8f9fa;\n}\n.share-link-input:focus {\n  outline: none;\n  border-color: #007bff;\n}\n.btn-copy {\n  padding: 10px 20px;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-copy svg {\n  width: 16px;\n  height: 16px;\n}\n.share-note {\n  margin: 0;\n  color: #666;\n  font-size: 12px;\n  font-style: italic;\n}\n.share-popup-footer {\n  padding: 12px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: flex-end;\n}\n.spinner-border {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #007bff;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.hint {\n  font-size: 0.9rem;\n}\n.muted {\n  color: #777;\n}\n.user-row {\n  padding: 10px 12px;\n}\n.user-name {\n  font-weight: 500;\n}\n.calendar-name-input:disabled {\n  opacity: 1;\n  font-weight: 600;\n}\n/*# sourceMappingURL=view-calendar-modal.css.map */\n"] }]
      }], () => [], { calendarId: [{ type: Input, args: [{ isSignal: true, alias: "calendarId", required: false }] }], back: [{ type: Output, args: ["back"] }], close: [{ type: Output, args: ["close"] }], editCalendar: [{ type: Output, args: ["editCalendar"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCalendarModal, { className: "ViewCalendarModal", filePath: "src/app/features/calendar/view-calendar-modal/view-calendar-modal.ts", lineNumber: 27 });
    })();
  }
});

export {
  ViewCalendarModal,
  init_view_calendar_modal
};
//# sourceMappingURL=chunk-ZB7S6FNL.js.map
