import {
  RouterTestingModule,
  init_testing as init_testing2
} from "./chunk-GDINLYB5.js";
import "./chunk-WXXO5RLW.js";
import {
  BRAND_CONFIG,
  init_brand_config
} from "./chunk-7G4T4RDU.js";
import {
  RouterLink,
  init_router
} from "./chunk-LOQZ2SCF.js";
import "./chunk-G625OUTR.js";
import "./chunk-DD5LJ5SS.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import "./chunk-EGU5GLVS.js";
import "./chunk-52DSKCZD.js";
import {
  Component,
  Input,
  init_core,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/shared/main-header/main-header.ts
function MainHeader_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1, " Profile ");
    \u0275\u0275elementEnd();
  }
}
function MainHeader_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1, " Home ");
    \u0275\u0275elementEnd();
  }
}
var MainHeader;
var init_main_header = __esm({
  "src/app/features/shared/main-header/main-header.ts"() {
    "use strict";
    init_core();
    init_router();
    init_brand_config();
    init_core();
    MainHeader = class _MainHeader {
      siteName = BRAND_CONFIG.siteName;
      showProfile = input(true, ...ngDevMode ? [{ debugName: "showProfile" }] : []);
      showHome = input(true, ...ngDevMode ? [{ debugName: "showHome" }] : []);
      static \u0275fac = function MainHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MainHeader)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainHeader, selectors: [["app-main-header"]], inputs: { showProfile: [1, "showProfile"], showHome: [1, "showHome"] }, decls: 7, vars: 3, consts: [["role", "banner", 1, "app-navbar", "navbar"], [1, "container-fluid", "px-3", "py-2"], [1, "navbar-brand", "mb-0", "h1"], [1, "d-flex", "gap-2"], ["routerLink", "/account", 1, "btn", "btn-outline-light", "btn-sm"], ["routerLink", "/main-page", 1, "btn", "btn-outline-light", "btn-sm"]], template: function MainHeader_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "span", 2);
          \u0275\u0275text(3);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "div", 3);
          \u0275\u0275conditionalCreate(5, MainHeader_Conditional_5_Template, 2, 0, "a", 4);
          \u0275\u0275conditionalCreate(6, MainHeader_Conditional_6_Template, 2, 0, "a", 5);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275textInterpolate1(" ", ctx.siteName, " ");
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.showProfile() ? 5 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showHome() ? 6 : -1);
        }
      }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.app-navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=main-header.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainHeader, [{
        type: Component,
        args: [{ selector: "app-main-header", standalone: true, imports: [RouterLink], template: '<header class="app-navbar navbar" role="banner">\n  <div class="container-fluid px-3 py-2">\n    <span class="navbar-brand mb-0 h1">\n      {{ siteName }}\n    </span>\n\n    <div class="d-flex gap-2">\n      @if (showProfile()) {\n        <a\n          class="btn btn-outline-light btn-sm"\n          routerLink="/account"\n        >\n          Profile\n        </a>\n      }\n\n      @if (showHome()) {\n        <a\n          class="btn btn-outline-light btn-sm"\n          routerLink="/main-page"\n        >\n          Home\n        </a>\n      }\n    </div>\n  </div>\n</header>\n', styles: ["/* src/app/features/shared/main-header/main-header.css */\n:host {\n  display: block;\n}\n.app-navbar .navbar-brand {\n  font-size: 20px;\n}\n/*# sourceMappingURL=main-header.css.map */\n"] }]
      }], null, { showProfile: [{ type: Input, args: [{ isSignal: true, alias: "showProfile", required: false }] }], showHome: [{ type: Input, args: [{ isSignal: true, alias: "showHome", required: false }] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainHeader, { className: "MainHeader", filePath: "src/app/features/shared/main-header/main-header.ts", lineNumber: 12 });
    })();
  }
});

// src/app/features/shared/main-header/main-header.spec.ts
var require_main_header_spec = __commonJS({
  "src/app/features/shared/main-header/main-header.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_main_header();
    describe("MainHeader", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            RouterTestingModule,
            // ✅ provides ActivatedRoute needed by RouterLink
            MainHeader
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(MainHeader);
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
export default require_main_header_spec();
//# sourceMappingURL=spec-app-features-shared-main-header-main-header.spec.js.map
