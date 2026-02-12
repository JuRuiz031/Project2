import {
  CreatePollModal,
  init_create_poll_modal
} from "./chunk-TLEX6OXM.js";
import "./chunk-QKB7UDAX.js";
import "./chunk-EK3UKG6K.js";
import "./chunk-RYBDXJGT.js";
import "./chunk-OHTVP4IB.js";
import "./chunk-NXRHEMFL.js";
import "./chunk-JRC6SCPK.js";
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

// src/app/features/poll/create-poll-modal/create-poll-modal.spec.ts
var require_create_poll_modal_spec = __commonJS({
  "src/app/features/poll/create-poll-modal/create-poll-modal.spec.ts"(exports) {
    init_testing();
    init_create_poll_modal();
    describe("CreatePoll", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [CreatePollModal]
        }).compileComponents();
        fixture = TestBed.createComponent(CreatePollModal);
        component = fixture.componentInstance;
        yield fixture.whenStable();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_create_poll_modal_spec();
//# sourceMappingURL=spec-app-features-poll-create-poll-modal-create-poll-modal.spec.js.map
