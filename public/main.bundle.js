webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_request_booking_request_component__ = __webpack_require__("./src/app/booking-request/booking-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services_component__ = __webpack_require__("./src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__ = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__special_offer_special_offer_component__ = __webpack_require__("./src/app/special-offer/special-offer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_wrap_dashboard_wrap_component__ = __webpack_require__("./src/app/dashboard-wrap/dashboard-wrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        component: __WEBPACK_IMPORTED_MODULE_8__dashboard_wrap_dashboard_wrap_component__["a" /* DashboardWrapComponent */],
        path: '',
        children: [
            {
                component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
                path: 'dashboard'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_3__booking_request_booking_request_component__["a" /* BookingRequestComponent */],
                path: 'booking-request'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_4__services_services_component__["a" /* ServicesComponent */],
                path: 'services'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */],
                path: 'settings'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
                path: 'profile'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_7__special_offer_special_offer_component__["a" /* SpecialOfferComponent */],
                path: 'special-offer'
            },
        ]
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__["a" /* SignUpComponent */],
        path: 'sign-up'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
        path: 'login'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_header_header_component__ = __webpack_require__("./src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_left_menu_left_menu_component__ = __webpack_require__("./src/app/shared/left-menu/left-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_foter_foter_component__ = __webpack_require__("./src/app/shared/foter/foter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__booking_request_booking_request_component__ = __webpack_require__("./src/app/booking-request/booking-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__booking_request_appointment_booking_request_appointment_booking_request_component__ = __webpack_require__("./src/app/booking-request/appointment-booking-request/appointment-booking-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__booking_request_confirm_booking_request_confirm_booking_request_component__ = __webpack_require__("./src/app/booking-request/confirm-booking-request/confirm-booking-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__booking_request_reject_booking_request_reject_booking_request_component__ = __webpack_require__("./src/app/booking-request/reject-booking-request/reject-booking-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sign_up_sign_up_component__ = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sign_up_step_1_sign_up_step_1_sign_up_component__ = __webpack_require__("./src/app/sign-up/step-1-sign-up/step-1-sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sign_up_step_2_sign_up_step_2_sign_up_component__ = __webpack_require__("./src/app/sign-up/step-2-sign-up/step-2-sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sign_up_step_3_sign_up_step_3_sign_up_component__ = __webpack_require__("./src/app/sign-up/step-3-sign-up/step-3-sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_services_component__ = __webpack_require__("./src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__special_offer_special_offer_component__ = __webpack_require__("./src/app/special-offer/special-offer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__special_offer_new_special_offer_new_special_offer_component__ = __webpack_require__("./src/app/special-offer/new-special-offer/new-special-offer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__settings_change_password_change_password_component__ = __webpack_require__("./src/app/settings/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__settings_add_auth_user_add_auth_user_component__ = __webpack_require__("./src/app/settings/add-auth-user/add-auth-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_wrap_dashboard_wrap_component__ = __webpack_require__("./src/app/dashboard-wrap/dashboard-wrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_calendar__ = __webpack_require__("./node_modules/primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_left_menu_left_menu_component__["a" /* LeftMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_foter_foter_component__["a" /* FoterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__booking_request_booking_request_component__["a" /* BookingRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_9__booking_request_appointment_booking_request_appointment_booking_request_component__["a" /* AppointmentBookingRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_10__booking_request_confirm_booking_request_confirm_booking_request_component__["a" /* ConfirmBookingRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_11__booking_request_reject_booking_request_reject_booking_request_component__["a" /* RejectBookingRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_13__sign_up_step_1_sign_up_step_1_sign_up_component__["a" /* Step1SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_14__sign_up_step_2_sign_up_step_2_sign_up_component__["a" /* Step2SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_15__sign_up_step_3_sign_up_step_3_sign_up_component__["a" /* Step3SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_16__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__special_offer_special_offer_component__["a" /* SpecialOfferComponent */],
                __WEBPACK_IMPORTED_MODULE_18__special_offer_new_special_offer_new_special_offer_component__["a" /* NewSpecialOfferComponent */],
                __WEBPACK_IMPORTED_MODULE_19__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__settings_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_21__settings_add_auth_user_add_auth_user_component__["a" /* AddAuthUserComponent */],
                __WEBPACK_IMPORTED_MODULE_22__dashboard_wrap_dashboard_wrap_component__["a" /* DashboardWrapComponent */],
                __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_23_primeng_calendar__["CalendarModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking-request/appointment-booking-request/appointment-booking-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <div class=\"main-caption\">\n    APPOINTMENT REQUEST DETAIL\n  </div>\n  <div class=\"name-wrap\">\n    <div class=\"name-lable\">\n      Patient Name\n    </div>\n    <div class=\"colon\">\n      :\n    </div>\n    <div class=\"name\">\n      Andrew Campbell\n    </div>\n  </div>\n  <div class=\"age-wrap\">\n    <div class=\"age-lable\">\n      Age\n    </div>\n    <div class=\"colon\">\n      :\n    </div>\n    <div class=\"age\">\n      36 year old\n    </div>\n  </div>\n  <div class=\"second-lable\">\n    BOOKING REQUEST INFO\n  </div>\n  <div class=\"booking-content-wrap\">\n    <div class=\"services-lable\">\n      Requsted Services\n    </div>\n    <div class=\"colon\">\n      :\n    </div>\n    <div class=\"info\">\n      Eye CheckUp\n    </div>\n  </div>\n  <div class=\"booking-content-wrap-bot\">\n    <div class=\"services-lable\">\n      Appointment Scheduling\n    </div>\n    <div class=\"colon\">\n      :\n    </div>\n  </div>\n  <div class=\"info\">\n    <p>How soon he needs his appointment?</p>\n    <p>Availability (M-Sat, AM-PM)</p>\n    <p>Selected Provider Name</p>\n    <p>Appt. Notes</p>\n    <p>Avail. Notes</p>\n    <p>Last CheckUp</p>\n    <p>Any other Roorikg Req. Info.</p>\n  </div>\n  <div class=\"btn-wrap\">\n    <button class=\"button confirm\">\n      CONFIRM\n    </button>\n    <button class=\"button reject\">\n      REJECT\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/booking-request/appointment-booking-request/appointment-booking-request.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  background: white;\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  border-radius: 10px;\n  padding-top: 10px; }\n  .main-wrap .main-caption {\n    font-size: 30px;\n    font-weight: 600;\n    letter-spacing: 0.8px;\n    padding-left: 20px;\n    border-left: 6px solid #02c0ef;\n    color: #464646;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-bottom: 30px; }\n  .main-wrap .name-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 20px; }\n  .main-wrap .name-wrap .name-lable {\n      margin-left: 80px;\n      width: 180px;\n      font-size: 22px;\n      color: #464646;\n      font-weight: 600; }\n  .main-wrap .name-wrap .colon {\n      font-size: 22px;\n      color: #464646; }\n  .main-wrap .name-wrap .name {\n      font-size: 22px;\n      color: #6b6b6b;\n      margin-left: 40px; }\n  .main-wrap .age-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .main-wrap .age-wrap .age-lable {\n      margin-left: 80px;\n      width: 180px;\n      font-size: 22px;\n      color: #464646;\n      font-weight: 600; }\n  .main-wrap .age-wrap .colon {\n      font-size: 22px;\n      color: #464646; }\n  .main-wrap .age-wrap .age {\n      font-size: 22px;\n      color: #6b6b6b;\n      margin-left: 40px; }\n  .main-wrap .second-lable {\n    font-size: 24px;\n    font-weight: 600;\n    letter-spacing: 0.8px;\n    padding-left: 40px;\n    color: #515151;\n    margin-top: 40px;\n    margin-bottom: 20px; }\n  .main-wrap .booking-content-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 20px; }\n  .main-wrap .booking-content-wrap .services-lable {\n      margin-left: 80px;\n      width: 300px;\n      font-size: 22px;\n      color: #464646;\n      font-weight: 600; }\n  .main-wrap .booking-content-wrap .colon {\n      font-size: 22px;\n      color: #464646; }\n  .main-wrap .booking-content-wrap .info {\n      font-size: 22px;\n      color: #6b6b6b;\n      margin-left: 40px; }\n  .main-wrap .booking-content-wrap-bot {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .main-wrap .booking-content-wrap-bot .services-lable {\n      margin-left: 80px;\n      width: 300px;\n      font-size: 22px;\n      color: #464646;\n      font-weight: 600; }\n  .main-wrap .booking-content-wrap-bot .colon {\n      font-size: 22px;\n      color: #464646; }\n  .main-wrap .info {\n    font-size: 21px;\n    color: #6a6a6a;\n    margin-left: 160px; }\n  .main-wrap .info p {\n      margin-top: 17px;\n      margin-bottom: 17px; }\n  .main-wrap .btn-wrap {\n    margin-left: 80px;\n    padding-bottom: 50px;\n    margin-top: 50px; }\n  .main-wrap .btn-wrap .button {\n      width: 320px;\n      border: 2px solid #02c0ef;\n      border-radius: 5px;\n      font-size: 22px;\n      font-weight: 500;\n      padding: 10px; }\n  .main-wrap .btn-wrap .confirm {\n      background: #02c0ef;\n      color: white;\n      margin-right: 25px; }\n  .main-wrap .btn-wrap .reject {\n      color: #02c0ef;\n      background: white; }\n"

/***/ }),

/***/ "./src/app/booking-request/appointment-booking-request/appointment-booking-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentBookingRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppointmentBookingRequestComponent = /** @class */ (function () {
    function AppointmentBookingRequestComponent() {
    }
    AppointmentBookingRequestComponent.prototype.ngOnInit = function () {
    };
    AppointmentBookingRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appointment-booking-request',
            template: __webpack_require__("./src/app/booking-request/appointment-booking-request/appointment-booking-request.component.html"),
            styles: [__webpack_require__("./src/app/booking-request/appointment-booking-request/appointment-booking-request.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppointmentBookingRequestComponent);
    return AppointmentBookingRequestComponent;
}());



/***/ }),

/***/ "./src/app/booking-request/booking-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showAppointmentBooking\">\n  <app-appointment-booking-request ></app-appointment-booking-request>\n</div>\n<div *ngIf=\"showConfirmBookingRequest\">\n  <app-confirm-booking-request></app-confirm-booking-request>\n</div>\n<div *ngIf=\"showrejectBookingRequest\">\n  <app-reject-booking-request></app-reject-booking-request>\n</div>\n<!-- *ngIf=\"showBookingRequest\"  -->\n<div  *ngIf=\"!showAppointmentBooking && !showConfirmBookingRequest && !showrejectBookingRequest\" class=\"main-wrap\">\n  <div class=\"head\">\n    <div class=\"btn-group\">\n      <button (click)=\"swapReq = !swapReq\" [ngClass]=\"{'active-btn': !swapReq}\" class=\"button button-left \">\n        NEW REQUESTS\n      </button>\n      <button (click)=\"swapReq = !swapReq\" [ngClass]=\"{'active-btn': swapReq}\" class=\"button button-left\">\n        CLOSED REQUESTS\n      </button>\n    </div>\n    <div class=\"right-content-head\">\n      <div class=\"sort\">\n        SORT\n      </div>\n      <div class=\"dropdawn-wrap\">\n        <button (click)=\"showDropdawn = !showDropdawn\" class=\"button button-right-header\">\n          Newest First\n          <object data=\"assets\\img\\download.svg\" type=\"image/svg+xml\"></object>\n        </button>\n        <div *ngIf=\"showDropdawn\" class=\"dropdawn\">\n          <div>Oldest First</div>\n          <div>Newest First</div>\n          <div>Oldest First</div>\n          <div>Newest First</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row-content\">\n    <div class=\"left-box\">\n      <div class=\"name-wrap\" (click)=\"showAppointmentBooking = !showAppointmentBooking\">\n          <div class=\"name\">\n              Andrew Campbell\n            </div>\n            <div class=\"descrintion-wrap\">\n              <span>Descriprion: </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellat magnam architecto consequatur veritatis rerum?\n            </div>\n      </div>\n\n\n      <!-- <div class=\"date-warp date-warp-closed-page\">\n        <div class=\"caption-date\">\n          Requested Date and time\n        </div>\n        <div class=\"content-date\">\n          5 APRIL 2018, 09:30 AM\n        </div>\n        <div class=\"replay-provider\">\n          Replay by Provider: 3 April 2018, 10:00 AM\n        </div>\n      </div> -->\n\n\n      <div class=\"date-warp\">\n        <div class=\"caption-date\">\n          REQUESTED DATE AND TIME\n        </div>\n        <div class=\"content-date\">\n          5 APRIL 2018, 09:30 AM\n        </div>\n      </div>\n    </div>\n    <div class=\"right-box\">\n      <button class=\"button btn-right confirmed\">\n        CONFIRMED\n      </button>\n      <div class=\"arrow-icon\">\n          <object data=\"assets\\img\\backSmall.svg\" type=\"image/svg+xml\"></object>\n          <div class=\"pointer-box\">\n\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row-content\">\n    <div class=\"left-box\">\n      <div (click)=\"showConfirmBookingRequest = !showConfirmBookingRequest\" class=\"name-wrap\">\n          <div class=\"name\">\n              Andrew Campbell\n            </div>\n            <div class=\"descrintion-wrap\">\n              <span>Descriprion: </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellat magnam architecto consequatur veritatis rerum?\n            </div>\n      </div>\n\n\n       <!-- <div class=\"date-warp date-warp-closed-page\">\n        <div class=\"caption-date\">\n          Requested Date and time\n        </div>\n        <div class=\"content-date\">\n          5 APRIL 2018, 09:30 AM\n        </div>\n        <div class=\"replay-provider\">\n          Replay by Provider: 3 April 2018, 10:00 AM\n        </div>\n      </div> -->\n\n\n      <div class=\"date-warp\">\n        <div class=\"caption-date\">\n          REQUESTED DATE AND TIME\n        </div>\n        <div class=\"content-date\">\n          5 APRIL 2018, 09:30 AM\n        </div>\n      </div>\n    </div>\n    <div class=\"right-box\">\n      <button class=\"button btn-right confirmed\">\n        CONFIRMED\n      </button>\n      <div class=\"arrow-icon\">\n          <object data=\"assets\\img\\backSmall.svg\" type=\"image/svg+xml\"></object>\n          <div class=\"pointer-box\">\n\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row-content\">\n    <div class=\"left-box\">\n      <div (click)=\"showrejectBookingRequest = !showrejectBookingRequest\" class=\"name-wrap\">\n          <div class=\"name\">\n              Andrew Campbell\n            </div>\n            <div class=\"descrintion-wrap\">\n              <span>Descriprion: </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellat magnam architecto consequatur veritatis rerum?\n            </div>\n      </div>\n\n\n       <!-- <div class=\"date-warp date-warp-closed-page\">\n        <div class=\"caption-date\">\n          Requested Date and time\n        </div>\n        <div class=\"content-date\">\n          5 APRIL 2018, 09:30 AM\n        </div>\n        <div class=\"replay-provider\">\n          Replay by Provider: 3 April 2018, 10:00 AM\n        </div>\n      </div> -->\n\n\n      <div class=\"date-warp\">\n        <div class=\"caption-date\">\n          REQUESTED DATE AND TIME\n        </div>\n        <div class=\"content-date\">\n          5 APRIL 2018, 09:30 AM\n        </div>\n      </div>\n    </div>\n    <div class=\"right-box\">\n      <button class=\"button btn-right pending\">\n        PENDING\n      </button>\n      <div class=\"arrow-icon\">\n          <object data=\"assets\\img\\backSmall.svg\" type=\"image/svg+xml\"></object>\n          <div class=\"pointer-box\">\n\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row-content\">\n    <div class=\"left-box\">\n      <div class=\"name-wrap\">\n          <div class=\"name\">\n              Andrew Campbell\n            </div>\n            <div class=\"descrintion-wrap\">\n              <span>Descriprion: </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellat magnam architecto consequatur veritatis rerum?\n            </div>\n      </div>\n\n\n       <!-- <div class=\"date-warp date-warp-closed-page\">\n        <div class=\"caption-date\">\n          Requested Date and time\n        </div>\n        <div class=\"content-date\">\n          5 APRIL 2018, 09:30 AM\n        </div>\n        <div class=\"replay-provider\">\n          Replay by Provider: 3 April 2018, 10:00 AM\n        </div>\n      </div> -->\n\n\n      <div class=\"date-warp\">\n        <div class=\"caption-date\">\n          REQUESTED DATE AND TIME\n        </div>\n        <div class=\"content-date\">\n          5 APRIL 2018, 09:30 AM\n        </div>\n      </div>\n    </div>\n    <div class=\"right-box\">\n      <button class=\"button btn-right canceled\">\n        CENCELED\n      </button>\n      <div class=\"arrow-icon\">\n          <object data=\"assets\\img\\backSmall.svg\" type=\"image/svg+xml\"></object>\n          <div class=\"pointer-box\">\n\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/booking-request/booking-request.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap .head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 25px; }\n  .main-wrap .head .btn-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 2px;\n    background: #02c0ef;\n    border-radius: 5px; }\n  .main-wrap .head .btn-group .button-left {\n      background: #02c0ef;\n      color: white;\n      height: 48px;\n      font-size: 21px;\n      letter-spacing: 0.7px;\n      font-weight: 600;\n      font-family: 'Open Sans';\n      padding-left: 28px;\n      padding-right: 28px;\n      cursor: pointer; }\n  .main-wrap .head .btn-group .active-btn {\n      background: #eaebeb;\n      border-radius: 3px;\n      color: #02c0ef; }\n  .main-wrap .head .right-content-head {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .main-wrap .head .right-content-head .sort {\n      color: #424242;\n      font-weight: 600;\n      font-size: 22px;\n      margin-right: 20px; }\n  .main-wrap .head .right-content-head .dropdawn-wrap {\n      position: relative; }\n  .main-wrap .head .right-content-head .dropdawn-wrap .dropdawn {\n        position: absolute;\n        width: 100%;\n        top: 52px;\n        border-radius: 5px;\n        background: white;\n        -webkit-box-shadow: 5px 5px 5px -4px black;\n        box-shadow: 5px 5px 5px -4px black;\n        z-index: 1000; }\n  .main-wrap .head .right-content-head .dropdawn-wrap .dropdawn div {\n          padding: 10px;\n          color: #5a5a5a;\n          font-size: 18px;\n          padding-left: 20px;\n          cursor: pointer; }\n  .main-wrap .head .right-content-head .dropdawn-wrap .dropdawn div:hover {\n          background: rgba(0, 0, 0, 0.02); }\n  .main-wrap .head .right-content-head .dropdawn-wrap .button-right-header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        background: white;\n        border: none;\n        outline: none;\n        border-radius: 5px;\n        font-size: 20px;\n        font-weight: 600;\n        height: 50px;\n        padding-left: 20px;\n        padding-right: 20px;\n        width: 240px;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        cursor: pointer;\n        color: #5a5a5a; }\n  .row-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background: white;\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  border-radius: 10px;\n  padding: 28px;\n  margin-bottom: 20px; }\n  .row-content .left-box {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .row-content .left-box .name-wrap {\n      width: 370px;\n      margin-right: 30px; }\n  .row-content .left-box .name-wrap .name {\n        color: #414242;\n        font-size: 21px;\n        letter-spacing: 1px;\n        font-weight: 600;\n        margin-bottom: 10px; }\n  .row-content .left-box .name-wrap .descrintion-wrap {\n        font-size: 13px;\n        color: #525252;\n        font-weight: 500; }\n  .row-content .left-box .name-wrap .descrintion-wrap span {\n          font-weight: 600; }\n  .row-content .left-box .date-warp .caption-date {\n      font-size: 20px;\n      font-weight: 600;\n      color: #414242;\n      margin-top: 10px; }\n  .row-content .left-box .date-warp .content-date {\n      font-size: 21px;\n      letter-spacing: 0.3px;\n      color: #414242; }\n  .row-content .right-box {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .row-content .right-box .btn-right {\n      border-radius: 5px;\n      font-size: 16px;\n      font-weight: 600;\n      height: 36px;\n      padding-left: 10px;\n      padding-right: 10px;\n      -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      cursor: pointer;\n      color: #ffffff;\n      margin-right: 32px;\n      width: 115px; }\n  .row-content .right-box .confirmed {\n      background: #02c0ef; }\n  .row-content .right-box .pending {\n      background: #ffa502; }\n  .row-content .right-box .canceled {\n      background: #b0b0b0; }\n  .arrow-icon {\n  cursor: pointer;\n  position: relative; }\n  .arrow-icon .pointer-box {\n    position: absolute;\n    height: 82px;\n    width: 43px;\n    background: #00000000;\n    top: 0;\n    cursor: pointer; }\n  .date-warp-closed-page .caption-date {\n  margin-top: 0 !important;\n  font-size: 17px !important;\n  letter-spacing: 0.3px !important; }\n  .date-warp-closed-page .content-date {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: #616161 !important; }\n  .date-warp-closed-page .replay-provider {\n  font-size: 15px;\n  letter-spacing: 0.2px;\n  margin-top: 10px;\n  font-weight: 500;\n  color: #616161; }\n"

/***/ }),

/***/ "./src/app/booking-request/booking-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingRequestComponent = /** @class */ (function () {
    function BookingRequestComponent() {
    }
    BookingRequestComponent.prototype.ngOnInit = function () {
    };
    BookingRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-booking-request',
            template: __webpack_require__("./src/app/booking-request/booking-request.component.html"),
            styles: [__webpack_require__("./src/app/booking-request/booking-request.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingRequestComponent);
    return BookingRequestComponent;
}());



/***/ }),

/***/ "./src/app/booking-request/confirm-booking-request/confirm-booking-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <div class=\"main-caption\">\n    CONFIRM BOOKING\n  </div>\n  <div class=\"input-wrap-outer\">\n    <div class=\"input-wrap-inside\">\n      <div class=\"input-lable\">\n        CONFIRMED DATE\n      </div>\n      <div class=\"input-wrap confirm-calendar\">\n        <p-calendar [(ngModel)]=\"date9\" showButtonBar=\"true\"></p-calendar>\n        <span class=\"icon-input\"><object data=\"assets\\img\\calendar.svg\" type=\"image/svg+xml\"></object></span>\n      </div>\n    </div>\n    <div class=\"input-wrap-inside\">\n      <div class=\"input-lable\">\n        CONFIRMED TIME\n      </div>\n      <div class=\"input-wrap confirm-calendar\">\n        <p-calendar [(ngModel)]=\"date8\" [timeOnly]=\"true\" hourFormat=\"24' PM''\"></p-calendar>\n        <span class=\"icon-input\"><object data=\"assets\\img\\clock.svg\" type=\"image/svg+xml\"></object></span>\n      </div>\n    </div>\n  </div>\n  <div class=\"second-caption\">\n    CONFIRMED RATES PER SERVICE\n  </div>\n  <div class=\"coment-rates\">\n    (Disclosure: Rates are estimates that can change once patient has been evaluated)\n  </div>\n  <div class=\"service-name-wrap\">\n    <div class=\"service-name\">\n      SERVICE NAME\n    </div>\n    <div class=\"service-value\">\n      <input type=\"text\" value=\"40.00$\">\n    </div>\n  </div>\n  <div class=\"to-visit-wrap\">\n    <div class=\"to-visit\">\n      TOTAL FEES FOR VISIT :\n    </div>\n    <div class=\"total-value\">\n      50.00$\n    </div>\n  </div>\n  <div class=\"note-wrap\">\n    Note:We can perform Check-up and Cleaning, but will refer out for x-rays.\n  </div>\n  <div class=\"btn-wrap\">\n    <button class=\"button confirm\">\n      CONFIRM\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/booking-request/confirm-booking-request/confirm-booking-request.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  background: white;\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  border-radius: 10px;\n  padding-top: 10px; }\n  .main-wrap .main-caption {\n    font-size: 29px;\n    font-weight: 600;\n    letter-spacing: 0.8px;\n    padding-left: 20px;\n    border-left: 6px solid #02c0ef;\n    color: #464646;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-bottom: 30px; }\n  .btn-wrap {\n  margin-left: 80px;\n  padding-bottom: 50px;\n  margin-top: 50px; }\n  .btn-wrap .button {\n    width: 320px;\n    border: 2px solid #02c0ef;\n    border-radius: 5px;\n    font-size: 22px;\n    font-weight: 500;\n    padding: 10px; }\n  .btn-wrap .confirm {\n    background: #02c0ef;\n    color: white;\n    margin-right: 25px; }\n  .btn-wrap .reject {\n    color: #02c0ef;\n    background: white; }\n  .input-wrap-outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 80px; }\n  .input-wrap-outer .input-wrap-inside {\n    margin-right: 80px; }\n  .input-wrap-outer .input-wrap-inside .input-lable {\n      font-size: 20px;\n      color: #464646;\n      margin-bottom: 10px; }\n  .input-wrap-outer .input-wrap-inside .input-wrap {\n      position: relative; }\n  .input-wrap-outer .input-wrap-inside .input-wrap .icon-input {\n        position: absolute;\n        right: 14px;\n        top: 10px; }\n  .second-caption {\n  padding-left: 80px;\n  margin-top: 40px;\n  font-size: 20px;\n  letter-spacing: 0.5px;\n  color: #464646;\n  font-weight: 600; }\n  .coment-rates {\n  padding-left: 80px;\n  font-weight: 400;\n  font-style: italic;\n  font-size: 15px;\n  letter-spacing: 0.3px;\n  color: #5f5f5f; }\n  .service-name-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 95px;\n  margin-top: 40px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .service-name-wrap .service-name {\n    font-size: 20px;\n    margin-right: 40px;\n    color: #6b6b6b; }\n  .service-name-wrap .service-value {\n    border: 1px solid #777777;\n    width: 145px;\n    height: 44px;\n    border-radius: 10px;\n    text-align: center;\n    font-size: 20px;\n    color: #757575; }\n  .service-name-wrap .service-value input {\n      border: none;\n      background: none;\n      height: 100%;\n      width: 100%;\n      text-align: center;\n      font-size: 20px;\n      color: #757575;\n      outline: none; }\n  .to-visit-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 95px;\n  margin-top: 40px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .to-visit-wrap .to-visit {\n    font-size: 20px;\n    margin-right: 5px;\n    color: #6b6b6b; }\n  .to-visit-wrap .total-value {\n    font-size: 23px;\n    font-weight: 600;\n    color: #464646; }\n  .note-wrap {\n  margin-left: 80px;\n  padding: 20px;\n  border: 1px solid #777777;\n  margin-top: 40px;\n  border-radius: 10px;\n  font-style: italic;\n  width: 530px;\n  font-size: 20px;\n  padding-bottom: 40px;\n  color: #525252; }\n"

/***/ }),

/***/ "./src/app/booking-request/confirm-booking-request/confirm-booking-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmBookingRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmBookingRequestComponent = /** @class */ (function () {
    function ConfirmBookingRequestComponent() {
    }
    ConfirmBookingRequestComponent.prototype.ngOnInit = function () {
    };
    ConfirmBookingRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-booking-request',
            template: __webpack_require__("./src/app/booking-request/confirm-booking-request/confirm-booking-request.component.html"),
            styles: [__webpack_require__("./src/app/booking-request/confirm-booking-request/confirm-booking-request.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmBookingRequestComponent);
    return ConfirmBookingRequestComponent;
}());



/***/ }),

/***/ "./src/app/booking-request/reject-booking-request/reject-booking-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <div class=\"main-caption\">\n    REJECT BOOKING\n  </div>\n  <div class=\"second-caption\">\n      SELECT REASON\n  </div>\n  <div class=\"radio-wrap\">\n      <div class=\"styled-input-container styled-input--square\">\n          <div class=\"styled-input-single\">\n            <input type=\"radio\" name=\"fieldset-2\" id=\"radio2-example-one\" />\n            <label for=\"radio2-example-one\">Not Accepting New Patients</label>\n          </div>\n          <div class=\"styled-input-single\">\n            <input type=\"radio\" name=\"fieldset-2\" id=\"radio2-example-two\" />\n            <label for=\"radio2-example-two\">Requested Services Not Available</label>\n          </div>\n          <div class=\"styled-input-single\">\n            <input type=\"radio\" name=\"fieldset-2\" id=\"radio2-example-three\" />\n            <label for=\"radio2-example-three\">Requested Schedule Not Available</label>\n          </div>\n          <div class=\"styled-input-single\">\n            <input type=\"radio\" name=\"fieldset-2\" id=\"radio2-example-four\" />\n            <label for=\"radio2-example-four\">Suggested Fees Too low</label>\n          </div>\n          <div class=\"styled-input-single\">\n            <input type=\"radio\" name=\"fieldset-2\" id=\"radio2-example-five\" />\n            <label for=\"radio2-example-five\">Other</label>\n          </div>\n        </div>\n  </div>\n \n\n \n  <div class=\"second-caption second-caption-bot\">\n    COMMENT\n  </div>\n  <div class=\"note-wrap\">\n    Please give us spesific details about your appointment rejection.\n  </div>\n  <div class=\"btn-wrap\">\n    <button class=\"button reject\">\n      REJECT\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/booking-request/reject-booking-request/reject-booking-request.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  background: white;\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  border-radius: 10px;\n  padding-top: 10px; }\n  .main-wrap .main-caption {\n    font-size: 29px;\n    font-weight: 600;\n    letter-spacing: 0.8px;\n    padding-left: 20px;\n    border-left: 6px solid #02c0ef;\n    color: #464646;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-bottom: 30px; }\n  .btn-wrap {\n  margin-left: 80px;\n  padding-bottom: 50px;\n  margin-top: 40px; }\n  .btn-wrap .button {\n    width: 320px;\n    border: 2px solid #02c0ef;\n    border-radius: 5px;\n    font-size: 22px;\n    font-weight: 500;\n    padding: 10px; }\n  .btn-wrap .reject {\n    color: #02c0ef;\n    background: white; }\n  .second-caption {\n  padding-left: 80px;\n  margin-top: 40px;\n  font-size: 20px;\n  letter-spacing: 0.5px;\n  color: #464646;\n  font-weight: 600; }\n  .second-caption-bot {\n  margin-top: 17px; }\n  .note-wrap {\n  margin-left: 80px;\n  padding: 20px;\n  border: 1px solid #777777;\n  margin-top: 20px;\n  border-radius: 10px;\n  font-style: italic;\n  width: 530px;\n  font-size: 20px;\n  padding-bottom: 40px;\n  color: #525252; }\n  .radio-wrap {\n  padding-left: 80px;\n  margin-top: 20px; }\n  .styled-input-single {\n  position: relative;\n  padding: 0px 0 28px 40px;\n  text-align: left; }\n  .styled-input-single label {\n  cursor: pointer;\n  font-size: 20px;\n  color: #505050; }\n  .styled-input-single label:before, .styled-input-single label:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  border-radius: 50%; }\n  .styled-input-single label:before {\n  left: 0;\n  width: 18px;\n  height: 18px;\n  margin: -19px 0 0;\n  background: #f7f7f7;\n  border: 2px solid #02c0ef;\n  top: 23px;\n  border-radius: 2px !important; }\n  .styled-input-single label:after {\n  left: 5px;\n  width: 12px;\n  height: 12px;\n  margin: -19px 0 0;\n  opacity: 0;\n  background: #02c0ef;\n  -webkit-transform: translate3d(-40px, 0, 0) scale(0.5);\n  transform: translate3d(-40px, 0, 0) scale(0.5);\n  transition: opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  -webkit-transition: opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out; }\n  .styled-input-single input[type=\"radio\"],\n.styled-input-single input[type=\"checkbox\"] {\n  position: absolute;\n  top: 0;\n  left: -9999px;\n  visibility: hidden; }\n  .styled-input-single input[type=\"radio\"]:checked + label:after,\n.styled-input-single input[type=\"checkbox\"]:checked + label:after {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  opacity: 1; }\n  .styled-input--diamond .styled-input-single {\n  padding-left: 45px; }\n  .styled-input--square label:before, .styled-input--square label:after {\n  border-radius: 0; }\n"

/***/ }),

/***/ "./src/app/booking-request/reject-booking-request/reject-booking-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectBookingRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RejectBookingRequestComponent = /** @class */ (function () {
    function RejectBookingRequestComponent() {
    }
    RejectBookingRequestComponent.prototype.ngOnInit = function () {
    };
    RejectBookingRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reject-booking-request',
            template: __webpack_require__("./src/app/booking-request/reject-booking-request/reject-booking-request.component.html"),
            styles: [__webpack_require__("./src/app/booking-request/reject-booking-request/reject-booking-request.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RejectBookingRequestComponent);
    return RejectBookingRequestComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-wrap/dashboard-wrap.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"main-header\"><app-header></app-header></div>\n<div class=\"main-wrap-content\">\n    <div class=\"left-menu\"><app-left-menu></app-left-menu></div>\n    <div class=\"content-foter-wrap\">\n        <div class=\"content\"><router-outlet></router-outlet></div>\n        <div class=\"footer\"><app-foter></app-foter></div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard-wrap/dashboard-wrap.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  min-height: calc(100vh - 95px); }\n\n.main-header {\n  margin-top: 95px; }\n\n.content-foter-wrap {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.content {\n  padding: 30px;\n  background: #eaebeb;\n  height: 100%; }\n\n.left-menu {\n  z-index: 100; }\n"

/***/ }),

/***/ "./src/app/dashboard-wrap/dashboard-wrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardWrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardWrapComponent = /** @class */ (function () {
    function DashboardWrapComponent() {
    }
    DashboardWrapComponent.prototype.ngOnInit = function () {
    };
    DashboardWrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-wrap',
            template: __webpack_require__("./src/app/dashboard-wrap/dashboard-wrap.component.html"),
            styles: [__webpack_require__("./src/app/dashboard-wrap/dashboard-wrap.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardWrapComponent);
    return DashboardWrapComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <div class=\"top-content\"> \n    <div class=\"box-top\">\n      <div class=\"head-top\">\n        Dental Clinic\n      </div>\n      <div class=\"row-wrap\">\n        <div class=\"icon-wrap\">\n            <svg \n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            width=\"0.741cm\" height=\"0.882cm\">\n           <path fill-rule=\"evenodd\"  fill=\"rgb(121, 121, 121)\"\n            d=\"M10.521,25.000 C10.496,25.000 10.472,25.000 10.448,25.000 C7.826,25.000 5.348,24.600 3.462,23.871 C0.463,22.713 0.011,21.125 0.009,20.282 C0.004,18.625 1.538,17.234 4.327,16.364 L5.340,16.048 L5.966,18.096 L4.952,18.411 C2.879,19.058 2.128,19.881 2.129,20.276 C2.130,20.655 2.785,21.316 4.219,21.870 C5.885,22.513 8.142,22.871 10.515,22.857 C15.935,22.842 18.888,21.113 18.886,20.229 C18.885,19.828 18.115,19.001 15.999,18.364 L14.983,18.059 L15.588,16.005 L16.603,16.311 C19.438,17.163 21.002,18.553 21.006,20.224 C21.014,23.340 15.737,24.985 10.521,25.000 ZM10.507,21.588 L9.634,20.304 C8.988,19.354 3.317,10.917 3.317,7.268 C3.317,3.260 6.542,-0.000 10.507,-0.000 C14.472,-0.000 17.698,3.260 17.698,7.268 C17.698,10.917 12.027,19.354 11.381,20.304 L10.507,21.588 ZM10.507,2.143 C7.712,2.143 5.437,4.442 5.437,7.268 C5.437,9.249 8.263,14.288 10.507,17.770 C12.752,14.288 15.578,9.248 15.578,7.268 C15.578,4.442 13.303,2.143 10.507,2.143 ZM8.396,7.044 C8.396,5.867 9.343,4.910 10.507,4.910 C11.672,4.910 12.619,5.867 12.619,7.044 C12.619,8.222 11.672,9.179 10.507,9.179 C9.343,9.179 8.396,8.222 8.396,7.044 Z\"/>\n           </svg>\n        </div>\n        <div class=\"content-text\">\n          <div>\n            71 Pilgrim Avenue\n          </div>\n          <div>\n            Chevy Chase, MD 2081511\n          </div>\n        </div>\n      </div>\n      <div class=\"row-wrap\">\n        <div class=\"icon-wrap\">\n            <svg \n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            width=\"0.423cm\" height=\"0.811cm\">\n            <path fill-rule=\"evenodd\"  fill=\"rgb(121, 121, 121)\"\n            d=\"M-0.006,23.000 L-0.006,3.631 L7.514,3.631 L7.514,-0.000 L12.001,-0.000 L12.001,3.631 L12.001,5.602 L12.001,23.000 L-0.006,23.000 ZM10.117,1.971 L9.398,1.971 L9.398,3.631 L10.117,3.631 L10.117,1.971 ZM10.117,5.602 L7.514,5.602 L1.878,5.602 L1.878,21.029 L10.117,21.029 L10.117,5.602 ZM5.369,16.213 L3.101,16.213 L3.101,14.241 L5.369,14.241 L5.369,16.213 ZM5.369,19.617 L3.101,19.617 L3.101,17.645 L5.369,17.645 L5.369,19.617 ZM8.894,16.213 L6.626,16.213 L6.626,14.241 L8.894,14.241 L8.894,16.213 ZM8.894,19.617 L6.626,19.617 L6.626,17.645 L8.894,17.645 L8.894,19.617 Z\"/>\n            </svg>\n        </div>\n        <div class=\"content-text\">\n          <div>\n            +064785785455\n          </div>\n        </div>\n      </div>\n    </div>  \n    <div class=\"box-top box-top-right\">\n        <div class=\"head-top\">\n          About Dantist\n        </div>\n        <div class=\"tex-wrap\">\n         Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti debitis iusto et rerum ut tempora, cumque laudantium nobis, laborum recusandae nisi cupiditate, eveniet veniam praesentium dolorum quos quia illum. Odit ipsa ut eos placeat est doloremque qui voluptatem? Culpa id est eum obcaecati. Pariatur, hic?\n        </div>\n      </div> \n  </div>\n  \n  <div class=\"bot-content-outer\">\n      <div class=\"bot-content\">\n          <div class=\"box-bot\">\n            <div class=\"canvas\">\n      \n            </div>\n            <div class=\"text-box-bot\">\n              <div class=\"caption-box-bot\">\n                Patient Referrend\n              </div>\n              <div class=\"light-style\">\n                +25 New\n              </div>\n              <div class=\"light-style\">\n                -100 form last week\n              </div>\n            </div>\n          </div>\n          <div class=\"box-bot\">\n            <div class=\"canvas\">\n      \n            </div>\n            <div class=\"text-box-bot\">\n              <div class=\"caption-box-bot\">\n                Appoiments Acc  epted\n              </div>\n              <div class=\"light-style\">\n                +85 New\n              </div>\n              <div class=\"light-style\">\n                -126 form last month\n              </div>\n            </div>\n          </div>\n          <div class=\"box-bot\">\n            <div class=\"canvas\">\n      \n            </div>\n            <div class=\"text-box-bot\">\n              <div class=\"caption-box-bot\">\n                Active Spesial Ofers\n              </div>\n              <div class=\"light-style\">\n                +25 New\n              </div>\n              <div class=\"light-style\">\n                -14 form last week\n              </div>\n            </div>\n          </div>\n          <div class=\"arrow-icon\">\n              <object data=\"assets\\img\\back1600.svg\" type=\"image/svg+xml\"></object>\n              <div class=\"pointer-box\">\n\n              </div>\n          </div>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".top-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .top-content .box-top {\n    width: 40%;\n    margin-right: 40px;\n    background: white;\n    border-radius: 10px; }\n  .top-content .box-top .head-top {\n      text-align: center;\n      padding: 13px;\n      border-bottom: 1px solid #cccccc;\n      font-weight: 600;\n      font-size: 20px;\n      color: #414242; }\n  .top-content .box-top .row-wrap {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 30px;\n      padding-bottom: 10px;\n      padding-top: 10px;\n      padding-right: 10px; }\n  .top-content .box-top .row-wrap .icon-wrap {\n        margin-right: 10px;\n        width: 28px;\n        text-align: center; }\n  .top-content .box-top .row-wrap .content-text div {\n        color: #5e5e5e;\n        font-weight: 600;\n        font-size: 15px; }\n  .top-content .box-top-right {\n    width: calc(60% - 40px);\n    margin-right: 0; }\n  .top-content .box-top-right .tex-wrap {\n      padding: 30px;\n      padding-bottom: 15px;\n      padding-top: 10px;\n      padding-right: 10px;\n      text-align: center;\n      color: #5e5e5e;\n      font-weight: 600;\n      font-size: 15px; }\n  .bot-content-outer {\n  text-align: center; }\n  .bot-content-outer .bot-content {\n    margin-top: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 1060px; }\n  .bot-content-outer .bot-content .box-bot {\n      width: 285px;\n      background: white;\n      text-align: center;\n      height: 242px;\n      -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n      border-radius: 20px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column;\n              flex-flow: column;\n      padding-top: 28px;\n      padding-bottom: 40px; }\n  .bot-content-outer .bot-content .box-bot .text-box-bot .caption-box-bot {\n        color: #414242;\n        font-weight: 600;\n        letter-spacing: 0.3px;\n        font-size: 18px;\n        margin-bottom: 10px; }\n  .bot-content-outer .bot-content .box-bot .text-box-bot .light-style {\n        color: #696969;\n        font-size: 14px;\n        margin-bottom: 5px;\n        font-weight: 500; }\n  .arrow-icon {\n  cursor: pointer;\n  position: relative; }\n  .arrow-icon .pointer-box {\n    position: absolute;\n    height: 82px;\n    width: 43px;\n    background: #00000000;\n    top: 0;\n    cursor: pointer; }\n  @media screen and (max-width: 1240px) {\n  .box-bot {\n    width: 260px !important; } }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-wrap\">\n  <div class=\"header\">\n    <object data=\"assets\\img\\logo-sing-up.svg\" type=\"image/svg+xml\"></object>\n  </div>\n  <div class=\"content\">\n    <div class=\"input-wrap-outer\">\n      <div class=\"input-wrap\">\n        <div class=\"input\">\n          <input type=\"text\" placeholder=\"Email\">\n        </div>\n        <div class=\"input\">\n          <input type=\"text\" placeholder=\"Password\">\n        </div>\n      </div>\n    </div>\n    <div class=\"button-wrap\">\n      <div class=\"btn-wrap\">\n        <button class=\"button confirm\">\n          LOGIN\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    ALREADY HAVE NOT A ACCOUNT? <span (click)=\"go()\"> SING UP</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  background: url('drbg.053a8ed7e022d5f9cb49.png');\n  min-height: calc(100vh - 25px);\n  padding-bottom: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n  .main-wrap .header {\n    background: white;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100px;\n    -webkit-box-shadow: 0px -2px 17px 0px black;\n    box-shadow: 0px -2px 17px 0px black; }\n  .main-wrap .content {\n    margin-top: 60px;\n    margin-left: 140px;\n    margin-right: 140px;\n    background: white;\n    border-radius: 20px;\n    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n    width: 600px;\n    position: relative;\n    left: 50%;\n    margin-left: -300px; }\n  .input-wrap-outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .input-wrap {\n  width: 500px;\n  margin-top: 100px; }\n  .input {\n  width: 100%;\n  margin-bottom: 30px; }\n  .input input {\n    background: none;\n    border: 1px solid #bdbdbd;\n    border-radius: 10px;\n    height: 60px;\n    width: calc(100% - 40px);\n    font-size: 16px;\n    color: #686868;\n    padding-left: 20px;\n    padding-right: 20px;\n    outline: none;\n    letter-spacing: 0.3px; }\n  .btn-wrap {\n  text-align: center;\n  padding-bottom: 36px; }\n  .btn-wrap .button {\n    width: 500px;\n    border: 2px solid #02c0ef;\n    border-radius: 10px;\n    font-size: 22px;\n    font-weight: 500;\n    padding: 10px; }\n  .btn-wrap .confirm {\n    background: #02c0ef;\n    color: white; }\n  .btn-wrap .reject {\n    color: #02c0ef;\n    background: white; }\n  .footer {\n  margin-top: 25px;\n  text-align: center;\n  color: white;\n  letter-spacing: 0.3px; }\n  .footer span {\n    font-weight: 600;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.go = function () {
        this.router.navigate(['sign-up']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <div class=\"user-img-wrap\">\n    <div class=\"user-img\">\n        <img src=\"assets\\img\\user-pofile.png\" alt=\"\">\n        <span class=\"add-wrap\">\n          <object data=\"assets\\img\\add.svg\" type=\"image/svg+xml\"></object>\n        </span>\n    </div>\n  </div>\n  <div class=\"icon-right\">\n      <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      width=\"0.988cm\" height=\"1.235cm\">\n     <path fill-rule=\"evenodd\"  fill=\"rgb(166, 166, 166)\"\n      d=\"M26.990,34.938 L14.058,34.986 C13.506,34.988 13.314,34.619 13.632,34.165 L17.145,29.143 C17.462,28.689 18.173,28.316 18.724,28.313 L26.990,28.268 C27.542,28.265 27.993,28.716 27.993,29.271 L27.993,33.927 C27.993,34.481 27.542,34.936 26.990,34.938 ZM26.990,26.100 L19.767,26.143 C19.216,26.146 19.024,25.778 19.341,25.324 L22.854,20.302 C23.171,19.848 23.882,19.472 24.434,19.465 L26.990,19.434 C27.542,19.428 27.993,19.876 27.993,20.430 L27.993,25.086 C27.993,25.640 27.542,26.096 26.990,26.100 ZM24.577,9.036 C24.261,9.489 23.632,9.601 23.180,9.283 L16.508,4.590 C16.057,4.272 15.946,3.640 16.262,3.186 L18.102,0.546 C18.419,0.092 19.047,-0.020 19.499,0.298 L26.171,4.992 C26.623,5.310 26.734,5.941 26.417,6.395 L24.577,9.036 ZM21.764,13.106 L8.850,31.597 C8.533,32.050 7.844,32.560 7.318,32.729 L1.243,34.682 C0.718,34.851 0.270,34.536 0.248,33.983 L-0.002,27.579 C-0.024,27.025 0.218,26.201 0.535,25.747 L13.449,7.257 C13.766,6.803 14.395,6.692 14.847,7.010 L21.519,11.703 C21.970,12.021 22.081,12.652 21.764,13.106 Z\"/>\n     </svg>\n  </div>\n  <div class=\"inputs-wrap\">\n    <div class=\"row-input\">\n      <div class=\"input\">\n        <input type=\"text\" placeholder=\"MAIN PROVIDER NAME\">\n      </div>\n    </div>\n    <div class=\"row-input\">\n      <div class=\"input width\">\n        <input type=\"text\" placeholder=\"MAIN CONTACT NAME\">\n      </div>\n      <div class=\"input width\">\n        <input type=\"text\" placeholder=\"MAIN PRACTICE NAME\">\n      </div>\n    </div>\n    <div class=\"row-input\">\n      <div class=\"input\">\n        <input type=\"text\" placeholder=\"PRACTICE TAX ID\">\n      </div>\n    </div>\n    <div class=\"row-input\">\n      <div class=\"input\">\n        <input type=\"text\" placeholder=\"PRACTICE ADDRESS\">\n      </div>\n    </div>\n    <div class=\"row-input\">\n      <div class=\"input width\">\n        <input type=\"text\" placeholder=\"PRACTICE PHONE\">\n      </div>\n      <div class=\"input width\">\n        <input type=\"text\" placeholder=\"PRACTICE FAX\">\n      </div>\n    </div>\n    <div class=\"row-input\">\n      <div class=\"input width\">\n        <input type=\"text\" placeholder=\"PRACTICE EMAIL\">\n      </div>\n      <div class=\"input width\">\n        <input type=\"text\" placeholder=\"PRACTICE WEBSITE\">\n      </div>\n    </div>\n    <div class=\"row-input\">\n      <div class=\"input\">\n        <input type=\"text\" placeholder=\"PRACTICE HOURS OF OPERATION\">\n      </div>\n    </div>\n    <div class=\"row-input\">\n      <div class=\"input\">\n        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"ABOUT YOUR SELF\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"button-wrap\">\n    <div class=\"btn-wrap\">\n      <button class=\"button confirm\">\n        SAVE CHANGE\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  background: white;\n  padding-top: 10px;\n  margin-top: 44px;\n  border-radius: 10px;\n  margin-left: 125px;\n  margin-right: 125px;\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36); }\n  .main-wrap .user-img-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .main-wrap .user-img-wrap .user-img {\n      position: relative;\n      margin-top: -71px; }\n  .main-wrap .user-img-wrap .user-img img {\n        border-radius: 100px;\n        border: 3px solid #02c0ef;\n        width: 132px;\n        height: 132px; }\n  .main-wrap .user-img-wrap .user-img .add-wrap {\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        background: white;\n        -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.36);\n        box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.36);\n        border-radius: 50px;\n        height: 34px;\n        padding: 3px; }\n  .main-wrap .icon-right {\n    text-align: right;\n    margin-top: -61px;\n    margin-right: 30px; }\n  .inputs-wrap {\n  padding: 68px;\n  padding-top: 40px;\n  padding-bottom: 0; }\n  .inputs-wrap .row-input {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 20px; }\n  .inputs-wrap .row-input .input {\n      width: 100%; }\n  .inputs-wrap .row-input .input input {\n        background: none;\n        border: 1px solid #bdbdbd;\n        border-radius: 5px;\n        height: 40px;\n        width: calc(100% - 40px);\n        font-size: 19px;\n        color: #686868;\n        padding-left: 20px;\n        padding-right: 20px;\n        outline: none; }\n  .inputs-wrap .row-input .input textarea {\n        resize: none;\n        background: none;\n        border: 1px solid #bdbdbd;\n        border-radius: 5px;\n        width: calc(100% - 40px);\n        font-size: 19px;\n        color: #686868;\n        padding-left: 20px;\n        padding-right: 20px;\n        outline: none;\n        height: 104px;\n        font-family: 'Open Sans';\n        padding-top: 9px; }\n  .inputs-wrap .row-input .input input::-webkit-input-placeholder, .inputs-wrap .row-input .input textarea::-webkit-input-placeholder {\n        /* Chrome/Opera/Safari */\n        font-size: 19px;\n        color: #686868; }\n  .inputs-wrap .row-input .input input::-moz-placeholder, .inputs-wrap .row-input .input textarea::-moz-placeholder {\n        /* Firefox 19+ */\n        font-size: 19px;\n        color: #686868; }\n  .inputs-wrap .row-input .input input:-ms-input-placeholder, .inputs-wrap .row-input .input textarea:-ms-input-placeholder {\n        /* IE 10+ */\n        font-size: 19px;\n        color: #686868; }\n  .inputs-wrap .row-input .input input:-moz-placeholder, .inputs-wrap .row-input .input textarea:-moz-placeholder {\n        /* Firefox 18- */\n        font-size: 19px;\n        color: #686868; }\n  .inputs-wrap .row-input .width {\n      width: 50%;\n      margin-right: 24px; }\n  .inputs-wrap .row-input .width:last-child {\n      margin-right: 0; }\n  .btn-wrap {\n  text-align: center;\n  padding-bottom: 36px; }\n  .btn-wrap .button {\n    width: 360px;\n    border: 2px solid #02c0ef;\n    border-radius: 5px;\n    font-size: 22px;\n    font-weight: 500;\n    padding: 10px; }\n  .btn-wrap .confirm {\n    background: #02c0ef;\n    color: white; }\n  .btn-wrap .reject {\n    color: #02c0ef;\n    background: white; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrp\">\n  <div class=\"note-head\">\n     <span>Note: </span> Please note this is not a contract and doesn't bid you to accept these price, however, in older to avoid unwanted appointment request we suggest you review our suggested price. Fell free to inscrease or deeas our suggested price. These price are based on our understanding of competitive cash prices in your area.\n  </div>\n  <div class=\"head\">\n      <div class=\"caption\">\n        Select Services\n      </div>\n      <div class=\"right-content-head\">\n        <div class=\"sort\">\n          ORDER BY CATEGORY\n        </div>\n        <div class=\"dropdawn-wrap\">\n          <button (click)=\"showDropdawn = !showDropdawn\" class=\"button button-right-header\">\n            Preventative \n            <object data=\"assets\\img\\download-service.svg\" type=\"image/svg+xml\"></object>\n          </button>\n          <div *ngIf=\"showDropdawn\" class=\"dropdawn-top\">\n            <div>Oldest First</div>\n            <div>Newest First</div>\n            <div>Oldest First</div>\n            <div>Newest First</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"rows-wrap\">\n      <div class=\"row\">\n        <div class=\"row-inside\">\n            <div *ngIf=\"showOralSurgeonsDropdawn\" class=\"border-blue\"></div>\n            <div class=\"lable\">\n                Oral Surgeons\n            </div>\n            <div class=\"arrow-icon\" [ngClass]=\"{'transform' : showOralSurgeonsDropdawn, 'transform-back' : !showOralSurgeonsDropdawn}\">\n                <object data=\"assets\\img\\back-service.svg\" type=\"image/svg+xml\"></object>\n                <div (click)=\"showOralSurgeonsDropdawn = !showOralSurgeonsDropdawn\"  class=\"pointer-box\">\n      \n                </div>\n            </div>\n        </div>\n        <div class=\"dropdawn\" [ngClass]=\"{'dropdawn-active' : showOralSurgeonsDropdawn}\">\n          <div *ngIf=\"showOralSurgeonsDropdawn\" class=\"dropdawn-inside\">\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Single Tooth Removal - Single Extraction\n              </div>\n              <div class=\"first-value\">\n                255.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  300.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                450.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  500.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                600.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  650.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"row-inside\">\n            <div *ngIf=\"showOrthodontistsDropdawn\" class=\"border-blue\"></div>\n            <div class=\"lable\">\n                Orthodontists\n            </div>\n            <div class=\"arrow-icon\" [ngClass]=\"{'transform' : showOrthodontistsDropdawn, 'transform-back' : !showOrthodontistsDropdawn}\">\n                <object data=\"assets\\img\\back-service.svg\" type=\"image/svg+xml\"></object>\n                <div (click)=\"showOrthodontistsDropdawn = !showOrthodontistsDropdawn\"  class=\"pointer-box\">\n      \n                </div>\n            </div>\n        </div>\n        <div class=\"dropdawn\" [ngClass]=\"{'dropdawn-active' : showOrthodontistsDropdawn}\">\n          <div *ngIf=\"showOrthodontistsDropdawn\" class=\"dropdawn-inside\">\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Single Tooth Removal - Single Extraction\n              </div>\n              <div class=\"first-value\">\n                255.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  300.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                450.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  500.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                600.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  650.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"row-inside\">\n            <div *ngIf=\"showCosmeticDentistsDropdawn\" class=\"border-blue\"></div>\n            <div class=\"lable\">\n                Cosmetic Dentists\n            </div>\n            <div class=\"arrow-icon\" [ngClass]=\"{'transform' : showCosmeticDentistsDropdawn, 'transform-back' : !showCosmeticDentistsDropdawn}\">\n                <object data=\"assets\\img\\back-service.svg\" type=\"image/svg+xml\"></object>\n                <div (click)=\"showCosmeticDentistsDropdawn = !showCosmeticDentistsDropdawn\"  class=\"pointer-box\">\n      \n                </div>\n            </div>\n        </div>\n        <div class=\"dropdawn\" [ngClass]=\"{'dropdawn-active' : showCosmeticDentistsDropdawn}\">\n          <div *ngIf=\"showCosmeticDentistsDropdawn\" class=\"dropdawn-inside\">\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Single Tooth Removal - Single Extraction\n              </div>\n              <div class=\"first-value\">\n                255.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  300.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                450.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  500.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                600.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  650.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"row-inside\">\n            <div *ngIf=\"showBridges\" class=\"border-blue\"></div>\n            <div class=\"lable\">\n                Dentures/Bridges\n            </div>\n            <div class=\"arrow-icon\" [ngClass]=\"{'transform' : showBridges, 'transform-back' : !showBridges}\">\n                <object data=\"assets\\img\\back-service.svg\" type=\"image/svg+xml\"></object>\n                <div (click)=\"showBridges = !showBridges\"  class=\"pointer-box\">\n      \n                </div>\n            </div>\n        </div>\n        <div class=\"dropdawn\" [ngClass]=\"{'dropdawn-active' : showBridges}\">\n          <div *ngIf=\"showBridges\" class=\"dropdawn-inside\">\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Single Tooth Removal - Single Extraction\n              </div>\n              <div class=\"first-value\">\n                255.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  300.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                450.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  500.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                600.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  650.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"row-inside\">\n            <div *ngIf=\"showPreventiveDropdawn\" class=\"border-blue\"></div>\n            <div class=\"lable\">\n                Preventive\n            </div>\n            <div class=\"arrow-icon\" [ngClass]=\"{'transform' : showPreventiveDropdawn, 'transform-back' : !showPreventiveDropdawn}\">\n                <object data=\"assets\\img\\back-service.svg\" type=\"image/svg+xml\"></object>\n                <div (click)=\"showPreventiveDropdawn = !showPreventiveDropdawn\"  class=\"pointer-box\">\n      \n                </div>\n            </div>\n        </div>\n        <div class=\"dropdawn\" [ngClass]=\"{'dropdawn-active' : showPreventiveDropdawn}\">\n          <div *ngIf=\"showPreventiveDropdawn\" class=\"dropdawn-inside\">\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Single Tooth Removal - Single Extraction\n              </div>\n              <div class=\"first-value\">\n                255.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  300.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                450.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  500.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                600.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  650.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"row-inside\">\n            <div *ngIf=\"showRestorativeDropdawn\" class=\"border-blue\"></div>\n            <div class=\"lable\">\n                Restorative\n            </div>\n            <div class=\"arrow-icon\" [ngClass]=\"{'transform' : showRestorativeDropdawn, 'transform-back' : !showRestorativeDropdawn}\">\n                <object data=\"assets\\img\\back-service.svg\" type=\"image/svg+xml\"></object>\n                <div (click)=\"showRestorativeDropdawn = !showRestorativeDropdawn\"  class=\"pointer-box\">\n      \n                </div>\n            </div>\n        </div>\n        <div class=\"dropdawn\" [ngClass]=\"{'dropdawn-active' : showRestorativeDropdawn}\">\n          <div *ngIf=\"showRestorativeDropdawn\" class=\"dropdawn-inside\">\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Single Tooth Removal - Single Extraction\n              </div>\n              <div class=\"first-value\">\n                255.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  300.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                450.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  500.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n            <div class=\"row-dropdawn\">\n              <div class=\"lable\">\n                Extraction - Impacted Wisdom Tooth (Soft Tissue)\n              </div>\n              <div class=\"first-value\">\n                600.00\n              </div>\n              <div class=\"change-value\">\n                <div class=\"box\">\n                  650.00\n                  <!-- <input type=\"text\"> -->\n                </div>\n              </div>\n              <div class=\"icon\">\n                  <svg \n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  width=\"0.811cm\" height=\"0.917cm\">\n                 <path fill-rule=\"evenodd\"  fill=\"rgb(2, 192, 239)\"\n                  d=\"M16.988,15.530 L16.988,15.530 L19.198,13.292 L22.993,9.450 L16.344,2.720 L11.895,7.223 L10.814,6.128 L15.309,1.577 L13.755,-0.000 L7.703,6.128 L10.340,8.799 L10.340,8.799 L10.340,8.799 L0.931,18.324 L-0.001,26.000 L1.329,25.835 L21.437,25.835 L21.437,23.606 L9.011,23.606 L16.988,15.530 ZM16.344,5.869 L19.881,9.450 L16.988,12.380 L13.451,8.799 L16.344,5.869 ZM3.021,19.359 L11.895,10.374 L15.432,13.955 L6.559,22.939 L2.526,23.441 L3.021,19.359 Z\"/>\n                 </svg>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n     \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/***/ (function(module, exports) {

module.exports = ".head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 25px; }\n  .head .caption {\n    font-size: 24px;\n    font-weight: 600;\n    color: #696969;\n    margin-left: 20px;\n    position: relative;\n    top: -7px; }\n  .head .right-content-head {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .head .right-content-head .sort {\n      color: #424242;\n      font-weight: 600;\n      font-size: 15px;\n      margin-right: 20px; }\n  .head .right-content-head .dropdawn-wrap {\n      position: relative; }\n  .head .right-content-head .dropdawn-wrap .dropdawn-top {\n        position: absolute;\n        width: 100%;\n        top: 38px;\n        border-radius: 5px;\n        background: white;\n        -webkit-box-shadow: 5px 5px 5px -4px black;\n        box-shadow: 5px 5px 5px -4px black;\n        z-index: 1000; }\n  .head .right-content-head .dropdawn-wrap .dropdawn-top div {\n          padding: 10px;\n          color: #5a5a5a;\n          font-size: 13px;\n          padding-left: 20px;\n          cursor: pointer;\n          font-weight: 600; }\n  .head .right-content-head .dropdawn-wrap .dropdawn-top div:hover {\n          background: rgba(0, 0, 0, 0.02); }\n  .head .right-content-head .dropdawn-wrap .button-right-header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        background: white;\n        border: none;\n        outline: none;\n        border-radius: 5px;\n        font-size: 13px;\n        font-weight: 600;\n        height: 36px;\n        padding-left: 20px;\n        padding-right: 20px;\n        width: 160px;\n        display: flex;\n        -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        cursor: pointer;\n        color: #5a5a5a; }\n  .note-head {\n  background: #ffa502;\n  color: #fff8ec;\n  padding: 20px;\n  font-size: 17px;\n  letter-spacing: 0.1px;\n  border-radius: 10px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  line-height: 28px;\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n  margin-bottom: 20px; }\n  .arrow-icon {\n  cursor: pointer;\n  position: relative; }\n  .arrow-icon .pointer-box {\n    position: absolute;\n    height: 82px;\n    width: 43px;\n    background: #00000000;\n    top: 0;\n    cursor: pointer; }\n  .rows-wrap {\n  background: white;\n  padding-top: 10px;\n  border-radius: 10px;\n  padding-bottom: 10px; }\n  .rows-wrap .row {\n    padding: 40px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid #d6d6d6; }\n  .rows-wrap .row .row-inside {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      position: relative; }\n  .rows-wrap .row .row-inside .border-blue {\n        border-left: 6px solid #02c0ef;\n        position: absolute;\n        left: -40px;\n        width: 6px;\n        height: 80px; }\n  .rows-wrap .row .row-inside .lable {\n        font-size: 26px;\n        color: #656565;\n        font-weight: 600; }\n  .rows-wrap .row:last-child {\n    border-bottom: none; }\n  .dropdawn {\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0; }\n  .dropdawn .dropdawn-inside {\n    border: 1px solid #bbbbbb;\n    padding: 20px;\n    margin-top: 40px; }\n  .dropdawn .dropdawn-inside .row-dropdawn {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      margin-bottom: 24px; }\n  .dropdawn .dropdawn-inside .row-dropdawn .lable {\n        font-size: 18px;\n        letter-spacing: 0.3px;\n        color: #818181;\n        width: calc((100% / 4) + 200px);\n        white-space: nowrap;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  .dropdawn .dropdawn-inside .row-dropdawn .first-value {\n        font-size: 18px;\n        letter-spacing: 0.3px;\n        color: #818181;\n        white-space: nowrap;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  .dropdawn .dropdawn-inside .row-dropdawn .change-value {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  .dropdawn .dropdawn-inside .row-dropdawn .change-value .box {\n          font-size: 18px;\n          letter-spacing: 0.3px;\n          color: #818181;\n          white-space: nowrap;\n          padding: 6px;\n          border: 1px solid #cbcbcb;\n          width: 85px;\n          text-align: center; }\n  .dropdawn .dropdawn-inside .row-dropdawn .change-value .box input {\n            font-size: 18px;\n            letter-spacing: 0.3px;\n            color: #818181;\n            white-space: nowrap;\n            text-align: center;\n            background: none;\n            border: none;\n            outline: none;\n            width: 100%; }\n  .dropdawn .dropdawn-inside .row-dropdawn .icon {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer; }\n  .dropdawn .dropdawn-inside .row-dropdawn:last-child {\n      margin-bottom: 0; }\n  .dropdawn-active {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n  opacity: 1;\n  max-height: unset; }\n  .transform {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n  .transform-back {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/services/services.component.html"),
            styles: [__webpack_require__("./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/settings/add-auth-user/add-auth-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n    <div class=\"head\">\n      Add authorized user to his see his Profile \n    </div>\n    <div class=\"input-wrap\">\n      <div class=\"input-row\">\n        <div class=\"lable\">\n          Username\n        </div>\n        <div class=\"input\">\n          <input type=\"text\">\n        </div>\n      </div>\n       <div class=\"input-row\">\n        <div class=\"lable\">\n          Password\n        </div>\n        <div class=\"input\">\n          <input type=\"text\">\n        </div>\n      </div>\n       <div class=\"input-row\">\n        <div class=\"lable\">\n          Role\n        </div>\n        <div class=\"input\">\n          <div class=\"dropdawn-wrap\">\n            <button (click)=\"showDropdawnValue = !showDropdawnValue\" class=\"button button-right-header\">\n              Select Role \n              <object data=\"assets\\img\\download-service.svg\" type=\"image/svg+xml\"></object>\n            </button>\n            <div *ngIf=\"showDropdawnValue\" class=\"dropdawn-top\">\n              <div>Oldest First</div>\n              <div>Newest First</div>\n              <div>Oldest First</div>\n              <div>Newest First</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"button-wrap\"> \n      <div class=\"btn-wrap\">\n        <button class=\"button confirm\">\n          SAVE CHANGE\n        </button>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/settings/add-auth-user/add-auth-user.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  background: white;\n  padding-top: 10px;\n  margin-top: 44px;\n  border-radius: 10px; }\n  .main-wrap .head {\n    padding: 19px;\n    padding-left: 44px;\n    font-size: 23px;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n    border-left: 4px solid #02c5f3;\n    color: #2b2b2b; }\n  .main-wrap .input-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-top: 40px; }\n  .main-wrap .input-wrap .input-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-bottom: 40px;\n      margin-left: -200px; }\n  .main-wrap .input-wrap .input-row .lable {\n        font-size: 19px;\n        color: #686868;\n        width: 200px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  .main-wrap .input-wrap .input-row .input input {\n        background: none;\n        border: 1px solid #bdbdbd;\n        border-radius: 5px;\n        height: 40px;\n        width: 320px;\n        font-size: 19px;\n        color: #686868;\n        padding-left: 20px;\n        padding-right: 20px;\n        outline: none; }\n  .btn-wrap {\n  text-align: center;\n  padding-bottom: 36px; }\n  .btn-wrap .button {\n    width: 360px;\n    border: 2px solid #02c0ef;\n    border-radius: 5px;\n    font-size: 22px;\n    font-weight: 500;\n    padding: 10px; }\n  .btn-wrap .confirm {\n    background: #02c0ef;\n    color: white; }\n  .btn-wrap .reject {\n    color: #02c0ef;\n    background: white; }\n  .dropdawn-wrap {\n  position: relative;\n  width: 360px; }\n  .dropdawn-wrap .dropdawn-top {\n    position: absolute;\n    width: 100%;\n    top: 48px;\n    border-radius: 5px;\n    background: white;\n    -webkit-box-shadow: 1px 1px 4px 0px #0000006e;\n    box-shadow: 1px 1px 4px 0px #0000006e;\n    z-index: 1000; }\n  .dropdawn-wrap .dropdawn-top div {\n      padding: 10px;\n      color: #787878;\n      font-size: 18px;\n      padding-left: 20px;\n      cursor: pointer;\n      font-weight: 600; }\n  .dropdawn-wrap .dropdawn-top div:hover {\n      background: rgba(0, 0, 0, 0.02); }\n  .dropdawn-wrap .button-right-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    background: white;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n    font-size: 18px;\n    font-weight: 600;\n    height: 44px;\n    padding-left: 20px;\n    padding-right: 20px;\n    width: 100%;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    cursor: pointer;\n    color: #787878;\n    border: 1px solid #bdbdbd;\n    font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/settings/add-auth-user/add-auth-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAuthUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddAuthUserComponent = /** @class */ (function () {
    function AddAuthUserComponent() {
    }
    AddAuthUserComponent.prototype.ngOnInit = function () {
    };
    AddAuthUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-auth-user',
            template: __webpack_require__("./src/app/settings/add-auth-user/add-auth-user.component.html"),
            styles: [__webpack_require__("./src/app/settings/add-auth-user/add-auth-user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddAuthUserComponent);
    return AddAuthUserComponent;
}());



/***/ }),

/***/ "./src/app/settings/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <div class=\"head\">\n    Change Your Password \n  </div>\n  <div class=\"input-wrap\">\n    <div class=\"input-row\">\n      <div class=\"lable\">\n        Old Password\n      </div>\n      <div class=\"input\">\n        <input type=\"text\">\n      </div>\n    </div>\n     <div class=\"input-row\">\n      <div class=\"lable\">\n        New Password\n      </div>\n      <div class=\"input\">\n        <input type=\"text\">\n      </div>\n    </div>\n     <div class=\"input-row\">\n      <div class=\"lable\">\n        Retype Password\n      </div>\n      <div class=\"input\">\n        <input type=\"text\">\n      </div>\n    </div>\n  </div>\n  <div class=\"button-wrap\"> \n    <div class=\"btn-wrap\">\n      <button class=\"button confirm\">\n        SAVE CHANGE\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/settings/change-password/change-password.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  background: white;\n  padding-top: 10px;\n  margin-top: 44px;\n  border-radius: 10px; }\n  .main-wrap .head {\n    padding: 19px;\n    padding-left: 44px;\n    font-size: 23px;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n    border-left: 4px solid #02c5f3;\n    color: #2b2b2b; }\n  .main-wrap .input-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-top: 40px; }\n  .main-wrap .input-wrap .input-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-bottom: 40px;\n      margin-left: -200px; }\n  .main-wrap .input-wrap .input-row .lable {\n        font-size: 19px;\n        color: #686868;\n        width: 200px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  .main-wrap .input-wrap .input-row .input input {\n        background: none;\n        border: 1px solid #bdbdbd;\n        border-radius: 5px;\n        height: 40px;\n        width: 320px;\n        font-size: 19px;\n        color: #686868;\n        padding-left: 20px;\n        padding-right: 20px;\n        outline: none; }\n  .btn-wrap {\n  text-align: center;\n  padding-bottom: 36px; }\n  .btn-wrap .button {\n    width: 360px;\n    border: 2px solid #02c0ef;\n    border-radius: 5px;\n    font-size: 22px;\n    font-weight: 500;\n    padding: 10px; }\n  .btn-wrap .confirm {\n    background: #02c0ef;\n    color: white; }\n  .btn-wrap .reject {\n    color: #02c0ef;\n    background: white; }\n"

/***/ }),

/***/ "./src/app/settings/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("./src/app/settings/change-password/change-password.component.html"),
            styles: [__webpack_require__("./src/app/settings/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <div class=\"head\">\n    <button (click)=\"showChangePassword = false; showAddAuthUser = false\" class=\"button\" [ngClass]=\"{'active-tab' : !showChangePassword}\">\n      CHANGE PASSWORD\n    </button>\n    <button (click)=\"showAddAuthUser = true; showChangePassword = true\" class=\"button\" [ngClass]=\"{'active-tab' : showAddAuthUser}\">\n      ADD AUTHORIZED USER\n    </button>\n  </div>\n  <div *ngIf=\"!showAddAuthUser\">\n      <app-add-auth-user></app-add-auth-user>\n  </div>\n  <div *ngIf=\"showChangePassword\">\n      <app-change-password></app-change-password>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ".head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: calc(100% + 60px);\n  margin-left: -30px;\n  margin-top: -30px;\n  background: white; }\n  .head .button {\n    width: 50%;\n    font-size: 21px;\n    padding: 10px;\n    color: #424242;\n    padding-top: 15px; }\n  .head .active-tab {\n    border-bottom: 2px solid #02c0ef;\n    color: #02c0ef;\n    padding-bottom: 8px; }\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.showTab = 'showAddAuthUser';
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/foter/foter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrap\">\n  <div>\n    COPYRIGHT © 2017-1018 SMARTHEALTH. ALL RIGHTS RESERVED.\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/foter/foter.component.scss":
/***/ (function(module, exports) {

module.exports = ".footer-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 36px;\n  color: #6a6a6a;\n  background: #cacaca;\n  font-size: 14px;\n  font-weight: 600; }\n"

/***/ }),

/***/ "./src/app/shared/foter/foter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoterComponent = /** @class */ (function () {
    function FoterComponent() {
    }
    FoterComponent.prototype.ngOnInit = function () {
    };
    FoterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-foter',
            template: __webpack_require__("./src/app/shared/foter/foter.component.html"),
            styles: [__webpack_require__("./src/app/shared/foter/foter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FoterComponent);
    return FoterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n <div class=\"logo-wrap\">\n  <object data=\"assets\\img\\logo.svg\" type=\"image/svg+xml\"></object>\n </div>\n <div class=\"right-content\">\n  <div class=\"alert-wrap\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      width=\"1.411cm\" height=\"1.517cm\">\n      <path fill-rule=\"evenodd\"  fill=\"rgb(255, 255, 255)\"\n        d=\"M39.104,34.032 C32.791,30.163 33.131,17.587 33.136,17.399 C33.136,11.529 29.207,6.555 23.823,4.924 L23.823,3.798 C23.823,1.704 22.107,-0.000 19.998,-0.000 C17.888,-0.000 16.172,1.704 16.172,3.798 L16.172,4.924 C10.788,6.556 6.859,11.539 6.860,17.463 C6.982,20.979 6.147,30.811 0.891,34.032 C0.185,34.465 -0.146,35.311 0.080,36.104 C0.307,36.896 1.036,37.443 1.866,37.443 L12.978,37.443 C13.713,40.621 16.578,43.000 19.998,43.000 C23.417,43.000 26.282,40.621 27.017,37.443 L38.129,37.443 C38.959,37.443 39.688,36.896 39.915,36.104 C40.141,35.311 39.810,34.465 39.104,34.032 ZM18.333,33.758 L6.427,33.758 C10.860,27.546 10.588,17.843 10.571,17.399 C10.571,12.239 14.800,8.041 19.999,8.041 C25.196,8.041 29.424,12.239 29.425,17.336 C29.408,17.832 29.136,27.544 33.569,33.758 L18.333,33.758 Z\"/>\n    </svg>\n  </div>\n\n\n  <!-- ADD FOR USER WRAP KLASS \"style-user-wrap\" -->\n\n\n  <div  (click)=\"go('/profile')\" class=\"user-wrap\">\n    <img src=\"assets\\img\\user.png\" alt=\"\">\n  </div>\n </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background: #02c0ef;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 95px;\n  padding-left: 35px;\n  padding-right: 35px;\n  -webkit-box-shadow: 0px -2px 17px 0px black;\n  box-shadow: 0px -2px 17px 0px black;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 111111; }\n  .main-wrap .right-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .main-wrap .right-content .alert-wrap {\n      position: relative;\n      top: 8px;\n      margin-right: 50px; }\n  .main-wrap .right-content .style-user-wrap img {\n      width: 63px;\n      height: 62px;\n      border-radius: 100px;\n      border: 2px solid white; }\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.go = function (name) {
        console.log(name);
        this.router.navigate([name]);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/left-menu/left-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n    <div (click)=\"go('/dashboard')\" [ngClass]=\"{'active-tab': path === '/dashboard'}\" class=\"tab\">\n      <div class=\"icon\">\n        <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        width=\"1.305cm\" height=\"1.305cm\">\n        <path fill-rule=\"evenodd\"  fill=\"rgb(65, 66, 66)\"\n        d=\"M20.586,37.000 L20.586,20.586 L37.000,20.586 L37.000,37.000 L20.586,37.000 ZM33.828,23.758 L23.758,23.758 L23.758,33.829 L33.828,33.829 L33.828,23.758 ZM20.586,-0.000 L37.000,-0.000 L37.000,16.414 L20.586,16.414 L20.586,-0.000 ZM23.758,13.242 L33.828,13.242 L33.828,3.171 L23.758,3.171 L23.758,13.242 ZM-0.000,20.586 L16.414,20.586 L16.414,37.000 L-0.000,37.000 L-0.000,20.586 ZM3.171,33.829 L13.242,33.829 L13.242,23.758 L3.171,23.758 L3.171,33.829 ZM-0.000,-0.000 L16.414,-0.000 L16.414,16.414 L-0.000,16.414 L-0.000,-0.000 ZM3.171,13.242 L13.242,13.242 L13.242,3.171 L3.171,3.171 L3.171,13.242 Z\"/>\n        </svg>\n      </div>\n      <div class=\"tab-lable\">\n        DASHBOARD\n      </div>\n    </div>\n    <div (click)=\"go('/booking-request')\" [ngClass]=\"{'active-tab': path === '/booking-request'}\" class=\"tab\">\n      <div class=\"icon\">\n        <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        width=\"1.376cm\" height=\"1.376cm\">\n        <path fill-rule=\"evenodd\"  fill=\"rgb(65, 66, 66)\"\n        d=\"M19.500,38.500 C9.024,38.500 0.500,29.976 0.500,19.500 C0.500,9.024 9.024,0.500 19.500,0.500 C29.976,0.500 38.500,9.024 38.500,19.500 C38.500,29.976 29.976,38.500 19.500,38.500 ZM19.500,3.757 C10.820,3.757 3.757,10.820 3.757,19.500 C3.757,28.180 10.820,35.243 19.500,35.243 C28.180,35.243 35.243,28.180 35.243,19.500 C35.243,10.820 28.180,3.757 19.500,3.757 ZM27.831,21.128 L19.500,21.128 C18.600,21.128 17.871,20.399 17.871,19.500 L17.871,9.397 C17.871,8.498 18.600,7.768 19.500,7.768 C20.400,7.768 21.129,8.498 21.129,9.397 L21.129,17.871 L27.831,17.871 C28.731,17.871 29.459,18.601 29.459,19.500 C29.459,20.399 28.731,21.128 27.831,21.128 Z\"/>\n        </svg>\n      </div>\n      <div class=\"tab-lable\">\n        BOOKING REQUESTS\n      </div>\n    </div>\n    <div (click)=\"go('/services')\" [ngClass]=\"{'active-tab': path === '/services'}\" class=\"tab\">\n      <div class=\"\">\n        <object data=\"assets\\img\\FEE.svg\" type=\"image/svg+xml\"></object>\n      </div>\n      <div class=\"tab-lable\">\n        FEE SCHEDULES\n      </div>\n    </div>\n    <div (click)=\"go('/special-offer')\" [ngClass]=\"{'active-tab': path === '/special-offer'}\" class=\"tab\">\n      <div class=\"\">\n        <object data=\"assets\\img\\sale-512.svg\" type=\"image/svg+xml\"></object>\n      </div>\n      <div class=\"tab-lable\">\n        SPECIAL OFFERS\n      </div>\n    </div>\n    <div (click)=\"go('/settings')\" [ngClass]=\"{'active-tab': path === '/settings'}\" class=\"tab\">\n      <div class=\"icon\">\n        <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        width=\"1.376cm\" height=\"1.376cm\">\n       <path fill-rule=\"evenodd\"  fill=\"rgb(65, 66, 66)\"\n        d=\"M38.260,22.409 C38.170,23.001 37.761,23.495 37.196,23.695 L34.202,24.758 C34.025,25.258 33.824,25.746 33.601,26.217 L34.964,29.077 C35.221,29.616 35.160,30.254 34.805,30.736 C33.661,32.291 32.289,33.660 30.727,34.805 C30.244,35.160 29.606,35.221 29.064,34.963 L26.199,33.604 C25.727,33.826 25.239,34.026 24.736,34.203 L23.672,37.191 C23.471,37.754 22.977,38.161 22.385,38.252 C21.332,38.414 20.389,38.492 19.500,38.492 C18.611,38.492 17.668,38.414 16.615,38.252 C16.023,38.161 15.529,37.754 15.328,37.191 L14.263,34.203 C13.761,34.026 13.273,33.826 12.801,33.604 L9.936,34.963 C9.395,35.221 8.756,35.160 8.273,34.805 C6.713,33.662 5.341,32.293 4.195,30.736 C3.840,30.254 3.779,29.616 4.036,29.077 L5.399,26.217 C5.176,25.746 4.976,25.259 4.798,24.758 L1.804,23.695 C1.239,23.495 0.830,23.001 0.740,22.409 C0.577,21.338 0.500,20.424 0.500,19.532 C0.500,18.639 0.577,17.726 0.740,16.655 C0.830,16.063 1.239,15.569 1.804,15.369 L4.798,14.306 C4.976,13.805 5.176,13.318 5.399,12.848 L4.036,9.987 C3.779,9.447 3.840,8.809 4.195,8.327 C5.343,6.768 6.715,5.399 8.273,4.258 C8.756,3.904 9.395,3.844 9.935,4.101 L12.802,5.459 C13.273,5.237 13.761,5.037 14.263,4.861 L15.328,1.872 C15.529,1.310 16.023,0.902 16.615,0.811 C18.723,0.489 20.280,0.489 22.385,0.811 C22.977,0.902 23.471,1.310 23.672,1.872 L24.736,4.861 C25.239,5.037 25.727,5.237 26.199,5.459 L29.064,4.101 C29.606,3.844 30.243,3.904 30.727,4.258 C32.285,5.399 33.657,6.768 34.805,8.327 C35.160,8.809 35.221,9.447 34.964,9.987 L33.601,12.848 C33.824,13.319 34.025,13.805 34.202,14.306 L37.196,15.368 C37.761,15.568 38.170,16.062 38.260,16.655 C38.423,17.726 38.500,18.640 38.500,19.532 C38.500,20.424 38.423,21.338 38.260,22.409 ZM35.164,18.097 L32.356,17.100 C31.865,16.927 31.487,16.529 31.339,16.030 C31.089,15.185 30.759,14.384 30.357,13.647 C30.108,13.191 30.092,12.642 30.316,12.173 L31.590,9.499 C30.974,8.761 30.293,8.080 29.554,7.467 L26.875,8.737 C26.404,8.963 25.856,8.947 25.398,8.697 C24.662,8.297 23.858,7.968 23.009,7.717 C22.509,7.570 22.111,7.192 21.936,6.704 L20.937,3.900 C19.909,3.795 19.073,3.795 18.063,3.900 L17.063,6.704 C16.889,7.192 16.490,7.570 15.991,7.717 C15.142,7.968 14.339,8.297 13.603,8.697 C13.146,8.945 12.595,8.963 12.126,8.737 L9.446,7.467 C8.707,8.080 8.026,8.761 7.410,9.499 L8.684,12.173 C8.907,12.642 8.892,13.191 8.643,13.647 C8.242,14.382 7.912,15.184 7.661,16.031 C7.513,16.529 7.135,16.927 6.645,17.100 L3.836,18.098 C3.783,18.608 3.757,19.077 3.757,19.532 C3.757,19.987 3.783,20.456 3.836,20.966 L6.644,21.963 C7.135,22.137 7.513,22.535 7.661,23.033 C7.912,23.881 8.243,24.684 8.643,25.416 C8.892,25.873 8.907,26.421 8.684,26.891 L7.410,29.565 C8.026,30.303 8.707,30.982 9.446,31.597 L12.125,30.326 C12.595,30.101 13.144,30.117 13.602,30.366 C14.338,30.766 15.142,31.096 15.991,31.346 C16.490,31.493 16.889,31.871 17.063,32.360 L18.063,35.164 C19.083,35.267 19.917,35.267 20.937,35.164 L21.936,32.360 C22.111,31.870 22.509,31.493 23.009,31.346 C23.858,31.096 24.661,30.766 25.398,30.366 C25.856,30.119 26.404,30.101 26.875,30.326 L29.554,31.596 C30.294,30.982 30.974,30.302 31.590,29.565 L30.316,26.891 C30.092,26.421 30.108,25.873 30.357,25.416 C30.758,24.681 31.088,23.880 31.339,23.034 C31.487,22.535 31.865,22.137 32.356,21.963 L35.164,20.966 C35.217,20.456 35.243,19.987 35.243,19.532 C35.243,19.077 35.217,18.607 35.164,18.097 ZM19.500,26.674 C15.343,26.674 11.960,23.299 11.960,19.150 C11.960,15.001 15.343,11.626 19.500,11.626 C23.657,11.626 27.039,15.001 27.039,19.150 C27.039,23.299 23.657,26.674 19.500,26.674 ZM19.500,14.876 C17.139,14.876 15.218,16.793 15.218,19.150 C15.218,21.506 17.139,23.423 19.500,23.423 C21.861,23.423 23.782,21.506 23.782,19.150 C23.782,16.793 21.861,14.876 19.500,14.876 Z\"/>\n       </svg>\n      </div>\n      <div class=\"tab-lable\">\n        SETTINGS\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/left-menu/left-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  width: 230px;\n  -webkit-box-shadow: 0px -1px 16px -2px black;\n  box-shadow: 0px -1px 16px -2px black;\n  height: 100%; }\n  .main-wrap .tab {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 130px;\n    cursor: pointer; }\n  .main-wrap .tab .icon {\n      margin-right: -12.31px;\n      margin-bottom: -12.31px; }\n  .main-wrap .tab .tab-lable {\n      color: #616161;\n      font-size: 15px;\n      font-weight: 600;\n      letter-spacing: 0.8px; }\n  .main-wrap .tab:hover {\n    background: #eff4f47c; }\n  .main-wrap .active-tab {\n    background: #eff4f4 !important;\n    border-left: 10px solid #ffa502; }\n"

/***/ }),

/***/ "./src/app/shared/left-menu/left-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftMenuComponent = /** @class */ (function () {
    function LeftMenuComponent(router, activatedRoute, location) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.path = '';
        router.events.subscribe(function (val) {
            console.log(location.path());
            _this.path = location.path();
        });
    }
    LeftMenuComponent.prototype.ngOnInit = function () {
    };
    LeftMenuComponent.prototype.go = function (name) {
        console.log(name);
        this.router.navigate([name]);
    };
    LeftMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-left-menu',
            template: __webpack_require__("./src/app/shared/left-menu/left-menu.component.html"),
            styles: [__webpack_require__("./src/app/shared/left-menu/left-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], LeftMenuComponent);
    return LeftMenuComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <div class=\"header\">\n      <object data=\"assets\\img\\logo-sing-up.svg\" type=\"image/svg+xml\"></object>\n  </div>\n  <div class =\"content-main-wrap\">\n    <div class=\"contet-head\">\n      <div class=\"tab active-tab\">\n        <div class=\"step\">\n          STEP: 1\n        </div>\n        <div class=\"caption\">\n          OFFICE INFORMATION\n        </div>\n      </div>\n      <div class=\"line\">\n          <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n          width=\"0.035cm\" height=\"2.469cm\">\n         <path fill-rule=\"evenodd\"  opacity=\"0.522\" fill=\"rgb(55, 55, 55)\"\n          d=\"M0.500,-0.000 C0.776,-0.000 1.000,15.670 1.000,35.000 C1.000,54.330 0.776,70.000 0.500,70.000 C0.224,70.000 -0.000,54.330 -0.000,35.000 C-0.000,15.670 0.224,-0.000 0.500,-0.000 Z\"/>\n         </svg>\n      </div>\n      <div [ngClass]=\"{'active-tab': step === 2 || step === 3}\" class=\"tab\">\n        <div class=\"step\">\n          STEP: 2\n        </div>\n        <div class=\"caption\">\n          PERSONAL INFORMATION\n        </div>\n      </div>\n      <div class=\"line\">\n          <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n          width=\"0.035cm\" height=\"2.469cm\">\n         <path fill-rule=\"evenodd\"  opacity=\"0.522\" fill=\"rgb(55, 55, 55)\"\n          d=\"M0.500,-0.000 C0.776,-0.000 1.000,15.670 1.000,35.000 C1.000,54.330 0.776,70.000 0.500,70.000 C0.224,70.000 -0.000,54.330 -0.000,35.000 C-0.000,15.670 0.224,-0.000 0.500,-0.000 Z\"/>\n         </svg>\n      </div>\n      <div [ngClass]=\"{'active-tab': step === 3}\" class=\"tab\">\n        <div class=\"step\">\n          STEP: 3\n        </div>\n        <div class=\"caption\">\n          COMPLETE PROFILE\n        </div>\n      </div>\n    </div>\n    <div>\n      <app-step-1-sign-up *ngIf=\"step === 1\" (next)=\"step = 2\"></app-step-1-sign-up>\n    </div>\n    <div>\n      <app-step-2-sign-up *ngIf=\"step === 2\" (next)=\"step = 3\"></app-step-2-sign-up>\n    </div>\n    <div>\n      <app-step-3-sign-up *ngIf=\"step === 3\" ></app-step-3-sign-up>\n    </div>\n  </div>\n  <div class=\"footer\">\n    ALREADY HAVE A ACCOUNT? <span> SING IN</span>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  background: url('drbg.053a8ed7e022d5f9cb49.png');\n  min-height: 100vh;\n  padding-bottom: 25px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n  .main-wrap .header {\n    background: white;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100px;\n    -webkit-box-shadow: 0px -2px 17px 0px black;\n    box-shadow: 0px -2px 17px 0px black; }\n  .main-wrap .content-main-wrap {\n    margin-top: 60px;\n    margin-left: 140px;\n    margin-right: 140px;\n    background: white;\n    border-radius: 20px;\n    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36);\n    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.36); }\n  .main-wrap .content-main-wrap .contet-head {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      padding: 17px;\n      height: 87px;\n      padding-bottom: 0;\n      -webkit-box-shadow: 2px 4px 7px -2px #9e9e9e;\n      box-shadow: 2px 4px 7px -2px #9e9e9e; }\n  .main-wrap .content-main-wrap .contet-head .tab {\n        width: calc(100% / 3);\n        text-align: center; }\n  .main-wrap .content-main-wrap .contet-head .tab .step {\n          font-size: 31px;\n          font-weight: 600;\n          color: #adadad; }\n  .main-wrap .content-main-wrap .contet-head .tab .caption {\n          font-size: 21px;\n          color: #adadad; }\n  .main-wrap .content-main-wrap .contet-head .active-tab .step {\n        color: #02aee5; }\n  .main-wrap .content-main-wrap .contet-head .active-tab .caption {\n        color: #5a5a5a; }\n  .footer {\n  margin-top: 25px;\n  text-align: center;\n  color: white;\n  letter-spacing: 0.3px; }\n  .footer span {\n    font-weight: 600;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router) {
        this.router = router;
        this.step = 1;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.go = function (name) {
        console.log(name);
        this.router.navigate([name]);
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/step-1-sign-up/step-1-sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-wrap-outer\">\n  <div class=\"input-wrap\">\n    <div class=\"input\">\n      <input type=\"text\" placeholder=\"ENTER THE OFFICE NAME\">\n    </div>\n    <div class=\"input\">\n        <input type=\"text\" placeholder=\"OFFICE ADDRESS\">\n      </div>\n  </div>\n</div>\n<div class=\"button-wrap\">\n    <div class=\"btn-wrap\">\n      <button (click)=\"go()\" class=\"button confirm\">\n        NETX\n      </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sign-up/step-1-sign-up/step-1-sign-up.component.scss":
/***/ (function(module, exports) {

module.exports = ".input-wrap-outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.input-wrap {\n  width: 500px;\n  margin-top: 100px; }\n\n.input {\n  width: 100%;\n  margin-bottom: 30px; }\n\n.input input {\n    background: none;\n    border: 1px solid #bdbdbd;\n    border-radius: 10px;\n    height: 60px;\n    width: calc(100% - 40px);\n    font-size: 16px;\n    color: #686868;\n    padding-left: 20px;\n    padding-right: 20px;\n    outline: none;\n    letter-spacing: 0.3px; }\n\n.btn-wrap {\n  text-align: center;\n  padding-bottom: 36px; }\n\n.btn-wrap .button {\n    width: 500px;\n    border: 2px solid #02c0ef;\n    border-radius: 10px;\n    font-size: 22px;\n    font-weight: 500;\n    padding: 10px; }\n\n.btn-wrap .confirm {\n    background: #02c0ef;\n    color: white; }\n\n.btn-wrap .reject {\n    color: #02c0ef;\n    background: white; }\n"

/***/ }),

/***/ "./src/app/sign-up/step-1-sign-up/step-1-sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step1SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Step1SignUpComponent = /** @class */ (function () {
    function Step1SignUpComponent() {
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Step1SignUpComponent.prototype.ngOnInit = function () {
    };
    Step1SignUpComponent.prototype.go = function () {
        this.next.emit('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], Step1SignUpComponent.prototype, "next", void 0);
    Step1SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-step-1-sign-up',
            template: __webpack_require__("./src/app/sign-up/step-1-sign-up/step-1-sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/step-1-sign-up/step-1-sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Step1SignUpComponent);
    return Step1SignUpComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/step-2-sign-up/step-2-sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-wrap-outer\">\n    <div class=\"input-wrap\">\n      <div class=\"input\">\n        <input type=\"text\" placeholder=\"ENTER YOUR EMAIL\">\n      </div>\n      <div class=\"input\">\n        <input type=\"text\" placeholder=\"PASSWORD\">\n      </div>\n      <div class=\"input\">\n          <input type=\"text\" placeholder=\"CONFIRM PASSWORD\">\n        </div>\n    </div>\n  </div>\n  <div class=\"button-wrap\">\n      <div class=\"btn-wrap\">\n        <button (click)=\"go()\" class=\"button confirm\">\n          NETX\n        </button>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/sign-up/step-2-sign-up/step-2-sign-up.component.scss":
/***/ (function(module, exports) {

module.exports = ".input-wrap-outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.input-wrap {\n  width: 500px;\n  margin-top: 100px; }\n\n.input {\n  width: 100%;\n  margin-bottom: 20px; }\n\n.input input {\n    background: none;\n    border: 1px solid #bdbdbd;\n    border-radius: 10px;\n    height: 60px;\n    width: calc(100% - 40px);\n    font-size: 16px;\n    color: #686868;\n    padding-left: 20px;\n    padding-right: 20px;\n    outline: none;\n    letter-spacing: 0.3px; }\n\n.btn-wrap {\n  text-align: center;\n  padding-bottom: 36px; }\n\n.btn-wrap .button {\n    width: 500px;\n    border: 2px solid #02c0ef;\n    border-radius: 10px;\n    font-size: 22px;\n    font-weight: 500;\n    padding: 10px; }\n\n.btn-wrap .confirm {\n    background: #02c0ef;\n    color: white; }\n\n.btn-wrap .reject {\n    color: #02c0ef;\n    background: white; }\n"

/***/ }),

/***/ "./src/app/sign-up/step-2-sign-up/step-2-sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Step2SignUpComponent = /** @class */ (function () {
    function Step2SignUpComponent() {
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Step2SignUpComponent.prototype.ngOnInit = function () {
    };
    Step2SignUpComponent.prototype.go = function () {
        this.next.emit('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], Step2SignUpComponent.prototype, "next", void 0);
    Step2SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-step-2-sign-up',
            template: __webpack_require__("./src/app/sign-up/step-2-sign-up/step-2-sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/step-2-sign-up/step-2-sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Step2SignUpComponent);
    return Step2SignUpComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/step-3-sign-up/step-3-sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-wrap-outer\">\n    <div class=\"input-wrap\">\n      <div class=\"input\">\n        <input type=\"text\" placeholder=\"YOUR NAME\">\n      </div>\n      <div class=\"input\">\n        <input type=\"text\" placeholder=\"ENTER YOUR PHONE NUMBER\">\n      </div>\n      <div class=\"row-input\">\n        <div class=\"input\">\n          <input type=\"text\" placeholder=\"GENDER\">\n        </div>\n        <div class=\"input\">\n          <input type=\"text\" placeholder=\"AGE\">\n        </div>\n      </div>\n      <div class=\"input\">\n        <input type=\"text\" placeholder=\"SERVISES YOUR PROVIDE\">\n      </div>\n      <div class=\"input\">\n        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"ABOUT YOUR SELF\"></textarea>\n      </div>\n      <div class=\"check-box-wrap\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none\">\n            <symbol id=\"checkmark\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-miterlimit=\"10\" fill=\"none\"  d=\"M22.9 3.7l-15.2 16.6-6.6-7.1\">\n              </path>\n            </symbol>\n          </svg>\n\n\n            <div class=\"promoted-checkbox\">\n              <input id=\"tmp\" type=\"checkbox\" class=\"promoted-input-checkbox\"/>\n              <label for=\"tmp\">\n                <svg><use xlink:href=\"#checkmark\" /></svg>\n                ACCEPT TERMS AND CONDITIONS\n              </label>\n            </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"button-wrap\">\n      <div class=\"btn-wrap\">\n        <button (click)=\"go()\" class=\"button confirm\">\n          SUBMIT\n        </button>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/sign-up/step-3-sign-up/step-3-sign-up.component.scss":
/***/ (function(module, exports) {

module.exports = ".input-wrap-outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.input-wrap {\n  width: 500px;\n  margin-top: 100px; }\n\n.input {\n  width: 100%;\n  margin-bottom: 20px; }\n\n.input input {\n    background: none;\n    border: 1px solid #bdbdbd;\n    border-radius: 10px;\n    height: 60px;\n    width: calc(100% - 40px);\n    font-size: 16px;\n    color: #686868;\n    padding-left: 20px;\n    padding-right: 20px;\n    outline: none;\n    letter-spacing: 0.3px; }\n\n.input textarea {\n    background: none;\n    border: 1px solid #bdbdbd;\n    border-radius: 10px;\n    height: 60px;\n    width: calc(100% - 40px);\n    font-size: 16px;\n    color: #686868;\n    padding-left: 20px;\n    padding-right: 20px;\n    outline: none;\n    letter-spacing: 0.3px;\n    resize: none;\n    height: 85px;\n    font-family: 'Open Sans';\n    padding-top: 15px; }\n\n.row-input {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.row-input .input {\n    width: calc(50% - 20px);\n    margin-right: 44px; }\n\n.row-input .input:last-child {\n    margin-right: 0px; }\n\n.btn-wrap {\n  text-align: center;\n  padding-bottom: 36px; }\n\n.btn-wrap .button {\n    width: 500px;\n    border: 2px solid #02c0ef;\n    border-radius: 10px;\n    font-size: 22px;\n    font-weight: 500;\n    padding: 10px; }\n\n.btn-wrap .confirm {\n    background: #02c0ef;\n    color: white; }\n\n.btn-wrap .reject {\n    color: #02c0ef;\n    background: white; }\n\n.check-box-wrap {\n  margin-bottom: 25px; }\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.form-container {\n  padding: 1rem;\n  margin: 2rem auto;\n  background-color: #fcfcfc;\n  border: 1px solid #e6e6e6;\n  width: 50%; }\n\n/* HTML5 Boilerplate accessible hidden styles */\n\n.promoted-input-checkbox {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.promoted-checkbox input:checked + label > svg {\n  height: 13px;\n  -webkit-animation: draw-checkbox ease-in-out 0.2s forwards;\n  animation: draw-checkbox ease-in-out 0.2s forwards; }\n\n.promoted-checkbox label:active::after {\n  background-color: #e6e6e6; }\n\n.promoted-checkbox label {\n  cursor: pointer;\n  position: relative;\n  font-style: italic;\n  letter-spacing: 0.4px;\n  font-size: 17px;\n  color: #686868; }\n\n.promoted-checkbox label:after {\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  margin-right: 1rem;\n  float: left;\n  border: 2px solid #02c0ef;\n  -webkit-transition: 0.15s all ease-out;\n  transition: 0.15s all ease-out; }\n\n.promoted-checkbox svg {\n  stroke: #02c0ef;\n  stroke-width: 3px;\n  height: 0;\n  width: 24px;\n  position: absolute;\n  left: -39px;\n  top: 6px;\n  stroke-dasharray: 35; }\n\n@-webkit-keyframes draw-checkbox {\n  0% {\n    stroke-dashoffset: 33; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes draw-checkbox {\n  0% {\n    stroke-dashoffset: 33; }\n  100% {\n    stroke-dashoffset: 0; } }\n"

/***/ }),

/***/ "./src/app/sign-up/step-3-sign-up/step-3-sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Step3SignUpComponent = /** @class */ (function () {
    function Step3SignUpComponent() {
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Step3SignUpComponent.prototype.ngOnInit = function () {
    };
    Step3SignUpComponent.prototype.go = function () {
        this.next.emit('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], Step3SignUpComponent.prototype, "next", void 0);
    Step3SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-step-3-sign-up',
            template: __webpack_require__("./src/app/sign-up/step-3-sign-up/step-3-sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/step-3-sign-up/step-3-sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Step3SignUpComponent);
    return Step3SignUpComponent;
}());



/***/ }),

/***/ "./src/app/special-offer/new-special-offer/new-special-offer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"create-offer-wrap\">\n    <div class=\"head-create\">\n      <div class=\"header\">\n        CREATE NEW OFFER\n      </div>\n      <div class=\"img-wrap\">\n       <div>\n          <svg \n          xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n          width=\"3.563cm\" height=\"3.528cm\">\n          <image  x=\"0px\" y=\"0px\" width=\"101px\" height=\"100px\"  xlink:href=\"data:img/png;base64,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\" />\n          </svg>\n          <div class=\"lable-img\">\n            ADD HEADER IMAGE \n          </div>\n       </div>\n      </div>\n      <div class=\"btn-wrap\">\n        <button class=\"button confirm grey-style\">\n          BROWSE IMAGE\n        </button>\n      </div>\n    </div>\n    <div class=\"bot-content-wrap\">\n      <div class=\"input-wrap-main\">\n        <div class=\"text-area-wrap\">\n          <div class=\"lable\">\n            DESCRIPTION\n          </div>\n          <div>\n            <textarea class=\"test-area\" style=\"resize: none;\" placeholder=\"Write something about your offer...\" name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\n          </div>\n        </div>\n        <div class=\"input-right-wrap\">\n          <div class=\"lable\">\n            OFFER TYPE\n          </div>\n          <div class=\"dropdawn-wrap\">\n            <button (click)=\"showDropdawnType = !showDropdawnType\" class=\"button button-right-header\">\n              Fixed Price (Ex. $69.00) \n              <object data=\"assets\\img\\download-service.svg\" type=\"image/svg+xml\"></object>\n            </button>\n            <div *ngIf=\"showDropdawnType\" class=\"dropdawn-top\">\n              <div>Oldest First</div>\n              <div>Newest First</div>\n              <div>Oldest First</div>\n              <div>Newest First</div>\n            </div>\n          </div>\n          <div class=\"lable\">\n            OFFER VALUE\n          </div>\n          <div class=\"dropdawn-wrap\">\n            <button (click)=\"showDropdawnValue = !showDropdawnValue\" class=\"button button-right-header\">\n              $$$ \n              <object data=\"assets\\img\\download-service.svg\" type=\"image/svg+xml\"></object>\n            </button>\n            <div *ngIf=\"showDropdawnValue\" class=\"dropdawn-top\">\n              <div>Oldest First</div>\n              <div>Newest First</div>\n              <div>Oldest First</div>\n              <div>Newest First</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"radio-wrap\">\n          <div class=\"lable\">\n            EXPIRATION DATE\n          </div>\n          <div class=\"styled-input-container styled-input--square\">\n            <div class=\"styled-input-single\">\n              <input type=\"radio\" name=\"fieldset-2\" id=\"radio2-example-one\" />\n              <label for=\"radio2-example-one\">Does Not Expire</label>\n            </div>\n            <div class=\"expiration-date-wrap\">\n              <div class=\"styled-input-single radio-date\">\n                <input type=\"radio\" name=\"fieldset-2\" id=\"radio2-example-two\" />\n                <label for=\"radio2-example-two\">Select Expiratio Date</label>\n              </div>\n              <div class=\"input-wrap spicial-calendar\">\n                <p-calendar [(ngModel)]=\"date9\" showButtonBar=\"true\"></p-calendar>\n                <span class=\"icon-input\"><object data=\"assets\\img\\calendar-special.svg\" type=\"image/svg+xml\"></object></span>\n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"button-bot-create\">\n        <div class=\"btn-wrap\">\n          <button class=\"button confirm\">\n            CREATE\n          </button>\n          <button class=\"button reject\">\n            CANCEL\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/special-offer/new-special-offer/new-special-offer.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap .head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 25px; }\n  .main-wrap .head .right-content-head {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .main-wrap .head .right-content-head .sort {\n      color: #424242;\n      font-weight: 600;\n      font-size: 22px;\n      margin-right: 20px; }\n  .main-wrap .head .right-content-head .dropdawn-wrap {\n      position: relative; }\n  .main-wrap .head .right-content-head .dropdawn-wrap .dropdawn {\n        position: absolute;\n        width: 100%;\n        top: 52px;\n        border-radius: 5px;\n        background: white;\n        -webkit-box-shadow: 5px 5px 5px -4px black;\n        box-shadow: 5px 5px 5px -4px black;\n        z-index: 1000; }\n  .main-wrap .head .right-content-head .dropdawn-wrap .dropdawn div {\n          padding: 10px;\n          color: #5a5a5a;\n          font-size: 18px;\n          padding-left: 20px;\n          cursor: pointer; }\n  .main-wrap .head .right-content-head .dropdawn-wrap .dropdawn div:hover {\n          background: rgba(0, 0, 0, 0.02); }\n  .main-wrap .head .right-content-head .dropdawn-wrap .button-right-header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        background: white;\n        border: none;\n        outline: none;\n        border-radius: 5px;\n        font-size: 20px;\n        font-weight: 600;\n        height: 50px;\n        padding-left: 20px;\n        padding-right: 20px;\n        width: 240px;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        cursor: pointer;\n        color: #5a5a5a; }\n  .btn-wrap .button {\n  width: 320px;\n  border: 2px solid #02c0ef;\n  border-radius: 5px;\n  font-size: 22px;\n  font-weight: 500;\n  padding: 10px; }\n  .btn-wrap .confirm {\n  background: #02c0ef;\n  color: white;\n  margin-right: 25px; }\n  .btn-wrap .reject {\n  color: #02c0ef;\n  background: white; }\n  .button-bot-create {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .btn-right {\n  border-radius: 5px;\n  font-size: 16px;\n  font-weight: 600;\n  height: 36px;\n  padding-left: 10px;\n  padding-right: 10px;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  cursor: pointer;\n  color: #ffffff;\n  width: 115px; }\n  .confirmed {\n  background: #02c0ef; }\n  .pending {\n  background: #ffa502; }\n  .canceled {\n  background: #b0b0b0; }\n  .content-main {\n  background: white;\n  border-radius: 10px;\n  padding-bottom: 35px;\n  padding-top: 10px; }\n  .content-main .head-content {\n    padding: 10px;\n    border-left: 6px solid #02c0ef;\n    padding-left: 20px;\n    font-size: 21px;\n    color: #414242;\n    font-weight: 600;\n    margin-bottom: 6px; }\n  .content-main .row-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 9px;\n    border-bottom: 1px solid #cccccc;\n    font-size: 19px;\n    FONT-WEIGHT: 500;\n    color: #989898;\n    white-space: nowrap; }\n  .content-main .row-content .column-create-dete {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding-left: 30px;\n      width: calc((100% / 10) + 44px); }\n  .content-main .row-content .column-description {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: calc((100% / 10) + 278px);\n      white-space: normal;\n      text-align: center; }\n  .content-main .row-content .column-expiration-date {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: calc((100% / 10) + 134px); }\n  .content-main .row-content .column-status {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: calc((100% / 10) + 64px); }\n  .content-main .row-content .column-icon {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: calc((100% / 10) + -35px); }\n  .content-main .row-content:last-child {\n    border: none; }\n  .content-main .row-content-head {\n    font-size: 22px;\n    font-weight: 600;\n    color: #5b5b5b; }\n  .content-main .row-content-head .column-create-dete {\n      padding-left: 30px; }\n  .icon-pan {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s; }\n  .icon-pan svg {\n    position: relative;\n    left: 4px;\n    top: 1px; }\n  .icon-pan:hover {\n  background: white;\n  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.36);\n  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.36);\n  border-radius: 50px; }\n  .active-pan {\n  background: white;\n  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.36);\n  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.36);\n  border-radius: 50px; }\n  .input-right-wrap .dropdawn-wrap {\n  position: relative; }\n  .input-right-wrap .dropdawn-wrap .dropdawn-top {\n    position: absolute;\n    width: 100%;\n    top: 38px;\n    border-radius: 5px;\n    background: white;\n    -webkit-box-shadow: 1px 1px 4px 0px #0000006e;\n    box-shadow: 1px 1px 4px 0px #0000006e;\n    z-index: 1000; }\n  .input-right-wrap .dropdawn-wrap .dropdawn-top div {\n      padding: 10px;\n      color: #5a5a5a;\n      font-size: 13px;\n      padding-left: 20px;\n      cursor: pointer;\n      font-weight: 600; }\n  .input-right-wrap .dropdawn-wrap .dropdawn-top div:hover {\n      background: rgba(0, 0, 0, 0.02); }\n  .input-right-wrap .dropdawn-wrap .button-right-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    background: white;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n    font-size: 13px;\n    font-weight: 600;\n    height: 36px;\n    padding-left: 20px;\n    padding-right: 20px;\n    width: 100%;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    cursor: pointer;\n    color: #5a5a5a;\n    border: 1px solid #bdbdbd;\n    margin-bottom: 17px; }\n  .create-offer-wrap {\n  background: white;\n  border-radius: 10px;\n  padding-bottom: 20px; }\n  .create-offer-wrap .head-create {\n    background: #cacaca;\n    padding-bottom: 16px;\n    height: 240px;\n    border-radius: 10px 10px 0 0;\n    position: relative; }\n  .create-offer-wrap .head-create .header {\n      background: #6a6a6a;\n      border-radius: 10px 10px 0 0;\n      color: #eeeeee;\n      padding: 9px;\n      font-size: 21px;\n      padding-left: 20px; }\n  .create-offer-wrap .head-create .img-wrap {\n      text-align: center; }\n  .create-offer-wrap .head-create .img-wrap div svg {\n        width: 101px;\n        height: 100px;\n        margin-top: 24px;\n        padding-bottom: 10px; }\n  .create-offer-wrap .head-create .img-wrap div .lable-img {\n        color: #828282;\n        font-weight: 700; }\n  .create-offer-wrap .head-create .btn-wrap {\n      position: absolute;\n      right: 28px;\n      bottom: 16px; }\n  .create-offer-wrap .head-create .btn-wrap .grey-style {\n        margin-right: 0;\n        background: #6a6a6a;\n        color: #eeeeee;\n        border-color: #6a6a6a; }\n  .input-wrap-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .input-wrap-main .text-area-wrap {\n    width: calc(50% - 20px);\n    margin-right: 40px;\n    padding: 28px;\n    padding-right: 0;\n    padding-bottom: 4px; }\n  .input-wrap-main .text-area-wrap .lable {\n      font-size: 20px;\n      font-weight: 600;\n      color: #404040;\n      margin-bottom: 5px; }\n  .input-wrap-main .text-area-wrap .test-area {\n      resize: none;\n      width: calc(100% - 22px);\n      height: 100px;\n      border-radius: 5px;\n      padding: 10px;\n      background: none;\n      border: 1px solid #bdbdbd;\n      font-size: 17px;\n      color: #767676;\n      outline: none; }\n  .input-wrap-main .text-area-wrap .test-area::-webkit-input-placeholder {\n      /* Chrome/Opera/Safari */\n      font-size: 17px;\n      color: #767676; }\n  .input-wrap-main .text-area-wrap .test-area::-moz-placeholder {\n      /* Firefox 19+ */\n      font-size: 17px;\n      color: #767676; }\n  .input-wrap-main .text-area-wrap .test-area:-ms-input-placeholder {\n      /* IE 10+ */\n      font-size: 17px;\n      color: #767676; }\n  .input-wrap-main .text-area-wrap .test-area:-moz-placeholder {\n      /* Firefox 18- */\n      font-size: 17px;\n      color: #767676; }\n  .input-wrap-main .input-right-wrap {\n    width: calc(50% - 20px);\n    padding: 28px;\n    padding-left: 0;\n    padding-bottom: 4px; }\n  .input-wrap-main .input-right-wrap .lable {\n      font-size: 20px;\n      font-weight: 600;\n      color: #404040;\n      margin-bottom: 5px; }\n  .radio-wrap {\n  padding-left: 28px; }\n  .radio-wrap .lable {\n    font-size: 20px;\n    font-weight: 600;\n    color: #404040;\n    margin-bottom: 5px; }\n  .input-wrap {\n  position: relative; }\n  .input-wrap .icon-input {\n    position: absolute;\n    right: 9px;\n    top: 5px; }\n  .spicial-calendar {\n  top: -19px;\n  margin-left: 27px; }\n  .radio-date {\n  position: relative;\n  top: -14px; }\n  .expiration-date-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .styled-input-single {\n  position: relative;\n  padding: 0px 0 28px 34px;\n  text-align: left; }\n  .styled-input-single label {\n  cursor: pointer;\n  font-size: 17px;\n  color: #505050; }\n  .styled-input-single label:before, .styled-input-single label:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  border-radius: 50%; }\n  .styled-input-single label:before {\n  left: 0;\n  width: 18px;\n  height: 18px;\n  margin: -21px 0 0;\n  background: #f7f7f7;\n  border: 2px solid #02c0ef;\n  top: 23px;\n  border-radius: 2px !important; }\n  .styled-input-single label:after {\n  left: 5px;\n  width: 12px;\n  height: 12px;\n  margin: -19px 0 0;\n  opacity: 0;\n  background: #02c0ef;\n  -webkit-transform: translate3d(-40px, 0, 0) scale(0.5);\n  transform: translate3d(-40px, 0, 0) scale(0.5);\n  transition: opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  -webkit-transition: opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out; }\n  .styled-input-single input[type=\"radio\"],\n.styled-input-single input[type=\"checkbox\"] {\n  position: absolute;\n  top: 0;\n  left: -9999px;\n  visibility: hidden; }\n  .styled-input-single input[type=\"radio\"]:checked + label:after,\n.styled-input-single input[type=\"checkbox\"]:checked + label:after {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  opacity: 1; }\n  .styled-input--diamond .styled-input-single {\n  padding-left: 45px; }\n  .styled-input--square label:before, .styled-input--square label:after {\n  border-radius: 0; }\n"

/***/ }),

/***/ "./src/app/special-offer/new-special-offer/new-special-offer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSpecialOfferComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewSpecialOfferComponent = /** @class */ (function () {
    function NewSpecialOfferComponent() {
    }
    NewSpecialOfferComponent.prototype.ngOnInit = function () {
    };
    NewSpecialOfferComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-special-offer',
            template: __webpack_require__("./src/app/special-offer/new-special-offer/new-special-offer.component.html"),
            styles: [__webpack_require__("./src/app/special-offer/new-special-offer/new-special-offer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewSpecialOfferComponent);
    return NewSpecialOfferComponent;
}());



/***/ }),

/***/ "./src/app/special-offer/special-offer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-new-special-offer *ngIf=\"show\"></app-new-special-offer>\n<div *ngIf=\"!show\" class=\"main-wrap\">\n  <div class=\"head\">\n    <div class=\"btn-wrap\">\n      <button class=\"button confirm\" (click)=\"show = true\">\n        CREATE NEW OFFER\n      </button>\n    </div>\n    <div class=\"right-content-head\">\n      <div class=\"sort\">\n        SORT\n      </div>\n      <div class=\"dropdawn-wrap\">\n        <button (click)=\"showDropdawn = !showDropdawn\" class=\"button button-right-header\">\n          Active first\n          <object data=\"assets\\img\\download.svg\" type=\"image/svg+xml\"></object>\n        </button>\n        <div *ngIf=\"showDropdawn\" class=\"dropdawn\">\n          <div>Oldest First</div>\n          <div>Newest First</div>\n          <div>Oldest First</div>\n          <div>Newest First</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"content-main\">\n    <div class=\"head-content\">\n      CURRENT SPECIAL OFFERS\n    </div>\n    <div class=\"row-content row-content-head\">\n      <div class=\"column-create-dete\">Created Date</div>\n      <div class=\"column-description\">Description</div>\n      <div class=\"column-expiration-date\">Expiration Date</div>\n      <div class=\"column-status\">Status</div>\n      <div class=\"column-icon\"></div>\n    </div>\n    <div class=\"row-content\">\n      <div class=\"column-create-dete\">\n        02/03/2018\n      </div>\n      <div class=\"column-description\">\n        Lorem Impsum Sit ammet dolar sit.\n      </div>\n      <div class=\"column-expiration-date\">\n        Dose Not Expire\n      </div>\n      <div class=\"column-status\">\n        <button class=\"button btn-right confirmed\">\n          ACTIVE\n        </button>\n        <!-- <button class=\"button btn-right pending\">\n          INACTIVE\n        </button> -->\n      </div>\n      <div class=\"column-icon\">\n         <span class=\"icon-pan active-pan\">\n            <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            width=\"0.741cm\" height=\"0.811cm\">\n            <path fill-rule=\"evenodd\"  fill=\"rgb(70, 70, 70)\"\n            d=\"M15.511,13.738 L15.511,13.738 L17.529,11.758 L20.993,8.360 L14.923,2.406 L10.861,6.390 L9.873,5.421 L13.978,1.395 L12.559,-0.000 L7.033,5.421 L9.441,7.783 L9.440,7.783 L9.440,7.783 L0.850,16.210 L-0.000,23.000 L1.213,22.854 L19.573,22.854 L19.573,20.882 L8.228,20.882 L15.511,13.738 ZM14.923,5.192 L18.152,8.360 L15.510,10.951 L12.281,7.783 L14.923,5.192 ZM2.758,17.125 L10.861,9.177 L14.090,12.344 L5.989,20.292 L2.306,20.736 L2.758,17.125 Z\"/>\n          </svg>\n         </span>\n      </div>\n    </div>\n     <div class=\"row-content\">\n      <div class=\"column-create-dete\">\n        02/03/2018\n      </div>\n      <div class=\"column-description\">\n        Lorem Impsum Sit ammet dolar sit.\n      </div>\n      <div class=\"column-expiration-date\">\n        Dose Not Expire\n      </div>\n      <div class=\"column-status\">\n        <button class=\"button btn-right confirmed\">\n          ACTIVE\n        </button>\n        <!-- <button class=\"button btn-right pending\">\n          INACTIVE\n        </button> -->\n      </div>\n      <div class=\"column-icon\">\n         <span class=\"icon-pan\">\n            <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            width=\"0.741cm\" height=\"0.811cm\">\n            <path fill-rule=\"evenodd\"  fill=\"rgb(70, 70, 70)\"\n            d=\"M15.511,13.738 L15.511,13.738 L17.529,11.758 L20.993,8.360 L14.923,2.406 L10.861,6.390 L9.873,5.421 L13.978,1.395 L12.559,-0.000 L7.033,5.421 L9.441,7.783 L9.440,7.783 L9.440,7.783 L0.850,16.210 L-0.000,23.000 L1.213,22.854 L19.573,22.854 L19.573,20.882 L8.228,20.882 L15.511,13.738 ZM14.923,5.192 L18.152,8.360 L15.510,10.951 L12.281,7.783 L14.923,5.192 ZM2.758,17.125 L10.861,9.177 L14.090,12.344 L5.989,20.292 L2.306,20.736 L2.758,17.125 Z\"/>\n          </svg>\n         </span>\n      </div>\n    </div>\n     <div class=\"row-content\">\n      <div class=\"column-create-dete\">\n        02/03/2018\n      </div>\n      <div class=\"column-description\">\n        Lorem Impsum Sit ammet dolar sit.\n      </div>\n      <div class=\"column-expiration-date\">\n        Dose Not Expire\n      </div>\n      <div class=\"column-status\">\n        <button class=\"button btn-right confirmed\">\n          ACTIVE\n        </button>\n        <!-- <button class=\"button btn-right pending\">\n          INACTIVE\n        </button> -->\n      </div>\n      <div class=\"column-icon\">\n         <span class=\"icon-pan\">\n            <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            width=\"0.741cm\" height=\"0.811cm\">\n            <path fill-rule=\"evenodd\"  fill=\"rgb(70, 70, 70)\"\n            d=\"M15.511,13.738 L15.511,13.738 L17.529,11.758 L20.993,8.360 L14.923,2.406 L10.861,6.390 L9.873,5.421 L13.978,1.395 L12.559,-0.000 L7.033,5.421 L9.441,7.783 L9.440,7.783 L9.440,7.783 L0.850,16.210 L-0.000,23.000 L1.213,22.854 L19.573,22.854 L19.573,20.882 L8.228,20.882 L15.511,13.738 ZM14.923,5.192 L18.152,8.360 L15.510,10.951 L12.281,7.783 L14.923,5.192 ZM2.758,17.125 L10.861,9.177 L14.090,12.344 L5.989,20.292 L2.306,20.736 L2.758,17.125 Z\"/>\n          </svg>\n         </span>\n      </div>\n    </div>\n     <div class=\"row-content\">\n      <div class=\"column-create-dete\">\n        02/03/2018\n      </div>\n      <div class=\"column-description\">\n        Lorem Impsum Sit ammet dolar sit.\n      </div>\n      <div class=\"column-expiration-date\">\n        Dose Not Expire\n      </div>\n      <div class=\"column-status\">\n        <!-- <button class=\"button btn-right confirmed\">\n          ACTIVE\n        </button> -->\n        <button class=\"button btn-right pending\">\n          INACTIVE\n        </button>\n      </div>\n      <div class=\"column-icon\">\n         <span class=\"icon-pan\">\n            <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            width=\"0.741cm\" height=\"0.811cm\">\n            <path fill-rule=\"evenodd\"  fill=\"rgb(70, 70, 70)\"\n            d=\"M15.511,13.738 L15.511,13.738 L17.529,11.758 L20.993,8.360 L14.923,2.406 L10.861,6.390 L9.873,5.421 L13.978,1.395 L12.559,-0.000 L7.033,5.421 L9.441,7.783 L9.440,7.783 L9.440,7.783 L0.850,16.210 L-0.000,23.000 L1.213,22.854 L19.573,22.854 L19.573,20.882 L8.228,20.882 L15.511,13.738 ZM14.923,5.192 L18.152,8.360 L15.510,10.951 L12.281,7.783 L14.923,5.192 ZM2.758,17.125 L10.861,9.177 L14.090,12.344 L5.989,20.292 L2.306,20.736 L2.758,17.125 Z\"/>\n          </svg>\n         </span>\n      </div>\n    </div>\n     <div class=\"row-content\">\n      <div class=\"column-create-dete\">\n        02/03/2018\n      </div>\n      <div class=\"column-description\">\n        Lorem Impsum Sit ammet dolar sit.\n      </div>\n      <div class=\"column-expiration-date\">\n        Dose Not Expire\n      </div>\n      <div class=\"column-status\">\n        <!-- <button class=\"button btn-right confirmed\">\n          ACTIVE\n        </button> -->\n        <button class=\"button btn-right pending\">\n          INACTIVE\n        </button>\n      </div>\n      <div class=\"column-icon\">\n         <span class=\"icon-pan\">\n            <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            width=\"0.741cm\" height=\"0.811cm\">\n            <path fill-rule=\"evenodd\"  fill=\"rgb(70, 70, 70)\"\n            d=\"M15.511,13.738 L15.511,13.738 L17.529,11.758 L20.993,8.360 L14.923,2.406 L10.861,6.390 L9.873,5.421 L13.978,1.395 L12.559,-0.000 L7.033,5.421 L9.441,7.783 L9.440,7.783 L9.440,7.783 L0.850,16.210 L-0.000,23.000 L1.213,22.854 L19.573,22.854 L19.573,20.882 L8.228,20.882 L15.511,13.738 ZM14.923,5.192 L18.152,8.360 L15.510,10.951 L12.281,7.783 L14.923,5.192 ZM2.758,17.125 L10.861,9.177 L14.090,12.344 L5.989,20.292 L2.306,20.736 L2.758,17.125 Z\"/>\n          </svg>\n         </span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/special-offer/special-offer.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrap .head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 25px; }\n  .main-wrap .head .right-content-head {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .main-wrap .head .right-content-head .sort {\n      color: #424242;\n      font-weight: 600;\n      font-size: 22px;\n      margin-right: 20px; }\n  .main-wrap .head .right-content-head .dropdawn-wrap {\n      position: relative; }\n  .main-wrap .head .right-content-head .dropdawn-wrap .dropdawn {\n        position: absolute;\n        width: 100%;\n        top: 52px;\n        border-radius: 5px;\n        background: white;\n        -webkit-box-shadow: 5px 5px 5px -4px black;\n        box-shadow: 5px 5px 5px -4px black;\n        z-index: 1000; }\n  .main-wrap .head .right-content-head .dropdawn-wrap .dropdawn div {\n          padding: 10px;\n          color: #5a5a5a;\n          font-size: 18px;\n          padding-left: 20px;\n          cursor: pointer; }\n  .main-wrap .head .right-content-head .dropdawn-wrap .dropdawn div:hover {\n          background: rgba(0, 0, 0, 0.02); }\n  .main-wrap .head .right-content-head .dropdawn-wrap .button-right-header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        background: white;\n        border: none;\n        outline: none;\n        border-radius: 5px;\n        font-size: 20px;\n        font-weight: 600;\n        height: 50px;\n        padding-left: 20px;\n        padding-right: 20px;\n        width: 240px;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        cursor: pointer;\n        color: #5a5a5a; }\n  .btn-wrap .button {\n  width: 320px;\n  border: 2px solid #02c0ef;\n  border-radius: 5px;\n  font-size: 22px;\n  font-weight: 500;\n  padding: 10px; }\n  .btn-wrap .confirm {\n  background: #02c0ef;\n  color: white;\n  margin-right: 25px; }\n  .btn-wrap .reject {\n  color: #02c0ef;\n  background: white; }\n  .button-bot-create {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .btn-right {\n  border-radius: 5px;\n  font-size: 16px;\n  font-weight: 600;\n  height: 36px;\n  padding-left: 10px;\n  padding-right: 10px;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  cursor: pointer;\n  color: #ffffff;\n  width: 115px; }\n  .confirmed {\n  background: #02c0ef; }\n  .pending {\n  background: #ffa502; }\n  .canceled {\n  background: #b0b0b0; }\n  .content-main {\n  background: white;\n  border-radius: 10px;\n  padding-bottom: 35px;\n  padding-top: 10px; }\n  .content-main .head-content {\n    padding: 10px;\n    border-left: 6px solid #02c0ef;\n    padding-left: 20px;\n    font-size: 21px;\n    color: #414242;\n    font-weight: 600;\n    margin-bottom: 6px; }\n  .content-main .row-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 9px;\n    border-bottom: 1px solid #cccccc;\n    font-size: 19px;\n    FONT-WEIGHT: 500;\n    color: #989898;\n    white-space: nowrap; }\n  .content-main .row-content .column-create-dete {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding-left: 30px;\n      width: calc((100% / 10) + 44px); }\n  .content-main .row-content .column-description {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: calc((100% / 10) + 278px);\n      white-space: normal;\n      text-align: center; }\n  .content-main .row-content .column-expiration-date {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: calc((100% / 10) + 134px); }\n  .content-main .row-content .column-status {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: calc((100% / 10) + 64px); }\n  .content-main .row-content .column-icon {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: calc((100% / 10) + -35px); }\n  .content-main .row-content:last-child {\n    border: none; }\n  .content-main .row-content-head {\n    font-size: 22px;\n    font-weight: 600;\n    color: #5b5b5b; }\n  .content-main .row-content-head .column-create-dete {\n      padding-left: 30px; }\n  .icon-pan {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s; }\n  .icon-pan svg {\n    position: relative;\n    left: 4px;\n    top: 1px; }\n  .icon-pan:hover {\n  background: white;\n  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.36);\n  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.36);\n  border-radius: 50px; }\n  .active-pan {\n  background: white;\n  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.36);\n  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.36);\n  border-radius: 50px; }\n  .input-right-wrap .dropdawn-wrap {\n  position: relative; }\n  .input-right-wrap .dropdawn-wrap .dropdawn-top {\n    position: absolute;\n    width: 100%;\n    top: 38px;\n    border-radius: 5px;\n    background: white;\n    -webkit-box-shadow: 1px 1px 4px 0px #0000006e;\n    box-shadow: 1px 1px 4px 0px #0000006e;\n    z-index: 1000; }\n  .input-right-wrap .dropdawn-wrap .dropdawn-top div {\n      padding: 10px;\n      color: #5a5a5a;\n      font-size: 13px;\n      padding-left: 20px;\n      cursor: pointer;\n      font-weight: 600; }\n  .input-right-wrap .dropdawn-wrap .dropdawn-top div:hover {\n      background: rgba(0, 0, 0, 0.02); }\n  .input-right-wrap .dropdawn-wrap .button-right-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    background: white;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n    font-size: 13px;\n    font-weight: 600;\n    height: 36px;\n    padding-left: 20px;\n    padding-right: 20px;\n    width: 100%;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    cursor: pointer;\n    color: #5a5a5a;\n    border: 1px solid #bdbdbd;\n    margin-bottom: 17px; }\n  .create-offer-wrap {\n  background: white;\n  border-radius: 10px;\n  padding-bottom: 20px; }\n  .create-offer-wrap .head-create {\n    background: #cacaca;\n    padding-bottom: 16px;\n    height: 240px;\n    border-radius: 10px 10px 0 0;\n    position: relative; }\n  .create-offer-wrap .head-create .header {\n      background: #6a6a6a;\n      border-radius: 10px 10px 0 0;\n      color: #eeeeee;\n      padding: 9px;\n      font-size: 21px;\n      padding-left: 20px; }\n  .create-offer-wrap .head-create .img-wrap {\n      text-align: center; }\n  .create-offer-wrap .head-create .img-wrap div svg {\n        width: 101px;\n        height: 100px;\n        margin-top: 24px;\n        padding-bottom: 10px; }\n  .create-offer-wrap .head-create .img-wrap div .lable-img {\n        color: #828282;\n        font-weight: 700; }\n  .create-offer-wrap .head-create .btn-wrap {\n      position: absolute;\n      right: 28px;\n      bottom: 16px; }\n  .create-offer-wrap .head-create .btn-wrap .grey-style {\n        margin-right: 0;\n        background: #6a6a6a;\n        color: #eeeeee;\n        border-color: #6a6a6a; }\n  .input-wrap-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .input-wrap-main .text-area-wrap {\n    width: calc(50% - 20px);\n    margin-right: 40px;\n    padding: 28px;\n    padding-right: 0;\n    padding-bottom: 4px; }\n  .input-wrap-main .text-area-wrap .lable {\n      font-size: 20px;\n      font-weight: 600;\n      color: #404040;\n      margin-bottom: 5px; }\n  .input-wrap-main .text-area-wrap .test-area {\n      resize: none;\n      width: calc(100% - 22px);\n      height: 100px;\n      border-radius: 5px;\n      padding: 10px;\n      background: none;\n      border: 1px solid #bdbdbd;\n      font-size: 17px;\n      color: #767676;\n      outline: none; }\n  .input-wrap-main .text-area-wrap .test-area::-webkit-input-placeholder {\n      /* Chrome/Opera/Safari */\n      font-size: 17px;\n      color: #767676; }\n  .input-wrap-main .text-area-wrap .test-area::-moz-placeholder {\n      /* Firefox 19+ */\n      font-size: 17px;\n      color: #767676; }\n  .input-wrap-main .text-area-wrap .test-area:-ms-input-placeholder {\n      /* IE 10+ */\n      font-size: 17px;\n      color: #767676; }\n  .input-wrap-main .text-area-wrap .test-area:-moz-placeholder {\n      /* Firefox 18- */\n      font-size: 17px;\n      color: #767676; }\n  .input-wrap-main .input-right-wrap {\n    width: calc(50% - 20px);\n    padding: 28px;\n    padding-left: 0;\n    padding-bottom: 4px; }\n  .input-wrap-main .input-right-wrap .lable {\n      font-size: 20px;\n      font-weight: 600;\n      color: #404040;\n      margin-bottom: 5px; }\n  .radio-wrap {\n  padding-left: 28px; }\n  .radio-wrap .lable {\n    font-size: 20px;\n    font-weight: 600;\n    color: #404040;\n    margin-bottom: 5px; }\n  .input-wrap {\n  position: relative; }\n  .input-wrap .icon-input {\n    position: absolute;\n    right: 9px;\n    top: 5px; }\n  .spicial-calendar {\n  top: -19px;\n  margin-left: 27px; }\n  .radio-date {\n  position: relative;\n  top: -14px; }\n  .expiration-date-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .styled-input-single {\n  position: relative;\n  padding: 0px 0 28px 34px;\n  text-align: left; }\n  .styled-input-single label {\n  cursor: pointer;\n  font-size: 17px;\n  color: #505050; }\n  .styled-input-single label:before, .styled-input-single label:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  border-radius: 50%; }\n  .styled-input-single label:before {\n  left: 0;\n  width: 18px;\n  height: 18px;\n  margin: -21px 0 0;\n  background: #f7f7f7;\n  border: 2px solid #02c0ef;\n  top: 23px;\n  border-radius: 2px !important; }\n  .styled-input-single label:after {\n  left: 5px;\n  width: 12px;\n  height: 12px;\n  margin: -19px 0 0;\n  opacity: 0;\n  background: #02c0ef;\n  -webkit-transform: translate3d(-40px, 0, 0) scale(0.5);\n  transform: translate3d(-40px, 0, 0) scale(0.5);\n  transition: opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  -webkit-transition: opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out; }\n  .styled-input-single input[type=\"radio\"],\n.styled-input-single input[type=\"checkbox\"] {\n  position: absolute;\n  top: 0;\n  left: -9999px;\n  visibility: hidden; }\n  .styled-input-single input[type=\"radio\"]:checked + label:after,\n.styled-input-single input[type=\"checkbox\"]:checked + label:after {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  opacity: 1; }\n  .styled-input--diamond .styled-input-single {\n  padding-left: 45px; }\n  .styled-input--square label:before, .styled-input--square label:after {\n  border-radius: 0; }\n"

/***/ }),

/***/ "./src/app/special-offer/special-offer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialOfferComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpecialOfferComponent = /** @class */ (function () {
    function SpecialOfferComponent() {
    }
    SpecialOfferComponent.prototype.ngOnInit = function () {
    };
    SpecialOfferComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-special-offer',
            template: __webpack_require__("./src/app/special-offer/special-offer.component.html"),
            styles: [__webpack_require__("./src/app/special-offer/special-offer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpecialOfferComponent);
    return SpecialOfferComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map