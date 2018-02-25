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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wizard_wizard_component__ = __webpack_require__("../../../../../src/app/wizard/wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__health_health_component__ = __webpack_require__("../../../../../src/app/health/health.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__check_up_check_up_component__ = __webpack_require__("../../../../../src/app/check-up/check-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_area_personal_area_component__ = __webpack_require__("../../../../../src/app/personal-area/personal-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proposals_proposals_component__ = __webpack_require__("../../../../../src/app/proposals/proposals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'risk',
        component: __WEBPACK_IMPORTED_MODULE_3__wizard_wizard_component__["a" /* WizardComponent */]
    },
    {
        path: 'health',
        component: __WEBPACK_IMPORTED_MODULE_4__health_health_component__["a" /* HealthComponent */]
    },
    {
        path: 'check-up',
        component: __WEBPACK_IMPORTED_MODULE_5__check_up_check_up_component__["a" /* CheckUpComponent */]
    },
    {
        path: 'personal',
        component: __WEBPACK_IMPORTED_MODULE_6__personal_area_personal_area_component__["a" /* PersonalAreaComponent */]
    },
    {
        path: 'proposals',
        component: __WEBPACK_IMPORTED_MODULE_7__proposals_proposals_component__["a" /* ProposalsComponent */]
    },
    {
        path: 'proposals/:amount',
        component: __WEBPACK_IMPORTED_MODULE_7__proposals_proposals_component__["a" /* ProposalsComponent */]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!--<app-wizard *ngIf=\"!showproposals\" (finish)=\"amount = $event; showproposals = true;\"></app-wizard>-->\n<!--<app-home></app-home>-->\n<!-- <app-personal-area></app-personal-area> -->\n<!--<app-health *ngIf=\"!showproposals\" (finish)=\"amount = $event; showproposals = true;\"></app-health>-->\n<!--<app-check-up></app-check-up>-->\n<!--<app-proposals *ngIf=\"showproposals\" [amount]=\"amount\"></app-proposals>-->\n<!--<app-proposals [amount]=\"amount\"></app-proposals>-->\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wizard_wizard_component__ = __webpack_require__("../../../../../src/app/wizard/wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wizard_info_info_component__ = __webpack_require__("../../../../../src/app/wizard/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wizard_calculator_side_panel_calculator_side_panel_component__ = __webpack_require__("../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wizard_genderselect_genderselect_component__ = __webpack_require__("../../../../../src/app/wizard/genderselect/genderselect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wizard_birthdate_birthdate_component__ = __webpack_require__("../../../../../src/app/wizard/birthdate/birthdate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wizard_smoking_smoking_component__ = __webpack_require__("../../../../../src/app/wizard/smoking/smoking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wizard_calculatorsummary_calculatorsummary_component__ = __webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wizard_profession_profession_component__ = __webpack_require__("../../../../../src/app/wizard/profession/profession.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__proposals_proposals_component__ = __webpack_require__("../../../../../src/app/proposals/proposals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_autocomplit_autocomplit_component__ = __webpack_require__("../../../../../src/app/shared/autocomplit/autocomplit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__wizard_calculatorsummary_calculatorsummary_modal_calculatorsummary_modal_component__ = __webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__wizard_proposals_modal_calcut_modal_calcut_component__ = __webpack_require__("../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__wizard_proposals_modal_chose_modal_chose_component__ = __webpack_require__("../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__health_health_component__ = __webpack_require__("../../../../../src/app/health/health.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__wizard_private_health_personalinfo_private_health_personalinfo_component__ = __webpack_require__("../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__wizard_kupot_holim_kupot_holim_component__ = __webpack_require__("../../../../../src/app/wizard/kupot-holim/kupot-holim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__wizard_health_insurance_health_insurance_component__ = __webpack_require__("../../../../../src/app/wizard/health-insurance/health-insurance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__check_up_check_up_component__ = __webpack_require__("../../../../../src/app/check-up/check-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__wizard_checkup_t1_s1_checkup_t1_s1_component__ = __webpack_require__("../../../../../src/app/wizard/checkup-t1-s1/checkup-t1-s1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__wizard_checkup_t1_s2_checkup_t1_s2_component__ = __webpack_require__("../../../../../src/app/wizard/checkup-t1-s2/checkup-t1-s2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__wizard_checkup_t2_s1_checkup_t2_s1_component__ = __webpack_require__("../../../../../src/app/wizard/checkup-t2-s1/checkup-t2-s1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__wizard_checkup_t2_s2_checkup_t2_s2_component__ = __webpack_require__("../../../../../src/app/wizard/checkup-t2-s2/checkup-t2-s2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__wizard_checkup_t2_s3_checkup_t2_s3_component__ = __webpack_require__("../../../../../src/app/wizard/checkup-t2-s3/checkup-t2-s3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__personal_area_personal_area_component__ = __webpack_require__("../../../../../src/app/personal-area/personal-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular2_carousel_ztw_carousel_module__ = __webpack_require__("../../../../angular2-carousel-ztw/carousel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__personal_area_inputs_inputs_component__ = __webpack_require__("../../../../../src/app/personal-area/inputs/inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__wizard_wizard_component__["a" /* WizardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__wizard_info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__wizard_calculator_side_panel_calculator_side_panel_component__["a" /* CalculatorSidePanelComponent */],
            __WEBPACK_IMPORTED_MODULE_8__wizard_genderselect_genderselect_component__["a" /* GenderselectComponent */],
            __WEBPACK_IMPORTED_MODULE_9__wizard_birthdate_birthdate_component__["a" /* BirthdateComponent */],
            __WEBPACK_IMPORTED_MODULE_10__wizard_smoking_smoking_component__["a" /* SmokingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__wizard_calculatorsummary_calculatorsummary_component__["a" /* CalculatorsummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_12__wizard_profession_profession_component__["a" /* ProfessionComponent */],
            __WEBPACK_IMPORTED_MODULE_13__proposals_proposals_component__["a" /* ProposalsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__shared_autocomplit_autocomplit_component__["a" /* AutocomplitComponent */],
            __WEBPACK_IMPORTED_MODULE_16__wizard_calculatorsummary_calculatorsummary_modal_calculatorsummary_modal_component__["a" /* CalculatorsummaryModalComponent */],
            __WEBPACK_IMPORTED_MODULE_17__wizard_proposals_modal_calcut_modal_calcut_component__["a" /* ModalCalcutComponent */],
            __WEBPACK_IMPORTED_MODULE_18__wizard_proposals_modal_chose_modal_chose_component__["a" /* ModalChoseComponent */],
            __WEBPACK_IMPORTED_MODULE_20__health_health_component__["a" /* HealthComponent */],
            __WEBPACK_IMPORTED_MODULE_21__wizard_private_health_personalinfo_private_health_personalinfo_component__["a" /* PrivateHealthPersonalinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_22__wizard_kupot_holim_kupot_holim_component__["a" /* KupotHolimComponent */],
            __WEBPACK_IMPORTED_MODULE_23__wizard_health_insurance_health_insurance_component__["a" /* HealthInsuranceComponent */],
            __WEBPACK_IMPORTED_MODULE_25__check_up_check_up_component__["a" /* CheckUpComponent */],
            __WEBPACK_IMPORTED_MODULE_26__wizard_checkup_t1_s1_checkup_t1_s1_component__["a" /* CheckupT1S1Component */],
            __WEBPACK_IMPORTED_MODULE_27__wizard_checkup_t1_s2_checkup_t1_s2_component__["a" /* CheckupT1S2Component */],
            __WEBPACK_IMPORTED_MODULE_28__wizard_checkup_t2_s1_checkup_t2_s1_component__["a" /* CheckupT2S1Component */],
            __WEBPACK_IMPORTED_MODULE_29__wizard_checkup_t2_s2_checkup_t2_s2_component__["a" /* CheckupT2S2Component */],
            __WEBPACK_IMPORTED_MODULE_30__wizard_checkup_t2_s3_checkup_t2_s3_component__["a" /* CheckupT2S3Component */],
            __WEBPACK_IMPORTED_MODULE_31__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_32__personal_area_personal_area_component__["a" /* PersonalAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_38__personal_area_inputs_inputs_component__["a" /* InputsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_19__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_37__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_36_primeng_primeng__["CarouselModule"],
            __WEBPACK_IMPORTED_MODULE_35_angular2_carousel_ztw_carousel_module__["a" /* CarouselModule */],
            __WEBPACK_IMPORTED_MODULE_33_ngx_carousel__["a" /* NgxCarouselModule */],
            __WEBPACK_IMPORTED_MODULE_39_angular2_chartjs__["ChartModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_24__shared_service_store_service__["a" /* StoreService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/check-up/check-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calculator{\r\n  padding-bottom: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-up/check-up.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"main\" class=\"container-fluid\" tabindex=\"-1\">\n  <!-- section 1 -->\n  <section class=\"row\">\n    <div class=\"calculator clearfix\">\n\n       <app-checkup-t1-s1 *ngIf=\"activeTab === 't1-s1'\" (next)=\"nextCheck($event)\"></app-checkup-t1-s1>\n      <app-checkup-t1-s2 *ngIf=\"activeTab === 't1-s2'\" (next)=\"nextCheck($event)\"></app-checkup-t1-s2>\n       <app-checkup-t2-s1 *ngIf=\"activeTab === 't2-s1'\" (next)=\"nextCheck($event)\"></app-checkup-t2-s1>\n       <app-checkup-t2-s2 *ngIf=\"activeTab === 't2-s2'\" (next)=\"nextCheck($event)\"></app-checkup-t2-s2>\n       <app-checkup-t2-s3 *ngIf=\"activeTab === 't2-s3'\" (next)=\"nextCheck($event)\"></app-checkup-t2-s3>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/check-up/check-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_health__ = __webpack_require__("../../../../../src/app/shared/models/health.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckUpComponent = (function () {
    function CheckUpComponent() {
        this.health = new __WEBPACK_IMPORTED_MODULE_1__shared_models_health__["a" /* Health */]();
        this.activeTab = 't1-s1';
        // activeTab = 'private-health-personalinfo';
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CheckUpComponent.prototype.ngOnInit = function () {
    };
    CheckUpComponent.prototype.nextCheck = function (e) {
        console.log(e);
        if (e.finish) {
            this.finish.emit(e.amount);
        }
        if (e.back) {
            this.activeTab = e.back;
            return;
        }
        switch (e.type) {
            case "t1-s1":
                this.health.lastName = e.model.lastName;
                this.health.privateName = e.model.firstName;
                this.health.number = e.model.phone;
                this.health.prefix = e.model.prefix;
                this.health.email = e.model.email;
                break;
            case "genderselect":
                this.health.gender = e.model;
                break;
            case "private-health-personalinfo":
                this.health.birthDate = e.date;
                this.health.doesSmoke = e.smoking;
                this.health.smokeInLast3Years = e.smokeInLast3Years;
                this.health.childrens = e.childrens;
                this.health.children = e.childAmount;
                this.health.maritalStatus = e.raiodMaritalStatus;
                this.health.children = e.childAmount;
                break;
            case "kupot-holim":
                // this.risk.doesSmoke = e.model;
                break;
            case "health-insurance":
                break;
        }
        this.activeTab = e.naxtPage;
    };
    return CheckUpComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CheckUpComponent.prototype, "finish", void 0);
CheckUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-check-up',
        template: __webpack_require__("../../../../../src/app/check-up/check-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/check-up/check-up.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CheckUpComponent);

//# sourceMappingURL=check-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/health/health.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calculator{\r\n    padding-bottom: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/health/health.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"main\" class=\"container-fluid\" tabindex=\"-1\">\n  <!-- section 1 -->\n  <section class=\"row\">\n    <div class=\"calculator clearfix\">\n\n      <app-info *ngIf=\"activeTab === 'info'\" (next)=\"nextCheck($event)\"></app-info>\n      <app-genderselect [nextOption]=\"'private-health-personalinfo'\" *ngIf=\"activeTab === 'genderselect'\" (next)=\"nextCheck($event)\"></app-genderselect>\n      <app-private-health-personalinfo *ngIf=\"activeTab === 'private-health-personalinfo'\" (next)=\"nextCheck($event)\"></app-private-health-personalinfo>\n      <!--<app-private-health-personalinfo  (next)=\"nextCheck($event)\"></app-private-health-personalinfo>-->\n      <app-kupot-holim  *ngIf=\"activeTab === 'kupot-holim'\" (next)=\"nextCheck($event)\"></app-kupot-holim>\n      <!--<app-kupot-holim (next)=\"nextCheck($event)\"></app-kupot-holim>-->\n      <app-health-insurance *ngIf=\"activeTab === 'health-insurance'\" (next)=\"nextCheck($event)\"></app-health-insurance>\n      <!--<app-health-insurance (next)=\"nextCheck($event)\"></app-health-insurance>-->\n      <app-calculator-side-panel [options]=\"health\"></app-calculator-side-panel>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/health/health.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_health__ = __webpack_require__("../../../../../src/app/shared/models/health.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HealthComponent = (function () {
    function HealthComponent(router, storeService) {
        this.router = router;
        this.storeService = storeService;
        this.health = new __WEBPACK_IMPORTED_MODULE_1__shared_models_health__["a" /* Health */]();
        this.activeTab = 'info';
        // activeTab = 'private-health-personalinfo';
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HealthComponent.prototype.ngOnInit = function () {
    };
    HealthComponent.prototype.nextCheck = function (e) {
        console.log(e);
        if (e.finish) {
            this.finish.emit(e.amount);
            this.storeService.refresh();
            this.router.navigate(['/proposals']);
        }
        if (e.back) {
            this.activeTab = e.back;
            return;
        }
        switch (e.type) {
            case "info":
                this.health.lastName = e.model.lastName;
                this.health.privateName = e.model.firstName;
                this.health.number = e.model.phone;
                this.health.prefix = e.model.prefix;
                this.health.email = e.model.email;
                break;
            case "genderselect":
                this.health.gender = e.model;
                break;
            case "private-health-personalinfo":
                this.health.birthDate = e.date;
                this.health.doesSmoke = e.smoking;
                this.health.smokeInLast3Years = e.smokeInLast3Years;
                this.health.childrens = e.childrens;
                this.health.children = e.childAmount;
                this.health.maritalStatus = e.raiodMaritalStatus;
                this.health.children = e.childAmount;
                break;
            case "kupot-holim":
                // this.risk.doesSmoke = e.model;
                break;
            case "health-insurance":
                break;
        }
        this.activeTab = e.naxtPage;
    };
    return HealthComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HealthComponent.prototype, "finish", void 0);
HealthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-health',
        template: __webpack_require__("../../../../../src/app/health/health.component.html"),
        styles: [__webpack_require__("../../../../../src/app/health/health.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_store_service__["a" /* StoreService */]) === "function" && _b || Object])
], HealthComponent);

var _a, _b;
//# sourceMappingURL=health.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-caption{\r\n    color: #333;\r\n    font-size: 3em;\r\n    line-height: 36px;\r\n    text-align: center;\r\n    margin: 0 0 0.9375rem 0;\r\n}\r\n.main-caption + p {\r\n    color: #333;\r\n    font-family: \"RaananSuper\";\r\n    font-weight: bold;\r\n    font-size: 1.28571em;\r\n    line-height: 18px;\r\n    text-align: center;\r\n}\r\n.main-caption + p + a{\r\n    color: #fff;\r\n    background-color: #117ef5;\r\n    margin: 0.9375rem 0 0 0;\r\n}\r\n.main-caption + p + a > p{\r\n    color: #fff;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n.main-caption + p + a > span{\r\n    font-family: \"RaananSuper\";\r\n    font-weight: bold;\r\n    font-size: 1.14286em;\r\n}\r\ndiv.productBackgroundImage.tab.ltr, #property > div:nth-child(1){\r\n    background: no-repeat;\r\n}\r\n.companiesCarousel{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.companiesCarousel > div{\r\n    margin-right: 12px;\r\n    margin-left: 0px;\r\n}\r\n.companiesCarousel > div > a > img{\r\n    max-width: 80px;\r\n }\r\n \r\n@media (min-width: 768px){\r\n    .main-caption {\r\n        font-size: 6em;\r\n        line-height: 60px;\r\n        margin: 0 0 1.5625rem 0;\r\n    }\r\n    .main-caption + p {\r\n        font-size: 2.57143em;\r\n        line-height: 36px;\r\n    }\r\n    .main-caption + p + a{\r\n        margin: 1.5625rem 0 0 0\r\n    }\r\n    .main-caption + p + a > p{\r\n        font-size: 2.14286em;\r\n        text-align: right;\r\n    }\r\n    .main-caption + p + a > span{\r\n        font-size: 2.28571em;\r\n    }\r\n    .companiesCarousel > div > a > img{\r\n        max-width: 150px;\r\n     }\r\n}\r\n@media (min-width: 768px) and (min-width: 992px){\r\n    .main-caption {\r\n        font-size: 6.28571em;\r\n        line-height: 70px;\r\n        text-align: right;\r\n        margin: 5.9375rem 0 1.25rem 0;\r\n    }\r\n    .main-caption + p {\r\n        font-size: 2.14286em;\r\n        text-align: right;\r\n    }\r\n    .main-caption + p + a{\r\n        width: auto;\r\n        min-width: 305px;\r\n        float: right;\r\n        margin-right: 15px;\r\n    }\r\n    .main-caption + p + a > p{\r\n        font-size: 2.71429em;\r\n    }\r\n    .main-caption + p + a > span{\r\n        font-size: 1.57143em;\r\n    }\r\n    .companiesCarousel > div > a > img{\r\n        max-width: 160px;\r\n     }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.slider {}\r\n\r\n.frame {\r\n  /**\r\n   * (optional) wrapper width, specifies width of the slider frame.\r\n   */\r\n   width: 1306px;\r\n\r\n  position: relative;\r\n  font-size: 0;\r\n  line-height: 0;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.slides {\r\n  display: inline-block;\r\n}\r\n\r\nli {\r\n  position: relative;\r\n  display: inline-block;\r\n\r\n  /**\r\n   * (optional) if the content inside the slide element has a defined size.\r\n   */\r\n  width: 300px;\r\n}\r\n\r\n.prev, .next {\r\n  position: absolute;\r\n  top: 50%;\r\n  margin-top: -25px;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n.next {\r\n  right: 0;\r\n}\r\n\r\n.prev {\r\n  left: 0;\r\n}\r\n\r\n.next svg, .prev svg {\r\n  width: 25px;\r\n}\r\n.slides{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-flow: row-reverse;\r\n            flex-flow: row-reverse;\r\n}\r\n.js_slide > a > img{\r\n   \r\n}\r\n.js_slide > a{\r\n    display: block;\r\n    margin-right: 60px;\r\n    margin-left: 60px;\r\n}\r\n.hide-button{\r\n    opacity: 0;\r\n}\r\n\r\n\r\n.button-sms{\r\n    height: 35px;\r\n}\r\n@media (min-width: 1200px){\r\n    .button-sms{\r\n        height: 60px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"showSMS\">\n  <h3 class=\"sr-only\">טופס התחברות לאיזור האישי</h3>\n  <div class=\"login-overlay\" style=\"\"></div><div id=\"login-form\" style=\"left: 0px;\" class=\"active\">\n      <div class=\"login-head\">\n          <a (click)=\"showSMS = false\" class=\"login-btn-close\"><span class=\"sr-only\">סגור</span></a>\n          <h4 class=\"form-title\">התחברות</h4>\n      </div>\n      <form role=\"form\" action=\"#\" class=\"form-container login-step1\">\n          <fieldset>\n              <legend class=\"form-title\">\n                  כניסה מהירה באמצעות SMS\n              </legend>\n              <div class=\"form-group\">\n                  <span *ngIf=\"showError && !number\" class=\"validation-label field-validation-error\">\n                      אנא הזן מספר נייד\n                  </span>\n                  <input id=\"login-phonenumber\" type=\"hidden\" [(ngModel)]=\"number\"  [ngModelOptions]=\"{standalone: true}\">\n                  <label class=\"sr-only\" for=\"login-areacode\"></label>\n                  <label class=\"sr-only\" for=\"login-phonenumber\"></label>\n                  <div class=\"phone-control\" id=\"login-areacode\" style=\"display: flex;flex-flow: row-reverse;\">\n                      <div class=\"selectWrapper button-sms\"  style=\"width: 110px; margin-right: 10px;\">\n                          <div style=\"width: 100%;height: 100%;\">\n                            <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                          </div>\n                        </div>\n                      <!-- <div class=\"btn-group bootstrap-select\"><button type=\"button\" class=\"btn dropdown-toggle btn-default\" data-toggle=\"dropdown\" title=\"050\"><span class=\"filter-option pull-left\">050</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span></button><div class=\"dropdown-menu open\"><ul class=\"dropdown-menu inner\" role=\"menu\"><li data-original-index=\"0\" class=\"selected\"><a tabindex=\"0\" class=\"\" style=\"\" data-tokens=\"null\"><span class=\"text\">050</span><span class=\"glyphicon glyphicon-ok check-mark\"></span></a></li><li data-original-index=\"1\"><a tabindex=\"0\" class=\"\" style=\"\" data-tokens=\"null\"><span class=\"text\">2</span><span class=\"glyphicon glyphicon-ok check-mark\"></span></a></li><li data-original-index=\"2\"><a tabindex=\"0\" class=\"\" style=\"\" data-tokens=\"null\"><span class=\"text\">3</span><span class=\"glyphicon glyphicon-ok check-mark\"></span></a></li><li data-original-index=\"3\"><a tabindex=\"0\" class=\"\" style=\"\" data-tokens=\"null\"><span class=\"text\">4</span><span class=\"glyphicon glyphicon-ok check-mark\"></span></a></li><li data-original-index=\"4\"><a tabindex=\"0\" class=\"\" style=\"\" data-tokens=\"null\"><span class=\"text\">5</span><span class=\"glyphicon glyphicon-ok check-mark\"></span></a></li></ul></div><select class=\"selectpicker\" tabindex=\"-98\">\n                          <option>050</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                      </select></div> -->\n                      <input class=\"form-control\" id=\"login-phonenumber\" type=\"text\" name=\"phone\" dir=\"ltr\" [(ngModel)]=\"number\"  [ngModelOptions]=\"{standalone: true}\">\n                  </div>\n              </div>\n              <div class=\"form-group seperator\">\n                  <span>\n                      או\n                  </span>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"login-mail\">\n                      <span class=\"invalid-text\">\n                          אנא\n                      </span>\n                      הזן כתובת מייל\n                  </label>\n                  <input id=\"login-mail\" class=\"form-control\" type=\"email\" value=\"\">\n              </div>\n              <div class=\"form-group wrapper\">\n                  <div class=\"confirmBox noPadding\">\n\n\n                      <div class=\"styled-checkbox-wrapper\">\n                          <input class=\"styled-checkbox\" type=\"checkbox\" id=\"input-sms\" name=\"IsBroker\" value=\"true\" data-val=\"true\" data-val-required=\"The סוכן field is required.\">\n                          <label for=\"input-sms\"> סוכן</label>\n                          <input name=\"IsBroker\" type=\"hidden\" value=\"false\">\n                      </div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <button (click)=\"sendSms()\" class=\"btn btn-default btn-login center-block\">התחבר</button>\n              </div>\n              <!--<div class=\"form-group text-center\">\n  <a class=\"login-register\" href=\"#\">לא רשום?</a>\n</div>-->\n          </fieldset>\n      </form>\n      <form role=\"form\" action=\"#\" class=\"form-container login-step2\" style=\"display:none\">\n          <fieldset>\n              <legend class=\"form-title\">\n                  כניסה מהירה באמצעות SMS\n              </legend>\n              <div class=\"form-group text-center\">\n                  <label for=\"login-code\">\n                      אנא הזן את הקוד שקיבלת\n                  </label>\n                  <div>\n                      <a href=\"#\" class=\"login-btn-resend\">שלח שוב</a>\n                  </div>\n                  <div class=\"login-code-control text-right\">\n                      <span class=\"field-validation-error\">\n                          אנא הזן קוד תקין\n                      </span>\n                      <input id=\"login-code\" class=\"form-control\" type=\"text\" value=\"\">\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-default btn-login center-block\">התחבר</button>\n              </div>\n              <!--<div class=\"form-group text-center\">\n                  <a class=\"login-register\" href=\"#\">לא רשום?</a>\n              </div>-->\n          </fieldset>\n      </form>\n  </div>\n</section>\n<!-- section 1 -->\n<section class=\"row\">\n  <div class=\"mainBannerCarousel\" style=\"margin-top: 90px;opacity: 1;width: auto;display: flex;\">\n\n    <ztw-carousel style=\"width: 100%;height: 100%;\"  interval='5000'>\n      <ztw-carousel-item style=\"width: 100%;height: 100%;\">\n        <div class=\"mainBannerSlide\" style=\"height: 100%;width: 100%;\">\n        <div class=\"mainBannerImageWrapper\" style=\"background-repeat: no-repeat;background-image: url(./sample-images/section1_bg1.png);height: 100%;background-size: 55% 100%;\"\n        data-responsimg768=\"sample-images/section1_bg1_tablet.png\"\n        data-responsimg992=\"sample-images/section1_bg1.png\">\n        <div class=\"mainBannerContent col-md-12 col-md-6 col-md-push-6\">\n        <div class=\"mainBannerContent-box clearfix\">\n        <h2 class=\"col-xs-12 col-sm-10 col-sm-push-1 col-md-12 col-md-push-0 col-lg-10 col-lg-push-1 main-caption\">אבוד בעולם ביטוח הפיננסי יש יותר מידי אפשרויות?</h2>\n        <p class=\"col-xs-12 col-sm-10 col-sm-push-1 col-md-12 col-md-push-0 col-lg-10 col-lg-push-1\">\n        wakeapp עושה לך סדר בעולם הביטוח,\n        ליווי לאורך כל התהליך, מידע מהיר ועדכני,\n        המלצות מותאמות אישית\n        </p>\n        <a href=\"#\" class=\"btn col-xs-6 col-xs-push-3 col-sm-6 col-sm-push-3 col-md-12 col-md-push-0 col-md-pull-0 col-lg-pull-1\">\n        <p>צ'קאפ - התחל בדיקה</p>\n        <span>זה יקח לך 3 דקות...</span>\n        </a>\n        <a style=\"display:none;\" href=\"#\" class=\"noThanks col-xs-12 col-md-3 col-lg-2 text-center noPadding\">תודה אבל אני לא צריך</a>\n\n        </div>\n        </div>\n        </div>\n        </div>\n      </ztw-carousel-item>\n      <ztw-carousel-item style=\"    width: 100%;\n    height: 100%;\">\n        <div class=\"mainBannerSlide\" style=\"height: 100%;width: 100%;\">\n          <div class=\"mainBannerImageWrapper\" style=\"background-repeat: no-repeat;background-image: url(./sample-images/section1_bg1.png);height: 100%;background-size: 55% 100%;\"\n               data-responsimg768=\"sample-images/section1_bg1_tablet.png\"\n               data-responsimg992=\"sample-images/section1_bg1.png\">\n            <div class=\"mainBannerContent col-md-12 col-md-6 col-md-push-6\">\n              <div class=\"mainBannerContent-box clearfix\">\n                <h2 class=\"col-xs-12 col-sm-10 col-sm-push-1 col-md-12 col-md-push-0 col-lg-10 col-lg-push-1 main-caption\">אבוד בעולם ביטוח הפיננסי יש יותר מידי אפשרויות?2</h2>\n                <p class=\"col-xs-12 col-sm-10 col-sm-push-1 col-md-12 col-md-push-0 col-lg-10 col-lg-push-1\">\n                  wakeapp עושה לך סדר בעולם הביטוח,\n                  ליווי לאורך כל התהליך, מידע מהיר ועדכני,\n                  המלצות מותאמות אישית\n                </p>\n                <a href=\"#\" class=\"btn col-xs-6 col-xs-push-3 col-sm-6 col-sm-push-3 col-md-12 col-md-push-0 col-md-pull-0 col-lg-pull-1\">\n                  <p>צ'קאפ - התחל בדיקה</p>\n                  <span>זה יקח לך 3 דקות...</span>\n                </a>\n                <a style=\"display:none;\" href=\"#\" class=\"noThanks col-xs-12 col-md-3 col-lg-2 text-center noPadding\">תודה אבל אני לא צריך</a>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </ztw-carousel-item>\n    </ztw-carousel>\n    <!-- Main banner slide 1 -->\n\n    <!-- Main banner slide 2 -->\n    <!--<div class=\"mainBannerSlide\" style=\"height: 100%;width: 100%;\">-->\n      <!--<div class=\"mainBannerImageWrapper\" style=\"background-repeat: no-repeat;background-image: url(./sample-images/section1_bg1.png);height: 100%;background-size: 55% 100%;\"-->\n           <!--data-responsimg768=\"sample-images/section1_bg1_tablet.png\"-->\n           <!--data-responsimg992=\"sample-images/section1_bg1.png\">-->\n        <!--<div class=\"mainBannerContent col-md-12 col-md-6 col-md-push-6\">-->\n          <!--<div class=\"mainBannerContent-box clearfix\">-->\n            <!--<h2 class=\"col-xs-12 col-sm-10 col-sm-push-1 col-md-12 col-md-push-0 col-lg-10 col-lg-push-1 main-caption\">אבוד בעולם ביטוח הפיננסי יש יותר מידי אפשרויות?2</h2>-->\n            <!--<p class=\"col-xs-12 col-sm-10 col-sm-push-1 col-md-12 col-md-push-0 col-lg-10 col-lg-push-1\">-->\n              <!--wakeapp עושה לך סדר בעולם הביטוח,-->\n              <!--ליווי לאורך כל התהליך, מידע מהיר ועדכני,-->\n              <!--המלצות מותאמות אישית-->\n            <!--</p>-->\n            <!--<a href=\"#\" class=\"btn col-xs-6 col-xs-push-3 col-sm-6 col-sm-push-3 col-md-12 col-md-push-0 col-md-pull-0 col-lg-pull-1\">-->\n              <!--<p>צ'קאפ - התחל בדיקה</p>-->\n              <!--<span>זה יקח לך 3 דקות...</span>-->\n            <!--</a>-->\n            <!--<a style=\"display:none;\" href=\"#\" class=\"noThanks col-xs-12 col-md-3 col-lg-2 text-center noPadding\">תודה אבל אני לא צריך</a>-->\n\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n\n  </div>\n  <!--<div class=\"banner-controls-wrapper\">-->\n    <!--<a href=\"javascript:void(0);\" id=\"btn-mainslider-play\" class=\"play-btn banner-controls\" role=\"button\"><span class=\"offset\">נגן את הוידאו</span></a>-->\n    <!--<a href=\"javascript:void(0);\" id=\"btn-mainslider-pause\" class=\"pause-btn banner-controls\" role=\"button\"><span class=\"offset\">השהה את הוידאו</span></a>-->\n  <!--</div>-->\n  <!--<div class=\"mainBannerDots\"></div>-->\n\n</section>\n<!-- End section 1 -->\n<!-- section 2 -->\n<section class=\"row\">\n  <div class=\"companiesShowcase\">\n    <h2 class=\"text-center col-xs-10 col-xs-push-1 col-md-12 col-md-push-0\">Wize:App משווה בין המוצרים של חברות הביטוח המובילות</h2>\n    <div class=\"clearfix\">\n      <div class=\"container-fluid\" style=\"margin-left: 15px;margin-right: 10px;\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"companiesCarousel\" dir=\"rtl\">\n              <div class=\"slider js_slider\">\n                <div class=\"frame js_frame\">\n                  <ul class=\"slides js_slides\">\n                      <li class=\"js_slide\">\n                          <a href=\"#\">\n                              <img class=\"\" src=\"sample-images/klal.png\" alt=\"s2\">\n                          </a>\n                        </li>\n                        <li class=\"js_slide\">\n                          <a href=\"#\">\n                              <img class=\"\" src=\"sample-images/slick2.png\" alt=\"s1\">\n                          </a>\n                        </li>\n                        <li class=\"js_slide\">\n                            <a href=\"#\">\n                                <img class=\"\" src=\"sample-images/slick1.png\" alt=\"s3\">\n                            </a>\n                        </li>\n                        <li class=\"js_slide\">\n                            <a href=\"#\">\n                                <img class=\"\" src=\"sample-images/menora.png\" alt=\"s1\">\n                            </a>\n                        </li>\n                        <li class=\"js_slide\">\n                            <a href=\"#\">\n                                <img class=\"\" src=\"sample-images/harel.png\" alt=\"s3\">\n                            </a>\n                        </li>\n                        <li class=\"js_slide\">\n                            <a href=\"#\">\n                                <img class=\"\" src=\"sample-images/ayalon.png\" alt=\"s1\">\n                              </a>\n                        </li>\n                        <li class=\"js_slide\">\n                            <a href=\"#\">\n                                <img class=\"\" src=\"sample-images/hachshara.png\" alt=\"s2\">\n                            </a>\n                        </li>\n\n                  </ul>\n                </div>\n                <span class=\"js_prev prev hide-button\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 501.5 501.5\"><g><path fill=\"#2E435A\" d=\"M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z\"/></g></svg>\n                    </span>\n                <span id=\"nextStep\" class=\"js_next next hide-button\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 501.5 501.5\"><g><path fill=\"#2E435A\" d=\"M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z\"/></g></svg>\n                    </span>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--<div class=\"banner-controls-wrapper\">-->\n      <!--<a href=\"javascript:void(0);\" id=\"btn-company-play\" class=\"play-btn banner-controls\" role=\"button\"><span class=\"offset\">נגן את הוידאו</span></a>-->\n      <!--<a href=\"javascript:void(0);\" id=\"btn-company-pause\" class=\"pause-btn banner-controls\" role=\"button\"><span class=\"offset\">השהה את הוידאו</span></a>-->\n    <!--</div>-->\n  </div>\n</section>\n<!-- End section 2 -->\n<!-- section 3 -->\n<section class=\"row\">\n  <div class=\"productShowcase clearfix\">\n    <div class=\"productShowcaseHeader clearfix\">\n      <h2 class=\"col-xs-12 text-center\">צ'קאפ מוצרים</h2>\n      <p class=\"col-xs-12 text-center noPadding\">פורסים את כל האפשרויות שלך במקום אחד</p>\n    </div>\n    <div class=\"productTabs col-xs-12 noPadding clearfix\">\n      <!-- Nav tabs -->\n      <div class=\"tabHeaderWrapper\">\n        <div class=\"decoBar hidden-xs hidden-sm hidden-md\"></div>\n        <ul class=\"nav nav-tabs col-xs-12\" role=\"tablist\">\n          <li role=\"presentation\" class=\"col-xs-3 \" [ngClass]=\"{'active' : showTab === 'property'}\">\n            <a (click)=\"showTab = 'property'\">\n              <span class=\"icon\" data-iconon=\"../images/product/home_icon_on.png\" data-iconoff=\"../images/product/home_icon_off.png\"></span>\n              <span>ביטוח רכוש</span>\n              <h5 class=\"hidden-xs hidden-sm hidden-md\">מגון מוצרים שישמרו אותך בריא1</h5>\n            </a>\n          </li>\n          <li role=\"presentation\" class=\"col-xs-3\" [ngClass]=\"{'active' : showTab === 'health'}\">\n            <a (click)=\"showTab = 'health'\" >\n              <span class=\"icon\" data-iconon=\"../images/product/stethoscope_icon_on.png\" data-iconoff=\"../images/product/stethoscope_icon_off.png\"></span>\n              <span>ביטוח בריאות</span>\n              <h5 class=\"hidden-xs hidden-sm hidden-md\"> מגוון מוצרים שישמרו אותך לא חולה </h5>\n            </a>\n          </li>\n          <li role=\"presentation\" class=\"col-xs-3\" [ngClass]=\"{'active' : showTab === 'life'}\">\n            <a  (click)=\"showTab = 'life'\" >\n              <span class=\"icon\" data-iconon=\"../images/product/lifebuoy_icon_on.png\" data-iconoff=\"../images/product/lifebuoy_icon_off.png\"></span>\n              <span>ביטוח חיים</span>\n              <h5 class=\"hidden-xs hidden-sm hidden-md\">מוצרים שישמרו אותך </h5>\n            </a>\n          </li>\n          <li (click)=\"showTab = 'presentation'\" role=\"presentation\" class=\"col-xs-3\" [ngClass]=\"{'active' : showTab === 'presentation'}\">\n            <a>\n              <span class=\"icon\" data-iconon=\"../images/product/nis_bill_icon_on.png\" data-iconoff=\"../images/product/nis_bill_icon_off.png\"></span>\n              <span>ביטוח פיננסי</span>\n              <h5 class=\"hidden-xs hidden-sm hidden-md\">מגון מוצרים שישמרו אותך בריא4</h5>\n            </a>\n          </li>\n        </ul>\n      </div>\n\n      <!-- Tab panes -->\n      <div class=\"tabContentWrapper col-xs-12\">\n\n        <div class=\"tabDescription hidden-lg\">\n          <span id=\"prod-small-subtitle\">מגון מוצרים שישמרו אותך בריא</span><i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </div>\n\n        <div class=\"tab-content\">\n          <div role=\"tabpanel\" class=\"tab-pane\" [ngClass]=\"{'active' : showTab === 'property'}\" id=\"property\">\n            <div class=\"productBackgroundImage tab\" style=\"background-image: url(images/product/product_bg_1.png)\">\n              <div class=\"tabInnerContentWrapper\">\n                <h4>יש עוד מקום להתלבטות?</h4>\n                <p>\n                  ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס\n                </p>\n                <a href=\"#\" class=\"btn\">\n                  <span>רכוש רכוש רכוש</span>\n                </a>\n              </div>\n            </div>\n\n            <div class=\"productBackgroundImage tab ltr\" style=\"background-image: url(images/product/product_bg_2.png)\">\n              <div class=\"tabInnerContentWrapper\">\n                <h4>מחלות קשות</h4>\n                <p>\n                  ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס\n                </p>\n                <a href=\"#\" class=\"btn\">\n                  <span>רכוש</span>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div role=\"tabpanel\" class=\"tab-pane\" [ngClass]=\"{'active' : showTab === 'health'}\" id=\"health\">\n            <div class=\"productBackgroundImage tab\" style=\"background-image: url(images/product/product_bg_1.png)\">\n              <div class=\"tabInnerContentWrapper\">\n                <h4>מחלות 2222 קשות</h4>\n                <p>\n                  ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס\n                </p>\n                <a href=\"#\" class=\"btn\">\n                  <span>רכוש</span>\n                </a>\n              </div>\n            </div>\n\n            <div class=\"productBackgroundImage tab ltr\" style=\"background-image: url(images/product/product_bg_2.png)\">\n              <div class=\"tabInnerContentWrapper\">\n                <h4>מחלות קשות</h4>\n                <p>\n                  ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס\n                </p>\n                <a href=\"#\" class=\"btn\">\n                  <span>רכוש</span>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div role=\"tabpanel\" class=\"tab-pane\" [ngClass]=\"{'active' : showTab === 'life'}\" id=\"life\">\n            <div class=\"tab\" style=\"background-image: url(images/product/product_bg_1.png)\">\n              <div class=\"tabInnerContentWrapper\">\n                <h4>מחלות 3333 קשות</h4>\n                <p>\n                  ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס\n                </p>\n                <a href=\"#\" class=\"btn\">\n                  <span>רכוש</span>\n                </a>\n              </div>\n            </div>\n\n            <div class=\"tab ltr\" style=\"background-image: url(images/product/product_bg_2.png)\">\n              <div class=\"tabInnerContentWrapper\">\n                <h4>מחלות קשות</h4>\n                <p>\n                  ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס\n                </p>\n                <a href=\"#\" class=\"btn\">\n                  <span>רכוש</span>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div role=\"tabpanel\" class=\"tab-pane\" [ngClass]=\"{'active' : showTab === 'presentation'}\" id=\"finance\">\n            <div class=\"tab\" style=\"background-image: url(images/product/product_bg_1.png)\">\n              <div class=\"tabInnerContentWrapper\">\n                <h4>מחלות 4444 קשות</h4>\n                <p>\n                  ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס\n                </p>\n                <a href=\"#\" class=\"btn\">\n                  <span>רכוש</span>\n                </a>\n              </div>\n            </div>\n\n            <div class=\"tab ltr\" style=\"background-image: url(images/product/product_bg_2.png)\">\n              <div class=\"tabInnerContentWrapper\">\n                <h4>מחלות קשות</h4>\n                <p>\n                  ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס\n                </p>\n                <a href=\"#\" class=\"btn\">\n                  <span>רכוש</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End section 3 -->\n<!-- section 4 -->\n<section class=\"row\">\n  <div class=\"whyUs\">\n    <h2 class=\"col-xs-12 text-center\">למה Wize:App</h2>\n    <p class=\"col-xs-12 text-center\">העוזר שלך לעולם הביטוח הפיננסי</p>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"whyUsBlock col-xs-12 col-md-4\">\n          <a href=\"#\">\n            <div class=\"whyUsBlockImg\"><img class=\"img-responsive center-block\" src=\"sample-images/whyus3.png\" alt=\"whyUs3\"></div>\n            <p class=\"whyUsBlockText col-xs-10 col-xs-push-1 col-md-12 col-md-push-0 text-center\">תמונה כללית מידע מיהמן במקום אחד</p>\n          </a>\n        </div>\n        <div class=\"whyUsBlock col-xs-12 col-md-4\">\n          <a href=\"#\">\n            <div class=\"whyUsBlockImg\"><img class=\"img-responsive center-block\" src=\"sample-images/whyus2.png\" alt=\"whyUs2\"></div>\n            <p class=\"whyUsBlockText col-xs-10 col-xs-push-1 col-md-12 col-md-push-0 text-center\">ליווי אישי שתמיד  משאיר אותך מעודכן</p>\n          </a>\n        </div>\n        <div class=\"whyUsBlock col-xs-12 col-md-4\">\n          <div class=\"whyUsBlockImg\"><img class=\"img-responsive center-block\" src=\"sample-images/whyus1.png\" alt=\"whyUs1\"></div>\n          <p class=\"whyUsBlockText col-xs-10 col-xs-push-1 col-md-12 col-md-push-0 text-center\">השוואה אובייקטיבית בין מגוון חברות ביטוח</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"whyUsControlls center-block\">\n      <a href=\"#\" class=\"btn center-block\">\n        <span>קרא עוד</span>\n      </a>\n    </div>\n  </div>\n</section>\n<!-- End section 4 -->\n<!-- section 5 -->\n<!-- <section class=\"row\">\n  <div class=\"peopleRecommend\">\n    <h2 class=\"col-xs-12 text-center\">לקוחות מספרים</h2>\n\n    <div class=\"recommendations container-fluid col-md-12 col-md-push-0\">\n\n      <div class=\"recoBlock \">\n        <div class=\"recommendInfo noPadding col-xs-12 col-sm-8 col-sm-push-2 col-md-4 col-md-push-9\">\n          <img src=\"sample-images/aboutbg.png\" alt=\"recommend1\" />\n          <ul>\n            <li class=\"recoName\">משה כץ</li>\n            <li class=\"recoJob\">מהנדס בניין</li>\n            <li class=\"recoStatus\">נשואי + 2</li>\n          </ul>\n        </div>\n        <div class=\"recommendText noPadding col-xs-12 col-sm-8 col-sm-push-2 col-md-7 col-md-push-0 col-md-pull-3 col-lg-8\">\n          <p>\n            ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וופיסינג אלית נולום ארווס סאפיאן\n          </p>\n        </div>\n      </div>\n\n      <div class=\"recoBlock \">\n        <div class=\"recommendInfo noPadding col-xs-12 col-sm-8 col-sm-push-2 col-md-4 col-md-push-9\">\n          <img src=\"sample-images/recommend2.png\" alt=\"recommend1\" />\n          <ul>\n            <li class=\"recoName\">מירית קרמן</li>\n            <li class=\"recoJob\">צלמת משפחה</li>\n            <li class=\"recoStatus\">נשואה + 2</li>\n          </ul>\n        </div>\n        <div class=\"recommendText noPadding col-xs-12 col-sm-8 col-sm-push-2 col-md-7 col-md-push-0 col-md-pull-3 col-lg-8\">\n          <p>\n            ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וופיסינג אלית נולום ארווס סאפיאן\n          </p>\n        </div>\n      </div>\n\n      <div class=\"recoBlock \">\n        <div class=\"recommendInfo noPadding col-xs-12 col-sm-8 col-sm-push-2 col-md-4 col-md-push-9\">\n          <img src=\"sample-images/recommend1.png\" alt=\"recommend1\" />\n          <ul>\n            <li class=\"recoName\">משה כץ</li>\n            <li class=\"recoJob\">מהנדס בניין</li>\n            <li class=\"recoStatus\">נשואי + 2</li>\n          </ul>\n        </div>\n        <div class=\"recommendText noPadding col-xs-12 col-sm-8 col-sm-push-2 col-md-7 col-md-push-0 col-md-pull-3 col-lg-8\">\n          <p>\n            ורם איפסום דולור סיט אמט, קונסקטורר אדיפוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וופיסינג אלית נולום ארווס סאפיאן\n          </p>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"recoArrow prev glyphicon glyphicon-menu-left\" role=\"button\" tabindex=\"0\">\n                    <span class=\"sr-only\">\n                        דפדף אחורה\n                    </span>\n    </div>\n    <div class=\"recoArrow next glyphicon glyphicon-menu-right\" role=\"button\" tabindex=\"0\">\n                    <span class=\"sr-only\">\n                        דפדף קדימה\n                    </span>\n    </div>\n\n    <div class=\"banner-controls-wrapper\">\n      <a href=\"javascript:void(0);\" id=\"btn-recommendations-play\" class=\"play-btn banner-controls\" role=\"button\"><span class=\"offset\">נגן את הוידאו</span></a>\n      <a href=\"javascript:void(0);\" id=\"btn-recommendations-pause\" class=\"pause-btn banner-controls\" role=\"button\"><span class=\"offset\">השהה את הוידאו</span></a>\n    </div>\n  </div>\n</section>\nEnd section 5 -->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(storeService) {
        var _this = this;
        this.storeService = storeService;
        this.showTab = 'property';
        this.daysData = [];
        this.number = "";
        storeService.headerEvent.subscribe(function () {
            _this.showSMS = true;
        });
    }
    HomeComponent.prototype.setDays = function () {
        for (var i = 50; i <= 300; i += 10) {
            this.daysData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    HomeComponent.prototype.sendSms = function () {
        if (!this.number)
            this.showError = true;
        else
            this.showSMS = false;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.setDays();
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 2400,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
        };
        this.carousel = {
            grid: { xs: 4, sm: 4, md: 4, lg: 4, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
        };
        setTimeout(function () {
            var simple = document.querySelector('.js_slider');
            lory(simple, {
                rewind: true
            });
            // setInterval(()=> {
            //   console.log(23)
            //   document.getElementById("nextStep").click();
            // },3000);
        }, 6000);
        setInterval(function () {
            console.log(23);
            if (document.getElementById("nextStep"))
                document.getElementById("nextStep").click();
        }, 3000);
    };
    HomeComponent.prototype.myfunc = function (event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/personal-area/inputs/inputs.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected > span{ \r\n    color:  white !important;\r\n }\r\n \r\n .hasSmoked-input{\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n }\r\n .modalStatus{\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"] {\r\n     display:none;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"] + label {\r\n     color:#f2f2f2;\r\n     width: 20%;\r\n     border: 1px solid #117ef5;\r\n     padding: 0 1.9rem;\r\n     line-height: 22px;\r\n     background:#f7f7f7;;\r\n     cursor:pointer;\r\n     text-align: center;\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-pack: center;\r\n         -ms-flex-pack: center;\r\n             justify-content: center;\r\n     -webkit-box-align: center;\r\n         -ms-flex-align: center;\r\n             align-items: center;\r\n     height: 40px;    \r\n }\r\n .hasSmoked-input > input[type=\"radio\"] + label span {\r\n     display:inline-block;\r\n     vertical-align:middle;\r\n     text-align: center;\r\n     color: #626262;\r\n }\r\n \r\n .hasSmoked-input > input[type=\"radio\"]:checked + label{\r\n     background: #117ef5;\r\n     color: white;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"]:checked + label > span{\r\n     color: white;\r\n }\r\n .smoke-input > input[type=\"radio\"] + label {\r\n     border: 1px solid #117ef5;\r\n     width: 30%;\r\n }\r\n .intut-wrapper-inside > input[type=\"radio\"] + label {\r\n     border: 1px solid #117ef5;\r\n }\r\n .smole-buttons > input[type=\"radio\"] + label {\r\n     padding: 0 24px;\r\n }\r\n .field-validation-error{\r\n     margin-top: 2px !important;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"] + label:focus{\r\n     outline: 2px solid #707070 !important;\r\n     outline-offset: -2px !important;\r\n }\r\n .subject{\r\n     font-size: 1.78571em;\r\n }\r\n .medium2{\r\n     width: 100%;\r\n     max-width: 130px;\r\n     height: 43px;\r\n     font-size: 1.64286em;\r\n     border: 1px #117ef5 solid;\r\n     background-color: transparent;\r\n     border-radius: 4px;\r\n     text-align: right;\r\n     padding-right: 10px;\r\n     color: #626262;\r\n }\r\n .personal-button{\r\n    background: url(" + escape(__webpack_require__("../../../../../src/images/personal/icon-select-arrow-down.png")) + ") no-repeat right white;\r\n    border-radius: 8px;\r\n    background-position-x: 10px;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/personal-area/inputs/inputs.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  inputs works!\n</p> -->\n<form role=\"form\" action=\"#\" method=\"post\">\n  <div class=\"form-inner-wrapper\">\n    <div class=\"row\">\n      <!--First name-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label\" for=\"first-name\">\n          שם פרטי:\n        </label>\n        <input class=\"form-control missing-info\" id=\"first-name\" name=\"first-name\" type=\"text\" />\n        <div class=\"has-error\">error message</div>\n      </div>\n      <!--Last name-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label\" for=\"last-name\">\n          שם משפחה:\n        </label>\n        <input class=\"form-control\" id=\"last-name\" name=\"last-name\" type=\"text\" />\n        <div class=\"has-error\">error message</div>\n      </div>\n      <!--ID-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label\" for=\"id-number\">\n          ת.ז:\n        </label>\n        <input class=\"form-control\" id=\"id-number\" name=\"id-number\" type=\"number\" />\n        <div class=\"has-error\">error message</div>\n      </div>\n    </div>\n    <div class=\"visible-xs visible-sm divider\"></div>\n    <div class=\"row\">\n      <!--birth date-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label \" for=\"date\">\n          תאריך לידה:\n        </label>\n        <!--<input class=\"form-control\"  name=\"date\" placeholder=\"MM/DD/YYYY\" type=\"text\" />-->\n        <!-- <input class=\"form-control\" id=\"last-name\" name=\"last-name\" type=\"text\" /> -->\n\n        <div id=\"birthDate\" class=\"clearfix\">\n            <div class=\"wrapper center-block\">\n                <div class=\"selectWrapper personal-button\"  style=\"width: 27%;height: 100%;\">\n                  <div style=\"width: 100%;height: 100%;\">\n                    <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                  </div>\n                </div> \n                <div class=\"selectWrapper personal-button\" style=\"width: 35%;height: 100%; margin-right: 4px;\">\n                  <div style=\"width: 100%;height: 100%;\">\n                    <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                  </div>\n                </div>\n                <div class=\"selectWrapper personal-button\" style=\"width: 35%;height: 100%; margin-right: 4px;\">\n                  <div style=\"width: 100%;height: 100%;\">\n                    <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                  </div>\n                </div>\n              </div>\n          <!-- <div class=\"selectWrapper col-xs-3 noPadding day\">\n            <select class=\"selectpicker form-control missing-info\">\n              <option>14</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select>\n          </div>\n          <div class=\"selectWrapper col-xs-5 noPadding month\">\n            <select class=\"selectpicker form-control missing-info\">\n              <option>ספט'</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select>\n          </div>\n          <div class=\"selectWrapper col-xs-4 noPadding year\">\n            <select class=\"selectpicker form-control missing-info\">\n              <option>1975</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select>\n          </div> -->\n        </div>\n        <div class=\"has-error\">error message</div>\n      </div>\n      <!--profession-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label\" for=\"text\">\n          עיסוק:\n        </label>\n        <div class=\"wrapper center-block\">\n            <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n              <div style=\"width: 100%;height: 100%;\">\n                <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n              </div>\n            </div>\n          </div>\n        <!-- <div class=\"styled-select\">\n          <select class=\"select form-control missing-info\">\n            <option>בחר מקצוע</option>\n            <option>דייל/דיילת קרקע</option>\n            <option>אב/ אם בית</option>\n            <option>אגרונום</option>\n            <option>אדריכל/ ארכיטקט</option>\n            <option>אופטיקאי /אופטומטריסט</option>\n            <option>אוצרת.</option>\n            <option>אורז</option>\n            <option>אורז בקו ייצור </option>\n            <option>אורטופד (לא מנתח)</option>\n            <option>אח - אחות מוסמכים</option>\n            <option>אח - אחות מעשיים</option>\n            <option>אח/אחות  מוסמכים</option>\n            <option>אחראי חדר בקרה</option>\n            <option>איש אחזקה</option>\n            <option>איש יחסי ציבור</option>\n            <option>איש מחשבים</option>\n            <option>איש מכירות</option>\n            <option>אם - אב בית</option>\n            <option>אקטואר</option>\n            <option>ארכיאולוג</option>\n            <option>בוחן נהיגה</option>\n            <option>בוחן רכב</option>\n            <option>בידוד ואיטום חוץ</option>\n            <option>בידוד ואיטום פנים</option>\n            <option>ביוכימאי /ביולוג</option>\n            <option>בלנית</option>\n            <option>במאי</option>\n            <option>במאי סרטים</option>\n            <option>במאי/ת</option>\n            <option>בנאי/ת (עובד/ת בנין)</option>\n          </select>\n        </div> -->\n        <div class=\"has-error\">error message</div>\n      </div>\n      <!--marital status-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label\" for=\"text10\">\n          מצב משפחתי:\n        </label>\n        <div class=\"styled-select\">\n            <div class=\"wrapper center-block \">\n                <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                  <div style=\"width: 100%;height: 100%;\">\n                    <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                  </div>\n                </div>\n              </div>\n          <!-- <select class=\"select form-control missing-info\" id=\"select1\" name=\"select1\">\n            <option value=\"נשוי\">\n              נשוי\n            </option>\n            <option value=\"רווק\">\n              רווק\n            </option>\n            <option value=\"גרוש\">\n              גרוש\n            </option>\n            <option value=\"אלמן\">\n              אלמן\n            </option>\n          </select> -->\n        </div>\n        <div class=\"has-error select\">error message</div>\n      </div>\n    </div>\n    <div class=\"visible-xs visible-sm divider\"></div>\n    <div class=\"row\">\n      <!--email-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label\" for=\"email\">\n          מייל:\n        </label>\n        <input class=\"form-control\" id=\"email\" name=\"email\" type=\"text\" />\n        <div class=\"has-error\">error message</div>\n      </div>\n      <!--tell-->\n      <div class=\"form-group phone-input-wrapper col-xs-12 col-md-4\">\n        <div class=\"row\">\n          <div class=\"col-xs-4 col-sm-5 col-lg-4\">\n            <label class=\"control-label\" for=\"tell1\" style=\"height: 21px;\">\n\n            </label>\n            <div class=\"selectWrapper noPadding\">\n                <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                    <div style=\"width: 100%;height: 100%;\">\n                      <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                    </div>\n                  </div>\n              <!-- <select class=\"selectpicker form-control missing-info\">\n                <option>050</option>\n                <option>052</option>\n                <option>053</option>\n                <option>054</option>\n                <option>077</option>\n              </select> -->\n            </div>\n            <!--<div class=\"styled-select\">\n                <select class=\"selectpicker select form-control\" id=\"select1\" name=\"select1\">\n                    <option value=\"050\">\n                        050\n                    </option>\n                    <option value=\"052\">\n                        052\n                    </option>\n                    <option value=\"053\">\n                        053\n                    </option>\n                    <option value=\"054\">\n                        054\n                    </option>\n                </select>\n            </div>-->\n          </div>\n          <div class=\"col-xs-8 col-sm-7 col-lg-8\">\n            <label class=\"control-label \" for=\"tel1\">\n              טלפון:\n            </label>\n            <input class=\"form-control  missing-info\" id=\"tell1\" name=\"tell1\" type=\"text\" />\n            <div class=\"has-error\">error message</div>\n          </div>\n        </div>\n      </div>\n      <!--salary -->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label \" for=\"subject\">\n          שכר:\n        </label>\n        <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n            <div style=\"width: 100%;height: 100%;\">\n              <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n        <!-- <input class=\"form-control\" id=\"subject\" name=\"subject\" type=\"text\" /> -->\n        <div class=\"has-error\">error message</div>\n      </div>\n    </div>\n    <div class=\"visible-xs visible-sm divider\"></div>\n    <div class=\"row\">\n      <!--kupat hulim-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label \" for=\"select\">\n          קופת חולים:\n        </label>\n        <div class=\"styled-select\">\n            <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                <div style=\"width: 100%;height: 100%;\">\n                  <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                </div>\n              </div>\n          <!-- <select class=\"select form-control missing-info\" id=\"select\" name=\"select\">\n            <option value=\"\" selected disabled> </option>\n            <option value=\"כללית\">\n              כללית\n            </option>\n            <option value=\"מכבי\">\n              מכבי\n            </option>\n            <option value=\"מאוחדת\">\n              מאוחדת\n            </option>\n          </select> -->\n        </div>\n        <div class=\"has-error\">error message</div>\n      </div>\n      <!--Supplementary insurance-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label \" for=\"text1\">\n          ביטוח משלים:\n        </label>\n        <div class=\"styled-select\">\n            <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                <div style=\"width: 100%;height: 100%;\">\n                  <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                </div>\n              </div>\n          <!-- <select class=\"select form-control missing-info\" id=\"select\" name=\"select\">\n            <option value=\"\" selected disabled> </option>\n            <option value=\"כללית\">\n              כן\n            </option>\n            <option value=\"מכבי\">\n              לא\n            </option>\n            <option value=\"מאוחדת\">\n              לא יודע\n            </option>\n          </select> -->\n        </div>\n        <div class=\"has-error\">error message</div>\n      </div>\n      <div class=\"form-group col-xs-12 col-md-4\">\n          <label class=\"control-label \" for=\"text1\">\n            ביטוח משלים:\n          </label>\n          <div class=\"styled-select\">\n              <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                  <div style=\"width: 100%;height: 100%;\">\n                    <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                  </div>\n                </div>\n            <!-- <select class=\"select form-control missing-info\" id=\"select\" name=\"select\">\n              <option value=\"\" selected disabled> </option>\n              <option value=\"כללית\">\n                כן\n              </option>\n              <option value=\"מכבי\">\n                לא\n              </option>\n              <option value=\"מאוחדת\">\n                לא יודע\n              </option>\n            </select> -->\n          </div>\n          <div class=\"has-error\">error message</div>\n        </div>\n    </div>\n    <div class=\"visible-xs visible-sm divider\"></div>\n    <div class=\"row\">\n      <!--isSmoking-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label \" for=\"isSmoking\">\n          מעשן\n        </label>\n        <div class=\"styled-select\">\n            <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                <div style=\"width: 100%;height: 100%;\">\n                  <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                </div>\n              </div>\n          <!-- <select class=\"select form-control missing-info\" id=\"isSmoking\" name=\"isSmoking\">\n            <option value=\"\" selected disabled> </option>\n            <option value=\"כן\">\n              כן\n            </option>\n            <option value=\"לא\">\n              לא\n            </option>\n          </select> -->\n        </div>\n        <div class=\"has-error\">error message</div>\n      </div>\n      <!--isSmokingin3years-->\n      <div class=\"form-group col-xs-12 col-md-4\">\n        <label class=\"control-label\" for=\"isSmokingin3years\">\n          עישן ב- 3 שנים אחרונות\n        </label>\n        <div class=\"styled-select\">\n            <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                <div style=\"width: 100%;height: 100%;\">\n                  <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                </div>\n              </div>\n          <!-- <select class=\"select form-control missing-info\" id=\"isSmokingin3years\" name=\"isSmokingin3years\">\n            <option value=\"\" selected disabled> </option>\n            <option value=\"כן\">\n              כן\n            </option>\n            <option value=\"לא\">\n              לא\n            </option>\n          </select> -->\n        </div>\n        <div class=\"has-error\">error message</div>\n      </div>\n    </div>\n    <div class=\"visible-xs visible-sm divider\"></div>\n    <div class=\"row\">\n      <div class=\"children formSection\">\n        <fieldset>\n          <legend class=\"sr-only\">###</legend>\n          <div class=\"wrapper\">\n            <div class=\"childrenAmountWrapper col-md-4\">\n              <span class=\"childrenTitle\">ילדים:</span>\n              <input class=\"form-control missing-info childAmount\" type=\"number\" name=\"childAmount\" placeholder=\"0\">\n            </div>\n\n            <div class=\"childrenListWrapper col-md-8\">\n                  <!-- <div class=\"child row\" disabled> -->\n              <div class=\"child row\">\n                <div class=\"childGender col-xs-12 col-md-6 pull-right\">\n                  <span>ילד $</span>\n                  <div class=\"form-group\">\n                      <div _ngcontent-c14=\"\" class=\"childGenderForm\">\n                          <div _ngcontent-c14=\"\" class=\"hasSmoked-input intut-wrapper-inside\">\n                            <input _ngcontent-c14=\"\" type=\"radio\" value=\"18\" ng-reflect-name=\"status0\" ng-reflect-value=\"18\" ng-reflect-model=\"18\" id=\"radio180\" class=\"ng-untouched ng-valid ng-dirty\">\n                            <label _ngcontent-c14=\"\" style=\"border-bottom-right-radius: 4px;\n                          border-top-right-radius: 4px; margin-right: 0; padding: 0 33px;\" for=\"radio180\"><span _ngcontent-c14=\"\">זכר</span></label>\n                            <input _ngcontent-c14=\"\" type=\"radio\" value=\"18\" ng-reflect-name=\"status0\" ng-reflect-value=\"19\" ng-reflect-model=\"18\" id=\"radio190\" class=\"ng-untouched ng-valid ng-dirty\">\n                            <label _ngcontent-c14=\"\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px; margin-right: 0; padding-left: 50px; padding-right: 50px;\" for=\"radio190\"><span _ngcontent-c14=\"\">נקבה</span></label>\n                            </div>\n                      </div>\n                    <span class=\"field-validation-error\" style=\"margin-top: 17px !important;\">שדה מין הוא שדה חובה</span>\n                  </div>\n                </div>\n                <div class=\"childBDate col-xs-12 col-md-6 pull-right\" style=\"display: flex;flex-flow: column;\">\n                  <span>תאריך לידה</span>\n                  <div class=\"childBDateForm\">\n                      <div class=\"wrapper center-block \">\n                          <div class=\"selectWrapper personal-button\"  style=\"width: 25%;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                          <div class=\"selectWrapper personal-button\" style=\"width: 32%;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                          <div class=\"selectWrapper personal-button\" style=\"width: 32%;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                        </div>\n                    <!-- <div class=\"selectWrapper col-xs-3 noPadding\">\n                      <select class=\"day selectpicker\">\n                        <option selected disabled>בחר</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                      </select>\n                    </div>\n                    <div class=\"selectWrapper col-xs-4 noPadding\">\n                      <select class=\"month selectpicker\">\n                        <option selected disabled>בחר</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                      </select>\n                    </div>\n                    <div class=\"selectWrapper col-xs-4 noPadding\">\n                      <select class=\"year selectpicker\">\n                        <option selected disabled>בחר</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                      </select>\n                    </div> -->\n                    <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                  </div>\n                  <div class=\"has-error\">error message</div>                                                          \n                </div>\n              </div>\n              <!-- <div class=\"row child\">\n                <div class=\"childGender col-xs-12 col-md-6 pull-right\">\n                  <span>ילד $</span>\n                  <div class=\"form-group\">\n                    <div class=\"childGenderForm missing-info\">\n                      <label>\n                        זכר\n                        <input type=\"radio\" name=\"childGender1\" value=\"1\" />\n                      </label>\n                      <label>\n                        נקבה\n                        <input type=\"radio\" name=\"childGender1\" value=\"2\" />\n                      </label>\n                    </div>\n                    <span class=\"field-validation-error\">אנא בחר מין</span>\n                  </div>\n                </div>\n                <div class=\"childBDate col-xs-12 col-md-6 pull-right\">\n                  <span>תאריך לידה</span>\n                  <div class=\"childBDateForm\">\n                    <div class=\"selectWrapper col-xs-3 noPadding\">\n                      <select class=\"day selectpicker\">\n                        <option selected disabled>בחר</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                      </select>\n                    </div>\n                    <div class=\"selectWrapper col-xs-4 noPadding\">\n                      <select class=\"month selectpicker\">\n                        <option selected disabled>בחר</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                      </select>\n                    </div>\n                    <div class=\"selectWrapper col-xs-4 noPadding\">\n                      <select class=\"year selectpicker\">\n                        <option selected disabled>בחר</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                      </select>\n                    </div>\n                    <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                    <span class=\"field-validation-error\">error</span>\n                  </div>\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </fieldset>\n      </div>\n    </div>\n  </div>\n  <div class=\"submit-button-wrapper\">\n    <div class=\"success-msg\">השינויים בוצעו בהצלחה!</div>\n    <button class=\"btn btn-primary \" name=\"submit\" type=\"submit\">\n      עדכן פרטים אישיים\n    </button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/personal-area/inputs/inputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputsComponent = (function () {
    function InputsComponent() {
    }
    InputsComponent.prototype.ngOnInit = function () {
    };
    return InputsComponent;
}());
InputsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inputs',
        template: __webpack_require__("../../../../../src/app/personal-area/inputs/inputs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/personal-area/inputs/inputs.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputsComponent);

//# sourceMappingURL=inputs.component.js.map

/***/ }),

/***/ "../../../../../src/app/personal-area/personal-area.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-overview-wrapper{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    overflow: hidden;\r\n    padding-bottom: 0 !important;\r\n}\r\n#pa-overview{\r\n    background: #c9dff7;\r\n    overflow: hidden;\r\n    padding-left: 26px\r\n}\r\n.pa-section-box{\r\n    margin-left: 18px !important;\r\n    margin-right: 18px !important;\r\n}\r\n#pa-overview > div.checkup-top{\r\n    margin-top: 0;\r\n}\r\n.slider-button-wrap{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin-top: 35px;\r\n}\r\n.slider-button-wrap > button{\r\n    border-radius: 50px;\r\n    background: white;\r\n    width: 20px;\r\n    border: none;\r\n    margin: 5px;\r\n    height: 20px;\r\n    outline: none !important;\r\n    opacity: 0;\r\n    cursor: default;\r\n}\r\n.slider-button-wrap > button:hover{\r\n    border: 1px solid rgba(17, 126, 244, 0.6);\r\n    box-shadow: 0 0 5px rgba(102, 102, 102, 0.5);\r\n}\r\n.swipe-btn{\r\n    background: no-repeat;\r\n    font-size: 28px;\r\n    color: white;\r\n    font-weight: bold;\r\n    top: -11px;\r\n    position: relative;\r\n    background: none !important;\r\n    margin-left: 30px !important;\r\n    margin-right: 30px !important;\r\n}\r\n.swipe-btn:hover{\r\n    border: none !important;\r\n    box-shadow: none !important;\r\n    color: #117ef5;\r\n}\r\n\r\n.caret-slider{\r\n    position: relative;\r\n    background: none !important;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    top: -11px;\r\n    color: white;\r\n    margin-left: 20px !important;\r\n    margin-right: 20px !important;\r\n}\r\n.caret-slider:hover{\r\n    color: rgba(17, 126, 244, 0.6);\r\n    border: none !important;\r\n    box-shadow:none !important;\r\n}\r\n\r\n\r\n@media (min-width: 1200px){\r\n    #pa-overview > div.checkup-top{\r\n        margin-top: 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n.slider {}\r\n\r\n.frame {\r\n  /**\r\n   * (optional) wrapper width, specifies width of the slider frame.\r\n   */\r\n  width: 1306px;\r\n\r\n  position: relative;\r\n  font-size: 0;\r\n  line-height: 0;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.slides {\r\n  display: inline-block;\r\n}\r\n\r\nli {\r\n  position: relative;\r\n  display: inline-block;\r\n\r\n  /**\r\n   * (optional) if the content inside the slide element has a defined size.\r\n   */\r\n  width: 300px;\r\n}\r\n\r\n.prev, .next {\r\n  position: absolute;\r\n  top: 50%;\r\n  margin-top: -25px;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n.next {\r\n  right: 0;\r\n}\r\n\r\n.prev {\r\n  left: 0;\r\n}\r\n\r\n.next svg, .prev svg {\r\n  width: 25px;\r\n}\r\n.slides{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: reverse;\r\n      -ms-flex-flow: row-reverse;\r\n          flex-flow: row-reverse;\r\n}\r\n.js_slide > a > img{\r\n\r\n}\r\n.js_slide > a{\r\n  display: block;\r\n  margin-right: 60px;\r\n  margin-left: 60px;\r\n}\r\n/* .hide-button{\r\n    opacity: 0;\r\n} */\r\n\r\n\r\nhtml, body {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\nbody {\r\n  background: #eee;\r\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  color:#000;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.swiper-container {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.swiper-slide {\r\n  \r\n}\r\n\r\n/* RADIO BUTTONS */\r\n.selected > span{ \r\n    color:  white !important;\r\n }\r\n \r\n .hasSmoked-input{\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n }\r\n .modalStatus{\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"] {\r\n     display:none;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"] + label {\r\n     color:#f2f2f2;\r\n     width: 20%;\r\n     border: 1px solid #117ef5;\r\n     padding: 0 1.9rem;\r\n     line-height: 22px;\r\n     background:#ffffff;;\r\n     cursor:pointer;\r\n     text-align: center;\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-pack: center;\r\n         -ms-flex-pack: center;\r\n             justify-content: center;\r\n     -webkit-box-align: center;\r\n         -ms-flex-align: center;\r\n             align-items: center;\r\n     height: 40px;    \r\n }\r\n .hasSmoked-input > input[type=\"radio\"] + label span {\r\n     display:inline-block;\r\n     vertical-align:middle;\r\n     text-align: center;\r\n     color: #626262;\r\n }\r\n \r\n .hasSmoked-input > input[type=\"radio\"]:checked + label{\r\n     background: #117ef5;\r\n     color: white;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"]:checked + label > span{\r\n     color: white;\r\n }\r\n /* .smoke-input{\r\n     display: flex;\r\n justify-content: center;\r\n } */\r\n .smoke-input > input[type=\"radio\"] + label {\r\n     border: 1px solid #117ef5;\r\n     width: 30%;\r\n }\r\n .intut-wrapper-inside > input[type=\"radio\"] + label {\r\n     border: 1px solid #117ef5;\r\n }\r\n .smole-buttons > input[type=\"radio\"] + label {\r\n     padding: 0 24px;\r\n }\r\n .field-validation-error{\r\n     margin-top: 2px !important;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"] + label:focus{\r\n     outline: 2px solid #707070 !important;\r\n     outline-offset: -2px !important;\r\n }\r\n .subject{\r\n     font-size: 1.78571em;\r\n }\r\n .medium2{\r\n     width: 100%;\r\n     max-width: 130px;\r\n     height: 43px;\r\n     font-size: 1.64286em;\r\n     border: 1px #117ef5 solid;\r\n     background-color: transparent;\r\n     border-radius: 4px;\r\n     text-align: right;\r\n     padding-right: 10px;\r\n     color: #626262;\r\n }\r\n .personal-button{\r\n    background: url(" + escape(__webpack_require__("../../../../../src/images/personal/icon-select-arrow-down.png")) + ") no-repeat right white;\r\n    border-radius: 8px;\r\n    background-position-x: 10px;\r\n }\r\n .graph-red > div > span{\r\n     color: blue;\r\n }\r\n\r\n /* modal */\r\n .insurance-wrapper{\r\n    overflow-y: visible;\r\n }\r\n .modal{\r\n    opacity: 1 !important;\r\n    display: block !important;\r\n    position: relative !important;\r\n }\r\n .modal-out-wrap{\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    background: #00000070;\r\n    z-index: 2333;\r\n    overflow-y: scroll;\r\n    right: 0;\r\n }\r\n @media (min-width: 992px){\r\n    .modal{\r\n        top: 118px;\r\n        right: 187px;\r\n     }\r\n}\r\n@media (min-width: 768px){\r\n    .modal.InsuranceDetails .modal-dialog {\r\n        width: 99% !important;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/personal-area/personal-area.component.html":
/***/ (function(module, exports) {

module.exports = "    <section class=\"row\">\n  <div class=\"personal-area\">\n    <h2 class=\"sr-only\">איזור אישי</h2>\n    <div class=\"hello-user\">\n      <h3>שלום אנה</h3>\n      <p>המערכת איתרה את ההמלצות הבאות המוצאות לפרטייך האישיים</p>\n    </div>\n    <!--MainTabs-->\n    <div class=\"personal-area-tabs\">\n      <ul class=\"nav nav-tabs top-nav-tabs\" role=\"tablist\">\n        <li [ngClass]=\"{'active': showTab === 'pa-overview'}\" role=\"presentation\" class=\"active\">\n          <a (click)=\"showTab = 'pa-overview'\" >תמונת לקוח</a>\n        </li>\n        <li [ngClass]=\"{'active': showTab === 'pa-messages'}\" role=\"presentation\" class=\"messages-tab\">\n          <a (click)=\"showTab = 'pa-messages'\" >הודעות</a>\n          <span class=\"message-notification\">5</span>\n        </li>\n        <li [ngClass]=\"{'active': showTab === 'pa-personalDetails'}\" role=\"presentation\">\n          <a (click)=\"showTab = 'pa-personalDetails'\">פרטים אישיים</a>\n        </li>\n      </ul>\n      <!--TABS-CONTENT-->\n      <div class=\"tab-content clearfix\" aria-live=\"polite\">\n        <!---------------------------------------->\n        <!-------------overview-tab--------------->\n        <!---------------------------------------->\n        <div [ngClass]=\"{'active': showTab === 'pa-overview'}\" id=\"pa-overview\"  class=\" tab-pane tab-top-section pa-overview \">\n          <div class=\"social-icons social-top visible-lg clearfix\">\n            <h2 class=\"pull-right\">הזמן משפחה וחברים להצטרף</h2>\n            <div class=\"social-icons-wrapper pull-left\">\n              <div class=\"fb-send\" data-href=\"http://dev.wakeapp.co.il/\"></div>\n              <a href=\"#this\"><span class=\"icon icon-facebook\"></span></a>\n              <a href=\"#this\"><span class=\"icon icon-envelope\"></span></a>\n            </div>\n          </div>\n          <div class=\"tab-overview-wrapper\">\n\n            <!-- Swiper -->\n            <div class=\"swiper-container\">\n              <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\" (click)=\"selectSwiper('pension')\" >\n                  <div class=\"pa-overview-section\" dir=\"rtl\" data-target=\"pension\">\n                    <h4 class=\"pa-overview-title\">\n                      פנסיה\n                    </h4>\n                    <div class=\"pa-section-box\">\n                      <div class=\"pa-section-box-inner\">\n                        <div class=\"pa-section-title\">\n                                                    <span>\n                                                        קצבה קצבה קצבה נוכחית בגיל פרישה <strong class=\"nis\">{{chartDate.pension.exists}}</strong>\n                                                    </span>\n                        </div>\n                        <div class=\"pa-section-icon\">\n                          <img src=\"images/personal/icon-safe-overview.png\" alt=\"\" class=\"img-responsive center-block\" />\n                        </div>\n                        <div class=\"pa-section-notice pa-section-notice-v pa-section-notice-blue\">\n                                                    <span>\n                                                        קיים פיצוי אופטימלי\n                                                    </span>\n                        </div>\n                        <div class=\"pa-section-notice hidden\">\n                                                    <span>\n                                                        חסר לך לקצבה אופטימלית\n                                                    </span>\n                          <div><span class=\"nis\">700</span></div>\n                        </div>\n                      </div>\n                      <!--error section-->\n                      <!--<div class=\"pa-section-box-inner hidden\">-->\n                      <!--<div class=\"pa-section-title error\">-->\n                      <!--<span class=\"has-error\">-->\n                      <!--חסר מידע-->\n                      <!--</span>-->\n                      <!--</div>-->\n                      <!--<div class=\"pa-section-icon\">-->\n                      <!--<img src=\"images/personal/pa-icon-hourglass.png\" class=\"img-responsive center-block\" />-->\n                      <!--</div>-->\n                      <!--<div class=\"pa-section-notice\">-->\n                      <!--<span>-->\n                      <!--לא עודכן מידע במערכת.-->\n                      <!--המלצה למלא שאלון צ’קאפ-->\n                      <!--</span>-->\n                      <!--</div>-->\n                      <!--</div>-->\n                      <!--pepole like you-->\n                      <!--<div class=\"show\">\n                          <div class=\"show-top-section\">\n                              <div>\n                                  <img src=\"images/personal/pa-icon-ppl-white.png\" alt=\"\" class=\"img-responsive center-block\" />\n                              </div>\n                              <h2>60%</h2>\n                              <p>\n                                  מאנשים הדומים לך שמגיעים\n                                  לגיל 67 ימטרכו כיסוי גבוה יותר\n                              </p>\n                          </div>\n                          <div class=\"show-bottom-section\"><a href=\"#\">פרטים נוספים</a></div>\n                      </div>-->\n                    </div>\n                    <a href=\"#\" class=\"btn btn-red\">קבל המלצה</a>\n                  </div>\n                </div>\n                <div class=\"swiper-slide\" (click)=\"selectSwiper('oka')\"   >\n                  <div class=\"pa-overview-section\" data-target=\"disability-insurance\">\n                    <h4 class=\"pa-overview-title\">\n                      אובדן כושר עבודה\n                    </h4>\n                    <div class=\"pa-section-box\">\n                      <div class=\"pa-section-box-inner\">\n                        <div class=\"pa-section-title\">\n                                                    <span>\n                                                        קצבה קצבה נוכחית קצבה נוכחית <strong class=\"nis\">{{chartDate.oka.exists}}</strong>\n                                                    </span>\n                        </div>\n                        <div class=\"pa-section-icon\">\n                          <img src=\"sample-images/pa-icon-crutch.png\" alt=\"\" class=\"img-responsive center-block\" />\n                        </div>\n                        <div class=\"pa-section-notice pa-section-notice-v pa-section-notice-blue\">\n                                                    <span>\n                                                        קיים פיצוי אופטימלי\n                                                    </span>\n                        </div>\n                      </div>\n                      <!--error section-->\n                      <!--<div class=\"pa-section-box-inner hidden\">-->\n                      <!--<div class=\"pa-section-title error\">-->\n                      <!--<span class=\"has-error\">-->\n                      <!--חסר מידע-->\n                      <!--</span>-->\n                      <!--</div>-->\n                      <!--<div class=\"pa-section-icon\">-->\n                      <!--<img src=\"images/personal/pa-icon-noinfo.png\" class=\"img-responsive center-block\" />-->\n                      <!--</div>-->\n                      <!--<div class=\"pa-section-notice\">-->\n                      <!--<span>-->\n                      <!--לא עודכן מידע במערכת.-->\n                      <!--המלצה למלא שאלון צ’קאפ-->\n                      <!--</span>-->\n                      <!--</div>-->\n                      <!--</div>-->\n                      <!--pepole like you-->\n                      <!--<div class=\"show\">\n                          <div class=\"show-top-section\">\n                              <div>\n                                  <img src=\"images/personal/pa-icon-ppl-white.png\" alt=\"\" class=\"img-responsive center-block\" />\n                              </div>\n                              <h2>60%</h2>\n                              <p>\n                                  מאנשים הדומים לך שמגיעים\n                                  לגיל 67 ימטרכו כיסוי גבוה יותר\n                              </p>\n                          </div>\n                          <div class=\"show-bottom-section\"><a href=\"#\">פרטים נוספים</a></div>\n                      </div>-->\n                    </div>\n                    <a href=\"#\" class=\"btn btn-blue\">קבל המלצה</a>\n                  </div>\n                </div>\n                <div class=\"swiper-slide\" (click)=\"selectSwiper('health')\" >\n                  <div class=\"pa-overview-section health-insurance-section\" data-target=\"health-insurance\">\n                    <h4 class=\"pa-overview-title\">\n                      ביטוח בריאות\n                    </h4>\n                    <div class=\"pa-section-box\">\n                      <div class=\"pa-section-box-inner\">\n                        <div class=\"pa-section-title\">\n                          <h4>\n                            ביטוח בריאות כולל\n                          </h4>\n                        </div>\n                        <div class=\"pa-section-row\">\n                          <span class=\"img-wrapper\"><span class=\"icon icon-syringe\"></span></span>\n                          <span class=\"type-of-coverage\">כיסוי ניתוחים</span>\n                          <span *ngIf=\"chartDate.health.part1\" class=\"coverage-state-error\">כיסוי חלקי</span>\n                          <span *ngIf=\"!chartDate.health.part1\" class=\"coverage-state-ok\"><span class=\"icon icon-v-gray\"></span> כיסוי מלא</span>\n                        </div>\n                        <div class=\"pa-section-row\">\n                          <span class=\"img-wrapper\"><span class=\"icon icon-house\"></span></span>\n                          <span *ngIf=\"chartDate.health.part2\" class=\"coverage-state-error\">כיסוי חלקי</span>\n                          <span *ngIf=\"!chartDate.health.part2\" class=\"coverage-state-ok\"><span class=\"icon icon-v-gray\"></span> כיסוי מלא</span>\n                        </div>\n                        <div class=\"pa-section-row\">\n                          <span class=\"img-wrapper\"><span class=\"icon icon-infusion\"></span></span>\n                          <span *ngIf=\"chartDate.health.part3\" class=\"coverage-state-error\">כיסוי חלקי</span>\n                          <span *ngIf=\"!chartDate.health.part3\" class=\"coverage-state-ok\"><span class=\"icon icon-v-gray\"></span> כיסוי מלא</span>\n                        </div>\n                      </div>\n                      <!--error section-->\n                      <div class=\"pa-section-box-inner hidden\">\n                        <div class=\"pa-section-title error\">\n                                                    <span class=\"has-error\">\n                                                        חסר מידע\n                                                    </span>\n                        </div>\n                        <div class=\"pa-section-icon\">\n                          <img src=\"images/personal/pa-icon-noinfo.png\" class=\"img-responsive center-block\" />\n                        </div>\n                        <div class=\"pa-section-notice\">\n                                                    <span>\n                                                        לא עודכן מידע במערכת.\n                                                        המלצה למלא שאלון צ’קאפ\n                                                    </span>\n                        </div>\n                      </div>\n                      <!--pepole like you-->\n                      <!--<div class=\"show\">\n                          <div class=\"show-top-section\">\n                              <div>\n                                  <img src=\"images/personal/pa-icon-ppl-white.png\" alt=\"\" class=\"img-responsive center-block\" />\n                              </div>\n                              <h2>60%</h2>\n                              <p>\n                                  מאנשים הדומים לך שמגיעים\n                                  לגיל 67 ימטרכו כיסוי גבוה יותר\n                              </p>\n                          </div>\n                          <div class=\"show-bottom-section\"><a href=\"#\">פרטים נוספים</a></div>\n                      </div>-->\n                    </div>\n                    <a href=\"#\" class=\"btn btn-blue\">קבל המלצה</a>\n                  </div>\n                </div>\n                <div class=\"swiper-slide\"  (click)=\"selectSwiper('risk')\">\n                  <div class=\"pa-overview-section\" data-target=\"life-insurance\">\n                    <h4 class=\"pa-overview-title\">\n                      ביטוח חיים\n                    </h4>\n                    <div class=\"pa-section-box\">\n                      <div class=\"pa-section-box-inner\">\n                        <div class=\"pa-section-title\">\n                                                    <span>\n                                                        פיצוי נוכחי למקרה של פטירה <strong class=\"nis\">{{chartDate.risk.exists}}</strong>\n                                                    </span>\n                        </div>\n                        <div class=\"pa-section-icon\">\n                          <img src=\"images/personal/icon-float-overview.png\" alt=\"גלגל הצלה\" class=\"img-responsive center-block\" />\n                        </div>\n                        <div class=\"pa-section-notice\">\n                                                    <span>\n                                                        חסר לך לפיצוי אופטימלי\n                                                    </span>\n                          <div><span class=\"nis\">500,000</span></div>\n                        </div>\n                      </div>\n                      <!--error section-->\n                      <div class=\"pa-section-box-inner hidden\">\n                        <div class=\"pa-section-title error\">\n                                                    <span class=\"has-error\">\n                                                        חסר מידע\n                                                    </span>\n                        </div>\n                        <div class=\"pa-section-icon\">\n                          <img src=\"images/personal/pa-icon-noinfo.png\" class=\"img-responsive center-block\" />\n                        </div>\n                        <div class=\"pa-section-notice\">\n                                                    <span>\n                                                        לא עודכן מידע במערכת.\n                                                        המלצה למלא שאלון צ’קאפ\n                                                    </span>\n                        </div>\n                      </div>\n                      <!--pepole like you-->\n                      <!--<div class=\"show\">\n                          <div class=\"show-top-section\">\n                              <div>\n                                  <img src=\"images/personal/pa-icon-ppl-white.png\" alt=\"\" class=\"img-responsive center-block\" />\n                              </div>\n                              <h2>60%</h2>\n                              <p>\n                                  מאנשים הדומים לך שמגיעים\n                                  לגיל 67 ימטרכו כיסוי גבוה יותר\n                              </p>\n                          </div>\n                          <div class=\"show-bottom-section\"><a href=\"#\">פרטים נוספים</a></div>\n                      </div>-->\n                    </div>\n                    <a href=\"#\" class=\"btn btn-blue\">קבל המלצה</a>\n                  </div>\n                </div>\n\n              </div>\n              <!-- Add Pagination -->\n              <div class=\"slider-button-wrap\">\n                <button class=\"swiper-button-prev swipe-btn\"><</button>\n                <div class=\"swiper-pagination\" id=\"swiper-pagination\"></div>\n                <button class=\"swiper-button-next swipe-btn\">></button>\n              </div>\n            </div>\n\n\n            <!--pension-->\n            <!--<div class=\"pa-overview-section\" dir=\"rtl\" data-target=\"pension\">-->\n              <!--<h4 class=\"pa-overview-title\">-->\n                <!--פנסיה-->\n              <!--</h4>-->\n              <!--<div class=\"pa-section-box active-box\">-->\n                <!--<div class=\"pa-section-box-inner\">-->\n                  <!--<div class=\"pa-section-title\">-->\n                                                    <!--<span>-->\n                                                        <!--קצבה קצבה קצבה נוכחית בגיל פרישה <strong class=\"nis\">7,500</strong>-->\n                                                    <!--</span>-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-icon\">-->\n                    <!--<img src=\"images/personal/icon-safe-overview.png\" alt=\"\" class=\"img-responsive center-block\" />-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-notice pa-section-notice-v pa-section-notice-blue\">-->\n                                                    <!--<span>-->\n                                                        <!--קיים פיצוי אופטימלי-->\n                                                    <!--</span>-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-notice hidden\">-->\n                                                    <!--<span>-->\n                                                        <!--חסר לך לקצבה אופטימלית-->\n                                                    <!--</span>-->\n                    <!--<div><span class=\"nis\">700</span></div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--&lt;!&ndash;error section&ndash;&gt;-->\n                <!--&lt;!&ndash;<div class=\"pa-section-box-inner hidden\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"pa-section-title error\">&ndash;&gt;-->\n                                                    <!--&lt;!&ndash;<span class=\"has-error\">&ndash;&gt;-->\n                                                        <!--&lt;!&ndash;חסר מידע&ndash;&gt;-->\n                                                    <!--&lt;!&ndash;</span>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"pa-section-icon\">&ndash;&gt;-->\n                    <!--&lt;!&ndash;<img src=\"images/personal/pa-icon-hourglass.png\" class=\"img-responsive center-block\" />&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"pa-section-notice\">&ndash;&gt;-->\n                                                    <!--&lt;!&ndash;<span>&ndash;&gt;-->\n                                                        <!--&lt;!&ndash;לא עודכן מידע במערכת.&ndash;&gt;-->\n                                                        <!--&lt;!&ndash;המלצה למלא שאלון צ’קאפ&ndash;&gt;-->\n                                                    <!--&lt;!&ndash;</span>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                <!--&lt;!&ndash;pepole like you&ndash;&gt;-->\n                <!--&lt;!&ndash;<div class=\"show\">-->\n                    <!--<div class=\"show-top-section\">-->\n                        <!--<div>-->\n                            <!--<img src=\"images/personal/pa-icon-ppl-white.png\" alt=\"\" class=\"img-responsive center-block\" />-->\n                        <!--</div>-->\n                        <!--<h2>60%</h2>-->\n                        <!--<p>-->\n                            <!--מאנשים הדומים לך שמגיעים-->\n                            <!--לגיל 67 ימטרכו כיסוי גבוה יותר-->\n                        <!--</p>-->\n                    <!--</div>-->\n                    <!--<div class=\"show-bottom-section\"><a href=\"#\">פרטים נוספים</a></div>-->\n                <!--</div>&ndash;&gt;-->\n              <!--</div>-->\n              <!--<a href=\"#\" class=\"btn btn-red\">קבל המלצה</a>-->\n            <!--</div>-->\n            <!--&lt;!&ndash;Disability Insurance&ndash;&gt;-->\n            <!--<div class=\"pa-overview-section\" data-target=\"disability-insurance\">-->\n              <!--<h4 class=\"pa-overview-title active-caption\">-->\n                <!--אובדן כושר עבודה-->\n              <!--</h4>-->\n              <!--<div class=\"pa-section-box\">-->\n                <!--<div class=\"pa-section-box-inner\">-->\n                  <!--<div class=\"pa-section-title\">-->\n                                                    <!--<span>-->\n                                                        <!--קצבה קצבה נוכחית קצבה נוכחית <strong class=\"nis\">4,500</strong>-->\n                                                    <!--</span>-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-icon\">-->\n                    <!--<img src=\"sample-images/pa-icon-crutch.png\" alt=\"\" class=\"img-responsive center-block\" />-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-notice pa-section-notice-v pa-section-notice-blue\">-->\n                                                    <!--<span>-->\n                                                        <!--קיים פיצוי אופטימלי-->\n                                                    <!--</span>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--&lt;!&ndash;error section&ndash;&gt;-->\n                <!--&lt;!&ndash;<div class=\"pa-section-box-inner hidden\">&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"pa-section-title error\">&ndash;&gt;-->\n                                                    <!--&lt;!&ndash;<span class=\"has-error\">&ndash;&gt;-->\n                                                        <!--&lt;!&ndash;חסר מידע&ndash;&gt;-->\n                                                    <!--&lt;!&ndash;</span>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"pa-section-icon\">&ndash;&gt;-->\n                    <!--&lt;!&ndash;<img src=\"images/personal/pa-icon-noinfo.png\" class=\"img-responsive center-block\" />&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<div class=\"pa-section-notice\">&ndash;&gt;-->\n                                                    <!--&lt;!&ndash;<span>&ndash;&gt;-->\n                                                        <!--&lt;!&ndash;לא עודכן מידע במערכת.&ndash;&gt;-->\n                                                        <!--&lt;!&ndash;המלצה למלא שאלון צ’קאפ&ndash;&gt;-->\n                                                    <!--&lt;!&ndash;</span>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                <!--&lt;!&ndash;pepole like you&ndash;&gt;-->\n                <!--&lt;!&ndash;<div class=\"show\">-->\n                    <!--<div class=\"show-top-section\">-->\n                        <!--<div>-->\n                            <!--<img src=\"images/personal/pa-icon-ppl-white.png\" alt=\"\" class=\"img-responsive center-block\" />-->\n                        <!--</div>-->\n                        <!--<h2>60%</h2>-->\n                        <!--<p>-->\n                            <!--מאנשים הדומים לך שמגיעים-->\n                            <!--לגיל 67 ימטרכו כיסוי גבוה יותר-->\n                        <!--</p>-->\n                    <!--</div>-->\n                    <!--<div class=\"show-bottom-section\"><a href=\"#\">פרטים נוספים</a></div>-->\n                <!--</div>&ndash;&gt;-->\n              <!--</div>-->\n              <!--<a href=\"#\" class=\"btn btn-blue\">קבל המלצה</a>-->\n            <!--</div>-->\n            <!--&lt;!&ndash;Health Insurance&ndash;&gt;-->\n            <!--<div class=\"pa-overview-section health-insurance-section\" data-target=\"health-insurance\">-->\n              <!--<h4 class=\"pa-overview-title\">-->\n                <!--ביטוח בריאות-->\n              <!--</h4>-->\n              <!--<div class=\"pa-section-box\">-->\n                <!--<div class=\"pa-section-box-inner\">-->\n                  <!--<div class=\"pa-section-title\">-->\n                    <!--<h4>-->\n                      <!--ביטוח בריאות כולל-->\n                    <!--</h4>-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-row\">-->\n                    <!--<span class=\"img-wrapper\"><span class=\"icon icon-syringe\"></span></span>-->\n                    <!--<span class=\"type-of-coverage\">כיסוי ניתוחים</span>-->\n                    <!--<span class=\"coverage-state-error\">כיסוי חלקי</span>-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-row\">-->\n                    <!--<span class=\"img-wrapper\"><span class=\"icon icon-house\"></span></span>-->\n                    <!--<span class=\"type-of-coverage\">כיסוי אסונות</span>-->\n                    <!--<span class=\"coverage-state-error\">כיסוי חלקי</span>-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-row\">-->\n                    <!--<span class=\"img-wrapper\"><span class=\"icon icon-infusion\"></span></span>-->\n                    <!--<span class=\"type-of-coverage\">כיסוי מחלות</span>-->\n                    <!--<span class=\"coverage-state-ok\"><span class=\"icon icon-v-gray\"></span> כיסוי מלא</span>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--&lt;!&ndash;error section&ndash;&gt;-->\n                <!--<div class=\"pa-section-box-inner hidden\">-->\n                  <!--<div class=\"pa-section-title error\">-->\n                                                    <!--<span class=\"has-error\">-->\n                                                        <!--חסר מידע-->\n                                                    <!--</span>-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-icon\">-->\n                    <!--<img src=\"images/personal/pa-icon-noinfo.png\" class=\"img-responsive center-block\" />-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-notice\">-->\n                                                    <!--<span>-->\n                                                        <!--לא עודכן מידע במערכת.-->\n                                                        <!--המלצה למלא שאלון צ’קאפ-->\n                                                    <!--</span>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--&lt;!&ndash;pepole like you&ndash;&gt;-->\n                <!--&lt;!&ndash;<div class=\"show\">-->\n                    <!--<div class=\"show-top-section\">-->\n                        <!--<div>-->\n                            <!--<img src=\"images/personal/pa-icon-ppl-white.png\" alt=\"\" class=\"img-responsive center-block\" />-->\n                        <!--</div>-->\n                        <!--<h2>60%</h2>-->\n                        <!--<p>-->\n                            <!--מאנשים הדומים לך שמגיעים-->\n                            <!--לגיל 67 ימטרכו כיסוי גבוה יותר-->\n                        <!--</p>-->\n                    <!--</div>-->\n                    <!--<div class=\"show-bottom-section\"><a href=\"#\">פרטים נוספים</a></div>-->\n                <!--</div>&ndash;&gt;-->\n              <!--</div>-->\n              <!--<a href=\"#\" class=\"btn btn-blue\">קבל המלצה</a>-->\n            <!--</div>-->\n            <!--&lt;!&ndash;Life Insurance&ndash;&gt;-->\n            <!--<div class=\"pa-overview-section\" data-target=\"life-insurance\">-->\n              <!--<h4 class=\"pa-overview-title\">-->\n                <!--ביטוח חיים-->\n              <!--</h4>-->\n              <!--<div class=\"pa-section-box\">-->\n                <!--<div class=\"pa-section-box-inner\">-->\n                  <!--<div class=\"pa-section-title\">-->\n                                                    <!--<span>-->\n                                                        <!--פיצוי נוכחי למקרה של פטירה <strong class=\"nis\">700,000</strong>-->\n                                                    <!--</span>-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-icon\">-->\n                    <!--<img src=\"images/personal/icon-float-overview.png\" alt=\"גלגל הצלה\" class=\"img-responsive center-block\" />-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-notice\">-->\n                                                    <!--<span>-->\n                                                        <!--חסר לך לפיצוי אופטימלי-->\n                                                    <!--</span>-->\n                    <!--<div><span class=\"nis\">500,000</span></div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--&lt;!&ndash;error section&ndash;&gt;-->\n                <!--<div class=\"pa-section-box-inner hidden\">-->\n                  <!--<div class=\"pa-section-title error\">-->\n                                                    <!--<span class=\"has-error\">-->\n                                                        <!--חסר מידע-->\n                                                    <!--</span>-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-icon\">-->\n                    <!--<img src=\"images/personal/pa-icon-noinfo.png\" class=\"img-responsive center-block\" />-->\n                  <!--</div>-->\n                  <!--<div class=\"pa-section-notice\">-->\n                                                    <!--<span>-->\n                                                        <!--לא עודכן מידע במערכת.-->\n                                                        <!--המלצה למלא שאלון צ’קאפ-->\n                                                    <!--</span>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--&lt;!&ndash;pepole like you&ndash;&gt;-->\n                <!--&lt;!&ndash;<div class=\"show\">-->\n                    <!--<div class=\"show-top-section\">-->\n                        <!--<div>-->\n                            <!--<img src=\"images/personal/pa-icon-ppl-white.png\" alt=\"\" class=\"img-responsive center-block\" />-->\n                        <!--</div>-->\n                        <!--<h2>60%</h2>-->\n                        <!--<p>-->\n                            <!--מאנשים הדומים לך שמגיעים-->\n                            <!--לגיל 67 ימטרכו כיסוי גבוה יותר-->\n                        <!--</p>-->\n                    <!--</div>-->\n                    <!--<div class=\"show-bottom-section\"><a href=\"#\">פרטים נוספים</a></div>-->\n                <!--</div>&ndash;&gt;-->\n              <!--</div>-->\n              <!--<a href=\"#\" class=\"btn btn-blue\">קבל המלצה</a>-->\n            <!--</div>-->\n          </div>\n\n          <!--------------->\n          <!--checkup-top-->\n          <!--------------->\n          <div class=\"checkup-top\">\n            <div class=\"checkup-section\">\n              <h3>חסר מידע רב. מעונין לבצע תהליך צ’קאפ בחינם?</h3>\n              <div>\n                <div class=\"button-wrapper\">\n                  <a class=\"checkup-button\" href=\"#\">\n                    <span class=\"top-row\">צ'קאפ - התחל בדיקה</span>\n                    <span class=\"bottom-row\"><span class=\"fa fa-clock-o\"></span> זה יקח לך רק 3 דקות...</span>\n                  </a>\n                </div>\n                <span class=\"checkup-link\"><a href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#checkup-collapse\" aria-expanded=\"false\" aria-controls=\"checkup-collapse\">מה כולל תהליך הצ'קאפ?</a></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"collapse\" id=\"checkup-collapse\">\n            <div class=\"well\">\n              <div class=\"collapce-arrow-wrapper visible-lg\">\n                <button class=\"checkup-button\" type=\"button\" data-toggle=\"collapse\" data-target=\"#checkup-collapse\" aria-expanded=\"false\" aria-controls=\"checkup-collapse\">\n                  <span class=\"glyphicon glyphicon-chevron-up\"></span>\n                </button>\n              </div>\n              <h2>פותחים את המכתבים מהבנק וחברות הביטוח ולא מבינים על מה אתם משלמים?</h2>\n              <p>\n                יתכן שיש לכם ביטוחים מיותרים?<br />\n                יכול להיות שיש לכם כפל ביטוחי?<br />\n                סומכים על קופת החולים עם הבריאות שלכם?<br />\n              </p>\n              <h4>אנחנו ממליצים על בדיקת מלאה של כלל הפוליסות והביטוחים שלכם</h4>\n              <div>\n                <div class=\"button-wrapper\">\n                  <a href=\"#\" class=\"checkup-button\">\n                    <span class=\"top-row\">צ'קאפ - התחל בדיקה</span>\n                    <span class=\"bottom-row\"><span class=\"fa fa-clock-o\"></span> זה יקח לך רק 3 דקות...</span>\n                  </a>\n                </div>\n                <span class=\"checkup-link\"><a href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#checkup-collapse\" aria-expanded=\"false\" aria-controls=\"checkup-collapse\">תודה אבל אני לא צריך</a></span>\n              </div>\n            </div>\n          </div>\n\n          <!-------------->\n          <!-- Sub tabs -->\n          <!-------------->\n          <div class=\"bottom-tab-content clearfix\">\n            <!--pension-->\n            <div *ngIf=\"showTabBootom === 'pension'\" id=\"pension\">\n              <div class=\"card card-block\">\n                <h2>\n                  <span class=\"icon icon-safe\"></span>\n                  <span>פנסיה</span>\n                </h2>\n                <!--graph-section-->\n                <div class=\"graph-section clearfix\">\n                  <div class=\"graph-red clearfix\">\n                    <div>\n                      <span class=\"text\">חסר לך: </span>\n                      <!-- <span class=\"amount\"><span class=\"sheqel-sign\">&#8362;</span>700</span> -->\n                    </div>\n                    <button class=\"btn btn-blue\">קבל המלצה</button>\n                  </div>\n                  <div class=\"graph-wrapper\">\n                    <div class=\"doughnut-text\">\n                      <div>\n                        הצורך שלך<br />\n                        בפנסיה\n                      </div>\n                      <div><span class=\"sheqel-sign\">&#8362;</span>{{chartDate.pension.need}}</div>\n                      <div>קצבה חודשית</div>\n                      <div><a href=\"\">הסבר על חישוב הסכום <span class=\"icon icon-information\"></span></a></div>\n                      <!--<div><span class=\"icon icon-calculator\"></span></div>-->\n                    </div>\n                    <!--<canvas id=\"pensionGraph\" class=\"graph\" height=\"300\" width=\"300\"></canvas>-->\n                    <div  class=\"graph\">\n                    <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart>\n                  </div>\n                </div>\n                  <div class=\"graph-blue clearfix\">\n                    <div class=\"yov-got\">יש לך</div>\n                    <div class=\"current-pension\">קצבה נוכחית בגיל 67</div>\n                    <div class=\"amount\"><span class=\"sheqel-sign\">&#8362;</span>{{chartDate.pension.exists}}</div>\n                    <div class=\"details\"><a (click)=\"changePolice()\" type=\"button\"> פירוט פוליסה קיימת <span class=\"icon icon-information\"></span></a></div>\n                  </div>\n                </div>\n\n                <div class=\"slide-range-wrapper clearfix margin\">\n                  <h2>סטטוס הכיסוי שלך בהתאם לגילך, מצבך המשפחתי ורמת ההכנסה שלך <a href=\"\"><span class=\"icon icon-information\"></span></a></h2>\n\n                  <div class=\"slide-man \" [ngClass]=\"{'icon-blue': manOptions.pension <= 56, 'icon-red': manOptions.pension > 56}\" style=\"position: absolute;\" [style.left]=\"manOptions.pension + '%'\"><span class=\"bubble\">אתה נמצא כאן</span></div>\n\n                  <div class=\"slide-range\">\n                    <div class=\"col-xs-4 no-padding blue\">\n                      <span class=\"icon icon3\"></span>\n                      <span class=\"text\">\n                                                        כיסוי אקסטרה\n                                                        <span class=\"number\">{{chartDate.pension.extra}} <span class=\"nis\">₪</span></span>\n                                                    </span>\n                    </div>\n                    <div class=\"col-xs-4 no-padding blue-light\">\n                      <span class=\"icon icon2\"></span>\n                      <span class=\"text\">\n                                                        כיסוי מומלץ <span class=\"hidden-sm\">עבורך</span>\n                                                        <span class=\"number\">{{chartDate.pension.reccommand_for_you}} <span class=\"nis\">₪</span></span>\n                                                    </span>\n                    </div>\n                    <div class=\"col-xs-4 no-padding red\">\n                      <span class=\"icon icon1\"></span>\n                      <span class=\"text\">\n                                                        כיסוי סביר\n                                                        <span class=\"number\">{{chartDate.pension.normal}} <span class=\"nis\">₪</span></span>\n                                                    </span>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-12\">\n                        <div class=\"button-div\">\n                          <span>התקדם לכיסוי המומלץ עבורך </span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n                <!--Similar people-->\n                <!--<div class=\"clearfix\">-->\n                  <!--<div class=\"similar-people\">-->\n                    <!--<div class=\"top-row\">-->\n                                                        <!--<span class=\"text-and-icon\">-->\n                                                            <!--<span class=\"icon icon-pepole-blue\"></span>-->\n                                                            <!--<span>אנשים הדומים לך</span>-->\n                                                        <!--</span>-->\n                      <!--<span class=\"graph\">-->\n                                                            <!--<span class=\"cullum\">-->\n                                                                <!--<span class=\"progress progress-bar-vertical\">-->\n                                                                    <!--<span class=\"progress-bar red\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"height: 20%;\">-->\n                                                                        <!--<span class=\"sr-only\">20% Complete</span>-->\n                                                                    <!--</span>-->\n                                                                <!--</span>-->\n                                                                <!--<span class=\"number\">20%</span>-->\n                                                            <!--</span>-->\n                                                            <!--<span class=\"cullum\">-->\n                                                                <!--<span class=\"progress progress-bar-vertical\">-->\n                                                                    <!--<span class=\"progress-bar light-blue\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"height: 30%;\">-->\n                                                                        <!--<span class=\"sr-only\">30% Complete</span>-->\n                                                                    <!--</span>-->\n                                                                <!--</span>-->\n                                                                <!--<span class=\"number\">30%</span>-->\n                                                            <!--</span>-->\n                                                            <!--<span class=\"cullum\">-->\n                                                                <!--<span class=\"progress progress-bar-vertical\">-->\n                                                                    <!--<span class=\"progress-bar blue\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"height: 50%;\">-->\n                                                                        <!--<span class=\"sr-only\">50% Complete</span>-->\n                                                                    <!--</span>-->\n                                                                <!--</span>-->\n                                                                <!--<span class=\"number\">50%</span>-->\n                                                            <!--</span>-->\n                                                        <!--</span>-->\n                    <!--</div>-->\n                    <!--<div class=\"divider\"></div>-->\n                    <!--<div class=\"bottom-row\">-->\n                      <!--בעלי כיסוי <span>נמוך</span>, <span>דומה</span> או <span>גבוה</span> יותר-->\n                    <!--</div>-->\n                    <!--<div class=\"red-triangle\"></div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                 <!-- modal -->\n                      <div *ngIf=\"showModalPolice\" class=\"modal-out-wrap\">\n                        <div class=\"modal in fade insurance-list-modal InsuranceDetails \" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"resultModalHeader\">\n                          <div class=\"modal-dialog\" role=\"document\">\n                              <div class=\"modal-content\">\n                                  <div class=\"modal-header\">\n                                      <button type=\"button\" class=\"close\" (click)=\"showModalPolice = false\"><span aria-hidden=\"true\">&times;</span></button>\n                                      <h4 class=\"insurance-list-header\">לפנייך פירוט הפוליסות שלך</h4>\n                                  </div>\n                                  <div class=\"modal-body\">\n                                      <div class=\"general-content\">\n\n                                          <div class=\"insurance-wrapper\">\n                                              <div class=\"panel-group modal-list-accordion\">\n                                                  <div *ngFor=\"let item of polices;let i = index\" class=\"panel panel-default\">\n                                                      <div class=\"panel-heading \" [ngClass]=\"{'active': i === selectedPolices.index}\" (click)=\"selectP(i, item)\">\n                                                          <a >{{item.company}} - {{item.product_type_name}}</a>\n                                                      </div>\n                                                      <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n                                                          <div class=\"panel-body details\">\n                                                              <p class=\"heading\">1להלן פירוט נתוני {{selectedPolices.company}} - {{selectedPolices.product_type_name}} ע\"פ המידע שהגיע מהמסלקה\"</p>\n                                                              <div class=\"row padding\">\n                                                                  <div class=\"data col-xs-4 red\">{{selectedPolices.status}}</div>\n                                                                  <div class=\"text col-xs-8 status\">:סטטוס</div>\n                                                              </div>\n                                                              <div class=\"row padding\">\n                                                                  <div class=\"data col-xs-4\"><span class=\"nis\">₪</span>{{selectedPolices.amount}} </div>\n                                                                  <div class=\"text col-xs-8 saving\">:סכום החסכון</div>\n                                                              </div>\n                                                              <div class=\"row padding\">\n                                                                  <div class=\"data col-xs-4\"><span class=\"nis\">₪</span>675 </div>\n                                                                  <div class=\"text col-xs-8 rate\">:צפי קצבה חודשית*</div>\n                                                              </div>\n                                                              <div class=\"row padding\">\n                                                                  <div class=\"data col-xs-4\">0.0035%</div>\n                                                                  <div class=\"text col-xs-8 fee\">:דמי ניהול מצבירה</div>\n                                                              </div>\n                                                              <div class=\"row padding\">\n                                                                  <div class=\"data col-xs-4\">0%</div>\n                                                                  <div class=\"text col-xs-8 fee\">דמי ניהול מפרמיה</div>\n                                                              </div>\n                                                              <p class=\"notes\">* בהנחה שתמשיך הפקדות לחסכונות הפנסיונים הקיימים באותם תנאים</p>\n                                                          </div>\n                                                      </div>\n                                                  </div>\n\n                                              </div>\n\n                                              <!--<div class=\"tab\">קופות גמל - מיטב דש</div>\n                                                  <div class=\"tab-content\">\n                                                      <h3>להלן פירוט נתוני גמל מגדל ע\"פ המידע שהגיע מהמסלקה</h3>\n                                                      <ul>\n                                                          <li>\n                                                              <span class=\"descriiption status\">סטטוס</span>\n                                                              <span class=\"datas\">לא פעילה</span>\n                                                          </li>\n                                                          <li>\n                                                              <span class=\"descriiption status\">סטטוס</span>\n                                                              <span class=\"datas\">לא פעילה</span>\n                                                          </li>\n                                                      </ul>\n                                                  </div>\n                                              </div>\n                                              <div>קופות גמל - מיגדל</div>\n                                              <div>קופות גמל - הראל</div>\n                                              <div>קופות גמל - מעוף</div>\n                                              <div>קופות גמל - עוד אחת</div>-->\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      </div>\n               <!-- end modal -->\n              </div>\n            </div>\n            <!--disability-insurance--->\n            <div  *ngIf=\"showTabBootom === 'oka'\" id=\"disability-insurance\">\n              <div class=\"card card-block\">\n                <h2>\n                  <span class=\"icon icon-crutches\"></span>\n                  <span>אובדן כושר עבודה </span>\n                </h2>\n                <!--graph-section-->\n                <div class=\"graph-section clearfix\">\n                  <div class=\"graph-red clearfix\">\n                    <div>\n                      <span class=\"text\">חסר לך: </span>\n                      <!--<span class=\"amount\"><span class=\"sheqel-sign\">&#8362;</span>700</span>-->\n                    </div>\n                    <button class=\"btn btn-blue\">קבל המלצה</button>\n                  </div>\n                  <div class=\"graph-wrapper\">\n                    <div class=\"doughnut-text\">\n                      <div>\n                        הצורך שלך<br />\n                        בפנסיה\n                      </div>\n                      <div><span class=\"sheqel-sign\">&#8362;</span>{{chartDate.oka.need}}</div>\n                      <div>קצבה חודשית</div>\n                      <div>הסבר על חישוב הסכום</div>\n                      <div><span class=\"icon icon-calculator\"></span></div>\n                    </div>\n                    <!--<canvas id=\"disabilityGraph\" class=\"graph\" height=\"300\" width=\"300\"></canvas>-->\n                    <!-- <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart> -->\n                    <div  class=\"graph\">\n                      <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart>\n                    </div>\n                  </div>\n                  <div class=\"graph-blue clearfix\">\n                    <div class=\"yov-got\">יש לך</div>\n                    <div class=\"current-pension\">קצבה נוכחית בגיל 67</div>\n                    <div class=\"amount\"><span class=\"sheqel-sign\">&#8362;</span>{{chartDate.oka.exists}}</div>\n                    <div class=\"details\"><a  (click)=\"changePolice()\" type=\"button\"> פירוט פוליסה קיימת <span class=\"icon icon-information\"></span></a></div>\n                  </div>\n                </div>\n                <!--Similar people-->\n                <div class=\"slide-range-wrapper clearfix margin\">\n                  <h2>סטטוס הכיסוי שלך בהתאם לגילך, מצבך המשפחתי ורמת ההכנסה שלך <a href=\"\"><span class=\"icon icon-information\"></span></a></h2>\n\n                  <div class=\"slide-man\" [ngClass]=\"{'icon-blue': manOptions.oka <= 56, 'icon-red': manOptions.oka > 56}\"  style=\"position: absolute;\" [style.left]=\"manOptions.oka + '%'\"><span class=\"bubble\">אתה נמצא כאן</span></div>\n\n                  <div class=\"slide-range\">\n                    <div class=\"col-xs-4 no-padding blue\">\n                      <span class=\"icon icon3\"></span>\n                      <span class=\"text\">\n                                                        כיסוי אקסטרה\n                                                        <span class=\"number\">{{chartDate.oka.extra}} <span class=\"nis\">₪</span></span>\n                                                    </span>\n                    </div>\n                    <div class=\"col-xs-4 no-padding blue-light\">\n                      <span class=\"icon icon2\"></span>\n                      <span class=\"text\">\n                                                        כיסוי מומלץ <span class=\"hidden-sm\">עבורך</span>\n                                                        <span class=\"number\">{{chartDate.oka.reccommand_for_you}} <span class=\"nis\">₪</span></span>\n                                                    </span>\n                    </div>\n                    <div class=\"col-xs-4 no-padding red\">\n                      <span class=\"icon icon1\"></span>\n                      <span class=\"text\">\n                                                        כיסוי סביר\n                                                        <span class=\"number\">{{chartDate.oka.normal}} <span class=\"nis\">₪</span></span>\n                                                    </span>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-12\">\n                        <div class=\"button-div\">\n                          <span>התקדם לכיסוי המומלץ עבורך </span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            <!--life-insurance--->\n\n            <div  *ngIf=\"showTabBootom === 'risk'\" id=\"life-insurance\">\n              <div class=\"card card-block\">\n                <h2>\n                  <span class=\"icon icon-float\"></span>\n                  <span>ביטוח חיים</span>\n                </h2>\n                <!--graph-section-->\n                <div class=\"graph-section clearfix\">\n                  <div class=\"graph-red clearfix\">\n                    <div>\n                      <span class=\"text\">חסר לך: </span>\n                      <!-- <span class=\"amount\"><span class=\"sheqel-sign\">&#8362;</span>{{chartDate.risk.need}}</span> -->\n                    </div>\n                    <button class=\"btn btn-blue\">קבל המלצה</button>\n                  </div>\n                  <div class=\"graph-wrapper\">\n                    <div class=\"doughnut-text\">\n                      <div>\n                        הצורך<br />\n                        שלך בביטוח חיים\n                      </div>\n                      <div><span class=\"sheqel-sign\">&#8362;</span>{{chartDate.risk.need}}</div>\n                      <div>קצבה חודשית</div>\n                      <div>הסבר על חישוב הסכום</div>\n                      <div><span class=\"icon icon-calculator\"></span></div>\n                    </div>\n                    <!--<canvas id=\"lifeInsuranceGraph\" class=\"graph\" height=\"310\" width=\"310\"></canvas>-->\n                    <!-- <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart> -->\n                    <div  class=\"graph\">\n                      <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart>\n                    </div>\n\n                  </div>\n                  <div class=\"graph-blue clearfix\">\n                    <div class=\"yov-got\">יש לך</div>\n                    <div class=\"current-pension\">פיצוי נוכחי למקרה פטירה</div>\n                    <div class=\"amount\"><span class=\"sheqel-sign\">&#8362;</span>{{chartDate.risk.exists}}</div>\n                    <div class=\"details\"><a  (click)=\"changePolice()\" data-target=\".insurance-list-modal\"> פירוט פוליסה קיימת <span class=\"icon icon-information\"></span></a></div>\n                  </div>\n                </div>\n                <!--Similar people-->\n                <!--<div class=\"clearfix\">\n                    <div class=\"similar-people\">\n                        <div class=\"top-row\">\n                            <span class=\"text-and-icon\">\n                                <span class=\"icon icon-pepole-blue\"></span>\n                                <span>אנשים הדומים לך</span>\n                            </span>\n                            <span class=\"graph\">\n                                <span class=\"cullum\">\n                                    <span class=\"progress progress-bar-vertical\">\n                                        <span class=\"progress-bar red\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"height: 20%;\">\n                                            <span class=\"sr-only\">20% Complete</span>\n                                        </span>\n                                    </span>\n                                    <span class=\"number\">20%</span>\n                                </span>\n                                <span class=\"cullum\">\n                                    <span class=\"progress progress-bar-vertical\">\n                                        <span class=\"progress-bar light-blue\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"height: 30%;\">\n                                            <span class=\"sr-only\">30% Complete</span>\n                                        </span>\n                                    </span>\n                                    <span class=\"number\">30%</span>\n                                </span>\n                                <span class=\"cullum\">\n                                    <span class=\"progress progress-bar-vertical\">\n                                        <span class=\"progress-bar blue\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"height: 50%;\">\n                                            <span class=\"sr-only\">50% Complete</span>\n                                        </span>\n                                    </span>\n                                    <span class=\"number\">50%</span>\n                                </span>\n                            </span>\n                        </div>\n                        <div class=\"divider\"></div>\n                        <div class=\"bottom-row\">\n                            בעלי כיסוי <span>נמוך</span>, <span>דומה</span> או <span>גבוה</span> יותר\n                        </div>\n                        <div class=\"red-triangle\"></div>\n                    </div>\n                </div>-->\n              </div>\n\n              <div class=\"slide-range-wrapper clearfix margin\">\n                <h2>סטטוס הכיסוי שלך בהתאם לגילך, מצבך המשפחתי ורמת ההכנסה שלך <a href=\"\"><span class=\"icon icon-information\"></span></a></h2>\n\n                <div class=\"slide-man\" [ngClass]=\"{'icon-blue': manOptions.risk <= 56, 'icon-red': manOptions.risk > 56}\" style=\"position: absolute;\" [style.left]=\"manOptions.risk + '%'\"><span class=\"bubble\">אתה נמצא כאן</span></div>\n\n                <div class=\"slide-range\">\n                  <div class=\"col-xs-4 no-padding blue\">\n                    <span class=\"icon icon3\"></span>\n                    <span class=\"text\">\n                                                        כיסוי אקסטרה\n                                                        <span class=\"number\">{{chartDate.risk.extra}} <span class=\"nis\">₪</span></span>\n                                                    </span>\n                  </div>\n                  <div class=\"col-xs-4 no-padding blue-light\">\n                    <span class=\"icon icon2\"></span>\n                    <span class=\"text\">\n                                                        כיסוי מומלץ <span class=\"hidden-sm\">עבורך</span>\n                                                        <span class=\"number\">{{chartDate.risk.reccommand_for_you}} <span class=\"nis\">₪</span></span>\n                                                    </span>\n                  </div>\n                  <div class=\"col-xs-4 no-padding red\">\n                    <span class=\"icon icon1\"></span>\n                    <span class=\"text\">\n                                                        כיסוי סביר\n                                                        <span class=\"number\">{{chartDate.risk.normal}} <span class=\"nis\">₪</span></span>\n                                                    </span>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                      <div class=\"button-div\">\n                        <span>התקדם לכיסוי המומלץ עבורך </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <!--health-insurance--->\n            <div  *ngIf=\"showTabBootom === 'health'\" id=\"health-insurance\">\n              <div class=\"card card-block clearfix\">\n                <h2>\n                  <span class=\"icon icon-stethoscope\"></span>\n                  <span>ביטוח בריאות </span>\n                </h2>\n                <!-- tab list -->\n                <div class=\"health-top-section\" role=\"tablist\">\n                  <ul>\n                    <li class=\"health-tab clearfix \" role=\"presentation\" [ngClass]=\"{'active': showHealthTab === 'tab1', 'inactive': showHealthTab === 'tab2' || showHealthTab === 'tab3'}\">\n                      <a class=\"clearfix\" (click)=\"showHealthTab = 'tab1'\" aria-expanded=\"true\">\n                        <div class=\"img-wrapper\"><span class=\"icon icon-infusion\"></span></div>\n                        <div class=\"text-wrapper\">\n                          <div class=\"type-of-coverage\">כיסוי מחלות קשות</div>\n                          <div class=\"coverage-state-ok\">כיסוי מלא <span class=\"amount\">1,000,000<span class=\"sheqel-sign\">&#8362;</span></span></div>\n                        </div>\n                      </a>\n                    </li>\n                    <li class=\"health-tab clearfix\" role=\"presentation\" [ngClass]=\"{'active': showHealthTab === 'tab2', 'inactive': showHealthTab === 'tab3' || showHealthTab === 'tab1'}\">\n                      <a  (click)=\"showHealthTab = 'tab2'\" aria-expanded=\"true\">\n                        <div class=\"img-wrapper\"><span class=\"icon icon-syringe\"></span></div>\n                        <div class=\"text-wrapper\">\n                          <div class=\"type-of-coverage\">כיסוי ניתוחים</div>\n                          <div class=\"coverage-state-error\">כיסוי חלקי</div>\n                        </div>\n                      </a>\n                    </li>\n                    <li class=\"health-tab clearfix\" role=\"presentation\" [ngClass]=\"{'active': showHealthTab === 'tab3', 'inactive': showHealthTab === 'tab2' || showHealthTab === 'tab1'}\">\n                      <a  (click)=\"showHealthTab = 'tab3'\" aria-expanded=\"true\">\n                        <div class=\"img-wrapper\"><span class=\"icon icon-house\"></span></div>\n                        <div class=\"text-wrapper\">\n                          <div class=\"type-of-coverage\">כיסוי אסונות</div>\n                          <div class=\"coverage-state-error\">אין כיסוי</div>\n                        </div>\n                      </a>\n                    </li>\n                  </ul>\n\n                </div>\n                <!-- tab content -->\n                <div class=\"tab-content health-bottom-section\">\n                  <div [ngClass]=\"{'active': showHealthTab === 'tab1'}\" role=\"tabpanel\" class=\"tab-pane health-tab-content\" id=\"health-bottom-first-tab\">\n                    <div class=\"well clearfix\">\n                      <div class=\"well-inner-wrapper clearfix\">\n                        <div class=\"col-xs-12 col-md-7 col-lg-8 pull-right noPadding\">\n                          <!--text-section-->\n                          <div class=\"col-xs-4 col-xs-offset-1 col-md-4 col-md-offset-0 col-lg-5 noPadding pull-right\">\n                            <div class=\"text-section\">\n                              כיסוי מלא במקרה מחלה1\n                            </div>\n                          </div>\n                          <!--graph-section-->\n                          <div class=\"col-xs-7 col-md-7 noPadding\">\n                            <div class=\"graph-section clearfix\">\n                              <div class=\"graph-wrapper health-graph-wrapper-1\" id=\"health-graph-wrapper-1\">\n                                <div class=\"doughnut-text\">\n                                </div>\n                                <!--<canvas id=\"healthInsuranceGraph-0\" class=\"graph\" height=\"150\" width=\"150\"></canvas>-->\n                                <!-- <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart> -->\n                                <div  class=\"graph\">\n                                  <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart>\n                                </div>\n                              </div>\n\n                            </div>\n                          </div>\n                        </div>\n                        <!--list-section-->\n                        <div class=\"col-xs-12 col-md-5 col-lg-4 pull-right noPadding\">\n                          <div class=\"list-section\">\n                            <h3>המחלות הכלולות בכיסוי</h3>\n                            <ul>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"></span>\n                                <span>ניתוחים</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"></span>\n                                <span>השתלות</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>תרופות שלא בסל</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>מחליפי ניתוח</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>רפואה מתקדמת</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>ייעוצים פרטיים</span>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div [ngClass]=\"{'active': showHealthTab === 'tab2'}\" role=\"tabpanel\" class=\"tab-pane health-tab-content\" id=\"health-bottom-second-tab\">\n                    <div class=\"well clearfix\">\n                      <div class=\"well-inner-wrapper clearfix\">\n                        <!--list-section-->\n                        <div class=\"col-xs-12 col-md-7 col-lg-8 pull-right noPadding\">\n                          <!--text-section-->\n                          <div class=\"col-xs-4 col-xs-offset-1 col-md-4 col-md-offset-0 col-lg-5 noPadding pull-right\">\n                            <div class=\"text-section\">\n                              כיסוי מלא במקרה מחלה2\n                            </div>\n                          </div>\n                          <!--graph-section-->\n                          <div class=\"col-xs-7 col-md-7 noPadding\">\n                            <div class=\"graph-section clearfix\">\n                              <div class=\"graph-wrapper\" id=\"health-graph-wrapper-2\">\n                                <div class=\"doughnut-text\">\n                                </div>\n                                <!--<canvas id=\"healthInsuranceGraph-1\" class=\"graph\" height=\"150\" width=\"150\"></canvas>-->\n                                <!-- <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart> -->\n                                <div  class=\"graph\">\n                                  <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart>\n                                </div>\n                              </div>\n\n                            </div>\n                          </div>\n                        </div>\n                        <!--list-section-->\n                        <div class=\"col-xs-12 col-md-5 col-lg-4 pull-right noPadding\">\n                          <div class=\"list-section\">\n                            <h3>המחלות הכלולות בכיסוי</h3>\n                            <ul>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"></span>\n                                <span>ניתוחים</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"></span>\n                                <span>השתלות</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>תרופות שלא בסל</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>מחליפי ניתוח</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>רפואה מתקדמת</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>ייעוצים פרטיים</span>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div [ngClass]=\"{'active': showHealthTab === 'tab3'}\" role=\"tabpanel\" class=\"tab-pane health-tab-content\" id=\"health-bottom-third-tab\">\n                    <div class=\"well clearfix\">\n                      <div class=\"well-inner-wrapper clearfix\">\n                        <div class=\"col-xs-12 col-md-7 col-lg-8 pull-right noPadding\">\n                          <!--text-section-->\n                          <div class=\"col-xs-4 col-xs-offset-1 col-md-4 col-md-offset-0 col-lg-5 noPadding pull-right\">\n                            <div class=\"text-section\">\n                              כיסוי מלא במקרה מחלה\n                            </div>\n                          </div>\n                          <!--graph-section-->\n                          <div class=\"col-xs-7 col-md-7 noPadding\">\n                            <div class=\"graph-section clearfix\">\n                              <div class=\"graph-wrapper\" id=\"health-graph-wrapper-3\">\n                                <div class=\"doughnut-text\">\n                                </div>\n                                <!--<canvas id=\"healthInsuranceGraph-2\" class=\"graph\" height=\"150\" width=\"150\"></canvas>-->\n                                <!-- <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart> -->\n                                <div  class=\"graph\">\n                                  <chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart>\n                                </div>\n                              </div>\n\n                            </div>\n                          </div>\n                        </div>\n                        <!--list-section-->\n                        <div class=\"col-xs-12 col-md-5 col-lg-4 pull-right noPadding\">\n                          <div class=\"list-section\">\n                            <h3>המחלות הכלולות בכיסוי</h3>\n                            <ul>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"></span>\n                                <span>ניתוחים</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"></span>\n                                <span>השתלות</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>תרופות שלא בסל</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>מחליפי ניתוח</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>רפואה מתקדמת</span>\n                              </li>\n                              <li>\n                                <span class=\"icon icon-exclamation-mark\"> </span>\n                                <span>ייעוצים פרטיים</span>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!---------------------------------------->\n        <!------------messages-tab---------------->\n        <!---------------------------------------->\n        <div [ngClass]=\"{'active': showTab === 'pa-messages'}\" id=\"pa-messages\" class=\"tab-pane\">\n          <div class=\"social-icons social-top visible-lg clearfix\">\n            <h2 class=\"pull-right\">הזמן משפחה וחברים להצטרף</h2>\n            <div class=\"social-icons-wrapper pull-left\">\n              <div class=\"fb-send\" data-href=\"http://dev.wakeapp.co.il/\"></div>\n              <a href=\"#this\"><span class=\"icon icon-facebook\"></span></a>\n              <a href=\"#this\"><span class=\"icon icon-envelope\"></span></a>\n            </div>\n          </div>\n          <h2><span class=\"icon icon-envelope-blue\"></span> יש לך <span class=\"number-of-messages\">5</span> הודעות</h2>\n          <div class=\"messages-table-wrapper\">\n            <!------------------>\n            <!--messages-table-->\n            <!------------------>\n            <div id=\"messages-table\">\n              <div class=\"table-header clearfix\">\n                                            <span class=\"pull-right\">\n                                                <span class=\"checkbox-wrapper\">\n                                                    <input type=\"checkbox\" id=\"checkall\"  [(ngModel)]=\"allCehcked\" (ngModelChange)=\"changeAll($event)\"/>\n                                                    <label class=\"checkbox-label\" for=\"checkall\">\n                                                        סמן הכל\n                                                    </label>\n                                                </span>\n                                                <span class=\"divider\"></span>\n                                                <button><span class=\"icon icon-trash\"></span> מחק מסומנים</button>\n                                            </span>\n                <span class=\"table-pagination pull-left\">\n                                                <a href=\"#this\"><span class=\"icon icon-arrow-right-blue\"></span></a>\n                                                <span class=\"pagination-text\">1-10 מתוך 17</span>\n                                                <a href=\"#this\"><span class=\"icon icon-arrow-left-blue\"></span></a>\n                                            </span>\n              </div>\n              <div class=\"table-content panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                <div *ngFor=\"let item of messages; let i = index\" class=\"panel panel-default table-row\">\n                  <div class=\"panel-heading\" role=\"tab\" id=\"headingOne1\">\n                    <div class=\"checkbox-container\">\n                                                        <span class=\"checkbox-wrapper\">\n                                                            <input type=\"checkbox\" id=\"checkbox1\" [(ngModel)]=\"item.checked\"/>\n                                                            <label class=\"checkbox-label\" for=\"checkbox1\"><span></span></label>\n                                                        </span>\n                      <span class=\"date\">{{item.createdAt}}</span>\n                      <span class=\"divider\"></span>\n                      <span class=\"insurance-type\">\n                                                            <span class=\"hidden-xs hidden-sm\"><img src=\"images/personal/pa-icon-safe-blue-lg.png\" /></span>\n                                                            <span> {{item.msg}}</span>\n                                                        </span>\n                      <span class=\"divider hidden-xs\"></span>\n                      <a role=\"button\" class=\"panel-toggle title\" data-target=\"#collapseOne1\">\n                        <h4 class=\"panel-title\">\n                       {{item.subject}}\n                        </h4>\n                      </a>\n                      <div class=\"clearfix\">\n                        <a role=\"button\" class=\"panel-toggle read-more-button\" (click)=\"messClick(i)\">\n                  קרן פנסיה\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                  <div  [@expandCollapse] ='item.openCloseAnim' class=\"\" >\n                    <div class=\"panel-body\">\n                      <div class=\"panel-inner-wrapper\">\n                        <div class=\"clearfix\">\n                          <p class=\"message-text\">\n                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.\n                            <br />\n                            ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.\n                          </p>\n                        </div>\n                        <div class=\"close-delete-wrapper\">\n                          <div class=\"pull-left\">\n                            <button data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\"><span class=\"icon icon-trash\"></span></button>\n                            <span class=\"divider\"></span>\n                            <span class=\"less-button\">סגור</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"social-and-form-section hidden-lg\">\n            <div class=\"social-icons hidden-lg\">\n              <h2>הזמן משפחה וחברים להצטרף</h2>\n              <div class=\"social-icons-wrapper pull-left\">\n                <div class=\"fb-send\" data-href=\"http://dev.wakeapp.co.il/\"></div>\n                <a href=\"#this\"><span class=\"icon icon-facebook\"></span></a>\n                <a href=\"#this\"><span class=\"icon icon-envelope\"></span></a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!---------------------------------------->\n        <!----------personalDetails-tab----------->\n        <!---------------------------------------->\n        <div [ngClass]=\"{'active': showTab === 'pa-personalDetails'}\" id=\"pa-personalDetails\" class=\"tab-pane tab-top-section pa-personal-details\">\n          <div class=\"social-icons social-top visible-lg clearfix\">\n            <h2 class=\"pull-right\">הזמן משפחה וחברים להצטרף</h2>\n            <div class=\"social-icons-wrapper pull-left\">\n              <div class=\"fb-send\" data-href=\"http://dev.wakeapp.co.il/\"></div>\n              <a href=\"#this\"><span class=\"icon icon-facebook\"></span></a>\n              <a href=\"#this\"><span class=\"icon icon-envelope\"></span></a>\n            </div>\n          </div>\n          <form role=\"form\" action=\"#\" method=\"post\">\n            <div class=\"form-inner-wrapper\">\n              <div class=\"row\">\n                <!--First name-->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label\" for=\"first-name\">\n                    שם פרטי:\n                  </label>\n                  <input class=\"form-control missing-info\" id=\"first-name\" name=\"first-name\" type=\"text\" [(ngModel)]=\"form.privateName\"/>\n                  <div class=\"has-error\" *ngIf=\"showError && !form.privateName\">אנא בחר ערך</div>\n                </div>\n                <!--Last name-->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label\" for=\"last-name\">\n                    שם משפחה:\n                  </label>\n                  <input class=\"form-control\" id=\"last-name\" name=\"last-name\" type=\"text\" [(ngModel)]=\"form.lastName\" />\n                  <div class=\"has-error\" *ngIf=\"showError && !form.lastName\">אנא בחר ערך</div>\n                </div>\n                <!--ID-->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label\" for=\"id-number\">\n                    ת.ז:\n                  </label>\n                  <input class=\"form-control\" id=\"id-number\" name=\"id-number\" type=\"number\" [(ngModel)]=\"form.id\" />\n                  <div class=\"has-error\" *ngIf=\"showError && !form.id\">אנא בחר ערך</div>\n                </div>\n              </div>\n              <div class=\"visible-xs visible-sm divider\"></div>\n              <div class=\"row\">\n                <!--birth date-->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label \" for=\"date\">\n                    תאריך לידה:\n                  </label>\n                  <!--<input class=\"form-control\"  name=\"date\" placeholder=\"MM/DD/YYYY\" type=\"text\" />-->\n                  <!-- <input class=\"form-control\" id=\"last-name\" name=\"last-name\" type=\"text\" /> -->\n\n                  <div id=\"birthDate\" class=\"clearfix\">\n                      <div class=\"wrapper center-block\">\n                          <div class=\"selectWrapper personal-button\"  style=\"width: 27%;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                          <div class=\"selectWrapper personal-button\" style=\"width: 35%;height: 100%; margin-right: 4px;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                          <div class=\"selectWrapper personal-button\" style=\"width: 35%;height: 100%; margin-right: 4px;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                        </div>\n                  </div>\n                  <!--<div class=\"has-error\">שדה תאריך לידה הוא שדה חובה</div>-->\n                </div>\n                <!--profession-->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label\" for=\"text\">\n                    עיסוק:\n                  </label>\n                  <div class=\"wrapper center-block\">\n                      <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                        <div style=\"width: 100%;height: 100%;\">\n                          <app-autocomplit [data]=\"jobsData\"  (change)=\"professionChange($event)\"></app-autocomplit>\n                        </div>\n                      </div>\n                    </div>\n                  <!-- <div class=\"styled-select\">\n                    <select class=\"select form-control missing-info\">\n                      <option>בחר מקצוע</option>\n                      <option>דייל/דיילת קרקע</option>\n                      <option>אב/ אם בית</option>\n                      <option>אגרונום</option>\n                      <option>אדריכל/ ארכיטקט</option>\n                      <option>אופטיקאי /אופטומטריסט</option>\n                      <option>אוצרת.</option>\n                      <option>אורז</option>\n                      <option>אורז בקו ייצור </option>\n                      <option>אורטופד (לא מנתח)</option>\n                      <option>אח - אחות מוסמכים</option>\n                      <option>אח - אחות מעשיים</option>\n                      <option>אח/אחות  מוסמכים</option>\n                      <option>אחראי חדר בקרה</option>\n                      <option>איש אחזקה</option>\n                      <option>איש יחסי ציבור</option>\n                      <option>איש מחשבים</option>\n                      <option>איש מכירות</option>\n                      <option>אם - אב בית</option>\n                      <option>אקטואר</option>\n                      <option>ארכיאולוג</option>\n                      <option>בוחן נהיגה</option>\n                      <option>בוחן רכב</option>\n                      <option>בידוד ואיטום חוץ</option>\n                      <option>בידוד ואיטום פנים</option>\n                      <option>ביוכימאי /ביולוג</option>\n                      <option>בלנית</option>\n                      <option>במאי</option>\n                      <option>במאי סרטים</option>\n                      <option>במאי/ת</option>\n                      <option>בנאי/ת (עובד/ת בנין)</option>\n                    </select>\n                  </div> -->\n                  <!--<div class=\"has-error\">אנא בחר ערך</div>-->\n                </div>\n                <!--marital status-->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label\" for=\"text10\">\n                    מצב משפחתי:\n                  </label>\n                  <div class=\"styled-select\">\n                      <div class=\"wrapper center-block \">\n                          <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"maritalData\"  (change)=\"maritalChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                        </div>\n                    <!-- <select class=\"select form-control missing-info\" id=\"select1\" name=\"select1\">\n                      <option value=\"נשוי\">\n                        נשוי\n                      </option>\n                      <option value=\"רווק\">\n                        רווק\n                      </option>\n                      <option value=\"גרוש\">\n                        גרוש\n                      </option>\n                      <option value=\"אלמן\">\n                        אלמן\n                      </option>\n                    </select> -->\n                  </div>\n                  <!--<div class=\"has-error select\">אנא בחר ערך</div>-->\n                </div>\n              </div>\n              <div class=\"visible-xs visible-sm divider\"></div>\n              <div class=\"row\">\n                <!--email-->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label\" for=\"email\">\n                    מייל:\n                  </label>\n                  <input class=\"form-control\" id=\"email\" name=\"email\" type=\"text\" [(ngModel)]=\"form.email\"/>\n                  <div class=\"has-error\" *ngIf=\"showError && !form.email\">אנא בחר ערך</div>\n                </div>\n                <!--tell-->\n                <div class=\"form-group phone-input-wrapper col-xs-12 col-md-4\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-4 col-sm-5 col-lg-4\">\n                      <label class=\"control-label\" for=\"tell1\" style=\"height: 21px;\">\n\n                      </label>\n                      <div class=\"selectWrapper noPadding\">\n                          <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                              <div style=\"width: 100%;height: 100%;\">\n                                <app-autocomplit [data]=\"phoneData\"  (change)=\"phoneChange($event)\"></app-autocomplit>\n                              </div>\n                            </div>\n\n                      </div>\n\n                    </div>\n                    <div class=\"col-xs-8 col-sm-7 col-lg-8\">\n                      <label class=\"control-label \" for=\"tel1\">\n                        טלפון:\n                      </label>\n                      <input class=\"form-control  missing-info\" id=\"tell1\" name=\"tell1\" type=\"text\" [(ngModel)]=\"form.number\"/>\n                      <div class=\"has-error\" *ngIf=\"showError && !form.number\">שדה טלפון הוא שדה חובה</div>\n                    </div>\n                  </div>\n                </div>\n                <!--salary -->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label \" for=\"subject\">\n                    שכר:\n                  </label>\n                  <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                      <div style=\"width: 100%;height: 100%;\">\n                        <app-autocomplit [data]=\"rateData\"  (change)=\"salaryChange($event)\"></app-autocomplit>\n                      </div>\n                    </div>\n                  <!-- <input class=\"form-control\" id=\"subject\" name=\"subject\" type=\"text\" /> -->\n                  <!--<div class=\"has-error\">אנא בחר ערך</div>-->\n                </div>\n              </div>\n              <div class=\"visible-xs visible-sm divider\"></div>\n              <div class=\"row\">\n                <!--kupat hulim-->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label \" for=\"select\">\n                    קופת חולים:\n                  </label>\n                  <div class=\"styled-select\">\n                      <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                          <div style=\"width: 100%;height: 100%;\">\n                            <app-autocomplit [data]=\"kupatData\"  (change)=\"kupatChange($event)\"></app-autocomplit>\n                          </div>\n                        </div>\n                    <!-- <select class=\"select form-control missing-info\" id=\"select\" name=\"select\">\n                      <option value=\"\" selected disabled> </option>\n                      <option value=\"כללית\">\n                        כללית\n                      </option>\n                      <option value=\"מכבי\">\n                        מכבי\n                      </option>\n                      <option value=\"מאוחדת\">\n                        מאוחדת\n                      </option>\n                    </select> -->\n                  </div>\n                  <!--<div class=\"has-error\">אנא בחר ערך</div>-->\n                </div>\n                <!--Supplementary insurance-->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label \" for=\"text1\">\n                    ביטוח משלים:\n                  </label>\n                  <div class=\"styled-select\">\n                      <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                          <div style=\"width: 100%;height: 100%;\">\n                            <app-autocomplit [data]=\"hmoEData\"  (change)=\"hmoEChange($event)\"></app-autocomplit>\n                          </div>\n                        </div>\n                    <!-- <select class=\"select form-control missing-info\" id=\"select\" name=\"select\">\n                      <option value=\"\" selected disabled> </option>\n                      <option value=\"כללית\">\n                        כן\n                      </option>\n                      <option value=\"מכבי\">\n                        לא\n                      </option>\n                      <option value=\"מאוחדת\">\n                        לא יודע\n                      </option>\n                    </select> -->\n                  </div>\n                  <!--<div class=\"has-error\">אנא בחר ערך</div>-->\n                </div>\n                <div class=\"form-group col-xs-12 col-md-4\">\n                    <label class=\"control-label \" for=\"text1\">\n                      ביטוח משלים:\n                    </label>\n                    <div class=\"styled-select\">\n                        <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"jobData\"  (change)=\"jobChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                      <!-- <select class=\"select form-control missing-info\" id=\"select\" name=\"select\">\n                        <option value=\"\" selected disabled> </option>\n                        <option value=\"כללית\">\n                          כן\n                        </option>\n                        <option value=\"מכבי\">\n                          לא\n                        </option>\n                        <option value=\"מאוחדת\">\n                          לא יודע\n                        </option>\n                      </select> -->\n                    </div>\n                    <!--<div class=\"has-error\">אנא בחר ערך</div>-->\n                  </div>\n              </div>\n              <div class=\"visible-xs visible-sm divider\"></div>\n              <div class=\"row\">\n                <!--isSmoking-->\n                <div class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label \" for=\"isSmoking\">\n                    מעשן\n                  </label>\n                  <div class=\"styled-select\">\n                      <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                          <div style=\"width: 100%;height: 100%;\">\n                            <app-autocomplit [data]=\"ynData\"  (change)=\"ynChange($event)\"></app-autocomplit>\n                          </div>\n                        </div>\n                    <!-- <select class=\"select form-control missing-info\" id=\"isSmoking\" name=\"isSmoking\">\n                      <option value=\"\" selected disabled> </option>\n                      <option value=\"כן\">\n                        כן\n                      </option>\n                      <option value=\"לא\">\n                        לא\n                      </option>\n                    </select> -->\n                  </div>\n                  <!--<div class=\"has-error\">אנא בחר ערך</div>-->\n                </div>\n                <!--isSmokingin3years-->\n                <div *ngIf=\"this.form.doesSmoke === 'לא'\" class=\"form-group col-xs-12 col-md-4\">\n                  <label class=\"control-label\" for=\"isSmokingin3years\">\n                    עישן ב- 3 שנים אחרונות\n                  </label>\n                  <div class=\"styled-select\">\n                      <div class=\"selectWrapper personal-button\"  style=\"width: 100%;height: 100%;\">\n                          <div style=\"width: 100%;height: 100%;\">\n                            <app-autocomplit [data]=\"ynData\"  (change)=\"smokeInLast3Years($event)\"></app-autocomplit>\n                          </div>\n                        </div>\n                    <!-- <select class=\"select form-control missing-info\" id=\"isSmokingin3years\" name=\"isSmokingin3years\">\n                      <option value=\"\" selected disabled> </option>\n                      <option value=\"כן\">\n                        כן\n                      </option>\n                      <option value=\"לא\">\n                        לא\n                      </option>\n                    </select> -->\n                  </div>\n                  <!--<div class=\"has-error\">אנא בחר ערך</div>-->\n                </div>\n              </div>\n              <div class=\"visible-xs visible-sm divider\"></div>\n              <div class=\"row\">\n                <div class=\"children formSection\">\n                  <fieldset>\n                    <legend class=\"sr-only\">###</legend>\n                    <div class=\"wrapper\">\n                      <div class=\"childrenAmountWrapper col-md-4\">\n                        <span class=\"childrenTitle\">ילדים:</span>\n                        <input class=\"form-control missing-info childAmount\" type=\"number\" name=\"childAmount\" placeholder=\"0\" [(ngModel)]=\"form.children\" (ngModelChange)=\"doChangeChildren($event)\">\n                      </div>\n\n                      <div class=\"childrenListWrapper col-md-8\">\n                            <!-- <div class=\"child row\" disabled> -->\n                        <div *ngFor=\"let child of form.childrens.children_details; let i = index\" class=\"child row\">\n                          <div class=\"childGender col-xs-12 col-md-6 pull-right\">\n                            <span>ילד {{i + 1}}</span>\n                            <div class=\"form-group\">\n                                <div _ngcontent-c14=\"\" class=\"childGenderForm\">\n                                  <div class=\"hasSmoked-input intut-wrapper-inside\">\n                                    <input type=\"radio\" id=\"radio18{{i}}\" name=\"status{{i}}\" value=\"18\" [(ngModel)]=\"child.radio\"/>\n                                    <label for=\"radio18{{i}}\" style=\"border-bottom-right-radius: 4px;\n                                    border-top-right-radius: 4px;\"><span >זכר</span></label>\n                                    <input type=\"radio\" id=\"radio19{{i}}\" name=\"status{{i}}\" value=\"19\" [(ngModel)]=\"child.radio\"/>\n                                    <label for=\"radio19{{i}}\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px; margin-right: 0;padding-left: 40px;           padding-right: 40px;\"><span >נקבה</span></label>\n                                  </div>\n                                </div>\n                              <span class=\"field-validation-error\" style=\"margin-top: 17px !important;color: #fd3e3e !important; font-size: 1em;\" *ngIf=\"showError && !child.radio\">שדה מין הוא שדה חובה</span>\n                            </div>\n                          </div>\n                          <div class=\"childBDate col-xs-12 col-md-6 pull-right\" style=\"display: flex;flex-flow: column;\">\n                            <span>תאריך לידה</span>\n                            <div class=\"childBDateForm\">\n                                <div class=\"wrapper center-block \">\n                                    <div class=\"selectWrapper personal-button\"  style=\"width: 25%;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                    <div class=\"selectWrapper personal-button\" style=\"width: 32%;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                    <div class=\"selectWrapper personal-button\" style=\"width: 32%;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                  </div>\n                              <!-- <div class=\"selectWrapper col-xs-3 noPadding\">\n                                <select class=\"day selectpicker\">\n                                  <option selected disabled>בחר</option>\n                                  <option>2</option>\n                                  <option>3</option>\n                                  <option>4</option>\n                                  <option>5</option>\n                                </select>\n                              </div>\n                              <div class=\"selectWrapper col-xs-4 noPadding\">\n                                <select class=\"month selectpicker\">\n                                  <option selected disabled>בחר</option>\n                                  <option>2</option>\n                                  <option>3</option>\n                                  <option>4</option>\n                                  <option>5</option>\n                                </select>\n                              </div>\n                              <div class=\"selectWrapper col-xs-4 noPadding\">\n                                <select class=\"year selectpicker\">\n                                  <option selected disabled>בחר</option>\n                                  <option>2</option>\n                                  <option>3</option>\n                                  <option>4</option>\n                                  <option>5</option>\n                                </select>\n                              </div> -->\n                              <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                            </div>\n                            <!--<div class=\"has-error\">שדה תאריך לידה הוא שדה חובה</div>-->\n                          </div>\n                        </div>\n                        <!-- <div class=\"row child\">\n                          <div class=\"childGender col-xs-12 col-md-6 pull-right\">\n                            <span>ילד $</span>\n                            <div class=\"form-group\">\n                              <div class=\"childGenderForm missing-info\">\n                                <label>\n                                  זכר\n                                  <input type=\"radio\" name=\"childGender1\" value=\"1\" />\n                                </label>\n                                <label>\n                                  נקבה\n                                  <input type=\"radio\" name=\"childGender1\" value=\"2\" />\n                                </label>\n                              </div>\n                              <span class=\"field-validation-error\">אנא בחר מין</span>\n                            </div>\n                          </div>\n                          <div class=\"childBDate col-xs-12 col-md-6 pull-right\">\n                            <span>תאריך לידה</span>\n                            <div class=\"childBDateForm\">\n                              <div class=\"selectWrapper col-xs-3 noPadding\">\n                                <select class=\"day selectpicker\">\n                                  <option selected disabled>בחר</option>\n                                  <option>2</option>\n                                  <option>3</option>\n                                  <option>4</option>\n                                  <option>5</option>\n                                </select>\n                              </div>\n                              <div class=\"selectWrapper col-xs-4 noPadding\">\n                                <select class=\"month selectpicker\">\n                                  <option selected disabled>בחר</option>\n                                  <option>2</option>\n                                  <option>3</option>\n                                  <option>4</option>\n                                  <option>5</option>\n                                </select>\n                              </div>\n                              <div class=\"selectWrapper col-xs-4 noPadding\">\n                                <select class=\"year selectpicker\">\n                                  <option selected disabled>בחר</option>\n                                  <option>2</option>\n                                  <option>3</option>\n                                  <option>4</option>\n                                  <option>5</option>\n                                </select>\n                              </div>\n                              <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                              <span class=\"field-validation-error\">error</span>\n                            </div>\n                          </div>\n                        </div> -->\n                      </div>\n                    </div>\n                  </fieldset>\n                </div>\n              </div>\n            </div>\n            <div class=\"submit-button-wrapper\">\n              <div class=\"success-msg\" *ngIf=\"showError\">השינויים בוצעו בהצלחה!</div>\n              <button (click)=\"saveForm()\" class=\"btn btn-primary \" name=\"submit\" type=\"submit\">\n                עדכן פרטים אישיים\n              </button>\n            </div>\n          </form>\n          <div class=\"social-and-form-section\">\n            <div class=\"social-icons hidden-lg\">\n              <h2>הזמן משפחה וחברים להצטרף</h2>\n              <div class=\"social-icons-wrapper\">\n                <a href=\"#this\"><span class=\"icon icon-facebook\"></span></a>\n                <a href=\"#this\"><span class=\"icon icon-envelope\"></span></a>\n              </div>\n            </div>\n            <div class=\"forms\">\n              <h3>טפסים</h3>\n              <hr />\n              <a href=\"https://s3.amazonaws.com/com.eventide.downloads/Product+Manuals/TimeFactorManual.pdf\" download>\n                <span class=\"icon icon-download-file\"></span> הורדת קובץ יפוי כח\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"contactUsSection\">\n    <h3>\n        <span class=\"top-row\">יש לך שאלות?</span>\n        \u0003 נשמח לעזור בכל דרך\n    </h3>\n    <div class=\"top-contact-us clearfix\">\n        <div class=\"contact-row call-us col-xs-12 col-sm-4\">\n            <div class=\"contact-row-inner clearfix\">\n                <div class=\"contact-right\">\n                    <div>צ'אט אונליין</div>\n                    <a href=\"#\" class=\"contact-btn\">דבר עם נציג</a>\n                </div>\n                <div class=\"contact-left\">\n                    <span class=\"icon\" style=\"background-image: url('../../images/contact-us/icon-chat.png');\"></span>\n                </div>\n            </div>\n        </div>\n        <div class=\"contact-row call-us col-xs-12 col-sm-4\">\n            <div class=\"contact-row-inner clearfix\">\n                <div class=\"contact-right\">\n                    <div>שלח טופס פניה</div>\n                    <button class=\"contact-btn\">כתוב לנו</button>\n                </div>\n                <div class=\"contact-left\">\n                    <span class=\"icon\" style=\"background-image: url('../../images/contact-us/icon-chart.png');\"></span>\n                </div>\n            </div>\n        </div>\n        <div class=\"contact-row call-us col-xs-12 col-sm-4\">\n            <div class=\"contact-row-inner clearfix \">\n                <div class=\"contact-right\">\n                    <div>שיחה עם נציג</div>\n                    <a href=\"tel:*4500\" class=\"contact-phone\">*4500</a>\n                </div>\n                <div class=\"contact-left\">\n                    <span class=\"icon\" style=\"background-image: url('../../images/contact-us/icon.representative.png');\"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/personal-area/personal-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_enums_enums__ = __webpack_require__("../../../../../src/app/shared/enums/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalAreaComponent = (function () {
    function PersonalAreaComponent() {
        this.openCloseAnim = 'close';
        this.showTab = 'pa-overview';
        this.numbers = {
            risk: 3, health: 2, oka: 1, pension: 0
        };
        this.showHealthTab = 'tab1';
        this.chartDate = {
            "risk": {
                "exists": 5000000,
                "need": 1000000,
                "normal": 2000000,
                "reccommand_for_you": 3000000,
                "extra": 4000000
            },
            "pension": {
                "exists": 7500,
                "need": 13000,
                "normal": 7000,
                "reccommand_for_you": 8000,
                "extra": 9000
            },
            "oka": {
                "exists": 4500,
                "need": 7500,
                "normal": 7000,
                "reccommand_for_you": 8000,
                "extra": 9000
            },
            "health": {
                "part1": true,
                "part2": true,
                "part3": false,
                "part4": true
            }
        };
        this.manOptions = {
            pension: "0",
            oka: "0",
            risk: "0",
        };
        this.showTabBootom = 'pension';
        this.type = 'doughnut';
        this.data = {
            labels: [],
            datasets: [{
                    label: '# of Votes',
                    data: [22, 72],
                    backgroundColor: [
                        '#D8061F',
                        '#117ef5'
                    ],
                    borderWidth: 1
                }]
        };
        this.options = {
            fullWidth: false,
            animateScale: true,
            cutoutPercentage: 85,
            legend: {
                display: true
            }
        };
        this.form = {
            "id": "",
            "gender": 5,
            "birthDate": "",
            "doesSmoke": "כן",
            "smokeInLast3Years": false,
            "privateName": "",
            "lastName": "",
            "prefix": "050",
            "number": "",
            "email": "",
            salary: "1000 - 10000",
            profession: "בחר מקצוע",
            "agreeToContract": true,
            "maritalStatus": "",
            "hmo": "",
            "hmoExtra": true,
            kupat: "",
            "children": 0,
            job: "",
            "childrens": {
                "children_details": []
            }
        };
        this.yearsData = [];
        this.monthData = [
            {
                label: "1",
                value: "1"
            },
            {
                label: "2",
                value: "2"
            },
            {
                label: "3",
                value: "3"
            },
        ];
        this.jobsData = [
            {
                label: "בחר מקצוע",
                value: "בחר מקצוע"
            },
            {
                label: "דייל/דיילת קרקע",
                value: "דייל/דיילת קרקע"
            },
            {
                label: "אב/ אם בית",
                value: "אב/ אם בית"
            },
        ];
        this.jobData = [
            {
                label: "כללית",
                value: "כללית"
            },
            {
                label: "מכבי",
                value: "מכבי"
            },
            {
                label: "מאוחדת",
                value: "מאוחדת"
            },
        ];
        this.maritalData = [
            {
                label: "נשוי",
                value: "נשוי"
            },
            {
                label: "רווק",
                value: "רווק"
            },
            {
                label: "אלמן",
                value: "אלמן"
            },
        ];
        this.daysData = [];
        this.rateData = [
            {
                label: "1000 - 10000",
                value: "1000 - 10000"
            },
            {
                label: "10000 - 20000",
                value: "10000 - 20000"
            },
        ];
        this.kupatData = [
            {
                label: "כללית",
                value: "כללית"
            },
            {
                label: "מכבי",
                value: "מכבי"
            },
            {
                label: "מאוחדת",
                value: "מאוחדת"
            },
        ];
        this.ynData = [
            {
                label: "כן",
                value: "כן"
            },
            {
                label: "לא",
                value: "לא"
            },
        ];
        this.hmoEData = [
            {
                label: "כללית",
                value: "כללית"
            },
            {
                label: "מכבי",
                value: "מכבי"
            },
            {
                label: "מאוחדת",
                value: "מאוחדת"
            },
        ];
        this.phoneData = [
            {
                label: "050",
                value: "050"
            },
            {
                label: "040",
                value: "040"
            },
            {
                label: "060",
                value: "060"
            },
            {
                label: "070",
                value: "070"
            },
        ];
        this.selectedPolices = {
            "product_type_name": "Bla bla",
            "company": "good company",
            "status": "good",
            "amount": 1000000,
            "allowance": 7500,
            "dmeyNihulPremia": 3.5,
            "dmeyNihulZvira": 0.5,
            "monthlyPremia": 200,
            index: 0
        };
        this.polices = [
            {
                "product_type_name": "Bla bla",
                "company": "good company",
                "status": "good",
                "amount": 32,
                "allowance": 7500,
                "dmeyNihulPremia": 3.5,
                "dmeyNihulZvira": 0.5,
                "monthlyPremia": 200,
            },
            {
                "product_type_name": "Bla bla1",
                "company": "good company1",
                "status": "good",
                "amount": 444,
                "allowance": 7500,
                "dmeyNihulPremia": 3.5,
                "dmeyNihulZvira": 0.5,
                "monthlyPremia": 200,
            },
            {
                "product_type_name": "Bla bla2",
                "company": "good company2",
                "status": "good",
                "amount": 1000000,
                "allowance": 7500,
                "dmeyNihulPremia": 3.5,
                "dmeyNihulZvira": 0.5,
                "monthlyPremia": 200,
            },
            {
                "company": "good compan3y",
                "product_type_name": "Bla bla3",
                "status": "good",
                "amount": 1000000,
                "allowance": 7500,
                "dmeyNihulPremia": 3.5,
                "dmeyNihulZvira": 0.5,
                "monthlyPremia": 200,
            }
        ];
        this.messages = [
            {
                "id": 33,
                "subject": "sfsdfsdfdfsd sdf sdfsdfs",
                "msg": " sdfjkhssdjkfksdfjksdfs",
                "iconCode": 34,
                "createdAt": "2016-02-05",
                checked: false,
                openCloseAnim: 'close'
            },
            {
                "id": 34,
                "subject": "sfsdfsdfdfsd sdf sdfsdfs",
                "msg": " sdfjkhssdjkfksdfjksdfs",
                "iconCode": 34,
                "createdAt": "2016-02-05",
                checked: false,
                openCloseAnim: 'close'
            },
            {
                "id": 35,
                "subject": "sfsdfsdfdfsd sdf sdfsdfs",
                "msg": " sdfjkhssdjkfksdfjksdfs",
                "iconCode": 34,
                "createdAt": "2016-02-05",
                checked: false,
                openCloseAnim: 'close'
            },
        ];
        this.allCehcked = false;
    }
    PersonalAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setYear();
        this.setDays();
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 2400,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
        };
        this.carousel = {
            grid: { xs: 4, sm: 4, md: 4, lg: 4, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
        };
        setTimeout(function () {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: -40,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            _this.setMan('pension');
            _this.setMan('oka');
            _this.setMan('risk');
        }, 1000);
        // setInterval(()=> {
        //   console.log(23)
        //   document.getElementById("next2").click();
        // },3000);
    };
    PersonalAreaComponent.prototype.setMan = function (name) {
        if (this.chartDate[name].exists > this.chartDate[name].extra) {
            this.manOptions[name] = '-9';
            return;
        }
        if (this.chartDate[name].exists < this.chartDate[name].normal) {
            this.manOptions[name] = '89';
            return;
        }
        if (this.chartDate[name].normal < this.chartDate[name].exists && this.chartDate[name].exists < this.chartDate[name].reccommand_for_you) {
            var left = this.chartDate[name].reccommand_for_you - this.chartDate[name].normal;
            var cus = left / 48;
            var ecus = this.chartDate[name].exists - this.chartDate[name].normal;
            this.manOptions[name] = 89 - ecus / cus;
        }
        if (this.chartDate[name].reccommand_for_you < this.chartDate[name].exists && this.chartDate[name].exists < this.chartDate[name].extra) {
            var left = this.chartDate[name].extra - this.chartDate[name].reccommand_for_you;
            var cus = left / 48;
            var ecus = this.chartDate[name].exists - this.chartDate[name].reccommand_for_you;
            this.manOptions[name] = 89 - ecus / cus - 48;
        }
    };
    PersonalAreaComponent.prototype.selectSwiper = function (name) {
        this.showTabBootom = name;
        console.log(document.getElementById('swiper-pagination').childNodes, name, document.getElementById('swiper-pagination').childNodes[this.numbers[name]]);
        document.getElementById('swiper-pagination').childNodes[this.numbers[name]].click();
    };
    PersonalAreaComponent.prototype.myfunc = function (event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    };
    PersonalAreaComponent.prototype.saveForm = function () {
        if (!this.form.privateName || !this.form.id || !this.form.lastName || !this.form.email || !this.form.number)
            this.showError = true;
    };
    PersonalAreaComponent.prototype.setDays = function () {
        for (var i = 1; i <= 31; i++) {
            this.daysData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    PersonalAreaComponent.prototype.setYear = function () {
        for (var i = 1925; i <= 2018; i++) {
            this.yearsData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    PersonalAreaComponent.prototype.salaryChange = function (e) {
        this.form.salary = e;
    };
    PersonalAreaComponent.prototype.phoneChange = function (e) {
        this.form.prefix = e;
    };
    PersonalAreaComponent.prototype.daysChange = function (e) {
        this.day = e;
        this.form.birthDate = this.day + '-' + this.month + '-' + this.year;
    };
    PersonalAreaComponent.prototype.monthChange = function (e) {
        this.month = e;
        this.form.birthDate = this.day + '-' + this.month + '-' + this.year;
    };
    PersonalAreaComponent.prototype.yearsChange = function (e) {
        this.year = e;
        this.form.birthDate = this.day + '-' + this.month + '-' + this.year;
    };
    PersonalAreaComponent.prototype.professionChange = function (e) {
        this.form.profession = e;
    };
    PersonalAreaComponent.prototype.maritalChange = function (e) {
        this.form.maritalStatus = __WEBPACK_IMPORTED_MODULE_1__shared_enums_enums__["a" /* MaritalStatus */][e];
    };
    PersonalAreaComponent.prototype.kupatChange = function (e) {
        this.form.hmo = e;
    };
    PersonalAreaComponent.prototype.hmoEChange = function (e) {
        this.form.hmoExtra = e;
    };
    PersonalAreaComponent.prototype.jobChange = function (e) {
        this.form.job = e;
    };
    PersonalAreaComponent.prototype.ynChange = function (e) {
        this.form.doesSmoke = e;
    };
    PersonalAreaComponent.prototype.smoke3Change = function (e) {
        this.form.smokeInLast3Years = e;
    };
    PersonalAreaComponent.prototype.doChangeChildren = function () {
        this.form.childrens.children_details = [];
        for (var i = 0; i < this.form.children; i++) {
            this.form.childrens.children_details.push({
                "gender": 0,
                "birthDate": "1980-01-09",
                "privateName": "",
            });
        }
    };
    PersonalAreaComponent.prototype.selectP = function (i, item) {
        this.selectedPolices = item;
        this.selectedPolices.index = i;
    };
    PersonalAreaComponent.prototype.changePolice = function () {
        this.showModalPolice = true;
    };
    PersonalAreaComponent.prototype.changeAll = function () {
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.allCehcked)
                item.checked = true;
            else
                item.checked = false;
        }
    };
    PersonalAreaComponent.prototype.messClick = function (i) {
        this.messages[i].openCloseAnim = (this.messages[i].openCloseAnim === 'open') ? 'close' : 'open';
    };
    return PersonalAreaComponent;
}());
PersonalAreaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-personal-area',
        template: __webpack_require__("../../../../../src/app/personal-area/personal-area.component.html"),
        styles: [__webpack_require__("../../../../../src/app/personal-area/personal-area.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('expandCollapse', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('open', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                    'height': '*'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('close', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({
                    'height': '0px',
                    'opacity': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('open <=> close', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])(100))
            ])
        ]
    })
], PersonalAreaComponent);

//# sourceMappingURL=personal-area.component.js.map

/***/ }),

/***/ "../../../../../src/app/proposals/proposals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resultsWrapper .results_box .results_toggle{\r\n    font-size: 1.42857em;\r\n    line-height: 24px;\r\n}\r\n.hidden-xs > h3{\r\n    font-size: 2.5rem;\r\n    line-height: 60px;\r\n    font-weight: bold;\r\n}\r\n#div2 > div > div > h3{\r\n    font-size: 2.5rem;\r\n    line-height: 60px;\r\n    font-weight: bold;\r\n}\r\n.toggleList > ul{\r\n    list-style: none;\r\n}\r\ndiv.toggleList > ul:nth-child(2){\r\n    border-right: 1px solid #ececec;\r\n    position: relative;\r\n    left: 26px;\r\n    padding-right: 51px;\r\n    padding-left: 0;\r\n}\r\n#div2 > div > div {\r\n    font-size: 1.42857em;\r\n    line-height: 24px;\r\n}\r\n#div2 > div  > div.col-md-7.col-xs-12> div > p{\r\n    font-size: 1rem;\r\n    margin-top: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n#div2 > div > div.col-md-7.col-xs-12.pull-right{\r\n    padding-right: 0;\r\n}\r\n#div2 > div > div.col-md-5.col-xs-12.pull-right > div.toggleList.col-xs-12.pull-right > ul.col-md-6.col-xs-12.pull-right.check{\r\n    padding-left: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proposals/proposals.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"main\" class=\"container-fluid\" tabindex=\"-1\">\n  <!-- section 1 -->\n  <section class=\"row\">\n    <div class=\"results\">\n      <div class=\"resultsHead clearfix noPadding\">\n        <h2>השוואת הצעות לביטוח חיים</h2>\n        <p>\n          יוסי, תודה על מילוי הפרטים!\n        </p>\n        <p *ngIf=\"amount\">\n          המערכת ניתחה את הנתונים שמילאת עבור   <span class=\"blue\">כיסוי ביטוחי של {{amount}} <span class=\"nis\">₪</span>   <a href=\"#\" role=\"button\" data-toggle=\"modal\" data-target=\"#modal-explanation\" class=\"exclamation\"><span class=\"icon icon-exclamation-mark\"></span></a></span>\n        </p>\n        <p *ngIf=\"amount\">\n          ומצאה את הצעות ביטוח חיים/אבדן כושר עבודה/הבריאות האופטימליות עבורך.                        <br />\n          <a (click)=\"showCalcut = true\" class=\"btn\" role=\"button\" data-toggle=\"modal\" data-target=\"#results-modal\"><img src=\"images/results/icon-pencil.png\" alt=\"edit\" /> לחצו לעריכת גובה הכיסוי </a>\n\n        </p>\n      </div>\n\n      <!---->\n      <div class=\"resultsWrapper\" *ngFor=\"let item of data;let i = index\" dir=\"ltr\">\n        <div class=\"results_box clearfix\" [ngClass]=\"{'active': i === 0}\">\n          <div class=\"results_content\">\n            <div class=\"imageBox col-md-3 col-xs-12 pull-right\">\n              <div class=\"imageBorder\"><img [src]=\"item.companyLogoUrl\" alt=\"wakeapp logo\" /></div>\n            </div>\n            <div class=\"col-lg-2 col-md-3 col-xs-6 pull-right\">\n              <div class=\"currencyBox col-md-10 col-xs-12\">\n                <span class=\"currency\">{{item.pricesPerAges[0].price}}<span class=\"nis\">₪</span></span>\n                <span class=\"monthly\"><span class=\"hidden-xs\">תשלום</span> חודשי</span>\n              </div>\n            </div>\n            <div class=\"description col-md-4 col-xs-6 pull-right \">\n              <div class=\"text col-xs-12\">\n                בהצעה זו תשלם <span class=\"nis\">₪</span>27,000  יותר מאשר<br />\n                ההצעה של <span>WakeApp</span>  (עבור אותו הכיסוי) <span class=\"icon icon-information\"></span>\n              </div>\n            </div>\n          </div>\n          <!--results_toggle-->\n\n          <div class=\" col-xs-12\" id=\"div2\"  [@expandCollapse] ='openCloseAnim' >\n            <div  style=\"border-top: 1px #ececec solid;margin-top: 40px;padding-top: 30px;\">\n                <div [hidden]=\"!showObj[i]\" class=\"col-md-7 col-xs-12 pull-right\">\n                    <h3> לורם איפסום</h3>\n                    <p>\n                      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטילורם איפסום לורם איפסום דולור סיט אמט, קונסקטוררטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי. לורם איפסוםלורם איפסום דולור סיט אמט טורר אדיפיסינג לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג *לקוח יקר החבילת לא כוללת אדיפיסינג\n                    </p>\n\n                    <div class=\"notes\">\n                      <h3 class=\"hidden-md hidden-lg\">ההצעה לא כוללת</h3>\n                      <p>\n                        *לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קונדימנטום בליקרה\n                      </p>\n                    </div>\n                  </div>\n\n                  <div [hidden]=\"!showObj[i]\" class=\"col-md-5 col-xs-12 pull-right\">\n                    <div class=\"hidden-xs hidden-sm\"><h3>כל היתרונות בשבילך</h3></div>\n                    <div class=\"hidden-md hidden-lg toggleListButton\" role=\"button\">\n                      <h3>\n                        כל היתרונות בשבילך <span class=\"plus_toggleList\"></span><span class=\"minus_toggleList\"></span>\n                      </h3>\n                    </div>\n                    <div class=\"toggleList col-xs-12 pull-right\">\n                      <ul class=\"col-md-6 col-xs-12 pull-right check\">\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                      </ul>\n                      <ul class=\"col-md-6 col-xs-12 pull-right cancel\">\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                      </ul>\n                    </div>\n                  </div>\n            </div>\n\n          </div>\n          <div class=\"resultsControlls hidden-xs hidden-sm\">\n            <a (click)=\"showChose = true\" class=\"btn getOffer\">\n              <span>קבל/י הצעה</span>\n            </a>\n            <!--<a *ngIf=\"i === 0\" class=\"btn toBuy\" data-target=\"#cal-results-modal\" data-toggle=\"modal\" href=\"#\">-->\n              <!--<span _ngcontent-c2=\"\">לרכישה</span>-->\n            <!--</a>-->\n          </div>\n\n          <div class=\"bottomBTN\">\n            <div class=\"toggleButton pull-right col-lg-2 col-sm-5 col-md-4 col-xs-7\"  (click)=\"openReportsFilter(i)\">\n              <div class=\"whyMe\"> למה זה מתאים לי<span class=\"hidden-xs plus\"></span></div>\n              <div class=\"closeToggle\">סגור<span class=\"hidden-xs minus\"></span></div>\n            </div>\n\n            <div class=\"resultsControlls pull-right col-xs-5 hidden-md hidden-lg\">\n              <a  (click)=\"showChose = true\" class=\"btn getOffer\">\n                <span>קבל/י הצעה</span>\n              </a>\n            </div>\n          </div>\n          <div _ngcontent-c2=\"\" class=\"angle\" *ngIf=\"i === 0\"><span _ngcontent-c2=\"\">הכי משתלמת!</span></div>\n        </div>\n\n      </div>\n\n    </div>\n  </section>\n  <!-- End section 1 -->\n</main>\n\n<!-- modal -->\n<div id=\"modal-explanation\" class=\"modal fade general-modal light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"resultModalHeader\">\n  <div class=\"modal-dialog light\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"סגור\" tabindex=\"-1\" aria-hidden=\"true\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 id=\"resultModalHeader\">הסבר על חישוב הסכום</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"general-content \">\n          <p class=\"description\">\n            הצעת Wakeapp מחושבת ביחס לסכום הכולל<br />\n            של התשלומים של Wakeapp ביחס לממוצע התשלומים של ההצעות האחרות. עבור כל חברה,\n            מבוצע חישוב של סכום ההצעה הכולל ביחס להצעת Wakeapp\n\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end modal -->\n<app-modal-calcut *ngIf=\"showCalcut\" (closeEvent)=\"showCalcut = false\" (saveEvent)=\"amount = $event;showCalcut = false\" [amount]=\"amount\"></app-modal-calcut>\n\n<app-modal-chose *ngIf=\"showChose\" (closeEvent)=\"showChose = false\"></app-modal-chose>\n"

/***/ }),

/***/ "../../../../../src/app/proposals/proposals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProposalsComponent = (function () {
    function ProposalsComponent(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.data = [
            {
                "companyId": 1,
                "companyName": "Migdal",
                "companyLogoUrl": "images/results/logo-migdal.png",
                "priceForAllLife": 1500000,
                "pricesPerAges": [
                    {
                        "age": 40,
                        "price": 34.22
                    },
                    {
                        "age": 41,
                        "price": 56.22
                    },
                    {
                        "age": 42,
                        "price": 70.22
                    },
                    {
                        "age": 43,
                        "price": 85.22
                    }
                ]
            },
            {
                "companyId": 2,
                "companyName": "Menora",
                "companyLogoUrl": "images/results/logo-menora.png",
                "priceForAllLife": 43543543,
                "pricesPerAges": [
                    {
                        "age": 40,
                        "price": 34.43
                    },
                    {
                        "age": 41,
                        "price": 55.45
                    },
                    {
                        "age": 42,
                        "price": 76.56
                    },
                    {
                        "age": 43,
                        "price": 87.67
                    }
                ]
            },
            {
                "companyId": 3,
                "companyName": "Klal",
                "companyLogoUrl": "images/results/logo-klal.png",
                "priceForAllLife": 12323423,
                "pricesPerAges": [
                    {
                        "age": 40,
                        "price": 23.22
                    },
                    {
                        "age": 41,
                        "price": 34.22
                    },
                    {
                        "age": 42,
                        "price": 54.22
                    },
                    {
                        "age": 43,
                        "price": 56.22
                    }
                ]
            }
        ];
        this.hideText = true;
        this.showObj = {};
        this.openCloseAnim = 'close';
        this.activatedRoute.params.subscribe(function (params) {
            _this.amount = params['amount'];
            console.log(_this.amount);
        });
    }
    ProposalsComponent.prototype.openReportsFilter = function (i) {
        var _this = this;
        for (var i_1 = 0; i_1 < this.data.length; i_1++) {
            this.showObj[i_1] = false;
        }
        this.openCloseAnim = (this.openCloseAnim === 'open') ? 'close' : 'open';
        if (this.openCloseAnim === 'close') {
            setTimeout(function () {
                _this.showObj[i] = false;
            }, 100);
        }
        else {
            this.showObj[i] = true;
        }
    };
    ProposalsComponent.prototype.ngOnInit = function () {
    };
    return ProposalsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProposalsComponent.prototype, "amount", void 0);
ProposalsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-proposals',
        template: __webpack_require__("../../../../../src/app/proposals/proposals.component.html"),
        styles: [__webpack_require__("../../../../../src/app/proposals/proposals.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('expandCollapse', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    'height': '*'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('close', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    'height': '0px',
                    'opacity': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('open <=> close', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(100))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _a || Object])
], ProposalsComponent);

var _a;
//# sourceMappingURL=proposals.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/autocomplit/autocomplit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-wrap{\r\n    font-family: \"RaananSuper\";\r\n    color: #626262;\r\n    position: relative;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n}\r\n.button-wrap > button{\r\n    height: 100%;\r\n    border-color: #117ef5;\r\n    padding-right: 0.375rem;\r\n    border: 2px solid #117ef5;\r\n    background-color: transparent;\r\n    border-radius: 10px;\r\n    padding: 0.125rem 0.625rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    width: 100%;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-right: 16px;\r\n}\r\n.dropdawn{\r\n    position: absolute;\r\n    top: 100%;\r\n    right: 0;\r\n    z-index: 1000;\r\n    /* display: none; */\r\n    float: left;\r\n    min-width: 100% !important;\r\n    padding: 5px 0;\r\n    margin: 2px 0 0;\r\n    list-style: none;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    background: white !important;\r\n    border: 1px solid #ccc;\r\n    border: 1px solid rgba(0,0,0,0.15);\r\n    border-radius: 4px;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n    background-clip: padding-box;\r\n\r\n}\r\ndiv > div{\r\n    background: white !important;\r\n}\r\n.dropdawn > input{\r\n    border: 2px solid #707070;\r\n    width: 100% !important;\r\n    font-size: 1.51429em;\r\n}\r\n.dropdawn > ul{\r\n    list-style: none;\r\n    padding: 5px 0;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    background: white;\r\n    height: 150px;\r\n    overflow: hidden;\r\n    overflow-y: auto;\r\n    width: 100%;\r\n    padding-top: 0;\r\n}\r\n.dropdawn > ul > li > a{\r\n    color: #333;\r\n    color: #333;\r\n    width: 100%;\r\n    margin: 0 !important;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.dropdawn > ul > li{\r\n    cursor: pointer;\r\n}\r\n.dropdawn > ul > li:hover{\r\n    color: #333;\r\n    text-decoration: none;\r\n    border: 2px solid #707070;\r\n    outline: 0;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n.active-hover{\r\n  color: #333;\r\n  text-decoration: none;\r\n  border: 2px solid #707070;\r\n  outline: 0;\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n.button-wrap > button > i{\r\n    color: #117ef5;\r\n}\r\n.button-wrap > button > span{\r\n    font-size: 1.64286em;\r\n}\r\n.button-wrap > button:active{\r\n    /*background-color: #4299f7;*/\r\n}\r\n.button-wrap > button:focus{\r\n    outline: 2px solid #707070 !important;\r\n}\r\n.button-wrap > button:hover{\r\n    /*color: #fff;*/\r\n    /*background-color: #0965ca;*/\r\n}\r\n\r\n\r\n.dropdawn > ul::-webkit-scrollbar-thumb{\r\n    height: 10px !important;\r\n  }\r\n  .dropdawn > ul::-webkit-scrollbar-track\r\n  {\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n  .dropdawn > ul::-webkit-scrollbar\r\n  {\r\n    width: 10px;\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n  .dropdawn > ul::-webkit-scrollbar-thumb\r\n  {\r\n    background-color: rgb(239, 239, 239);\r\n    border: 1px solid rgb(232, 232, 232);\r\n    border-radius: 1px;\r\n    height: 2px;\r\n    margin: 3px;\r\n  }\r\n  @media (max-width: 992px){\r\n    .button-wrap > button{\r\n        border: 1px solid #117ef5;\r\n    }\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/autocomplit/autocomplit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"button-wrap\">\n  <button (click)=\"showClick()\">\n    <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n    <span>\n      {{label}}\n    </span>\n  </button>\n  <div [hidden]=\"!show\" class=\"dropdawn\" style=\"BACKGROUND: WHITE !IMPORTANT;\">\n    <input type=\"text\" [(ngModel)]=\"searchModel\" (ngModelChange)=\"onSearchChange($event)\" (keyup.enter)=\"enterEvent()\" #searchInput>\n    <ul>\n      <li *ngFor=\"let item of filteringData; let i = index\" [ngClass]=\"{'active-hover': i === 0}\">\n        <a (click)=\"select(item)\">{{item.label}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/autocomplit/autocomplit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocomplitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutocomplitComponent = (function () {
    function AutocomplitComponent(_eref) {
        this._eref = _eref;
        this.label = "";
        this.searchModel = "";
        this.filteringData = [];
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AutocomplitComponent.prototype.ngOnInit = function () {
        if (this.data && this.data[0]) {
            this.label = this.data[0].label;
            this.firstSelect = this.data[0];
        }
        this.filteringData = Object.assign([], this.data);
    };
    AutocomplitComponent.prototype.select = function (item) {
        this.label = item.label;
        this.show = false;
        this.change.emit(item.value);
    };
    AutocomplitComponent.prototype.onSearchChange = function (value) {
        this.filteringData = Object.assign([], this.data);
        if (!value) {
            return;
        }
        this.firstSelect = null;
        var filtering = [];
        for (var _i = 0, _a = this.filteringData; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.label.indexOf(value) !== -1) {
                filtering.push(item);
                if (!this.firstSelect) {
                    this.firstSelect = item;
                }
            }
        }
        this.filteringData = Object.assign([], filtering);
    };
    AutocomplitComponent.prototype.onClick = function (event) {
        if (!this._eref.nativeElement.contains(event.target))
            this.show = false;
    };
    AutocomplitComponent.prototype.showClick = function () {
        var _this = this;
        this.show = !this.show;
        setTimeout(function () {
            _this.searchInput.nativeElement.focus();
        }, 100);
    };
    AutocomplitComponent.prototype.enterEvent = function () {
        this.label = this.firstSelect.label;
        this.show = false;
        this.change.emit(this.firstSelect.value);
    };
    return AutocomplitComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AutocomplitComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AutocomplitComponent.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchInput'),
    __metadata("design:type", Object)
], AutocomplitComponent.prototype, "searchInput", void 0);
AutocomplitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-autocomplit',
        template: __webpack_require__("../../../../../src/app/shared/autocomplit/autocomplit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/autocomplit/autocomplit.component.css")],
        host: {
            '(document:click)': 'onClick($event)',
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], AutocomplitComponent);

var _a;
//# sourceMappingURL=autocomplit.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/enums/enums.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaritalStatus; });
/* unused harmony export HMO */
/* unused harmony export privateInsurance */
/* unused harmony export typeOfPrivateInsurance */
var MaritalStatus;
(function (MaritalStatus) {
    MaritalStatus[MaritalStatus["Irrelevant"] = 8] = "Irrelevant";
    MaritalStatus[MaritalStatus["Single"] = 9] = "Single";
    MaritalStatus[MaritalStatus["Married"] = 10] = "Married";
    MaritalStatus[MaritalStatus["Divorced"] = 11] = "Divorced";
    MaritalStatus[MaritalStatus["Widowed"] = 12] = "Widowed";
    MaritalStatus[MaritalStatus["UnKnown"] = 13] = "UnKnown";
})(MaritalStatus || (MaritalStatus = {}));
var HMO;
(function (HMO) {
    HMO[HMO["Clalit"] = 16] = "Clalit";
    HMO[HMO["Macabi"] = 17] = "Macabi";
    HMO[HMO["Mehuchedet"] = 18] = "Mehuchedet";
    HMO[HMO["Leumit"] = 19] = "Leumit";
})(HMO || (HMO = {}));
var privateInsurance;
(function (privateInsurance) {
    privateInsurance[privateInsurance["Yes"] = 1] = "Yes";
    privateInsurance[privateInsurance["No"] = 2] = "No";
    privateInsurance[privateInsurance["unknown"] = 3] = "unknown";
})(privateInsurance || (privateInsurance = {}));
var typeOfPrivateInsurance;
(function (typeOfPrivateInsurance) {
    typeOfPrivateInsurance[typeOfPrivateInsurance["private"] = 1] = "private";
    typeOfPrivateInsurance[typeOfPrivateInsurance["collectiove"] = 2] = "collectiove";
    typeOfPrivateInsurance[typeOfPrivateInsurance["unknown"] = 3] = "unknown";
})(typeOfPrivateInsurance || (typeOfPrivateInsurance = {}));
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  .checked{\r\n    content: \"\\F046\";\r\n  }\r\n  input[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput[type=\"checkbox\"]:checked + label::before {\r\n    content: \"\\F046\";\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .contactUs {\r\n        width: 178px !important;\r\n        margin-left: 5% !important;\r\n    }\r\n    .wrapper-main{\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;-webkit-box-orient: horizontal;-webkit-box-direction: reverse;-ms-flex-direction: row-reverse;flex-direction: row-reverse;-ms-flex-wrap: wrap;flex-wrap: wrap;\r\n    }\r\n}\r\n@media (min-width: 1200px) and (min-width: 992px){\r\n    .row > div{\r\n        margin-left: 6%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- footer -->\n<!-- <footer class=\"container-fluid\">\n  <div class=\"col-md-12\">\n      <div class=\"row\" style=\"display: flex;justify-content: space-between;flex-direction: row-reverse;flex-wrap: wrap;\">\n          <div class=\"contactUs \">\n            <span class=\"limiter\"></span>\n            <h3>צור קשר</h3>\n            <ul class=\"noPadding\">\n              <li><a href=\"#\">צ'אט עם נציג</a></li>\n              <li><a href=\"#\">טופס פנייה</a></li>\n              <li><a href=\"#\">*4500</a></li>\n              <li>\n                <div class=\"col-xs-8 col-xs-push-2 col-md-12 col-md-push-1\">\n                  <a href=\"#\" class=\"social\">\n                    <img src=\"sample-images/youtube.png\" alt=\"youtube\" />\n                  </a>\n                  <a href=\"#\" class=\"social\">\n                    <img src=\"sample-images/facebook.png\" alt=\"facebook\" />\n                  </a>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <div class=\"footerCheckUp \">\n            <span class=\"limiter\"></span>\n            <h3 class=\"noPadding col-xs-10 col-xs-push-1 col-md-push-2\">\n              אבוד בעולם הביטוחי פיננסי\n              יש יותר מדי אפשרויות?\n            </h3>\n            <a class=\"btn col-xs-8 col-xs-push-2 col-md-10\">\n              <span>צ'קאפ - התחל בדיקה</span>\n            </a>\n          </div>\n          <div class=\"compareProduct \">\n            <span class=\"limiter\"></span>\n            <h3>השוואת מוצרים</h3>\n            <div class=\"row text-right\">\n              <ul class=\"col-xs-5 col-xs-push-1\">\n                <li class=\"compareTitle\"><a href=\"#\">חיים</a></li>\n                <li><a href=\"#\">ביטוח חיים</a></li>\n              </ul>\n              <ul class=\"col-xs-5 col-xs-push-1\">\n                <li class=\"compareTitle\"><a href=\"#\">חיים</a></li>\n                <li><a href=\"#\">ביטוח חיים</a></li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"newsLetter \">\n            <span class=\"limiter\"></span>\n            <h3>הניוזלטר שיחסוך לכם כסף</h3>\n            <form action=\"/\" method=\"post\" class=\"col-xs-10 col-xs-push-1 col-sm-12 col-sm-push-0\">\n              <div class=\"form-group\"> -->\n                <!--<input class=\"form-control text-right\" type=\"type\" name=\"name\" value=\"\" placeholder=\"שם פרטי ומשפחה\" />-->\n                <!-- <input class=\"form-control text-right\" type=\"email\" name=\"name\" value=\"\" placeholder='דוא\"ל' />\n      \n                \n                <div class=\"checkbox\">\n                    <input type=\"checkbox\" value=\"checkboxvalue\" id=\"footerCheckBox\" />\n                    <label class=\"checkbox-label  text-right col-xs-11\" for=\"footerCheckBox\">\n                      אישור קבלת חומר שיווקי\n                    </label>\n                </div>\n                <button class=\"btn\">\n                                  <span>\n                                      הרשמה\n                                  </span>\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n  </div>\n</footer> -->\n<footer class=\"container-fluid\">\n    <div class=\"row wrapper-main\" >\n        <div class=\"contactUs col-xs-12 col-md-3 col-lg-2\">\n            <span class=\"limiter\"></span>\n            <h3>צור קשר</h3>\n            <ul class=\"noPadding\">\n                <li><a href=\"#\">צ'אט עם נציג</a></li>\n                <li><a href=\"#\">טופס פנייה</a></li>\n                <li><a href=\"#\">*4500</a></li>\n                <li>\n                    <div class=\"col-xs-8 col-xs-push-2 col-md-12 col-md-push-1\">\n                        <a href=\"#\" class=\"social\">\n                            <img src=\"sample-images/youtube.png\" alt=\"youtube\" />\n                        </a>\n                        <a href=\"#\" class=\"social\">\n                            <img src=\"sample-images/facebook.png\" alt=\"facebook\" />\n                        </a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"footerCheckUp col-xs-12 col-md-3 col-lg-2\">\n            <span class=\"limiter\"></span>\n            <h3 class=\"noPadding col-xs-10 col-xs-push-1 col-md-push-2\">\n                אבוד בעולם הביטוחי פיננסי\n                יש יותר מדי אפשרויות?\n            </h3>\n            <a class=\"btn col-xs-8 col-xs-push-2 col-md-10\">\n                <span>צ'קאפ - התחל בדיקה</span>\n            </a>\n        </div>\n        <div class=\"compareProduct col-xs-12 col-md-3 col-lg-2\">\n            <span class=\"limiter\"></span>\n            <h3>השוואת מוצרים</h3>\n            <div class=\"row text-right\">\n                <ul class=\"col-xs-5 col-xs-push-1\">\n                    <li class=\"compareTitle\"><a href=\"#\">חיים</a></li>\n                    <li><a href=\"#\">ביטוח חיים</a></li>\n                </ul>\n                <ul class=\"col-xs-5 col-xs-push-1\">\n                    <li class=\"compareTitle\"><a href=\"#\">חיים</a></li>\n                    <li><a href=\"#\">ביטוח חיים</a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"newsLetter col-xs-12 col-md-3 col-lg-2\">\n            <span class=\"limiter\"></span>\n            <h3>הניוזלטר שיחסוך לכם כסף</h3>\n            <form action=\"/\" method=\"post\" class=\"col-xs-10 col-xs-push-1 col-sm-12 col-sm-push-0\">\n                <div class=\"form-group\">\n                    <!--<input class=\"form-control text-right\" type=\"type\" name=\"name\" value=\"\" placeholder=\"שם פרטי ומשפחה\" />-->\n                    <input class=\"form-control text-right\" type=\"email\" name=\"name\" value=\"\" placeholder='דוא\"ל' />\n\n                    \n                    <div class=\"checkbox\">\n                      <input type=\"checkbox\" value=\"checkboxvalue\" id=\"footerCheckBox\" />\n                      <label class=\"checkbox-label  text-right col-xs-11\" for=\"footerCheckBox\">\n                          אשר/ת שליחת מיסרונים על מבצעים חדשים\n                          לורם איפסום דולור סיט אמט\n                      </label>\n                    </div>\n                    <button class=\"btn col-xs-8 col-xs-push-2 col-md-4 col-md-push-8\">\n                        <span>\n                            הרשמה\n                        </span>\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"sr-only\">page title</h1>\n<a href=\"#main\" class=\"sr-only quick-link sr-only-focusable quick-link\">דלג אל תוכן האתר</a>\n<div class=\"menu-overlay\" style=\"display:none;\"></div>\n<!-- header -->\n<header>\n  <!-- Nav bar -->\n  <nav class=\"navbar navbar-default\">\n    <h2 class=\"sr-only\">ניווט ראשי</h2>\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" aria-controls=\"navbar\" data-toggle=\"collapse\" data-target=\"#navbar\"\n                aria-expanded=\"false\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"sr-only\">Toggle navigation</span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"images/logo.png\" alt=\"Wakeapp logo\" />\n        </a>\n      </div>\n      <div id=\"navbar\" class=\"navbar-offcanvas\">\n        <div class=\"offcanvas-wrapper\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active hidden-lg hidden\"><a href=\"javascript:login();\">כניסה לחשבונך</a></li>\n            <li class=\"active hidden-lg user-tab-wrapper\">\n              <span class=\"hello-user-name\">שלום אלכסנדר!</span>\n              <a href=\"#this\">אזור אישי</a>\n              <Span class=\"divider\"></Span>\n              <a href=\"#this\">התנתק</a>\n            </li>\n            <li><a  routerLink=\"/check-up\">צ'קאפ</a></li>\n            <li><a  routerLink=\"/risk\">ביטוח חיים</a></li>\n            <li><a  routerLink=\"/health\">ביטוח בריאות</a></li>\n            <li><a routerLink=\"/personal\">מחשבון אבדן כושר עבודה</a></li>\n            <li><a href=\"#\">ביטוח פיננסי</a></li>\n            <li><a href=\"#\">ביטוח פיננסי</a></li>\n            <li><a href=\"#\">אודות</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"navControls\">\n        <div class=\"navLogin hidden-xs hidden-sm ax-btn\">\n          <a (click)=\"showSMS()\">\n            <span class=\"user-icon\"></span>שלום, הולישיייייייייייייט\n          </a>\n          <span class=\"logout-button\"><a href=\"#this\">אזור אישי</a> <span class=\"divider\"></span> <a href=\"#this\">התנתק</a></span>\n        </div>\n        <div class=\"talk ax-btn\">\n          <a href=\"#\">\n            <span>דברו איתנו</span>\n          </a>\n        </div>\n        <div class=\"textSize\">\n          <a href=\"javascript:void(0);\" class=\"toggle-font-size\">\n                            <span class=\"sr-only\">\n                                שנה גודל פונט\n                            </span>\n          </a>\n        </div>\n        <div class=\"textContrast\">\n          <a href=\"javascript:void(0);\" class=\"toggle-contrast\">\n                            <span class=\"sr-only\">\n                                שנה ניגודיות צבעים\n                            </span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </nav>\n  <!-- End Nav bar -->\n  <!-- Login Form -->\n  <section>\n    <h3 class=\"sr-only\">טופס התחברות לאיזור האישי</h3>\n    <div id=\"login-form\">\n      <div class=\"login-head\">\n        <a href=\"javascript:void(0)\" class=\"login-btn-close\"><span class=\"sr-only\">סגור</span></a>\n        <h4 class=\"form-title\">התחברות</h4>\n      </div>\n      <form role=\"form\" action=\"#\" class=\"form-container login-step1\">\n        <fieldset>\n          <legend class=\"form-title\">\n            כניסה מהירה באמצעות SMS\n          </legend>\n          <div class=\"form-group\">\n                            <span class=\"validation-label field-validation-error\">\n                                אנא הזן מספר נייד\n                            </span>\n            <input id=\"login-phonenumber\" type=\"hidden\" value=\"050777777\" />\n            <label class=\"sr-only\" for=\"login-areacode\"></label>\n            <label class=\"sr-only\" for=\"login-phonenumber\"></label>\n            <div class=\"phone-control\" id=\"login-areacode\">\n              <select class=\"selectpicker\">\n                <option>050</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>5</option>\n              </select>\n              <input class=\"form-control\" id=\"login-phonenumber\" type=\"text\" name=\"phone\" dir=\"ltr\">\n            </div>\n          </div>\n          <div class=\"form-group seperator\">\n                            <span>\n                                או\n                            </span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"login-mail\">\n                                <span class=\"invalid-text\">\n                                    אנא\n                                </span>\n              הזן כתובת מייל\n            </label>\n            <input id=\"login-mail\" class=\"form-control\" type=\"email\" value=\"\" />\n          </div>\n          <div class=\"form-group wrapper\">\n            <div class=\"confirmBox noPadding\">\n\n\n              <div class=\"styled-checkbox-wrapper\">\n                <input class=\"styled-checkbox\" type=\"checkbox\" id=\"Login_IsBroker\" name=\"IsBroker\" value=\"true\" data-val=\"true\" data-val-required=\"The סוכן field is required.\">\n                <label for=\"Login_IsBroker\"> סוכן</label>\n                <input name=\"IsBroker\" type=\"hidden\" value=\"false\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-default btn-login center-block\">התחבר</button>\n          </div>\n          <!--<div class=\"form-group text-center\">\n<a class=\"login-register\" href=\"#\">לא רשום?</a>\n</div>-->\n        </fieldset>\n      </form>\n      <form role=\"form\" action=\"#\" class=\"form-container login-step2\" style=\"display:none\">\n        <fieldset>\n          <legend class=\"form-title\">\n            כניסה מהירה באמצעות SMS\n          </legend>\n          <div class=\"form-group text-center\">\n            <label for=\"login-code\">\n              אנא הזן את הקוד שקיבלת\n            </label>\n            <div>\n              <a href=\"#\" class=\"login-btn-resend\">שלח שוב</a>\n            </div>\n            <div class=\"login-code-control text-right\">\n                                <span class=\"field-validation-error\">\n                                    אנא הזן קוד תקין\n                                </span>\n              <input id=\"login-code\" class=\"form-control\" type=\"text\" value=\"\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-default btn-login center-block\">התחבר</button>\n          </div>\n          <!--<div class=\"form-group text-center\">\n              <a class=\"login-register\" href=\"#\">לא רשום?</a>\n          </div>-->\n        </fieldset>\n      </form>\n    </div>\n  </section>\n  <!-- /Login Form -->\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(storeService) {
        this.storeService = storeService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.showSMS = function () {
        this.storeService.headerEvent.emit("");
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/health.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Health; });
var Health = (function () {
    function Health() {
    }
    return Health;
}());

//# sourceMappingURL=health.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/risk.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Risk; });
var Risk = (function () {
    function Risk() {
    }
    return Risk;
}());

//# sourceMappingURL=risk.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreService = (function () {
    function StoreService() {
        this.headerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.store = {};
    }
    StoreService.prototype.getByKey = function (key) {
        return this.store[key];
    };
    StoreService.prototype.setByKey = function (key, value) {
        this.store[key] = value;
    };
    StoreService.prototype.refresh = function () {
        this.store = {};
    };
    return StoreService;
}());
StoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StoreService);

//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/birthdate/birthdate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/birthdate/birthdate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorHead col-xs-12 noPadding\">\n  <h2>השוואת הצעות לביטוח אובדן כושר עבודה</h2>\n  <p>\n    מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n  </p>\n  <span>יקח לך 2 דקות</span>\n</div>\n<div class=\"step_birthDate col-xs-12 noPadding\">\n  <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError && (!day || !month || !year)\">הודעת שגיאה</span>\n  <div class=\"birthDate center-block\">\n    <fieldset>\n      <legend class=\"sr-only\">###</legend>\n      <div class=\"noPadding\">\n        <span class=\"question-title\">תאריך לידה</span>\n        <div class=\"wrapper center-block\">\n          <div class=\"selectWrapper\"  style=\"width: 27%;height: 100%;\">\n            <div style=\"width: 100%;height: 100%;\">\n              <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n          <div class=\"selectWrapper\" style=\"width: 37%; margin-right:11px;height: 100%;\">\n            <div style=\"width: 100%;height: 100%;\">\n              <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n          <div class=\"selectWrapper\" style=\"width: 27%; margin-right:11px;height: 100%;\">\n            <div style=\"width: 100%;height: 100%;\">\n              <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n</div>\n<div class=\"calculatorControllsWrapper col-xs-12\">\n  <div class=\"calculatorControlls center-block\">\n    <a (click)=\"back()\" class=\"btn backBtn center-block\">\n      <span>&#60;חזור</span>\n    </a>\n    <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n      <span>המשך</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/birthdate/birthdate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BirthdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BirthdateComponent = (function () {
    function BirthdateComponent() {
        this.yearsData = [];
        this.monthData = [
            {
                label: "1",
                value: "1"
            },
            {
                label: "2",
                value: "2"
            },
            {
                label: "3",
                value: "3"
            },
        ];
        this.daysData = [];
        this.day = "1";
        this.month = "1";
        this.year = "1925";
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setYear();
        this.setDays();
    }
    BirthdateComponent.prototype.ngOnInit = function () {
    };
    BirthdateComponent.prototype.setDays = function () {
        for (var i = 1; i <= 31; i++) {
            this.daysData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    BirthdateComponent.prototype.setYear = function () {
        for (var i = 1925; i <= 2018; i++) {
            this.yearsData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    BirthdateComponent.prototype.daysChange = function (e) {
        this.day = e;
    };
    BirthdateComponent.prototype.monthChange = function (e) {
        this.month = e;
    };
    BirthdateComponent.prototype.yearsChange = function (e) {
        console.log(e, 2323);
        this.year = e;
    };
    BirthdateComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'genderselect'
        }));
    };
    BirthdateComponent.prototype.save = function () {
        if (!this.year ||
            !this.month ||
            !this.year) {
            this.showError = true;
        }
        else {
            this.next.emit(({
                naxtPage: 'smoking',
                model: this.day + '-' + this.month + '-' + this.year,
                type: "birthdate"
            }));
        }
    };
    return BirthdateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BirthdateComponent.prototype, "next", void 0);
BirthdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-birthdate',
        template: __webpack_require__("../../../../../src/app/wizard/birthdate/birthdate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/birthdate/birthdate.component.css")],
    }),
    __metadata("design:paramtypes", [])
], BirthdateComponent);

//# sourceMappingURL=birthdate.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorSidePanel\" style=\"height: unset !important;top: 0;\">\n  <ul>\n    <li class=\"personalDetails\" *ngIf=\"options && options.lastName\">\n      <span>{{options.lastName}} {{options.privateName}}</span>\n      <img src=\"sample-images/calculator/cal_person_details.png\" alt=\"###\" />\n    </li>\n    <li class=\"gender\" *ngIf=\"options && options.gender\">\n      <span>גבר</span>\n      <img *ngIf=\"options.gender === 'male'\" src=\"sample-images/calculator/cal_man.png\" alt=\"###\" />\n      <img *ngIf=\"options.gender === 'female'\" src=\"sample-images/calculator/cal_woman.png\" alt=\"###\" />\n    </li>\n    <li class=\"bDate\" *ngIf=\"options && options.birthDate\">\n      <span>{{options.birthDate}}</span>\n      <img src=\"sample-images/calculator/cal_b_day.png\" alt=\"###\" />\n    </li>\n    <li class=\"smoking\" *ngIf=\"options && (options.doesSmoke || options.doesSmoke === false)\">\n      <span>לא מעשן</span>\n      <img *ngIf=\"options.doesSmoke\" src=\"sample-images/calculator/cal_smoke_yes.png\" alt=\"###\" />\n      <img *ngIf=\"!options.doesSmoke\" src=\"sample-images/calculator/cal_smoke_no.png\" alt=\"###\" />\n    </li>\n\n    <!--<li class=\"personalDetails\" *ngIf=\"options && options.lastName\">-->\n      <!--<span>{{options.lastName}} {{options.privateName}}</span>-->\n      <!--<img src=\"sample-images/calculator/cal_person_details.png\" alt=\"###\" />-->\n    <!--</li>-->\n\n    <!--<li class=\"currency\">-->\n      <!--<span>1,000,000</span>-->\n      <!--<img src=\"sample-images/calculator/cal_nis.png\" alt=\"###\" />-->\n    <!--</li>-->\n\n    <!--<li class=\"insurance\">-->\n      <!--<span>יש לי ביטוח חיים</span>-->\n      <!--<img src=\"sample-images/calculator/cal_insurance_yes.png\" alt=\"###\" />-->\n    <!--</li>-->\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorSidePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorSidePanelComponent = (function () {
    function CalculatorSidePanelComponent() {
    }
    CalculatorSidePanelComponent.prototype.ngOnInit = function () {
    };
    return CalculatorSidePanelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CalculatorSidePanelComponent.prototype, "options", void 0);
CalculatorSidePanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-calculator-side-panel',
        template: __webpack_require__("../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorSidePanelComponent);

//# sourceMappingURL=calculator-side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.modal{\r\n    overflow: visible;\r\n    position: absolute;\r\n    top: -100px;\r\n}\r\n.fade{\r\n    display: block;\r\n    opacity: 1;\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -350px;\r\n    top: 30px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.out-wrap{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #0000007a;\r\n    position: fixed;\r\n    right: 0;\r\n    overflow: hidden;\r\n    z-index: 22222222222222;\r\n    top: 0;\r\n    overflow-y: auto;\r\n}\r\n.out-wrap::-webkit-scrollbar-thumb{\r\n    height: 0 !important;\r\n  }\r\n  .out-wrap::-webkit-scrollbar-track\r\n  {\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n  .out-wrap::-webkit-scrollbar\r\n  {\r\n    width: 4px;\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n  .out-wrap::-webkit-scrollbar-thumb\r\n  {\r\n    background-color: rgb(175, 150, 150);\r\n    border: 1px solid rgb(232, 232, 232);\r\n    border-radius: 1px;\r\n    height: 2px;\r\n    margin: 3px;\r\n  }\r\n  .modal-dialog{\r\n    margin-top: 0;\r\n  }\r\n.modal-header{\r\n    height: 90px;\r\n    width: 100%;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 100;\r\n    padding: 0;\r\n    background-color: transparent !important;\r\n    background-color: #e3f1f4;\r\n    \r\n}\r\n.close{\r\n    color: #5f5f5f;\r\n    opacity: 1;\r\n    width: 21px;\r\n    height: 21px;\r\n    position: absolute;\r\n    left: 38px;\r\n    top: 38px\r\n}\r\n.close > span{\r\n    font-size: 37px;\r\n    line-height: 1;\r\n    top: -5px;\r\n    position: relative;\r\n\r\n}\r\n.title{\r\n    background-color: #e3f1f4;\r\n    height: 90px;\r\n}\r\n.title > img{\r\n    width: 31px;\r\n    max-width: 31px;\r\n    height: 43px;\r\n    max-height: 43px;\r\n    margin: 1.25rem 2.5rem 0 1.25rem;\r\n    float: right;\r\n}\r\n.title > h3{\r\n    font-size: 2.85714em;\r\n    line-height: 40px;\r\n    text-align: right;\r\n    padding: 1.5625rem 0;\r\n    white-space: nowrap;\r\n}\r\n.hasSmoked-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.modalStatus{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\ninput[type=\"radio\"] {\r\n    display:none;\r\n}\r\n\r\ninput[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n    width: 20%;\r\n    border: 1px solid #117ef5;\r\n    padding: 0 2rem;\r\n    font-size: 1.57143em;\r\n    line-height: 22px;\r\n    background:white;\r\n    cursor:pointer;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\ninput[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n   \r\n    \r\n    vertical-align:middle;\r\n    \r\n   \r\n    \r\n    text-align: center;\r\n    color: #626262;\r\n    padding-top: 8px;\r\n    height: 43px;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n    border: 2px solid #707070 !important;\r\n}\r\n.wrapper-birthd {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 74%;\r\n    margin-right: 0;\r\n}\r\ndiv.wrapper-birthd > div > div > app-autocomplit > div > button{\r\n    height: 40px !important;\r\n    border-radius: 5px !important;\r\n}\r\n.lable-top{\r\n    font-size: 1.71429em;\r\n    text-align: right;\r\n    padding: 0.75rem 0;\r\n    color: #333;\r\n    position: absolute;\r\n    top: -44px;\r\n}\r\n.lable-bot{\r\n    color: #f53011;\r\n    padding: 2px !important;\r\n    font-size: 1.42857em;\r\n    text-align: right;\r\n}\r\n.childGender {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n/* div.childGender.col-md-4.col-xs-12.noPadding.pull-right > div.hasSmoked-input > label > span{\r\n    width: 64px;\r\n    height: 40px;\r\n} */\r\n.numberOfKids{\r\n    width: 69px;\r\n    height: 43px;\r\n    font-size: 1.71429em;\r\n    border: 1px solid #117ef5 !important;\r\n    border-radius: 5px;\r\n}\r\n.input-wrapper{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n.input-wrapper > input{\r\n    padding-right: 5px;\r\n}\r\n.calculatorControlls{\r\n    position: relative;\r\n}\r\n div.modal-footer > div > div > a{\r\n    position: absolute;\r\n    left: 50%;\r\n    top: -35px;\r\n    margin-left: -51px;\r\n    color: white;\r\n }\r\n div.modal-footer > div > div > a > span{\r\n    color: white;\r\n    font-size: 2.14286em;\r\n    text-decoration: none;\r\n    font-weight: 300;\r\n    padding-top: 7px;\r\n    display: block;\r\n }\r\n .modal-footer{\r\n     border: none;\r\n }\r\n /* div.childGender.col-md-4.col-xs-12.noPadding.pull-right > div.hasSmoked-input > label:nth-child(4) > span{\r\n    position: relative;\r\n    left: -30px;\r\n } */\r\n .selectWrapper > div{\r\n    height: 40px;\r\n }\r\n@media (min-width: 992px){\r\n    .modal-dialog{\r\n        width: 700px;\r\n    }\r\n    .child {\r\n        margin-bottom: 24px;\r\n    }\r\n    .input-wrapper{\r\n        margin-bottom: 37px;\r\n    }\r\n    .form-group{\r\n        margin-bottom: 49px;\r\n    }\r\n    .modalSectionTitle{\r\n        font-size: 1.71429em;\r\n        float: right;\r\n        text-align: center;\r\n        margin-left: 38px;\r\n        padding: 0.75rem 0;\r\n        display: block;\r\n        line-height: 17px;\r\n    }\r\n    div.modalKids.noPadding.clearfix > span{\r\n        margin-left: 111px;\r\n    }\r\n    .numberOfKids{\r\n        position: relative;\r\n        left: 13px;\r\n    }\r\n \r\n    \r\n}\r\n@media (max-width: 992px){\r\n\r\n    .modal-dialog{\r\n        width: 100%;\r\n    }\r\n    .fade{\r\n        width: 100%;\r\n        left: unset;\r\n    }\r\n    .close{\r\n        right: 24px;\r\n        top: -53px;    \r\n    }\r\n    .modalStatus{\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: column;\r\n                flex-flow: column;\r\n        text-align: center;\r\n    }\r\n    .wrapper{\r\n        width: 100%;\r\n    } \r\n     input[type=\"radio\"] + label{\r\n        width: 20%;\r\n    }\r\n    input[type=\"radio\"] + label span {\r\n        width: 100%;\r\n        height: 60px;\r\n        padding-top: 17px;\r\n    }\r\n    .modalSectionTitle{\r\n        font-size: 2.42857em;\r\n        line-height: 34px;\r\n        margin-top: 0.5rem;\r\n        margin-bottom: 0.625rem;\r\n    }\r\n    .modalStatus{\r\n        text-align: center;\r\n    }\r\n    .modalKids {\r\n        text-align: center;\r\n    }\r\n    .input-wrapper{\r\n        position: relative;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n    .childGender {\r\n        position: relative;\r\n        left: -10%;\r\n    }\r\n    .childBDate {\r\n        position: relative;\r\n        left: -10%;\r\n    }\r\n    .childGender {\r\n        position: relative;\r\n        left: -10%;\r\n    }\r\n    .childBDate {\r\n        position: relative;\r\n        left: -10%;\r\n    }\r\n    div.modal-footer > div > div > a{\r\n        position: absolute;\r\n        left: 50%;\r\n        top: -35px;\r\n        margin-left: -113px;\r\n        color: white;\r\n        height: 60px;\r\n    }\r\n    .lable-top{\r\n        position: absolute;\r\n        top: -52px;\r\n }\r\n \r\n .wrapper-birthd{\r\n    width: 50%;\r\n }\r\n div.childGender.col-md-4.col-xs-12.noPadding.pull-right > div.hasSmoked-input > label{\r\n    width: 30%;\r\n }\r\n}\r\n@media (max-width: 991px) and (min-width: 768px){\r\n    div.childrenListWrapper.noPadding.col-md-12 > div> div.childGender.col-md-4.col-xs-12.noPadding.pull-right{\r\n        margin-top: 30px;\r\n        margin-bottom: 30px;\r\n     }\r\n    .modal-header{\r\n        margin-top: 90px;\r\n    }\r\n    .Close{\r\n        right: 20px;\r\n        top: -50px;\r\n    }\r\n    .title > h3{\r\n        text-align: center;\r\n        position: relative;\r\n        left: 40px;\r\n    }\r\n    div.childGender.col-md-4.col-xs-12.noPadding.pull-right > div.hasSmoked-input > label{\r\n        width: 165px;\r\n    }\r\n    .selectWrapper > div{\r\n        height: 62px;\r\n     }\r\n     .numberOfKids{\r\n        height: 62px;\r\n        margin-bottom: 10px;\r\n     }\r\n     .lable-top{\r\n        margin-top: 10px;\r\n     }\r\n     userBox{\r\n        text-align: right;\r\n     }\r\n     div.input-wrapper > span{\r\n        left: 197px;\r\n     }\r\n     \r\n}\r\n@media (max-width: 768px){\r\n    input[type=\"radio\"] + label{\r\n        height: 40px;\r\n    }\r\n    .modal{\r\n        position: absolute;\r\n        top: 26px;\r\n    }\r\n    .title{\r\n        background-color: #e3f1f4;\r\n        height: 90px;\r\n    }\r\n    .title > img{\r\n        width: 31px;\r\n        max-width: 31px;\r\n        height: 43px;\r\n        max-height: 43px;\r\n        margin: 1.25rem 2.5rem 0 1.25rem;\r\n        float: right;\r\n    }\r\n    .title > h3{\r\n        font-size: 2.85714em;\r\n        line-height: 40px;\r\n        text-align: right;\r\n        padding: 1.5625rem 0;\r\n        white-space: nowrap;\r\n    }\r\n    .modal-header{\r\n        margin-top: 46px;\r\n    }\r\n    .close{\r\n        top: -30px;\r\n    }\r\n    .modalSectionTitle{\r\n        font-size: 1.21429em;\r\n        display: block;\r\n        text-align: center;\r\n        line-height: 17px;\r\n        margin-top: 0.5rem;\r\n        margin-bottom: 0.3125rem;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        font-size: 1.14286em;\r\n    }\r\n    .numberOfKids{\r\n        width: 45px;\r\n        height: 39px;\r\n        font-size: 1.5em;\r\n        text-align: center;\r\n        background-color: transparent;\r\n        border: 1px solid #8bbef6;\r\n        border-radius: 5px;\r\n        display: block;\r\n    }\r\n    .lable-top{\r\n        font-size: 1.21429em;\r\n        display: block;\r\n        line-height: 17px;\r\n        margin-top: 0.5rem;\r\n        margin-bottom: 0.3125rem;\r\n        position: unset;\r\n        padding: 0;\r\n        text-align: center\r\n    }\r\n    .lable-bot{\r\n        font-size: 1.21429em;\r\n        display: block;\r\n        line-height: 17px;\r\n        margin-top: 0.5rem;\r\n        margin-bottom: 0.3125rem;\r\n    }\r\n    .childGender {\r\n        position: relative;\r\n        left: -30%;\r\n    }\r\n    div.modalStatus.noPadding.clearfix > div > fieldset > div > span{\r\n        text-align: center;\r\n    }\r\n   \r\n    .form-group{\r\n        margin-bottom: 0;\r\n    }\r\n    div > div.lable-bot{\r\n        position: unset;\r\n        text-align: center;\r\n    }\r\n    div.childGender.col-md-4.col-xs-12.noPadding.pull-right > div.lable-bot{\r\n        position: unset;\r\n        text-align: center;\r\n    }\r\n    div.childBDate.col-md-8.col-xs-12.noPadding > div.lable-top{\r\n        position: unset;\r\n        text-align: center;\r\n    }\r\n    div.modal-footer > div > div > a{\r\n        margin-left: -46px;\r\n    }\r\n    div.modal-footer > div > div > a > span{\r\n         padding-top: 0px;\r\n    }\r\n    div.modal-footer > div > div > a {\r\n        height: 40px;\r\n        position: absolute;\r\n        left: 50%;\r\n        margin-left: -67px;\r\n    }\r\n    div.input-wrapper > span{\r\n        position: unset;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        padding: 0 0rem;\r\n    }\r\n    .title > h3{\r\n        font-size: calc(6px + 4vw);\r\n        line-height: 40px;\r\n        text-align: right; \r\n        padding: 1.5625rem 0; \r\n        white-space: wrap;\r\n        text-align: center;\r\n        position: relative;\r\n        left: 33px\r\n    }\r\n    .input-wrapper{\r\n        position: unset;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n    div.input-wrapper > span{\r\n        position: relative;\r\n        top: 2px !important;\r\n        left: 0 !important;\r\n        text-align: center;\r\n    }\r\n    .childGender{\r\n        position: unset;\r\n    }\r\n    .hasSmoked-input{\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n    .wrapper-birthd{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        margin-right: 0;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        width: 100%;\r\n    }\r\n    div.wrapper-birthd.center-block > div{\r\n       width: 70px !important;\r\n    }\r\n    .modalControllsWrapper{\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n    .childBDate{\r\n        position: unset;\r\n    }\r\n    .modal-dialog{\r\n        margin: 0;\r\n    }\r\n    div.childrenListWrapper.noPadding.col-md-12 > div> div.childGender.col-md-4.col-xs-12.noPadding.pull-right{\r\n        margin-bottom: 25px;\r\n     }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- modal -->\n<div class=\"out-wrap\">\n    <div class=\"fade\" style=\"display:block;opacity: 1;\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <!-- modal head -->\n            <div class=\"modal-header\">\n                <div class=\"title\">\n                    <img src=\"sample-images/calculator/calculator.png\" alt=\"calc\" />\n                    <h3>חישוב סכום כיסוי לביטוח</h3>\n                </div>\n              <button type=\"button\" class=\"close\" (click)=\"closeClick()\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n\n              <!--<h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>-->\n            </div>\n            <!-- modal body -->\n            <div class=\"modal-body\">\n\n\n              <div class=\"modalForm\">\n                <form class=\"\" action=\"/\" method=\"post\">\n                  <div class=\"modalStatus noPadding clearfix\">\n                    <span class=\"modalSectionTitle\">מצב משפחתי:</span>\n                    <div class=\"wrapper\">\n                      <fieldset>\n                        <legend class=\"sr-only\"></legend>\n                        <div class=\"form-group userBox col-xs-12 noPadding\">\n                          <div class=\"statusForm\">\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio1\" name=\"status1\" value=\"1\" [(ngModel)]=\"raiodVa\"/>\n                                  <label for=\"radio1\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >רווק</span></label>\n                                  <input type=\"radio\" id=\"radio2\" name=\"status1\" value=\"2\" [(ngModel)]=\"raiodVa\"/>\n                                  <label for=\"radio2\" style=\"border-right:0px;\"><span >נשוי</span></label>\n                                  <input type=\"radio\" id=\"radio3\" name=\"status1\" value=\"3\" [(ngModel)]=\"raiodVa\"/>\n                                  <label for=\"radio3\" style=\"border-right:0px;\"><span >גרוש</span></label>\n                                  <input type=\"radio\" id=\"radio4\" name=\"status1\" value=\"4\" [(ngModel)]=\"raiodVa\"/>\n                                  <label for=\"radio4\" style=\"border-right:0px;\"><span >אלמן</span></label>\n                                  <input type=\"radio\" id=\"radio5\" name=\"status1\" value=\"5\" [(ngModel)]=\"raiodVa\"/>\n                                  <label for=\"radio5\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >אחר</span></label>\n                              </div>\n                            <!-- <label>\n                              רווק\n                              <input type=\"radio\" name=\"status1\" value=\"1\" />\n                            </label>\n                            <label>\n                              נשוי\n                              <input type=\"radio\" name=\"status1\" value=\"2\" />\n                            </label>\n                            <label>\n                              גרוש\n                              <input type=\"radio\" name=\"status1\" value=\"3\" />\n                            </label>\n                            <label>\n                              אלמן\n                              <input type=\"radio\" name=\"status1\" value=\"4\" />\n                            </label>\n                            <label>\n                              אחר\n                              <input type=\"radio\" name=\"status1\" value=\"5\" />\n                            </label> -->\n                          </div>\n                          <span class=\"field-validation-error lable-bot\" *ngIf=\"showError && !raiodVa\">אנא בחר ערך</span>\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n                  <div class=\"modalKids noPadding clearfix\">\n                    <span class=\"modalSectionTitle\">ילדים:</span>\n                    <fieldset class=\"userBox\">\n                      <legend class=\"sr-only\"></legend>\n                      <div class=\"input-wrapper\">\n                          <input class=\"numberOfKids\" type=\"number\" name=\"name\" [(ngModel)]=\"childrenCount\" (ngModelChange)=\"doChangeChildren($event)\" />\n                          <span class=\"field-validation-error lable-bot \" style=\"position: relative;top: 50px;left: 13px\" *ngIf=\"showError && !childrenCount && childrenCount !== 0\">אנא בחר ערך</span>\n                      </div>\n                      <div class=\"col-xs-12 no-padding\"></div>\n                      <div class=\"childrenListWrapper noPadding col-md-12\">\n                        <div *ngFor=\"let item of childrens;let i = index\" class=\"child row\" disabled>\n                          <div class=\"childGender col-md-4  col-xs-12 noPadding pull-right\">\n                              <div class=\"lable-top\">\n\n                                  ילד \n                              </div>\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio6{{i}}\" name=\"status{{i}}\" value=\"6\" [(ngModel)]=\"item.stat\"/>\n                                  <label for=\"radio6{{i}}\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >רווק</span></label>\n                                  <input type=\"radio\" id=\"radio7{{i}}\" name=\"status{{i}}\" value=\"7\" [(ngModel)]=\"item.stat\"/>\n                                  <label for=\"radio7{{i}}\" style=\"border-bottom-left-radius: 4px;border-right:0px;border-top-left-radius: 4px;\"><span >אחר</span></label>\n                              </div>\n                              <div class=\"lable-bot\" *ngIf=\"showError && !item.stat\">\n                                  אנא בחר ערך\n                              </div>\n                          </div>\n                          <div class=\"childBDate col-md-8 col-xs-12 noPadding\">\n                              <div class=\"lable-top\" *ngIf=\"showError\">\n\n                                  תאריך לידה\n                              </div>\n                              <div class=\"wrapper-birthd center-block\">\n                                  <div class=\"selectWrapper\"  style=\"width: 25%;\">\n                                    <div style=\"width: 100%;\">\n                                      <app-autocomplit [data]=\"daysData\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                  <div class=\"selectWrapper\" style=\"width: 35%; margin-right:11px\">\n                                    <div style=\"width: 100%;\">\n                                      <app-autocomplit [data]=\"monthData\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                  <div class=\"selectWrapper\" style=\"width: 35%; margin-right:11px;\">\n                                    <div style=\"width: 100%;\">\n                                      <app-autocomplit [data]=\"yearsData\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                </div>\n                                <!--<div class=\"lable-bot\" *ngIf=\"showError\">-->\n                                    <!--אנא בחר ערך-->\n                                <!--</div>-->\n                          </div>\n                        </div>\n\n                      </div>\n                      <!--<div class=\"kidsAge\">\n                          <div class=\"childBox\">\n                              <label>גיל:</label>\n                              <input type=\"text\" name=\"name\" value=\"\" />\n                          </div>\n                          <div class=\"childBox\">\n                              <label>גיל:</label>\n                              <input type=\"text\" name=\"name\" value=\"\" />\n                          </div>\n                          <div class=\"childBox\">\n                              <label>גיל:</label>\n                              <input type=\"text\" name=\"name\" value=\"\" />\n                          </div>\n                      </div>-->\n                    </fieldset>\n                  </div>\n                  <!--<div class=\"modalSalary noPadding clearfix\">\n                      <span class=\"modalSectionTitle\">שכר:</span>\n                      <div class=\"wrapper\">\n                          <fieldset>\n                              <legend class=\"sr-only\"></legend>\n                              <div class=\"selectWrapper userBox noPadding col-xs-12\">\n                                  <select class=\"selectpicker\">\n                                      <option>בחר שכר</option>\n                                      <option>2</option>\n                                      <option>3</option>\n                                      <option>4</option>\n                                      <option>5</option>\n                                  </select>\n                              </div>\n                          </fieldset>\n                      </div>\n                      <div class=\"col-xs-12 no-padding\"><span class=\"field-validation-error \">אנא בחר ערך</span></div>\n\n                  </div>-->\n                  <!--<div class=\"modalClinic noPadding clearfix\">\n                      <span class=\"modalSectionTitle\">קופת חולים:</span>\n                      <div class=\"wrapper\">\n                          <fieldset>\n                              <legend class=\"sr-only\"></legend>\n                              <div class=\"form-group userBox col-xs-12 noPadding\">\n                                  <div class=\"clinicForm\">\n                                      <label>\n                                          מאוחדת\n                                          <input type=\"radio\" name=\"status1\" value=\"1\" />\n                                      </label>\n                                      <label>\n                                          כללית\n                                          <input type=\"radio\" name=\"status1\" value=\"2\" />\n                                      </label>\n                                      <label>\n                                          מכבי\n                                          <input type=\"radio\" name=\"status1\" value=\"3\" />\n                                      </label>\n                                      <label>\n                                          לאומית\n                                          <input type=\"radio\" name=\"status1\" value=\"4\" />\n                                      </label>\n                                      <label>\n                                          אחר\n                                          <input type=\"radio\" name=\"status1\" value=\"5\" />\n                                      </label>\n                                  </div>\n                              </div>\n                          </fieldset>\n                      </div>\n                      <div class=\"col-xs-12 no-padding\"><span class=\"field-validation-error \">אנא בחר ערך</span></div>\n                  </div>-->\n                </form>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"modalControllsWrapper col-xs-12\">\n                <div class=\"calculatorControlls center-block\">\n                  <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n                    <span>המשך</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- modal end -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorsummaryModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorsummaryModalComponent = (function () {
    function CalculatorsummaryModalComponent() {
        this.yearsData = [];
        this.monthData = [
            {
                label: "1",
                value: "1"
            },
            {
                label: "2",
                value: "2"
            },
            {
                label: "3",
                value: "3"
            },
        ];
        this.daysData = [];
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.childrens = [];
        this.childrenCount = 0;
        this.setYear();
        this.setDays();
    }
    CalculatorsummaryModalComponent.prototype.ngOnInit = function () {
    };
    CalculatorsummaryModalComponent.prototype.setDays = function () {
        for (var i = 1; i <= 31; i++) {
            this.daysData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    CalculatorsummaryModalComponent.prototype.setYear = function () {
        for (var i = 1925; i <= 2018; i++) {
            this.yearsData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    CalculatorsummaryModalComponent.prototype.doChangeChildren = function () {
        this.childrens = [];
        for (var i = 0; i < this.childrenCount; i++) {
            this.childrens.push({ stat: "" });
        }
    };
    CalculatorsummaryModalComponent.prototype.closeClick = function () {
        this.close.emit("");
    };
    CalculatorsummaryModalComponent.prototype.save = function () {
        if (!this.raiodVa) {
            this.showError = true;
        }
        else {
            this.close.emit("");
        }
    };
    return CalculatorsummaryModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CalculatorsummaryModalComponent.prototype, "close", void 0);
CalculatorsummaryModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-calculatorsummary-modal',
        template: __webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorsummaryModalComponent);

//# sourceMappingURL=calculatorsummary-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorHead col-xs-12 noPadding\">\n  <h2>השאוות הצעות לביטוח חיים</h2>\n  <p>\n    מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n  </p>\n  <span>יקח לך 2 דקות</span>\n</div>\n<div class=\"step_calculatorSummary col-xs-12 noPadding\">\n  <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError && !amount\">הודעת שגיאה</span>\n  <div class=\"calculatorSummary col-xs-10 col-xs-push-1 noPadding\">\n    <p class=\"summaryTitle text-center\">סכום הביטוח שיספק לך לחיים מאושרים</p>\n    <div class=\"calculate\">\n      <fieldset class=\"calculateWrapper center-block\">\n        <legend class=\"sr-only\">###</legend>\n        <a (click)=\"showCalculator = true\" class=\"\" type=\"button\" data-toggle=\"modal\" data-target=\"#needs-modal\">\n          <img src=\"sample-images/calculator/calculator.png\" alt=\"calc\" />\n          <span>חשב מחדש</span>\n        </a>\n\n        <div class=\"inputWrapper\">\n          <input [(ngModel)]=\"amount\" id=\"aaa\" class=\"form-control\" type=\"number\" name=\"calculate\" placeholder=\"\" />\n          <span class=\"nisIcon\"></span>\n        </div>\n      </fieldset>\n    </div>\n  </div>\n\n</div>\n<div class=\"calculatorControllsWrapper col-xs-12\">\n  <div class=\"calculatorControlls center-block\">\n    <a (click)=\"back()\" class=\"btn backBtn center-block\">\n      <span>&#60;חזור</span>\n    </a>\n    <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n      <span>הבא</span>\n    </a>\n  </div>\n</div>\n<div class=\"modalka\">\n  <app-calculatorsummary-modal *ngIf=\"showCalculator\" (close)=\"showCalculator = false\" style=\"transition: 3s;\"></app-calculatorsummary-modal>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorsummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorsummaryComponent = (function () {
    function CalculatorsummaryComponent() {
        this.amount = 0;
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalculatorsummaryComponent.prototype.ngOnInit = function () {
    };
    CalculatorsummaryComponent.prototype.save = function () {
        this.next.emit(({
            finish: true,
            amount: this.amount
        }));
    };
    CalculatorsummaryComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'profession'
        }));
    };
    return CalculatorsummaryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CalculatorsummaryComponent.prototype, "next", void 0);
CalculatorsummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-calculatorsummary',
        template: __webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorsummaryComponent);

//# sourceMappingURL=calculatorsummary.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t1-s1/checkup-t1-s1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected > span{ \r\n   color:  white !important;\r\n}\r\n\r\n.hasSmoked-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.modalStatus{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] {\r\n    display:none;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n    width: 20%;\r\n    border: 1px solid #117ef5;\r\n    padding: 0 1.9rem;\r\n    line-height: 22px;\r\n    background:#f7f7f7;;\r\n    cursor:pointer;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 40px;    \r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n    vertical-align:middle;\r\n    text-align: center;\r\n    color: #626262;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label > span{\r\n    color: white;\r\n}\r\n.center-block{\r\n    height: 40px;\r\n}\r\n/* .smoke-input{\r\n    display: flex;\r\njustify-content: center;\r\n} */\r\n.smoke-input > input[type=\"radio\"] + label {\r\n    border: 1px solid #117ef5;\r\n    width: 30%;\r\n}\r\n.intut-wrapper-inside > input[type=\"radio\"] + label {\r\n    border: 1px solid #117ef5;\r\n}\r\n.smole-buttons > input[type=\"radio\"] + label {\r\n    padding: 0 24px;\r\n}\r\n.field-validation-error{\r\n    margin-top: 2px !important;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label:focus{\r\n    outline: 2px solid #707070 !important;\r\n    outline-offset: -2px !important;\r\n}\r\n.subject{\r\n    font-size: 1.78571em;\r\n}\r\n.medium2{\r\n    width: 100%;\r\n    max-width: 130px;\r\n    height: 43px;\r\n    font-size: 1.64286em;\r\n    border: 1px #117ef5 solid;\r\n    background-color: transparent;\r\n    border-radius: 4px;\r\n    text-align: right;\r\n    padding-right: 10px;\r\n    color: #626262;\r\n}\r\n@media (min-width: 992px){\r\n    .field-validation-error{\r\n        bottom: -20px !important;\r\n    }\r\n    .input-wrap-top, .input-wrap-bot{\r\n        padding-right: 0;\r\n    }\r\n}\r\n@media (max-width: 992px){\r\n    .checkup-error-position {\r\n        text-align: center !important;\r\n    }\r\n    .input-wrap-top, .input-wrap-bot{\r\n        padding-right: 0;\r\n    }\r\n    .childGenderForm{\r\n        height: 40px !important;\r\n    }\r\n    .statusForm{\r\n        height: 40px !important;\r\n    }\r\n}\r\n@media (max-width: 570px){\r\n    .hasSmoked-input > input[type=\"radio\"] + label {\r\n        padding: 0 1rem;  \r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t1-s1/checkup-t1-s1.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"checkUp\">\n      <div class=\"checkUpHead col-xs-12 col-md-6 col-md-push-3\">\n        <h2>מילוי שאלון צ'קאפ לצורך קבלת תמונת מצב של העולם הפיננסי שלך</h2>\n        <p>\n          מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n        </p>\n        <span>זה יקח כמה דקות, אבל זה חד פעמי</span>\n      </div>\n\n      <div class=\"checkUpProgressBar col-xs-12 col-md-10 col-md-push-1\" role=\"tablist\">\n        <div class=\"wrapper center-block\">\n          <div class=\"personal col-xs-4 col-md-2 noPadding currentState\" role=\"presentation\">\n            <span class=\"tab-title\">פרטים אישיים</span>\n          </div>\n          <div class=\"overview col-xs-4 col-md-2 noPadding\" role=\"presentation\">\n            <span class=\"tab-title\">תמונת מצב</span>\n          </div>\n          <div class=\"optional col-xs-4 col-md-2 noPadding\" role=\"presentation\">\n            <span class=\"tab-title\">שאלות משלימות</span>\n            <span class=\"optionalTitle\">אופציונלי</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"checkUpForm tab-content col-xs-12\">\n\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"personalData\">\n          <h3 class=\"sr-only\">פרטים אישיים</h3>\n          <div class=\"peronalPager\">\n            <div class=\"wrapper center-block\">\n              <span class=\"active\"></span>\n              <span></span>\n            </div>\n          </div>\n          <div class=\"personalDataForm\">\n            <div class=\"step1\">\n              <div class=\"genderSelect\">\n                <input type=\"hidden\" name=\"gender\" id=\"hdnGender\" value=\"\" />\n                <div class=\"male\" (click)=\"obj.gender= 'male'\" [ngClass]=\"{'active-male selected': obj.gender === 'male'}\" role=\"button\" data-value=\"0\" tabindex=\"0\">\n                  <span>גבר</span>\n                </div>\n                <div class=\"female\" (click)=\"obj.gender= 'female'\" [ngClass]=\"{'active-female selected': obj.gender === 'female'}\" role=\"button\" data-value=\"1\" tabindex=\"0\">\n                  <span>אישה</span>\n                </div>\n                <span class=\"pull-right field-validation-error small\" *ngIf=\"showError && !obj.gender\">\n                                        <span>\n                                            אנא בחר ערך\n                                        </span>\n                                    </span>\n              </div>\n              <div class=\"personalDetails formAreaBox\">\n                <form role=\"form\" action=\"#\" method=\"post\">\n                  <div class=\"topSectionWrapper\">\n                    <fieldset>\n                      <legend class=\"sr-only\">###</legend>\n                      <div class=\"birthDate formSection noPadding col-md-4\">\n                        <span>תאריך לידה</span>\n                        <div class=\"wrapper\">\n                                <div class=\"wrapper center-block button-checkup-top\" id=\"button-helth-top\">\n                                    <div class=\"selectWrapper\"  style=\"width: 21%;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                    <div class=\"selectWrapper\" style=\"width: 28%;;margin-right: 2px;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                    <div class=\"selectWrapper\" style=\"width: 28%;margin-right: 3px;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                  </div>\n\n                          <div class=\"visible-xs visible-sm hidden-md\"></div>\n                          <!--<div class=\"col-md-12 no-padding\"><span class=\"field-validation-error small\">אנא בחר ערך</span></div>-->\n                        </div>\n                      </div>\n                      <div class=\"status formSection noPadding col-md-8\">\n                        <span>מצב משפחתי:</span>\n                        <div class=\"wrapper\">\n                          <div class=\"form-group col-xs-12 noPadding\">\n                            <div class=\"statusForm\">\n                                <div class=\"hasSmoked-input intut-wrapper-inside\">\n                                  <input type=\"radio\" id=\"radio1\" name=\"chose\" value=\"9\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                                  <label for=\"radio1\" style=\"border-bottom-right-radius: 17px;border-top-right-radius: 17px;\"><span >רווק</span></label>\n                                  <input type=\"radio\" id=\"radio2\" name=\"chose\" value=\"10\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                                  <label for=\"radio2\" style=\"border-right:0px;\"><span >נשוי</span></label>\n                                  <input type=\"radio\" id=\"radio3\" name=\"chose\" value=\"11\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                                  <label for=\"radio3\" style=\"border-right:0px;\"><span >גרוש</span></label>\n                                  <input type=\"radio\" id=\"radio4\" name=\"chose\" value=\"12\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                                  <label for=\"radio4\" style=\"border-right:0px;\"><span >אלמן</span></label>\n                                  <input type=\"radio\" id=\"radio5\" name=\"chose\" value=\"13\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                                  <label for=\"radio5\" style=\"border-right:0px;border-bottom-left-radius: 17px;border-top-left-radius: 17px;\"><span >אחר</span></label>\n                                  </div>\n\n                            </div>\n                            <span class=\"field-validation-error small\" *ngIf=\"!obj.raiodMaritalStatus && showError\">אנא בחר ערך</span>\n                          </div>\n                        </div>\n                      </div>\n                    </fieldset>\n                  </div>\n                  <div class=\"children formSection\">\n                    <fieldset>\n                      <legend class=\"sr-only\">###</legend>\n                      <div class=\"wrapper\">\n                        <div class=\"childrenAmountWrapper noPadding col-md-2\">\n                          <span class=\"childrenTitle\">ילדים:</span>\n                          <input class=\"form-control childAmount\" type=\"text\" name=\"childAmount\" placeholder=\"0\"  [(ngModel)]=\"obj.childAmount\" (ngModelChange)=\"doChangeChildren($event)\">\n                        </div>\n\n                        <div class=\"childrenListWrapper noPadding col-md-10\">\n                          <div class=\"child row\" *ngFor=\"let child of obj.childrens; let i = index\">\n                              <div class=\"col-md-3 col-xs-12 pull-right input-wrap-top\">\n                                  <label class=\"subject\">בן/בת {{i + 1}}</label>\n                                  <div class=\"form-group\" style=\"margin-bottom:0;\">\n                                    <input type=\"text\" name=\"childname1\" value=\"שם\" class=\"medium2\" [(ngModel)]=\"child.name\"/>\n                                  </div>\n                                  <!-- <span class=\"field-validation-error small\" *ngIf=\"!obj.wifeName && showError\">שדה שם פרטי הוא שדה חובה</span> -->\n                                  <span class=\"field-validation-error small\" *ngIf=\"showError && !child.name\">אנא בחר ערך</span>\n                                </div>\n                            <div class=\"childGender col-md-3 col-xs-4 noPadding pull-right\">\n                              <span>ילד </span>\n                              <div class=\"form-group\">\n                                <div class=\"childGenderForm\">\n                                    <div class=\"hasSmoked-input intut-wrapper-inside\">\n                                      <input type=\"radio\" id=\"radio18{{i}}\" name=\"status{{i}}\" value=\"18\" [(ngModel)]=\"child.radio\"/>\n                                      <label for=\"radio18{{i}}\" style=\"border-bottom-right-radius: 4px;\n                                    border-top-right-radius: 4px;\"><span >זכר</span></label>\n                                      <input type=\"radio\" id=\"radio19{{i}}\" name=\"status{{i}}\" value=\"19\" [(ngModel)]=\"child.radio\"/>\n                                      <label for=\"radio19{{i}}\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >נקבה</span></label>\n                                      </div>\n                                </div>\n                                <span class=\"field-validation-error small\" *ngIf=\"showError && !child.radio\">אנא בחר ערך</span>\n                              </div>\n                            </div>\n                            <div class=\"childBDate col-xs-12 col-md-6 noPadding\">\n                              <span>תאריך לידה</span>\n                              <div class=\"clearfix\">\n                                <div class=\"childBDateForm\">\n                                    <div class=\"wrapper center-block button-checkup-top\" id=\"button-helth-top\">\n                                      <div class=\"selectWrapper\"  style=\"width: 19%;height: 100%;\">\n                                        <div style=\"width: 100%;height: 100%;\">\n                                          <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                                        </div>\n                                      </div>\n                                      <div class=\"selectWrapper\" style=\"width: 38%;margin-right: 2px;height: 100%;\">\n                                        <div style=\"width: 100%;height: 100%;\">\n                                          <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                                        </div>\n                                      </div>\n                                      <div class=\"selectWrapper\" style=\"width: 27%;margin-right: 3px;height: 100%;\">\n                                        <div style=\"width: 100%;height: 100%;\">\n                                          <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                                        </div>\n                                      </div>\n                                      </div>\n\n                                </div>\n                              </div>\n                              <!--<span class=\"field-validation-error small\">אנא בחר ערך</span>-->\n                            </div>\n                          </div>\n\n                        </div>\n                      </div>\n\n                    </fieldset>\n                  </div>\n                </form>\n              </div>\n              <div class=\"checkUpControlls center-block\">\n                <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n                  <span>הבא</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"overviewData\">\n\n        </div>\n\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"optionalData\">\n\n        </div>\n      </div>\n      <div class=\"checkUpSecurityInfo col-xs-12\">\n        <p>אבטחת מידע: כל המידע במערכת מועבר באופן מוצפן ובסטנדרט SSL, המוביל בתחום אבטחת הנתונים הפיננסיים בעולם</p>\n      </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t1-s1/checkup-t1-s1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckupT1S1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckupT1S1Component = (function () {
    function CheckupT1S1Component(storeService) {
        this.storeService = storeService;
        this.yearsData = [];
        this.monthData = [
            {
                label: "1",
                value: "1"
            },
            {
                label: "2",
                value: "2"
            },
            {
                label: "3",
                value: "3"
            },
        ];
        this.daysData = [];
        this.obj = {
            day: "1",
            month: "1",
            year: "1925",
            yearSmokin: "",
            raiodMaritalStatus: "",
            radioWifeSmoke: "",
            wifeName: "",
            wifV1: "",
            childAmount: 0,
            smoking: null,
            childrens: [],
            gender: ""
        };
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setYear();
        this.setDays();
    }
    CheckupT1S1Component.prototype.ngOnInit = function () {
        var store = this.storeService.getByKey("checkup-t1-s1");
        if (store) {
            this.obj = store;
        }
    };
    CheckupT1S1Component.prototype.setDays = function () {
        for (var i = 1; i <= 31; i++) {
            this.daysData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    CheckupT1S1Component.prototype.setYear = function () {
        for (var i = 1925; i <= 2018; i++) {
            this.yearsData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    CheckupT1S1Component.prototype.daysChange = function (e) {
        this.obj.day = e;
    };
    CheckupT1S1Component.prototype.monthChange = function (e) {
        this.obj.month = e;
    };
    CheckupT1S1Component.prototype.yearsChange = function (e) {
        this.obj.year = e;
    };
    CheckupT1S1Component.prototype.doChangeChildren = function () {
        this.obj.childrens = [];
        for (var i = 0; i < this.obj.childAmount; i++) {
            this.obj.childrens.push({ stat: "", radio: "", name: "" });
        }
    };
    CheckupT1S1Component.prototype.save = function () {
        var childFlag;
        if (!this.obj.year ||
            !this.obj.month ||
            !this.obj.year
            || !this.obj.raiodMaritalStatus) {
            this.showError = true;
            console.log(22);
        }
        else {
            for (var i = 0; i < this.obj.childAmount; i++) {
                if (!this.obj.childrens[i].name || !this.obj.childrens[i].radio) {
                    childFlag = true;
                    break;
                }
            }
            if (!this.obj.gender) {
                this.showError = true;
            }
            if (childFlag) {
                this.showError = true;
                return;
            }
            this.next.emit(({
                naxtPage: 't1-s2',
                date: this.obj.day + '-' + this.obj.month + '-' + this.obj.year,
                smoking: this.obj.smoking,
                raiodMaritalStatus: this.obj.raiodMaritalStatus,
                childrens: this.obj.childrens,
                smokeInLast3Years: this.obj.yearSmokin,
                type: "checkup-t1-s1"
            }));
            this.storeService.setByKey("checkup-t1-s1", this.obj);
        }
    };
    return CheckupT1S1Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CheckupT1S1Component.prototype, "next", void 0);
CheckupT1S1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkup-t1-s1',
        template: __webpack_require__("../../../../../src/app/wizard/checkup-t1-s1/checkup-t1-s1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/checkup-t1-s1/checkup-t1-s1.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], CheckupT1S1Component);

var _a;
//# sourceMappingURL=checkup-t1-s1.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t1-s2/checkup-t1-s2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-checkup-top{\r\n    height: 40px;\r\n}\r\n.selected > span{ \r\n    color:  white !important;\r\n }\r\n .hasSmoked-input{\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n }\r\n .modalStatus{\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"] {\r\n     display:none;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"] + label {\r\n     color:#f2f2f2;\r\n     width: 24.8%;\r\n     border: 1px solid #117ef5;\r\n     padding: 0 0rem;\r\n     line-height: 22px;\r\n     background:#f7f7f7;;\r\n     cursor:pointer;\r\n     text-align: center;\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-pack: center;\r\n         -ms-flex-pack: center;\r\n             justify-content: center;\r\n     -webkit-box-align: center;\r\n         -ms-flex-align: center;\r\n             align-items: center;\r\n     height: 40px;    \r\n }\r\n .hasSmoked-input > input[type=\"radio\"] + label span {\r\n     display:inline-block;\r\n     vertical-align:middle;\r\n     text-align: center;\r\n     color: #626262;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"]:checked + label{\r\n     background: #117ef5;\r\n     color: white;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"]:checked + label > span{\r\n     color: white;\r\n }\r\n .center-block{\r\n     height: 40px;\r\n }\r\n .smoke-input > input[type=\"radio\"] + label {\r\n     border: 1px solid #117ef5;\r\n     width: 30%;\r\n }\r\n .intut-wrapper-inside > input[type=\"radio\"] + label {\r\n     border: 1px solid #117ef5;\r\n }\r\n .smole-buttons > input[type=\"radio\"] + label {\r\n     padding: 0 24px;\r\n }\r\n .field-validation-error{\r\n     margin-top: 2px !important;\r\n }\r\n .hasSmoked-input > input[type=\"radio\"] + label:focus{\r\n     outline: 2px solid #707070 !important;\r\n     outline-offset: -2px !important;\r\n }\r\n .field-validation-error{\r\n     white-space: nowrap;\r\n }\r\n .errorOccurredPersonalDetails{\r\n     margin-bottom: 20px;\r\n }\r\n .errorOccurredPersonalDetails > span, .userExistsErrorMsg > span{\r\n    text-align: center !important;\r\n }\r\n\r\n @media (min-width: 991px){\r\n    .field-validation-error{\r\n     position: absolute !important;\r\n     bottom: -51px !important;\r\n    }\r\n}\r\n \r\n @media (max-width: 991px) and (min-width: 768px){\r\n    .center-block{\r\n        height: 80px;\r\n        width: 100% !important;\r\n    }\r\n    #personalData > div.personalDataForm > div > div.personalDetails2.formAreaBox > form > fieldset.contactDetails.formSection.noPadding > div:nth-child(3) > div > div.noPadding.col-md-4.clearfix > div > div{\r\n        margin-left: 0;\r\n    }\r\n    #button-helth-top > div{\r\n        margin-left: 0;\r\n    }\r\n    .IsSmokedPast3Years-error{\r\n        position: relative;\r\n        top: 30px;\r\n    }\r\n }\r\n @media (max-width: 768px){\r\n    .center-block{\r\n        height: 40px;\r\n        width: 100% !important;\r\n    }\r\n    .errorOccurredPersonalDetails{\r\n        text-align: center;\r\n        right: 0 !important;\r\n    }\r\n    .userExistsErrorMsg{\r\n        right: 0 !important;\r\n        text-align: center;\r\n    }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t1-s2/checkup-t1-s2.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"checkUp\">\n    <div class=\"checkUpHead col-xs-12 col-md-6 col-md-push-3\">\n      <h2>מילוי שאלון צ'קאפ לצורך קבלת תמונת מצב של העולם הפיננסי שלך</h2>\n      <p>\n        מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n      </p>\n      <span>זה יקח כמה דקות, אבל זה חד פעמי</span>\n    </div>\n\n    <div class=\"checkUpProgressBar col-xs-12 col-md-10 col-md-push-1\" role=\"tablist\">\n      <div class=\"wrapper center-block\">\n        <div class=\"personal col-xs-4 col-md-2 noPadding currentState\" role=\"presentation\">\n          <span class=\"tab-title\">פרטים אישיים</span>\n        </div>\n        <div class=\"overview col-xs-4 col-md-2 noPadding\" role=\"presentation\">\n          <span class=\"tab-title\">תמונת מצב</span>\n        </div>\n        <div class=\"optional col-xs-4 col-md-2 noPadding\" role=\"presentation\">\n          <span class=\"tab-title\">שאלות משלימות</span>\n          <span class=\"optionalTitle\">אופציונלי</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"checkUpForm tab-content col-xs-12\">\n\n      <div role=\"tabpanel\" class=\"tab-pane active\" id=\"personalData\">\n        <h3 class=\"sr-only\">פרטים אישיים</h3>\n        <div class=\"peronalPager\">\n          <div class=\"wrapper center-block\">\n            <span class=\"active\"></span>\n            <span class=\"active\"></span>\n          </div>\n        </div>\n        <div class=\"personalDataForm\">\n          <div class=\"step2\">\n            <div class=\"personalDetails2 formAreaBox\">\n              <form role=\"form\" action=\"#\" method=\"post\">\n                <fieldset class=\"step2TopSectionWrapper noPadding\">\n                  <legend class=\"sr-only\">###</legend>\n                  <div class=\"occupation formSection col-md-3 noPadding\">\n                    <span>אני עוסק/ת ב:</span>\n                    <div class=\"wrapper\">\n                      <div class=\"selectWrapper noPadding col-xs-12\">\n                          <div class=\"wrapper center-block button-checkup-top button-select\" id=\"button-helth-top\">\n                              <div class=\"selectWrapper\"  style=\"width: 100%;height: 100%;\">\n                                <div style=\"width: 100%;height: 100%;\">\n                                  <app-autocomplit [data]=\"jobsData\" (change)=\"jobsChange($event)\"></app-autocomplit>\n                                </div>\n                              </div>\n                            </div>\n                      </div>\n                      <!--<span class=\"field-validation-error\">אנא בחר ערך</span>-->\n                    </div>\n                  </div>\n                  <div class=\"salary formSection col-md-3 col-md-pull-1 noPadding\">\n                    <span>שכר:</span>\n                    <div class=\"wrapper\">\n                      <div class=\"selectWrapper noPadding col-xs-12\">\n                          <div class=\"wrapper center-block button-checkup-top\" id=\"button-helth-top\">\n                              <div class=\"selectWrapper\"  style=\"width: 100%;height: 100%;\">\n                                <div style=\"width: 100%;height: 100%;\">\n                                  <app-autocomplit [data]=\"rateData\" (change)=\"rateChange($event)\"></app-autocomplit>\n                                </div>\n                              </div>\n                            </div>\n                      </div>\n                      <!--<span class=\"field-validation-error\">אנא בחר ערך</span>-->\n                    </div>\n                  </div>\n                </fieldset>\n                <fieldset class=\"step2MedicalSectionWrapper\">\n                  <legend class=\"sr-only\">###</legend>\n                  <div class=\"clinic formSection col-md-7 noPadding\">\n                    <span>קופת חולים:</span>\n                    <div class=\"wrapper\">\n                      <div class=\"form-group col-xs-12 noPadding\">\n                        <div class=\"clinicForm\">\n                            <div class=\"hasSmoked-input intut-wrapper-inside\">\n                                <input type=\"radio\" id=\"radio1\" name=\"manHMO\" value=\"9\" [(ngModel)]=\"obj.hmo\"/>\n                                <label for=\"radio1\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >מאוחדת</span></label>\n                                <input type=\"radio\" id=\"radio2\" name=\"manHMO\" value=\"10\" [(ngModel)]=\"obj.hmo\"/>\n                                <label for=\"radio2\" style=\"border-right:0px;\"><span >כללית</span></label>\n                                <input type=\"radio\" id=\"radio3\" name=\"manHMO\" value=\"11\" [(ngModel)]=\"obj.hmo\"/>\n                                <label for=\"radio3\" style=\"border-right:0px;\"><span >מכבי</span></label>\n                                <input type=\"radio\" id=\"radio5\" name=\"manHMO\" value=\"13\" [(ngModel)]=\"obj.hmo\"/>\n                                <label for=\"radio5\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לאומית</span></label>\n                              </div>\n\n                        </div>\n                        <span class=\"field-validation-error\" *ngIf=\"showError && !obj.hmo\">אנא בחר ערך</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"medigap formSection col-md-4 col-md-pull-1 noPadding\">\n                    <span>ביטוח משלים:</span>\n                    <div class=\"wrapper\">\n                      <div class=\"form-group col-xs-12 noPadding\">\n                        <div class=\"medigapForm\">\n                            <div class=\"hasSmoked-input intut-wrapper-inside\">\n                                <input type=\"radio\" id=\"radio6\" name=\"hmoextra\" value=\"9\"  [(ngModel)]=\"obj.extra\"/>\n                                <label for=\"radio6\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >כן</span></label>\n                                <input type=\"radio\" id=\"radio7\" name=\"hmoextra\" value=\"10\" [(ngModel)]=\"obj.extra\"/>\n                                <label for=\"radio7\" style=\"border-right:0px;\"><span >לא</span></label>\n                                <input type=\"radio\" id=\"radio8\" name=\"hmoextra\" value=\"13\" [(ngModel)]=\"obj.extra\"/>\n                                <label for=\"radio8\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                              </div>\n\n                        </div>\n                        <span class=\"field-validation-error\" *ngIf=\"showError && !obj.extra\">אנא בחר ערך</span>\n                      </div>\n                    </div>\n                  </div>\n                </fieldset>\n                <fieldset class=\"step2SmokingSectionWrapper\">\n                  <legend class=\"sr-only\">###</legend>\n                  <div class=\"smoking formSection col-md-6 noPadding\">\n                    <div class=\"isSmoking\">\n                      <input type=\"hidden\" name=\"smoking\" id=\"hdnSmoking\" value=\"\" />\n                      <div class=\"yes \" (click)=\"obj.smoking = true\" [ngClass]=\"{'yes-active': obj.smoking === true}\" role=\"button\" data-value=\"1\" tabindex=\"0\">\n                        <span>מעשן</span>\n                      </div>\n                      <div class=\"no\" (click)=\"obj.smoking = false\" [ngClass]=\"{'no-active': obj.smoking === false}\" role=\"button\" data-value=\"0\" tabindex=\"0\">\n                        <span>לא מעשן</span>\n                      </div>\n                    </div>\n                    <span class=\"field-validation-error\" *ngIf=\"showError && !obj.smoking && obj.smoking !== false\">אנא בחר ערך</span>\n                  </div>\n                  <div class=\"lastSmoked formSection col-md-4 noPadding\" style=\"\" *ngIf=\"obj.smoking === false\">\n                    <span>האם עישנת ב-3 שנים האחרונות?</span>\n                    <div class=\"wrapper\">\n                      <div class=\"form-group col-xs-12 noPadding\">\n                        <div class=\"lastSmokedForm center-block\">\n\n                          <div class=\"hasSmoked-input intut-wrapper-inside\">\n                            <input type=\"radio\" id=\"radio10\" name=\"status1\" value=\"כן\" [(ngModel)]=\"obj.yearSmokin\"/>\n                            <label for=\"radio10\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >כן</span></label>\n                            <input type=\"radio\" id=\"radio11\" name=\"status1\"  value=\"לא\" [(ngModel)]=\"obj.yearSmokin\"/>\n                            <label for=\"radio11\" style=\"margin-right: 30px;;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא</span></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <span *ngIf=\"showError && obj.smoking === false && !obj.yearSmokin\" class=\"field-validation-error\" data-valmsg-for=\"IsSmokedPast3Years\" data-valmsg-replace=\"true\"><span id=\"IsSmokedPast3Years-error\" class=\"IsSmokedPast3Years-error\">אנא בחר ערך</span></span>\n                  </div>\n                </fieldset>\n                <div class=\"detailsInfo formSection\">\n                  <div class=\"sticker\">\n                    <div class=\"wrapper\">\n                                                    <span class=\"stickerTitle\">\n                                                        חשוב להזין פרטים\n                                                    </span>\n                      <span class=\"stickerText\">\n                                                        פרטים אלו יישמו לצורך יצירת פרופיל משתמש וזיהוי עתידי\n                                                    </span>\n                    </div>\n                  </div>\n                </div>\n                <fieldset class=\"contactDetails formSection noPadding\">\n                  <legend class=\"sr-only\">###</legend>\n                  <div class=\"row\">\n                    <div class=\"wrapper\">\n                      <div class=\"noPadding col-md-4\">\n                        <span>שם פרטי:</span>\n                        <input class=\"form-control\" [(ngModel)]=\"obj.firstName\" type=\"text\" name=\"firstName\" placeholder=\"הזן שם פרטי\">\n                        <span *ngIf=\"showError && !obj.firstName\" class=\"field-validation-error\">אנא בחר ערך</span>\n                      </div>\n                      <div class=\"noPadding col-md-4\">\n                        <span>שם משפחה:</span>\n                        <input class=\"form-control\" [(ngModel)]=\"obj.lastName\" type=\"text\" name=\"lastName\" placeholder=\"הזן שם משפחה\">\n                        <span *ngIf=\"showError && !obj.lastName\" class=\"field-validation-error\">אנא בחר ערך</span>\n                      </div>\n                      <div class=\"noPadding col-md-4\">\n                        <span>תעודת זהות:</span>\n                        <input [(ngModel)]=\"obj.id\" class=\"form-control disabled-control\" type=\"text\" name=\"id\" placeholder=\"הזן תעודת זהות\">\n                        <span *ngIf=\"showError && !obj.id\" class=\"field-validation-error\">אנא בחר ערך</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"wrapper\">\n                      <div class=\"noPadding col-md-4 clearfix\">\n                        <span>טלפון:</span>\n                        <div class=\"contactPhone noPadding col-xs-12\">\n                          <input [(ngModel)]=\"obj.phone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"הזן נייד\">\n                          <div class=\"selectWrapper noPadding\" style=\"margin:0\">\n                              <div class=\"wrapper center-block button-checkup-top button-50\" id=\"button-helth-top\">\n                                  <div class=\"selectWrapper\"  style=\"width: 100%;height: 100%;padding:0;\">\n                                    <div style=\"width: 100%;height: 100%;\">\n                                      <app-autocomplit [data]=\"phoneData\" (change)=\"phoneChange($event)\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                </div>\n\n                          </div>\n                          <span class=\"field-validation-error\" *ngIf=\"showError && !obj.phone\">שדה טלפון הוא שדה חובה</span>\n                        </div>\n                      </div>\n                      <div class=\"noPadding col-md-4\">\n                        <span>מייל:</span>\n                        <input [(ngModel)]=\"obj.email\" class=\"form-control col-md-4\" type=\"text\" name=\"email\" placeholder=\"הזן מייל\">\n                        <span class=\"field-validation-error\" *ngIf=\"showError && !obj.email\">\n                                                            <span>אנא בחר ערך</span>\n                                                        </span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"wrapper\">\n                      <div class=\"confirmBox noPadding col-md-11\">\n                        <input type=\"checkbox\" name=\"confirm\" value=\"1\" id=\"confirmBoxInput\" [(ngModel)]=\"obj.approve\" />\n                        <label class=\"checkbox-label\" for=\"confirmBoxInput\">\n                          אישור קבלת חומר שיווקי אישור קבלת חומר שיווקי אישור קבלת חומר שיווקי אישור קבלת חומר שיווקי אישור קבלת חומר שיווקי אישור קבלת חומר שיווקי\n                        </label>\n                        <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                        <span class=\"field-validation-error\" *ngIf=\"showError && !obj.approve\">אנא בחר ערך</span>\n                      </div>\n                    </div>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n            <div class=\"checkUpControlls center-block\">\n              <a (click)=\"back()\" class=\"btn backBtn\">\n                <span>חזור</span>\n              </a>\n              <a (click)=\"save()\" class=\"btn nextBtn\">\n                <span>הבא</span>\n              </a>\n            </div>\n            <div *ngIf=\"showError \" class=\"col-xs-12 text-center checkup-general-error checkup-error-position errorOccurredPersonalDetails\" style=\"/* display: none; */\" id=\"errorOccurredPersonalDetails\" aria-hidden=\"true\">\n                                    <span class=\"field-validation-error\" aria-hidden=\"true\">\n                                        אירעה שגיאה. אנא נסה שנית מאוחר יותר.\n                                    </span>\n            </div>\n            <div *ngIf=\"showError \" class=\"col-xs-12 text-center checkup-general-error checkup-error-position userExistsErrorMsg\" style=\"\" id=\"userExistsErrorMsg\" aria-hidden=\"false\">\n                                    <span class=\"field-validation-error\" aria-hidden=\"true\">\n                                        משתמש קיים, אנא התחבר.\n                                    </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div role=\"tabpanel\" class=\"tab-pane\" id=\"overviewData\">\n      </div>\n\n      <div role=\"tabpanel\" class=\"tab-pane\" id=\"optionalData\">\n\n      </div>\n    </div>\n    <div class=\"checkUpSecurityInfo col-xs-12 col-md-6 col-md-push-3\">\n      <p>אבטחת מידע: כל המידע במערכת מועבר באופן מוצפן ובסטנדרט SSL, המוביל בתחום אבטחת הנתונים הפיננסיים בעולם</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t1-s2/checkup-t1-s2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckupT1S2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckupT1S2Component = (function () {
    function CheckupT1S2Component(storeService) {
        this.storeService = storeService;
        this.obj = {
            hmo: "",
            extra: "",
            smoking: "",
            yearSmokin: "",
            email: "",
            phone: "",
            firstName: "",
            lastName: "",
            id: "",
            job: "בחר מקצוע",
            rate: "1000 - 10000"
        };
        this.jobsData = [
            {
                label: "בחר מקצוע",
                value: "בחר מקצוע"
            },
            {
                label: "דייל/דיילת מכירו",
                value: "דייל/דיילת מכירו"
            },
        ];
        this.rateData = [
            {
                label: "1000 - 10000",
                value: "1000 - 10000"
            },
            {
                label: "10000 - 20000",
                value: "10000 - 20000"
            },
        ];
        this.phoneData = [
            {
                label: "050",
                value: "050"
            },
            {
                label: "040",
                value: "040"
            },
            {
                label: "060",
                value: "060"
            },
            {
                label: "070",
                value: "070"
            },
        ];
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CheckupT1S2Component.prototype.ngOnInit = function () {
        var store = this.storeService.getByKey("checkup-t1-s1");
        if (store) {
            this.obj = store;
        }
    };
    CheckupT1S2Component.prototype.jobsChange = function (e) {
        if (e)
            this.obj.job = e;
    };
    CheckupT1S2Component.prototype.rateChange = function (e) {
        if (e)
            this.obj.rate = e;
    };
    CheckupT1S2Component.prototype.save = function () {
        if (!this.obj.rate) {
            this.obj.rate = "1000 - 10000";
        }
        if (!this.obj.job) {
            this.obj.job = "בחר מקצוע";
        }
        if (!this.obj.job || !this.obj.rate || !this.obj.email || !this.obj.phone || !this.obj.firstName || !this.obj.lastName || !this.obj.id ||
            !this.obj.extra || !this.obj.hmo || (!this.obj.smoking && !(this.obj.smoking === false))) {
            this.showError = true;
        }
        else {
            if (this.obj.smoking === false && !this.obj.yearSmokin) {
                this.showError = true;
                return;
            }
            this.next.emit(({
                naxtPage: 't2-s1',
                type: 'checkup-t1-s2',
                modal: {},
            }));
            this.storeService.setByKey("checkup-t1-s1", this.obj);
        }
    };
    CheckupT1S2Component.prototype.back = function () {
        this.next.emit(({
            naxtPage: 't1-s1'
        }));
    };
    return CheckupT1S2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CheckupT1S2Component.prototype, "next", void 0);
CheckupT1S2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkup-t1-s2',
        template: __webpack_require__("../../../../../src/app/wizard/checkup-t1-s2/checkup-t1-s2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/checkup-t1-s2/checkup-t1-s2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], CheckupT1S2Component);

var _a;
//# sourceMappingURL=checkup-t1-s2.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t2-s1/checkup-t2-s1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t2-s1/checkup-t2-s1.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"checkUp\">\n    <div class=\"checkUpHead\">\n      <h2>מילוי שאלון צ'קאפ לצורך קבלת תמונת מצב של העולם הפיננסי שלך</h2>\n      <p>\n        מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n      </p>\n      <span>זה יקח כמה דקות, אבל זה חד פעמי</span>\n    </div>\n\n    <div class=\"checkUpProgressBar col-xs-12 col-md-10 col-md-push-1\" role=\"tablist\">\n      <div class=\"wrapper center-block\">\n        <div class=\"personal col-xs-4 col-md-2 noPadding passed\" role=\"presentation\">\n          <span class=\"tab-title\">פרטים אישיים</span>\n        </div>\n        <div class=\"overview col-xs-4 col-md-2 noPadding currentState\" role=\"presentation\">\n          <span class=\"tab-title\">תמונת מצב</span>\n        </div>\n        <div class=\"optional col-xs-4 col-md-2 noPadding\" role=\"presentation\">\n          <span class=\"tab-title\">שאלות משלימות</span>\n          <span class=\"optionalTitle\">אופציונלי</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"checkUpForm tab-content col-xs-12\">\n      <div role=\"tabpanel\" class=\"tab-pane\" id=\"personalData\">\n        <div class=\"pager\"></div>\n        <div class=\"personalDataForm\">\n          <div class=\"step1\">\n            <div class=\"genderSelect\">\n\n            </div>\n            <div class=\"personalDetails\">\n\n            </div>\n          </div>\n          <div class=\"step2\"></div>\n        </div>\n      </div>\n      <div role=\"tabpanel\" class=\"tab-pane active\" id=\"overviewData\">\n        <h3 class=\"sr-only\">תמונת מצב</h3>\n        <div class=\"step1\">\n          <div class=\"formAreaBox\">\n            <h4>כמה שווה החיסכון הפנסיוני שלך?</h4>\n            <p class=\"subtitle\">\n              על מנת לספק לך תמונה מלאה של\n              הכיסויים הביטוחים שלך, יצרנו עבורך טופס\n              קצר שבאמצעותו תוכל לקבל תמונה מדויקת\n              של (מצב הפנסיה שלך ממשרד האוצר\n              (המסלקה הפנסיונית)\n            </p>\n            <ul class=\"overview-items clearfix\">\n              <li class=\"col-xs-12 col-md-4\">\n                <div class=\"icon\">\n                  <img class=\"img-responsive center-block\" src=\"sample-images/icon_overview_lock.png\" alt=\"\" />\n                </div>\n                <p>\n                  אמצעי אבטחה מתקדמים לשמירת הפרטיות\n                </p>\n              </li>\n              <li class=\"col-xs-12 col-md-4\">\n                <div class=\"icon\">\n                  <img class=\"img-responsive center-block\" src=\"sample-images/icon_overview_label.png\" alt=\"\" />\n                </div>\n                <p>\n                  השירות ניתן ללא עלות\n                </p>\n              </li>\n              <li class=\"col-xs-12 col-md-4\">\n                <div class=\"icon\">\n                  <img class=\"img-responsive center-block\" src=\"sample-images/icon_overview_graph.png\" alt=\"\" />\n                </div>\n                <p>\n                  מידע מהימן ועדכני בנוגע לפוליסות הקיימות שלך\n                </p>\n              </li>\n            </ul>\n          </div>\n          <div class=\"checkUpControlls center-block\">\n            <a (click)=\"back()\" class=\"btn backBtn\">\n              <span>חזור</span>\n            </a>\n            <a (click)=\"save()\" class=\"btn nextBtn\">\n              <span>התחל בדיקה</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"step2\" style=\"display:none;\">\n          <div class=\"step2-header\">\n            <h4>התחברות למאגר המידע של משרד האוצר (המסלקה)</h4>\n            <div class=\"icons\">\n              <img src=\"sample-images/icon_overview_lock.png\" alt=\"אמצעי אבטחה מתקדמים לשמירת הפרטיות\" />\n              <img src=\"sample-images/icon_overview_label.png\" alt=\"השירות ניתן ללא עלות\" />\n              <img src=\"sample-images/icon_overview_graph.png\" alt=\"מידע מהימן ועדכני בנוגע לפוליסות הקיימות שלך\" />\n            </div>\n          </div>\n          <div class=\"step2-notice\">\n            כרטיס האשראי <strong>לא</strong> יחוייב פרטייך ישמשו לצורך <strong>אימות זיהוי בלבד</strong>\n          </div>\n          <div class=\"formAreaBox embed-responsive\">\n            <iframe src=\"creditguard.html\" class=\"embed-responsive-item\"></iframe>\n          </div>\n        </div>\n        <div class=\"step3\" style=\"display:none;\">\n          <div class=\"formAreaBox\">\n            <h4 class=\"v-title\">\n              פרטיך התקבלו בהצלחה!\n            </h4>\n            <div class=\"subtitle\">\n              אישור יישלח אליך למייל\n              <br />\n              פניתך התקבלה, פונים בשמך למסלקה הפנסיונית של משרד האוצר\n            </div>\n          </div>\n          <div class=\"results-time\">\n            <div class=\"subtitle\">\n              המידע יתקבל בעוד\n            </div>\n            <span class=\"time\">\n                                    <strong>2</strong> ימים <strong>23</strong> שעות <strong>ו59</strong> דקות\n                                </span>\n          </div>\n          <div class=\"checkUpControlls clearfix\">\n            <a class=\"btn nextBtn\">\n              <span>הבא</span>\n            </a>\n          </div>\n          <div class=\"subtitle\">\n            נשאר עוד קצת...\n          </div>\n        </div>\n      </div>\n      <div role=\"tabpanel\" class=\"tab-pane formAreaBox\" id=\"optionalData\">\n        <h3 class=\"sr-only\">שאלות משלימות (אופציונאלי)</h3>\n        <form role=\"form\" action=\"#\" method=\"post\">\n          <div class=\"form-section\">\n            <fieldset>\n              <legend class=\"section-title\">יש לך חסכונות?</legend>\n              <div class=\"clearfix\">\n                <div class=\"savings-options form-group col-sm-10 pull-right\">\n                  <div class=\"toggle-savings\">\n                    <label>\n                      קרן השתלמות\n                      <input type=\"checkbox\" name=\"saving1\" value=\"1\" />\n                    </label>\n                    <label>\n                      קרן מנהלים\n                      <input type=\"checkbox\" name=\"saving1\" value=\"2\" />\n                    </label>\n                    <label>\n                      תכנית חיסכון\n                      <input type=\"checkbox\" name=\"saving1\" value=\"3\" />\n                    </label>\n                    <label>\n                      קופת גמל\n                      <input type=\"checkbox\" name=\"saving1\" value=\"4\" />\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"savings-amount form-group group-delimiter clearfix\" style=\"display:none;\">\n                <div>\n                  <label class=\"section-title\" for=\"\">הזן סכום</label>\n                </div>\n                <div class=\"savings-amount-input\">\n                  <input class=\"form-control\" type=\"text\" name=\"savingsAmount\" placeholder=\"הזן סכום\" />\n                </div>\n              </div>\n            </fieldset>\n          </div>\n          <div class=\"form-section\">\n            <fieldset>\n              <legend class=\"section-title\">יש לך קצבאות למשפחה?</legend>\n              <div class=\"form-group col-xs-12 col-sm-10 pull-right\">\n                <div class=\"toggle-pensions\">\n                  <label>\n                    פנסיה משולמת\n                    <input type=\"checkbox\" name=\"saving1\" value=\"1\" />\n                  </label>\n                  <label>\n                    ביטוח לאומי\n                    <input type=\"checkbox\" name=\"saving1\" value=\"2\" />\n                  </label>\n                  <label>\n                    השכרת נכס\n                    <input type=\"checkbox\" name=\"saving1\" value=\"3\" />\n                  </label>\n                </div>\n              </div>\n            </fieldset>\n          </div>\n          <div class=\"form-section\">\n            <fieldset>\n              <legend class=\"section-title\">יש לך הלוואות?</legend>\n              <div class=\"form-group loans col-xs-5 pull-right\">\n                <div class=\"toggle-loans\">\n                  <label>\n                    כן\n                    <input type=\"radio\" name=\"loans\" value=\"1\" />\n                  </label>\n                  <label>\n                    לא\n                    <input type=\"radio\" name=\"loans\" value=\"0\" />\n                  </label>\n                </div>\n              </div>\n              <div class=\"form-group has-loans\" style=\"display:none;\">\n                <div class=\"has-loans-section\">\n                  <label class=\"small-section-title text-center\" for=\"loanAmount\">הזן סכום:</label>\n                  <input class=\"form-control\" name=\"loanAmount\" type=\"text\" value=\"\" placeholder=\"הזן סכום\" />\n                </div>\n                <div class=\"has-loans-section\">\n                  <label class=\"small-section-title text-center\" for=\"loanAmount\">החזר חודשי:</label>\n                  <input class=\"form-control\" name=\"loanMonthlyAmount\" type=\"text\" value=\"\" placeholder=\"0,000\" />\n                </div>\n                <div class=\"has-loans-section\">\n                  <label class=\"small-section-title text-center\" for=\"loanRepayPeriod\">תקופת החזר בחודשים:</label>\n                  <input class=\"form-control\" name=\"loanRepayPeriod\" type=\"text\" value=\"\" placeholder=\"מס' חודשים\" />\n                </div>\n              </div>\n            </fieldset>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"checkUpSecurityInfo col-xs-12 col-md-6 col-md-push-3\">\n      <p>אבטחת מידע: כל המידע במערכת מועבר באופן מוצפן ובסטנדרט SSL, המוביל בתחום אבטחת הנתונים הפיננסיים בעולם</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t2-s1/checkup-t2-s1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckupT2S1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckupT2S1Component = (function () {
    function CheckupT2S1Component() {
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CheckupT2S1Component.prototype.ngOnInit = function () {
    };
    CheckupT2S1Component.prototype.back = function () {
        this.next.emit(({
            naxtPage: 't1-s2'
        }));
    };
    CheckupT2S1Component.prototype.save = function () {
        this.next.emit(({
            naxtPage: 't2-s2',
            type: 'profession',
            modal: {},
        }));
    };
    return CheckupT2S1Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CheckupT2S1Component.prototype, "next", void 0);
CheckupT2S1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkup-t2-s1',
        template: __webpack_require__("../../../../../src/app/wizard/checkup-t2-s1/checkup-t2-s1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/checkup-t2-s1/checkup-t2-s1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CheckupT2S1Component);

//# sourceMappingURL=checkup-t2-s1.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t2-s2/checkup-t2-s2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t2-s2/checkup-t2-s2.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"checkUp\">\n    <div class=\"checkUpHead\">\n      <h2>מילוי שאלון צ'קאפ לצורך קבלת תמונת מצב של העולם הפיננסי שלך</h2>\n      <p>\n        מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n      </p>\n      <span>זה יקח כמה דקות, אבל זה חד פעמי</span>\n    </div>\n\n    <div class=\"checkUpProgressBar col-xs-12 col-md-10 col-md-push-1\" role=\"tablist\">\n      <div class=\"wrapper center-block\">\n        <div class=\"personal col-xs-4 col-md-2 noPadding passed\" role=\"presentation\">\n          <span class=\"tab-title\">פרטים אישיים</span>\n        </div>\n        <div class=\"overview col-xs-4 col-md-2 noPadding currentState\" role=\"presentation\">\n          <span class=\"tab-title\">תמונת מצב</span>\n        </div>\n        <div class=\"optional col-xs-4 col-md-2 noPadding\" role=\"presentation\">\n          <span class=\"tab-title\">שאלות משלימות</span>\n          <span class=\"optionalTitle\">אופציונלי</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"checkUpForm tab-content col-xs-12\">\n      <div role=\"tabpanel\" class=\"tab-pane\" id=\"personalData\">\n        <div class=\"pager\"></div>\n        <div class=\"personalDataForm\">\n          <div class=\"step1\">\n            <div class=\"genderSelect\">\n\n            </div>\n            <div class=\"personalDetails\">\n\n            </div>\n          </div>\n          <div class=\"step2\"></div>\n        </div>\n      </div>\n      <div role=\"tabpanel\" class=\"tab-pane active\" id=\"overviewData\">\n        <h3 class=\"sr-only\">תמונת מצב</h3>\n        <div class=\"step1\" style=\"display:none;\">\n          <div class=\"formAreaBox\">\n            <h4>כמה שווה החיסכון הפנסיוני שלך?</h4>\n            <p class=\"subtitle\">\n              על מנת לספק לך תמונה מלאה של\n              הכיסויים הביטוחים שלך, יצרנו עבורך טופס\n              קצר שבאמצעותו תוכל לקבל תמונה מדויקת\n              של (מצב הפנסיה שלך ממשרד האוצר\n              (המסלקה הפנסיונית)\n            </p>\n            <ul class=\"overview-items clearfix\">\n              <li class=\"col-xs-12 col-md-4\">\n                <div class=\"icon\">\n                  <img class=\"img-responsive center-block\" src=\"sample-images/icon_overview_lock.png\" alt=\"\" />\n                </div>\n                <p>\n                  אמצעי אבטחה מתקדמים לשמירת הפרטיות\n                </p>\n              </li>\n              <li class=\"col-xs-12 col-md-4\">\n                <div class=\"icon\">\n                  <img class=\"img-responsive center-block\" src=\"sample-images/icon_overview_label.png\" alt=\"\" />\n                </div>\n                <p>\n                  השירות ניתן ללא עלות\n                </p>\n              </li>\n              <li class=\"col-xs-12 col-md-4\">\n                <div class=\"icon\">\n                  <img class=\"img-responsive center-block\" src=\"sample-images/icon_overview_graph.png\" alt=\"\" />\n                </div>\n                <p>\n                  מידע מהימן ועדכני בנוגע לפוליסות הקיימות שלך\n                </p>\n              </li>\n            </ul>\n          </div>\n          <div class=\"checkUpControlls center-block\">\n            <a class=\"btn backBtn\">\n              <span>חזור</span>\n            </a>\n            <a class=\"btn nextBtn\">\n              <span>התחל בדיקה</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"step2\">\n          <div class=\"step2-header\">\n            <h4>התחברות למאגר המידע של משרד האוצר (המסלקה)</h4>\n            <div class=\"icons\">\n              <img src=\"sample-images/icon_overview_lock.png\" alt=\"אמצעי אבטחה מתקדמים לשמירת הפרטיות\" />\n              <img src=\"sample-images/icon_overview_label.png\" alt=\"השירות ניתן ללא עלות\" />\n              <img src=\"sample-images/icon_overview_graph.png\" alt=\"מידע מהימן ועדכני בנוגע לפוליסות הקיימות שלך\" />\n            </div>\n          </div>\n          <div class=\"step2-notice\">\n            כרטיס האשראי <strong>לא</strong> יחוייב פרטייך ישמשו לצורך <strong>אימות זיהוי בלבד</strong>\n          </div>\n          <div class=\"formAreaBox\">\n            <div class=\"cg-iframe embed-responsive\">\n              <iframe src=\"creditguard.html\" class=\"embed-responsive-item\"></iframe>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 text-center checkup-general-error\" id=\"cgTryAgainTzErrorMessage\">\n                                    <span class=\"field-validation-error\" aria-hidden=\"true\">\n                                        ת.ז. של בעל כרטיס האשראי חייבת להיות זהה לתעודת הזהות של המשתמש.\n                                    </span>\n            </div>\n          </div>\n          <div class=\"checkUpControlls center-block\">\n            <a (click)=\"save()\" class=\"btn backBtn center-block\">\n              <span>חזור</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"step3\" style=\"display:none;\">\n          <div class=\"formAreaBox\">\n            <h4 class=\"v-title\">\n              פרטיך התקבלו בהצלחה!\n            </h4>\n            <div class=\"subtitle\">\n              אישור יישלח אליך למייל\n              <br />\n              פניתך התקבלה, פונים בשמך למסלקה הפנסיונית של משרד האוצר\n            </div>\n          </div>\n          <div class=\"results-time\">\n            <div class=\"subtitle\">\n              המידע יתקבל בעוד\n            </div>\n            <span class=\"time\">\n                                    <strong>2</strong> ימים <strong>23</strong> שעות <strong>ו59</strong> דקות\n                                </span>\n          </div>\n          <div class=\"checkUpControlls clearfix\">\n            <a (click)=\"save()\" class=\"btn nextBtn\">\n              <span>הבא</span>\n            </a>\n          </div>\n          <div class=\"subtitle\">\n            נשאר עוד קצת...\n          </div>\n        </div>\n      </div>\n      <div role=\"tabpanel\" class=\"tab-pane formAreaBox\" id=\"optionalData\">\n        <h3 class=\"sr-only\">שאלות משלימות (אופציונאלי)</h3>\n        <form role=\"form\" action=\"#\" method=\"post\">\n          <div class=\"form-section\">\n            <fieldset>\n              <legend class=\"section-title\">יש לך חסכונות?</legend>\n              <div class=\"clearfix\">\n                <div class=\"savings-options form-group col-sm-10 pull-right\">\n                  <div class=\"toggle-savings\">\n                    <label>\n                      קרן השתלמות\n                      <input type=\"checkbox\" name=\"saving1\" value=\"1\" />\n                    </label>\n                    <label>\n                      קרן מנהלים\n                      <input type=\"checkbox\" name=\"saving1\" value=\"2\" />\n                    </label>\n                    <label>\n                      תכנית חיסכון\n                      <input type=\"checkbox\" name=\"saving1\" value=\"3\" />\n                    </label>\n                    <label>\n                      קופת גמל\n                      <input type=\"checkbox\" name=\"saving1\" value=\"4\" />\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"savings-amount form-group group-delimiter clearfix\" style=\"display:none;\">\n                <div>\n                  <label class=\"section-title\" for=\"\">הזן סכום</label>\n                </div>\n                <div class=\"savings-amount-input\">\n                  <input class=\"form-control\" type=\"text\" name=\"savingsAmount\" placeholder=\"הזן סכום\" />\n                </div>\n              </div>\n            </fieldset>\n          </div>\n          <div class=\"form-section\">\n            <fieldset>\n              <legend class=\"section-title\">יש לך קצבאות למשפחה?</legend>\n              <div class=\"form-group col-xs-12 col-sm-10 pull-right\">\n                <div class=\"toggle-pensions\">\n                  <label>\n                    פנסיה משולמת\n                    <input type=\"checkbox\" name=\"saving1\" value=\"1\" />\n                  </label>\n                  <label>\n                    ביטוח לאומי\n                    <input type=\"checkbox\" name=\"saving1\" value=\"2\" />\n                  </label>\n                  <label>\n                    השכרת נכס\n                    <input type=\"checkbox\" name=\"saving1\" value=\"3\" />\n                  </label>\n                </div>\n              </div>\n            </fieldset>\n          </div>\n          <div class=\"form-section\">\n            <fieldset>\n              <legend class=\"section-title\">יש לך הלוואות?</legend>\n              <div class=\"form-group loans col-xs-5 pull-right\">\n                <div class=\"toggle-loans\">\n                  <label>\n                    כן\n                    <input type=\"radio\" name=\"loans\" value=\"1\" />\n                  </label>\n                  <label>\n                    לא\n                    <input type=\"radio\" name=\"loans\" value=\"0\" />\n                  </label>\n                </div>\n              </div>\n              <div class=\"form-group has-loans\" style=\"display:none;\">\n                <div class=\"has-loans-section\">\n                  <label class=\"small-section-title text-center\" for=\"loanAmount\">הזן סכום:</label>\n                  <input class=\"form-control\" name=\"loanAmount\" type=\"text\" value=\"\" placeholder=\"הזן סכום\" />\n                </div>\n                <div class=\"has-loans-section\">\n                  <label class=\"small-section-title text-center\" for=\"loanAmount\">החזר חודשי:</label>\n                  <input class=\"form-control\" name=\"loanMonthlyAmount\" type=\"text\" value=\"\" placeholder=\"0,000\" />\n                </div>\n                <div class=\"has-loans-section\">\n                  <label class=\"small-section-title text-center\" for=\"loanRepayPeriod\">תקופת החזר בחודשים:</label>\n                  <input class=\"form-control\" name=\"loanRepayPeriod\" type=\"text\" value=\"\" placeholder=\"מס' חודשים\" />\n                </div>\n              </div>\n            </fieldset>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"checkUpSecurityInfo col-xs-12 col-md-6 col-md-push-3\">\n      <p>אבטחת מידע: כל המידע במערכת מועבר באופן מוצפן ובסטנדרט SSL, המוביל בתחום אבטחת הנתונים הפיננסיים בעולם</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t2-s2/checkup-t2-s2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckupT2S2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckupT2S2Component = (function () {
    function CheckupT2S2Component() {
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CheckupT2S2Component.prototype.ngOnInit = function () {
    };
    CheckupT2S2Component.prototype.back = function () {
        this.next.emit(({
            naxtPage: 't2-s1'
        }));
    };
    CheckupT2S2Component.prototype.save = function () {
        this.next.emit(({
            naxtPage: 't2-s3',
            type: 'profession',
            modal: {},
        }));
    };
    return CheckupT2S2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CheckupT2S2Component.prototype, "next", void 0);
CheckupT2S2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkup-t2-s2',
        template: __webpack_require__("../../../../../src/app/wizard/checkup-t2-s2/checkup-t2-s2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/checkup-t2-s2/checkup-t2-s2.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CheckupT2S2Component);

//# sourceMappingURL=checkup-t2-s2.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t2-s3/checkup-t2-s3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t2-s3/checkup-t2-s3.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"checkUp\">\n    <div class=\"checkUpHead\">\n      <h2>מילוי שאלון צ'קאפ לצורך קבלת תמונת מצב של העולם הפיננסי שלך</h2>\n      <p>\n        מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n      </p>\n      <span>זה יקח כמה דקות, אבל זה חד פעמי</span>\n    </div>\n\n    <div class=\"checkUpProgressBar col-xs-12 col-md-10 col-md-push-1\" role=\"tablist\">\n      <div class=\"wrapper center-block\">\n        <div class=\"personal col-xs-4 col-md-2 noPadding passed\" role=\"presentation\">\n          <span class=\"tab-title\">פרטים אישיים</span>\n        </div>\n        <div class=\"overview col-xs-4 col-md-2 noPadding currentState\" role=\"presentation\">\n          <span class=\"tab-title\">תמונת מצב</span>\n        </div>\n        <div class=\"optional col-xs-4 col-md-2 noPadding\" role=\"presentation\">\n          <span class=\"tab-title\">שאלות משלימות</span>\n          <span class=\"optionalTitle\">אופציונלי</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"checkUpForm tab-content col-xs-12\">\n      <div role=\"tabpanel\" class=\"tab-pane\" id=\"personalData\">\n        <div class=\"pager\"></div>\n        <div class=\"personalDataForm\">\n          <div class=\"step1\">\n            <div class=\"genderSelect\">\n\n            </div>\n            <div class=\"personalDetails\">\n\n            </div>\n          </div>\n          <div class=\"step2\"></div>\n        </div>\n      </div>\n      <div role=\"tabpanel\" class=\"tab-pane active\" id=\"overviewData\">\n        <h3 class=\"sr-only\">תמונת מצב</h3>\n        <div class=\"step1\" style=\"display:none;\">\n          <div class=\"formAreaBox\">\n            <h4>כמה שווה החיסכון הפנסיוני שלך?</h4>\n            <p class=\"subtitle\">\n              על מנת לספק לך תמונה מלאה של\n              הכיסויים הביטוחים שלך, יצרנו עבורך טופס\n              קצר שבאמצעותו תוכל לקבל תמונה מדויקת\n              של (מצב הפנסיה שלך ממשרד האוצר\n              (המסלקה הפנסיונית)\n            </p>\n            <ul class=\"overview-items clearfix\">\n              <li class=\"col-xs-12 col-md-4\">\n                <div class=\"icon\">\n                  <img class=\"img-responsive center-block\" src=\"sample-images/icon_overview_lock.png\" alt=\"\" />\n                </div>\n                <p>\n                  אמצעי אבטחה מתקדמים לשמירת הפרטיות\n                </p>\n              </li>\n              <li class=\"col-xs-12 col-md-4\">\n                <div class=\"icon\">\n                  <img class=\"img-responsive center-block\" src=\"sample-images/icon_overview_label.png\" alt=\"\" />\n                </div>\n                <p>\n                  השירות ניתן ללא עלות\n                </p>\n              </li>\n              <li class=\"col-xs-12 col-md-4\">\n                <div class=\"icon\">\n                  <img class=\"img-responsive center-block\" src=\"sample-images/icon_overview_graph.png\" alt=\"\" />\n                </div>\n                <p>\n                  מידע מהימן ועדכני בנוגע לפוליסות הקיימות שלך\n                </p>\n              </li>\n            </ul>\n          </div>\n          <div class=\"checkUpControlls clearfix\">\n            <a (click)=\"back()\" class=\"btn backBtn\">\n              <span>חזור</span>\n            </a>\n            <a (click)=\"save()\" class=\"btn nextBtn\">\n              <span>התחל בדיקה</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"step2\" style=\"display:none;\">\n          <div class=\"step2-header\">\n            <h4>התחברות למאגר המידע של משרד האוצר (המסלקה)</h4>\n            <div class=\"icons\">\n              <img src=\"sample-images/icon_overview_lock.png\" alt=\"אמצעי אבטחה מתקדמים לשמירת הפרטיות\" />\n              <img src=\"sample-images/icon_overview_label.png\" alt=\"השירות ניתן ללא עלות\" />\n              <img src=\"sample-images/icon_overview_graph.png\" alt=\"מידע מהימן ועדכני בנוגע לפוליסות הקיימות שלך\" />\n            </div>\n          </div>\n          <div class=\"step2-notice\">\n            כרטיס האשראי <strong>לא</strong> יחוייב פרטייך ישמשו לצורך <strong>אימות זיהוי בלבד</strong>\n          </div>\n          <div class=\"formAreaBox embed-responsive\">\n            <iframe src=\"creditguard.html\" class=\"embed-responsive-item\"></iframe>\n          </div>\n        </div>\n        <div class=\"step3\">\n          <div class=\"formAreaBox\">\n            <h4 class=\"v-title\">\n              פרטיך התקבלו בהצלחה!\n            </h4>\n            <div class=\"subtitle\">\n              אישור יישלח אליך למייל\n              <br />\n              פניתך התקבלה, פונים בשמך למסלקה הפנסיונית של משרד האוצר\n            </div>\n          </div>\n          <div class=\"results-time\">\n            <div class=\"subtitle\">\n              המידע יתקבל בעוד\n            </div>\n            <span class=\"time\">\n                                    <strong>{{days}}</strong> ימים <strong>{{hours}}</strong> שעות <strong>{{minuts}}</strong> דקות <strong>{{seconds}}</strong> Second\n            </span>\n          </div>\n          <div class=\"checkUpControlls center-block\">\n            <a href=\"#\" class=\"btn nextBtn center-block\">\n              <span>הבא</span>\n            </a>\n          </div>\n          <div class=\"subtitle\">\n            נשאר עוד קצת...\n          </div>\n        </div>\n      </div>\n      <div role=\"tabpanel\" class=\"tab-pane formAreaBox\" id=\"optionalData\">\n        <h3 class=\"sr-only\">שאלות משלימות (אופציונאלי)</h3>\n        <form role=\"form\" action=\"#\" method=\"post\">\n          <div class=\"form-section\">\n            <fieldset>\n              <legend class=\"section-title\">יש לך חסכונות?</legend>\n              <div class=\"clearfix\">\n                <div class=\"savings-options form-group col-sm-10 pull-right\">\n                  <div class=\"toggle-savings\">\n                    <label>\n                      קרן השתלמות\n                      <input type=\"checkbox\" name=\"saving1\" value=\"1\" />\n                    </label>\n                    <label>\n                      קרן מנהלים\n                      <input type=\"checkbox\" name=\"saving1\" value=\"2\" />\n                    </label>\n                    <label>\n                      תכנית חיסכון\n                      <input type=\"checkbox\" name=\"saving1\" value=\"3\" />\n                    </label>\n                    <label>\n                      קופת גמל\n                      <input type=\"checkbox\" name=\"saving1\" value=\"4\" />\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"savings-amount form-group group-delimiter clearfix\" style=\"display:none;\">\n                <div>\n                  <label class=\"section-title\" for=\"\">הזן סכום</label>\n                </div>\n                <div class=\"savings-amount-input\">\n                  <input class=\"form-control\" type=\"text\" name=\"savingsAmount\" placeholder=\"הזן סכום\" />\n                </div>\n              </div>\n            </fieldset>\n          </div>\n          <div class=\"form-section\">\n            <fieldset>\n              <legend class=\"section-title\">יש לך קצבאות למשפחה?</legend>\n              <div class=\"form-group col-xs-12 col-sm-10 pull-right\">\n                <div class=\"toggle-pensions\">\n                  <label>\n                    פנסיה משולמת\n                    <input type=\"checkbox\" name=\"saving1\" value=\"1\" />\n                  </label>\n                  <label>\n                    ביטוח לאומי\n                    <input type=\"checkbox\" name=\"saving1\" value=\"2\" />\n                  </label>\n                  <label>\n                    השכרת נכס\n                    <input type=\"checkbox\" name=\"saving1\" value=\"3\" />\n                  </label>\n                </div>\n              </div>\n            </fieldset>\n          </div>\n          <div class=\"form-section\">\n            <fieldset>\n              <legend class=\"section-title\">יש לך הלוואות?</legend>\n              <div class=\"form-group loans col-xs-5 pull-right\">\n                <div class=\"toggle-loans\">\n                  <label>\n                    כן\n                    <input type=\"radio\" name=\"loans\" value=\"1\" />\n                  </label>\n                  <label>\n                    לא\n                    <input type=\"radio\" name=\"loans\" value=\"0\" />\n                  </label>\n                </div>\n              </div>\n              <div class=\"form-group has-loans\" style=\"display:none;\">\n                <div class=\"has-loans-section\">\n                  <label class=\"small-section-title text-center\" for=\"loanAmount\">הזן סכום:</label>\n                  <input class=\"form-control\" name=\"loanAmount\" type=\"text\" value=\"\" placeholder=\"הזן סכום\" />\n                </div>\n                <div class=\"has-loans-section\">\n                  <label class=\"small-section-title text-center\" for=\"loanAmount\">החזר חודשי:</label>\n                  <input class=\"form-control\" name=\"loanMonthlyAmount\" type=\"text\" value=\"\" placeholder=\"0,000\" />\n                </div>\n                <div class=\"has-loans-section\">\n                  <label class=\"small-section-title text-center\" for=\"loanRepayPeriod\">תקופת החזר בחודשים:</label>\n                  <input class=\"form-control\" name=\"loanRepayPeriod\" type=\"text\" value=\"\" placeholder=\"מס' חודשים\" />\n                </div>\n              </div>\n            </fieldset>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"checkUpSecurityInfo col-xs-12 col-md-6 col-md-push-3\">\n      <p>אבטחת מידע: כל המידע במערכת מועבר באופן מוצפן ובסטנדרט SSL, המוביל בתחום אבטחת הנתונים הפיננסיים בעולם</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/checkup-t2-s3/checkup-t2-s3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckupT2S3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckupT2S3Component = (function () {
    function CheckupT2S3Component() {
        this.seconds = 59;
        this.minuts = 59;
        this.hours = 23;
        this.days = 2;
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CheckupT2S3Component.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.seconds--;
            if (_this.seconds === 0) {
                _this.minuts--;
                _this.seconds = 59;
                if (_this.minuts === 0) {
                    _this.minuts = 59;
                    _this.hours--;
                    if (_this.hours === 0) {
                        _this.days--;
                        _this.hours = 23;
                    }
                }
            }
        }, 1000);
    };
    CheckupT2S3Component.prototype.back = function () {
        this.next.emit(({
            naxtPage: 't2-s2'
        }));
    };
    CheckupT2S3Component.prototype.save = function () {
        // this.next.emit(({
        //   naxtPage: 't2-s3',
        //   type: 'profession',
        //   modal: {
        //   },
        // }));
    };
    return CheckupT2S3Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CheckupT2S3Component.prototype, "next", void 0);
CheckupT2S3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkup-t2-s3',
        template: __webpack_require__("../../../../../src/app/wizard/checkup-t2-s3/checkup-t2-s3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/checkup-t2-s3/checkup-t2-s3.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CheckupT2S3Component);

//# sourceMappingURL=checkup-t2-s3.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/genderselect/genderselect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/genderselect/genderselect.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"calculatorHead col-xs-12 noPadding\">\n      <h2>השוואת הצעות לביטוח חיים</h2>\n      <p>\n        מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n      </p>\n      <span>יקח לך 2 דקות</span>\n    </div>\n    <div class=\"step_genderSelect col-xs-12 noPadding\">\n      <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError && !gender\">אנא בחר מין</span>\n      <div class=\"genderSelect\">\n        <fieldset>\n          <legend class=\"sr-only\">###</legend>\n          <input type=\"hidden\" name=\"gender\" id=\"hdnGender\" value=\"\" />\n          <div class=\"male\" (click)=\"gender= 'male'\" [ngClass]=\"{'active-male': gender === 'male'}\" role=\"button\" data-value=\"0\" tabindex=\"0\">\n            <span>גבר</span>\n          </div>\n          <div class=\"female\" (click)=\"gender= 'female'\" [ngClass]=\"{'active-female': gender === 'female'}\" role=\"button\" data-value=\"1\" tabindex=\"0\">\n            <span>אישה</span>\n          </div>\n        </fieldset>\n      </div>\n    </div>\n    <div class=\"calculatorControllsWrapper col-xs-12\">\n      <div class=\"calculatorControlls center-block\">\n        <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n          <span>המשך</span>\n        </a>\n      </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/genderselect/genderselect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenderselectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenderselectComponent = (function () {
    function GenderselectComponent(storeService) {
        this.storeService = storeService;
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var store = this.storeService.getByKey("genderselect");
        if (store) {
            this.gender = store;
        }
    }
    GenderselectComponent.prototype.ngOnInit = function () {
    };
    GenderselectComponent.prototype.save = function () {
        if (!this.gender) {
            this.showError = true;
        }
        else {
            this.next.emit(({
                // naxtPage: 'birthdate',
                // naxtPage: 'private-health-personalinfo',
                naxtPage: this.nextOption,
                model: this.gender,
                type: 'genderselect'
            }));
            this.storeService.setByKey("genderselect", this.gender);
        }
    };
    return GenderselectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GenderselectComponent.prototype, "next", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GenderselectComponent.prototype, "nextOption", void 0);
GenderselectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-genderselect',
        template: __webpack_require__("../../../../../src/app/wizard/genderselect/genderselect.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/genderselect/genderselect.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], GenderselectComponent);

var _a;
//# sourceMappingURL=genderselect.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/health-insurance/health-insurance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* active radio */\r\n/* div > div> div > div > div > div > div > fieldset > div > div > label:focus{ \r\n    background: #117ef5;\r\n    color: #626262;\r\n    border: none;\r\n    outline: none !important;\r\n}\r\ndiv.step_calculatorSummary.col-xs-12.noPadding > div > div > div > div > div> fieldset > div > label:focus{\r\n    background: #117ef5;\r\n    color: #626262;\r\n    border: none;\r\n    outline: none !important;\r\n} */\r\n.hasSmoked-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n.modalStatus{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] {\r\n    display:none;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n    width: 20%;\r\n    border: 2px solid #117ef5;\r\n    padding: 0 2rem;\r\n    font-size: 1.57143em;\r\n    line-height: 22px;\r\n    background:white;\r\n    cursor:pointer;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n    vertical-align:middle;\r\n    text-align: center;\r\n    color: #626262;\r\n    padding-top: 8px;\r\n    height: 43px;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n    /* border: 2px solid #707070 !important; */\r\n}\r\n.radio-buttons-top{\r\n    margin-bottom: 20px;\r\n}\r\n.bottom-input > input[type=\"radio\"] + label {\r\n    border: 1px solid #117ef5;\r\n    white-space: nowrap;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label > span{\r\n    color: white;\r\n    /* border: 2px solid #707070 !important; */\r\n}\r\n.left-input > input[type=\"radio\"] + label {\r\n    width: 32%;\r\n}\r\n.wrapper{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    height: 64px;\r\n}\r\n.clearfix{\r\n    \r\n}\r\n.form-wrapper{\r\n    position: relative;\r\n}\r\n.val-container{\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n@media screen and (min-width: 992px) {\r\n    .error-right{\r\n        padding-right: 103px !important;\r\n    }\r\n    .error-left{\r\n        padding-right: 97px !important;\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .wrapper{\r\n        display: block;\r\n        height: 107px;\r\n    }\r\n    .hasSmoked-input > input[type=\"radio\"] + label {\r\n        width: 33%;\r\n    }\r\n}\r\n@media screen and (max-width: 500px) {\r\n    .hasSmoked-input > input[type=\"radio\"] + label {\r\n        width: 91px;\r\n    }\r\n    .left-input > input[type=\"radio\"] + label {\r\n        width: 91px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/health-insurance/health-insurance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculator clearfix\">\n  <div class=\"calculatorHead col-xs-12 noPadding\">\n    <h2>השאוות הצעות לביטוח בריאות</h2>\n    <p>\n      מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n    </p>\n    <span>יקח לך 2 דקות</span>\n  </div>\n  <div class=\"step_calculatorSummary col-xs-12 noPadding\">\n    <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError\">הודעת שגיאה</span>\n    <div class=\"calculatorSummary col-xs-12\">\n\n      <div class=\"calculate\">\n        <!--private-health-->\n        <div class=\"private-health\">\n          <h3>תוכנית בריאות פרטית</h3>\n          <div class=\"generalForm\">\n            <!--form-group-->\n            <div class=\"form-group col-md-5 col-xs-12 right\">\n              <!--1-->\n              <fieldset class=\"form-wrapper\">\n                <legend class=\"sr-only\">###</legend>\n                <p>האם קיימת תוכנית בריאות פרטית?</p>\n                <div class=\"clearfix\">\n                  <div class=\"wrapper\">\n                      <div class=\"subject col-md-4 col-xs-12 right noPadding\">\n                          <div>\n                            דוד דוד דוד דוד\n                          </div>\n                        </div>\n                        <div class=\"private1 btn-group btoggle btoggle-single col-md-7  col-xs-12 noPadding right\" dir=\"rtl\">\n                        <div class=\"hasSmoked-input bottom-input\">\n                            <input type=\"radio\" id=\"radio1\" name=\"private-health11\" value=\"1\" [(ngModel)]=\"manExist\"/>\n                            <label for=\"radio1\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >כן</span></label>\n                            <input type=\"radio\" id=\"radio2\" name=\"private-health11\" value=\"2\" [(ngModel)]=\"manExist\"/>\n                            <label for=\"radio2\" style=\"border-right:0px;\"><span >לא</span></label>\n                            <input type=\"radio\" id=\"radio3\" name=\"private-health11\" value=\"3\" [(ngModel)]=\"manExist\"/>\n                            <label for=\"radio3\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                        </div>\n\n                        </div>\n                  </div>\n\n                </div>\n                <div *ngIf=\"showError && !manExist\" class=\"val-container\">\n                  <span class=\"small field-validation-error error-right\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                </div>\n              </fieldset>\n              <!--2-->\n              <fieldset *ngIf=\"info.wifeName\" class=\"form-wrapper\">\n                <div class=\"clearfix\">\n                    <div class=\"wrapper\">\n                        <div class=\"subject col-md-4 col-xs-12 right noPadding\"><div>בן/ בת זוג:</div></div>\n                        <div class=\"private2 btn-group btoggle btoggle-single col-md-7  col-xs-12 noPadding right\" dir=\"rtl\">\n                            <div class=\"hasSmoked-input bottom-input\">\n                                <input type=\"radio\" id=\"radio4\" name=\"private-health12\" value=\"1\"  [(ngModel)]=\"wifeExist\"/>\n                                <label for=\"radio4\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >כן</span></label>\n                                <input type=\"radio\" id=\"radio5\" name=\"private-health12\" value=\"2\"  [(ngModel)]=\"wifeExist\"/>\n                                <label for=\"radio5\" style=\"border-right:0px;\"><span >לא</span></label>\n                                <input type=\"radio\" id=\"radio6\" name=\"private-health12\" value=\"3\" [(ngModel)]=\"wifeExist\" />\n                                <label for=\"radio6\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n                <div *ngIf=\"showError && !wifeExist\" class=\"val-container\">\n                  <span class=\"small field-validation-error error-right\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                </div>\n              </fieldset>\n              <!--3-->\n              <fieldset *ngIf=\"info.childAmount\" class=\"form-wrapper\">\n                  <div class=\"wrapper\">\n                      <div class=\"subject col-md-4 col-xs-12 right noPadding\"><div>ילדים:</div></div>\n                      <div class=\"private3 btn-group btoggle btoggle-single col-md-7  col-xs-12 right noPadding\" dir=\"rtl\">\n                        <div class=\"hasSmoked-input bottom-input\">\n                                <input type=\"radio\" id=\"radio7\" name=\"private-health13\" value=\"1\"  [(ngModel)]=\"childExist\"/>\n                                <label for=\"radio7\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >כן</span></label>\n                                <input type=\"radio\" id=\"radio8\" name=\"private-health13\" value=\"2\" [(ngModel)]=\"childExist\"/>\n                                <label for=\"radio8\" style=\"border-right:0px;\"><span >לא</span></label>\n                                <input type=\"radio\" id=\"radio9\" name=\"private-health13\" value=\"3\" [(ngModel)]=\"childExist\"/>\n                                <label for=\"radio9\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                            </div>\n\n                      </div>\n                  </div>\n                  <div *ngIf=\"showError && !childExist\" class=\"val-container\">\n                    <span class=\"small field-validation-error error-right\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                  </div>\n              </fieldset>\n              <!--span class=\"field-validation-error\">error<!--/span-->\n            </div>\n            <!--end form-group-->\n            <!--form-group-->\n            <div class=\"form-group col-md-7 col-xs-12 right\">\n              <!--1-->\n              <fieldset class=\"form-wrapper\">\n                <p>סוג התוכנית</p>\n                <div class=\"clearfix\">\n                    <div class=\"wrapper\" [ngClass]=\"{'inactive-block': manExist === '2'}\">\n                        <div class=\"subject col-md-2 col-xs-12 noPadding right\">\n                            <div>\n                              דוד\n                            </div>\n                          </div>\n                          <div class=\"type1 btn-group btoggle btoggle-single col-md-9  col-xs-12 noPadding right\" dir=\"rtl\">\n                              <div class=\"hasSmoked-input bottom-input left-input\">\n                                  <input type=\"radio\" id=\"radio13\" name=\"private-health1\" value=\"1\" [(ngModel)]=\"manType\"/>\n                                  <label for=\"radio13\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >פרטית</span></label>\n                                  <input type=\"radio\" id=\"radio14\" name=\"private-health1\" value=\"2\" [(ngModel)]=\"manType\"/>\n                                  <label for=\"radio14\" style=\"border-right:0px;\"><span >קולקטיב</span></label>\n                                  <input type=\"radio\" id=\"radio15\" name=\"private-health1\" value=\"3\" [(ngModel)]=\"manType\"/>\n                                  <label for=\"radio15\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                              </div>\n\n                          </div>\n                    </div>\n\n                </div>\n                <div *ngIf=\"showError && !manType && manExist !== '2'\" class=\"val-container\">\n                  <span class=\"small field-validation-error error-left\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                </div>\n              </fieldset>\n              <!--2-->\n              <fieldset *ngIf=\"info.wifeName\"  class=\"form-wrapper\">\n                <div class=\"wrapper\" [ngClass]=\"{'inactive-block': wifeExist === '2'}\">\n                    <div class=\"subject col-md-3 noPadding right col-xs-12\" style=\"white-space:nowrap;margin-left: 7px;\"><div>בן/ בת זוג:</div></div>\n                    <div class=\"clearfix\" style=\"width: 100%;\">\n                      <div class=\"type2 btn-group btoggle btoggle-single col-xs-12 noPadding right\" dir=\"rtl\">\n                          <div class=\"hasSmoked-input bottom-input left-input\">\n                              <input type=\"radio\" id=\"radio16\" name=\"private-health2\" value=\"1\" [(ngModel)]=\"wifeType\"/>\n                              <label for=\"radio16\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >פרטית</span></label>\n                              <input type=\"radio\" id=\"radio17\" name=\"private-health2\" value=\"2\" [(ngModel)]=\"wifeType\"/>\n                              <label for=\"radio17\" style=\"border-right:0px;\"><span >קולקטיב</span></label>\n                              <input type=\"radio\" id=\"radio18\" name=\"private-health2\" value=\"3\" [(ngModel)]=\"wifeType\"/>\n                              <label for=\"radio18\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                          </div>\n\n                      </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"showError && !wifeType && wifeExist !== '2'\" class=\"val-container\">\n                  <span class=\"small field-validation-error error-left\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                </div>\n              </fieldset>\n              <!--3-->\n              <fieldset *ngIf=\"info.childAmount\" class=\"form-wrapper\">\n                <div class=\"wrapper\" [ngClass]=\"{'inactive-block': childExist === '2'}\">\n                    <div class=\"subject col-md-2 col-xs-12 noPadding right\"><div>ילדים:</div></div>\n                    <div class=\"type3 btn-group btoggle btoggle-single col-md-9  col-xs-12 noPadding right\" dir=\"rtl\">\n                        <div class=\"hasSmoked-input bottom-input left-input\">\n                            <input type=\"radio\" id=\"radio19\" name=\"private-health3\" value=\"1\" [(ngModel)]=\"childType\"/>\n                            <label for=\"radio19\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >פרטית</span></label>\n                            <input type=\"radio\" id=\"radio20\" name=\"private-health3\" value=\"2\" [(ngModel)]=\"childType\"/>\n                            <label for=\"radio20\" style=\"border-right:0px;\"><span >קולקטיב</span></label>\n                            <input type=\"radio\" id=\"radio21\" name=\"private-health3\" value=\"3\" [(ngModel)]=\"childType\"/>\n                            <label for=\"radio21\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                        </div>\n\n                    </div>\n                </div>\n                <div *ngIf=\"showError && !childType && childExist !== '2'\" class=\"val-container\">\n                  <span class=\"small field-validation-error error-left\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                </div>\n                <!--span class=\"field-validation-error\">error<!--/span-->\n              </fieldset>\n              <!--end form-group-->\n            </div>\n          </div>\n        </div>\n        <!--end private-health-->\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"calculatorControllsWrapper col-xs-12\">\n    <div class=\"calculatorControlls center-block\">\n      <a (click)=\"back()\" class=\"btn backBtn center-block\">\n        <span>&#60;חזור</span>\n      </a>\n      <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n        <span>לקבלת הצעות</span>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/health-insurance/health-insurance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthInsuranceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HealthInsuranceComponent = (function () {
    function HealthInsuranceComponent(storeService) {
        this.storeService = storeService;
        this.manExist = "";
        this.manType = "";
        this.wifeExist = "";
        this.wifeType = "";
        this.childExist = "";
        this.childType = "";
        this.info = {};
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HealthInsuranceComponent.prototype.ngOnInit = function () {
        var info = this.storeService.getByKey("private-health-personalinfo");
        if (info) {
            this.info = info;
        }
    };
    HealthInsuranceComponent.prototype.save = function () {
        if (!this.manExist || (!this.manType && this.manExist !== '2') ||
            (this.info.wifeName && (!this.wifeExist || !this.wifeType) && this.wifeExist !== '2') ||
            (this.info.childAmount && (!this.childExist || !this.childType) && this.childExist !== '2')) {
            this.showError = true;
        }
        else {
            this.next.emit(({
                finish: true,
                naxtPage: 'health-insurance',
                type: "health-insurance",
                model: this.manExist
            }));
        }
    };
    HealthInsuranceComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'kupot-holim'
        }));
    };
    return HealthInsuranceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HealthInsuranceComponent.prototype, "next", void 0);
HealthInsuranceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-health-insurance',
        template: __webpack_require__("../../../../../src/app/wizard/health-insurance/health-insurance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/health-insurance/health-insurance.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], HealthInsuranceComponent);

var _a;
//# sourceMappingURL=health-insurance.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/info/info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  .contactPhone{\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n  }\r\n  .calculator .step_personalInfo .personalInfo .confirmBox label.checked::before, .calculator .step_personalInfo .getResults .confirmBox label.checked::before, .calculator .step_getResults .personalInfo .confirmBox label.checked::before, .calculator .step_getResults .getResults .confirmBox label.checked::before{\r\n    content: \"\\F046\";\r\n  }\r\n  \r\n  /* .checked{\r\n    content: \"\\f046\";\r\n  }\r\n  input[type=\"checkbox\"] {\r\n    display:none;\r\n}\r\n\r\ninput[type=\"hidden\"] + label {\r\n    color:#f2f2f2;\r\n}\r\n\r\ninput[type=\"checkbox\"] + label span {\r\n    display:inline-block;\r\n    width:19px;\r\n    height:19px;\r\n    margin:-2px 10px 0 0;\r\n    vertical-align:middle;\r\n    background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) left top no-repeat;\r\n    cursor:pointer;\r\n} */\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput[type=\"checkbox\"]:checked + label::before {\r\n    content: \"\\F046\";\r\n}\r\n@media screen and (max-width: 992px) {\r\n    div.noPadding.clearfix > div > div > div{\r\n        width: 27% !important;\r\n    }\r\n    .contactPhone {\r\n        height: 33px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorHead col-xs-12 noPadding\">\n  <h2>השאוות הצעות לביטוח חיים</h2>\n  <p>\n    מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n  </p>\n  <span>יקח לך 2 דקות</span>\n</div>\n<div class=\"step_personalInfo col-xs-12 noPadding\">\n  <!--<span class=\"field-validation-error center-block text-center\">הודעת שגיאה</span>-->\n  <div class=\"personalInfo col-xs-10 col-xs-push-1\">\n    <fieldset>\n      <legend class=\"sr-only\">###</legend>\n      <div class=\"wrapper\">\n        <div class=\"noPadding\">\n          <label for=\"firstName\" class=\"\">שם פרטי</label>\n          <input id=\"firstName\" [(ngModel)]=\"model.firstName\" class=\"form-control\" type=\"text\" name=\"firstName\" placeholder=\"שם פרטי\" data-placeholder=\"שם פרטי\">\n          <span class=\"field-validation-error\" *ngIf=\"showError && !model.firstName\">שדה שם פרטי הוא שדה חובה</span>\n        </div>\n        <div class=\"noPadding\">\n          <label for=\"lastName\">שם משפחה</label>\n          <input id=\"lastName\" [(ngModel)]=\"model.lastName\" class=\"form-control\" type=\"text\" name=\"lastName\" placeholder=\"שם משפחה\" data-placeholder=\"שם משפחה\">\n          <span class=\"field-validation-error\" *ngIf=\"showError && !model.lastName\" data-valmsg-for=\"LastName\" data-valmsg-replace=\"true\"><span id=\"LastName-error\" class=\"\">שדה שם משפחה הוא שדה חובה</span></span>\n        </div>\n        <div class=\"noPadding clearfix\">\n          <label for=\"phone\">הטלפון שלי</label>\n          <input id=\"phone\" type=\"hidden\" value=\"\" />\n          <div class=\"clearfix\">\n            <div class=\"contactPhone noPadding col-xs-12\">\n              <div style=\"width: 90px;\">\n                <app-autocomplit [data]=\"phoneData\" (change)=\"phoneChange($event)\"></app-autocomplit>\n              </div>\n\n              <input [(ngModel)]=\"model.phone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"הטלפון שלי\" data-placeholder=\"הטלפון שלי\">\n            </div>\n          </div>\n          <span class=\"field-validation-error\" *ngIf=\"showError && !model.phone\">שדה טלפון הוא שדה חובה</span>\n        </div>\n        <div class=\"noPadding\">\n          <label for=\"email\" class=\"\">כתובת אימייל</label>\n          <div class=\"clearfix\">\n            <input [(ngModel)]=\"model.email\" id=\"email\" class=\"form-control col-md-4\" type=\"text\" name=\"email\" placeholder=\"המייל שלי\" data-placeholder=\"המייל שלי\">\n          </div>\n          <span class=\"field-validation-error\" *ngIf=\"showError && !model.email\">יש להזין כתובת אימייל חוקית</span>\n        </div>\n\n        <div class=\"confirmBox noPadding\">\n          <!-- <input type=\"checkbox\" name=\"confirm\" value=\"1\" id=\"confirmBoxInput\" /> -->\n          <input [ngModel]=\"model.link\" type=\"checkbox\" value=\"checkboxvalue\" id=\"confirmBoxInput\"/>\n          <label class=\"checkbox-label \" for=\"confirmBoxInput\">\n            אישור קבלת חומר שיווקי\n          </label>\n          <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n          <div>\n            <span class=\"field-validation-error\" *ngIf=\"showError && !model.link\">יש לאשר קבלת חומר שיווקי</span>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n\n</div>\n<div class=\"calculatorControllsWrapper col-xs-12\">\n  <div class=\"calculatorControlls center-block\">\n    <a href=\"#\" class=\"btn backBtn center-block\">\n      <span>&#60;חזור</span>\n    </a>\n    <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n      <span>הבא</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoComponent = (function () {
    function InfoComponent(storeService) {
        this.storeService = storeService;
        this.model = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            prefix: "050",
            link: true
        };
        this.phoneData = [
            {
                label: "050",
                value: "050"
            },
            {
                label: "040",
                value: "040"
            },
            {
                label: "060",
                value: "060"
            },
            {
                label: "070",
                value: "070"
            },
        ];
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var store = this.storeService.getByKey("info");
        if (store) {
            this.model = store;
        }
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent.prototype.phoneChange = function (e) {
        this.model.prefix = e;
    };
    InfoComponent.prototype.save = function () {
        console.log(this.model);
        if (this.model.phone === "" ||
            this.model.email === "" ||
            this.model.lastName === "" ||
            this.model.firstName === "") {
            this.showError = true;
        }
        else {
            this.next.emit(({
                naxtPage: 'genderselect',
                type: "info",
                model: this.model
            }));
            this.storeService.setByKey("info", this.model);
        }
    };
    return InfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InfoComponent.prototype, "next", void 0);
InfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-info',
        template: __webpack_require__("../../../../../src/app/wizard/info/info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/info/info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], InfoComponent);

var _a;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/kupot-holim/kupot-holim.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*  active radio */\r\ndiv.step_calculatorSummary.col-xs-12.noPadding > div > div > div > div > div > fieldset > div > input[type=\"radio\"]:checked + label{\r\n    background: #117ef5 !important;\r\n    color: #626262 !important;\r\n    border: none !important;\r\n    outline: none !important;\r\n}\r\n/*  */\r\n\r\n.hasSmoked-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.modalStatus{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] {\r\n    display:none;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n    width: 25%;\r\n    border: 2px solid #117ef5;\r\n    padding: 0 2rem;\r\n    font-size: 1.57143em;\r\n    line-height: 22px;\r\n    background:white;\r\n    cursor:pointer;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n   \r\n    \r\n    vertical-align:middle;\r\n    \r\n   \r\n    \r\n    text-align: center;\r\n    color: #626262;\r\n    padding-top: 8px;\r\n    height: 43px;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n    /* border: 2px solid #707070 !important; */\r\n}\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label > span{\r\n    color: white;\r\n    /* border: 2px solid #707070 !important; */\r\n}\r\n.radio-buttons-top{\r\n    margin-bottom: 20px;\r\n}\r\n.bottom-input > input[type=\"radio\"] + label {\r\n    width: 25%;\r\n    border: 1px solid #117ef5;\r\n}\r\n.left-wrap-radio > input[type=\"radio\"] + label {\r\n    width: 41%;\r\n}\r\n.left-wrap-radio > input[type=\"radio\"] +  label:nth-child(4){\r\n    width: 59%;\r\n}\r\n@media screen and (max-width: 992px) {\r\n    .left-content-top {\r\n        float: right;\r\n        padding-right: 0\r\n    }\r\n}\r\n@media screen and (max-width: 500px) {\r\n    .bottom-input > input[type=\"radio\"] + label {\r\n        padding: 0 0 !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/kupot-holim/kupot-holim.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"calculator clearfix\">\n    <div class=\"calculatorHead col-xs-12 noPadding\">\n      <h2>השאוות הצעות לביטוח בריאות</h2>\n      <p>\n        מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n      </p>\n      <span>יקח לך 2 דקות</span>\n    </div>\n    <div class=\"step_calculatorSummary col-xs-12 noPadding\">\n      <span class=\"field-validation-error center-block text-center\"*ngIf=\"showError\">הודעת שגיאה</span>\n      <div class=\"calculatorSummary col-xs-12\">\n\n        <div class=\"calculate\">\n          <!--private-health-->\n          <div class=\"private-health\">\n            <h3 class=\"yesPadding\">קופת חולים + משלימים</h3>\n            <div class=\"generalForm HMO\">\n              <div class=\"radio-buttons-top col-xs-12 \">\n                  <div class=\"col-md-5 col-xs-8 left-content-top\">\n                      <div class=\"col-xs-12 noPadding\">\n                          <div class=\"statusForm big\" style=\"display: flex;flex-flow: column;\">\n                              <div class=\"subject right noPadding\">ביטוח משלים</div>\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio6\" name=\"status1\" value=\"true\" [(ngModel)]=\"obj.manHMOextra\"/>\n                                  <label for=\"radio6\" style=\"border-bottom-right-radius: 20px;border-top-right-radius: 20px;\"><span >כן</span></label>\n                                  <input type=\"radio\" id=\"radio7\" name=\"status1\" value=\"false\" [(ngModel)]=\"obj.manHMOextra\"/>\n                                  <label for=\"radio7\" style=\"border-right:0px;border-bottom-left-radius: 20px;border-top-left-radius: 20px;\"><span >לא</span></label>\n                              </div>\n                          </div>\n                          <span class=\"field-validation-error\" *ngIf=\"showError && !obj.manHMOextra && obj.manHMOextra !== false\">אנא בחר ערך</span>\n                        </div>\n                  </div>\n                  <div class=\"col-md-7 col-xs-12\" style=\"padding-right: 0;\">\n                      <div class=\"col-xs-12 noPadding\" style=\"padding-right: 0;\">\n                          <div class=\"statusForm big\" style=\"display: flex;flex-flow: column;\">\n                              <div class=\"subject right noPadding\">קופת חולים</div>\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio1\" name=\"status12\" value=\"16\" [(ngModel)]=\"obj.manHMO\"/>\n                                  <label for=\"radio1\" style=\"border-bottom-right-radius: 20px;border-top-right-radius: 20px;\"><span >מאוחדת</span></label>\n                                  <input type=\"radio\" id=\"radio3\" name=\"status12\" value=\"17\" [(ngModel)]=\"obj.manHMO\"/>\n                                  <label for=\"radio3\" style=\"border-right:0px;\"><span >כללית</span></label>\n                                  <input type=\"radio\" id=\"radio4\" name=\"status12\" value=\"18\" [(ngModel)]=\"obj.manHMO\"/>\n                                  <label for=\"radio4\" style=\"border-right:0px;\"><span >מכבי</span></label>\n                                  <input type=\"radio\" id=\"radio5\" name=\"status12\" value=\"19\" [(ngModel)]=\"obj.manHMO\"/>\n                                  <label for=\"radio5\" style=\"border-right:0px;border-bottom-left-radius: 20px;border-top-left-radius: 20px;\"><span >לאומית</span></label>\n                              </div>\n                          </div>\n                          <span class=\"field-validation-error\" *ngIf=\"showError && !obj.manHMO\">אנא בחר ערך</span>\n                        </div>\n                  </div>\n              </div>\n              <!--form-group-->\n              <div *ngIf=\"info.wifeName\" class=\"form-group col-xs-12 noPadding\">\n                <!--1-->\n                <fieldset class=\"col-md-8  col-xs-12 right form-wrapper\">\n                  <legend class=\"sr-only\">###</legend>\n                  <div class=\"subject col-xs-12 right noPadding\">בן/ בת זוג</div>\n                  <div class=\"HMO-name btn-group btoggle btoggle-single col-xs-12 noPadding right\" dir=\"rtl\">\n                      <div class=\"hasSmoked-input bottom-input\">\n                          <input type=\"radio\" id=\"radio8\" name=\"HMO-name\" value=\"1\" [(ngModel)]=\"obj.wifeHMO\"/>\n                          <label for=\"radio8\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >מאוחדת</span></label>\n                          <input type=\"radio\" id=\"radio9\" name=\"HMO-name\" value=\"2\" [(ngModel)]=\"obj.wifeHMO\"/>\n                          <label for=\"radio9\" style=\"border-right:0px;\"><span > כללית</span></label>\n                          <input type=\"radio\" id=\"radio10\" name=\"HMO-name\" value=\"3\" [(ngModel)]=\"obj.wifeHMO\"/>\n                          <label for=\"radio10\" style=\"border-right:0px;\"><span >מכבי</span></label>\n                          <input type=\"radio\" id=\"radio11\" name=\"HMO-name\" value=\"4\" [(ngModel)]=\"obj.wifeHMO\"/>\n                          <label for=\"radio11\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לאומית</span></label>\n                      </div>\n\n                  </div>\n                  <span class=\"field-validation-error small\" *ngIf=\"showError && !obj.wifeHMO\">אנא בחר ערך</span>\n                </fieldset>\n                <!--2-->\n                <fieldset class=\"col-md-4 col-xs-8 right form-wrapper\">\n                  <div class=\"subject col-xs-12 right noPadding\">משלים</div>\n                  <div class=\"HMO-name2 btn-group btoggle btoggle-single  col-xs-12 noPadding right\" dir=\"rtl\">\n                      <div class=\"hasSmoked-input bottom-input left-wrap-radio\">\n                          <input type=\"radio\" id=\"radio12\" name=\"HMO-name1\" value=\"false\" [(ngModel)]=\"obj.wifeHMOextra\"/>\n                          <label for=\"radio12\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >קיים</span></label>\n                          <input type=\"radio\" id=\"radio13\" name=\"HMO-name1\" value=\"true\" [(ngModel)]=\"obj.wifeHMOextra\"/>\n                          <label for=\"radio13\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא קיים</span></label>\n                      </div>\n\n                  </div>\n                  <span class=\"field-validation-error small\" *ngIf=\"showError && !obj.wifeHMOextra && obj.wifeHMOextra !== false\">אנא בחר ערך</span>\n                </fieldset>\n\n              </div>\n              <!--end form-group-->\n              <!--form-group-->\n              <div *ngIf=\"info.childAmount\" class=\"form-group col-xs-12 noPadding\">\n                <!--1-->\n                <fieldset class=\"col-md-8  col-xs-12 right form-wrapper\">\n                  <legend class=\"sr-only\">###</legend>\n                  <div class=\"subject col-xs-12 right noPadding\">ילדים</div>\n                  <div class=\"HMO-spouse btn-group btoggle btoggle-single col-xs-12 noPadding right\" dir=\"rtl\">\n                      <div class=\"hasSmoked-input bottom-input\">\n                          <input type=\"radio\" id=\"radio14\" name=\"HMO-spouse\" value=\"1\" [(ngModel)]=\"obj.childHMO\"/>\n                          <label for=\"radio14\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >מאוחדת</span></label>\n                          <input type=\"radio\" id=\"radio15\" name=\"HMO-spouse\" value=\"2\" [(ngModel)]=\"obj.childHMO\"/>\n                          <label for=\"radio15\" style=\"border-right:0px;\"><span >כללית</span></label>\n                          <input type=\"radio\" id=\"radio16\" name=\"HMO-spouse\" value=\"3\" [(ngModel)]=\"obj.childHMO\"/>\n                          <label for=\"radio16\" style=\"border-right:0px;\"><span >מכבי</span></label>\n                          <input type=\"radio\" id=\"radio17\" name=\"HMO-spouse\" value=\"4\" [(ngModel)]=\"obj.childHMO\"/>\n                          <label for=\"radio17\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לאומית</span></label>\n                      </div>\n\n                  </div>\n                  <span class=\"field-validation-error small\" *ngIf=\"showError && !obj.childHMO\">אנא בחר ערך</span>\n                </fieldset>\n                <!--2-->\n                <fieldset class=\"col-md-4 col-xs-8 right form-wrapper\">\n                  <div class=\"subject col-xs-12 right noPadding\">משלים</div>\n                  <div class=\"HMO-couple2 btn-group btoggle btoggle-single  col-xs-12 noPadding right\" dir=\"rtl\">\n                      <div class=\"hasSmoked-input bottom-input left-wrap-radio\">\n                          <input type=\"radio\" id=\"radio18\" name=\"HMO-couple\" value=\"1\" [(ngModel)]=\"obj.childHMOextra\"/>\n                          <label for=\"radio18\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >קיים</span></label>\n                          <input type=\"radio\" id=\"radio19\" name=\"HMO-couple\" value=\"2\" [(ngModel)]=\"obj.childHMOextra\"/>\n                          <label for=\"radio19\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא קיים</span></label>\n                      </div>\n\n                  </div>\n                  <span class=\"field-validation-error small\" *ngIf=\"showError && !obj.childHMOextra && obj.childHMOextra !== false\">אנא בחר ערך</span>\n                </fieldset>\n              </div>\n              <!--end form-group-->\n\n\n            </div>\n          </div>\n          <!--end private-health-->\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"calculatorControllsWrapper col-xs-12\">\n      <div class=\"calculatorControlls center-block\">\n        <a (click)=\"back()\" class=\"btn backBtn center-block\">\n          <span>&#60;חזור</span>\n        </a>\n        <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n          <span>המשך</span>\n        </a>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/kupot-holim/kupot-holim.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KupotHolimComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KupotHolimComponent = (function () {
    function KupotHolimComponent(storeService) {
        this.storeService = storeService;
        this.obj = {
            manHMO: "",
            manHMOextra: "",
            wifeHMO: "",
            wifeHMOextra: "",
            childHMO: "",
            childHMOextra: ""
        };
        this.info = {
            wifeName: 2,
            childAmount: 2,
        };
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    KupotHolimComponent.prototype.ngOnInit = function () {
        var store = this.storeService.getByKey("kupot-holim");
        if (store) {
            this.obj = store;
        }
        this.info = this.storeService.getByKey("private-health-personalinfo");
    };
    KupotHolimComponent.prototype.save = function () {
        if (((!this.obj.manHMO && !(this.obj.manHMO === false)) || !this.obj.manHMOextra) ||
            (this.info.wifeName && ((!this.obj.wifeHMO && !(this.obj.wifeHMO === false)) || !this.obj.wifeHMOextra)) ||
            (this.info.childAmount && ((!this.obj.childHMO && !(this.obj.childHMO === false)) || !this.obj.childHMOextra))) {
            this.showError = true;
        }
        else {
            this.next.emit(({
                naxtPage: 'health-insurance',
                type: "kupot-holim",
                model: this.obj
            }));
            this.storeService.setByKey("kupot-holim", this.obj);
        }
    };
    KupotHolimComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'private-health-personalinfo'
        }));
    };
    return KupotHolimComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], KupotHolimComponent.prototype, "next", void 0);
KupotHolimComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-kupot-holim',
        template: __webpack_require__("../../../../../src/app/wizard/kupot-holim/kupot-holim.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/kupot-holim/kupot-holim.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], KupotHolimComponent);

var _a;
//# sourceMappingURL=kupot-holim.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.hasSmoked-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.modalStatus{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] {\r\n    display:none;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n    width: 20%;\r\n    border: 1px solid #117ef5;\r\n    padding: 0 2rem;\r\n    font-size: 1.57143em;\r\n    line-height: 22px;\r\n    background:white;\r\n    cursor:pointer;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n    vertical-align:middle;\r\n    text-align: center;\r\n    color: #626262;\r\n    padding-top: 8px;\r\n    height: 43px;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label > span{\r\n    color: white;\r\n}\r\n.center-block{\r\n    height: 45px;\r\n}\r\n/* .smoke-input{\r\n    display: flex;\r\njustify-content: center;\r\n} */\r\n.smoke-input > input[type=\"radio\"] + label {\r\n    border: 2px solid #117ef5;\r\n    width: 30%;\r\n}\r\n.intut-wrapper-inside > input[type=\"radio\"] + label {\r\n    border: 2px solid #117ef5;\r\n}\r\n.smole-buttons > input[type=\"radio\"] + label {\r\n    padding: 0 24px;\r\n}\r\n@media (max-width: 992px){\r\n    .checkup-error-position {\r\n        text-align: center !important;\r\n    }\r\n}\r\n@media (max-width: 570px){\r\n    .hasSmoked-input > input[type=\"radio\"] + label {\r\n        padding: 0 1rem;  \r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"calculator clearfix\">\n      <div class=\"calculatorHead col-xs-12 noPadding\">\n        <h2>השאוות הצעות לביטוח בריאות</h2>\n        <p>\n          מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n        </p>\n        <span>יקח לך 2 דקות</span>\n      </div>\n      <div class=\"step_calculatorSummary col-xs-12 noPadding\">\n        <!--<span class=\"field-validation-error center-block text-center\">הודעת שגיאה</span>-->\n        <div class=\"calculatorSummary col-xs-12\">\n\n          <div class=\"calculate\">\n            <!--private-health-->\n            <div class=\"private-health\">\n              <div class=\"generalForm\" >\n                <!--personalDetails-->\n                <div class=\"personalDetails\">\n                  <fieldset>\n                    <legend class=\"sr-only\">###</legend>\n                    <div class=\"birthDate pull-right noPadding col-md-5 col-xs-12\">\n                      <label class=\"subject\">תאריך לידה</label>\n                      <div class=\"wrapper center-block button-helth-top\" id=\"button-helth-top\">\n                          <div class=\"selectWrapper\"  style=\"width: 19%;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                          <div class=\"selectWrapper\" style=\"width: 38%;margin-right: 2px;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                          <div class=\"selectWrapper\" style=\"width: 27%;margin-right: 3px;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                        </div>\n                      <!-- <div class=\"selectWrapper big\">\n                        <select class=\"day selectpicker\">\n                          <option>14</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                        </select>\n                      </div>\n                      <div class=\"selectWrapper big\">\n                        <select class=\"month selectpicker\">\n                          <option>ספט'</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                        </select>\n                      </div>\n                      <div class=\"selectWrapper big\">\n                        <select class=\"year selectpicker\">\n                          <option>1975</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                        </select>\n                      </div> -->\n                      <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                      <!--<span class=\"field-validation-error\">אנא בחר ערך</span>-->\n                    </div>\n\n                  </fieldset>\n                </div>\n                <!--end personalDetails-->\n                <!--smoking-->\n                <div class=\"step_smoking col-xs-12 clearfix noPadding\">\n                  <div class=\"smoking\">\n                    <div class=\"col-md-7 col-xs-12 pull-right noPadding\">\n                      <div class=\"isSmoking\">\n                        <fieldset>\n                          <legend class=\"sr-only\">###</legend>\n                          <input type=\"hidden\" name=\"smoking\" id=\"hdnSmoking\" value=\"\" />\n                          <div class=\"yes \" (click)=\"obj.smoking = true\" [ngClass]=\"{'yes-active': obj.smoking === true}\" role=\"button\" data-value=\"1\" tabindex=\"0\">\n                            <span>מעשן</span>\n                          </div>\n                          <div class=\"no\" (click)=\"obj.smoking = false\" [ngClass]=\"{'no-active': obj.smoking === false}\" role=\"button\" data-value=\"0\" tabindex=\"0\">\n                            <span>לא מעשן</span>\n                          </div>\n                        </fieldset>\n                        <span class=\"small field-validation-error\" *ngIf=\"showError && !obj.smoking && obj.smoking !== false\" data-valmsg-for=\"IsSmokedPast3Years\" data-valmsg-replace=\"true\"><span id=\"IsSmokedPast3Years-error\" class=\"\">אנא בחר ערך</span></span>\n\n                      </div>\n                    </div>\n\n                    <div  class=\"col-md-5 col-xs-12 noPadding  pull-right\">\n                      <div class=\"lastSmoked hasSmoked\" *ngIf=\"obj.smoking === false\">\n                        <fieldset>\n                          <legend style=\"text-align: right;\">האם עישנת ב-3 השנים האחרונות</legend>\n                          <div class=\"hasSmoked-input smoke-input\">\n                            <input type=\"radio\" id=\"smoke\" name=\"status91\" value=\"כן\" [(ngModel)]=\"obj.yearSmokin\"/>\n                            <label for=\"smoke\" style=\"border-radius:0px 17px 17px 0px;\"><span style=\"\">כן</span></label>\n                            <input type=\"radio\" id=\"nsmoke\" name=\"status91\" value=\"לא\" [(ngModel)]=\"obj.yearSmokin\"/>\n                            <label for=\"nsmoke\" style=\"position: relative;left: 0px;border-right:none;border-radius:17px 0px 0px 17px;\"><span style=\"\">לא</span></label>\n                          </div>\n                          <span class=\"field-validation-error small\" *ngIf=\"showError && smoking === false && !obj.yearSmokin\">אנא בחר ערך</span>\n                        </fieldset>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!--end smoking-->\n                <!--MedicalSection-->\n                <!--<div class=\"MedicalSection col-xs-12 clearfix noPadding\">-->\n                  <!--<fieldset>-->\n                    <!--<legend class=\"sr-only\">###</legend>-->\n                    <!--<div class=\"clinic formSection col-md-7 col-xs-12 pull-right noPadding\">-->\n                      <!--<label class=\"subject\">קופת חולים:</label>-->\n                      <!--<div class=\"wrapper\">-->\n                        <!--<div class=\"form-group col-xs-12 noPadding\">-->\n                            <!--<div class=\"hasSmoked-input\">-->\n                                <!--<input type=\"radio\" id=\"radio10\" name=\"status3\" value=\"10\" [(ngModel)]=\"raiodVa\"/>-->\n                                <!--<label for=\"radio10\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >מאוחדת</span></label>-->\n                                <!--<input type=\"radio\" id=\"radio11\" name=\"status3\" value=\"11\" [(ngModel)]=\"raiodVa\"/>-->\n                                <!--<label for=\"radio11\" style=\"border-right:0px;\"><span >כללית</span></label>-->\n                                <!--<input type=\"radio\" id=\"radio12\" name=\"status3\" value=\"12\" [(ngModel)]=\"raiodVa\"/>-->\n                                <!--<label for=\"radio12\" style=\"border-right:0px;\"><span >מכבי</span></label>-->\n                                <!--<input type=\"radio\" id=\"radio13\" name=\"status3\" value=\"13\" [(ngModel)]=\"raiodVa\"/>-->\n                                <!--<label for=\"radio13\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לאומית</span></label>-->\n                            <!--</div>-->\n                          <!--&lt;!&ndash; <div class=\"clinicForm big\">-->\n                            <!--<label>-->\n                              <!--מאוחדת-->\n                              <!--<input type=\"radio\" name=\"clinic1\" value=\"1\" />-->\n                            <!--</label>-->\n                            <!--<label>-->\n                              <!--כללית-->\n                              <!--<input type=\"radio\" name=\"clinic1\" value=\"2\" />-->\n                            <!--</label>-->\n                            <!--<label>-->\n                              <!--מכבי-->\n                              <!--<input type=\"radio\" name=\"clinic1\" value=\"3\" />-->\n                            <!--</label>-->\n                            <!--<label>-->\n                              <!--לאומית-->\n                              <!--<input type=\"radio\" name=\"clinic1\" value=\"4\" />-->\n                            <!--</label>-->\n                          <!--</div> &ndash;&gt;-->\n                          <!--<span class=\"field-validation-error\">אנא בחר ערך</span>-->\n                        <!--</div>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"medigap formSection col-md-5 col-xs-12 pull-right noPadding\">-->\n                      <!--<label class=\"subject\">ביטוח משלים:</label>-->\n                      <!--<div class=\"wrapper\">-->\n                          <!--<div class=\"hasSmoked-input\">-->\n                              <!--<input type=\"radio\" id=\"radio8\" name=\"status4\" value=\"8\" [(ngModel)]=\"raiodVa\"/>-->\n                              <!--<label for=\"radio8\" style=\"border-bottom-right-radius: 4px;-->\n                              <!--border-top-right-radius: 4px;\"><span >כן</span></label>-->\n                              <!--<input type=\"radio\" id=\"radio9\" name=\"status4\" value=\"9\" [(ngModel)]=\"raiodVa\"/>-->\n                              <!--<label for=\"radio9\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא</span></label>-->\n                          <!--</div>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                  <!--</fieldset>-->\n                <!--</div>-->\n\n                <!--end MedicalSection-->\n\n                <div class=\"status pull-right noPadding col-md-7 col-xs-12\">\n                  <label class=\"subject\">מצב משפחתי:</label>\n                  <div class=\"col-xs-12 noPadding\">\n                    <div class=\"statusForm big\">\n                      <div class=\"hasSmoked-input intut-wrapper-inside\">\n                        <input type=\"radio\" id=\"radio1\" name=\"chose\" value=\"9\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                        <label for=\"radio1\" style=\"border-bottom-right-radius: 17px;border-top-right-radius: 17px;\"><span >רווק</span></label>\n                        <input type=\"radio\" id=\"radio2\" name=\"chose\" value=\"10\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                        <label for=\"radio2\" style=\"border-right:0px;\"><span >נשוי</span></label>\n                        <input type=\"radio\" id=\"radio3\" name=\"chose\" value=\"11\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                        <label for=\"radio3\" style=\"border-right:0px;\"><span >גרוש</span></label>\n                        <input type=\"radio\" id=\"radio4\" name=\"chose\" value=\"12\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                        <label for=\"radio4\" style=\"border-right:0px;\"><span >אלמן</span></label>\n                        <input type=\"radio\" id=\"radio5\" name=\"chose\" value=\"13\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                        <label for=\"radio5\" style=\"border-right:0px;border-bottom-left-radius: 17px;border-top-left-radius: 17px;\"><span >אחר</span></label>\n                      </div>\n                    </div>\n                    <span class=\"field-validation-error\" *ngIf=\"!obj.raiodMaritalStatus && showError\">אנא בחר ערך</span>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <!--end private-health-->\n          </div>\n        </div>\n\n\n      </div>\n      <!--<div class=\"calculatorControllsWrapper col-xs-12\">-->\n        <!--<div class=\"calculatorControlls center-block\">-->\n\n          <!--<a href=\"#\" class=\"btn nextBtn center-block\">-->\n            <!--<span>המשך</span>-->\n          <!--</a>-->\n        <!--</div>-->\n      <!--</div>-->\n    </div>\n\n    <div class=\"step_calculatorSummary col-xs-12 noPadding\">\n      <!--<span class=\"field-validation-error center-block text-center\">הודעת שגיאה</span>-->\n      <div class=\"calculatorSummary col-xs-12\">\n        <div class=\"calculate\">\n          <!--private-health-->\n          <div class=\"private-health\">\n            <div class=\"generalForm\">\n              <!--formSection section-->\n              <div class=\"formSection\">\n                <fieldset>\n                  <legend class=\"sr-only\">###</legend>\n\n                  <div class=\"wrapper\">\n\n                    <!--spouse-->\n                    <div *ngIf=\"obj.raiodMaritalStatus === '10'\" class=\"col-xs-12 noPadding\">\n                      <div class=\"row spouse\">\n                        <div class=\"col-md-3 col-xs-12 pull-right\">\n                          <label class=\"subject\">בן/בת זוג</label>\n                          <div class=\"form-group\">\n                            <input type=\"text\" name=\"childname1\" class=\"medium2\"  [(ngModel)]=\"obj.wifeName\"/>\n                          </div>\n                          <span class=\"field-validation-error small\" *ngIf=\"!obj.wifeName && showError\">שדה שם פרטי הוא שדה חובה</span>\n                        </div>\n                        <div class=\"col-md-2 col-xs-12 pull-right\">\n                          <label class=\"subject\">מין</label>\n                          <div class=\"form-group\">\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio16\" name=\"status5\" value=\"16\" [(ngModel)]=\"obj.wifV1\"/>\n                                  <label for=\"radio16\" style=\"border-bottom-right-radius: 4px;\n                                  border-top-right-radius: 4px;\"><span >כן</span></label>\n                                  <input type=\"radio\" id=\"radio17\" name=\"status5\" value=\"17\" [(ngModel)]=\"obj.wifV1\"/>\n                                  <label for=\"radio17\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא</span></label>\n                              </div>\n                            <span class=\"field-validation-error small\" *ngIf=\"!obj.wifV1 && showError\">אנא בחר מין</span>\n                          </div>\n                        </div>\n                        <div class=\"col-md-4 col-xs-12 pull-right\">\n                          <label class=\"subject\">תאריך לידה</label>\n                          <div>\n                              <div class=\"wrapper center-block button-helth\" id=\"button-helth\">\n                                  <div class=\"selectWrapper\"  style=\"width: 19%;height: 100%;\">\n                                    <div style=\"width: 100%;height: 100%;\">\n                                      <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                  <div class=\"selectWrapper\" style=\"width: 38%;margin-right: 2px;height: 100%;\">\n                                    <div style=\"width: 100%;height: 100%;\">\n                                      <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                  <div class=\"selectWrapper\" style=\"width: 27%;margin-right: 3px;height: 100%;\">\n                                    <div style=\"width: 100%;height: 100%;\">\n                                      <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                </div>\n\n                            <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                            <!--<span class=\"field-validation-error small\">שדה תאריך לידה הוא שדה חובה</span>-->\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-3 col-xs-3 pull-right \" style=\"padding-right: 29px;\">\n                          <label class=\"subject\">מעשן</label>\n                          <div class=\"form-group\">\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio14\" name=\"status6\" value=\"yes\" [(ngModel)]=\"obj.radioWifeSmoke\"/>\n                                  <label for=\"radio14\" style=\"border-bottom-right-radius: 4px;\n                                  border-top-right-radius: 4px;\"><span >כן</span></label>\n                                  <input type=\"radio\" id=\"radio15\" name=\"status6\" value=\"no\" [(ngModel)]=\"obj.radioWifeSmoke\"/>\n                                  <label for=\"radio15\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא</span></label>\n                              </div>\n                            <span class=\"field-validation-error small\" *ngIf=\"!obj.radioWifeSmoke && showError\">אנא בחר ערך</span>\n                          </div>\n                        </div>\n                        <!--smoking-->\n                        <div class=\"smoking col-md-12 col-xs-9\" *ngIf=\"obj.radioWifeSmoke === 'no'\">\n                          <div class=\"col-md-5 pull-right noPadding\">\n                            <div class=\"col-md-7 col-xs-7 pull-right noPadding\"><label class=\"subject\">האם עישנת ב-3 שנים האחרונות?</label></div>\n                            <div class=\"form-group pull-right col-md-5 col-xs-5\">\n                                <div class=\"hasSmoked-input smole-buttons\">\n                                    <input type=\"radio\" id=\"radio25\" name=\"status7\" value=\"yes\" [(ngModel)]=\"last3year\"/>\n                                    <label for=\"radio25\" style=\"border-bottom-right-radius: 4px;\n                                    border-top-right-radius: 4px;\"><span >כן</span></label>\n                                    <input type=\"radio\" id=\"radio26\" name=\"status7\" value=\"no\" [(ngModel)]=\"last3year\"/>\n                                    <label for=\"radio26\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא</span></label>\n                                </div>\n                              <span class=\"field-validation-error small\" *ngIf=\"!last3year && showError\">אנא בחר ערך</span>\n                            </div>\n                          </div>\n\n                        </div>\n                        <!--/smoking-->\n                      </div>\n                    </div>\n                    <!--/spouse-->\n                    <!----children-->\n                    <div class=\"children clearfix\">\n                      <div class=\"noPadding pull-right col-md-3 col-xs-12\">\n                        <label for=\"childAmount\" class=\"subject\">ילדים:</label>\n                        <input type=\"number\" class=\"form-control medium childAmount\" id=\"childAmount\" name=\"childAmount\" placeholder=\"0\"  [(ngModel)]=\"obj.childAmount\" (ngModelChange)=\"doChangeChildren($event)\">\n                        <!--<span class=\"field-validation-error small\" >שדה זה הוא שדה חובה</span>-->\n                      </div>\n\n                      <div class=\"noPadding pull-right col-md-9 col-xs-12\">\n                        <!---child1-->\n                        <div class=\"row child\" *ngFor=\"let child of obj.childrens; let i = index\">\n                          <div class=\"col-md-3 col-xs-12 pull-right\">\n                            <label class=\"subject\">ילד {{i + 1}}</label>\n                            <div class=\"form-group\">\n                              <input type=\"text\" name=\"childname1\" value=\"שם\" class=\"medium\" [(ngModel)]=\"child.name\"/>\n                            </div>\n                            <span class=\"field-validation-error small\" *ngIf=\"showError && !child.name\">שדה שם פרטי הוא שדה חובה</span>\n                          </div>\n                          <div class=\"col-md-3 col-xs-12 pull-right\">\n                            <label class=\"subject\">מין</label>\n                            <div class=\"form-group\">\n                                <div class=\"hasSmoked-input\">\n                                    <input type=\"radio\" id=\"radio18{{i}}\" name=\"status{{i}}\" value=\"18\" [(ngModel)]=\"child.radio\"/>\n                                    <label for=\"radio18{{i}}\" style=\"border-bottom-right-radius: 4px;\n                                    border-top-right-radius: 4px;\"><span >זכר</span></label>\n                                    <input type=\"radio\" id=\"radio19{{i}}\" name=\"status{{i}}\" value=\"19\" [(ngModel)]=\"child.radio\"/>\n                                    <label for=\"radio19{{i}}\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >נקבה</span></label>\n                                </div>\n\n                              <span class=\"field-validation-error small\" *ngIf=\"showError && !child.radio\">אנא בחר ערך</span>\n                            </div>\n                          </div>\n                          <div class=\"col-md-6 col-xs-12\">\n                            <label class=\"subject\">תאריך לידה</label>\n                            <div>\n                                <div class=\"wrapper center-block button-helth\" id=\"button-helth\">\n                                    <div class=\"selectWrapper\"  style=\"width: 19%;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                    <div class=\"selectWrapper\" style=\"width: 38%;margin-right: 2px;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                    <div class=\"selectWrapper\" style=\"width: 27%;margin-right: 3px;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                  </div>\n                              <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                              <!--<span class=\"field-validation-error small\">-->\n                                                                        <!--שדה תאריך לידה הוא שדה חובה-->\n                                                                    <!--</span>-->\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n                    </div>\n                    <!--/children-->\n                  </div>\n\n\n                </fieldset>\n              </div>\n              <!--end formSection-->\n\n            </div>\n          </div>\n          <!--end private-health-->\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"calculatorControllsWrapper col-xs-12\">\n      <div class=\"calculatorControlls center-block\">\n        <a (click)=\"back()\" class=\"btn backBtn center-block\">\n          <span>&#60;חזור</span>\n        </a>\n        <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n          <span>המשך</span>\n        </a>\n      </div>\n    </div>\n    <div *ngIf=\"showError\" class=\"col-xs-12 text-center checkup-general-error checkup-error-position\" style=\"/* display: none; */\" id=\"errorOccurredPersonalDetails\" aria-hidden=\"true\">\n                    <span class=\"field-validation-error\" aria-hidden=\"true\">\n                        אירעה שגיאה. אנא נסה שנית מאוחר יותר.\n                    </span>\n    </div>\n    <div *ngIf=\"showError\" class=\"col-xs-12 text-center checkup-general-error checkup-error-position\" style=\"\" id=\"userExistsErrorMsg\" aria-hidden=\"false\">\n                    <span class=\"field-validation-error\" aria-hidden=\"true\">\n                        משתמש קיים, אנא התחבר.\n                    </span>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateHealthPersonalinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivateHealthPersonalinfoComponent = (function () {
    function PrivateHealthPersonalinfoComponent(storeService) {
        this.storeService = storeService;
        this.yearsData = [];
        this.monthData = [
            {
                label: "1",
                value: "1"
            },
            {
                label: "2",
                value: "2"
            },
            {
                label: "3",
                value: "3"
            },
        ];
        this.daysData = [];
        this.obj = {
            day: "1",
            month: "1",
            year: "1925",
            yearSmokin: "",
            raiodMaritalStatus: "",
            radioWifeSmoke: "",
            wifeName: "",
            wifV1: "",
            childAmount: 0,
            smoking: null,
            childrens: []
        };
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setYear();
        this.setDays();
    }
    PrivateHealthPersonalinfoComponent.prototype.ngOnInit = function () {
        var store = this.storeService.getByKey("private-health-personalinfo");
        if (store) {
            this.obj = store;
        }
    };
    PrivateHealthPersonalinfoComponent.prototype.setDays = function () {
        for (var i = 1; i <= 31; i++) {
            this.daysData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    PrivateHealthPersonalinfoComponent.prototype.setYear = function () {
        for (var i = 1925; i <= 2018; i++) {
            this.yearsData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    PrivateHealthPersonalinfoComponent.prototype.daysChange = function (e) {
        this.obj.day = e;
    };
    PrivateHealthPersonalinfoComponent.prototype.monthChange = function (e) {
        this.obj.month = e;
    };
    PrivateHealthPersonalinfoComponent.prototype.yearsChange = function (e) {
        this.obj.year = e;
    };
    PrivateHealthPersonalinfoComponent.prototype.doChangeChildren = function () {
        this.obj.childrens = [];
        for (var i = 0; i < this.obj.childAmount; i++) {
            this.obj.childrens.push({ stat: "", radio: "", name: "" });
        }
    };
    PrivateHealthPersonalinfoComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'genderselect'
        }));
    };
    PrivateHealthPersonalinfoComponent.prototype.save = function () {
        var childFlag;
        if (!this.obj.year ||
            !this.obj.month ||
            !this.obj.year || (!this.obj.smoking && !(this.obj.smoking === false))
            || !this.obj.raiodMaritalStatus) {
            this.showError = true;
            console.log(22);
        }
        else {
            if (this.obj.smoking === false && !this.obj.yearSmokin) {
                this.showError = true;
                return;
            }
            for (var i = 0; i < this.obj.childAmount; i++) {
                if (!this.obj.childrens[i].name || !this.obj.childrens[i].radio) {
                    childFlag = true;
                    break;
                }
            }
            if (childFlag) {
                this.showError = true;
                return;
            }
            if (this.obj.raiodMaritalStatus === '10' && (!this.obj.wifeName || !this.obj.wifV1 || !this.obj.radioWifeSmoke)) {
                this.showError = true;
                return;
            }
            this.next.emit(({
                naxtPage: 'kupot-holim',
                date: this.obj.day + '-' + this.obj.month + '-' + this.obj.year,
                smoking: this.obj.smoking,
                raiodMaritalStatus: this.obj.raiodMaritalStatus,
                childrens: this.obj.childrens,
                smokeInLast3Years: this.obj.yearSmokin,
                type: "private-health-personalinfo"
            }));
            this.storeService.setByKey("private-health-personalinfo", this.obj);
        }
    };
    return PrivateHealthPersonalinfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PrivateHealthPersonalinfoComponent.prototype, "next", void 0);
PrivateHealthPersonalinfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-private-health-personalinfo',
        template: __webpack_require__("../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], PrivateHealthPersonalinfoComponent);

var _a;
//# sourceMappingURL=private-health-personalinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/profession/profession.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/profession/profession.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorHead col-xs-12 noPadding\">\n  <h2>השוואת הצעות לביטוח חיים</h2>\n  <p>\n    מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n  </p>\n  <span>יקח לך 2 דקות</span>\n</div>\n<div class=\"step_profession col-xs-12 noPadding\">\n  <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError && (!job || !rate)\">הודעת שגיאה</span>\n  <div class=\"profession center-block\">\n    <fieldset>\n      <legend class=\"sr-only\">###</legend>\n      <div class=\"professionWrapper noPadding\">\n        <span class=\"question-title\">אני עוסק/ת ב:</span>\n        <div class=\"wrapper center-block\">\n          <div class=\"selectWrapper\" style=\"height: 100%;\">\n            <div style=\"height: 100%;\">\n              <app-autocomplit [data]=\"jobsData\" (change)=\"jobsChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"professionWrapper noPadding\">\n        <span class=\"question-title\">שכר:</span>\n        <div class=\"wrapper center-block\">\n          <div class=\"selectWrapper\" style=\"height: 100%;\">\n            <div style=\"height: 100%;\">\n              <app-autocomplit [data]=\"rateData\" (change)=\"rateChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n</div>\n<div class=\"calculatorControllsWrapper col-xs-12\">\n  <div class=\"calculatorControlls center-block\">\n    <a (click)=\"back()\" class=\"btn backBtn center-block\">\n      <span>&#60;חזור</span>\n    </a>\n    <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n      <span>המשך</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/profession/profession.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfessionComponent = (function () {
    function ProfessionComponent() {
        this.job = "בחר מקצוע";
        this.rate = "1000 - 10000";
        this.jobsData = [
            {
                label: "בחר מקצוע",
                value: "בחר מקצוע"
            },
            {
                label: "דייל/דיילת מכירו",
                value: "דייל/דיילת מכירו"
            },
        ];
        this.rateData = [
            {
                label: "1000 - 10000",
                value: "1000 - 10000"
            },
            {
                label: "10000 - 20000",
                value: "10000 - 20000"
            },
        ];
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProfessionComponent.prototype.ngOnInit = function () {
    };
    ProfessionComponent.prototype.jobsChange = function (e) {
        this.job = e;
    };
    ProfessionComponent.prototype.rateChange = function (e) {
        this.rate = e;
    };
    ProfessionComponent.prototype.save = function () {
        if (!this.job || !this.rate) {
            this.showError = true;
        }
        else {
            this.next.emit(({
                naxtPage: 'calculatorsummary',
                type: 'profession',
                modal: {},
            }));
        }
    };
    ProfessionComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'smoking'
        }));
    };
    return ProfessionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProfessionComponent.prototype, "next", void 0);
ProfessionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profession',
        template: __webpack_require__("../../../../../src/app/wizard/profession/profession.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/profession/profession.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfessionComponent);

//# sourceMappingURL=profession.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-dialog{\r\n    margin: 13% !important;\r\n    left: 50%;\r\n    margin-left: -385px !important;\r\n}\r\n.modal{\r\n    background: #00000094;\r\n}\r\n.general-modal{\r\n    overflow-y: auto;\r\n}\r\n#results-modal > div > div > div.modal-body > div > p{\r\n    text-align: center;\r\n}\r\n@media screen and (max-width: 960px) {\r\n    .modal-dialog {\r\n        margin: 0;\r\n        left: 50%;\r\n        margin-left: -385px !important;\r\n        top: 81px;\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    div.modal-body > div > p{\r\n        text-align: center !important;\r\n    }\r\n    .modal-dialog {\r\n        top: 112px;\r\n        left: 0;\r\n        margin-left: 0 !important;\r\n        margin-top: 0 !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- modal -->\n<div id=\"results-modal\" class=\"modal fade general-modal light\" style=\"display: block;\n    opacity: 1;\">\n  <div class=\"modal-dialog light\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" (click)=\"close()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"סגור\" tabindex=\"-1\" aria-hidden=\"true\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 id=\"resultModalHeader\">עריכת סכום הכיסוי</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"general-content\">\n          <p>\n            תנו ל- <span>Wakeapp</span>\n            להכיר אתכם ולמצוא את הצעות הביטוח המתאימות ביותר עבורכם\n          </p>\n          <a href=\"#\">\n            לעזרה בחישוב הסכום\n            <img src=\"/images/calculator/calculator.png\" alt=\"calc\">\n          </a>\n\n          <div class=\"generalForm\">\n            <div><span class=\"nisIcon\"></span><input type=\"number\" name=\"calculate\" placeholder=\"\" [(ngModel)]=\"amount\" /></div>\n            <!--<div class=\"validation-block\">-->\n              <!--<span class=\"center-block text-center field-validation-error\" data-valmsg-for=\"Amount\" data-valmsg-replace=\"true\"><span id=\"Amount-error\" class=\"\">יש להזין סכום בין 50,000 ל-50,000,000</span></span>-->\n            <!--</div>-->\n            <div><input (click)=\"save()\" type=\"button\" value=\"עדכן סכום וסגור\" /></div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end modal -->\n"

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCalcutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalCalcutComponent = (function () {
    function ModalCalcutComponent() {
        this.closeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalCalcutComponent.prototype.ngOnInit = function () {
    };
    ModalCalcutComponent.prototype.close = function () {
        this.closeEvent.emit("");
    };
    ModalCalcutComponent.prototype.save = function () {
        this.saveEvent.emit(this.amount);
    };
    return ModalCalcutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModalCalcutComponent.prototype, "amount", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModalCalcutComponent.prototype, "closeEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModalCalcutComponent.prototype, "saveEvent", void 0);
ModalCalcutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-calcut',
        template: __webpack_require__("../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ModalCalcutComponent);

//# sourceMappingURL=modal-calcut.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal{\r\n    position: fixed;\r\n    overflow: visible;\r\n    overflow-y: auto;\r\n    background: #00000061;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.results_modal_succesful{\r\n    text-align: center;\r\n}\r\ndiv.results_modal_succesful.clearfix > div.title > h3{\r\n    text-align: center;\r\n    margin-bottom: 0.625rem;\r\n    white-space: nowrap;\r\n}\r\n    div.title > p{\r\n    color: #5f5f5f;\r\n}\r\ndiv.results_modal_succesful.clearfix > div.results_modal_preferred_time > h5{\r\n    color: #117ef5;\r\n}\r\ndiv.success{\r\n    text-align: center;\r\n    color: #117ef5;\r\n    font-size: 2em;\r\n    margin-top: -9px;\r\n    padding-bottom: 20px;\r\n    font-family: \"RaananSuper\";\r\n    direction: rtl;\r\n    margin-top: 10px;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    display:none;\r\n}\r\n\r\ninput[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n\r\n    line-height: 22px;\r\n    padding: 1rem;\r\n    border: 2px solid #117ef5 !important;\r\n    margin-bottom: auto;\r\n    color: #626262;\r\n    border-radius:20px;\r\n    width: 137px;\r\n    height: 60px;\r\n    margin-right: 15px;\r\n}\r\n\r\ninput[type=\"radio\"] + label span {\r\n\r\n    font-size: 2.57143em;\r\n    line-height: 22px;\r\n    padding: 1rem;\r\n    margin-bottom: auto;\r\n    color: #626262;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n    outline: 2px solid #707070 !important;\r\n}\r\n\r\n@media (min-width: 992px){\r\n    .close > span{\r\n        font-size: 37px;\r\n        line-height: 59px;\r\n        top: -5px;\r\n        position: relative\r\n    }\r\n    .close{\r\n        background-color: #ffffff;\r\n        border-radius: 50%;\r\n        width: 41px;\r\n        height: 41px;\r\n        min-height: 41px;\r\n        line-height: 41px;\r\n        color: #5f5f5f;\r\n        opacity: 1;\r\n    }\r\n    .modal-header{\r\n        background-color: transparent;\r\n        position: absolute;\r\n        z-index: 100;\r\n        right: 0;\r\n    }\r\n    a.btn.yes > span{\r\n        font-family: \"RaananSuper\";\r\n        font-weight: bold;\r\n        font-size: 1.57143em;\r\n        position: relative;\r\n        top: -17px;\r\n    }\r\n    a.btn.yes > p{\r\n        color: #fff;\r\n        text-align: center;\r\n        font-size: 2.71429em;\r\n        position: relative;\r\n        top: -5px;\r\n    }\r\n    div > a.btn.yes{\r\n        color: #fff;\r\n        background-color: #117ef5;\r\n        width: auto;\r\n        min-width: 305px;\r\n        float: right;\r\n        height: 71px;\r\n        margin-top: 15px;\r\n    }\r\n    div > a.btn.yes:active{\r\n        background-color: #4299f7;\r\n    }\r\n     div > a.btn.no{\r\n        color: #898989;\r\n        font-size: 2em;\r\n        background-color: rgba(255, 255, 255, 0);\r\n        width: auto;\r\n        min-width: 175px;\r\n        float: right;\r\n        text-decoration: underline;\r\n        margin-right: 1.25rem;\r\n     }\r\n    div.results_modal_banner.hidden-xs.hidden-sm > div > span{\r\n        color: #117ef5;\r\n        font-family: \"RaananSuper\";\r\n        font-weight: bold;\r\n        font-size: 2em;\r\n        line-height: .8;\r\n        float: right;\r\n        margin: 1.25rem 0 0 0;\r\n    }\r\n    div.results_modal_banner.hidden-xs.hidden-sm > div > p > span{\r\n        float: right;\r\n        clear: both;\r\n    }\r\n    div.results_modal_banner.hidden-xs.hidden-sm > div > p{\r\n        color: #626262;\r\n        font-size: 1.71429em;\r\n        line-height: 26px;\r\n    }\r\n    div.results_modal_banner.hidden-xs.hidden-sm > div > h2{\r\n        color: #626262;\r\n        font-size: 3.14286em;\r\n        line-height: 35px;\r\n        padding: 0 0 0 3.125rem;\r\n        margin: 2.9375rem 0 1.25rem 0\r\n    }\r\n    div.results_modal_banner.hidden-xs.hidden-sm > div{\r\n        width: 50%;\r\n        float: right;\r\n        text-align: right;\r\n    }\r\n    div.results_modal_banner.hidden-xs.hidden-sm{\r\n        height: 484px;\r\n        background-size: 76%;\r\n        background-repeat: no-repeat;\r\n        background-position: 0 0;\r\n        padding: 0 5.625rem 0 0;\r\n    }\r\n    .modal-dialog{\r\n        width: 98%;\r\n        top: 207px;\r\n    }\r\n    .results_modal_succesful{\r\n        background-color: #e7f2fe;\r\n        border-bottom: 1px solid #e1e1e1;\r\n        margin-top: 1.875rem;\r\n    }\r\n   div.results_modal_succesful.clearfix > div.results_modal_preferred_time > h5{\r\n        padding-left: 178px;\r\n        font-size: 2.14286em;\r\n        line-height: 30px;\r\n        margin-top: 3rem;\r\n        margin-bottom: 0.875rem;\r\n    }\r\n     div.results_modal_succesful.clearfix > div.title > h3{\r\n        font-size: 4.57143em;\r\n        line-height: 64px;\r\n     }\r\n     div.title > p{\r\n        font-size: 2.42857em;\r\n        line-height: 34px;\r\n    }\r\n}\r\n@media (max-width: 992px){\r\n    div.results_modal_succesful.clearfix > div.results_modal_preferred_time > h5{\r\n        margin-top: 0.75rem;\r\n        margin-bottom: 1rem;\r\n    }\r\n    div.results_modal_succesful.clearfix > div.title > h3{\r\n        font-size: 2.28571em;\r\n        line-height: 15px;\r\n        text-align: center;\r\n        margin-bottom: 0.625rem;\r\n        white-space: nowrap;\r\n        color: #5f5f5f;\r\n    }\r\n    .modal-dialog{\r\n        width: 100%;\r\n        margin-top: 102px;\r\n        margin-left: 0;\r\n    }\r\n    .hasSmoked-input{\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: reverse;\r\n            -ms-flex-flow: column-reverse;\r\n                flex-flow: column-reverse;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        MARGIN-BOTTOM: 10PX;\r\n    }\r\n    .close > span{\r\n        font-size: 37px;\r\n        line-height: 59px;\r\n        top: -5px;\r\n        position: relative\r\n    }\r\n    .close{\r\n        background-color: #ffffff;\r\n        border-radius: 50%;\r\n        width: 41px;\r\n        height: 41px;\r\n        min-height: 41px;\r\n        line-height: 41px;\r\n        color: #5f5f5f;\r\n        opacity: 1;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        width: 150px;\r\n        height: 40px;\r\n        font-size: 0.7em;\r\n        white-space: normal;\r\n        line-height: 26px;\r\n        padding: 0.375rem;\r\n        color: #626262;\r\n        font-weight: normal;\r\n        background: transparent;\r\n        border: 1px solid #117ef5 !important;\r\n        border-radius: 10px;\r\n        float: right;\r\n        margin-bottom: 1.0625rem;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 762px) and (max-width: 992px) { \r\n    div.results_modal_succesful.clearfix > div.results_modal_preferred_time > h5{\r\n        font-size: 2.42857em;\r\n        line-height: 34px;\r\n    }\r\n    div.results_modal_succesful.clearfix > div.title > h3{\r\n        font-size: 4.28571em;\r\n        line-height: 15px;\r\n        text-align: center;\r\n        margin-bottom: 1.625rem;\r\n        white-space: nowrap;\r\n        color: #5f5f5f;\r\n    }\r\n    .modal-dialog{\r\n        width: 100%;\r\n        margin-top: 102px;\r\n        margin-left: 0;\r\n    }\r\n    .hasSmoked-input{\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: reverse;\r\n            -ms-flex-flow: column-reverse;\r\n                flex-flow: column-reverse;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        MARGIN-BOTTOM: 10PX;\r\n    }\r\n    .close > span{\r\n        font-size: 37px;\r\n        line-height: 59px;\r\n        top: -5px;\r\n        position: relative\r\n    }\r\n    .close{\r\n        background-color: #ffffff;\r\n        border-radius: 50%;\r\n        width: 41px;\r\n        height: 41px;\r\n        min-height: 41px;\r\n        line-height: 41px;\r\n        color: #5f5f5f;\r\n        opacity: 1;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        width: 300px;\r\n        height: 80px;\r\n        font-size: 1.4em;\r\n        line-height: 64px;\r\n        border-radius: 15px;\r\n        padding-top: 13px;\r\n    }\r\n    div.title > p{\r\n        font-size: 2.42857em;\r\n        line-height: 34px;\r\n    }\r\n}\r\n    @media (max-width: 768px){\r\n       \r\n        div.results_modal_succesful.clearfix> div.title > h3{\r\n            text-align: center;\r\n            margin-bottom: 0.625rem;\r\n            white-space: nowrap;\r\n            font-size: 2.57143em;\r\n            line-height: 64px;\r\n            margin-bottom: 0;\r\n        }\r\n        div.title > p{\r\n            font-size: 1.42857em;\r\n            line-height: 34px;\r\n            color: #5f5f5f;\r\n        }\r\n        div.results_modal_succesful.clearfix > div.results_modal_preferred_time> h5{\r\n            padding-left: 0;\r\n            font-size: 1.21429em;\r\n            line-height: 30px;\r\n            margin: 0rem;\r\n            \r\n        } \r\n        input[type=\"radio\"] + label{\r\n            font-size: 1.4em;\r\n        }\r\n        input[type=\"radio\"] + label span {\r\n            \r\n            font-size: 1.143em;\r\n            }\r\n            .modal-dialog{\r\n                width: 100%;\r\n                margin-top: 122px;\r\n            }\r\n            \r\n    }\r\n\r\n    \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- modal -->\n<div class=\"modal fade\" style=\"display: block;\n     opacity: 1;\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <!-- modal header -->\n      <div class=\"modal-header\">\n        <button (click)=\"close()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- modal body -->\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"results_modal_succesful clearfix\">\n            <div class=\"title\">\n              <h3>פנייתך התקבלה בהצלחה!</h3>\n              <p>נציגינו יצרו איתך קשר להמשך התהליך</p>\n            </div>\n\n            <div class=\"results_modal_preferred_time\">\n              <h5>אני מעדיף בזמנים הבאים:</h5>\n              <fieldset>\n                <legend class=\"sr-only\"></legend>\n                <div class=\"form-group userBox col-xs-12 noPadding\">\n                  <div class=\"preferred_time_form\" data-btoggle>\n                      <div class=\"hasSmoked-input\">\n                          <input type=\"radio\" id=\"smoke1\" name=\"status1\" value=\"1\" [(ngModel)]=\"select\"  (ngModelChange)=\"showSuccess = true\"/>\n                          <label for=\"smoke1\"><span style=\"\">ערב</span></label>\n                          <input type=\"radio\" id=\"smoke\" name=\"status1\" value=\"2\" [(ngModel)]=\"select\"  (ngModelChange)=\"showSuccess = true\"/>\n                          <label for=\"smoke\"><span style=\"\">צהריים</span></label>\n                          <input type=\"radio\" id=\"nsmoke\" name=\"status1\" value=\"3\" [(ngModel)]=\"select\" (ngModelChange)=\"showSuccess = true\"/>\n                          <label for=\"nsmoke\" style=\"border-right:none;\"><span style=\"\">בוקר</span></label>\n                      </div>\n                    <!-- <label>\n                      בוקר\n                      <input type=\"radio\" name=\"status1\" value=\"1\" />\n                    </label>\n                    <label>\n                      צהריים\n                      <input type=\"radio\" name=\"status1\" value=\"2\" />\n                    </label>\n                    <label>\n                      ערב\n                      <input type=\"radio\" name=\"status1\" value=\"3\" />\n                    </label> -->\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <!--<div class=\"results_modal_congrats_box\">\n                <h4 class=\"v-title\">\n                    השאלון מולא בהצלחה\n                </h4>\n                <p class=\"subtitle\">\n                    ברוכים הבאים ובהצלחה\n                </p>\n            </div>-->\n            <div class=\"success\" *ngIf=\"showSuccess\"><span class=\"icon icon-success\"></span> פרטייך התקבלו בהצלחה! </div>\n          </div>\n\n          <div class=\"results_modal_banner hidden-xs hidden-sm\" style=\"background-image:url(../sample-images/section1_bg1.png);background-size: 50% 100%;\">\n\n\n            <div class=\"results_modal_banner_content\">\n              <h2>\n                פותחים את המכתבים מהבנק וחברות הביטוח ולא מבינים על מה אתם משלמים?\n              </h2>\n              <p class=\"clearfix\">\n                <span>יתכן שיש לכם ביטוחים מיותרים?</span>\n                <span>יכול להיות שיש לכם כפל ביטוחי?</span>\n                <span>סומכים על קופת החולים עם הבריאות שלכם?</span>\n              </p>\n              <span class=\"weRecommend clearfix\">\n                                    Wize:App ותוכל לקבל תמונה מלאה של כל החסכונות והביטוחים במקום אחד\n                                </span>\n              <div class=\"controls clearfix\">\n                <a (click)=\"yes()\" class=\"btn yes\">\n                  <p>צ'קאפ - התחל בדיקה</p>\n                  <span>זה יקח לך 3 דקות...</span>\n                </a>\n                <a (click)=\"no()\" class=\"btn no\">\n                  תודה אבל אני לא צריך\n                </a>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- modal end -->\n"

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalChoseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalChoseComponent = (function () {
    function ModalChoseComponent() {
        this.closeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalChoseComponent.prototype.ngOnInit = function () {
    };
    ModalChoseComponent.prototype.close = function () {
        this.closeEvent.emit("");
    };
    ModalChoseComponent.prototype.no = function () {
        this.closeEvent.emit("");
    };
    ModalChoseComponent.prototype.yes = function () {
        this.closeEvent.emit("");
    };
    return ModalChoseComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModalChoseComponent.prototype, "closeEvent", void 0);
ModalChoseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-chose',
        template: __webpack_require__("../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ModalChoseComponent);

//# sourceMappingURL=modal-chose.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/smoking/smoking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\ninput[type=\"radio\"] {\r\n    display:none;\r\n}\r\n\r\ninput[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n}\r\n\r\ninput[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n    width:60px;\r\n    height:45px;\r\n    vertical-align:middle;\r\n    background:white;\r\n    cursor:pointer;\r\n    border: 1px solid #117ef5;\r\n    text-align: center;\r\n    font-size: 1.57143em;\r\n    color: #626262;\r\n    padding-top: 8px;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + label span {\r\n    background: #117ef5;\r\n    color: white;\r\n    outline: 2px solid #707070 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/smoking/smoking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorHead col-xs-12 noPadding\">\n  <h2>השאוות הצעות לביטוח חיים</h2>\n  <p>\n    מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n  </p>\n  <span>יקח לך 2 דקות</span>\n</div>\n<div class=\"step_smoking col-xs-12 noPadding\">\n  <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError && !smoking && smoking !== false\">הודעת שגיאה</span>\n  <div class=\"smoking\">\n    <div class=\"isSmoking\">\n      <fieldset>\n        <legend class=\"sr-only\">###</legend>\n        <input type=\"hidden\" name=\"smoking\" id=\"hdnSmoking\" value=\"\" />\n        <div class=\"yes \" (click)=\"smoking = true\" [ngClass]=\"{'yes-active': smoking === true}\" role=\"button\" data-value=\"1\" tabindex=\"0\">\n          <span>מעשן</span>\n        </div>\n        <div class=\"no\" (click)=\"smoking = false\" [ngClass]=\"{'no-active': smoking === false}\" role=\"button\" data-value=\"0\" tabindex=\"0\">\n          <span>לא מעשן</span>\n        </div>\n      </fieldset>\n\n    </div>\n    <div class=\"lastSmoked hasSmoked\" *ngIf=\"smoking === false\">\n      <fieldset>\n        <legend>האם עישנת ב-3 השנים האחרונות</legend>\n        <div class=\"hasSmoked-input\">\n            <input type=\"radio\" id=\"smoke\" name=\"status1\" value=\"כן\" [(ngModel)]=\"yearSmokin\"/>\n            <label for=\"smoke\"><span style=\"border-radius:0px 5px 5px 0px;\">כן</span></label>\n            <input type=\"radio\" id=\"nsmoke\" name=\"status1\" value=\"לא\" [(ngModel)]=\"yearSmokin\"/>\n            <label for=\"nsmoke\" style=\"position: relative;left: 3px;border-right:none;\"><span style=\"border-radius:5px 0px 0px 5px;\">לא</span></label>\n        </div>\n        <span class=\"field-validation-error small\" *ngIf=\"showError && smoking === false && !yearSmokin\">אנא בחר ערך</span>\n      </fieldset>\n    </div>\n  </div>\n</div>\n<div class=\"calculatorControllsWrapper col-xs-12\">\n  <div class=\"calculatorControlls center-block\">\n    <a (click)=\"back()\" class=\"btn backBtn center-block\">\n      <span>&#60;חזור</span>\n    </a>\n    <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n      <span>המשך</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/smoking/smoking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmokingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmokingComponent = (function () {
    function SmokingComponent() {
        this.yearSmokin = "";
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SmokingComponent.prototype.ngOnInit = function () {
    };
    SmokingComponent.prototype.save = function () {
        if (!this.smoking && !(this.smoking === false)) {
            this.showError = true;
        }
        else {
            if (this.smoking === false && !this.yearSmokin) {
                this.showError = true;
                return;
            }
            this.next.emit(({
                naxtPage: 'profession',
                type: "smoking",
                model: this.smoking
            }));
        }
    };
    SmokingComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'birthdate'
        }));
    };
    return SmokingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SmokingComponent.prototype, "next", void 0);
SmokingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-smoking',
        template: __webpack_require__("../../../../../src/app/wizard/smoking/smoking.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/smoking/smoking.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SmokingComponent);

//# sourceMappingURL=smoking.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/wizard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"main\" class=\"container-fluid\" tabindex=\"-1\">\n  <!-- section 1 -->\n  <section class=\"row\">\n    <div class=\"calculator clearfix\">\n\n      <app-info *ngIf=\"activeTab === 'info'\" (next)=\"nextCheck($event)\"></app-info>\n      <app-genderselect [nextOption]=\"'birthdate'\" *ngIf=\"activeTab === 'genderselect'\" (next)=\"nextCheck($event)\"></app-genderselect>\n      <app-birthdate *ngIf=\"activeTab === 'birthdate'\" (next)=\"nextCheck($event)\"></app-birthdate>\n      <app-smoking *ngIf=\"activeTab === 'smoking'\" (next)=\"nextCheck($event)\"></app-smoking>\n      <app-profession *ngIf=\"activeTab === 'profession'\" (next)=\"nextCheck($event)\"></app-profession>\n      <app-calculatorsummary *ngIf=\"activeTab === 'calculatorsummary'\" (next)=\"nextCheck($event)\"></app-calculatorsummary>\n      <app-calculator-side-panel [options]=\"risk\"></app-calculator-side-panel>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_risk__ = __webpack_require__("../../../../../src/app/shared/models/risk.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WizardComponent = (function () {
    function WizardComponent(router, storeService) {
        this.router = router;
        this.storeService = storeService;
        this.risk = new __WEBPACK_IMPORTED_MODULE_1__shared_models_risk__["a" /* Risk */]();
        this.activeTab = 'info';
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    WizardComponent.prototype.ngOnInit = function () {
    };
    WizardComponent.prototype.nextCheck = function (e) {
        console.log(e);
        if (e.finish) {
            this.finish.emit(e.amount);
            this.storeService.refresh();
            this.router.navigate(['/proposals/' + e.amount]);
        }
        if (e.back) {
            this.activeTab = e.back;
            return;
        }
        switch (e.type) {
            case "info":
                this.risk.lastName = e.model.lastName;
                this.risk.privateName = e.model.firstName;
                this.risk.number = e.model.phone;
                this.risk.prefix = e.model.prefix;
                this.risk.email = e.model.email;
                break;
            case "genderselect":
                this.risk.gender = e.model;
                break;
            case "birthdate":
                this.risk.birthDate = e.model;
                console.log(this.risk.birthDate, e.model);
                break;
            case "smoking":
                this.risk.doesSmoke = e.model;
                break;
            case "profession":
                break;
            case "calculatorsummary":
                break;
        }
        this.activeTab = e.naxtPage;
    };
    return WizardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], WizardComponent.prototype, "finish", void 0);
WizardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wizard',
        template: __webpack_require__("../../../../../src/app/wizard/wizard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/wizard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_store_service__["a" /* StoreService */]) === "function" && _b || Object])
], WizardComponent);

var _a, _b;
//# sourceMappingURL=wizard.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/images/personal/icon-select-arrow-down.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAMAAAAGcixRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEUAAACQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJAAAABupPXTAAAAGHRSTlMAFKYRM/XICkn5uAa3Slv9paT+adSfoIjbRJWDAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAD9JREFUCNdjYGRiZgABZiYGFlY2diCLnY2VgYGDk4ubgZuHkxcowMcvwC0oxAdWJiwhIiHMAAGiEmIMMCAOIgA7/QG0YTNtQAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map