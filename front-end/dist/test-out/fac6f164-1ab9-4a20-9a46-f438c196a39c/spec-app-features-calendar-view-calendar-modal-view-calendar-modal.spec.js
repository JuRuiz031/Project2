import {
  ViewCalendarModal,
  init_view_calendar_modal
} from "./chunk-ZB7S6FNL.js";
import {
  describe,
  globalExpect,
  init_dist,
  it,
  vi
} from "./chunk-OODRAGTF.js";
import "./chunk-RBWGVD5O.js";
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
import "./chunk-FYSHOF5T.js";

// src/app/features/calendar/view-calendar-modal/view-calendar-modal.spec.ts
init_dist();
init_testing();
init_esm();
init_view_calendar_modal();
init_calendar_service();
describe("ViewCalendarModal", () => {
  it("should create", () => {
    TestBed.configureTestingModule({
      imports: [ViewCalendarModal],
      providers: [
        {
          provide: CalendarService,
          useValue: {
            getHomepage: vi.fn(() => of({ calendars: [] })),
            getByCalendarIds: vi.fn(() => of({ users: [] }))
          }
        }
      ]
    });
    const fixture = TestBed.createComponent(ViewCalendarModal);
    globalExpect(fixture.componentInstance).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-features-calendar-view-calendar-modal-view-calendar-modal.spec.js.map
