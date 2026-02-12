import {
  init_testing as init_testing2,
  provideLocationMocks
} from "./chunk-WXXO5RLW.js";
import {
  NoPreloading,
  ROUTER_CONFIGURATION,
  ROUTER_PROVIDERS,
  ROUTES,
  Router,
  RouterModule,
  RouterOutlet,
  afterNextNavigation,
  init_router_chunk,
  init_router_module_chunk,
  withPreloading
} from "./chunk-LOQZ2SCF.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import {
  Component,
  Injectable,
  NgModule,
  ViewChild,
  init_core,
  setClassMetadata,
  signal,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __esm
} from "./chunk-FYSHOF5T.js";

// node_modules/@angular/router/fesm2022/testing.mjs
var RouterTestingModule, RootFixtureService, RootCmp, RouterTestingHarness;
var init_testing3 = __esm({
  "node_modules/@angular/router/fesm2022/testing.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_testing();
    init_router_chunk();
    init_router_module_chunk();
    init_testing2();
    RouterTestingModule = class _RouterTestingModule {
      static withRoutes(routes, config) {
        return {
          ngModule: _RouterTestingModule,
          providers: [{
            provide: ROUTES,
            multi: true,
            useValue: routes
          }, {
            provide: ROUTER_CONFIGURATION,
            useValue: config ? config : {}
          }]
        };
      }
      static \u0275fac = function RouterTestingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _RouterTestingModule)();
      };
      static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
        type: _RouterTestingModule,
        exports: [RouterModule]
      });
      static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
        providers: [ROUTER_PROVIDERS, provideLocationMocks(), withPreloading(NoPreloading).\u0275providers, {
          provide: ROUTES,
          multi: true,
          useValue: []
        }],
        imports: [RouterModule]
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterTestingModule, [{
        type: NgModule,
        args: [{
          exports: [RouterModule],
          providers: [ROUTER_PROVIDERS, provideLocationMocks(), withPreloading(NoPreloading).\u0275providers, {
            provide: ROUTES,
            multi: true,
            useValue: []
          }]
        }]
      }], null, null);
    })();
    RootFixtureService = class _RootFixtureService {
      fixture;
      harness;
      createHarness() {
        if (this.harness) {
          throw new Error("Only one harness should be created per test.");
        }
        this.harness = new RouterTestingHarness(this.getRootFixture());
        return this.harness;
      }
      getRootFixture() {
        if (this.fixture !== void 0) {
          return this.fixture;
        }
        this.fixture = TestBed.createComponent(RootCmp);
        this.fixture.detectChanges();
        return this.fixture;
      }
      static \u0275fac = function RootFixtureService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _RootFixtureService)();
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: _RootFixtureService,
        factory: _RootFixtureService.\u0275fac,
        providedIn: "root"
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RootFixtureService, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    RootCmp = class _RootCmp {
      outlet;
      routerOutletData = signal(void 0, ...ngDevMode ? [{
        debugName: "routerOutletData"
      }] : []);
      static \u0275fac = function RootCmp_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _RootCmp)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
        type: _RootCmp,
        selectors: [["ng-component"]],
        viewQuery: function RootCmp_Query(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275viewQuery(RouterOutlet, 5);
          }
          if (rf & 2) {
            let _t;
            \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.outlet = _t.first);
          }
        },
        decls: 1,
        vars: 1,
        consts: [[3, "routerOutletData"]],
        template: function RootCmp_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275element(0, "router-outlet", 0);
          }
          if (rf & 2) {
            \u0275\u0275property("routerOutletData", ctx.routerOutletData());
          }
        },
        dependencies: [RouterOutlet],
        encapsulation: 2
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RootCmp, [{
        type: Component,
        args: [{
          template: '<router-outlet [routerOutletData]="routerOutletData()"></router-outlet>',
          imports: [RouterOutlet]
        }]
      }], null, {
        outlet: [{
          type: ViewChild,
          args: [RouterOutlet]
        }]
      });
    })();
    RouterTestingHarness = class {
      static create(initialUrl) {
        return __async(this, null, function* () {
          const harness = TestBed.inject(RootFixtureService).createHarness();
          if (initialUrl !== void 0) {
            yield harness.navigateByUrl(initialUrl);
          }
          return harness;
        });
      }
      fixture;
      constructor(fixture) {
        this.fixture = fixture;
      }
      detectChanges() {
        this.fixture.detectChanges();
      }
      get routeDebugElement() {
        const outlet = this.fixture.componentInstance.outlet;
        if (!outlet || !outlet.isActivated) {
          return null;
        }
        return this.fixture.debugElement.query((v) => v.componentInstance === outlet.component);
      }
      get routeNativeElement() {
        return this.routeDebugElement?.nativeElement ?? null;
      }
      navigateByUrl(url, requiredRoutedComponentType) {
        return __async(this, null, function* () {
          const router = TestBed.inject(Router);
          let resolveFn;
          const redirectTrackingPromise = new Promise((resolve) => {
            resolveFn = resolve;
          });
          afterNextNavigation(TestBed.inject(Router), resolveFn);
          yield router.navigateByUrl(url);
          yield redirectTrackingPromise;
          this.fixture.detectChanges();
          const outlet = this.fixture.componentInstance.outlet;
          if (outlet && outlet.isActivated && outlet.activatedRoute.component) {
            const activatedComponent = outlet.component;
            if (requiredRoutedComponentType !== void 0 && !(activatedComponent instanceof requiredRoutedComponentType)) {
              throw new Error(`Unexpected routed component type. Expected ${requiredRoutedComponentType.name} but got ${activatedComponent.constructor.name}`);
            }
            return activatedComponent;
          } else {
            if (requiredRoutedComponentType !== void 0) {
              throw new Error(`Unexpected routed component type. Expected ${requiredRoutedComponentType.name} but the navigation did not activate any component.`);
            }
            return null;
          }
        });
      }
    };
  }
});

export {
  RouterTestingModule,
  init_testing3 as init_testing
};
/*! Bundled license information:

@angular/router/fesm2022/testing.mjs:
  (**
   * @license Angular v21.0.8
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-GDINLYB5.js.map
