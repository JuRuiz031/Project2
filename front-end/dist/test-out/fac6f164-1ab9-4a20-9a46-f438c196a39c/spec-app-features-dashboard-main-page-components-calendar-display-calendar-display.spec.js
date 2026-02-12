import {
  CalendarDisplay,
  init_calendar_display
} from "./chunk-XJG5QYQD.js";
import {
  CalendarUtils,
  DateAdapter,
  adapterFactory,
  init_angular_calendar,
  init_date_fns
} from "./chunk-BV7G6RXL.js";
import "./chunk-RBWGVD5O.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import "./chunk-EGU5GLVS.js";
import "./chunk-52DSKCZD.js";
import "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS
} from "./chunk-FYSHOF5T.js";

// src/app/features/dashboard/main-page/components/calendar-display/calendar-display.spec.ts
var require_calendar_display_spec = __commonJS({
  "src/app/features/dashboard/main-page/components/calendar-display/calendar-display.spec.ts"(exports) {
    init_testing();
    init_calendar_display();
    init_angular_calendar();
    init_date_fns();
    describe("CalendarDisplay", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [CalendarDisplay],
          providers: [
            { provide: DateAdapter, useFactory: adapterFactory },
            CalendarUtils
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(CalendarDisplay);
        component = fixture.componentInstance;
        fixture.detectChanges();
        yield fixture.whenStable();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_calendar_display_spec();
//# sourceMappingURL=spec-app-features-dashboard-main-page-components-calendar-display-calendar-display.spec.js.map
