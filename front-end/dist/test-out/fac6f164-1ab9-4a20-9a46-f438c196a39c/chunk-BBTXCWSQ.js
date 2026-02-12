import {
  BRAND_CONFIG,
  init_brand_config
} from "./chunk-7G4T4RDU.js";
import {
  Component,
  init_core,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/shared/main-footer/main-footer.ts
var MainFooter;
var init_main_footer = __esm({
  "src/app/features/shared/main-footer/main-footer.ts"() {
    "use strict";
    init_core();
    init_brand_config();
    init_core();
    MainFooter = class _MainFooter {
      footerText = BRAND_CONFIG.footerText;
      static \u0275fac = function MainFooter_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MainFooter)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainFooter, selectors: [["app-main-footer"]], decls: 4, vars: 1, consts: [["role", "contentinfo", 1, "app-footer"], [1, "container-fluid", "px-3", "py-2"], [1, "app-footer__text"]], template: function MainFooter_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2);
          \u0275\u0275text(3);
          \u0275\u0275domElementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275textInterpolate1(" ", ctx.footerText, " ");
        }
      }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=main-footer.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainFooter, [{
        type: Component,
        args: [{ selector: "app-main-footer", standalone: true, imports: [], template: '<footer class="app-footer" role="contentinfo">\n  <div class="container-fluid px-3 py-2">\n    <div class="app-footer__text">\n      {{ footerText }}\n    </div>\n  </div>\n</footer>\n', styles: ["/* src/app/features/shared/main-footer/main-footer.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=main-footer.css.map */\n"] }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainFooter, { className: "MainFooter", filePath: "src/app/features/shared/main-footer/main-footer.ts", lineNumber: 11 });
    })();
  }
});

export {
  MainFooter,
  init_main_footer
};
//# sourceMappingURL=chunk-BBTXCWSQ.js.map
