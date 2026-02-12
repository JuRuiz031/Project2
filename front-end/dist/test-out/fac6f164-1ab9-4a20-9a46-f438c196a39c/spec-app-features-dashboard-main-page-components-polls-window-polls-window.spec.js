import {
  init_testing as init_testing2,
  provideLocationMocks
} from "./chunk-WXXO5RLW.js";
import {
  PollsWindow,
  init_polls_window
} from "./chunk-7DCYQB2Z.js";
import {
  init_router,
  provideRouter
} from "./chunk-LOQZ2SCF.js";
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

// src/app/features/dashboard/main-page/components/polls-window/polls-window.spec.ts
var require_polls_window_spec = __commonJS({
  "src/app/features/dashboard/main-page/components/polls-window/polls-window.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_router();
    init_polls_window();
    describe("PollsWindow", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [PollsWindow],
          providers: [
            provideRouter([]),
            // provides Router + ActivatedRoute tree
            provideLocationMocks()
            // prevents real browser location wiring in tests
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(PollsWindow);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_polls_window_spec();
//# sourceMappingURL=spec-app-features-dashboard-main-page-components-polls-window-polls-window.spec.js.map
