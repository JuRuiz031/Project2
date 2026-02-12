import {
  DisplayOptions,
  init_display_options
} from "./chunk-6PJWWP7I.js";
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

// src/app/features/dashboard/main-page/components/display-options/display-options.spec.ts
var require_display_options_spec = __commonJS({
  "src/app/features/dashboard/main-page/components/display-options/display-options.spec.ts"(exports) {
    init_testing();
    init_display_options();
    describe("DisplayOptions", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DisplayOptions]
        }).compileComponents();
        fixture = TestBed.createComponent(DisplayOptions);
        component = fixture.componentInstance;
        yield fixture.whenStable();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_display_options_spec();
//# sourceMappingURL=spec-app-features-dashboard-main-page-components-display-options-display-options.spec.js.map
