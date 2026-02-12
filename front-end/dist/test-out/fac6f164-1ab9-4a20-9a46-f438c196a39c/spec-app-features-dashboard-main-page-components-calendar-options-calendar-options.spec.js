import {
  CalendarOptions,
  init_calendar_options
} from "./chunk-YALVE5U7.js";
import "./chunk-LOQZ2SCF.js";
import "./chunk-G625OUTR.js";
import "./chunk-DD5LJ5SS.js";
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

// src/app/features/dashboard/main-page/components/calendar-options/calendar-options.spec.ts
var require_calendar_options_spec = __commonJS({
  "src/app/features/dashboard/main-page/components/calendar-options/calendar-options.spec.ts"(exports) {
    init_testing();
    init_calendar_options();
    describe("CalendarOptions", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [CalendarOptions]
        }).compileComponents();
        fixture = TestBed.createComponent(CalendarOptions);
        component = fixture.componentInstance;
        yield fixture.whenStable();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_calendar_options_spec();
//# sourceMappingURL=spec-app-features-dashboard-main-page-components-calendar-options-calendar-options.spec.js.map
