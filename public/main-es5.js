function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");

    var routes = [{
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"],
      path: ""
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'bpm';
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/main.component.ngfactory */
    "./src/app/main/main.component.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/dialog/index.ngfactory */
    "./node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _shared_dialog_create_model_dialog_create_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/dialog-create-model/dialog-create-model.component.ngfactory */
    "./src/app/shared/dialog-create-model/dialog-create-model.component.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MainComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDialogContainerNgFactory"], _shared_dialog_create_model_dialog_create_model_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DialogCreateModelComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_12__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
        return [p0_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () {
        return [[{
          component: _main_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"],
          path: ""
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/main/main.component.ngfactory.js":
  /*!**************************************************!*\
    !*** ./src/app/main/main.component.ngfactory.js ***!
    \**************************************************/

  /*! exports provided: RenderType_MainComponent, View_MainComponent_0, View_MainComponent_Host_0, MainComponentNgFactory */

  /***/
  function srcAppMainMainComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MainComponent", function () {
      return RenderType_MainComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MainComponent_0", function () {
      return View_MainComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MainComponent_Host_0", function () {
      return View_MainComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponentNgFactory", function () {
      return MainComponentNgFactory;
    });
    /* harmony import */


    var _main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./main.component.scss.shim.ngstyle */
    "./src/app/main/main.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_MainComponent = [_main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_MainComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_MainComponent,
      data: {}
    });

    function View_MainComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "list_item"]], [[8, "id", 0], [8, "draggable", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "item_title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.name + "-" + _v.context.$implicit.name;
        var currVal_1 = true;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_2 = _v.context.$implicit.name;

        _ck(_v, 2, 0, currVal_2);
      });
    }

    function View_MainComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "item_wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "p", [["class", "icon_wrap no-m"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "card"], ["class", "img-but"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "item-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "p", [["class", "d-arrow"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = (_v.context.$implicit.show = !_v.context.$implicit.show) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "img", [["alt", "down"], ["src", "/assets/down.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "item-cont__list"]], [[2, "active", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MainComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit.attributes;

        _ck(_v, 10, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/assets/", _v.context.$implicit.icon, ".svg");

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.name;

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.show;

        _ck(_v, 8, 0, currVal_2);
      });
    }

    function View_MainComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 3, 0, currVal_0);
      });
    }

    function View_MainComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 3, 0, currVal_0);
      });
    }

    function View_MainComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "rule-row__gen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "label", [["class", "r-name"], ["for", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Value"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "select", [["class", "input-gen sel"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.newItem.value = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MainComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.newItem.value;

        _ck(_v, 6, 0, currVal_7);

        var currVal_8 = _co.newItem.values;

        _ck(_v, 10, 0, currVal_8);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPending;

        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_MainComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "rule-row__gen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "label", [["class", "r-name"], ["for", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Value"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "input", [["class", "input-gen"], ["id", "valuetext"], ["placeholder", "value"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.newItem.value = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.newItem.value;

        _ck(_v, 6, 0, currVal_7);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPending;

        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_MainComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 58, "div", [["class", "sidebar show"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, {
        show: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 53, "div", [["class", "cont__wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "m-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "div", [["class", "rule-row__gen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "label", [["class", "r-name"], ["for", "key"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Key"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "input", [["class", "input-gen"], ["id", "key"], ["placeholder", "key"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.newItem.key = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 8, "div", [["class", "rule-row__gen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "label", [["class", "r-name"], ["for", "key"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "input", [["class", "input-gen"], ["id", "name"], ["placeholder", "Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.newItem.name = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 8, "div", [["class", "rule-row__gen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "label", [["class", "r-name"], ["for", "key"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 5, "input", [["class", "input-gen"], ["id", "description"], ["placeholder", "Description"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.newItem.description = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 8, "div", [["class", "rule-row__gen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "label", [["class", "r-name"], ["for", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 5, "input", [["class", "input-gen"], ["id", "type"], ["placeholder", "type"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.newItem.type = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 10, "div", [["class", "rule-row__gen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "label", [["class", "r-name"], ["for", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Operation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 7, "select", [["class", "input-gen sel"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.newItem.operation = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MainComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MainComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MainComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "button", [["class", "save-btn"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.saveForm() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "sidebar show";

        var currVal_1 = _ck(_v, 2, 0, _co.showSide);

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_10 = _co.newItem.key;

        _ck(_v, 12, 0, currVal_10);

        var currVal_18 = _co.newItem.name;

        _ck(_v, 21, 0, currVal_18);

        var currVal_26 = _co.newItem.description;

        _ck(_v, 30, 0, currVal_26);

        var currVal_34 = _co.newItem.type;

        _ck(_v, 39, 0, currVal_34);

        var currVal_42 = _co.newItem.operation;

        _ck(_v, 48, 0, currVal_42);

        var currVal_43 = _co.newItem.operations;

        _ck(_v, 52, 0, currVal_43);

        var currVal_44 = _co.newItem.values;

        _ck(_v, 54, 0, currVal_44);

        var currVal_45 = !_co.newItem.values;

        _ck(_v, 56, 0, currVal_45);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.newItem.group;

        _ck(_v, 5, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassUntouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassTouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPristine;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassDirty;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassValid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassInvalid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPending;

        _ck(_v, 9, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending;

        _ck(_v, 18, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17);

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassUntouched;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassTouched;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPristine;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassDirty;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassValid;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassInvalid;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPending;

        _ck(_v, 27, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending;

        _ck(_v, 36, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassUntouched;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassTouched;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassPristine;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassDirty;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassValid;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassInvalid;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassPending;

        _ck(_v, 45, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41);
      });
    }

    function View_MainComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 37, "div", [["class", "bpm-wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "header-palette"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "icons-wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "btn-gen_wrap"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.deleteElement() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["alt", "bin"], ["class", "img-but"], ["src", "/assets/bin.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "button", [["class", "btn-gen_wrap"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.zoomPlus() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["alt", "zoom"], ["class", "img-but"], ["src", "/assets/zoomp.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "button", [["class", "btn-gen_wrap"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.zoomMinus() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["alt", "zoom"], ["class", "img-but"], ["src", "/assets/zoomm.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 18, "div", [["class", "palette-entries"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "head-entries"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Components"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 14, "div", [["class", "entries-cont_wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "div", [["class", "item_wrap"], ["id", "AND"]], [[8, "draggable", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "p", [["class", "icon_wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "img", [["alt", "tree"], ["class", "img-but rot"], ["src", "/assets/tree.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "p", [["class", "item-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logical AND relation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "div", [["class", "item_wrap"], ["id", "OR"]], [[8, "draggable", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "p", [["class", "icon_wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "img", [["alt", "tree"], ["class", "img-but rot"], ["src", "/assets/tree.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "p", [["class", "item-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logical OR relation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "div", [["class", "padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MainComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "div", [["class", "coco-bpm-graph"], ["id", "graph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 6, "div", [["class", "toggle-sidebar-btn"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = (_co.showSide = !_co.showSide) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](31, {
        "active": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 3, "a", [["class", "mat-focus-indicator"], ["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 1, "span", [["class", "icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "img", [["src", "/assets/subject-black.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MainComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.optionsData;

        _ck(_v, 27, 0, currVal_2);

        var currVal_3 = "toggle-sidebar-btn";

        var currVal_4 = _ck(_v, 31, 0, _co.showSide);

        _ck(_v, 30, 0, currVal_3, currVal_4);

        var currVal_9 = _co.selectedModal && _co.newItem;

        _ck(_v, 37, 0, currVal_9);
      }, function (_ck, _v) {
        var currVal_0 = true;

        _ck(_v, 14, 0, currVal_0);

        var currVal_1 = true;

        _ck(_v, 19, 0, currVal_1);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).tabIndex || 0;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled || null;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled.toString();

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._animationMode === "NoopAnimations";

        _ck(_v, 32, 0, currVal_5, currVal_6, currVal_7, currVal_8);
      });
    }

    function View_MainComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-main", [], null, null, null, View_MainComponent_0, RenderType_MainComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var MainComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-main", _main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], View_MainComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/main/main.component.scss.shim.ngstyle.js":
  /*!**********************************************************!*\
    !*** ./src/app/main/main.component.scss.shim.ngstyle.js ***!
    \**********************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppMainMainComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".item-cont__list[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.item-cont__list.active[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 38px;\n  padding: 0 0 0 45px;\n  background-color: #daedf8;\n  border-bottom: 1px solid #4472c4;\n  margin-bottom: 2px;\n  cursor: pointer;\n}\n\n.d-arrow[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 10px;\n  margin-left: auto;\n  cursor: pointer;\n}\n\n.item_title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  color: #111;\n  font-weight: 500;\n  margin: 0;\n}\n\n.icon_wrap.no-m[_ngcontent-%COMP%]   .img-but[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.d-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.header-palette[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 40px;\n  background-color: #f6f7fb;\n  padding: 0 2% 0 245px;\n  display: flex;\n  align-items: center;\n}\n\n.head-entries[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  align-items: center;\n  padding: 0 2% 0 12%;\n}\n\n.head-entries[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0 0 15px 0;\n}\n\n.item_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #017bb0;\n  padding: 0 8px;\n  box-sizing: border-box;\n  height: 38px;\n  border-bottom: 1px solid #fff;\n}\n\n.padding[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: #f6f7fb;\n  height: 38px;\n}\n\n.padding[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background-color: #017bb0;\n}\n\n.icon_wrap[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #1a1919;\n  margin-right: 10px;\n}\n\n.item-title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  font-size: 14px;\n  color: #fff;\n}\n\n.icons-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.btn-gen_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 25px;\n  height: 25px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  margin-right: 10px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n.btn-gen_wrap[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  transition: 0.2s;\n}\n\n.img-but[_ngcontent-%COMP%] {\n  max-width: 75%;\n}\n\n.img-but.rot[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n\n.icon_wrap[_ngcontent-%COMP%]   .img-but[_ngcontent-%COMP%] {\n  max-width: 60%;\n  margin-right: -4px;\n}\n\n.form-checkbox__wrap[_ngcontent-%COMP%] {\n  width: 61%;\n  position: relative;\n}\n\n.form-checkbox__subscribe[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: absolute;\n}\n\n.form__link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.form__link[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #979797;\n  box-sizing: border-box;\n  border-radius: 6px;\n  background: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.form__link[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 20px;\n  height: 20px;\n  background: url(/assets/check.png) no-repeat;\n  background-size: 16px 16px;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  z-index: 2;\n  opacity: 0;\n}\n\n.form-checkbox__subscribe[_ngcontent-%COMP%]:checked    + .form__link[_ngcontent-%COMP%]:before {\n  border: 1px solid #fcc106;\n}\n\n.form-checkbox__subscribe[_ngcontent-%COMP%]:checked    + .form__link[_ngcontent-%COMP%]:after {\n  opacity: 1;\n}\n\n.coco-bpm-graph[_ngcontent-%COMP%] {\n  height: 99.6vh;\n}\n\n.rhombus-wrap[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Roboto\", sans-serif;\n  color: #fff;\n  font-size: 11px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  width: 0;\n  height: 0;\n  border: 18px solid transparent;\n  border-bottom-color: #000;\n  position: relative;\n  top: -18px;\n  cursor: pointer;\n}\n\n.rhombus-wrap[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: -18px;\n  top: 18px;\n  border: 18px solid transparent;\n  border-top-color: #000;\n}\n\n.save-btn[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #fff;\n  background-color: #5ac894;\n  display: block;\n  width: 150px;\n  height: 35px;\n  border-radius: 2px;\n  font-weight: 600;\n  border: 2px solid #daecf8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n  margin-left: auto;\n  margin-right: 10px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.el_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  padding: 18px;\n}\n\n.m-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  margin: 0;\n  margin: 0;\n  z-index: 2;\n}\n\n.cont__wrap[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 13px 22px 45px 13px;\n  box-sizing: border-box;\n}\n\n.m-title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  margin: 0;\n}\n\n.r-name[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: #8e8d8d;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  cursor: pointer;\n  max-width: 85px;\n}\n\n.icons[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.rule-row__gen[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px 0;\n  min-height: 22px;\n}\n\n.input-gen[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: #000;\n  height: 30px;\n  padding: 0 8px;\n  box-sizing: border-box;\n  max-width: 170px;\n  width: 100%;\n  border-radius: 5px;\n  background-color: #f5f6f5;\n  border: 2px solid #daecf8;\n  margin-bottom: 2px;\n}\n\n.input-gen.sel[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  cursor: pointer;\n}\n\ntextarea.input-gen[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 90px;\n  padding: 8px 10px;\n}\n\n.bpm-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: auto;\n  height: 100%;\n  background: white;\n  border: 1px solid #ececec;\n  overflow: hidden;\n  min-height: calc(100vh - 58px);\n}\n\n.palette-entries[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 0 0 30px 0;\n  left: 0;\n  top: 0;\n  width: 220px;\n  height: 100%;\n  min-width: 180px;\n  border-radius: 0px;\n  background: #f6f7fb;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  border-right: 2px solid #fff;\n}\n\n.palette-entries[_ngcontent-%COMP%]   .bpm-item[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto 15px auto;\n  height: 35px;\n  line-height: 46px;\n  cursor: default;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.palette-entries[_ngcontent-%COMP%]   .bpm-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 30px;\n}\n\n.palette-entries[_ngcontent-%COMP%]   .bpm-item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  color: #ff7400;\n}\n\n.palette-entries[_ngcontent-%COMP%]   .bpm-item[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  width: 100%;\n  height: 35px;\n  border-radius: 2px;\n  font-weight: 600;\n  border: 2px solid #daecf8;\n  display: flex;\n  align-items: center;\n  font-size: 17px;\n  padding-left: 3px;\n  cursor: pointer;\n  line-height: 1;\n  overflow: hidden;\n  word-break: break-all;\n}\n\n.palette-entries[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  padding-top: 5px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  clear: both;\n  width: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n  max-width: 330px;\n  background-color: #f6f7fb;\n  transform: translate(100%, 0);\n  transition: all 0.4s;\n  height: 100%;\n  right: 0;\n  top: 0;\n  padding: 32px 0 60px 15px;\n  box-sizing: border-box;\n  overflow-y: auto;\n  margin-top: 41px;\n}\n\n.sidebar.show[_ngcontent-%COMP%] {\n  transform: translate(0, 0);\n  box-shadow: rgba(0, 0, 0, 0.1) -8px 0px 5px -4px;\n  z-index: 111;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.input-btn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.input-btn-wrap[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input-btn-wrap[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 6px;\n  margin-left: 25px;\n  min-width: 35px;\n}\n\n.input-btn-wrap[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.chekboxs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\n.chekboxs-list[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.loop-item[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  border-bottom: 1px dashed #b7b7b7;\n  padding: 5px 10px;\n  padding-bottom: 10px;\n  border: 1px dashed #b7b7b7;\n}\n\n.loop-item.desc[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  border: none !important;\n}\n\n.clickShield[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #0000003d;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n\n.toggle-sidebar-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 18px);\n  right: 0;\n  transition: all 0.4s;\n}\n\n.toggle-sidebar-btn.active[_ngcontent-%COMP%] {\n  transform: translate(-332px, 0);\n}\n\n.toggle-sidebar-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 29px;\n  min-width: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n@media screen and (max-width: 1600px) {\n  .palette-entries[_ngcontent-%COMP%]   .bpm-item[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n\n@media screen and (max-width: 1400px) {\n  .palette-entries[_ngcontent-%COMP%]   .bpm-item[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 1300px) {\n  .palette-entries[_ngcontent-%COMP%]   .bpm-item[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .item_title[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .list_item[_ngcontent-%COMP%] {\n    height: 30px;\n    padding: 0 0 0 34px;\n  }\n\n  .palette-entries[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n\n  .item-title[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .head-entries[_ngcontent-%COMP%] {\n    height: 75px;\n  }\n\n  .head-entries[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 0 10px 0;\n  }\n\n  .icon_wrap[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin-right: 6px;\n  }\n\n  .item_wrap[_ngcontent-%COMP%] {\n    padding: 0 6px;\n    height: 34px;\n  }\n\n  .padding[_ngcontent-%COMP%] {\n    background-color: #f6f7fb;\n    height: 32px;\n  }\n\n  .header-palette[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 36px;\n    padding: 0 2% 0 195px;\n  }\n\n  .btn-gen_wrap[_ngcontent-%COMP%] {\n    width: 23px;\n    height: 23px;\n    margin-right: 8px;\n  }\n}\n\n@media screen and (max-width: 550px) {\n  .palette-entries[_ngcontent-%COMP%] {\n    width: 160px;\n    min-width: 160px;\n  }\n\n  .header-palette[_ngcontent-%COMP%] {\n    padding: 0 2% 0 175px;\n  }\n\n  .d-arrow[_ngcontent-%COMP%] {\n    width: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcYnBtL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0tGOztBREhBO0VBQ0UsU0FBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1NGOztBRFBBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1VGOztBRFJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNXRjs7QURUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNZRjs7QURWQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNhRjs7QURYQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ2NGOztBRFpBO0VBQ0UsaUNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNlRjs7QURiQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ2dCRjs7QURkQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNpQkY7O0FEZkE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FDa0JGOztBRGhCQTtFQUNFLGNBQUE7QUNtQkY7O0FEakJBO0VBQ0Usd0JBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDcUJGOztBRGxCQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ3FCRjs7QURuQkE7RUFDRSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtBQ3NCRjs7QURwQkE7RUFDRSxlQUFBO0FDdUJGOztBRHJCQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDd0JGOztBRHRCQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDeUJGOztBRHZCQTtFQUNFLHlCQUFBO0FDMEJGOztBRHhCQTtFQUNFLFVBQUE7QUMyQkY7O0FEeEJBO0VBQ0UsY0FBQTtBQzJCRjs7QUR6QkE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUM0QkY7O0FEMUJBO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUM2QkY7O0FEM0JBO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDOEJGOztBRDVCQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDK0JGOztBRDdCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2dDRjs7QUQ5QkE7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNpQ0Y7O0FEL0JBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ2tDRjs7QURoQ0E7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDbUNGOztBRGpDQTtFQUNFLGVBQUE7QUNvQ0Y7O0FEbENBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0FDb0NGOztBRGxDQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3FDRjs7QURuQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ3NDRjs7QURwQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3VDRjs7QURyQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUN3Q0Y7O0FEckNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsc0JBQUE7RUFDQSw0QkFBQTtBQ3VDRjs7QURyQ0U7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN1Q0o7O0FEckNJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUN1Q047O0FEbkNNO0VBQ0UsY0FBQTtBQ3FDUjs7QURsQ0k7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDb0NOOztBRGhDRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDa0NKOztBRDlCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2lDRjs7QUQvQkU7RUFDRSwwQkFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtBQ2lDSjs7QUQ3QkE7RUFDRSxjQUFBO0FDZ0NGOztBRDdCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ2dDRjs7QUQ5QkU7RUFDRSxXQUFBO0FDZ0NKOztBRDdCRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDK0JKOztBRDdCSTtFQUNFLHlCQUFBO0FDK0JOOztBRDFCQTtFQUNFLFdBQUE7QUM2QkY7O0FENUJFO0VBQ0UsVUFBQTtBQzhCSjs7QUQ1QkU7RUFDRSxVQUFBO0FDOEJKOztBRDFCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzZCRjs7QUQzQkU7RUFDRSxVQUFBO0FDNkJKOztBRHpCQTtFQUNFLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUM0QkY7O0FEMUJFO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQzRCSjs7QUR6QkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUM0QkY7O0FEMUJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQzZCRjs7QUQ1QkU7RUFDRSwrQkFBQTtBQzhCSjs7QUQ1QkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUM4Qko7O0FEMUJBO0VBQ0U7SUFDRSxlQUFBO0VDNkJGO0FBQ0Y7O0FEM0JBO0VBQ0U7SUFDRSxVQUFBO0VDNkJGO0FBQ0Y7O0FEM0JBO0VBQ0U7SUFDRSxlQUFBO0VDNkJGO0FBQ0Y7O0FEM0JBO0VBQ0U7SUFDRSxlQUFBO0VDNkJGOztFRDNCQTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtFQzhCRjs7RUQ1QkE7SUFDRSxZQUFBO0VDK0JGOztFRDdCQTtJQUNFLGVBQUE7RUNnQ0Y7O0VEOUJBO0lBQ0UsWUFBQTtFQ2lDRjs7RUQvQkE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUNrQ0Y7O0VEaENBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ21DRjs7RURqQ0E7SUFDRSxjQUFBO0lBQ0EsWUFBQTtFQ29DRjs7RURsQ0E7SUFDRSx5QkFBQTtJQUNBLFlBQUE7RUNxQ0Y7O0VEbkNBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtFQ3NDRjs7RURwQ0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDdUNGO0FBQ0Y7O0FEckNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUN1Q0Y7O0VEckNBO0lBQ0UscUJBQUE7RUN3Q0Y7O0VEdENBO0lBQ0UsVUFBQTtFQ3lDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tY29udF9fbGlzdCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaXRlbS1jb250X19saXN0LmFjdGl2ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4ubGlzdF9pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDQ1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZWRmODtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NzJjNDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kLWFycm93IHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pdGVtX3RpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMxMTE7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmljb25fd3JhcC5uby1tIC5pbWctYnV0IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmQtYXJyb3cgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmhlYWRlci1wYWxldHRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3ZmI7XHJcbiAgcGFkZGluZzogMCAyJSAwIDI0NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaGVhZC1lbnRyaWVzIHtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMiUgMCAxMiU7XHJcbn1cclxuLmhlYWQtZW50cmllcyBwIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG59XHJcbi5pdGVtX3dyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3YmIwO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi5wYWRkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmYjtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbn1cclxuLnBhZGRpbmcgcCB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxN2JiMDtcclxufVxyXG4uaWNvbl93cmFwIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNiwgMjUsIDI1KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLml0ZW0tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmljb25zLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uYnRuLWdlbl93cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYnRuLWdlbl93cmFwOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuLmltZy1idXQge1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG59XHJcbi5pbWctYnV0LnJvdCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcbi5pY29uX3dyYXAgLmltZy1idXQge1xyXG4gIG1heC13aWR0aDogNjAlO1xyXG4gIG1hcmdpbi1yaWdodDogLTRweDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2tib3hfX3dyYXAge1xyXG4gIHdpZHRoOiA2MSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb3JtLWNoZWNrYm94X19zdWJzY3JpYmUge1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5mb3JtX19saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZvcm1fX2xpbms6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTc5Nzk3O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmZvcm1fX2xpbms6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2NoZWNrLnBuZykgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJweDtcclxuICBsZWZ0OiAycHg7XHJcbiAgei1pbmRleDogMjtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5mb3JtLWNoZWNrYm94X19zdWJzY3JpYmU6Y2hlY2tlZCArIC5mb3JtX19saW5rOmJlZm9yZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZjYzEwNjtcclxufVxyXG4uZm9ybS1jaGVja2JveF9fc3Vic2NyaWJlOmNoZWNrZWQgKyAuZm9ybV9fbGluazphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvY28tYnBtLWdyYXBoIHtcclxuICBoZWlnaHQ6IDk5LjZ2aDtcclxufVxyXG4ucmhvbWJ1cy13cmFwIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXI6IDE4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJob21idXMtd3JhcDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xOHB4O1xyXG4gIHRvcDogMThweDtcclxuICBib3JkZXI6IDE4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDtcclxufVxyXG4uc2F2ZS1idG4ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YWM4OTQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZGFlY2Y4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5lbF93cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbn1cclxuLm0tdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmNvbnRfX3dyYXAge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDEzcHggMjJweCA0NXB4IDEzcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ubS10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uci1uYW1lIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzhlOGQ4ZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWF4LXdpZHRoOiA4NXB4O1xyXG59XHJcbi5pY29ucyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ydWxlLXJvd19fZ2VuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIG1pbi1oZWlnaHQ6IDIycHg7XHJcbn1cclxuLmlucHV0LWdlbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWF4LXdpZHRoOiAxNzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmNTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZGFlY2Y4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG4uaW5wdXQtZ2VuLnNlbCB7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnRleHRhcmVhLmlucHV0LWdlbiB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbn1cclxuLmJwbS13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNThweCk7XHJcbn1cclxuXHJcbi5wYWxldHRlLWVudHJpZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAwIDAgMzBweCAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxODBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjdmYjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmY7XHJcblxyXG4gIC5icG0taXRlbSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTVweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZmY3NDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3F1YXJlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2RhZWNmODtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlcGFyYXRvciB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3ZmI7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiAzMnB4IDAgNjBweCAxNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW4tdG9wOiA0MXB4O1xyXG5cclxuICAmLnNob3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgLThweCAwcHggNXB4IC00cHg7XHJcbiAgICB6LWluZGV4OiAxMTE7XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbnB1dC1idG4td3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5idG4ge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIG1pbi13aWR0aDogMzVweDtcclxuXHJcbiAgICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIHRoIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hla2JveHMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gIG1hdC1jaGVja2JveCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLmxvb3AtaXRlbSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjYjdiN2I3O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjYjdiN2I3O1xyXG5cclxuICAmLmRlc2Mge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5jbGlja1NoaWVsZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi50b2dnbGUtc2lkZWJhci1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMThweCk7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMzMnB4LCAwKTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB3aWR0aDogMjlweDtcclxuICAgIG1pbi13aWR0aDogdW5zZXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gIC5wYWxldHRlLWVudHJpZXMgLmJwbS1pdGVtIC5zcXVhcmUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAucGFsZXR0ZS1lbnRyaWVzIC5icG0taXRlbSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAucGFsZXR0ZS1lbnRyaWVzIC5icG0taXRlbSAuc3F1YXJlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLml0ZW1fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuICAubGlzdF9pdGVtIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDM0cHg7XHJcbiAgfVxyXG4gIC5wYWxldHRlLWVudHJpZXMge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gIH1cclxuICAuaXRlbS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIC5oZWFkLWVudHJpZXMge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gIH1cclxuICAuaGVhZC1lbnRyaWVzIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIH1cclxuICAuaWNvbl93cmFwIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG4gIC5pdGVtX3dyYXAge1xyXG4gICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgfVxyXG4gIC5wYWRkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY3ZmI7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG4gIC5oZWFkZXItcGFsZXR0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmc6IDAgMiUgMCAxOTVweDtcclxuICB9XHJcbiAgLmJ0bi1nZW5fd3JhcCB7XHJcbiAgICB3aWR0aDogMjNweDtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gIC5wYWxldHRlLWVudHJpZXMge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICB9XHJcbiAgLmhlYWRlci1wYWxldHRlIHtcclxuICAgIHBhZGRpbmc6IDAgMiUgMCAxNzVweDtcclxuICB9XHJcbiAgLmQtYXJyb3cge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICB9XHJcbn1cclxuIiwiLml0ZW0tY29udF9fbGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pdGVtLWNvbnRfX2xpc3QuYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubGlzdF9pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiAwIDAgMCA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlZGY4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NzJjNDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kLWFycm93IHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0ZW1fdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzExMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaWNvbl93cmFwLm5vLW0gLmltZy1idXQge1xuICBtYXJnaW46IDA7XG59XG5cbi5kLWFycm93IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlci1wYWxldHRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2ZiO1xuICBwYWRkaW5nOiAwIDIlIDAgMjQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkLWVudHJpZXMge1xuICBoZWlnaHQ6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMiUgMCAxMiU7XG59XG5cbi5oZWFkLWVudHJpZXMgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAgMCAxNXB4IDA7XG59XG5cbi5pdGVtX3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3YmIwO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLnBhZGRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmYjtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuXG4ucGFkZGluZyBwIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3YmIwO1xufVxuXG4uaWNvbl93cmFwIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFhMTkxOTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaXRlbS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pY29ucy13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmJ0bi1nZW5fd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1nZW5fd3JhcDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5pbWctYnV0IHtcbiAgbWF4LXdpZHRoOiA3NSU7XG59XG5cbi5pbWctYnV0LnJvdCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLmljb25fd3JhcCAuaW1nLWJ1dCB7XG4gIG1heC13aWR0aDogNjAlO1xuICBtYXJnaW4tcmlnaHQ6IC00cHg7XG59XG5cbi5mb3JtLWNoZWNrYm94X193cmFwIHtcbiAgd2lkdGg6IDYxJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9ybS1jaGVja2JveF9fc3Vic2NyaWJlIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZm9ybV9fbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm1fX2xpbms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5Nzk3OTc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5mb3JtX19saW5rOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2NoZWNrLnBuZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogMnB4O1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZm9ybS1jaGVja2JveF9fc3Vic2NyaWJlOmNoZWNrZWQgKyAuZm9ybV9fbGluazpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmNjMTA2O1xufVxuXG4uZm9ybS1jaGVja2JveF9fc3Vic2NyaWJlOmNoZWNrZWQgKyAuZm9ybV9fbGluazphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb2NvLWJwbS1ncmFwaCB7XG4gIGhlaWdodDogOTkuNnZoO1xufVxuXG4ucmhvbWJ1cy13cmFwIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAxOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJob21idXMtd3JhcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTE4cHg7XG4gIHRvcDogMThweDtcbiAgYm9yZGVyOiAxOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwO1xufVxuXG4uc2F2ZS1idG4ge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YWM4OTQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGFlY2Y4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lbF93cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nOiAxOHB4O1xufVxuXG4ubS10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luOiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY29udF9fd3JhcCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxM3B4IDIycHggNDVweCAxM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnItbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzhlOGQ4ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWF4LXdpZHRoOiA4NXB4O1xufVxuXG4uaWNvbnMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ydWxlLXJvd19fZ2VuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDEwcHggMDtcbiAgbWluLWhlaWdodDogMjJweDtcbn1cblxuLmlucHV0LWdlbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiAxNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmNTtcbiAgYm9yZGVyOiAycHggc29saWQgI2RhZWNmODtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uaW5wdXQtZ2VuLnNlbCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhLmlucHV0LWdlbiB7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogOTBweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG59XG5cbi5icG0td3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1OHB4KTtcbn1cblxuLnBhbGV0dGUtZW50cmllcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMCAwIDMwcHggMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxODBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjZmN2ZiO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmY7XG59XG4ucGFsZXR0ZS1lbnRyaWVzIC5icG0taXRlbSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvIDE1cHggYXV0bztcbiAgaGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wYWxldHRlLWVudHJpZXMgLmJwbS1pdGVtIC5pY29uIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5wYWxldHRlLWVudHJpZXMgLmJwbS1pdGVtOmhvdmVyIC5pY29uIHtcbiAgY29sb3I6ICNmZjc0MDA7XG59XG4ucGFsZXR0ZS1lbnRyaWVzIC5icG0taXRlbSAuc3F1YXJlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAycHggc29saWQgI2RhZWNmODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLnBhbGV0dGUtZW50cmllcyAuc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmYjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDMycHggMCA2MHB4IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi10b3A6IDQxcHg7XG59XG4uc2lkZWJhci5zaG93IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAtOHB4IDBweCA1cHggLTRweDtcbiAgei1pbmRleDogMTExO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW5wdXQtYnRuLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlucHV0LWJ0bi13cmFwIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5wdXQtYnRuLXdyYXAgYnV0dG9uLmJ0biB7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG59XG4uaW5wdXQtYnRuLXdyYXAgYnV0dG9uLmJ0biAubWF0ZXJpYWwtaWNvbnMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgdGQge1xuICBwYWRkaW5nOiAwO1xufVxudGFibGUgdGgge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2hla2JveHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNoZWtib3hzLWxpc3QgbWF0LWNoZWNrYm94IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmxvb3AtaXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNiN2I3Yjc7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNiN2I3Yjc7XG59XG4ubG9vcC1pdGVtLmRlc2Mge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2xpY2tTaGllbGQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xufVxuXG4udG9nZ2xlLXNpZGViYXItYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMThweCk7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi50b2dnbGUtc2lkZWJhci1idG4uYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMzMnB4LCAwKTtcbn1cbi50b2dnbGUtc2lkZWJhci1idG4gYSB7XG4gIHdpZHRoOiAyOXB4O1xuICBtaW4td2lkdGg6IHVuc2V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5wYWxldHRlLWVudHJpZXMgLmJwbS1pdGVtIC5zcXVhcmUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5wYWxldHRlLWVudHJpZXMgLmJwbS1pdGVtIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLnBhbGV0dGUtZW50cmllcyAuYnBtLWl0ZW0gLnNxdWFyZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLml0ZW1fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC5saXN0X2l0ZW0ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAwIDAgMCAzNHB4O1xuICB9XG5cbiAgLnBhbGV0dGUtZW50cmllcyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG5cbiAgLml0ZW0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC5oZWFkLWVudHJpZXMge1xuICAgIGhlaWdodDogNzVweDtcbiAgfVxuXG4gIC5oZWFkLWVudHJpZXMgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgfVxuXG4gIC5pY29uX3dyYXAge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuXG4gIC5pdGVtX3dyYXAge1xuICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgIGhlaWdodDogMzRweDtcbiAgfVxuXG4gIC5wYWRkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2ZiO1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxuXG4gIC5oZWFkZXItcGFsZXR0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHBhZGRpbmc6IDAgMiUgMCAxOTVweDtcbiAgfVxuXG4gIC5idG4tZ2VuX3dyYXAge1xuICAgIHdpZHRoOiAyM3B4O1xuICAgIGhlaWdodDogMjNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLnBhbGV0dGUtZW50cmllcyB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gIH1cblxuICAuaGVhZGVyLXBhbGV0dGUge1xuICAgIHBhZGRpbmc6IDAgMiUgMCAxNzVweDtcbiAgfVxuXG4gIC5kLWFycm93IHtcbiAgICB3aWR0aDogOHB4O1xuICB9XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _shared_model_component_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/model/component.mode */
    "./src/app/shared/model/component.mode.ts");
    /* harmony import */


    var _shared_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/dialog-create-model/dialog-create-model.component */
    "./src/app/shared/dialog-create-model/dialog-create-model.component.ts");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(dialog, http) {
        _classCallCheck(this, MainComponent);

        this.dialog = dialog;
        this.http = http;
        this.listOpen = false;
        this.listOpen1 = false;
        this.types = [// "Data Model",
          // "Audit Rules",
          // "Contextual Rules",
          // "Role type x",
        ];
        this.colors = {// "Data Model": "#fec003",
          // "Audit Rules": "#ff0300",
          // "Contextual Rules": "#93d052",
          // "Role type x": "#d9edf8",
        };
        this.colorsArr = ["#fec003", "#ff0300", "#93d052", "#d9edf8"];
        this.text = {// "Data Model": "#000",
          // "Audit Rules": "#fff",
          // "Contextual Rules": "#fff",
          // "Role type x": "#000",
        };
        this.data = [];
        this.optionsModal = {};
        this.formulaSaverOld = {};
        this.saverComponent = [];
        this.modelsKeys = {};
        this.settings = {};
        this.selectedData = {};
        this.icons = {};
        this.attributeOptions = {};
        this.k = 1;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.http.get("./assets/json/data.json").subscribe(function (res) {
            _this.data = res.data;

            for (var i = 0; i < res.options.length; i++) {
              var item = res.options[i];

              var _iterator = _createForOfIteratorHelper(item.attributes),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var attribute = _step.value;

                  _this.types.push(item.name + '-' + attribute.name);

                  _this.icons[item.name] = item.icon;
                  _this.attributeOptions[item.name + '-' + attribute.name] = attribute;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this.optionsData = res.options;
              _this.colors[item.name] = _this.colorsArr[i];
              _this.text[item.name] = "#fff";
              _this.settings[item.name] = item;
              _this.selectedData["name" + item.name] = _this.getAttribute(item, 'name'); // this.selectedData["type" + item.name] = this.getAttribute(item, 'type');
              // this.selectedData["operations" + item.name] = this.getAttribute(item, 'operations', true);
              // this.selectedData["values" + item.name] = this.getAttribute(item, 'values', true);
            }

            setTimeout(function () {
              _this.drow();

              _this.init();
            }, 1000);
          });
        }
      }, {
        key: "init",
        value: function init() {
          var _this2 = this;

          this.menuInit();
          this.zoom = d3.zoom().scaleExtent([0.1, 2]).on("zoom", function () {
            _this2.zoomTrans = d3.event.transform; // this.conteiner.attr("transform", d3.event.transform);

            var currentTransform = d3.event.transform;

            if (!currentTransform.x) {
              currentTransform.x = 0;
              currentTransform.y = 0;
            }

            _this2.conteiner.attr("transform", currentTransform);

            _this2.slider.property("value", currentTransform.k);

            _this2.rangeWidth();
          });
          this.vis = d3.select("#graph").append("svg");
          var w = "100%",
              h = "100%";
          this.vis.attr("width", w).attr("height", h).on("click", function () {
            // if (!this.readOnly) {
            //   this.unselect();
            if (_this2.startDrowLine) {
              _this2.removeAll();

              _this2.startDrowLine = null;
              _this2.activeArrow = null;
              document.documentElement.style.cursor = "default";

              _this2.drow();
            } // if (!this.clickArrow) {
            //   this.unselectArrow();
            // }

          }); // this.vis.call(this.zoom).on("dblclick.zoom", null);

          this.conteiner = this.vis.append("g").attr("id", "wrap");
          var g = d3.select("#graph").append("div").datum({}).attr("class", "coco-bpm-d3-zoom-wrap");
          var g1 = g;
          var icon1 = g1.append("svg").attr("width", "14").attr("height", "14").attr("viewBox", "0 0 14 14").on("click", function () {// this.undo();
          }).append("g").attr("fill", "#2196F3").attr("transform", "translate(-384.000000, -144.000000)").attr("fill-rule", "nonzero");
          icon1.append("path").attr("d", "M391.5,157 C389.014719,157 387,154.985281 387,152.5 C387,152.331018 387.009314,152.164211 387.027464,152 L385.018945,152 C385.00639,152.165053 385,152.33178 385,152.5 C385,156.089851 387.910149,159 391.5,159 C395.089851,159 398,156.089851 398,152.5 C398,149.078368 395.356198,146.27423 392,146.018945 L392,148.027464 C394.249941,148.27615 396,150.183701 396,152.5 C396,154.985281 393.985281,157 391.5,157 L391.5,157 Z M388,147 L392,150 L392,144 L388,147 L388,147 Z M388,147");
          var icon = g1.append("svg").attr("width", "14").attr("height", "14").attr("viewBox", "0 0 14 14").append("g").attr("fill", "#2196F3").attr("fill-rule", "nonzero");
          icon.append("path").attr("d", "M12.316 9.677a5.677 5.677 0 0 0 0-8.019 5.676 5.676 0 0 0-8.019 0 5.56 5.56 0 0 0-.853 6.843s.094.158-.033.284L.518 11.678c-.575.576-.712 1.381-.202 1.892l.088.088c.51.51 1.316.373 1.892-.202l2.886-2.887c.133-.133.29-.04.29-.04a5.56 5.56 0 0 0 6.844-.852zM5.344 8.63a4.194 4.194 0 0 1 0-5.925 4.194 4.194 0 0 1 5.925 0 4.194 4.194 0 0 1 0 5.925 4.195 4.195 0 0 1-5.925 0z");
          icon.append("path").attr("d", "M5.706 5.331a.584.584 0 0 1-.539-.813A3.688 3.688 0 0 1 9.996 2.56a.585.585 0 0 1-.457 1.078 2.516 2.516 0 0 0-3.294 1.336.585.585 0 0 1-.54.357z");
          var g2 = g1.append("div").datum({}).attr("class", "coco-bpm-slider-wrap");
          this.slider = g2.append("input").datum({}).attr("type", "range").attr("class", "coco-bpm-slider").attr("id", "range").attr("value", 1).attr("min", 0.1).attr("max", 2).attr("step", 0.01).on("input", function () {
            _this2.zoom.scaleTo(_this2.vis, d3.select("#range").property("value"));

            _this2.rangeWidth();
          });
          g2.append("div").datum({}).attr("class", "coco-bpm-line-range").attr("id", "lineZoomRange");
          document.getElementById("graph").addEventListener("mousemove", function (e) {
            var dummyX = e.offsetX;
            var dummyY = e.offsetY;

            if (_this2.startDrowLine && _this2.data[_this2.startDrowLine]) {
              _this2.removeAll();

              d3.selectAll("#drowLine").remove();
              var x, y;

              if (document.getElementById("wrap").getAttribute("transform") === null) {
                x = e.offsetX;
                y = e.offsetY;
              } else {
                x = (e.offsetX - _this2.zoomTrans.x) / _this2.zoomTrans.k;
                y = (e.offsetY - _this2.zoomTrans.y) / _this2.zoomTrans.k;
              }

              var d = {
                source: {
                  x: _this2.data[_this2.startDrowLine].x + 110,
                  y: _this2.data[_this2.startDrowLine].y
                },
                target: {
                  x: x,
                  y: y
                }
              };
              var link = d3.linkHorizontal().x(function (d) {
                return d.x;
              }).y(function (d) {
                return d.y;
              });

              _this2.conteiner.append("path").attr("class", "path").attr("id", "drowLine").attr("d", link(d)).style("fill", "none").style("stroke", "red").attr("stroke-opacity", 0.4).attr("stroke-width", 1.5);

              _this2.conteiner.append("polyline").attr("points", d.source.x + "," + d.source.y + " " + (d.source.x + d.target.x) / 2 + "," + (d.source.y + d.target.y) / 2 + " " + d.target.x + "," + d.target.y).style("fill", "none");

              _this2.drow();
            }
          });
          this.marker = this.conteiner.append("svg:defs").append("svg:marker").attr("id", "triangle").attr("refX", 6).attr("refY", 6).attr("markerWidth", 30).attr("markerHeight", 30).attr("orient", "auto");
          this.marker.append("path").attr("class", "path").attr("d", "M 0 0 12 6 0 12 3 6").style("fill", "red");
        }
      }, {
        key: "drow",
        value: function drow() {
          var _this3 = this;

          this.drowLines();
          this.data.forEach(function (element, index, arr) {
            var d, dx, dy, color;
            var count = 0;
            var countS = 0;
            var h = 65 + (count > 3 ? (count - 3) * 27 + countS * 5 + count * 5 : 0 + countS * 5);
            var selected = _this3.selected !== null && +_this3.selected === +index ? "stroke-width:1;stroke:rgb(0,0,0)" : "";

            var g = _this3.conteiner.append("g").attr("class", "g");

            if (element.objectClass === "AND" || element.objectClass === "OR") {
              dx = element.x - 10;
              dy = element.y - 8; // color = this.colors[element.objectClass];

              color = '#f6f7fa';
              count = 0;
              countS = 0;
              h = 65 + (count > 3 ? (count - 3) * 27 + countS * 5 + count * 5 : 0 + countS * 5);
              selected = _this3.selected !== null && +_this3.selected === +index ? "stroke-width:1;stroke:rgb(0,0,0)" : "stroke-width:1;stroke:#58a6c8";
              g = _this3.conteiner.append("g").attr("class", "g");
              g.append("rect").attr("class", "nodes").attr("id", index).attr("style", selected).attr("fill", color).attr("x", element.x + 90).attr("y", element.y - 10).attr("width", 50).attr("height", 50).attr("rx", 50).attr("ry", 50).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)).on("mouseover", function (q, w, e) {
                d3.event.stopPropagation();

                if (_this3.activeArrow) {
                  document.documentElement.style.cursor = "default";
                  d3.select(document.getElementById(e[0].id + "main")).style("fill", "#84bd96");
                }
              }).on("mouseout", function (q, w, e) {
                d3.event.stopPropagation();
                d3.select(document.getElementById(e[0].id + "main")).style("fill", "#2196f3");

                if (_this3.activeArrow) {
                  document.documentElement.style.cursor = "not-allowed";
                }
              }) // .on("click", (d, i, s) => {
              //   d3.event.stopPropagation();
              //   this.selectedModal = s[0].id;
              //   this.selected = s[0].id;
              //   this.removeAll();
              //   this.drow();
              //   if (this.activeArrow)
              //     this.shepClick(s[0].id);
              // })
              .on("dblclick", function (d, i, s) {
                _this3.selectedModal = s[0].id;
                var name = _this3.data[_this3.selectedModal].objectClass + (_this3.data[_this3.selectedModal].parameters.length + 1);
                _this3.showSide = true;
                _this3.selected = s[0].id;

                _this3.removeAll();

                _this3.drow();

                _this3.activeArrow = null;
                _this3.startDrowLine = null;
              });
              g.append("rect").attr("class", "nodes").attr("id", index) // .attr("style", selected)
              .attr("fill", "#017bb0").attr("x", element.x + 85).attr("y", element.y + 10).attr("width", 10).attr("height", 10).attr("rx", 50).attr("ry", 50).on("click", function (d, i, s) {
                d3.event.stopPropagation();
                _this3.selectedModal = s[0].id;
                _this3.selected = s[0].id;

                _this3.removeAll();

                _this3.drow(); // this.arrowSelect();
                // if (this.activeArrow)


                _this3.shepClick(s[0].id, 'left');
              }); //------arrowSelect()

              g.append("rect").attr("class", "nodes").attr("id", index) // .attr("style", selected)
              .attr("fill", "#017bb0").attr("x", element.x + 135).attr("y", element.y + 10).attr("width", 10).attr("height", 10).attr("rx", 50).attr("ry", 50).on("click", function (d, i, s) {
                d3.event.stopPropagation();
                _this3.selectedModal = s[0].id;
                _this3.selected = s[0].id;

                _this3.removeAll();

                _this3.drow(); // this.arrowSelect();
                // if (this.activeArrow)


                _this3.shepClick(s[0].id, 'right');
              }); // let  cg = g.append("g")
              // .attr("id", index + "-del")
              // ;
              // cg.append("circle")
              //   .attr("class", "svg")
              //   .attr("cx", element.x + 140)
              //   .attr("cy", element.y - 13)
              //   .attr("r", 11)
              //   .attr("stroke", "black")
              //   .attr("stroke-width", 2)
              //   .attr("fill", "white");
              //   cg.append("path")
              //   .attr("transform", `translate(${element.x + 128},${element.y -25})`)
              //   .attr("d", "M6.25,6.25,17.75,17.75")
              //   .attr("stroke", "black")
              //   .attr("stroke-width", 3)
              //   .attr("fill", "none");
              //   cg.append("path")
              //   .attr("transform", `translate(${element.x + 128},${element.y -25})`)
              //   .attr("d", "M6.25,17.75,17.75,6.25")
              //   .attr("stroke", "black")
              //   .attr("stroke-width", 3)
              //   .attr("fill", "none")
              // g.append("text")
              //   .attr("id", index + "-remove")
              //   .attr("x", element.x + 140)
              //   .attr("y", element.y - 13)
              //   .attr("class", "boxclose")
              //   .text("x")
              // cg.attr("cursor", "pointer")
              //   .on("click", (d, i, s) => {
              //     d3.event.stopPropagation();
              //     let id = s[0].id.split("-")[0];
              //     console.log(s[0].id);
              //     const dialogRef = this.dialog.open(DialogCreateModelComponent, {
              //       width: '450px',
              //       data: {
              //         label: 'You delete the object! Are you sure?',
              //         deleteMode: true
              //       }
              //     });
              //     dialogRef.afterClosed().subscribe(model => {
              //       if (model) {
              //        console.log(model,id);
              //        for (let index = 0; index < this.data.length; index++) {
              //          const element = this.data[index];
              //          let s = element.selectedIn.indexOf(this.data[id].id);
              //           element.selectedIn.splice(s,1);
              //          let sIn = element.selected.indexOf(this.data[id].id);
              //           element.selected.splice(sIn,1);
              //          console.log(element);
              //        }
              //        this.data.splice(+id, 1);
              //        this.removeAll();
              //        this.drow();
              //       }
              //     });
              //   });

              g.append("text").attr("x", element.x + 105 + (element.objectClass === "AND" ? -8 : 0)).attr("id", index + "-text").attr("y", element.y + 20).attr("fill", "black").attr("font-family", "Open sans-serif").text(element.objectClass).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)).on("mouseover", function (q, w, e) {
                d3.event.stopPropagation();

                if (_this3.activeArrow) {
                  document.documentElement.style.cursor = "default";
                  d3.select(document.getElementById(e[0].id + "main")).style("fill", "#84bd96");
                }
              }).on("mouseout", function (q, w, e) {
                d3.event.stopPropagation();
                d3.select(document.getElementById(e[0].id + "main")).style("fill", "#2196f3");

                if (_this3.activeArrow) {
                  document.documentElement.style.cursor = "not-allowed";
                }
              }).on("click", function (d, i, s) {
                d3.event.stopPropagation();
                var id = s[0].id.split("-");
                _this3.selectedModal = id[0];
                _this3.selected = id[0];

                _this3.removeAll();

                _this3.drow();

                if (_this3.activeArrow) _this3.shepClick(id[0]);
              }).on("dblclick", function (d, i, s) {
                _this3.selectedModal = s[0].id;
                var name = _this3.data[_this3.selectedModal].objectClass + (_this3.data[_this3.selectedModal].parameters.length + 1);
                _this3.showSide = true;
                _this3.selected = s[0].id;

                _this3.removeAll();

                _this3.drow();

                _this3.activeArrow = null;
                _this3.startDrowLine = null;
              });
            } else {
              dx = element.x - 10;
              dy = element.y - 8;
              color = _this3.colors[element.objectClass];
              color = '#f6f7fa';
              count = 0;
              countS = 0;
              var type = element.objectClass.split("-")[0];
              h = 65 + (count > 3 ? (count - 3) * 27 + countS * 5 + count * 5 : 0 + countS * 5);
              selected = _this3.selected !== null && +_this3.selected === +index ? "stroke-width:1;stroke:rgb(0,0,0)" : "stroke-width:1;stroke:#58a6c8";
              g = _this3.conteiner.append("g").attr("class", "g");
              g.attr("id", index);
              g.call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));
              g.on("mouseover", function (q, w, e) {
                d3.event.stopPropagation();

                if (_this3.activeArrow) {
                  document.documentElement.style.cursor = "default";
                  d3.select(document.getElementById(e[0].id + "main")).style("fill", "#84bd96");
                }
              });
              g.on("mouseout", function (q, w, e) {
                d3.event.stopPropagation();
                d3.select(document.getElementById(e[0].id + "main")).style("fill", "#2196f3");

                if (_this3.activeArrow) {
                  document.documentElement.style.cursor = "not-allowed";
                }
              });
              g.on("click", function (d, i, s) {
                d3.event.stopPropagation();
                _this3.selectedModal = s[0].id;
                _this3.selected = s[0].id;

                _this3.removeAll();

                _this3.drow();

                if (_this3.activeArrow) _this3.shepClick(s[0].id);
              });
              g.append("rect").attr("class", "nodes").attr("id", index).attr("style", selected).attr("fill", color).attr("x", element.x - 5).attr("y", element.y - 10).attr("width", 200).attr("height", 135).attr("rx", 5).attr("ry", 5).on("dblclick", function (d, i, s) {
                _this3.newItem = _this3.data[s[0].id] ? _this3.data[s[0].id] : new _shared_model_component_mode__WEBPACK_IMPORTED_MODULE_0__["ComponentClass"]();
                _this3.selectedModal = s[0].id;
                var item = _this3.attributeOptions[_this3.data[_this3.selectedModal].objectClass];
                _this3.newItem.group = _this3.data[_this3.selectedModal].objectClass.split('-')[0];
                _this3.newItem.type = item.type;
                _this3.newItem.operations = item.operations;
                _this3.newItem.values = item.values; // this.newItem.attribute = this.selectedData["name" + this.data[this.selectedModal].objectClass][0];
                // this.newItem.type = 
                // this.getElementsByAttributs(this.newItem.attribute, 'type', this.data[this.selectedModal].objectClass);
                // this.selectedData['operations' + this.data[this.selectedModal].objectClass + this.newItem.attribute] = 
                // this.getElementsByAttributs(this.newItem.attribute, 'operations', this.data[this.selectedModal].objectClass);
                // this.selectedData['values' + this.data[this.selectedModal].objectClass + this.newItem.attribute] = 
                // this.getElementsByAttributs(this.newItem.attribute, 'values', this.data[this.selectedModal].objectClass);

                var name = _this3.data[_this3.selectedModal].objectClass;
                _this3.showSide = true;
                _this3.selected = s[0].id;

                _this3.removeAll();

                _this3.drow();

                _this3.activeArrow = null;
                _this3.startDrowLine = null;
              });
              g.append("rect").attr("class", "nodes").attr("id", index) // .attr("style", selected)
              .attr("fill", "#017bb0").attr("x", element.x - 10).attr("y", element.y + 60).attr("width", 10).attr("height", 10).attr("rx", 50).attr("ry", 50);
              g.append("rect").attr("class", "nodes").attr("id", index) // .attr("style", selected)
              .attr("fill", "#017bb0").attr("x", element.x + 190).attr("y", element.y + 60).attr("width", 10).attr("height", 10).attr("rx", 50).attr("ry", 50).on("click", function (d, i, s) {
                d3.event.stopPropagation();
                _this3.selectedModal = s[0].id;
                _this3.selected = s[0].id;

                _this3.removeAll();

                _this3.drow(); // this.arrowSelect();
                // if (this.activeArrow)


                _this3.shepClick(s[0].id, 'left');
              });
              g.append("rect").attr("class", "nodes") //  .attr("style", selected)
              .attr("fill", "#daedf8").attr("x", element.x).attr("y", element.y - 4).attr("width", 190).attr("height", 30).on("click", function (d, i, s) {
                d3.event.stopPropagation();
                _this3.selectedModal = s[0].id;
                _this3.selected = s[0].id;

                _this3.removeAll();

                _this3.drow(); // this.arrowSelect();
                // if (this.activeArrow)


                _this3.shepClick(s[0].id, 'right');
              });
              g.append("text").attr("id", index + "-text").attr("font-family", "Open Sans").attr("x", element.x + 25).attr("y", element.y + 15).attr("font-weight", "bold").text(element.name).attr("cursor", "pointer");
              g.append("text").attr("id", index + "-text").attr("x", element.x + 10).attr("y", element.y + 60).attr("font-weight", "bold").attr("font-family", "Open Sans").attr("font-size", "14px").text("Key:").attr("cursor", "pointer");
              g.append("text").attr("id", index + "-text").attr("x", element.x + 10).attr("y", element.y + 75).attr("font-weight", "bold").attr("font-family", "Open Sans").attr("font-size", "14px").text("Operation:").attr("cursor", "pointer");
              g.append("text").attr("id", index + "-text").attr("x", element.x + 10).attr("y", element.y + 90).attr("font-weight", "bold").attr("font-family", "Open Sans").attr("font-size", "14px").text("Value:").attr("cursor", "pointer"); //  ----------------

              g.append("text").attr("id", index + "-text").attr("x", element.x + 40).attr("y", element.y + 60).attr("font-family", "Open Sans").attr("font-size", "14px").text(element.key || "xxxx").attr("cursor", "pointer");
              g.append("text").attr("id", index + "-text").attr("x", element.x + 85).attr("y", element.y + 75).attr("font-family", "Open Sans").attr("font-size", "14px").text(element.operation || "xxxx").attr("cursor", "pointer");
              g.append("text").attr("id", index + "-text").attr("x", element.x + 53).attr("y", element.y + 90).attr("font-family", "Open Sans").attr("font-size", "14px").text(element.value || "xxxx").attr("cursor", "pointer");
              g.append("rect").attr("class", "nodes") //  .attr("id", index)
              .attr("style", selected).attr("fill", "white").attr("x", element.x - 20).attr("y", element.y - 30).attr("width", 40).attr("height", 40).attr("rx", 50).attr("ry", 50);
              g.append("image").attr("x", element.x - 13).attr("y", element.y - 23).attr("width", 24).attr("height", 24).attr("xlink:href", "/assets/".concat(_this3.icons[type], ".svg"));
              g.append("line").attr("x1", element.x - 5).attr("y1", element.y + 33).attr("x2", element.x + 195).attr("y2", element.y + 33).attr("stroke", "#58a6c8"); //  .append("path")
              //  .attr("d", "M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z")
              // .text((element.name || element.id));
              // g.append("text")
              //   .attr("x", element.x - 5)
              //   .attr("y", element.y - 13)
              //   .text((element.name || element.id));
            }

            if (_this3.marker) _this3.marker.append("path").attr("class", "path").attr("d", "M 0 0 12 6 0 12 3 6").style("fill", "#ff5722");
            var self = _this3;

            function dragstarted(d) {
              // d3.select(this)
              //   .classed("active", true);
              self.start_x = +d3.event.x;
              self.start_y = +d3.event.y;
            }

            function dragged(d) {
              var current_scale, current_scale_string;
              var transform = document.getElementById('wrap');

              if (transform.getAttribute("transform") === null) {
                current_scale = 1;
              } else {
                current_scale_string = transform.getAttribute("transform").split(" ")[1];
                current_scale = +current_scale_string.substring(6, current_scale_string.length - 1);
              }

              if (!self.zoomTrans) {
                self.zoomTrans = {
                  x: 0,
                  y: 0,
                  k: 1
                };
              }

              self.dragSelected = this.getAttribute("id").split("-")[0];
              self.data[self.dragSelected].x = (d3.event.x - self.zoomTrans.x) / self.zoomTrans.k - 90; // self.start_x + (d3.event.x - self.start_x) / current_scale;
              // (e.offsetX - this.zoomTrans.x) / this.zoomTrans.k;

              var scale = 30;

              if (self.zoomTrans.k < 0.33) {
                scale = 50;
              }

              self.data[self.dragSelected].y = (d3.event.y - self.zoomTrans.y) / self.zoomTrans.k - scale / self.zoomTrans.k + 5; // self.start_y + (d3.event.y - self.start_y) / current_scale;

              self.removeAll();
              self.drow();
            }

            function dragended(d) {
              d3.select(this).classed("active", false); // self.txtQueryChanged.next({
              //   value: self.zoomTrans,
              //   selected: self.dragSelected,
              //   drag: 1
              // });
            }
          });
        }
      }, {
        key: "zoomPlus",
        value: function zoomPlus() {
          this.k += 0.1;
          this.zoom.scaleTo(this.vis, this.k);
        }
      }, {
        key: "zoomMinus",
        value: function zoomMinus() {
          this.k -= 0.1;
          this.zoom.scaleTo(this.vis, this.k);
        }
      }, {
        key: "drowLines",
        value: function drowLines() {
          var _this4 = this;

          this.data.forEach(function (value, index, arr) {
            value.selected.forEach(function (item) {
              var firstSide = item.split('#')[1];
              var secondSide;
              item = item.split('#')[0];

              var to = _this4.searchById(item, _this4.data, 'id');

              var from = _this4.data[index];

              if (to) {
                var _iterator2 = _createForOfIteratorHelper(to.selectedIn),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var it = _step2.value;
                    var id = it.split('#')[0];

                    if (id === from.id) {
                      secondSide = it.split('#')[1];
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                var x = +from.x;
                var y = +from.y;
                var x2 = +to.x;
                var y2 = +to.y;
                var minX = Math.abs(x - x2);
                var minY = Math.abs(y - y2);

                if (from.objectClass === "OR" || from.objectClass === "AND") {
                  if (firstSide === 'left') {
                    x += 8;
                  } else {
                    x -= 8;
                  }
                } else {// if(firstSide === 'left') {
                  //   x -= 148;
                  //   y -= 148;
                  // } else {
                  //   x -= 48;
                  // }
                }

                if (to.objectClass === "OR" || to.objectClass === "AND") {// if(firstSide === 'left') {
                  //   x += 8;
                  // } else {
                  //   x -= 8;
                  // }
                } else {
                  // if(firstSide === 'left') {
                  //   x -= 148;
                  //   y -= 148;
                  // } else {
                  //   x -= 48;
                  // }
                  if (secondSide === 'left') {
                    x2 += 80;
                    y2 += 50;
                  } else {
                    x2 -= 95;
                    y2 += 50;
                  }
                }

                if (minX > minY) {
                  if (+x < +x2) {
                    x += 25;
                    x2 -= 25;
                  } else {
                    x -= 25;
                    x2 += 25;
                  }
                } else {// if (+y < +y2) {
                  //   y += 25;
                  //   y2 -= 25;
                  // } else {
                  //   y -= 25;
                  //   y2 += 25;
                  // }
                }

                var d = {
                  source: {
                    x: x + 110,
                    y: y + 15
                  },
                  target: {
                    x: x2 + 110,
                    y: y2 + 15
                  }
                };
                var link = d3.linkHorizontal().x(function (d) {
                  return d.x;
                }).y(function (d) {
                  return d.y;
                });

                _this4.conteiner.append("path").attr("d", link(d)).attr("id", from.id + to.id).attr("class", "path").style("fill", "none").style("stroke", "red").attr("stroke-opacity", 0.4).attr("stroke-width", 1.5).attr("marker-mid", "url(#triangle)");

                _this4.conteiner.append("path").attr("class", "path").attr("d", link(d)).style("fill", "none").style("stroke", "red").attr("stroke-opacity", 0).attr("stroke-width", 15).on("click", function () {
                  _this4.selected = undefined;

                  _this4.removeAll();

                  _this4.drow(); // if (this.selectedLine) {
                  //   this.unselectArrow();
                  // }


                  _this4.clickArrow = true;
                  _this4.selectedLine = from.id + to.id;
                  _this4.selectedLineId = index;
                  _this4.selectedLineFrom = from;
                  _this4.selectedLineTo = to;
                  d3.select(document.getElementById(from.id + to.id)).style("stroke-width", 2.5);
                  d3.select(document.getElementById(from.id + to.id)).style("stroke", "red");
                });

                _this4.conteiner.append("polyline").attr("points", d.source.x + "," + d.source.y + " " + (d.source.x + d.target.x) / 2 + "," + (d.source.y + d.target.y) / 2 + " " + d.target.x + "," + d.target.y).style("fill", "none").attr("marker-mid", "url(#triangle)");
              }
            });
          });
        }
      }, {
        key: "menuInit",
        value: function menuInit() {
          var _this5 = this;

          this.types.forEach(function (type) {
            if (document.getElementById(type)) {
              document.getElementById(type).addEventListener("dragstart", function (ev) {
                ev.dataTransfer.setData('text', 'foo');
                _this5.dragType = type;

                if (_this5.isStart && type === "Start") {
                  event.preventDefault();
                }
              }, false);
            }
          });
          document.getElementById("AND").addEventListener("dragstart", function (ev) {
            ev.dataTransfer.setData('text', 'foo');
            _this5.dragType = "AND";
          }, false);
          document.getElementById("OR").addEventListener("dragstart", function (ev) {
            ev.dataTransfer.setData('text', 'foo');
            _this5.dragType = "OR";
          }, false);
          document.addEventListener("dragover", function (event) {
            event.preventDefault();
          });
          document.getElementById("graph").addEventListener("drop", function (ev) {
            var x, y;

            if (document.getElementById("wrap").getAttribute("transform") === null) {
              x = ev.offsetX;
              y = ev.offsetY;
            } else {
              x = (ev.offsetX - _this5.zoomTrans.x) / _this5.zoomTrans.k;
              y = (ev.offsetY - _this5.zoomTrans.y) / _this5.zoomTrans.k;
            }

            ev.preventDefault();
            var model = new _shared_model_component_mode__WEBPACK_IMPORTED_MODULE_0__["ComponentClass"]();
            model.x = x - 100;
            model.y = y;
            model.objectClass = _this5.dragType;
            model.id = _this5.uuidv4();
            model.selected = [];
            model.key = "";

            _this5.data.push(model);

            _this5.drow();
          }, false);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.selected = null;
          this.activeArrow = null; // this.clickArrow = null;
          // this.selectedLine = null;
          // this.selectedLineId = null;
          // this.selectedLineFrom = null;
          // this.selectedLineTo = null;

          this.startDrowLine = null;
        }
      }, {
        key: "rangeWidth",
        value: function rangeWidth(flag) {
          if (flag) {
            setTimeout(function () {
              document.getElementById("lineZoomRange").style.width = 50 + "%";
            }, 500);
          } else {
            var input = document.getElementById("range");
            var width;
            width = input["value"] / 2 * 100;
            document.getElementById("lineZoomRange").style.width = width + "%";
          }
        }
      }, {
        key: "removeAll",
        value: function removeAll() {
          d3.selectAll("line").remove();
          d3.selectAll("polyline").remove();
          d3.selectAll("rect").remove();
          d3.selectAll("text").remove();
          d3.selectAll("circle").remove(); // d3.selectAll("g").remove();

          d3.selectAll(".path").remove();
          d3.selectAll(".g").remove(); // this.types.forEach(type => {
          //   d3.selectAll(type).remove();
          // });
        }
      }, {
        key: "shepClick",
        value: function shepClick(s, side) {
          var _this6 = this;

          this.selected = s;
          var id = this.selected;

          if (!this.firstSide) {
            this.firstSide = side;
          } else {
            this.secondSide = side;
          }

          if (!this.startDrowLine) {
            this.activeArrow = id;
            this.startDrowLine = id;
          } else {
            if (this.data[this.activeArrow].selected.length > 0 && !(this.data[this.activeArrow].objectClass === "OR" || this.data[this.activeArrow].objectClass === "AND") && (this.data[this.selected].objectClass === "OR" || this.data[this.selected].objectClass === "AND")) {
              this.activeArrow = null;
              this.startDrowLine = null;
              this.removeAll();
              this.drowLines();
              this.drow();
              return;
            }

            if (this.data[this.activeArrow].objectClass !== "OR" && this.data[this.activeArrow].objectClass !== "AND" && this.data[this.selected].objectClass !== "OR" && this.data[this.selected].objectClass !== "AND") {
              this.activeArrow = null;
              this.startDrowLine = null;
              this.removeAll();
              this.drowLines();
              this.drow();
              return;
            }

            if (this.data[this.selected].selectedIn.length === 1) {
              this.activeArrow = null;
              this.startDrowLine = null;
              this.removeAll();
              this.drowLines();
              this.drow();
              return;
            }

            var count = 0;
            this.data[id].selected.forEach(function (element, index) {
              if (_this6.data[_this6.activeArrow].id === element) {
                count++;
              }
            });
            this.data[this.activeArrow].selected.forEach(function (element, index) {
              if (_this6.data[id].id === element) {
                count++;
              }
            });

            if (count) {
              this.activeArrow = null;
              this.startDrowLine = null;
              this.removeAll();
              this.drowLines();
              this.drow();
              return;
            }

            if (id !== this.activeArrow) {
              this.data[this.activeArrow].selected.push(this.data[id].id + '#' + this.secondSide);
              this.data[this.selected].selectedIn.push(this.data[this.activeArrow].id + '#' + this.firstSide);
              this.firstSide = null;
              this.secondSide = null; // this.txtQueryChanged.next({
              //   value: "query",
              //   selected: this.activeArrow
              // });
            }

            this.activeArrow = null;
            this.startDrowLine = null;
          }

          this.removeAll();
          this.drowLines();
          this.drow();
        }
      }, {
        key: "searchById",
        value: function searchById(id, arr, idField) {
          if (arr) {
            var f = idField || "_id";
            var result = arr.find(function (element) {
              return element[f] === id;
            });
            return result;
          }
        }
      }, {
        key: "uuidv4",
        value: function uuidv4() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == "x" ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }, {
        key: "arrowSelect",
        value: function arrowSelect() {
          this.activeArrow = true;
        }
      }, {
        key: "saveForm",
        value: function saveForm() {
          this.data[this.selectedModal].key = this.newItem.key;
          this.removeAll();
          this.drow();
        }
      }, {
        key: "getAttribute",
        value: function getAttribute(newItem, type, hasArr) {
          var items = this.settings[newItem.name].attributes;
          var arr = [];

          if (hasArr) {
            var _iterator3 = _createForOfIteratorHelper(items),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                if (item[type]) arr = arr.concat(item[type]);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } else {
            var _iterator4 = _createForOfIteratorHelper(items),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _item = _step4.value;
                arr.push(_item[type]);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          return _toConsumableArray(new Set(arr));
        }
      }, {
        key: "getElementsByAttributs",
        value: function getElementsByAttributs(attribute, type, calss) {
          var arr;

          var _iterator5 = _createForOfIteratorHelper(this.optionsData),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var iterator = _step5.value;

              if (iterator.name === calss) {
                for (var index = 0; index < iterator.attributes.length; index++) {
                  var element = iterator.attributes[index];

                  if (element.name === attribute) {
                    arr = element[type];
                  }
                }
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return arr;
        }
      }, {
        key: "changeAttr",
        value: function changeAttr(name) {
          this.newItem.attribute = name;
          this.newItem.type = this.getElementsByAttributs(this.newItem.attribute, 'type', this.data[this.selectedModal].objectClass);
          this.selectedData['operations' + this.data[this.selectedModal].objectClass + this.newItem.attribute] = this.getElementsByAttributs(this.newItem.attribute, 'operations', this.data[this.selectedModal].objectClass);
          this.selectedData['values' + this.data[this.selectedModal].objectClass + this.newItem.attribute] = this.getElementsByAttributs(this.newItem.attribute, 'values', this.data[this.selectedModal].objectClass);
        }
      }, {
        key: "deleteElement",
        value: function deleteElement() {
          var _this7 = this;

          var dialogRef = this.dialog.open(_shared_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_1__["DialogCreateModelComponent"], {
            width: '450px',
            data: {
              label: 'You delete the object! Are you sure?',
              deleteMode: true
            }
          });
          dialogRef.afterClosed().subscribe(function (model) {
            if (model) {
              if (_this7.selected) {
                for (var index = 0; index < _this7.data.length; index++) {
                  var element = _this7.data[index];
                  var s = element.selectedIn.indexOf(_this7.data[_this7.selected].id);
                  element.selectedIn.splice(s, 1);
                  var sIn = element.selected.indexOf(_this7.data[_this7.selected].id);
                  element.selected.splice(sIn, 1);
                }

                _this7.data.splice(_this7.selected, 1);
              }

              if (_this7.selectedLine) {
                for (var _index = 0; _index < _this7.data.length; _index++) {
                  var _element = _this7.data[_index];

                  if (_element.id === _this7.selectedLineTo.id) {
                    for (var _index2 = 0; _index2 < _element.selectedIn.length; _index2++) {
                      var e = _element.selectedIn[_index2].split('#')[0];

                      if (e === _this7.selectedLineFrom.id) {
                        _element.selectedIn.splice(_index2, 1);
                      }
                    }
                  }

                  if (_element.id === _this7.selectedLineFrom.id) {
                    for (var _index3 = 0; _index3 < _element.selected.length; _index3++) {
                      var _e = _element.selected[_index3].split('#')[0];

                      if (_e === _this7.selectedLineTo.id) {
                        _element.selected.splice(_index3, 1);
                      }
                    }
                  } // let sIn = element.selected.indexOf(this.selectedLineTo);
                  // console.log(element, sIn, s, this.selectedLineTo.id, this.selectedLineFrom.id);
                  // if(sIn !== -1 && s !== -1) {
                  //   element.selectedIn.splice(s,1);
                  //   element.selected.splice(sIn,1);
                  // }

                }
              }

              _this7.removeAll();

              _this7.drow();
            }
          });
        }
      }]);

      return MainComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/dialog-create-model/dialog-create-model.component.ngfactory.js":
  /*!***************************************************************************************!*\
    !*** ./src/app/shared/dialog-create-model/dialog-create-model.component.ngfactory.js ***!
    \***************************************************************************************/

  /*! exports provided: RenderType_DialogCreateModelComponent, View_DialogCreateModelComponent_0, View_DialogCreateModelComponent_Host_0, DialogCreateModelComponentNgFactory */

  /***/
  function srcAppSharedDialogCreateModelDialogCreateModelComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_DialogCreateModelComponent", function () {
      return RenderType_DialogCreateModelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DialogCreateModelComponent_0", function () {
      return View_DialogCreateModelComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DialogCreateModelComponent_Host_0", function () {
      return View_DialogCreateModelComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogCreateModelComponentNgFactory", function () {
      return DialogCreateModelComponentNgFactory;
    });
    /* harmony import */


    var _dialog_create_model_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dialog-create-model.component.scss.shim.ngstyle */
    "./src/app/shared/dialog-create-model/dialog-create-model.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _dialog_create_model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dialog-create-model.component */
    "./src/app/shared/dialog-create-model/dialog-create-model.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_DialogCreateModelComponent = [_dialog_create_model_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_DialogCreateModelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_DialogCreateModelComponent,
      data: {}
    });

    function View_DialogCreateModelComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "h1", [["class", "mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Do you want remove element?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "div", [["class", "jc-c df mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "button", [["cdkFocusInitial", ""], ["class", "mat-focus-indicator"], ["color", "primary"], ["mat-button", ""], ["mat-raised-button", ""]], [[1, "aria-label", 0], [1, "type", 0], [1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).dialogResult) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], {
        dialogResult: [0, "dialogResult"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Ok "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.onNoClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"]))], function (_ck, _v) {
        _ck(_v, 1, 0);

        var currVal_5 = true;

        _ck(_v, 6, 0, currVal_5);

        var currVal_6 = "primary";

        _ck(_v, 7, 0, currVal_6);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ariaLabel || null;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).type;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled || null;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._animationMode === "NoopAnimations";

        _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).disabled || null;
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._animationMode === "NoopAnimations";

        _ck(_v, 9, 0, currVal_7, currVal_8);
      });
    }

    function View_DialogCreateModelComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dialog-create-model", [], null, null, null, View_DialogCreateModelComponent_0, RenderType_DialogCreateModelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dialog_create_model_component__WEBPACK_IMPORTED_MODULE_7__["DialogCreateModelComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var DialogCreateModelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dialog-create-model", _dialog_create_model_component__WEBPACK_IMPORTED_MODULE_7__["DialogCreateModelComponent"], View_DialogCreateModelComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shared/dialog-create-model/dialog-create-model.component.scss.shim.ngstyle.js":
  /*!***********************************************************************************************!*\
    !*** ./src/app/shared/dialog-create-model/dialog-create-model.component.scss.shim.ngstyle.js ***!
    \***********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSharedDialogCreateModelDialogCreateModelComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".textarea-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.textarea-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 170px;\n  border: 1px solid #949494;\n  margin-bottom: -8px;\n  resize: none;\n  background: white;\n  position: relative;\n  z-index: 1;\n  padding: 5px;\n  box-sizing: border-box;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\nbutton.func[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 7px;\n  margin-top: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy1jcmVhdGUtbW9kZWwvQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXGJwbS9zcmNcXGFwcFxcc2hhcmVkXFxkaWFsb2ctY3JlYXRlLW1vZGVsXFxkaWFsb2ctY3JlYXRlLW1vZGVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZGlhbG9nLWNyZWF0ZS1tb2RlbC9kaWFsb2ctY3JlYXRlLW1vZGVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0VKO0FEQ0E7RUFDSSxjQUFBO0FDRUo7QURBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2ctY3JlYXRlLW1vZGVsL2RpYWxvZy1jcmVhdGUtbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGFyZWEtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NDk0OTQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cbi5tYXQtZm9ybS1maWVsZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmJ1dHRvbi5mdW5je1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwIDdweDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xufSIsIi50ZXh0YXJlYS13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50ZXh0YXJlYS13cmFwIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk0OTQ5NDtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgcmVzaXplOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24uZnVuYyB7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMCA3cHg7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/shared/dialog-create-model/dialog-create-model.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/dialog-create-model/dialog-create-model.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DialogCreateModelComponent */

  /***/
  function srcAppSharedDialogCreateModelDialogCreateModelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogCreateModelComponent", function () {
      return DialogCreateModelComponent;
    });

    var DialogCreateModelComponent =
    /*#__PURE__*/
    function () {
      function DialogCreateModelComponent(dialogRef, data) {
        _classCallCheck(this, DialogCreateModelComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.label = "";
      }

      _createClass(DialogCreateModelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "validChange",
        value: function validChange(e) {
          if (!e) {
            this.valid = false;
            return;
          }

          var res = this.dataArr.find(function (element) {
            return e === element.id;
          });

          if (!res) {
            this.valid = true;
          } else {
            this.valid = false;
          }

          if (this.label === 'Edit Model' && this.saveId === e) {
            this.valid = true;
          }
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          var re = /^(\d*[a-zA-Z]*\d*[a-zA-Z]*)*$/mg;

          if (!re.test(e.key)) {
            return false;
          }
        }
      }]);

      return DialogCreateModelComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/model/component.mode.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/model/component.mode.ts ***!
    \************************************************/

  /*! exports provided: ComponentClass */

  /***/
  function srcAppSharedModelComponentModeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentClass", function () {
      return ComponentClass;
    });

    var ComponentClass = function ComponentClass() {
      _classCallCheck(this, ComponentClass);

      this.key = "";
      this.selectedIn = [];
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Documents\bpm\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map