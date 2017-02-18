webpackJsonp([21,30],{

/***/ 708:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_component__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_routes__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormModule = (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__form_routes__["a" /* default */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__form_component__["a" /* FormComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], FormModule);
    return FormModule;
}());
/* harmony default export */ exports["default"] = FormModule;


/***/ },

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(940),
            styles: [__webpack_require__(914)]
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());


/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_component__ = __webpack_require__(763);


var formRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__form_component__["a" /* FormComponent */],
        children: [
            { path: 'elements', loadChildren: 'app/dashboard/form/form-element/form-element.module' },
            { path: 'components', loadChildren: 'app/dashboard/form/form-component/form-component.module' }
        ]
    }
];
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(formRoutes);


/***/ },

/***/ 914:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 940:
/***/ function(module, exports) {

module.exports = "form\n<router-outlet></router-outlet>"

/***/ }

});
//# sourceMappingURL=21.bundle.map