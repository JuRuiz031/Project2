import {
  EventSelectorModal,
  init_event_selector_modal
} from "./chunk-52BBZFHM.js";
import "./chunk-RYBDXJGT.js";
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

// src/app/features/dashboard/main-page/components/event-selector-modal/event-selector-modal.spec.ts
var require_event_selector_modal_spec = __commonJS({
  "src/app/features/dashboard/main-page/components/event-selector-modal/event-selector-modal.spec.ts"(exports) {
    init_testing();
    init_event_selector_modal();
    describe("EventSelectorModal", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [EventSelectorModal]
        }).compileComponents();
        fixture = TestBed.createComponent(EventSelectorModal);
        component = fixture.componentInstance;
        yield fixture.whenStable();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_event_selector_modal_spec();
//# sourceMappingURL=spec-app-features-dashboard-main-page-components-event-selector-modal-event-selector-modal.spec.js.map
