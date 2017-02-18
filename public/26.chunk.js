webpackJsonp([26,30],{

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__404_page_component__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__404_page_routes__ = __webpack_require__(823);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var pageNotFoundModule = (function () {
    function pageNotFoundModule() {
    }
    pageNotFoundModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__404_page_routes__["a" /* default */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__404_page_component__["a" /* pageNotFoundComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], pageNotFoundModule);
    return pageNotFoundModule;
}());
/* harmony default export */ exports["default"] = pageNotFoundModule;


/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(390);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return pageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pageNotFoundComponent = (function () {
    function pageNotFoundComponent(_router) {
        this._router = _router;
    }
    pageNotFoundComponent.prototype.gotoHome = function () {
        this._router.navigate(['dashboard', 'home']);
    };
    pageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-404-page',
            template: __webpack_require__(933),
            styles: [__webpack_require__(907)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], pageNotFoundComponent);
    return pageNotFoundComponent;
    var _a;
}());


/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__404_page_component__ = __webpack_require__(756);


var pageNotFoundRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__404_page_component__["a" /* pageNotFoundComponent */] }
];
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(pageNotFoundRoutes);


/***/ },

/***/ 907:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 933:
/***/ function(module, exports) {

module.exports = "<div class=\"login-page animate\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4\">\n        \t<a class=\"hvr-pulse\" (click)=\"gotoHome()\"><img src=\"assets/images/flat-avatar.png\" class=\"user-avatar\" /></a>\n\t\t\t<h1>Ani Theme </h1>\n\t\t\t<div class=\"four-container text-center\">\n\t\t\t\t<h1>404</h1>\n\t\t\t</div>\n\t\t\tOops! Page not found.\n\t\t</div>\t\n\t</div>\n</div>"

/***/ }

});
//# sourceMappingURL=26.bundle.map