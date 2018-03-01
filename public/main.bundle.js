webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__status_status_component__ = __webpack_require__("../../../../../src/app/status/status.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'status', component: __WEBPACK_IMPORTED_MODULE_3__status_status_component__["a" /* StatusComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_status_component__ = __webpack_require__("../../../../../src/app/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_login_service__ = __webpack_require__("../../../../../src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_status_service__ = __webpack_require__("../../../../../src/app/shared/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_http_wrap_service__ = __webpack_require__("../../../../../src/app/shared/services/http-wrap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_http_xsrf__ = __webpack_require__("../../../../../src/app/shared/services/http-xsrf.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__status_status_component__["a" /* StatusComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_page_login_page_component__["a" /* LoginPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientXsrfModule */].withOptions({
                    cookieName: 'My-Xsrf-Cookie',
                    headerName: 'My-Xsrf-Header'
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng_recaptcha__["RecaptchaModule"].forRoot(),
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_13__shared_services_http_xsrf__["a" /* HttpXsrfInterceptor */], multi: true }, __WEBPACK_IMPORTED_MODULE_12__shared_services_http_wrap_service__["a" /* HttpWrap */], __WEBPACK_IMPORTED_MODULE_9__shared_services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_10__shared_services_status_service__["a" /* StatusService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"col-md-8 col-md-offset-2 login-form\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 login-header\">\r\n          <div class=\"col-md-3\">\r\n            <img src=\"../../assets/logo.png\" alt=\"Logo\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 login-body\">\r\n          <p>Welcome <span *ngIf=\"!registerShow\">back!</span></p>\r\n          <div class=\"col-md-12 \">\r\n            <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\r\n            <input type=\"text\" placeholder=\"User name\" [(ngModel)]=\"login.username\" >\r\n          </div>\r\n          <div class=\"col-md-12 input-row\">\r\n            <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\r\n            <input type=\"text\" placeholder=\"Password\" [(ngModel)]=\"login.password\">\r\n          </div>\r\n          <div class=\"col-md-12 input-row\">\r\n            <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LcKNEIUAAAAAPGe3VDGzUcqXyi5iyMD-IPhiXej\"></re-captcha>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <button (click)=\"signIn()\">\r\n                Enter\r\n                <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.sass":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/bkg-login.png")) + ");\n  height: 100vh;\n  width: 100%;\n  background-size: 122%;\n  background-position-y: -302px;\n  background-position-x: -203px;\n  background-repeat: no-repeat; }\n  .wrapper .login-form {\n    margin-top: 100px;\n    box-shadow: 10px 10px 90px -2px rgba(0, 0, 0, 0.49); }\n  .wrapper .login-header {\n    background-color: #0e1a35;\n    padding-top: 15px;\n    padding-right: 0; }\n    .wrapper .login-header span {\n      display: block;\n      color: white;\n      font-size: 18px;\n      margin: 17px 0 0 30px;\n      padding-bottom: 31px;\n      width: 100px;\n      text-align: center;\n      letter-spacing: 1.5px; }\n    .wrapper .login-header .span-active {\n      border-bottom: 4px solid #5584ff; }\n    .wrapper .login-header img {\n      width: 70px; }\n  .wrapper .login-body {\n    text-align: center;\n    background-color: #f6f7fa;\n    padding: 60px;\n    font-size: 16px; }\n    .wrapper .login-body button {\n      width: 45%;\n      margin-top: 50px;\n      background-color: #5584ff;\n      padding: 15px;\n      border-radius: 35px;\n      color: white;\n      outline: none; }\n      .wrapper .login-body button:hover {\n        background-color: #1277f9;\n        cursor: pointer; }\n      .wrapper .login-body button i {\n        position: absolute;\n        right: 33%;\n        top: 64%;\n        font-size: 18px; }\n    .wrapper .login-body .input-row i {\n      position: absolute;\n      left: 150px;\n      top: 6px;\n      font-size: 18px;\n      color: #5584ff; }\n    .wrapper .login-body input {\n      background-color: transparent;\n      border: none;\n      border-bottom: 1px solid #d4d9e3;\n      width: 60%;\n      padding: 4px 10px 4px  40px;\n      outline: none;\n      margin-bottom: 30px;\n      color: #8492af; }\n      .wrapper .login-body input::-webkit-input-placeholder {\n        color: #8492af; }\n      .wrapper .login-body input:-ms-input-placeholder {\n        color: #8492af; }\n      .wrapper .login-body input::placeholder {\n        color: #8492af; }\n    .wrapper .login-body p {\n      font-size: 30px;\n      color: #8492af;\n      font-weight: 200;\n      margin-bottom: 50px; }\n      .wrapper .login-body p span {\n        color: #5584ff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_login_service__ = __webpack_require__("../../../../../src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_http_wrap_service__ = __webpack_require__("../../../../../src/app/shared/services/http-wrap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_status_service__ = __webpack_require__("../../../../../src/app/shared/services/status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPageComponent = (function () {
    function LoginPageComponent(router, loginService, httpWrap, StatusService) {
        this.router = router;
        this.loginService = loginService;
        this.httpWrap = httpWrap;
        this.StatusService = StatusService;
        this.login = {
            "captcha": "",
            "username": "developertest@amalyze.com",
            "password": "Iilo1ail",
            "password_md5": ""
        };
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.resolved = function (e) {
        console.log(e);
        this.login.captcha = e;
    };
    LoginPageComponent.prototype.signIn = function () {
        var _this = this;
        if (this.login.captcha) {
            this.login.password_md5 = md5(this.login.password);
            this.loginService.login(this.login).subscribe(function (response) {
                var headers = response.headers;
                var fToken = headers.get('X-FALCON-TOKEN');
                var xToken = headers.get('X-XSRF-TOKEN');
                console.log(fToken, xToken);
                _this.httpWrap.setHeaders(fToken, xToken);
                _this.router.navigate(['status']);
            });
        }
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_http_wrap_service__["a" /* HttpWrap */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_http_wrap_service__["a" /* HttpWrap */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_status_service__["a" /* StatusService */]) === "function" && _d || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/http-wrap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpWrap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpWrap = (function () {
    function HttpWrap(http) {
        this.http = http;
    }
    HttpWrap.prototype.createAuthorizationHeader = function (headers) {
        headers.append('X-FALCON-TOKEN', this.fToken);
        headers.append('X-XSRF-TOKEN', this.xToken);
    };
    HttpWrap.prototype.setHeaders = function (fToken, xToken) {
        this.fToken = fToken;
        this.xToken = xToken;
    };
    HttpWrap.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    HttpWrap.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpWrap = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], HttpWrap);
    return HttpWrap;
    var _a;
}());

//# sourceMappingURL=http-wrap.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/http-xsrf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpXsrfInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpXsrfInterceptor = (function () {
    function HttpXsrfInterceptor(tokenExtractor) {
        this.tokenExtractor = tokenExtractor;
    }
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var headerName = 'X-XSRF-TOKEN';
        var token = this.tokenExtractor.getToken();
        if (token !== null && !req.headers.has(headerName)) {
            req = req.clone({ headers: req.headers.set(headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpXsrfTokenExtractor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpXsrfTokenExtractor */]) === "function" && _a || Object])
    ], HttpXsrfInterceptor);
    return HttpXsrfInterceptor;
    var _a;
}());

//# sourceMappingURL=http-xsrf.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (obj) {
        return this.http.post('https://api.amalyze.com/0.0.12/system.user.login', obj);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_wrap_service__ = __webpack_require__("../../../../../src/app/shared/services/http-wrap.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusService = (function () {
    function StatusService(http) {
        this.http = http;
    }
    StatusService.prototype.status = function (obj) {
        return this.http.post('https://api.amalyze.com/0.0.12/system.user.status', obj);
    };
    StatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_wrap_service__["a" /* HttpWrap */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_wrap_service__["a" /* HttpWrap */]) === "function" && _a || Object])
    ], StatusService);
    return StatusService;
    var _a;
}());

//# sourceMappingURL=status.service.js.map

/***/ }),

/***/ "../../../../../src/app/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"col-md-8 col-md-offset-2 login-form\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 login-body\">\r\n          <p>Welcome <span *ngIf=\"user\">{{user.email}}</span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/status/status.component.sass":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/bkg-login.png")) + ");\n  height: 100vh;\n  width: 100%;\n  background-size: 122%;\n  background-position-y: -302px;\n  background-position-x: -203px;\n  background-repeat: no-repeat; }\n  .wrapper .login-form {\n    margin-top: 100px;\n    box-shadow: 10px 10px 90px -2px rgba(0, 0, 0, 0.49); }\n  .wrapper .login-header {\n    background-color: #0e1a35;\n    padding-top: 15px;\n    padding-right: 0; }\n    .wrapper .login-header span {\n      display: block;\n      color: white;\n      font-size: 18px;\n      margin: 17px 0 0 30px;\n      padding-bottom: 31px;\n      width: 100px;\n      text-align: center;\n      letter-spacing: 1.5px; }\n    .wrapper .login-header .span-active {\n      border-bottom: 4px solid #5584ff; }\n    .wrapper .login-header img {\n      width: 70px; }\n  .wrapper .login-body {\n    text-align: center;\n    background-color: #f6f7fa;\n    padding: 60px;\n    font-size: 16px; }\n    .wrapper .login-body button {\n      width: 45%;\n      margin-top: 50px;\n      background-color: #5584ff;\n      padding: 15px;\n      border-radius: 35px;\n      color: white;\n      outline: none; }\n      .wrapper .login-body button:hover {\n        background-color: #1277f9;\n        cursor: pointer; }\n      .wrapper .login-body button i {\n        position: absolute;\n        right: 33%;\n        top: 64%;\n        font-size: 18px; }\n    .wrapper .login-body .input-row i {\n      position: absolute;\n      left: 150px;\n      top: 6px;\n      font-size: 18px;\n      color: #5584ff; }\n    .wrapper .login-body input {\n      background-color: transparent;\n      border: none;\n      border-bottom: 1px solid #d4d9e3;\n      width: 60%;\n      padding: 4px 10px 4px  40px;\n      outline: none;\n      margin-bottom: 30px;\n      color: #8492af; }\n      .wrapper .login-body input::-webkit-input-placeholder {\n        color: #8492af; }\n      .wrapper .login-body input:-ms-input-placeholder {\n        color: #8492af; }\n      .wrapper .login-body input::placeholder {\n        color: #8492af; }\n    .wrapper .login-body p {\n      font-size: 30px;\n      color: #8492af;\n      font-weight: 200;\n      margin-bottom: 50px; }\n      .wrapper .login-body p span {\n        color: #5584ff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_status_service__ = __webpack_require__("../../../../../src/app/shared/services/status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatusComponent = (function () {
    function StatusComponent(router, statusService) {
        this.router = router;
        this.statusService = statusService;
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.statusService.status({}).subscribe(function (res) {
                _this.user = res.user;
                console.log(_this.user);
            });
        }, 600);
    };
    StatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-status',
            template: __webpack_require__("../../../../../src/app/status/status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/status/status.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_status_service__["a" /* StatusService */]) === "function" && _b || Object])
    ], StatusComponent);
    return StatusComponent;
    var _a, _b;
}());

//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/assets/bkg-login.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bkg-login.bc8b5fe5695017d3349c.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map