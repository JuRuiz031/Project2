import {
  init_testing as init_testing2,
  provideFakePlatformNavigation
} from "./chunk-WXXO5RLW.js";
import {
  BrowserModule,
  init_browser_chunk,
  platformBrowser
} from "./chunk-G625OUTR.js";
import {
  TestComponentRenderer,
  getTestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import {
  init_common
} from "./chunk-EGU5GLVS.js";
import {
  getDOM
} from "./chunk-52DSKCZD.js";
import {
  APP_ID,
  DOCUMENT,
  Inject,
  Injectable,
  NgModule,
  createPlatformFactory,
  init_core,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-5EHNMWHP.js";
import {
  __decorateElement,
  __decoratorStart,
  __runInitializers
} from "./chunk-FYSHOF5T.js";

// angular:test-bed-init:angular:test-bed-init
init_core();
init_testing();

// node_modules/@angular/platform-browser/fesm2022/testing.mjs
init_testing2();
init_core();
init_core();
init_testing();
init_common();
init_browser_chunk();
var DOMTestComponentRenderer = class _DOMTestComponentRenderer extends TestComponentRenderer {
  _doc;
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  insertRootElement(rootElId, tagName = "div") {
    this.removeAllRootElementsImpl();
    const rootElement = getDOM().getDefaultDocument().createElement(tagName);
    rootElement.setAttribute("id", rootElId);
    this._doc.body.appendChild(rootElement);
  }
  removeAllRootElements() {
    if (typeof this._doc.querySelectorAll === "function") {
      this.removeAllRootElementsImpl();
    }
  }
  removeAllRootElementsImpl() {
    const oldRoots = this._doc.querySelectorAll("[id^=root]");
    for (let i = 0; i < oldRoots.length; i++) {
      getDOM().remove(oldRoots[i]);
    }
  }
  static \u0275fac = function DOMTestComponentRenderer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DOMTestComponentRenderer)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DOMTestComponentRenderer,
    factory: _DOMTestComponentRenderer.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DOMTestComponentRenderer, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var platformBrowserTesting = createPlatformFactory(platformBrowser, "browserTesting");
var BrowserTestingModule = class _BrowserTestingModule {
  static \u0275fac = function BrowserTestingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserTestingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserTestingModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [{
      provide: APP_ID,
      useValue: "a"
    }, provideFakePlatformNavigation(), {
      provide: TestComponentRenderer,
      useClass: DOMTestComponentRenderer
    }],
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserTestingModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: [{
        provide: APP_ID,
        useValue: "a"
      }, provideFakePlatformNavigation(), {
        provide: TestComponentRenderer,
        useClass: DOMTestComponentRenderer
      }]
    }]
  }], null, null);
})();

// angular:test-bed-init:angular:test-bed-init
var _TestModule_decorators, _init;
_TestModule_decorators = [NgModule({ providers: [] })];
var TestModule = class {
};
_init = __decoratorStart(null);
TestModule = __decorateElement(_init, 0, "TestModule", _TestModule_decorators, TestModule);
__runInitializers(_init, 1, TestModule);
getTestBed().initTestEnvironment([BrowserTestingModule, TestModule], platformBrowserTesting(), {
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true
});
export {
  TestModule
};
/*! Bundled license information:

@angular/platform-browser/fesm2022/testing.mjs:
  (**
   * @license Angular v21.0.8
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=test_main.js.map
