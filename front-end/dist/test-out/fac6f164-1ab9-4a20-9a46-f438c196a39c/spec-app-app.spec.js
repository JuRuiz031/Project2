import {
  RouterOutlet,
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
  init_core,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/app.ts
var App;
var init_app = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_core();
    init_router();
    init_core();
    App = class _App {
      title = signal("front-end", ...ngDevMode ? [{ debugName: "title" }] : []);
      static \u0275fac = function App_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _App)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275element(0, "router-outlet");
        }
      }, dependencies: [RouterOutlet], styles: ["\n\n/*# sourceMappingURL=app.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
        type: Component,
        args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet], template: '<!-- <mwl-calendar-month-view\n  [viewDate]="viewDate"\n  [events]="events">\n</mwl-calendar-month-view> -->\n\n<router-outlet></router-outlet>\n', styles: ["/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n"] }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 30 });
    })();
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render router outlet", () => __async(null, null, function* () {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        yield fixture.whenStable();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("router-outlet")).not.toBeNull();
      }));
      it('should have title signal set to "front-end"', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app.title()).toBe("front-end");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app-app.spec.js.map
