import {
  EditEventModal,
  init_edit_event_modal
} from "./chunk-OQYAVXN5.js";
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
  init_esm,
  of,
  throwError
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS
} from "./chunk-FYSHOF5T.js";

// src/app/features/event/edit-event-modal/edit-event-modal.spec.ts
var require_edit_event_modal_spec = __commonJS({
  "src/app/features/event/edit-event-modal/edit-event-modal.spec.ts"(exports) {
    init_testing();
    init_edit_event_modal();
    init_esm();
    init_calendar_service();
    init_event_service();
    describe("EditEventModal", () => {
      const mockEvent = {
        event_id: "e1",
        calendar_id: "2",
        title: "Loaded Event",
        start_time: "2026-01-26T16:15:00Z",
        end_time: "2026-01-26T17:00:00Z",
        description: "Loaded desc",
        notes: "Loaded notes",
        tags: ["work"]
      };
      let calendarServiceStub;
      let eventServiceStub;
      beforeEach(() => __async(null, null, function* () {
        calendarServiceStub = {
          getByEventIds: jasmine.createSpy("getByEventIds").and.returnValue(of({ events: [mockEvent] })),
          // ngOnInit() calls loadCalendars() which calls getHomepage(); not fatal, but must exist
          getHomepage: jasmine.createSpy("getHomepage").and.returnValue(of({ calendars: [] }))
        };
        eventServiceStub = {
          update: jasmine.createSpy("update").and.returnValue(of(mockEvent))
        };
        yield TestBed.configureTestingModule({
          imports: [EditEventModal],
          providers: [
            { provide: CalendarService, useValue: calendarServiceStub },
            { provide: EventService, useValue: eventServiceStub }
          ]
        }).compileComponents();
      }));
      it("ngOnInit should load the event via CalendarService and populate the form", () => {
        const fixture = TestBed.createComponent(EditEventModal);
        const component = fixture.componentInstance;
        fixture.componentRef.setInput("eventId", "e1");
        fixture.detectChanges();
        expect(component.apiError()).toBe("");
        expect(component.form.get("calendarId")?.value).toBe("2");
        expect(component.form.get("title")?.value).toBe("Loaded Event");
        expect(component.form.get("startDate")?.value).toBe("2026-01-26");
        expect(component.form.get("startTime")?.value).toBe("10:15");
        expect(component.form.get("endDate")?.value).toBe("2026-01-26");
        expect(component.form.get("endTime")?.value).toBe("11:00");
        expect(component.form.get("description")?.value).toBe("Loaded desc");
        expect(component.form.get("notes")?.value).toBe("Loaded notes");
        expect(calendarServiceStub.getByEventIds).toHaveBeenCalledOnceWith(["e1"]);
      });
      it('ngOnInit should set apiError to "Event not found" when no event is returned', () => {
        calendarServiceStub.getByEventIds.and.returnValue(of({ events: [] }));
        const fixture = TestBed.createComponent(EditEventModal);
        const component = fixture.componentInstance;
        fixture.componentRef.setInput("eventId", "e1");
        fixture.detectChanges();
        expect(component.apiError()).toBe("Event not found");
      });
      it("ngOnInit should set apiError when loading fails", () => {
        calendarServiceStub.getByEventIds.and.returnValue(throwError(() => new Error("boom")));
        const fixture = TestBed.createComponent(EditEventModal);
        const component = fixture.componentInstance;
        fixture.componentRef.setInput("eventId", "e1");
        fixture.detectChanges();
        expect(component.apiError()).toBe("boom");
      });
      it("saveChanges should call EventService.update and emit eventUpdated on success", () => {
        const fixture = TestBed.createComponent(EditEventModal);
        const component = fixture.componentInstance;
        fixture.componentRef.setInput("eventId", "e1");
        fixture.detectChanges();
        const eventUpdatedSpy = jasmine.createSpy("eventUpdatedSpy");
        const closeSpy = jasmine.createSpy("closeSpy");
        component.eventUpdated.subscribe(eventUpdatedSpy);
        component.close.subscribe(closeSpy);
        component.form.patchValue({
          calendarId: "2",
          title: "Updated Title",
          startDate: "2026-01-26",
          startTime: "12:00",
          endDate: "2026-01-26",
          endTime: "13:00",
          description: "Updated desc",
          notes: "Updated notes"
        });
        component.saveChanges();
        expect(eventServiceStub.update).toHaveBeenCalledTimes(1);
        const [eventId, dto] = eventServiceStub.update.calls.mostRecent().args;
        expect(eventId).toBe("e1");
        expect(dto.calendar_id).toBe("2");
        expect(dto.title).toBe("Updated Title");
        const expectedStartIso = new Date(2026, 0, 26, 12, 0, 0, 0).toISOString();
        const expectedEndIso = new Date(2026, 0, 26, 13, 0, 0, 0).toISOString();
        expect(dto.start_time).toBe(expectedStartIso);
        expect(dto.end_time).toBe(expectedEndIso);
        expect(eventUpdatedSpy).toHaveBeenCalledOnceWith("e1");
        expect(closeSpy).toHaveBeenCalled();
      });
      it("saveChanges should set apiError and NOT call update when end <= start", () => {
        const fixture = TestBed.createComponent(EditEventModal);
        const component = fixture.componentInstance;
        fixture.componentRef.setInput("eventId", "e1");
        fixture.detectChanges();
        component.form.patchValue({
          calendarId: "2",
          title: "Updated Title",
          startDate: "2026-01-26",
          startTime: "12:00",
          endDate: "2026-01-26",
          endTime: "12:00",
          description: "Updated desc",
          notes: "Updated notes"
        });
        component.saveChanges();
        expect(eventServiceStub.update).not.toHaveBeenCalled();
        expect(component.apiError()).toBe("End must be after start.");
      });
    });
  }
});
export default require_edit_event_modal_spec();
//# sourceMappingURL=spec-app-features-event-edit-event-modal-edit-event-modal.spec.js.map
