import {
  MainFooter,
  init_main_footer
} from "./chunk-BBTXCWSQ.js";
import "./chunk-7G4T4RDU.js";
import {
  InviteService,
  init_invite_service
} from "./chunk-3ZUE2ORM.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  init_forms
} from "./chunk-RYBDXJGT.js";
import {
  ActivatedRoute,
  RouterLink,
  init_router
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
  init_core,
  init_esm,
  inject,
  of,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/shared/models/invites/invite-details-response.dto.ts
function isEventInvite(details) {
  return "event_id" in details;
}
var init_invite_details_response_dto = __esm({
  "src/app/shared/models/invites/invite-details-response.dto.ts"() {
    "use strict";
  }
});

// src/app/features/event/view-event/view-event.ts
function ViewEvent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
function ViewEvent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Loading event...");
    \u0275\u0275elementEnd();
  }
}
function ViewEvent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "label", 14);
    \u0275\u0275text(3, "Event Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "div", 17)(7, "label", 14);
    \u0275\u0275text(8, "Start date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17)(11, "label", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "label", 14);
    \u0275\u0275text(16, "End date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17)(19, "label", 14);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 22)(23, "label", 14);
    \u0275\u0275text(24, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 24)(27, "label", 14);
    \u0275\u0275text(28, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "textarea", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("Start time (", ctx_r0.getTimezoneAbbr(), ")");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("End time (", ctx_r0.getTimezoneAbbr(), ")");
  }
}
var ViewEvent;
var init_view_event = __esm({
  "src/app/features/event/view-event/view-event.ts"() {
    "use strict";
    init_core();
    init_common();
    init_forms();
    init_router();
    init_invite_service();
    init_main_footer();
    init_invite_details_response_dto();
    init_core();
    init_forms();
    ViewEvent = class _ViewEvent {
      fb = inject(FormBuilder);
      route = inject(ActivatedRoute);
      inviteService = inject(InviteService);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
      form = this.fb.group({
        title: [{ value: "", disabled: true }],
        startDate: [{ value: "", disabled: true }],
        startTime: [{ value: "", disabled: true }],
        endDate: [{ value: "", disabled: true }],
        endTime: [{ value: "", disabled: true }],
        description: [{ value: "", disabled: true }],
        notes: [{ value: "", disabled: true }]
      });
      ngOnInit() {
        this.form.disable({ emitEvent: false });
        const token = this.route.snapshot.queryParamMap.get("token");
        console.log("[ViewEvent] Token from URL:", token);
        if (token) {
          this.loadEventByToken(token);
        } else {
          this.apiError.set("Missing invite token. Please use the invite link provided.");
        }
      }
      loadEventByToken(token) {
        this.apiError.set("");
        this.isLoading.set(true);
        console.log("[ViewEvent] Loading event with token:", token);
        this.inviteService.getInviteDetails(token).subscribe({
          next: (details) => {
            console.log("[ViewEvent] Received details:", details);
            console.log("[ViewEvent] Before setting isLoading to false, isLoading =", this.isLoading());
            this.isLoading.set(false);
            console.log("[ViewEvent] After setting isLoading to false, isLoading =", this.isLoading());
            if (!details) {
              this.apiError.set("Event not found");
              return;
            }
            if (isEventInvite(details)) {
              console.log("[ViewEvent] Is event invite, displaying...");
              this.displayEvent(details);
            } else {
              console.log("[ViewEvent] Not an event invite");
              this.apiError.set("Invalid event invite link");
            }
          },
          error: (err) => {
            console.error("[ViewEvent] Error loading event:", err);
            this.isLoading.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not load event");
          }
        });
      }
      displayEvent(event) {
        console.log("[ViewEvent] displayEvent called with:", event);
        const start = this.isoToDateTime(event.start_time);
        const end = this.isoToDateTime(event.end_time);
        console.log("[ViewEvent] Parsed times - start:", start, "end:", end);
        this.form.patchValue({
          title: event.title ?? "",
          startDate: start.date,
          startTime: start.time,
          endDate: end.date,
          endTime: end.time,
          description: event.description ?? "",
          notes: event.notes ?? ""
        }, { emitEvent: false });
        this.form.disable({ emitEvent: false });
        console.log("[ViewEvent] Form patched and disabled. Form value:", this.form.value);
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
      static \u0275fac = function ViewEvent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ViewEvent)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewEvent, selectors: [["app-view-event"]], decls: 18, vars: 3, consts: [["role", "banner", 1, "app-navbar", "navbar"], [1, "container-fluid", "px-3", "py-2"], [1, "navbar-brand", "mb-0", "h1"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-white", "me-2"], ["routerLink", "/create-account", 1, "btn", "btn-outline-light", "btn-sm"], [1, "container", "py-4", "app-page"], [1, "h3", "mb-3"], [1, "card", "app-card", "shadow-sm"], [1, "card-body"], [1, "alert", "alert-danger", "mb-3"], [1, "alert", "alert-info"], [3, "formGroup"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "title", 1, "form-control", "app-input"], [1, "row", "g-3"], [1, "col-12", "col-md-6"], ["type", "date", "formControlName", "startDate", 1, "form-control", "app-input"], ["type", "time", "formControlName", "startTime", 1, "form-control", "app-input"], ["type", "date", "formControlName", "endDate", 1, "form-control", "app-input"], ["type", "time", "formControlName", "endTime", 1, "form-control", "app-input"], [1, "mt-3", "mb-3"], ["rows", "4", "formControlName", "description", 1, "form-control", "app-textarea"], [1, "mb-2"], ["rows", "4", "formControlName", "notes", 1, "form-control", "app-textarea"]], template: function ViewEvent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "span", 2);
          \u0275\u0275text(3, "CalendarIO");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "div", 3)(5, "span", 4);
          \u0275\u0275text(6, "Enjoying CalendarIO?");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(7, "a", 5);
          \u0275\u0275text(8, " Create account here ");
          \u0275\u0275elementEnd()()()();
          \u0275\u0275elementStart(9, "div", 6)(10, "h1", 7);
          \u0275\u0275text(11, "Event Details");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
          \u0275\u0275conditionalCreate(14, ViewEvent_Conditional_14_Template, 2, 1, "div", 10);
          \u0275\u0275conditionalCreate(15, ViewEvent_Conditional_15_Template, 2, 0, "div", 11);
          \u0275\u0275conditionalCreate(16, ViewEvent_Conditional_16_Template, 30, 3, "div", 12);
          \u0275\u0275elementEnd()()();
          \u0275\u0275element(17, "app-main-footer");
        }
        if (rf & 2) {
          \u0275\u0275advance(14);
          \u0275\u0275conditional(ctx.apiError() ? 14 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.isLoading() ? 15 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(!ctx.isLoading() && !ctx.apiError() ? 16 : -1);
        }
      }, dependencies: [CommonModule, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, MainFooter], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=view-event.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewEvent, [{
        type: Component,
        args: [{ selector: "app-view-event", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, MainFooter], template: '<header class="app-navbar navbar" role="banner">\n  <div class="container-fluid px-3 py-2">\n    <span class="navbar-brand mb-0 h1">CalendarIO</span>\n\n    <div class="d-flex align-items-center gap-2">\n      <span class="text-white me-2">Enjoying CalendarIO?</span>\n      <a class="btn btn-outline-light btn-sm" routerLink="/create-account">\n        Create account here\n      </a>\n    </div>\n  </div>\n</header>\n\n<div class="container py-4 app-page">\n  <h1 class="h3 mb-3">Event Details</h1>\n\n  <div class="card app-card shadow-sm">\n    <div class="card-body">\n      @if (apiError()) {\n        <div class="alert alert-danger mb-3">\n          {{ apiError() }}\n        </div>\n      }\n\n      @if (isLoading()) {\n        <div class="alert alert-info">Loading event...</div>\n      }\n\n      @if (!isLoading() && !apiError()) {\n        <div [formGroup]="form">\n          <!-- Title -->\n          <div class="mb-3">\n            <label class="form-label">Event Title</label>\n            <input\n              type="text"\n              class="form-control app-input"\n              formControlName="title"\n            />\n          </div>\n\n          <!-- Dates / times -->\n          <div class="row g-3">\n            <div class="col-12 col-md-6">\n              <label class="form-label">Start date</label>\n              <input\n                type="date"\n                class="form-control app-input"\n                formControlName="startDate"\n              />\n            </div>\n\n            <div class="col-12 col-md-6">\n              <label class="form-label">Start time ({{ getTimezoneAbbr() }})</label>\n              <input\n                type="time"\n                class="form-control app-input"\n                formControlName="startTime"\n              />\n            </div>\n\n            <div class="col-12 col-md-6">\n              <label class="form-label">End date</label>\n              <input\n                type="date"\n                class="form-control app-input"\n                formControlName="endDate"\n              />\n            </div>\n\n            <div class="col-12 col-md-6">\n              <label class="form-label">End time ({{ getTimezoneAbbr() }})</label>\n              <input\n                type="time"\n                class="form-control app-input"\n                formControlName="endTime"\n              />\n            </div>\n          </div>\n\n          <!-- Description -->\n          <div class="mt-3 mb-3">\n            <label class="form-label">Description</label>\n            <textarea\n              rows="4"\n              class="form-control app-textarea"\n              formControlName="description"\n            ></textarea>\n          </div>\n\n          <!-- Notes -->\n          <div class="mb-2">\n            <label class="form-label">Notes</label>\n            <textarea\n              rows="4"\n              class="form-control app-textarea"\n              formControlName="notes"\n            ></textarea>\n          </div>\n        </div>\n      }\n    </div>\n  </div>\n</div>\n\n<app-main-footer></app-main-footer>\n', styles: ["/* src/app/features/event/view-event/view-event.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.container {\n  flex: 1;\n}\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=view-event.css.map */\n"] }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewEvent, { className: "ViewEvent", filePath: "src/app/features/event/view-event/view-event.ts", lineNumber: 23 });
    })();
  }
});

// src/app/features/event/view-event/view-event.spec.ts
var require_view_event_spec = __commonJS({
  "src/app/features/event/view-event/view-event.spec.ts"(exports) {
    init_testing();
    init_router();
    init_esm();
    init_view_event();
    init_invite_service();
    describe("ViewEvent", () => {
      const toLocalDateTime = (iso) => {
        if (!iso)
          return { date: "", time: "" };
        const hasTz = /([zZ]|[+\-]\d{2}:\d{2})$/.test(iso);
        const d = new Date(hasTz ? iso : `${iso}Z`);
        if (isNaN(d.getTime()))
          return { date: "", time: "" };
        const pad = (n) => String(n).padStart(2, "0");
        return {
          date: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
          time: `${pad(d.getHours())}:${pad(d.getMinutes())}`
        };
      };
      const mockEvent = {
        event_id: "e1",
        calendar_id: "2",
        title: "Team Meeting",
        // no timezone provided -> component assumes UTC and converts to local
        start_time: "2026-01-26T10:15:00",
        end_time: "2026-01-26T11:00:00",
        description: "Discuss roadmap",
        notes: "Bring notes",
        tags: ["work"]
      };
      const makeActivatedRouteStub = (token) => ({
        snapshot: {
          queryParamMap: {
            get: (key) => key === "token" ? token : null
          }
        }
      });
      const makeInviteServiceStub = (result$) => ({
        getInviteDetails: () => result$
      });
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ViewEvent],
          providers: [
            { provide: ActivatedRoute, useValue: makeActivatedRouteStub(null) },
            { provide: InviteService, useValue: makeInviteServiceStub(of(null)) }
          ]
        }).compileComponents();
      }));
      it("ngOnInit should set apiError when token is missing", () => {
        TestBed.overrideProvider(ActivatedRoute, {
          useValue: makeActivatedRouteStub(null)
        });
        const fixture = TestBed.createComponent(ViewEvent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.apiError()).toBe("Missing invite token. Please use the invite link provided.");
        expect(component.isLoading()).toBe(false);
        expect(component.form.disabled).toBe(true);
      });
      it("ngOnInit should load event by token and populate the form (event invite)", () => {
        TestBed.overrideProvider(ActivatedRoute, {
          useValue: makeActivatedRouteStub("tok-123")
        });
        TestBed.overrideProvider(InviteService, {
          // Should satisfy isEventInvite for typical guards
          useValue: makeInviteServiceStub(of(mockEvent))
        });
        const fixture = TestBed.createComponent(ViewEvent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        const expectedStart = toLocalDateTime(mockEvent.start_time);
        const expectedEnd = toLocalDateTime(mockEvent.end_time);
        expect(component.apiError()).toBe("");
        expect(component.isLoading()).toBe(false);
        expect(component.form.disabled).toBe(true);
        expect(component.form.get("title").value).toBe("Team Meeting");
        expect(component.form.get("startDate").value).toBe(expectedStart.date);
        expect(component.form.get("startTime").value).toBe(expectedStart.time);
        expect(component.form.get("endDate").value).toBe(expectedEnd.date);
        expect(component.form.get("endTime").value).toBe(expectedEnd.time);
        expect(component.form.get("description").value).toBe("Discuss roadmap");
        expect(component.form.get("notes").value).toBe("Bring notes");
      });
      it('ngOnInit should set apiError to "Event not found" when invite details are null/undefined', () => {
        TestBed.overrideProvider(ActivatedRoute, {
          useValue: makeActivatedRouteStub("tok-123")
        });
        TestBed.overrideProvider(InviteService, {
          useValue: makeInviteServiceStub(of(null))
        });
        const fixture = TestBed.createComponent(ViewEvent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.apiError()).toBe("Event not found");
        expect(component.isLoading()).toBe(false);
        expect(component.form.disabled).toBe(true);
      });
      it('ngOnInit should set apiError to "Invalid event invite link" for non-event invite details', () => {
        TestBed.overrideProvider(ActivatedRoute, {
          useValue: makeActivatedRouteStub("tok-123")
        });
        const nonEventInviteDetails = { poll_id: "p1", title: "Some Poll" };
        TestBed.overrideProvider(InviteService, {
          useValue: makeInviteServiceStub(of(nonEventInviteDetails))
        });
        const fixture = TestBed.createComponent(ViewEvent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.apiError()).toBe("Invalid event invite link");
        expect(component.isLoading()).toBe(false);
        expect(component.form.disabled).toBe(true);
      });
      it("ngOnInit should set apiError using err.error.message when the API call fails", () => {
        TestBed.overrideProvider(ActivatedRoute, {
          useValue: makeActivatedRouteStub("tok-123")
        });
        const err = { error: { message: "boom" } };
        TestBed.overrideProvider(InviteService, {
          useValue: makeInviteServiceStub(throwError(() => err))
        });
        const fixture = TestBed.createComponent(ViewEvent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.apiError()).toBe("boom");
        expect(component.isLoading()).toBe(false);
        expect(component.form.disabled).toBe(true);
      });
    });
  }
});
export default require_view_event_spec();
//# sourceMappingURL=spec-app-features-event-view-event-view-event.spec.js.map
