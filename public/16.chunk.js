webpackJsonp([16,30],{

/***/ 714:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_component__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_routes__ = __webpack_require__(836);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailModule = (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__mail_routes__["a" /* default */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mail_component__["a" /* MailComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], MailModule);
    return MailModule;
}());
/* harmony default export */ exports["default"] = MailModule;


/***/ },

/***/ 769:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailComponent = (function () {
    function MailComponent() {
    }
    MailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mail',
            template: __webpack_require__(946),
            styles: [__webpack_require__(920)]
        }), 
        __metadata('design:paramtypes', [])
    ], MailComponent);
    return MailComponent;
}());


/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mail_component__ = __webpack_require__(769);


var mailRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__mail_component__["a" /* MailComponent */],
        children: [
            { path: 'inbox', loadChildren: 'app/dashboard/mail/inbox/inbox.module' },
            { path: 'compose', loadChildren: 'app/dashboard/mail/compose/compose.module' }
        ]
    }
];
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(mailRoutes);


/***/ },

/***/ 920:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 946:
/***/ function(module, exports) {

module.exports = "this is a mail page\n<router-outlet></router-outlet>"

/***/ }

});
//# sourceMappingURL=16.bundle.map