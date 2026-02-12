import {
  EditCalendarModal,
  init_edit_calendar_modal
} from "./chunk-UZFNZ4BC.js";
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
  of
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS
} from "./chunk-FYSHOF5T.js";

// src/app/features/calendar/edit-calendar-modal/edit-calendar-modal.spec.ts
var require_edit_calendar_modal_spec = __commonJS({
  "src/app/features/calendar/edit-calendar-modal/edit-calendar-modal.spec.ts"(exports) {
    init_testing();
    init_esm();
    init_edit_calendar_modal();
    init_calendar_service();
    describe("EditCalendarModal", () => {
      let component;
      let fixture;
      const calendarServiceStub = {
        getHomepage: jasmine.createSpy("getHomepage").and.returnValue(of({ calendars: [] })),
        getByCalendarIds: jasmine.createSpy("getByCalendarIds").and.returnValue(of({ users: [] })),
        update: jasmine.createSpy("update").and.returnValue(of({}))
      };
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [EditCalendarModal],
          providers: [{ provide: CalendarService, useValue: calendarServiceStub }]
        }).compileComponents();
        fixture = TestBed.createComponent(EditCalendarModal);
        component = fixture.componentInstance;
        fixture.componentRef.setInput("calendarId", "c1");
        fixture.componentRef.setInput("currentUserId", "u1");
        fixture.detectChanges();
        yield fixture.whenStable();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_edit_calendar_modal_spec();
//# sourceMappingURL=spec-app-features-calendar-edit-calendar-modal-edit-calendar-modal.spec.js.map
