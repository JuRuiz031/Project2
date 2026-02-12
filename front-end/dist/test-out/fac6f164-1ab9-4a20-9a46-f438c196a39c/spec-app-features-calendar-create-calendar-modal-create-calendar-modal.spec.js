import {
  CreateCalendarModal,
  init_create_calendar_modal
} from "./chunk-EX57OSXC.js";
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
  fakeAsync,
  flushMicrotasks,
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

// src/app/features/calendar/create-calendar-modal/create-calendar-modal.spec.ts
var require_create_calendar_modal_spec = __commonJS({
  "src/app/features/calendar/create-calendar-modal/create-calendar-modal.spec.ts"(exports) {
    init_testing();
    init_esm();
    init_testing();
    init_create_calendar_modal();
    init_calendar_service();
    describe("CreateCalendarModal", () => {
      const createdCalendar = {
        calendar_id: "c123",
        name: "My Calendar"
      };
      const calendarServiceStub = {
        create: jasmine.createSpy("create").and.returnValue(of(createdCalendar))
      };
      beforeEach(() => __async(null, null, function* () {
        calendarServiceStub.create.calls.reset();
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify({ user_id: "u1" }));
        yield TestBed.configureTestingModule({
          imports: [CreateCalendarModal],
          providers: [{ provide: CalendarService, useValue: calendarServiceStub }]
        }).compileComponents();
      }));
      afterEach(() => {
        localStorage.clear();
      });
      it("should create", () => {
        const fixture = TestBed.createComponent(CreateCalendarModal);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
      });
      it("should not call create when form is invalid", () => {
        const fixture = TestBed.createComponent(CreateCalendarModal);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        component.submit();
        expect(calendarServiceStub.create).not.toHaveBeenCalled();
        expect(component.apiError()).toBe("Please fix validation errors.");
      });
      it("should set apiError when missing user id and not call create", () => {
        localStorage.removeItem("user");
        const fixture = TestBed.createComponent(CreateCalendarModal);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        component.form.patchValue({ name: "My Calendar" });
        component.submit();
        expect(component.apiError()).toBe("You must be logged in to create a calendar.");
        expect(calendarServiceStub.create).not.toHaveBeenCalled();
      });
      it("should call CalendarService.create and emit calendarCreated + close on success", fakeAsync(() => {
        const fixture = TestBed.createComponent(CreateCalendarModal);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        let emittedCalendarId;
        let closed = false;
        component.calendarCreated.subscribe((id) => emittedCalendarId = id);
        component.close.subscribe(() => closed = true);
        component.form.patchValue({ name: "My Calendar" });
        component.submit();
        flushMicrotasks();
        expect(calendarServiceStub.create).toHaveBeenCalledTimes(1);
        const dtoArg = calendarServiceStub.create.calls.mostRecent().args[0];
        expect(dtoArg.user_id).toBe("u1");
        expect(dtoArg.name).toBe("My Calendar");
        expect(emittedCalendarId).toBe("c123");
        expect(closed).toBe(true);
      }));
      it("should show apiError when create fails", () => {
        calendarServiceStub.create.and.returnValue(throwError(() => ({})));
        const fixture = TestBed.createComponent(CreateCalendarModal);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        component.form.patchValue({ name: "My Calendar" });
        component.submit();
        expect(component.apiError()).toBe("Failed to create calendar. Please try again.");
      });
    });
  }
});
export default require_create_calendar_modal_spec();
//# sourceMappingURL=spec-app-features-calendar-create-calendar-modal-create-calendar-modal.spec.js.map
