import {
  DeleteCalendarModal,
  init_delete_calendar_modal
} from "./chunk-4RQP2VDE.js";
import "./chunk-OHTVP4IB.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import "./chunk-EGU5GLVS.js";
import "./chunk-52DSKCZD.js";
import {
  Component,
  init_core,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS
} from "./chunk-FYSHOF5T.js";

// src/app/features/calendar/delete-calendar-modal/delete-calendar-modal.spec.ts
var require_delete_calendar_modal_spec = __commonJS({
  "src/app/features/calendar/delete-calendar-modal/delete-calendar-modal.spec.ts"(exports) {
    init_testing();
    init_core();
    init_delete_calendar_modal();
    init_core();
    var TestHostComponent = class _TestHostComponent {
      targetId = signal(null, ...ngDevMode ? [{ debugName: "targetId" }] : []);
      targetName = signal("Test Item", ...ngDevMode ? [{ debugName: "targetName" }] : []);
      isDeleting = signal(false, ...ngDevMode ? [{ debugName: "isDeleting" }] : []);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      cancelCalled = false;
      confirmDeleteCalledWith = null;
      onCancel() {
        this.cancelCalled = true;
      }
      onConfirmDelete(id) {
        this.confirmDeleteCalledWith = id;
      }
      static \u0275fac = function TestHostComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _TestHostComponent)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestHostComponent, selectors: [["ng-component"]], decls: 1, vars: 4, consts: [[3, "cancel", "confirmDelete", "targetId", "targetName", "isDeleting", "apiError"]], template: function TestHostComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-delete-calendar-modal", 0);
          \u0275\u0275listener("cancel", function TestHostComponent_Template_app_delete_calendar_modal_cancel_0_listener() {
            return ctx.onCancel();
          })("confirmDelete", function TestHostComponent_Template_app_delete_calendar_modal_confirmDelete_0_listener($event) {
            return ctx.onConfirmDelete($event);
          });
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275property("targetId", ctx.targetId())("targetName", ctx.targetName())("isDeleting", ctx.isDeleting())("apiError", ctx.apiError());
        }
      }, dependencies: [DeleteCalendarModal], encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestHostComponent, [{
        type: Component,
        args: [{
          standalone: true,
          imports: [DeleteCalendarModal],
          template: `
    <app-delete-calendar-modal
      [targetId]="targetId()"
      [targetName]="targetName()"
      [isDeleting]="isDeleting()"
      [apiError]="apiError()"
      (cancel)="onCancel()"
      (confirmDelete)="onConfirmDelete($event)"
    />
  `
        }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestHostComponent, { className: "TestHostComponent", filePath: "src/app/features/calendar/delete-calendar-modal/delete-calendar-modal.spec.ts", lineNumber: 20 });
    })();
    describe("DeleteCalendarModal", () => {
      let hostComponent;
      let hostFixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [TestHostComponent]
        }).compileComponents();
        hostFixture = TestBed.createComponent(TestHostComponent);
        hostComponent = hostFixture.componentInstance;
        hostFixture.detectChanges();
        yield hostFixture.whenStable();
      }));
      it("should create", () => {
        expect(hostComponent).toBeTruthy();
      });
      it("should emit cancel when onCancel is called", () => {
        const cancelBtn = hostFixture.nativeElement.querySelector(".btn-outline-secondary");
        cancelBtn.click();
        hostFixture.detectChanges();
        expect(hostComponent.cancelCalled).toBeTrue();
      });
      it("should emit confirmDelete with targetId when onConfirm is called", () => __async(null, null, function* () {
        hostComponent.targetId.set("cg-123");
        hostComponent.isDeleting.set(false);
        hostFixture.detectChanges();
        yield hostFixture.whenStable();
        const confirmBtn = hostFixture.nativeElement.querySelector(".btn-danger");
        confirmBtn.click();
        hostFixture.detectChanges();
        expect(hostComponent.confirmDeleteCalledWith).toBe("cg-123");
      }));
      it("should not emit confirmDelete if targetId is missing", () => __async(null, null, function* () {
        hostComponent.targetId.set(null);
        hostComponent.isDeleting.set(false);
        hostFixture.detectChanges();
        yield hostFixture.whenStable();
        const confirmBtn = hostFixture.nativeElement.querySelector(".btn-danger");
        confirmBtn.click();
        hostFixture.detectChanges();
        expect(hostComponent.confirmDeleteCalledWith).toBeNull();
      }));
      it("should not emit confirmDelete if isDeleting is true", () => __async(null, null, function* () {
        hostComponent.targetId.set("cg-123");
        hostComponent.isDeleting.set(true);
        hostFixture.detectChanges();
        yield hostFixture.whenStable();
        const confirmBtn = hostFixture.nativeElement.querySelector(".btn-danger");
        confirmBtn.click();
        hostFixture.detectChanges();
        expect(hostComponent.confirmDeleteCalledWith).toBeNull();
      }));
    });
  }
});
export default require_delete_calendar_modal_spec();
//# sourceMappingURL=spec-app-features-calendar-delete-calendar-modal-delete-calendar-modal.spec.js.map
