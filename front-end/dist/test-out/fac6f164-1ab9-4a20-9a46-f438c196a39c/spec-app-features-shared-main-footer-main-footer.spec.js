import {
  MainFooter,
  init_main_footer
} from "./chunk-BBTXCWSQ.js";
import "./chunk-7G4T4RDU.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS
} from "./chunk-FYSHOF5T.js";

// src/app/features/shared/main-footer/main-footer.spec.ts
var require_main_footer_spec = __commonJS({
  "src/app/features/shared/main-footer/main-footer.spec.ts"(exports) {
    init_testing();
    init_main_footer();
    describe("MainFooter", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [MainFooter]
        }).compileComponents();
        fixture = TestBed.createComponent(MainFooter);
        component = fixture.componentInstance;
        yield fixture.whenStable();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_main_footer_spec();
//# sourceMappingURL=spec-app-features-shared-main-footer-main-footer.spec.js.map
