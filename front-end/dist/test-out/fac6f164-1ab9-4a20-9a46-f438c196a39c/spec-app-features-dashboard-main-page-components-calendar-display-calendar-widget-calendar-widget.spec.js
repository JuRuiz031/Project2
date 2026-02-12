import {
  CalendarUtils,
  CalendarWidget,
  DateAdapter,
  adapterFactory,
  init_angular_calendar,
  init_calendar_widget,
  init_date_fns
} from "./chunk-BV7G6RXL.js";
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

// src/app/features/dashboard/main-page/components/calendar-display/calendar-widget/calendar-widget.spec.ts
var require_calendar_widget_spec = __commonJS({
  "src/app/features/dashboard/main-page/components/calendar-display/calendar-widget/calendar-widget.spec.ts"(exports) {
    init_testing();
    init_calendar_widget();
    init_angular_calendar();
    init_date_fns();
    describe("CalendarWidget", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [CalendarWidget],
          providers: [
            { provide: DateAdapter, useFactory: adapterFactory },
            CalendarUtils
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(CalendarWidget);
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
export default require_calendar_widget_spec();
//# sourceMappingURL=spec-app-features-dashboard-main-page-components-calendar-display-calendar-widget-calendar-widget.spec.js.map
