import {
  DeleteEventModal,
  init_delete_event_modal
} from "./chunk-MTWOY5DO.js";
import {
  EventService,
  init_event_service
} from "./chunk-UAW7UYFJ.js";
import "./chunk-WAEIODOV.js";
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
  init_esm,
  of,
  throwError
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS
} from "./chunk-FYSHOF5T.js";

// src/app/features/event/delete-event-modal/delete-event-modal.spec.ts
var require_delete_event_modal_spec = __commonJS({
  "src/app/features/event/delete-event-modal/delete-event-modal.spec.ts"(exports) {
    init_testing();
    init_esm();
    init_delete_event_modal();
    init_calendar_service();
    init_event_service();
    describe("DeleteEventModal", () => {
      const mockEvent = {
        event_id: "e1",
        calendar_id: "1",
        title: "Loaded Event",
        start_time: "2026-01-26T10:15:00",
        end_time: "2026-01-26T11:00:00",
        description: "Loaded desc",
        notes: "Loaded notes",
        tags: []
      };
      const calendarServiceStub = {
        getByEventIds: jasmine.createSpy("getByEventIds"),
        getHomepage: jasmine.createSpy("getHomepage")
      };
      const eventServiceStub = {
        delete: jasmine.createSpy("delete")
      };
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DeleteEventModal],
          providers: [
            { provide: CalendarService, useValue: calendarServiceStub },
            { provide: EventService, useValue: eventServiceStub }
          ]
        }).compileComponents();
        calendarServiceStub.getByEventIds.calls.reset();
        calendarServiceStub.getHomepage.calls.reset();
        eventServiceStub.delete.calls.reset();
        calendarServiceStub.getByEventIds.and.returnValue(of({ events: [mockEvent] }));
        calendarServiceStub.getHomepage.and.returnValue(of({ calendars: [{ calendar_id: "1", name: "My Admin Calendar" }] }));
        eventServiceStub.delete.and.returnValue(of(true));
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify({ user_id: "u1" }));
      }));
      afterEach(() => {
        localStorage.clear();
      });
      function createWithEventId(eventId = "e1") {
        const fixture = TestBed.createComponent(DeleteEventModal);
        const component = fixture.componentInstance;
        fixture.componentRef.setInput("eventId", eventId);
        fixture.detectChanges();
        return { fixture, component };
      }
      it("should create", () => {
        const { component } = createWithEventId("e1");
        expect(component).toBeTruthy();
      });
      it("ngOnInit should load the event via CalendarService and populate eventName/calendarName", () => {
        const { component } = createWithEventId("e1");
        expect(component.apiError()).toBe("");
        expect(calendarServiceStub.getByEventIds).toHaveBeenCalledOnceWith(["e1"]);
        expect(component.eventName()).toBe("Loaded Event");
        expect(calendarServiceStub.getHomepage).toHaveBeenCalledTimes(1);
        expect(component.calendarName()).toBe("My Admin Calendar");
      });
      it("ngOnInit should set apiError when no event is returned", () => {
        calendarServiceStub.getByEventIds.and.returnValue(of({ events: [] }));
        const { component } = createWithEventId("e1");
        expect(component.apiError()).toBe("Event not found");
      });
      it("confirmDelete should set apiError when missing user id and NOT call delete", () => {
        localStorage.removeItem("user");
        const { component } = createWithEventId("e1");
        component.confirmDelete();
        expect(component.apiError()).toContain("Not logged in");
        expect(eventServiceStub.delete).not.toHaveBeenCalled();
        expect(component.isDeleting()).toBe(false);
      });
      it("confirmDelete should call EventService.delete with correct dto and emit eventDeleted on success", () => {
        const { component } = createWithEventId("e1");
        const eventDeletedEmitSpy = spyOn(component.eventDeleted, "emit");
        const closeEmitSpy = spyOn(component.close, "emit");
        component.confirmDelete();
        expect(eventServiceStub.delete).toHaveBeenCalledTimes(1);
        const [eventIdArg, dtoArg] = eventServiceStub.delete.calls.mostRecent().args;
        expect(eventIdArg).toBe("e1");
        expect(dtoArg.user_id).toBe("u1");
        expect(dtoArg.calendar_id).toBe("1");
        expect(eventDeletedEmitSpy).toHaveBeenCalledOnceWith("e1");
        expect(closeEmitSpy).toHaveBeenCalledTimes(1);
        expect(component.apiError()).toBe("");
        expect(component.isDeleting()).toBe(false);
      });
      it("confirmDelete should show apiError when delete fails", () => {
        eventServiceStub.delete.and.returnValue(throwError(() => new Error("boom")));
        const { component } = createWithEventId("e1");
        component.confirmDelete();
        expect(component.apiError()).toBe("boom");
        expect(component.isDeleting()).toBe(false);
      });
      it("onClose should emit close event", () => {
        const fixture = TestBed.createComponent(DeleteEventModal);
        const component = fixture.componentInstance;
        const closeEmitSpy = spyOn(component.close, "emit");
        component.onClose();
        expect(closeEmitSpy).toHaveBeenCalledTimes(1);
      });
    });
  }
});
export default require_delete_event_modal_spec();
//# sourceMappingURL=spec-app-features-event-delete-event-modal-delete-event-modal.spec.js.map
