import {
  CreateEventModal,
  init_create_event_modal
} from "./chunk-PRZLOFED.js";
import {
  EventService,
  init_event_service
} from "./chunk-UAW7UYFJ.js";
import "./chunk-WAEIODOV.js";
import "./chunk-RYBDXJGT.js";
import "./chunk-OHTVP4IB.js";
import {
  CalendarService,
  init_calendar_service
} from "./chunk-NXRHEMFL.js";
import "./chunk-JRC6SCPK.js";
import "./chunk-DD5LJ5SS.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import "./chunk-EGU5GLVS.js";
import "./chunk-52DSKCZD.js";
import {
  Subject,
  init_esm,
  of,
  throwError
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS
} from "./chunk-FYSHOF5T.js";

// src/app/features/event/create-event-modal/create-event-modal.spec.ts
var require_create_event_modal_spec = __commonJS({
  "src/app/features/event/create-event-modal/create-event-modal.spec.ts"(exports) {
    init_testing();
    init_esm();
    init_create_event_modal();
    init_calendar_service();
    init_event_service();
    describe("CreateEventModal", () => {
      let fixture;
      let component;
      const calendarServiceStub = {
        getHomepage: jasmine.createSpy("getHomepage")
      };
      const eventServiceStub = {
        create: jasmine.createSpy("create")
      };
      beforeEach(() => __async(null, null, function* () {
        localStorage.clear();
        calendarServiceStub.getHomepage.calls.reset();
        eventServiceStub.create.calls.reset();
        yield TestBed.configureTestingModule({
          imports: [CreateEventModal],
          providers: [
            { provide: CalendarService, useValue: calendarServiceStub },
            { provide: EventService, useValue: eventServiceStub }
          ]
        }).compileComponents();
      }));
      function createComponentWithCalendars(calendars) {
        calendarServiceStub.getHomepage.and.returnValue(of({ calendars }));
        fixture = TestBed.createComponent(CreateEventModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }
      it("should create", () => {
        createComponentWithCalendars([]);
        expect(component).toBeTruthy();
      });
      it("ngOnInit should set default calendarId to first admin calendar", () => {
        createComponentWithCalendars([
          { calendar_id: "1", name: "Admin Cal", is_admin: true },
          { calendar_id: "2", name: "User Cal", is_admin: false }
        ]);
        expect(component.form.get("calendarId")?.value).toBe("1");
        expect(component.apiError()).toBe("");
      });
      it("ngOnInit should fallback to first calendar when no admin calendars exist", () => {
        createComponentWithCalendars([
          { calendar_id: "2", name: "User Cal A", is_admin: false },
          { calendar_id: "3", name: "User Cal B", is_admin: false }
        ]);
        expect(component.form.get("calendarId")?.value).toBe("2");
        expect(component.apiError()).toBe("");
      });
      it("submit should NOT call create when form is invalid", () => {
        createComponentWithCalendars([{ calendar_id: "1", name: "Admin Cal", is_admin: true }]);
        component.form.patchValue({
          calendarId: "",
          // required
          title: "",
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        });
        component.submit();
        expect(component.form.invalid).toBe(true);
        expect(eventServiceStub.create).not.toHaveBeenCalled();
        expect(component.form.get("title")?.touched).toBe(true);
      });
      it("submit should set apiError when missing user id and NOT call create", () => {
        createComponentWithCalendars([{ calendar_id: "1", name: "Admin Cal", is_admin: true }]);
        localStorage.removeItem("user");
        component.form.patchValue({
          calendarId: "1",
          title: "Test",
          startDate: "2026-01-26",
          startTime: "10:00",
          endDate: "2026-01-26",
          endTime: "11:00",
          description: "",
          notes: ""
        });
        component.submit();
        expect(component.apiError()).toContain("Not logged in");
        expect(eventServiceStub.create).not.toHaveBeenCalled();
      });
      it("submit should set apiError when end <= start and NOT call create", () => {
        createComponentWithCalendars([{ calendar_id: "1", name: "Admin Cal", is_admin: true }]);
        localStorage.setItem("user", JSON.stringify({ user_id: "u1" }));
        component.form.patchValue({
          calendarId: "1",
          title: "Test",
          startDate: "2026-01-26",
          startTime: "10:00",
          endDate: "2026-01-26",
          endTime: "10:00",
          // equal -> invalid
          description: "",
          notes: ""
        });
        component.submit();
        expect(component.apiError()).toBe("End must be after start.");
        expect(eventServiceStub.create).not.toHaveBeenCalled();
      });
      it("submit should show apiError when create fails", () => {
        createComponentWithCalendars([{ calendar_id: "1", name: "Admin Cal", is_admin: true }]);
        localStorage.setItem("user", JSON.stringify({ user_id: "u1" }));
        eventServiceStub.create.and.returnValue(throwError(() => ({ error: { message: "Could not create event" } })));
        component.form.patchValue({
          calendarId: "1",
          title: "Test",
          startDate: "2026-01-26",
          startTime: "10:00",
          endDate: "2026-01-26",
          endTime: "11:00",
          description: "d",
          notes: "n"
        });
        component.submit();
        expect(component.apiError()).toBe("Could not create event");
        expect(component.isSubmitting()).toBe(false);
      });
      it("submit should call EventService.create with CreateEventDTO and emit eventCreated on success", () => {
        createComponentWithCalendars([{ calendar_id: "1", name: "Admin Cal", is_admin: true }]);
        localStorage.setItem("user", JSON.stringify({ user_id: "u1" }));
        const created$ = new Subject();
        eventServiceStub.create.and.returnValue(created$.asObservable());
        const eventCreatedSpy = spyOn(component.eventCreated, "emit");
        const closeSpy = spyOn(component.close, "emit");
        component.form.patchValue({
          calendarId: "1",
          title: "Test Title",
          startDate: "2026-01-26",
          startTime: "10:00",
          endDate: "2026-01-26",
          endTime: "11:00",
          description: "desc",
          notes: "notes"
        });
        component.tags.set(["work", "school"]);
        component.submit();
        expect(component.isSubmitting()).toBe(true);
        expect(eventServiceStub.create).toHaveBeenCalledTimes(1);
        const dtoArg = eventServiceStub.create.calls.mostRecent().args[0];
        const expectedStartIso = (/* @__PURE__ */ new Date("2026-01-26T10:00:00")).toISOString();
        const expectedEndIso = (/* @__PURE__ */ new Date("2026-01-26T11:00:00")).toISOString();
        expect(dtoArg).toEqual(jasmine.objectContaining({
          user_id: "u1",
          calendar_id: "1",
          title: "Test Title",
          start_time: expectedStartIso,
          end_time: expectedEndIso,
          description: "desc",
          notes: "notes",
          tags: ["work", "school"]
        }));
        created$.next({ event_id: "e123" });
        created$.complete();
        fixture.detectChanges();
        expect(component.isSubmitting()).toBe(false);
        expect(eventCreatedSpy).toHaveBeenCalledOnceWith("e123");
        expect(closeSpy).toHaveBeenCalledTimes(1);
        expect(component.apiError()).toBe("");
      });
    });
  }
});
export default require_create_event_modal_spec();
//# sourceMappingURL=spec-app-features-event-create-event-modal-create-event-modal.spec.js.map
