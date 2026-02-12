import {
  CommonModule,
  init_common
} from "./chunk-EGU5GLVS.js";
import {
  Component,
  Input,
  Output,
  init_core,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/shared/components/base-modal/base-modal.ts
function BaseModal_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 7);
    \u0275\u0275domListener("click", function BaseModal_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBack());
    });
    \u0275\u0275text(1, " \u2190 Back ");
    \u0275\u0275domElementEnd();
  }
}
var _c0, BaseModal;
var init_base_modal = __esm({
  "src/app/shared/components/base-modal/base-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_core();
    _c0 = ["*"];
    BaseModal = class _BaseModal {
      // Inputs
      title = input("", ...ngDevMode ? [{ debugName: "title" }] : []);
      showBackButton = input(false, ...ngDevMode ? [{ debugName: "showBackButton" }] : []);
      size = input("medium", ...ngDevMode ? [{ debugName: "size" }] : []);
      // small: 500px, medium: 700px, large: 900px
      // Outputs
      close = output();
      back = output();
      constructor() {
        document.body.style.overflow = "hidden";
      }
      ngOnDestroy() {
        document.body.style.overflow = "";
      }
      onClose() {
        this.close.emit();
      }
      onBack() {
        this.back.emit();
      }
      static \u0275fac = function BaseModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BaseModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BaseModal, selectors: [["app-base-modal"]], inputs: { title: [1, "title"], showBackButton: [1, "showBackButton"], size: [1, "size"] }, outputs: { close: "close", back: "back" }, ngContentSelectors: _c0, decls: 10, vars: 8, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["aria-label", "Go back", 1, "modal-back-btn"], [1, "modal-title"], ["aria-label", "Close modal", 1, "modal-close-btn", 3, "click"], [1, "modal-body"], ["aria-label", "Go back", 1, "modal-back-btn", 3, "click"]], template: function BaseModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275domElementStart(0, "div", 0);
          \u0275\u0275domListener("click", function BaseModal_Template_div_click_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275domElementStart(1, "div", 1);
          \u0275\u0275domListener("click", function BaseModal_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
          });
          \u0275\u0275domElementStart(2, "div", 2);
          \u0275\u0275conditionalCreate(3, BaseModal_Conditional_3_Template, 2, 0, "button", 3);
          \u0275\u0275domElementStart(4, "h2", 4);
          \u0275\u0275text(5);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(6, "button", 5);
          \u0275\u0275domListener("click", function BaseModal_Template_button_click_6_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(7, " \u2715 ");
          \u0275\u0275domElementEnd()();
          \u0275\u0275domElementStart(8, "div", 6);
          \u0275\u0275projection(9);
          \u0275\u0275domElementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275classProp("modal-small", ctx.size() === "small")("modal-medium", ctx.size() === "medium")("modal-large", ctx.size() === "large");
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.showBackButton() ? 3 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate(ctx.title());
        }
      }, dependencies: [CommonModule], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 90%;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-small[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.modal-medium[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.modal-large[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n  flex-shrink: 0;\n  gap: 12px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  flex: 1;\n  text-align: center;\n}\n.modal-back-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: #007bff;\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n}\n.modal-back-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.modal-back-btn[_ngcontent-%COMP%]:active {\n  background-color: #e0e0e0;\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: color 0.2s;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.modal-close-btn[_ngcontent-%COMP%]:active {\n  color: #c82333;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 4px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 95%;\n    max-height: 90vh;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=base-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModal, [{
        type: Component,
        args: [{ selector: "app-base-modal", standalone: true, imports: [CommonModule], template: `<div class="modal-overlay" (click)="onClose()">
  <div 
    class="modal-content"
    [class.modal-small]="size() === 'small'"
    [class.modal-medium]="size() === 'medium'"
    [class.modal-large]="size() === 'large'"
    (click)="$event.stopPropagation()">
    
    <!-- Header -->
    <div class="modal-header">
      @if (showBackButton()) {
        <button class="modal-back-btn" (click)="onBack()" aria-label="Go back">
          \u2190 Back
        </button>
      }
      
      <h2 class="modal-title">{{ title() }}</h2>
      
      <button class="modal-close-btn" (click)="onClose()" aria-label="Close modal">
        \u2715
      </button>
    </div>

    <!-- Body (projected content) -->
    <div class="modal-body">
      <ng-content></ng-content>
    </div>
  </div>
</div>
`, styles: ["/* src/app/shared/components/base-modal/base-modal.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.2s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-content {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 90%;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: slideUp 0.3s ease-out;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-small {\n  max-width: 500px;\n}\n.modal-medium {\n  max-width: 700px;\n}\n.modal-large {\n  max-width: 900px;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n  flex-shrink: 0;\n  gap: 12px;\n}\n.modal-title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  flex: 1;\n  text-align: center;\n}\n.modal-back-btn {\n  background: none;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: #007bff;\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n}\n.modal-back-btn:hover {\n  background-color: #f0f0f0;\n}\n.modal-back-btn:active {\n  background-color: #e0e0e0;\n}\n.modal-close-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: color 0.2s;\n}\n.modal-close-btn:hover {\n  color: #dc3545;\n}\n.modal-close-btn:active {\n  color: #c82333;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-body::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 4px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    width: 95%;\n    max-height: 90vh;\n  }\n  .modal-header {\n    padding: 16px;\n  }\n  .modal-body {\n    padding: 16px;\n  }\n  .modal-title {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=base-modal.css.map */\n"] }]
      }], () => [], { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], showBackButton: [{ type: Input, args: [{ isSignal: true, alias: "showBackButton", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], close: [{ type: Output, args: ["close"] }], back: [{ type: Output, args: ["back"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BaseModal, { className: "BaseModal", filePath: "src/app/shared/components/base-modal/base-modal.ts", lineNumber: 32 });
    })();
  }
});

export {
  BaseModal,
  init_base_modal
};
//# sourceMappingURL=chunk-OHTVP4IB.js.map
