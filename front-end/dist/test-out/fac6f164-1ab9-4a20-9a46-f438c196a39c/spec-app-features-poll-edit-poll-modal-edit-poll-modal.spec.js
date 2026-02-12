import {
  EditPollModal,
  init_edit_poll_modal
} from "./chunk-JUTM37J5.js";
import {
  PollService,
  init_poll_service
} from "./chunk-QKB7UDAX.js";
import "./chunk-EK3UKG6K.js";
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

// src/app/features/poll/edit-poll-modal/edit-poll-modal.spec.ts
var require_edit_poll_modal_spec = __commonJS({
  "src/app/features/poll/edit-poll-modal/edit-poll-modal.spec.ts"(exports) {
    init_testing();
    init_esm();
    init_edit_poll_modal();
    init_calendar_service();
    init_poll_service();
    describe("EditPollModal", () => {
      let component;
      let fixture;
      const calendarServiceMock = {
        getCalendarSummary: jasmine.createSpy("getCalendarSummary").and.returnValue(of({ home: [], invited: [] }))
      };
      const pollServiceMock = {
        getPoll: jasmine.createSpy("getPoll").and.returnValue(of({
          poll_id: "poll-1",
          name: "Test Poll",
          tags: [],
          options: []
        })),
        updatePoll: jasmine.createSpy("updatePoll").and.returnValue(of({}))
      };
      beforeEach(() => __async(null, null, function* () {
        calendarServiceMock.getCalendarSummary.calls.reset();
        pollServiceMock.getPoll.calls.reset();
        pollServiceMock.updatePoll.calls.reset();
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify({ user_id: "u1" }));
        yield TestBed.configureTestingModule({
          imports: [EditPollModal],
          providers: [
            { provide: CalendarService, useValue: calendarServiceMock },
            { provide: PollService, useValue: pollServiceMock }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(EditPollModal);
        component = fixture.componentInstance;
        yield fixture.whenStable();
      }));
      afterEach(() => {
        localStorage.clear();
      });
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_edit_poll_modal_spec();
//# sourceMappingURL=spec-app-features-poll-edit-poll-modal-edit-poll-modal.spec.js.map
