import {
  CalendarDisplay,
  init_calendar_display
} from "./chunk-XJG5QYQD.js";
import {
  CalendarDateFormatter,
  CalendarNativeDateFormatter,
  CalendarUtils,
  DateAdapter,
  adapterFactory,
  init_angular_calendar,
  init_date_fns
} from "./chunk-BV7G6RXL.js";
import {
  CalendarOptions,
  init_calendar_options
} from "./chunk-YALVE5U7.js";
import {
  DisplayOptions,
  init_display_options
} from "./chunk-6PJWWP7I.js";
import {
  EventSelectorModal,
  init_event_selector_modal
} from "./chunk-52BBZFHM.js";
import {
  PollsWindow,
  init_polls_window
} from "./chunk-7DCYQB2Z.js";
import {
  InviteService,
  init_invite_service
} from "./chunk-3ZUE2ORM.js";
import {
  CreatePollModal,
  init_create_poll_modal
} from "./chunk-TLEX6OXM.js";
import {
  EditPollModal,
  init_edit_poll_modal
} from "./chunk-JUTM37J5.js";
import {
  ViewPollModal,
  init_view_poll_modal
} from "./chunk-2W5PJVZ6.js";
import "./chunk-QKB7UDAX.js";
import "./chunk-EK3UKG6K.js";
import {
  CreateEventModal,
  init_create_event_modal
} from "./chunk-PRZLOFED.js";
import {
  DeleteEventModal,
  init_delete_event_modal
} from "./chunk-MTWOY5DO.js";
import {
  EditEventModal,
  init_edit_event_modal
} from "./chunk-OQYAVXN5.js";
import "./chunk-UAW7UYFJ.js";
import "./chunk-WAEIODOV.js";
import {
  CalendarSelectorModal,
  init_calendar_selector_modal
} from "./chunk-263FTSFE.js";
import {
  CreateCalendarModal,
  init_create_calendar_modal
} from "./chunk-EX57OSXC.js";
import {
  DeleteCalendarModal,
  init_delete_calendar_modal
} from "./chunk-4RQP2VDE.js";
import {
  EditCalendarModal,
  init_edit_calendar_modal
} from "./chunk-UZFNZ4BC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  init_forms
} from "./chunk-RYBDXJGT.js";
import {
  BaseModal,
  init_base_modal
} from "./chunk-OHTVP4IB.js";
import {
  ViewCalendarModal,
  init_view_calendar_modal
} from "./chunk-ZB7S6FNL.js";
import {
  getCalendarColor,
  init_calendar_colors
} from "./chunk-RBWGVD5O.js";
import {
  CalendarService,
  init_calendar_service
} from "./chunk-NXRHEMFL.js";
import {
  CalendarApiService,
  init_calendar_api_service
} from "./chunk-JRC6SCPK.js";
import {
  ActivatedRoute,
  convertToParamMap,
  init_router,
  provideRouter
} from "./chunk-LOQZ2SCF.js";
import "./chunk-G625OUTR.js";
import "./chunk-DD5LJ5SS.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import {
  CommonModule,
  init_common
} from "./chunk-EGU5GLVS.js";
import "./chunk-52DSKCZD.js";
import {
  Component,
  DestroyRef,
  Input,
  Observable,
  Output,
  assertInInjectionContext,
  catchError,
  computed,
  effect,
  init_core,
  init_esm,
  init_operators,
  init_untracked_chunk,
  inject,
  input,
  interval,
  map,
  of,
  output,
  setClassMetadata,
  signal,
  take,
  takeUntil,
  tap,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-FYSHOF5T.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
var init_rxjs_interop = __esm({
  "node_modules/@angular/core/fesm2022/rxjs-interop.mjs"() {
    "use strict";
    init_esm();
    init_operators();
    init_untracked_chunk();
  }
});

// src/app/features/event/view-event-modal/view-event-modal.ts
function ViewEventModal_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Event updated successfully! ");
    \u0275\u0275elementEnd();
  }
}
function ViewEventModal_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function ViewEventModal_Conditional_12_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const e_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", c_r1.id)("selected", c_r1.id === e_r2.calendarId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r1.name, " ");
  }
}
function ViewEventModal_Conditional_12_Conditional_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r3);
  }
}
function ViewEventModal_Conditional_12_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275repeaterCreate(1, ViewEventModal_Conditional_12_Conditional_45_For_2_Template, 2, 1, "span", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(e_r2.tags);
  }
}
function ViewEventModal_Conditional_12_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "No tags");
    \u0275\u0275elementEnd();
  }
}
function ViewEventModal_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 17)(2, "div", 18)(3, "label", 19);
    \u0275\u0275text(4, "Calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 20)(6, "option", 21);
    \u0275\u0275text(7, "Select calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ViewEventModal_Conditional_12_For_9_Template, 2, 3, "option", 22, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 18)(11, "label", 19);
    \u0275\u0275text(12, "Event Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 24)(16, "label", 19);
    \u0275\u0275text(17, "Start date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 24)(20, "label", 19);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 24)(24, "label", 19);
    \u0275\u0275text(25, "End date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 24)(28, "label", 19);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 27)(32, "label", 19);
    \u0275\u0275text(33, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "textarea", 28);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 29)(37, "label", 19);
    \u0275\u0275text(38, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "textarea", 28);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 30)(42, "div", 18)(43, "label", 19);
    \u0275\u0275text(44, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(45, ViewEventModal_Conditional_12_Conditional_45_Template, 3, 0, "div", 31)(46, ViewEventModal_Conditional_12_Conditional_46_Template, 2, 0, "p", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r2 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r3.adminCalendars());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", e_r2.title);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", e_r2.startDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Start time (", ctx_r3.getTimezoneAbbr(), ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", e_r2.startTime);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", e_r2.endDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("End time (", ctx_r3.getTimezoneAbbr(), ")");
    \u0275\u0275advance();
    \u0275\u0275property("value", e_r2.endTime);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(e_r2.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(e_r2.notes);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(e_r2.tags && e_r2.tags.length > 0 ? 45 : 46);
  }
}
function ViewEventModal_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ViewEventModal_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onEditEvent());
    });
    \u0275\u0275text(1, " Edit Event ");
    \u0275\u0275elementEnd();
  }
}
function ViewEventModal_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275text(1, " Edit Event ");
    \u0275\u0275elementEnd();
  }
}
function ViewEventModal_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "div", 42);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Generating invite link...");
    \u0275\u0275elementEnd()();
  }
}
function ViewEventModal_Conditional_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1, " Share this link to invite others to view this event: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 44)(3, "input", 45);
    \u0275\u0275listener("click", function ViewEventModal_Conditional_18_Conditional_9_Template_input_click_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.target.select());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function ViewEventModal_Conditional_18_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.copyShareLink());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 47);
    \u0275\u0275element(6, "rect", 48)(7, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "p", 50);
    \u0275\u0275text(10, " This link will expire in 7 days. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r3.shareLink());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.copySuccess() ? "Copied!" : "Copy", " ");
  }
}
function ViewEventModal_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function ViewEventModal_Conditional_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeSharePopup());
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275listener("click", function ViewEventModal_Conditional_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "h3");
    \u0275\u0275text(4, "Share Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function ViewEventModal_Conditional_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeSharePopup());
    });
    \u0275\u0275text(6, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275conditionalCreate(8, ViewEventModal_Conditional_18_Conditional_8_Template, 4, 0, "div", 40)(9, ViewEventModal_Conditional_18_Conditional_9_Template, 11, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 41)(11, "button", 13);
    \u0275\u0275listener("click", function ViewEventModal_Conditional_18_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeSharePopup());
    });
    \u0275\u0275text(12, " Close ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r3.isGeneratingLink() ? 8 : ctx_r3.shareLink() ? 9 : -1);
  }
}
var _forTrack0, ViewEventModal;
var init_view_event_modal = __esm({
  "src/app/features/event/view-event-modal/view-event-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_operators();
    init_esm();
    init_base_modal();
    init_calendar_api_service();
    init_calendar_service();
    init_invite_service();
    init_core();
    _forTrack0 = ($index, $item) => $item.id;
    ViewEventModal = class _ViewEventModal {
      calendarApi = inject(CalendarApiService);
      calendarService = inject(CalendarService);
      inviteService = inject(InviteService);
      // Inputs & Outputs
      eventId = input(null, ...ngDevMode ? [{ debugName: "eventId" }] : []);
      back = output();
      close = output();
      editEvent = output();
      showSuccessMessage = input(false, ...ngDevMode ? [{ debugName: "showSuccessMessage" }] : []);
      // State
      calendars = signal([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      event = signal(null, ...ngDevMode ? [{ debugName: "event" }] : []);
      showNotification = signal(false, ...ngDevMode ? [{ debugName: "showNotification" }] : []);
      showSharePopup = signal(false, ...ngDevMode ? [{ debugName: "showSharePopup" }] : []);
      shareLink = signal("", ...ngDevMode ? [{ debugName: "shareLink" }] : []);
      isGeneratingLink = signal(false, ...ngDevMode ? [{ debugName: "isGeneratingLink" }] : []);
      copySuccess = signal(false, ...ngDevMode ? [{ debugName: "copySuccess" }] : []);
      // Computed
      adminCalendars = computed(() => this.calendars().filter((c) => c.isAdmin), ...ngDevMode ? [{ debugName: "adminCalendars" }] : []);
      canEdit = computed(() => {
        const e = this.event();
        if (!e)
          return false;
        return this.adminCalendars().some((c) => c.id === e.calendarId);
      }, ...ngDevMode ? [{ debugName: "canEdit" }] : []);
      constructor() {
        document.body.style.overflow = "hidden";
        effect(() => {
          const id = this.eventId();
          if (id) {
            this.loadCalendars();
            this.loadEvent(id);
          }
          const showSuccess = this.showSuccessMessage();
          if (showSuccess) {
            this.showNotification.set(true);
            setTimeout(() => this.showNotification.set(false), 3e3);
          }
        });
      }
      ngOnDestroy() {
        document.body.style.overflow = "";
      }
      loadCalendars() {
        this.calendarService.getHomepage().pipe(take(1), map((home) => this.mapCalendars(home.calendars ?? [])), tap((calendars) => console.log("[ViewEventModal] Calendars loaded:", calendars)), catchError((err) => {
          console.error("[ViewEventModal] Failed to load calendars:", err);
          return of([]);
        })).subscribe((calendars) => {
          this.calendars.set(calendars);
        });
      }
      loadEvent(eventId) {
        this.apiError.set("");
        this.calendarApi.getByEventIds([eventId]).pipe(take(1), map((res) => res?.events?.[0]), tap((ev) => {
          if (!ev)
            this.apiError.set("Event not found");
        }), catchError((err) => {
          console.error("[ViewEventModal] Failed to load event:", err);
          this.apiError.set("Could not load event");
          return of(null);
        })).subscribe((ev) => {
          if (ev)
            this.displayEvent(ev);
        });
      }
      mapCalendars(rawCalendars) {
        return rawCalendars.map((c) => ({
          id: String(c.calendar_id ?? c.id ?? c.calendarId ?? c._id ?? ""),
          name: String(c.name ?? c.title ?? c.calendar_name ?? "Untitled"),
          isAdmin: c.isAdmin ?? c.is_admin ?? false
        })).filter((c) => c.id);
      }
      displayEvent(ev) {
        this.apiError.set("");
        const start = this.isoToDateTime(ev.start_time);
        const end = this.isoToDateTime(ev.end_time);
        this.event.set({
          calendarId: ev.calendar_id ?? "",
          title: ev.title ?? "",
          startDate: start.date,
          startTime: start.time,
          endDate: end.date,
          endTime: end.time,
          description: ev.description ?? "",
          notes: ev.notes ?? "",
          tags: ev.tags ?? []
        });
      }
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
        const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
        const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
        return { date, time };
      }
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
      onShare() {
        const eventId = this.eventId();
        if (!eventId || !this.canEdit())
          return;
        this.showSharePopup.set(true);
        this.isGeneratingLink.set(true);
        this.shareLink.set("");
        this.copySuccess.set(false);
        const expirationDate = /* @__PURE__ */ new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        const expirationISO = expirationDate.toISOString();
        this.inviteService.createEventInvite(eventId, expirationISO).pipe(take(1)).subscribe({
          next: (response) => {
            this.shareLink.set(response.invite_link);
            this.isGeneratingLink.set(false);
          },
          error: (err) => {
            console.error("[ViewEventModal] Failed to generate invite link:", err);
            this.isGeneratingLink.set(false);
            this.apiError.set("Failed to generate invite link");
            this.showSharePopup.set(false);
          }
        });
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
          console.error("[ViewEventModal] Failed to copy link:", err);
        });
      }
      onBack() {
        this.back.emit();
      }
      onClose() {
        this.close.emit();
      }
      onEditEvent() {
        const id = this.eventId();
        if (id)
          this.editEvent.emit(id);
      }
      static \u0275fac = function ViewEventModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ViewEventModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewEventModal, selectors: [["app-view-event-modal"]], inputs: { eventId: [1, "eventId"], showSuccessMessage: [1, "showSuccessMessage"] }, outputs: { back: "back", close: "close", editEvent: "editEvent" }, decls: 19, vars: 9, consts: [[3, "close", "title", "size"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled", "title"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 2, "display", "inline-block", "vertical-align", "middle", "margin-right", "4px"], ["cx", "18", "cy", "5", "r", "3"], ["cx", "6", "cy", "12", "r", "3"], ["cx", "18", "cy", "19", "r", "3"], ["x1", "8.59", "y1", "13.51", "x2", "15.42", "y2", "17.49"], ["x1", "15.41", "y1", "6.51", "x2", "8.59", "y2", "10.49"], [1, "alert", "alert-success", "mb-3"], [1, "alert", "alert-danger", "mb-3"], [1, "row", "g-3"], [1, "d-flex", "justify-content-between", "gap-2", "mt-4"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-primary"], ["disabled", "", "title", "You don't have permission to edit this event", 1, "btn", "btn-primary"], [1, "share-overlay"], [1, "col-12", "col-md-8"], [1, "mb-3"], [1, "form-label"], ["disabled", "", 1, "form-select", "app-select"], ["value", "", "disabled", ""], [3, "value", "selected"], ["type", "text", "disabled", "", 1, "form-control", "app-input", 3, "value"], [1, "col-12", "col-md-6"], ["type", "date", "disabled", "", 1, "form-control", "app-input", 3, "value"], ["type", "time", "disabled", "", 1, "form-control", "app-input", 3, "value"], [1, "mt-3", "mb-3"], ["rows", "4", "disabled", "", 1, "form-control", "app-textarea"], [1, "mb-2"], [1, "col-12", "col-md-4"], [1, "tags-display"], [1, "text-muted"], [1, "tag-chip"], [1, "btn", "btn-primary", 3, "click"], [1, "share-overlay", 3, "click"], [1, "share-popup", 3, "click"], [1, "share-popup-header"], ["aria-label", "Close popup", 1, "popup-close-btn", 3, "click"], [1, "share-popup-body"], [1, "loading-state"], [1, "share-popup-footer"], [1, "spinner-border"], [1, "share-description"], [1, "share-link-container"], ["type", "text", "readonly", "", 1, "share-link-input", 3, "click", "value"], [1, "btn", "btn-primary", "btn-copy", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], [1, "share-note"]], template: function ViewEventModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-base-modal", 0);
          \u0275\u0275listener("close", function ViewEventModal_Template_app_base_modal_close_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275elementStart(1, "div", 1)(2, "button", 2);
          \u0275\u0275listener("click", function ViewEventModal_Template_button_click_2_listener() {
            return ctx.onShare();
          });
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(3, "svg", 3);
          \u0275\u0275element(4, "circle", 4)(5, "circle", 5)(6, "circle", 6)(7, "line", 7)(8, "line", 8);
          \u0275\u0275elementEnd();
          \u0275\u0275text(9, " Share ");
          \u0275\u0275elementEnd()();
          \u0275\u0275conditionalCreate(10, ViewEventModal_Conditional_10_Template, 4, 0, "div", 9);
          \u0275\u0275conditionalCreate(11, ViewEventModal_Conditional_11_Template, 2, 1, "div", 10);
          \u0275\u0275conditionalCreate(12, ViewEventModal_Conditional_12_Template, 47, 10, "div", 11);
          \u0275\u0275namespaceHTML();
          \u0275\u0275elementStart(13, "div", 12)(14, "button", 13);
          \u0275\u0275listener("click", function ViewEventModal_Template_button_click_14_listener() {
            return ctx.onBack();
          });
          \u0275\u0275text(15, " \u2190 Back to Events ");
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(16, ViewEventModal_Conditional_16_Template, 2, 0, "button", 14)(17, ViewEventModal_Conditional_17_Template, 2, 0, "button", 15);
          \u0275\u0275elementEnd()();
          \u0275\u0275conditionalCreate(18, ViewEventModal_Conditional_18_Template, 13, 1, "div", 16);
        }
        if (rf & 2) {
          let tmp_5_0;
          let tmp_6_0;
          \u0275\u0275property("title", "View Event")("size", "large");
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", !ctx.canEdit())("title", ctx.canEdit() ? "Share this event" : "Only admins and superusers can send invites");
          \u0275\u0275advance(8);
          \u0275\u0275conditional(ctx.showNotification() ? 10 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional((tmp_5_0 = ctx.apiError()) ? 11 : -1, tmp_5_0);
          \u0275\u0275advance();
          \u0275\u0275conditional((tmp_6_0 = ctx.event()) ? 12 : -1, tmp_6_0);
          \u0275\u0275advance(4);
          \u0275\u0275conditional(ctx.canEdit() ? 16 : 17);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.showSharePopup() ? 18 : -1);
        }
      }, dependencies: [CommonModule, BaseModal], styles: ["\n\n.share-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1002;\n  border-radius: 8px;\n}\n.share-popup[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\n  width: 90%;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n}\n.share-popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.share-popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.popup-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.popup-close-btn[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.share-popup-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 150px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.share-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #555;\n  font-size: 14px;\n}\n.share-link-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.share-link-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: monospace;\n  background: #f8f9fa;\n}\n.share-link-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n}\n.btn-copy[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-copy[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.share-note[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 12px;\n  font-style: italic;\n}\n.share-popup-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: flex-end;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.success-notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 70px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #4caf50;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  z-index: 1001;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.notification-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: bold;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 6px;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 8px 12px;\n}\n.form-control[_ngcontent-%COMP%]:disabled, \n.form-select[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  color: #666;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  color: #721c24;\n}\n.tags-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tag-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=view-event-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewEventModal, [{
        type: Component,
        args: [{ selector: "app-view-event-modal", standalone: true, imports: [CommonModule, BaseModal], template: `<app-base-modal 
  [title]="'View Event'" 
  [size]="'large'"
  (close)="onClose()">

  <!-- Header Actions (Share button) -->
  <div class="d-flex justify-content-between align-items-center mb-3">
    <button 
      class="btn btn-sm btn-primary" 
      (click)="onShare()" 
      [disabled]="!canEdit()"
      [title]="canEdit() ? 'Share this event' : 'Only admins and superusers can send invites'">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 4px;">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
      Share
    </button>
  </div>

  <!-- Success Notification Toast -->
  @if (showNotification()) {
    <div class="alert alert-success mb-3">
      <span>\u2713</span> Event updated successfully!
    </div>
  }

  @if (apiError(); as err) {
    <div class="alert alert-danger mb-3">
      {{ err }}
    </div>
  }

  @if (event(); as e) {
    <div class="row g-3">
      <!-- LEFT COLUMN -->
      <div class="col-12 col-md-8">
            <!-- Calendar dropdown -->
            <div class="mb-3">
              <label class="form-label">Calendar</label>
              <select class="form-select app-select" disabled>
                <option value="" disabled>Select calendar</option>
                @for (c of adminCalendars(); track c.id) {
                  <option [value]="c.id" [selected]="c.id === e.calendarId">
                    {{ c.name }}
                  </option>
                }
              </select>
            </div>

            <!-- Title -->
            <div class="mb-3">
              <label class="form-label">Event Title</label>
              <input
                type="text"
                class="form-control app-input"
                [value]="e.title"
                disabled
              />
            </div>

            <!-- Dates / times -->
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <label class="form-label">Start date</label>
                <input
                  type="date"
                  class="form-control app-input"
                  [value]="e.startDate"
                  disabled
                />
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">Start time ({{ getTimezoneAbbr() }})</label>
                <input
                  type="time"
                  class="form-control app-input"
                  [value]="e.startTime"
                  disabled
                />
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">End date</label>
                <input
                  type="date"
                  class="form-control app-input"
                  [value]="e.endDate"
                  disabled
                />
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">End time ({{ getTimezoneAbbr() }})</label>
                <input
                  type="time"
                  class="form-control app-input"
                  [value]="e.endTime"
                  disabled
                />
              </div>
            </div>

            <!-- Description -->
            <div class="mt-3 mb-3">
              <label class="form-label">Description</label>
              <textarea
                rows="4"
                class="form-control app-textarea"
                disabled
              >{{ e.description }}</textarea>
            </div>

            <!-- Notes -->
            <div class="mb-2">
              <label class="form-label">Notes</label>
              <textarea
                rows="4"
                class="form-control app-textarea"
                disabled
              >{{ e.notes }}</textarea>
            </div>
          </div>

          <!-- RIGHT COLUMN -->
          <div class="col-12 col-md-4">
            <!-- Tags -->
            <div class="mb-3">
              <label class="form-label">Tags</label>
              @if (e.tags && e.tags.length > 0) {
                <div class="tags-display">
                  @for (tag of e.tags; track tag) {
                    <span class="tag-chip">{{ tag }}</span>
                  }
                </div>
              } @else {
                <p class="text-muted">No tags</p>
              }
            </div>
          </div>
        </div>
      }

  <!-- Footer -->
  <div class="d-flex justify-content-between gap-2 mt-4">
    <button class="btn btn-outline-secondary" (click)="onBack()">
      \u2190 Back to Events
    </button>

    @if (canEdit()) {
      <button class="btn btn-primary" (click)="onEditEvent()">
        Edit Event
      </button>
    } @else {
      <button class="btn btn-primary" disabled title="You don't have permission to edit this event">
        Edit Event
      </button>
    }
  </div>

</app-base-modal>

<!-- Share Popup Overlay (outside modal) -->
@if (showSharePopup()) {
  <div class="share-overlay" (click)="closeSharePopup()">
        <div class="share-popup" (click)="$event.stopPropagation()">
          <!-- Popup Header -->
          <div class="share-popup-header">
            <h3>Share Event</h3>
            <button class="popup-close-btn" (click)="closeSharePopup()" aria-label="Close popup">
              \u2715
            </button>
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
                Share this link to invite others to view this event:
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
              <p class="share-note">
                This link will expire in 7 days.
              </p>
            }
          </div>

        <!-- Popup Footer -->
        <div class="share-popup-footer">
          <button class="btn btn-outline-secondary" (click)="closeSharePopup()">
            Close
          </button>
        </div>
      </div>
    </div>
  }

`, styles: ["/* src/app/features/event/view-event-modal/view-event-modal.css */\n.share-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1002;\n  border-radius: 8px;\n}\n.share-popup {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\n  width: 90%;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n}\n.share-popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.share-popup-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.popup-close-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.popup-close-btn:hover {\n  color: #000;\n}\n.share-popup-body {\n  padding: 20px;\n  min-height: 150px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n}\n.loading-state p {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.share-description {\n  margin: 0 0 12px 0;\n  color: #555;\n  font-size: 14px;\n}\n.share-link-container {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.share-link-input {\n  flex: 1;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: monospace;\n  background: #f8f9fa;\n}\n.share-link-input:focus {\n  outline: none;\n  border-color: #007bff;\n}\n.btn-copy {\n  padding: 10px 20px;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-copy svg {\n  width: 16px;\n  height: 16px;\n}\n.share-note {\n  margin: 0;\n  color: #666;\n  font-size: 12px;\n  font-style: italic;\n}\n.share-popup-footer {\n  padding: 12px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: flex-end;\n}\n.spinner-border {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #007bff;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.success-notification {\n  position: absolute;\n  top: 70px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #4caf50;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  z-index: 1001;\n  animation: slideDown 0.3s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.notification-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: bold;\n}\n.form-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 6px;\n}\n.form-control,\n.form-select {\n  font-size: 14px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 8px 12px;\n}\n.form-control:disabled,\n.form-select:disabled {\n  background-color: #f5f5f5;\n  color: #666;\n}\n.form-control:focus,\n.form-select:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.alert {\n  padding: 12px 16px;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.alert-danger {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  color: #721c24;\n}\n.tags-display {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tag-chip {\n  display: inline-block;\n  padding: 4px 12px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mb-3 {\n  margin-bottom: 1rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mt-3 {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=view-event-modal.css.map */\n"] }]
      }], () => [], { eventId: [{ type: Input, args: [{ isSignal: true, alias: "eventId", required: false }] }], back: [{ type: Output, args: ["back"] }], close: [{ type: Output, args: ["close"] }], editEvent: [{ type: Output, args: ["editEvent"] }], showSuccessMessage: [{ type: Input, args: [{ isSignal: true, alias: "showSuccessMessage", required: false }] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewEventModal, { className: "ViewEventModal", filePath: "src/app/features/event/view-event-modal/view-event-modal.ts", lineNumber: 34 });
    })();
  }
});

// src/app/features/poll/poll-selector-modal/poll-selector-modal.ts
function PollSelectorModal_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function PollSelectorModal_Conditional_10_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearCalendarFilters());
    });
    \u0275\u0275text(1, " Clear ");
    \u0275\u0275elementEnd();
  }
}
function PollSelectorModal_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function PollSelectorModal_Conditional_10_For_7_Template_button_click_0_listener() {
      const calendar_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCalendar(calendar_r4.calendar_id));
    });
    \u0275\u0275element(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r1.isCalendarSelected(calendar_r4.calendar_id) ? ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary : "white")("border-color", ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary)("color", ctx_r1.isCalendarSelected(calendar_r4.calendar_id) ? "white" : ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary);
    \u0275\u0275classProp("active", ctx_r1.isCalendarSelected(calendar_r4.calendar_id));
    \u0275\u0275property("title", \u0275\u0275interpolate1("Click to filter by ", calendar_r4.name));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.isCalendarSelected(calendar_r4.calendar_id) ? "white" : ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", calendar_r4.name, " ");
  }
}
function PollSelectorModal_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 15)(2, "h3");
    \u0275\u0275text(3, "Calendars");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, PollSelectorModal_Conditional_10_Conditional_4_Template, 2, 0, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275repeaterCreate(6, PollSelectorModal_Conditional_10_For_7_Template, 3, 13, "button", 18, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectedCalendarIds().length > 0 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.calendars());
  }
}
function PollSelectorModal_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No polls available");
    \u0275\u0275elementEnd();
  }
}
function PollSelectorModal_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No polls match your search");
    \u0275\u0275elementEnd();
  }
}
function PollSelectorModal_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, PollSelectorModal_Conditional_12_Conditional_1_Template, 2, 0, "p")(2, PollSelectorModal_Conditional_12_Conditional_2_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.polls().length === 0 ? 1 : 2);
  }
}
function PollSelectorModal_Conditional_13_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const poll_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(poll_r6.description);
  }
}
function PollSelectorModal_Conditional_13_For_2_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r7);
  }
}
function PollSelectorModal_Conditional_13_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, PollSelectorModal_Conditional_13_For_2_Conditional_7_For_2_Template, 2, 1, "span", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const poll_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(poll_r6.tags);
  }
}
function PollSelectorModal_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function PollSelectorModal_Conditional_13_For_2_Template_div_click_0_listener() {
      const poll_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPollSelect(poll_r6.poll_id));
    });
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PollSelectorModal_Conditional_13_For_2_Conditional_6_Template, 2, 1, "div", 27);
    \u0275\u0275conditionalCreate(7, PollSelectorModal_Conditional_13_For_2_Conditional_7_Template, 3, 0, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const poll_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(poll_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatPollTime(poll_r6.start_time), " - ", ctx_r1.formatPollTime(poll_r6.end_time), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(poll_r6.description ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(poll_r6.tags && poll_r6.tags.length > 0 ? 7 : -1);
  }
}
function PollSelectorModal_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, PollSelectorModal_Conditional_13_For_2_Template, 8, 5, "div", 22, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredPolls());
  }
}
function PollSelectorModal_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function PollSelectorModal_Conditional_14_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearTagFilters());
    });
    \u0275\u0275text(1, " Clear ");
    \u0275\u0275elementEnd();
  }
}
function PollSelectorModal_Conditional_14_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function PollSelectorModal_Conditional_14_For_7_Template_button_click_0_listener() {
      const tag_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTag(tag_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.isTagSelected(tag_r10));
    \u0275\u0275property("title", \u0275\u0275interpolate1("Click to filter by ", tag_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r10, " ");
  }
}
function PollSelectorModal_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 15)(2, "h3");
    \u0275\u0275text(3, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, PollSelectorModal_Conditional_14_Conditional_4_Template, 2, 0, "button", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275repeaterCreate(6, PollSelectorModal_Conditional_14_For_7_Template, 2, 5, "button", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectedTags().length > 0 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.allTags());
  }
}
var _forTrack02, _forTrack1, PollSelectorModal;
var init_poll_selector_modal = __esm({
  "src/app/features/poll/poll-selector-modal/poll-selector-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_forms();
    init_calendar_colors();
    init_core();
    init_forms();
    _forTrack02 = ($index, $item) => $item.calendar_id;
    _forTrack1 = ($index, $item) => $item.poll_id;
    PollSelectorModal = class _PollSelectorModal {
      // Inputs & Outputs
      polls = input([], ...ngDevMode ? [{ debugName: "polls" }] : []);
      calendars = input([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      pollSelected = output();
      // Emit poll ID
      closeModal = output();
      // State
      searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
      selectedTags = signal([], ...ngDevMode ? [{ debugName: "selectedTags" }] : []);
      selectedCalendarIds = signal([], ...ngDevMode ? [{ debugName: "selectedCalendarIds" }] : []);
      // Computed: extract all unique tags from polls
      allTags = computed(() => {
        const tagSet = /* @__PURE__ */ new Set();
        this.polls().forEach((p) => {
          p.tags?.forEach((tag) => tagSet.add(tag));
        });
        return Array.from(tagSet).sort();
      }, ...ngDevMode ? [{ debugName: "allTags" }] : []);
      // Computed: filter polls by search query, tags, and calendars
      filteredPolls = computed(() => {
        let filtered = this.polls();
        const selectedCals = this.selectedCalendarIds();
        if (selectedCals.length > 0) {
          filtered = filtered.filter((p) => selectedCals.includes(p.calendar_id));
        }
        const selected = this.selectedTags();
        if (selected.length > 0) {
          filtered = filtered.filter((p) => selected.some((tag) => p.tags?.includes(tag)));
        }
        const query = this.searchQuery().toLowerCase();
        if (query) {
          filtered = filtered.filter((p) => p.title.toLowerCase().includes(query) || p.description?.toLowerCase().includes(query) || p.tags?.some((tag) => tag.toLowerCase().includes(query)));
        }
        return filtered;
      }, ...ngDevMode ? [{ debugName: "filteredPolls" }] : []);
      constructor() {
        document.body.style.overflow = "hidden";
      }
      ngOnDestroy() {
        document.body.style.overflow = "";
      }
      onPollSelect(pollId) {
        this.pollSelected.emit(pollId);
      }
      onClose() {
        this.closeModal.emit();
      }
      toggleTag(tag) {
        this.selectedTags.update((current) => {
          if (current.includes(tag)) {
            return current.filter((t) => t !== tag);
          } else {
            return [...current, tag];
          }
        });
      }
      isTagSelected(tag) {
        return this.selectedTags().includes(tag);
      }
      clearTagFilters() {
        this.selectedTags.set([]);
      }
      toggleCalendar(calendarId) {
        this.selectedCalendarIds.update((current) => {
          if (current.includes(calendarId)) {
            return current.filter((id) => id !== calendarId);
          } else {
            return [...current, calendarId];
          }
        });
      }
      isCalendarSelected(calendarId) {
        return this.selectedCalendarIds().includes(calendarId);
      }
      clearCalendarFilters() {
        this.selectedCalendarIds.set([]);
      }
      getCalendarColor(calendarId) {
        return getCalendarColor(calendarId);
      }
      /**
       * Parse server ISO timestamp and handle timezone
       */
      parseServerInstant(iso) {
        const hasTz = /([zZ]|[+\-]\d{2}:\d{2})$/.test(iso);
        return new Date(hasTz ? iso : `${iso}Z`);
      }
      /**
       * Convert ISO-8601 timestamp to local date and time for display
       */
      formatPollTime(iso) {
        if (!iso)
          return "";
        const d = this.parseServerInstant(iso);
        if (isNaN(d.getTime()))
          return "";
        const pad = (n) => String(n).padStart(2, "0");
        const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
        const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
        return `${date} ${time}`;
      }
      static \u0275fac = function PollSelectorModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _PollSelectorModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PollSelectorModal, selectors: [["app-poll-selector-modal"]], inputs: { polls: [1, "polls"], calendars: [1, "calendars"] }, outputs: { pollSelected: "pollSelected", closeModal: "closeModal" }, decls: 18, vars: 4, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["aria-label", "Close modal", 1, "modal-close-btn", 3, "click"], [1, "modal-search"], ["type", "text", "placeholder", "Search polls by title, description, calendar, or tags...", "aria-label", "Search polls", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "modal-body-wrapper"], [1, "filter-sidebar", "left-sidebar"], [1, "modal-body"], [1, "no-polls"], [1, "polls-list"], [1, "filter-sidebar", "right-sidebar"], [1, "modal-footer"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "sidebar-header"], ["title", "Clear calendar filters", 1, "clear-btn"], [1, "filter-list"], [1, "calendar-filter-chip", 3, "active", "background-color", "border-color", "color", "title"], ["title", "Clear calendar filters", 1, "clear-btn", 3, "click"], [1, "calendar-filter-chip", 3, "click", "title"], [1, "calendar-color-dot"], [1, "poll-item"], [1, "poll-item", 3, "click"], [1, "poll-header"], [1, "poll-title"], [1, "poll-time"], [1, "poll-description"], [1, "poll-tags"], [1, "tag-chip"], ["title", "Clear tag filters", 1, "clear-btn"], [1, "tag-filter-chip", 3, "active", "title"], ["title", "Clear tag filters", 1, "clear-btn", 3, "click"], [1, "tag-filter-chip", 3, "click", "title"]], template: function PollSelectorModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275listener("click", function PollSelectorModal_Template_div_click_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275listener("click", function PollSelectorModal_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
          });
          \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
          \u0275\u0275text(4, "Select Poll");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "button", 4);
          \u0275\u0275listener("click", function PollSelectorModal_Template_button_click_5_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(6, " \u2715 ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(7, "div", 5)(8, "input", 6);
          \u0275\u0275twoWayListener("ngModelChange", function PollSelectorModal_Template_input_ngModelChange_8_listener($event) {
            \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(9, "div", 7);
          \u0275\u0275conditionalCreate(10, PollSelectorModal_Conditional_10_Template, 8, 1, "div", 8);
          \u0275\u0275elementStart(11, "div", 9);
          \u0275\u0275conditionalCreate(12, PollSelectorModal_Conditional_12_Template, 3, 1, "div", 10)(13, PollSelectorModal_Conditional_13_Template, 3, 0, "div", 11);
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(14, PollSelectorModal_Conditional_14_Template, 8, 1, "div", 12);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(15, "div", 13)(16, "button", 14);
          \u0275\u0275listener("click", function PollSelectorModal_Template_button_click_16_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(17, " Cancel ");
          \u0275\u0275elementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(8);
          \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.calendars().length > 0 ? 10 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.filteredPolls().length === 0 ? 12 : 13);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.allTags().length > 0 ? 14 : -1);
        }
      }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 95%;\n  max-width: 1100px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.modal-close-btn[_ngcontent-%COMP%]:active {\n  color: #c82333;\n}\n.modal-search[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.modal-body-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.filter-sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #f8f9fa;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  flex-shrink: 0;\n}\n.left-sidebar[_ngcontent-%COMP%] {\n  border-right: 1px solid #e0e0e0;\n}\n.right-sidebar[_ngcontent-%COMP%] {\n  border-left: 1px solid #e0e0e0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  min-width: 0;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  flex-shrink: 0;\n}\n.sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #007bff;\n  font-size: 10px;\n  cursor: pointer;\n  padding: 3px 6px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  font-weight: 500;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 123, 255, 0.1);\n}\n.filter-list[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.calendar-filter-chip[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  background-color: white;\n  border: 2px solid;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.calendar-color-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.calendar-filter-chip[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.calendar-filter-chip.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.tag-filter-chip[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  color: #555;\n}\n.tag-filter-chip[_ngcontent-%COMP%]:hover {\n  background-color: #e3f2fd;\n  border-color: #90caf9;\n  color: #1976d2;\n}\n.tag-filter-chip.active[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  border-color: #1976d2;\n  font-weight: 500;\n}\n.tag-filter-chip.active[_ngcontent-%COMP%]:hover {\n  background-color: #1565c0;\n  border-color: #1565c0;\n}\n.polls-list[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.poll-item[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.poll-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  border-color: #007bff;\n  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.1);\n}\n.poll-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.poll-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  color: #333;\n  flex: 1;\n}\n.poll-calendar[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 3px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.poll-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-bottom: 6px;\n}\n.poll-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  line-height: 1.4;\n  margin-top: 4px;\n}\n.poll-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 8px;\n}\n.tag-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.no-polls[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #999;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar, \n.filter-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.filter-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.filter-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 4px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.filter-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/*# sourceMappingURL=poll-selector-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PollSelectorModal, [{
        type: Component,
        args: [{ selector: "app-poll-selector-modal", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-overlay" (click)="onClose()">
  <div class="modal-content" (click)="$event.stopPropagation()">
    <!-- Header -->
    <div class="modal-header">
      <h2 class="modal-title">Select Poll</h2>
      <button class="modal-close-btn" (click)="onClose()" aria-label="Close modal">
        \u2715
      </button>
    </div>

    <!-- Search Bar -->
    <div class="modal-search">
      <input
        type="text"
        class="search-input"
        placeholder="Search polls by title, description, calendar, or tags..."
        [(ngModel)]="searchQuery"
        aria-label="Search polls"
      />
    </div>

    <!-- Main Content Area -->
    <div class="modal-body-wrapper">
      <!-- Left Sidebar: Calendar Filter -->
      @if (calendars().length > 0) {
        <div class="filter-sidebar left-sidebar">
          <div class="sidebar-header">
            <h3>Calendars</h3>
            @if (selectedCalendarIds().length > 0) {
              <button class="clear-btn" (click)="clearCalendarFilters()" title="Clear calendar filters">
                Clear
              </button>
            }
          </div>
          <div class="filter-list">
            @for (calendar of calendars(); track calendar.calendar_id) {
              <button 
                class="calendar-filter-chip" 
                [class.active]="isCalendarSelected(calendar.calendar_id)"
                [style.background-color]="isCalendarSelected(calendar.calendar_id) ? getCalendarColor(calendar.calendar_id).primary : 'white'"
                [style.border-color]="getCalendarColor(calendar.calendar_id).primary"
                [style.color]="isCalendarSelected(calendar.calendar_id) ? 'white' : getCalendarColor(calendar.calendar_id).primary"
                (click)="toggleCalendar(calendar.calendar_id)"
                title="Click to filter by {{ calendar.name }}">
                <span class="calendar-color-dot" [style.background-color]="isCalendarSelected(calendar.calendar_id) ? 'white' : getCalendarColor(calendar.calendar_id).primary"></span>
                {{ calendar.name }}
              </button>
            }
          </div>
        </div>
      }

      <!-- Middle: Polls List -->
      <div class="modal-body">
        @if (filteredPolls().length === 0) {
          <div class="no-polls">
            @if (polls().length === 0) {
              <p>No polls available</p>
            } @else {
              <p>No polls match your search</p>
            }
          </div>
        } @else {
          <div class="polls-list">
            @for (poll of filteredPolls(); track poll.poll_id) {
              <div class="poll-item" (click)="onPollSelect(poll.poll_id)">
                <div class="poll-header">
                  <div class="poll-title">{{ poll.title }}</div>
                </div>
                <div class="poll-time">
                  {{ formatPollTime(poll.start_time) }} - {{ formatPollTime(poll.end_time) }}
                </div>
                @if (poll.description) {
                  <div class="poll-description">{{ poll.description }}</div>
                }
                @if (poll.tags && poll.tags.length > 0) {
                  <div class="poll-tags">
                    @for (tag of poll.tags; track tag) {
                      <span class="tag-chip">{{ tag }}</span>
                    }
                  </div>
                }
              </div>
            }
          </div>
        }
      </div>

      <!-- Right Sidebar: Tag Filter -->
      @if (allTags().length > 0) {
        <div class="filter-sidebar right-sidebar">
          <div class="sidebar-header">
            <h3>Tags</h3>
            @if (selectedTags().length > 0) {
              <button class="clear-btn" (click)="clearTagFilters()" title="Clear tag filters">
                Clear
              </button>
            }
          </div>
          <div class="filter-list">
            @for (tag of allTags(); track tag) {
              <button 
                class="tag-filter-chip" 
                [class.active]="isTagSelected(tag)"
                (click)="toggleTag(tag)"
                title="Click to filter by {{ tag }}">
                {{ tag }}
              </button>
            }
          </div>
        </div>
      }
    </div>

    <!-- Footer -->
    <div class="modal-footer">
      <button class="btn btn-outline-secondary" (click)="onClose()">
        Cancel
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/poll/poll-selector-modal/poll-selector-modal.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 95%;\n  max-width: 1100px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.modal-title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.modal-close-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.modal-close-btn:hover {\n  color: #dc3545;\n}\n.modal-close-btn:active {\n  color: #c82333;\n}\n.modal-search {\n  padding: 15px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.search-input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.modal-body-wrapper {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.filter-sidebar {\n  width: 200px;\n  background-color: #f8f9fa;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  flex-shrink: 0;\n}\n.left-sidebar {\n  border-right: 1px solid #e0e0e0;\n}\n.right-sidebar {\n  border-left: 1px solid #e0e0e0;\n}\n.modal-body {\n  flex: 1;\n  overflow-y: auto;\n  min-width: 0;\n}\n.sidebar-header {\n  padding: 12px 15px;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  flex-shrink: 0;\n}\n.sidebar-header h3 {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.clear-btn {\n  background: none;\n  border: none;\n  color: #007bff;\n  font-size: 10px;\n  cursor: pointer;\n  padding: 3px 6px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  font-weight: 500;\n}\n.clear-btn:hover {\n  background-color: rgba(0, 123, 255, 0.1);\n}\n.filter-list {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.calendar-filter-chip {\n  padding: 8px 10px;\n  background-color: white;\n  border: 2px solid;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.calendar-color-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.calendar-filter-chip:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.calendar-filter-chip.active {\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.tag-filter-chip {\n  padding: 8px 12px;\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  color: #555;\n}\n.tag-filter-chip:hover {\n  background-color: #e3f2fd;\n  border-color: #90caf9;\n  color: #1976d2;\n}\n.tag-filter-chip.active {\n  background-color: #1976d2;\n  color: white;\n  border-color: #1976d2;\n  font-weight: 500;\n}\n.tag-filter-chip.active:hover {\n  background-color: #1565c0;\n  border-color: #1565c0;\n}\n.polls-list {\n  padding: 10px;\n}\n.poll-item {\n  padding: 12px 15px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.poll-item:hover {\n  background-color: #f5f5f5;\n  border-color: #007bff;\n  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.1);\n}\n.poll-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.poll-title {\n  font-weight: 600;\n  font-size: 15px;\n  color: #333;\n  flex: 1;\n}\n.poll-calendar {\n  font-size: 11px;\n  color: #888;\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 3px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.poll-time {\n  font-size: 12px;\n  color: #888;\n  margin-bottom: 6px;\n}\n.poll-description {\n  font-size: 13px;\n  color: #666;\n  line-height: 1.4;\n  margin-top: 4px;\n}\n.poll-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 8px;\n}\n.tag-chip {\n  display: inline-block;\n  padding: 3px 10px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.no-polls {\n  padding: 40px 20px;\n  text-align: center;\n  color: #999;\n}\n.modal-footer {\n  padding: 15px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.btn-outline-secondary {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary:hover {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n.modal-body::-webkit-scrollbar,\n.filter-sidebar::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-body::-webkit-scrollbar-track,\n.filter-sidebar::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.modal-body::-webkit-scrollbar-thumb,\n.filter-sidebar::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 4px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover,\n.filter-sidebar::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/*# sourceMappingURL=poll-selector-modal.css.map */\n"] }]
      }], () => [], { polls: [{ type: Input, args: [{ isSignal: true, alias: "polls", required: false }] }], calendars: [{ type: Input, args: [{ isSignal: true, alias: "calendars", required: false }] }], pollSelected: [{ type: Output, args: ["pollSelected"] }], closeModal: [{ type: Output, args: ["closeModal"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PollSelectorModal, { className: "PollSelectorModal", filePath: "src/app/features/poll/poll-selector-modal/poll-selector-modal.ts", lineNumber: 16 });
    })();
  }
});

// src/app/features/dashboard/main-page/main-page.ts
function MainPageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-calendar-modal", 16);
    \u0275\u0275listener("close", function MainPageComponent_Conditional_7_Template_app_create_calendar_modal_close_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("calendarCreated", function MainPageComponent_Conditional_7_Template_app_create_calendar_modal_calendarCreated_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCalendarCreated($event));
    });
    \u0275\u0275elementEnd();
  }
}
function MainPageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-calendar-selector-modal", 17);
    \u0275\u0275listener("calendarActivated", function MainPageComponent_Conditional_8_Template_app_calendar_selector_modal_calendarActivated_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCalendarActivated($event));
    })("closeModal", function MainPageComponent_Conditional_8_Template_app_calendar_selector_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("calendars", ctx_r1.calendars());
  }
}
function MainPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-view-calendar-modal", 18);
    \u0275\u0275listener("back", function MainPageComponent_Conditional_9_Template_app_view_calendar_modal_back_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewCalendarBack());
    })("close", function MainPageComponent_Conditional_9_Template_app_view_calendar_modal_close_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("editCalendar", function MainPageComponent_Conditional_9_Template_app_view_calendar_modal_editCalendar_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditCalendar($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("calendarId", ctx_r1.selectedCalendarId());
  }
}
function MainPageComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-edit-calendar-modal", 19);
    \u0275\u0275listener("close", function MainPageComponent_Conditional_10_Template_app_edit_calendar_modal_close_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("calendarUpdated", function MainPageComponent_Conditional_10_Template_app_edit_calendar_modal_calendarUpdated_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCalendarUpdated($event));
    })("deleteRequested", function MainPageComponent_Conditional_10_Template_app_edit_calendar_modal_deleteRequested_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDeleteCalendarRequested($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("calendarId", ctx_r1.selectedCalendarId())("currentUserId", ctx_r1.currentUserId());
  }
}
function MainPageComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-delete-calendar-modal", 20);
    \u0275\u0275listener("cancel", function MainPageComponent_Conditional_11_Template_app_delete_calendar_modal_cancel_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("confirmDelete", function MainPageComponent_Conditional_11_Template_app_delete_calendar_modal_confirmDelete_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirmDeleteCalendar($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("targetId", ctx_r1.selectedCalendarId())("targetName", ctx_r1.selectedCalendarName())("isDeleting", ctx_r1.isDeletingCalendar())("apiError", ctx_r1.deleteCalendarApiError());
  }
}
function MainPageComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-event-selector-modal", 21);
    \u0275\u0275listener("eventSelected", function MainPageComponent_Conditional_12_Template_app_event_selector_modal_eventSelected_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventSelected($event));
    })("closeModal", function MainPageComponent_Conditional_12_Template_app_event_selector_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("events", ctx_r1.events())("calendars", ctx_r1.calendars());
  }
}
function MainPageComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-view-event-modal", 22);
    \u0275\u0275listener("back", function MainPageComponent_Conditional_13_Template_app_view_event_modal_back_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewEventBack());
    })("close", function MainPageComponent_Conditional_13_Template_app_view_event_modal_close_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("editEvent", function MainPageComponent_Conditional_13_Template_app_view_event_modal_editEvent_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditEvent(ctx_r1.selectedEventId()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("eventId", ctx_r1.selectedEventId())("showSuccessMessage", ctx_r1.showEventSuccessMessage());
  }
}
function MainPageComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-event-modal", 23);
    \u0275\u0275listener("close", function MainPageComponent_Conditional_14_Template_app_create_event_modal_close_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("eventCreated", function MainPageComponent_Conditional_14_Template_app_create_event_modal_eventCreated_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventCreated($event));
    });
    \u0275\u0275elementEnd();
  }
}
function MainPageComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-edit-event-modal", 24);
    \u0275\u0275listener("close", function MainPageComponent_Conditional_15_Template_app_edit_event_modal_close_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("eventUpdated", function MainPageComponent_Conditional_15_Template_app_edit_event_modal_eventUpdated_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventUpdated($event));
    })("deleteRequested", function MainPageComponent_Conditional_15_Template_app_edit_event_modal_deleteRequested_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDeleteRequested($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("eventId", ctx_r1.selectedEventId());
  }
}
function MainPageComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-delete-event-modal", 25);
    \u0275\u0275listener("close", function MainPageComponent_Conditional_16_Template_app_delete_event_modal_close_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("eventDeleted", function MainPageComponent_Conditional_16_Template_app_delete_event_modal_eventDeleted_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEventDeleted($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("eventId", ctx_r1.selectedEventId());
  }
}
function MainPageComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-poll-modal", 26);
    \u0275\u0275listener("close", function MainPageComponent_Conditional_17_Template_app_create_poll_modal_close_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("pollCreated", function MainPageComponent_Conditional_17_Template_app_create_poll_modal_pollCreated_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPollCreated($event));
    });
    \u0275\u0275elementEnd();
  }
}
function MainPageComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-poll-selector-modal", 27);
    \u0275\u0275listener("pollSelected", function MainPageComponent_Conditional_18_Template_app_poll_selector_modal_pollSelected_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPollSelected($event));
    })("closeModal", function MainPageComponent_Conditional_18_Template_app_poll_selector_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("polls", ctx_r1.polls())("calendars", ctx_r1.calendars());
  }
}
function MainPageComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-view-poll-modal", 28);
    \u0275\u0275listener("close", function MainPageComponent_Conditional_19_Template_app_view_poll_modal_close_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("edit", function MainPageComponent_Conditional_19_Template_app_view_poll_modal_edit_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditPoll($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pollId", ctx_r1.selectedPollId());
  }
}
function MainPageComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-edit-poll-modal", 29);
    \u0275\u0275listener("close", function MainPageComponent_Conditional_20_Template_app_edit_poll_modal_close_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    })("saved", function MainPageComponent_Conditional_20_Template_app_edit_poll_modal_saved_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPollUpdated($event));
    })("deleted", function MainPageComponent_Conditional_20_Template_app_edit_poll_modal_deleted_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPollDeleted());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pollId", ctx_r1.selectedPollId());
  }
}
var MainPageComponent;
var init_main_page = __esm({
  "src/app/features/dashboard/main-page/main-page.ts"() {
    "use strict";
    init_core();
    init_operators();
    init_esm();
    init_rxjs_interop();
    init_calendar_display();
    init_calendar_options();
    init_display_options();
    init_polls_window();
    init_event_selector_modal();
    init_view_event_modal();
    init_create_event_modal();
    init_edit_event_modal();
    init_delete_event_modal();
    init_create_poll_modal();
    init_poll_selector_modal();
    init_view_poll_modal();
    init_edit_poll_modal();
    init_create_calendar_modal();
    init_calendar_selector_modal();
    init_view_calendar_modal();
    init_edit_calendar_modal();
    init_delete_calendar_modal();
    init_calendar_service();
    init_core();
    MainPageComponent = class _MainPageComponent {
      calendarService = inject(CalendarService);
      destroyRef = inject(DestroyRef);
      // Signals for reactive state
      calendars = signal([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      tags = signal([], ...ngDevMode ? [{ debugName: "tags" }] : []);
      events = signal([], ...ngDevMode ? [{ debugName: "events" }] : []);
      polls = signal([], ...ngDevMode ? [{ debugName: "polls" }] : []);
      selectedCalendarIds = signal([], ...ngDevMode ? [{ debugName: "selectedCalendarIds" }] : []);
      selectedCalendarId = signal(null, ...ngDevMode ? [{ debugName: "selectedCalendarId" }] : []);
      selectedTags = signal([], ...ngDevMode ? [{ debugName: "selectedTags" }] : []);
      // Modal state machine
      modalState = signal("none", ...ngDevMode ? [{ debugName: "modalState" }] : []);
      selectedEventId = signal(null, ...ngDevMode ? [{ debugName: "selectedEventId" }] : []);
      selectedPollId = signal(null, ...ngDevMode ? [{ debugName: "selectedPollId" }] : []);
      showEventSuccessMessage = signal(false, ...ngDevMode ? [{ debugName: "showEventSuccessMessage" }] : []);
      // User info
      userId = null;
      currentUserId = computed(() => this.userId ?? "", ...ngDevMode ? [{ debugName: "currentUserId" }] : []);
      constructor() {
        effect(() => {
          const ids = this.selectedCalendarIds();
          const calendars = this.calendars();
          const calendarIdsToFetch = ids && ids.length > 0 ? ids : calendars.map((c) => c.calendar_id);
          if (calendarIdsToFetch.length === 0) {
            console.log("[MainPage] No calendars available -> cleared events/polls");
            this.events.set([]);
            this.polls.set([]);
            return;
          }
          console.log("[MainPage] Fetching events for calendars:", calendarIdsToFetch);
          this.calendarService.getByCalendarIds(calendarIdsToFetch).pipe(map((filtered) => ({
            events: (filtered.events ?? []).map((e) => {
              const calendar = calendars.find((c) => c.calendar_id === e.calendar_id);
              return __spreadProps(__spreadValues({}, e), { calendar_name: calendar?.name || "Unknown" });
            }),
            polls: filtered.polls ?? []
          })), tap((data) => console.log("[MainPage] Filtered data loaded:", data)), catchError((err) => {
            console.error("[MainPage] getByCalendarIds() FAILED", err);
            return of({ events: [], polls: [] });
          })).subscribe((data) => {
            this.events.set(data.events);
            this.polls.set(data.polls);
          });
        });
      }
      ngOnInit() {
        console.log("[MainPage] ngOnInit fired");
        this.userId = this.parseUserId();
        if (!this.userId) {
          console.warn("[MainPage] No valid user found in localStorage");
          return;
        }
        console.log("[MainPage] Active user_id:", this.userId);
        this.loadCalendarHome();
        window.addEventListener("focus", this.handleWindowFocus);
        interval(3e4).pipe(tap(() => {
          if (this.selectedCalendarIds().length > 0) {
            console.log("[MainPage] Auto-refresh (30s polling)");
            this.refreshEvents();
          }
        }), takeUntilDestroyed(this.destroyRef)).subscribe();
        this.destroyRef.onDestroy(() => {
          console.log("[MainPage] Component destroyed - cleaning up resources");
          window.removeEventListener("focus", this.handleWindowFocus);
        });
      }
      /**
       * Refresh events when user returns to the tab
       */
      handleWindowFocus = () => {
        if (this.selectedCalendarIds().length > 0) {
          console.log("[MainPage] Window focused - refreshing events");
          this.refreshEvents();
        }
      };
      /**
       * Load calendar home (calendars + tags)
       */
      loadCalendarHome() {
        console.log("[MainPage] Calling CalendarService.getHomepage()...");
        this.calendarService.getHomepage().pipe(map((home) => ({
          calendars: this.mapCalendars(home.calendars ?? []),
          tags: (home.tags ?? []).map((t) => String(t))
        })), tap((data) => console.log("[MainPage] Calendar home loaded:", data)), catchError((err) => {
          console.error("[MainPage] getHomepage() FAILED", err);
          return of({ calendars: [], tags: [] });
        })).subscribe((data) => {
          this.calendars.set(data.calendars);
          this.tags.set(data.tags);
        });
      }
      /**
       * Parse user ID from localStorage
       */
      parseUserId() {
        const userString = localStorage.getItem("user");
        if (!userString)
          return null;
        try {
          const parsed = JSON.parse(userString);
          return parsed.user_id ? String(parsed.user_id) : null;
        } catch {
          return null;
        }
      }
      /**
       * Map backend calendar data to DisplayOptions format
       */
      mapCalendars(rawCalendars) {
        return rawCalendars.map((c) => ({
          calendar_id: String(c.calendar_id ?? c.id ?? c.calendarId ?? c._id ?? ""),
          name: String(c.name ?? c.title ?? c.calendar_name ?? "Untitled")
        })).filter((c) => c.calendar_id);
      }
      /**
       * Handle calendar selection changes from DisplayOptions
       */
      onSelectedCalendarIdsChange(ids) {
        console.log("[MainPage] selectedCalendarIdsChange received:", ids);
        this.selectedCalendarIds.set(ids);
      }
      /**
       * Handle calendar created - reload calendar list
       */
      onCalendarCreated(calendarId) {
        console.log("[MainPage] Calendar created:", calendarId);
        this.loadCalendarHome();
        const current = this.selectedCalendarIds();
        if (!current.includes(calendarId)) {
          this.selectedCalendarIds.set([...current, calendarId]);
        } else {
          this.selectedCalendarIds.set([...current]);
        }
      }
      openCalendarSelector() {
        console.log("[MainPage] Opening calendar selector modal");
        this.modalState.set("calendar-selector");
      }
      onCalendarActivated(calendarId) {
        console.log("[MainPage] Calendar activated (double-click):", calendarId);
        this.selectedCalendarId.set(calendarId);
        this.modalState.set("view-calendar");
      }
      onViewCalendarBack() {
        console.log("[MainPage] Back from view-calendar");
        this.modalState.set("calendar-selector");
      }
      openEditCalendar(calendarId) {
        console.log("[MainPage] Opening edit calendar modal:", calendarId);
        this.selectedCalendarId.set(calendarId);
        this.modalState.set("edit-calendar");
      }
      openDeleteCalendar(calendarId) {
        console.log("[MainPage] Opening delete calendar modal:", calendarId);
        this.selectedCalendarId.set(calendarId);
        this.modalState.set("delete-calendar");
      }
      // Delete-calendar modal state
      deleteCalendarApiError = signal("", ...ngDevMode ? [{ debugName: "deleteCalendarApiError" }] : []);
      isDeletingCalendar = signal(false, ...ngDevMode ? [{ debugName: "isDeletingCalendar" }] : []);
      selectedCalendarName = computed(() => {
        const id = this.selectedCalendarId();
        if (!id)
          return "this calendar";
        const found = this.calendars().find((c) => String(c.calendar_id) === String(id));
        return found?.name ?? "this calendar";
      }, ...ngDevMode ? [{ debugName: "selectedCalendarName" }] : []);
      onConfirmDeleteCalendar(calendarId) {
        this.deleteCalendarApiError.set("");
        this.isDeletingCalendar.set(true);
        this.calendarService.delete(calendarId).pipe(take(1)).subscribe({
          next: () => {
            this.isDeletingCalendar.set(false);
            this.loadCalendarHome();
            this.closeAllModals();
          },
          error: (err) => {
            this.isDeletingCalendar.set(false);
            this.deleteCalendarApiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not delete calendar");
          }
        });
      }
      onCalendarUpdated(calendarId) {
        console.log("[MainPage] Calendar updated:", calendarId);
        this.loadCalendarHome();
        this.closeAllModals();
      }
      onDeleteCalendarRequested(calendarId) {
        console.log("[MainPage] Delete calendar requested:", calendarId);
        this.openDeleteCalendar(calendarId);
      }
      /**
       * Handle tag selection changes from DisplayOptions
       */
      onSelectedTagsChange(tags) {
        console.log("[MainPage] selectedTagsChange received:", tags);
        this.selectedTags.set(tags);
      }
      /**
       * Open event selector modal
       */
      openEventSelector() {
        this.modalState.set("event-selector");
      }
      /**
       * When user clicks on event directly in calendar (not from selector)
       */
      onEventClicked(eventId) {
        console.log("[MainPage] Event clicked from calendar:", eventId);
        this.selectedEventId.set(eventId);
        this.modalState.set("view-event");
      }
      /**
       * When user selects an event from the selector
       */
      onEventSelected(eventId) {
        console.log("[MainPage] Event selected from modal:", eventId);
        this.selectedEventId.set(eventId);
        this.modalState.set("view-event");
      }
      /**
       * Back button in view-event modal
       */
      onViewEventBack() {
        console.log("[MainPage] Back from view-event");
        this.modalState.set("event-selector");
      }
      /**
       * Close all modals
       */
      closeAllModals() {
        console.log("[MainPage] Closing all modals");
        this.modalState.set("none");
        this.selectedEventId.set(null);
        this.selectedCalendarId.set(null);
        this.showEventSuccessMessage.set(false);
      }
      /**
       * Open create calendar modal
       */
      openCreateCalendar() {
        console.log("[MainPage] Opening create calendar modal");
        this.modalState.set("create-calendar");
      }
      /**
       * Open create event modal
       */
      openCreateEvent() {
        console.log("[MainPage] Opening create event modal");
        this.modalState.set("create-event");
      }
      /**
       * Open edit event modal
       */
      openEditEvent(eventId) {
        console.log("[MainPage] Opening edit event modal:", eventId);
        this.selectedEventId.set(eventId);
        this.modalState.set("edit-event");
      }
      /**
       * Open delete event modal
       */
      openDeleteEvent(eventId) {
        console.log("[MainPage] Opening delete event modal:", eventId);
        this.selectedEventId.set(eventId);
        this.modalState.set("delete-event");
      }
      /**
       * Handle event created - refresh and close
       */
      onEventCreated(eventId) {
        console.log("[MainPage] Event created:", eventId);
        this.refreshEvents();
      }
      /**
       * Handle event updated - refresh and show view modal
       */
      onEventUpdated(eventId) {
        console.log("[MainPage] Event updated:", eventId);
        this.refreshEvents();
        this.selectedEventId.set(eventId);
        this.showEventSuccessMessage.set(true);
        this.modalState.set("view-event");
      }
      /**
       * Handle event deleted - refresh and close
       */
      onEventDeleted(eventId) {
        console.log("[MainPage] Event deleted:", eventId);
        this.refreshEvents();
      }
      /**
       * Handle delete requested from edit modal
       */
      onDeleteRequested(eventId) {
        console.log("[MainPage] Delete requested from edit modal:", eventId);
        this.openDeleteEvent(eventId);
      }
      /**
       * Refresh events by triggering the effect that loads events
       */
      refreshEvents() {
        console.log("[MainPage] Refreshing events...");
        const currentIds = this.selectedCalendarIds();
        this.selectedCalendarIds.set([...currentIds]);
      }
      openCreatePoll() {
        console.log("[MainPage] Opening create poll modal");
        this.modalState.set("create-poll");
      }
      onPollCreated(pollId) {
        console.log("[MainPage] Poll created:", pollId);
        this.refreshPolls();
      }
      openPollSelector() {
        console.log("[MainPage] Opening poll selector modal");
        this.modalState.set("poll-selector");
      }
      onPollSelected(pollId) {
        console.log("[MainPage] Poll selected:", pollId);
        this.selectedPollId.set(pollId);
        this.modalState.set("view-poll");
      }
      onViewPollFromList(pollId) {
        console.log("[MainPage] Opening poll directly:", pollId);
        this.selectedPollId.set(pollId);
        this.modalState.set("view-poll");
      }
      openEditPoll(pollId) {
        console.log("[MainPage] Opening edit poll modal:", pollId);
        this.selectedPollId.set(pollId);
        this.modalState.set("edit-poll");
      }
      onPollUpdated(pollId) {
        console.log("[MainPage] Poll updated:", pollId);
        this.selectedPollId.set(pollId);
        this.modalState.set("view-poll");
        this.refreshPolls();
      }
      onPollDeleted() {
        console.log("[MainPage] Poll deleted");
        this.selectedPollId.set(null);
        this.closeAllModals();
        this.refreshPolls();
      }
      refreshPolls() {
        console.log("[MainPage] Refreshing polls...");
        const currentIds = this.selectedCalendarIds();
        this.selectedCalendarIds.set([...currentIds]);
      }
      static \u0275fac = function MainPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MainPageComponent)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainPageComponent, selectors: [["app-main-page"]], decls: 21, vars: 19, consts: [[1, "page"], [1, "layout"], [1, "card", "card--calendar", 3, "openEventSelector", "eventClicked", "createEvent", "events", "selectedTags"], [1, "side"], [1, "card", 3, "createCalendar", "viewCalendars"], [1, "card", 3, "selectedCalendarIdsChange", "selectedTagsChange", "calendars", "tags"], [1, "card", 3, "createPoll", "viewPolls", "viewPoll", "polls"], [3, "calendars"], [3, "calendarId"], [3, "calendarId", "currentUserId"], [3, "targetId", "targetName", "isDeleting", "apiError"], [3, "events", "calendars"], [3, "eventId", "showSuccessMessage"], [3, "eventId"], [3, "polls", "calendars"], [3, "pollId"], [3, "close", "calendarCreated"], [3, "calendarActivated", "closeModal", "calendars"], [3, "back", "close", "editCalendar", "calendarId"], [3, "close", "calendarUpdated", "deleteRequested", "calendarId", "currentUserId"], [3, "cancel", "confirmDelete", "targetId", "targetName", "isDeleting", "apiError"], [3, "eventSelected", "closeModal", "events", "calendars"], [3, "back", "close", "editEvent", "eventId", "showSuccessMessage"], [3, "close", "eventCreated"], [3, "close", "eventUpdated", "deleteRequested", "eventId"], [3, "close", "eventDeleted", "eventId"], [3, "close", "pollCreated"], [3, "pollSelected", "closeModal", "polls", "calendars"], [3, "close", "edit", "pollId"], [3, "close", "saved", "deleted", "pollId"]], template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "app-calendar-display", 2);
          \u0275\u0275listener("openEventSelector", function MainPageComponent_Template_app_calendar_display_openEventSelector_2_listener() {
            return ctx.openEventSelector();
          })("eventClicked", function MainPageComponent_Template_app_calendar_display_eventClicked_2_listener($event) {
            return ctx.onEventClicked($event);
          })("createEvent", function MainPageComponent_Template_app_calendar_display_createEvent_2_listener() {
            return ctx.openCreateEvent();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "aside", 3)(4, "app-calendar-options", 4);
          \u0275\u0275listener("createCalendar", function MainPageComponent_Template_app_calendar_options_createCalendar_4_listener() {
            return ctx.openCreateCalendar();
          })("viewCalendars", function MainPageComponent_Template_app_calendar_options_viewCalendars_4_listener() {
            return ctx.openCalendarSelector();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "app-display-options", 5);
          \u0275\u0275listener("selectedCalendarIdsChange", function MainPageComponent_Template_app_display_options_selectedCalendarIdsChange_5_listener($event) {
            return ctx.onSelectedCalendarIdsChange($event);
          })("selectedTagsChange", function MainPageComponent_Template_app_display_options_selectedTagsChange_5_listener($event) {
            return ctx.onSelectedTagsChange($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "app-polls-window", 6);
          \u0275\u0275listener("createPoll", function MainPageComponent_Template_app_polls_window_createPoll_6_listener() {
            return ctx.openCreatePoll();
          })("viewPolls", function MainPageComponent_Template_app_polls_window_viewPolls_6_listener() {
            return ctx.openPollSelector();
          })("viewPoll", function MainPageComponent_Template_app_polls_window_viewPoll_6_listener($event) {
            return ctx.onViewPollFromList($event);
          });
          \u0275\u0275elementEnd()()();
          \u0275\u0275conditionalCreate(7, MainPageComponent_Conditional_7_Template, 1, 0, "app-create-calendar-modal");
          \u0275\u0275conditionalCreate(8, MainPageComponent_Conditional_8_Template, 1, 1, "app-calendar-selector-modal", 7);
          \u0275\u0275conditionalCreate(9, MainPageComponent_Conditional_9_Template, 1, 1, "app-view-calendar-modal", 8);
          \u0275\u0275conditionalCreate(10, MainPageComponent_Conditional_10_Template, 1, 2, "app-edit-calendar-modal", 9);
          \u0275\u0275conditionalCreate(11, MainPageComponent_Conditional_11_Template, 1, 4, "app-delete-calendar-modal", 10);
          \u0275\u0275conditionalCreate(12, MainPageComponent_Conditional_12_Template, 1, 2, "app-event-selector-modal", 11);
          \u0275\u0275conditionalCreate(13, MainPageComponent_Conditional_13_Template, 1, 2, "app-view-event-modal", 12);
          \u0275\u0275conditionalCreate(14, MainPageComponent_Conditional_14_Template, 1, 0, "app-create-event-modal");
          \u0275\u0275conditionalCreate(15, MainPageComponent_Conditional_15_Template, 1, 1, "app-edit-event-modal", 13);
          \u0275\u0275conditionalCreate(16, MainPageComponent_Conditional_16_Template, 1, 1, "app-delete-event-modal", 13);
          \u0275\u0275conditionalCreate(17, MainPageComponent_Conditional_17_Template, 1, 0, "app-create-poll-modal");
          \u0275\u0275conditionalCreate(18, MainPageComponent_Conditional_18_Template, 1, 2, "app-poll-selector-modal", 14);
          \u0275\u0275conditionalCreate(19, MainPageComponent_Conditional_19_Template, 1, 1, "app-view-poll-modal", 15);
          \u0275\u0275conditionalCreate(20, MainPageComponent_Conditional_20_Template, 1, 1, "app-edit-poll-modal", 15);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275property("events", ctx.events())("selectedTags", ctx.selectedTags());
          \u0275\u0275advance(3);
          \u0275\u0275property("calendars", ctx.calendars())("tags", ctx.tags());
          \u0275\u0275advance();
          \u0275\u0275property("polls", ctx.polls());
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "create-calendar" ? 7 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "calendar-selector" ? 8 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "view-calendar" ? 9 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "edit-calendar" ? 10 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "delete-calendar" ? 11 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "event-selector" ? 12 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "view-event" ? 13 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "create-event" ? 14 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "edit-event" ? 15 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "delete-event" ? 16 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "create-poll" ? 17 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "poll-selector" ? 18 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "view-poll" ? 19 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.modalState() === "edit-poll" ? 20 : -1);
        }
      }, dependencies: [
        CalendarDisplay,
        CalendarOptions,
        DisplayOptions,
        PollsWindow,
        EventSelectorModal,
        ViewEventModal,
        CreateEventModal,
        EditEventModal,
        DeleteEventModal,
        CreateCalendarModal,
        CalendarSelectorModal,
        ViewCalendarModal,
        EditCalendarModal,
        DeleteCalendarModal,
        CreatePollModal,
        PollSelectorModal,
        ViewPollModal,
        EditPollModal
      ], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 120px);\n  padding: 20px;\n  background: var(--color-background-primary);\n  color: var(--color-text-primary);\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr minmax(280px, 360px);\n  gap: 20px;\n  align-items: start;\n}\n.side[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-default);\n  background: var(--color-background-primary);\n  border-radius: 10px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.card--calendar[_ngcontent-%COMP%] {\n  min-height: 640px;\n}\n@media (max-width: 900px) {\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card--calendar[_ngcontent-%COMP%] {\n    min-height: 520px;\n  }\n}\n/*# sourceMappingURL=main-page.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainPageComponent, [{
        type: Component,
        args: [{ selector: "app-main-page", standalone: true, imports: [
          CalendarDisplay,
          CalendarOptions,
          DisplayOptions,
          PollsWindow,
          EventSelectorModal,
          ViewEventModal,
          CreateEventModal,
          EditEventModal,
          DeleteEventModal,
          CreateCalendarModal,
          CalendarSelectorModal,
          ViewCalendarModal,
          EditCalendarModal,
          DeleteCalendarModal,
          CreatePollModal,
          PollSelectorModal,
          ViewPollModal,
          EditPollModal
        ], template: `<main class="page">
  <section class="layout">
    <!-- LEFT: Calendar display area -->
    <app-calendar-display 
      class="card card--calendar"
      [events]="events()"
      [selectedTags]="selectedTags()"
      (openEventSelector)="openEventSelector()"
      (eventClicked)="onEventClicked($event)"
      (createEvent)="openCreateEvent()">
    </app-calendar-display>

    <!-- RIGHT: Side panel stack -->
    <aside class="side">
      <app-calendar-options
        class="card"
        (createCalendar)="openCreateCalendar()"
        (viewCalendars)="openCalendarSelector()">
      </app-calendar-options>

      <app-display-options
        class="card"
        [calendars]="calendars()"
        [tags]="tags()"
        (selectedCalendarIdsChange)="onSelectedCalendarIdsChange($event)"
        (selectedTagsChange)="onSelectedTagsChange($event)">
      </app-display-options>

      <app-polls-window
        class="card"
        [polls]="polls()"
        (createPoll)="openCreatePoll()"
        (viewPolls)="openPollSelector()"
        (viewPoll)="onViewPollFromList($event)">
      </app-polls-window>

    </aside>
  </section>

  <!-- Create Calendar Modal -->
  @if (modalState() === 'create-calendar') {
    <app-create-calendar-modal
      (close)="closeAllModals()"
      (calendarCreated)="onCalendarCreated($event)">
    </app-create-calendar-modal>
  }

  <!-- Calendar Selector Modal -->
  @if (modalState() === 'calendar-selector') {
    <app-calendar-selector-modal
      [calendars]="calendars()"
      (calendarActivated)="onCalendarActivated($event)"
      (closeModal)="closeAllModals()">
    </app-calendar-selector-modal>
  }

  <!-- View Calendar Modal (stub for now) -->
  @if (modalState() === 'view-calendar') {
    <app-view-calendar-modal
      [calendarId]="selectedCalendarId()"
      (back)="onViewCalendarBack()"
      (close)="closeAllModals()"
      (editCalendar)="openEditCalendar($event)">
    </app-view-calendar-modal>
  }

  <!-- Edit Calendar Modal -->
  @if (modalState() === 'edit-calendar') {
    <app-edit-calendar-modal
      [calendarId]="selectedCalendarId()!"
      [currentUserId]="currentUserId()"
      (close)="closeAllModals()"
      (calendarUpdated)="onCalendarUpdated($event)"
      (deleteRequested)="onDeleteCalendarRequested($event)">
    </app-edit-calendar-modal>
  }

  <!-- Delete Calendar Modal -->
  @if (modalState() === 'delete-calendar') {
    <app-delete-calendar-modal
      [targetId]="selectedCalendarId()"
      [targetName]="selectedCalendarName()"
      [isDeleting]="isDeletingCalendar()"
      [apiError]="deleteCalendarApiError()"
      (cancel)="closeAllModals()"
      (confirmDelete)="onConfirmDeleteCalendar($event)">
    </app-delete-calendar-modal>
  }

  <!-- Event Selector Modal -->
  @if (modalState() === 'event-selector') {
    <app-event-selector-modal
      [events]="events()"
      [calendars]="calendars()"
      (eventSelected)="onEventSelected($event)"
      (closeModal)="closeAllModals()">
    </app-event-selector-modal>
  }

  <!-- View Event Modal -->
  @if (modalState() === 'view-event') {
    <app-view-event-modal
      [eventId]="selectedEventId()"
      [showSuccessMessage]="showEventSuccessMessage()"
      (back)="onViewEventBack()"
      (close)="closeAllModals()"
      (editEvent)="openEditEvent(selectedEventId()!)">
    </app-view-event-modal>
  }

  <!-- Create Event Modal -->
  @if (modalState() === 'create-event') {
    <app-create-event-modal
      (close)="closeAllModals()"
      (eventCreated)="onEventCreated($event)">
    </app-create-event-modal>
  }

  <!-- Edit Event Modal -->
  @if (modalState() === 'edit-event') {
    <app-edit-event-modal
      [eventId]="selectedEventId()!"
      (close)="closeAllModals()"
      (eventUpdated)="onEventUpdated($event)"
      (deleteRequested)="onDeleteRequested($event)">
    </app-edit-event-modal>
  }

  <!-- Delete Event Modal -->
  @if (modalState() === 'delete-event') {
    <app-delete-event-modal
      [eventId]="selectedEventId()!"
      (close)="closeAllModals()"
      (eventDeleted)="onEventDeleted($event)">
    </app-delete-event-modal>
  }

  <!-- Create Poll Modal -->
@if (modalState() === 'create-poll') {
  <app-create-poll-modal
    (close)="closeAllModals()"
    (pollCreated)="onPollCreated($event)">
  </app-create-poll-modal>
}

<!-- Poll Selector Modal -->
@if (modalState() === 'poll-selector') {
  <app-poll-selector-modal
    [polls]="polls()"
    [calendars]="calendars()"
    (pollSelected)="onPollSelected($event)"
    (closeModal)="closeAllModals()">
  </app-poll-selector-modal>
}

<!-- View Poll Modal -->
@if (modalState() === 'view-poll') {
  <app-view-poll-modal
    [pollId]="selectedPollId()!"
    (close)="closeAllModals()"
    (edit)="openEditPoll($event)">
  </app-view-poll-modal>
}

<!-- Edit Poll Modal -->
@if (modalState() === 'edit-poll') {
  <app-edit-poll-modal
    [pollId]="selectedPollId()!"
    (close)="closeAllModals()"
    (saved)="onPollUpdated($event)"
    (deleted)="onPollDeleted()">
  </app-edit-poll-modal>
}

</main>
`, styles: ["/* src/app/features/dashboard/main-page/main-page.css */\n.page {\n  min-height: calc(100vh - 120px);\n  padding: 20px;\n  background: var(--color-background-primary);\n  color: var(--color-text-primary);\n}\n.layout {\n  display: grid;\n  grid-template-columns: 1fr minmax(280px, 360px);\n  gap: 20px;\n  align-items: start;\n}\n.side {\n  display: grid;\n  gap: 20px;\n}\n.card {\n  border: 1px solid var(--color-border-default);\n  background: var(--color-background-primary);\n  border-radius: 10px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.card--calendar {\n  min-height: 640px;\n}\n@media (max-width: 900px) {\n  .layout {\n    grid-template-columns: 1fr;\n  }\n  .card--calendar {\n    min-height: 520px;\n  }\n}\n/*# sourceMappingURL=main-page.css.map */\n"] }]
      }], () => [], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainPageComponent, { className: "MainPageComponent", filePath: "src/app/features/dashboard/main-page/main-page.ts", lineNumber: 76 });
    })();
  }
});

// src/app/features/dashboard/main-page/main-page.spec.ts
var require_main_page_spec = __commonJS({
  "src/app/features/dashboard/main-page/main-page.spec.ts"(exports) {
    init_testing();
    init_main_page();
    init_router();
    init_esm();
    init_angular_calendar();
    init_date_fns();
    describe("MainPageComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [MainPageComponent],
          providers: [
            // ✅ Fix: RouterLink requires router DI (ActivatedRoute, etc.)
            provideRouter([]),
            {
              provide: ActivatedRoute,
              useValue: {
                snapshot: { paramMap: convertToParamMap({}) },
                paramMap: of(convertToParamMap({})),
                queryParamMap: of(convertToParamMap({})),
                params: of({}),
                queryParams: of({}),
                data: of({})
              }
            },
            // ✅ Keep these for angular-calendar views
            { provide: DateAdapter, useFactory: adapterFactory },
            { provide: CalendarDateFormatter, useClass: CalendarNativeDateFormatter },
            CalendarUtils
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(MainPageComponent);
        component = fixture.componentInstance;
        localStorage.setItem("user", JSON.stringify({ user_id: "test-user" }));
        fixture.detectChanges();
        yield fixture.whenStable();
      }));
      afterEach(() => {
        localStorage.clear();
        fixture?.destroy();
      });
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_main_page_spec();
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v21.0.8
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=spec-app-features-dashboard-main-page-main-page.spec.js.map
