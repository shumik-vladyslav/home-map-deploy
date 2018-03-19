webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<fuse-main></fuse-main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_splash_screen_service__ = __webpack_require__("../../../../../src/app/core/services/splash-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_translation_loader_service__ = __webpack_require__("../../../../../src/app/core/services/translation-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_components_navigation_navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_model__ = __webpack_require__("../../../../../src/app/navigation/navigation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_i18n_en__ = __webpack_require__("../../../../../src/app/navigation/i18n/en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_i18n_tr__ = __webpack_require__("../../../../../src/app/navigation/i18n/tr.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(fuseNavigationService, fuseSplashScreen, translate, translationLoader) {
        this.fuseNavigationService = fuseNavigationService;
        this.fuseSplashScreen = fuseSplashScreen;
        this.translate = translate;
        this.translationLoader = translationLoader;
        // Add languages
        this.translate.addLangs(['en', 'tr']);
        // Set the default language
        this.translate.setDefaultLang('en');
        // Use a language
        this.translate.use('en');
        // Set the navigation model
        this.fuseNavigationService.setNavigationModel(new __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_model__["a" /* FuseNavigationModel */]());
        // Set the navigation translations
        this.translationLoader.loadTranslations(__WEBPACK_IMPORTED_MODULE_6__navigation_i18n_en__["a" /* locale */], __WEBPACK_IMPORTED_MODULE_7__navigation_i18n_tr__["a" /* locale */]);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__core_components_navigation_navigation_service__["a" /* FuseNavigationService */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_splash_screen_service__["a" /* FuseSplashScreenService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_translation_loader_service__["a" /* FuseTranslationLoaderService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_splash_screen_service__ = __webpack_require__("../../../../../src/app/core/services/splash-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_components_navigation_navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_content_sample_sample_module__ = __webpack_require__("../../../../../src/app/main/content/sample/sample.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_services_guard_service__ = __webpack_require__("../../../../../src/app/core/services/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__main_content_profile_profile_component__ = __webpack_require__("../../../../../src/app/main/content/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_14__pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_16__pages_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'forget-password',
        component: __WEBPACK_IMPORTED_MODULE_15__pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_19__main_content_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_18__core_services_guard_service__["a" /* GuardService */]]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_18__core_services_guard_service__["a" /* GuardService */]] },
    { path: '**', redirectTo: 'login', canActivate: [__WEBPACK_IMPORTED_MODULE_18__core_services_guard_service__["a" /* GuardService */]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6__core_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["a" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__main_main_module__["a" /* FuseMainModule */],
                __WEBPACK_IMPORTED_MODULE_12__main_content_sample_sample_module__["a" /* FuseSampleModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__core_services_splash_screen_service__["a" /* FuseSplashScreenService */],
                __WEBPACK_IMPORTED_MODULE_10__core_services_config_service__["a" /* FuseConfigService */],
                __WEBPACK_IMPORTED_MODULE_11__core_components_navigation_navigation_service__["a" /* FuseNavigationService */],
                __WEBPACK_IMPORTED_MODULE_17__core_services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fuseAnimations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var customAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var fuseAnimations = [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('animate', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["q" /* useAnimation */])(customAnimation)])]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('animateStagger', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('50', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])('*')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('100', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])('*')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('200', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])('*')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => 50', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('@*', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* stagger */])('50ms', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()
            ])
        ], { optional: true })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => 100', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('@*', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* stagger */])('100ms', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()
            ])
        ], { optional: true })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => 200', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('@*', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* stagger */])('200ms', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()
            ])
        ], { optional: true }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('fadeInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            display: 'none',
            opacity: 0
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            display: 'block',
            opacity: 1
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            height: '0px',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            height: '*',
            display: 'block'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideIn', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => left', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(100%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(0)'
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('left => void', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(0)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(-100%)'
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => right', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(-100%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(0)'
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('right => void', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(0)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(100%)'
            }))
        ]),
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideInLeft', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateX(-100%)',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateX(0)',
            display: 'flex'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideInRight', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateX(100%)',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateX(0)',
            display: 'flex'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideInTop', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateY(-100%)',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateY(0)',
            display: 'flex'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideInBottom', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateY(100%)',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateY(0)',
            display: 'flex'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('expandCollapse', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            height: '0px'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            height: '*'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('routerTransitionLeft', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter, fuse-content > :leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    transform: 'translateX(100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* sequence */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* group */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(0)',
                            opacity: 1
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(-100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({ transform: 'translateX(100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
            ])
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('routerTransitionRight', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter, fuse-content > :leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    transform: 'translateX(-100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* sequence */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* group */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(0)',
                            opacity: 1
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({ transform: 'translateX(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
            ])
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('routerTransitionUp', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter, fuse-content > :leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    transform: 'translateY(100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                        transform: 'translateY(0)',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                        transform: 'translateY(-100%)',
                        opacity: 0
                    }))
                ], { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({ transform: 'translateY(100%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                        transform: 'translateY(0%)',
                        opacity: 1
                    }))
                ], { optional: true })
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('routerTransitionDown', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter, fuse-content > :leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    transform: 'translateY(-100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* sequence */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* group */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateY(0)',
                            opacity: 1
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateY(100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({ transform: 'translateY(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateY(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
            ])
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('routerTransitionFade', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter, fuse-content > :leave ', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    opacity: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    opacity: 1
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    opacity: 0
                }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    opacity: 0
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    opacity: 1
                }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
        ]))
    ])
];


/***/ }),

/***/ "../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>Confirm</h1>\n<div mat-dialog-content>{{confirmMessage}}</div>\n<div mat-dialog-actions class=\"pt-24\">\n    <button mat-raised-button class=\"mat-accent mr-16\" (click)=\"dialogRef.close(true)\">Confirm</button>\n    <button mat-button (click)=\"dialogRef.close(false)\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseConfirmDialogComponent = /** @class */ (function () {
    function FuseConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    FuseConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    FuseConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-confirm-dialog',
            template: __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */]])
    ], FuseConfirmDialogComponent);
    return FuseConfirmDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/countdown/countdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fuse-countdown\">\n\n    <div class=\"time days\">\n        <div class=\"value\">\n            {{countdown.days}}\n        </div>\n        <div class=\"title\">\n            days\n        </div>\n    </div>\n\n    <div class=\"time hours\">\n        <div class=\"value\">\n            {{countdown.hours}}\n        </div>\n        <div class=\"title\">\n            hours\n        </div>\n    </div>\n\n    <div class=\"time minutes\">\n        <div class=\"value\">\n            {{countdown.minutes}}\n        </div>\n        <div class=\"title\">\n            minutes\n        </div>\n    </div>\n\n    <div class=\"time seconds\">\n        <div class=\"value\">\n            {{countdown.seconds}}\n        </div>\n        <div class=\"title\">\n            seconds\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/countdown/countdown.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  :host .fuse-countdown {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center; }\n  :host .fuse-countdown .time {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 0 12px; }\n  :host .fuse-countdown .time .value {\n        font-size: 34px;\n        line-height: 34px;\n        padding-bottom: 8px; }\n  :host .fuse-countdown .time .title {\n        color: rgba(0, 0, 0, 0.54); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/countdown/countdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCountdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseCountdownComponent = /** @class */ (function () {
    function FuseCountdownComponent() {
        this.countdown = {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
    }
    FuseCountdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currDate = __WEBPACK_IMPORTED_MODULE_1_moment__();
        var eventDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.eventDate);
        var diff = eventDate.diff(currDate, 'seconds');
        var countDown = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]
            .interval(1000)
            .map(function (value) {
            return diff = diff - 1;
        })
            .map(function (value) {
            var timeLeft = __WEBPACK_IMPORTED_MODULE_1_moment__["duration"](value, 'seconds');
            return {
                days: timeLeft.asDays().toFixed(0),
                hours: timeLeft.hours(),
                minutes: timeLeft.minutes(),
                seconds: timeLeft.seconds()
            };
        });
        countDown.subscribe(function (value) {
            _this.countdown = value;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('eventDate'),
        __metadata("design:type", Object)
    ], FuseCountdownComponent.prototype, "eventDate", void 0);
    FuseCountdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-countdown',
            template: __webpack_require__("../../../../../src/app/core/components/countdown/countdown.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/countdown/countdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCountdownComponent);
    return FuseCountdownComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/highlight/highlight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 8px;\n  background: #263238;\n  cursor: text; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/highlight/highlight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseHighlightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_prism__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_prism__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prism_languages__ = __webpack_require__("../../../../../src/app/core/components/highlight/prism-languages.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseHighlightComponent = /** @class */ (function () {
    function FuseHighlightComponent(elementRef, http) {
        this.elementRef = elementRef;
        this.http = http;
    }
    FuseHighlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there is no language defined, return...
        if (!this.lang) {
            return;
        }
        // If the path is defined...
        if (this.path) {
            // Get the source
            this.http.get(this.path, { responseType: 'text' }).subscribe(function (response) {
                // Highlight it
                _this.highlight(response);
            });
        }
        // If the path is not defined and the source element exists...
        if (!this.path && this.source) {
            // Highlight it
            this.highlight(this.source.nativeElement.value);
        }
    };
    FuseHighlightComponent.prototype.highlight = function (sourceCode) {
        // Split the source into lines
        var sourceLines = sourceCode.split('\n');
        // Remove the first and the last line of the source
        // code if they are blank lines. This way, the html
        // can be formatted properly while using fuse-highlight
        // component
        if (!sourceLines[0].trim()) {
            sourceLines.shift();
        }
        if (!sourceLines[sourceLines.length - 1].trim()) {
            sourceLines.pop();
        }
        // Find the first non-whitespace char index in
        // the first line of the source code
        var indexOfFirstChar = sourceLines[0].search(/\S|$/);
        // Generate the trimmed source
        var source = '';
        // Iterate through all the lines
        sourceLines.forEach(function (line, index) {
            // Trim the beginning white space depending on the index
            // and concat the source code
            source = source + line.substr(indexOfFirstChar, line.length);
            // If it's not the last line...
            if (index !== sourceLines.length - 1) {
                // Add a line break at the end
                source = source + '\n';
            }
        });
        // Generate the highlighted code
        var highlightedCode = __WEBPACK_IMPORTED_MODULE_2_prismjs_prism__["highlight"](source, __WEBPACK_IMPORTED_MODULE_2_prismjs_prism__["languages"][this.lang]);
        // Replace the innerHTML of the component with the highlighted code
        this.elementRef.nativeElement.innerHTML =
            '<pre><code class="highlight language-' + this.lang + '">' + highlightedCode + '</code></pre>';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('source'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FuseHighlightComponent.prototype, "source", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('lang'),
        __metadata("design:type", String)
    ], FuseHighlightComponent.prototype, "lang", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('path'),
        __metadata("design:type", String)
    ], FuseHighlightComponent.prototype, "path", void 0);
    FuseHighlightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-highlight',
            template: ' ',
            styles: [__webpack_require__("../../../../../src/app/core/components/highlight/highlight.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FuseHighlightComponent);
    return FuseHighlightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/highlight/prism-languages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs_prism__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs_prism__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_c__ = __webpack_require__("../../../../prismjs/components/prism-c.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_c__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_cpp__ = __webpack_require__("../../../../prismjs/components/prism-cpp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_cpp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_cpp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_csharp__ = __webpack_require__("../../../../prismjs/components/prism-csharp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_csharp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_csharp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_css__ = __webpack_require__("../../../../prismjs/components/prism-css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_diff__ = __webpack_require__("../../../../prismjs/components/prism-diff.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_diff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_diff__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_markup__ = __webpack_require__("../../../../prismjs/components/prism-markup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_markup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_markup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_java__ = __webpack_require__("../../../../prismjs/components/prism-java.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_java___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_java__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_javascript__ = __webpack_require__("../../../../prismjs/components/prism-javascript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_json__ = __webpack_require__("../../../../prismjs/components/prism-json.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_perl__ = __webpack_require__("../../../../prismjs/components/prism-perl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_perl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_perl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_php__ = __webpack_require__("../../../../prismjs/components/prism-php.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_php___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_php__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_python__ = __webpack_require__("../../../../prismjs/components/prism-python.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_python___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_python__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prismjs_components_prism_sass__ = __webpack_require__("../../../../prismjs/components/prism-sass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prismjs_components_prism_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_prismjs_components_prism_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prismjs_components_prism_scss__ = __webpack_require__("../../../../prismjs/components/prism-scss.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prismjs_components_prism_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_prismjs_components_prism_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prismjs_components_prism_typescript__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_prismjs_components_prism_typescript__);


















/***/ }),

/***/ "../../../../../src/app/core/components/material-color-picker/material-color-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button\n        type=\"button\"\n        class=\"mat-elevation-z1\"\n        [matMenuTriggerFor]=\"colorMenu\"\n        (menuOpened)=\"onMenuOpen()\"\n        [ngClass]=\"'mat-'+selectedPalette+'-'+selectedHue+'-bg'\">\n    <mat-icon>palette</mat-icon>\n</button>\n\n<mat-menu #colorMenu=\"matMenu\" class=\"fuse-material-color-picker-menu\">\n\n    <header [ngClass]=\"selectedColor?.class || 'mat-accent-bg'\"\n            class=\"mat-elevation-z4\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"space-between center\">\n\n        <button mat-icon-button\n                [style.visibility]=\"view==='hues'?'visible':'hidden'\"\n                (click)=\"$event.stopPropagation();backToPaletteSelection()\" aria-label=\"Palette\">\n            <mat-icon class=\"s-20\">arrow_back</mat-icon>\n        </button>\n\n        <span *ngIf=\"selectedColor?.palette\">\n            {{selectedColor.palette}} {{selectedColor.hue}}\n        </span>\n\n        <span *ngIf=\"!selectedColor?.palette\">\n            Select Color\n        </span>\n\n        <button mat-icon-button\n                class=\"remove-color-button\"\n                (click)=\"removeColor()\"\n                aria-label=\"Remove Color\">\n            <mat-icon class=\"s-20\">delete</mat-icon>\n        </button>\n    </header>\n\n\n    <div [ngSwitch]=\"view\" class=\"views\">\n\n        <div class=\"view\"\n             *ngSwitchCase=\"'palettes'\"\n             [@slideInLeft]>\n\n            <div fxLayout=\"row\" fxLayoutWrap\n                 fxLayoutAlign=\"start start\"\n                 class=\"colors\" fusePerfectScrollbar>\n                <div class=\"color\"\n                     [ngClass]=\"'mat-'+color.key+'-bg'\"\n                     *ngFor=\"let color of (colors | keys)\"\n                     (click)=\"$event.stopPropagation();selectPalette(color.key)\"\n                     fxLayout=\"row\" fxLayoutAlign=\"start end\" mat-ink-ripple>\n                    <span class=\"label\">\n                        {{color.key}}\n                    </span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"view\"\n             *ngSwitchCase=\"'hues'\"\n             [@slideInRight]>\n            <div fxLayout=\"row\" fxLayoutWrap\n                 fxLayoutAlign=\"start start\"\n                 class=\"colors\" fusePerfectScrollbar>\n                <div class=\"color\"\n                     *ngFor=\"let hue of hues\"\n                     [fxHide]=\"selectedPalette === 'white' && hue !== '500'|| selectedPalette === 'black' && hue !== '500'\"\n                     [ngClass]=\"'mat-'+selectedPalette+'-'+hue+'-bg'\"\n                     (click)=\"selectHue(hue)\"\n                     fxLayout=\"row\" fxLayoutAlign=\"start end\" mat-ink-ripple>\n                    <span class=\"label\">\n                        {{hue}}\n                    </span>\n                    <mat-icon *ngIf=\"selectedHue === hue\" class=\"s-16\">check</mat-icon>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/material-color-picker/material-color-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fuse-material-color-picker-menu {\n  width: 208px; }\n  .fuse-material-color-picker-menu .mat-menu-content {\n    padding: 0; }\n  .fuse-material-color-picker-menu .mat-menu-content .views {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      position: relative;\n      overflow: hidden;\n      min-height: 258px;\n      height: 308px;\n      background-color: #F7F7F7; }\n  .fuse-material-color-picker-menu .mat-menu-content .views .view {\n        position: absolute;\n        width: 208px;\n        height: 100%;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0; }\n  .fuse-material-color-picker-menu .mat-menu-content .views .view .colors {\n          position: relative;\n          padding: 4px; }\n  .fuse-material-color-picker-menu .mat-menu-content .views .view .colors .color {\n            position: relative;\n            width: 46px;\n            height: 46px;\n            margin: 2px;\n            border-radius: 0;\n            cursor: pointer; }\n  .fuse-material-color-picker-menu .mat-menu-content .views .view .colors .color .label {\n              padding: 2px;\n              font-size: 10px; }\n  .fuse-material-color-picker-menu .mat-menu-content .views .view .colors .color mat-icon {\n              position: absolute;\n              top: 2px;\n              right: 2px;\n              font-size: 16px;\n              opacity: 0.7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/material-color-picker/material-color-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMaterialColorPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matColors__ = __webpack_require__("../../../../../src/app/core/matColors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseMaterialColorPickerComponent = /** @class */ (function () {
    function FuseMaterialColorPickerComponent() {
        this.view = 'palettes';
        this.selectedPalette = '';
        this.selectedHue = '';
        this.selectedFg = '';
        this.onValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedPaletteChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedHueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedClassChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedBgChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedFgChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._selectedClass = '';
        this._selectedBg = '';
        this.colors = __WEBPACK_IMPORTED_MODULE_1__matColors__["a" /* MatColors */].all;
        this.hues = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];
    }
    Object.defineProperty(FuseMaterialColorPickerComponent.prototype, "selectedClass", {
        get: function () {
            return this._selectedClass;
        },
        set: function (value) {
            if (value && value !== '' && this._selectedClass !== value) {
                var color = value.split('-');
                if (color.length >= 5) {
                    this.selectedPalette = color[1] + '-' + color[2];
                    this.selectedHue = color[3];
                }
                else {
                    this.selectedPalette = color[1];
                    this.selectedHue = color[2];
                }
            }
            this._selectedClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FuseMaterialColorPickerComponent.prototype, "selectedBg", {
        get: function () {
            return this._selectedBg;
        },
        set: function (value) {
            if (value && value !== '' && this._selectedBg !== value) {
                for (var palette in this.colors) {
                    if (!this.colors.hasOwnProperty(palette)) {
                        continue;
                    }
                    for (var _i = 0, _a = this.hues; _i < _a.length; _i++) {
                        var hue = _a[_i];
                        if (this.colors[palette][hue] === value) {
                            this.selectedPalette = palette;
                            this.selectedHue = hue;
                            break;
                        }
                    }
                }
            }
            this._selectedBg = value;
        },
        enumerable: true,
        configurable: true
    });
    FuseMaterialColorPickerComponent.prototype.ngOnInit = function () {
    };
    FuseMaterialColorPickerComponent.prototype.selectPalette = function (palette) {
        this.selectedPalette = palette;
        this.updateSelectedColor();
        this.view = 'hues';
    };
    FuseMaterialColorPickerComponent.prototype.selectHue = function (hue) {
        this.selectedHue = hue;
        this.updateSelectedColor();
    };
    FuseMaterialColorPickerComponent.prototype.removeColor = function () {
        this.selectedPalette = '';
        this.selectedHue = '';
        this.updateSelectedColor();
    };
    FuseMaterialColorPickerComponent.prototype.updateSelectedColor = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.selectedColor && _this.selectedPalette === _this.selectedColor.palette && _this.selectedHue === _this.selectedColor.hue) {
                return;
            }
            if (_this.selectedPalette !== '' && _this.selectedHue !== '') {
                _this.selectedBg = __WEBPACK_IMPORTED_MODULE_1__matColors__["a" /* MatColors */].getColor(_this.selectedPalette)[_this.selectedHue];
                _this.selectedFg = __WEBPACK_IMPORTED_MODULE_1__matColors__["a" /* MatColors */].getColor(_this.selectedPalette).contrast[_this.selectedHue];
                _this.selectedClass = 'mat-' + _this.selectedPalette + '-' + _this.selectedHue + '-bg';
            }
            else {
                _this.selectedBg = '';
                _this.selectedFg = '';
            }
            _this.selectedColor = {
                palette: _this.selectedPalette,
                hue: _this.selectedHue,
                class: _this.selectedClass,
                bg: _this.selectedBg,
                fg: _this.selectedFg
            };
            _this.selectedPaletteChange.emit(_this.selectedPalette);
            _this.selectedHueChange.emit(_this.selectedHue);
            _this.selectedClassChange.emit(_this.selectedClass);
            _this.selectedBgChange.emit(_this.selectedBg);
            _this.selectedFgChange.emit(_this.selectedFg);
            _this.value = _this.selectedColor;
            _this.onValueChange.emit(_this.selectedColor);
        });
    };
    FuseMaterialColorPickerComponent.prototype.backToPaletteSelection = function () {
        this.view = 'palettes';
    };
    FuseMaterialColorPickerComponent.prototype.onMenuOpen = function () {
        if (this.selectedPalette === '') {
            this.view = 'palettes';
        }
        else {
            this.view = 'hues';
        }
    };
    FuseMaterialColorPickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedBg && changes.selectedBg.currentValue === '' ||
            changes.selectedClass && changes.selectedClass.currentValue === '' ||
            changes.selectedPalette && changes.selectedPalette.currentValue === '') {
            this.removeColor();
            return;
        }
        if (changes.selectedPalette || changes.selectedHue || changes.selectedClass || changes.selectedBg) {
            this.updateSelectedColor();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedPalette", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedHue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedFg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "onValueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedPaletteChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedHueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedClassChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedBgChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedFgChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FuseMaterialColorPickerComponent.prototype, "selectedClass", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FuseMaterialColorPickerComponent.prototype, "selectedBg", null);
    FuseMaterialColorPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-material-color-picker',
            template: __webpack_require__("../../../../../src/app/core/components/material-color-picker/material-color-picker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/material-color-picker/material-color-picker.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* fuseAnimations */],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FuseMaterialColorPickerComponent);
    return FuseMaterialColorPickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n    <mat-icon class=\"collapse-arrow\">keyboard_arrow_right</mat-icon>\n</a>\n\n<div class=\"children\" [ngClass]=\"{'open': isOpen}\">\n\n    <div class=\"{{fuseSettings.colorClasses.navbar}}\">\n\n        <ng-container *ngFor=\"let item of item.children\">\n            <fuse-nav-horizontal-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-horizontal-item>\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n        </ng-container>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavHorizontalCollapseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseNavHorizontalCollapseComponent = /** @class */ (function () {
    function FuseNavHorizontalCollapseComponent(fuseConfig) {
        var _this = this;
        this.fuseConfig = fuseConfig;
        this.isOpen = false;
        this.classes = 'nav-item nav-collapse';
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
            });
    }
    FuseNavHorizontalCollapseComponent.prototype.open = function () {
        this.isOpen = true;
    };
    FuseNavHorizontalCollapseComponent.prototype.close = function () {
        this.isOpen = false;
    };
    FuseNavHorizontalCollapseComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], FuseNavHorizontalCollapseComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseNavHorizontalCollapseComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavHorizontalCollapseComponent.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavHorizontalCollapseComponent.prototype, "close", null);
    FuseNavHorizontalCollapseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-nav-horizontal-collapse',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* FuseConfigService */]])
    ], FuseNavHorizontalCollapseComponent);
    return FuseNavHorizontalCollapseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" *ngIf=\"item.url\" [routerLink]=\"[item.url]\" routerLinkActive=\"active\"\n   [routerLinkActiveOptions]=\"{exact: item.exactMatch || false}\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n</a>\n\n<span class=\"nav-link\" *ngIf=\"item.function\" (click)=\"item.function()\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n</span>"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavHorizontalItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseNavHorizontalItemComponent = /** @class */ (function () {
    function FuseNavHorizontalItemComponent() {
        this.classes = 'nav-item';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], FuseNavHorizontalItemComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseNavHorizontalItemComponent.prototype, "item", void 0);
    FuseNavHorizontalItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-nav-horizontal-item',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.scss")]
        })
    ], FuseNavHorizontalItemComponent);
    return FuseNavHorizontalItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-navigation\" class=\"nav\"\n     [ngClass]=\"{'horizontal':layout === 'horizontal', 'vertical':layout === 'vertical'}\">\n\n    <!-- Vertical Navigation Layout -->\n    <ng-container *ngIf=\"layout === 'vertical'\">\n\n        <ng-container *ngFor=\"let item of navigationModel\">\n\n            <fuse-nav-vertical-group *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-vertical-group>\n            <fuse-nav-vertical-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-vertical-collapse>\n            <fuse-nav-vertical-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-vertical-item>\n\n        </ng-container>\n\n    </ng-container>\n    <!-- / Vertical Navigation Layout -->\n\n    <!-- Horizontal Navigation Layout -->\n    <ng-container *ngIf=\"layout === 'horizontal'\">\n\n        <ng-container *ngFor=\"let item of navigationModel\">\n\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n            <fuse-nav-horizontal-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-horizontal-item>\n\n        </ng-container>\n\n    </ng-container>\n    <!-- / Horizontal Navigation Layout -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#main-navigation {\n  margin: 0;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseNavigationComponent = /** @class */ (function () {
    function FuseNavigationComponent(fuseNavigationService) {
        var _this = this;
        this.fuseNavigationService = fuseNavigationService;
        this.layout = 'vertical';
        this.navigationModelChangeSubscription =
            this.fuseNavigationService.onNavigationModelChange
                .subscribe(function (navigationModel) {
                _this.navigationModel = navigationModel;
            });
    }
    FuseNavigationComponent.prototype.ngOnDestroy = function () {
        this.navigationModelChangeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('layout'),
        __metadata("design:type", Object)
    ], FuseNavigationComponent.prototype, "layout", void 0);
    FuseNavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-navigation',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/navigation.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* FuseNavigationService */]])
    ], FuseNavigationComponent);
    return FuseNavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_component__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vertical_nav_item_nav_vertical_item_component__ = __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vertical_nav_collapse_nav_vertical_collapse_component__ = __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vertical_nav_group_nav_vertical_group_component__ = __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__horizontal_nav_item_nav_horizontal_item_component__ = __webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__horizontal_nav_collapse_nav_horizontal_collapse_component__ = __webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FuseNavigationModule = /** @class */ (function () {
    function FuseNavigationModule() {
    }
    FuseNavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__navigation_component__["a" /* FuseNavigationComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__navigation_component__["a" /* FuseNavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__vertical_nav_group_nav_vertical_group_component__["a" /* FuseNavVerticalGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_4__vertical_nav_item_nav_vertical_item_component__["a" /* FuseNavVerticalItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__vertical_nav_collapse_nav_vertical_collapse_component__["a" /* FuseNavVerticalCollapseComponent */],
                __WEBPACK_IMPORTED_MODULE_7__horizontal_nav_item_nav_horizontal_item_component__["a" /* FuseNavHorizontalItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__horizontal_nav_collapse_nav_horizontal_collapse_component__["a" /* FuseNavHorizontalCollapseComponent */]
            ]
        })
    ], FuseNavigationModule);
    return FuseNavigationModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseNavigationService = /** @class */ (function () {
    function FuseNavigationService() {
        this.onNavCollapseToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onNavCollapseToggled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onNavigationModelChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.flatNavigation = [];
    }
    /**
     * Get navigation model
     *
     * @returns {any[]}
     */
    FuseNavigationService.prototype.getNavigationModel = function () {
        return this.navigationModel.model;
    };
    /**
     * Set the navigation model
     *
     * @param model
     */
    FuseNavigationService.prototype.setNavigationModel = function (model) {
        this.navigationModel = model;
        this.onNavigationModelChange.next(this.navigationModel.model);
    };
    /**
     * Add new navigation item
     * to the given location
     */
    FuseNavigationService.prototype.addNavigationItem = function (location, item) {
        // Parse the location
        var locationArr = location.split('.');
        if (locationArr.length === 0) {
            return;
        }
        // Find the navigation item
        var navItem = this.findNavigationItemById(locationArr);
        // Act according to the item type
        switch (navItem.type) {
            case 'item':
                // Create a children array
                navItem.children = [];
                // Push the item
                navItem.children.push(item);
                // Change the item type to collapsable
                navItem.type = 'collapse';
                break;
            case 'collapse':
                // Push the item
                navItem.children.push(item);
                break;
            case 'group':
                // Push the item
                navItem.children.push(item);
                break;
            default:
                break;
        }
    };
    /**
     * Get navigation item from
     * given location
     *
     * @param location
     */
    FuseNavigationService.prototype.getNavigationItem = function (location) {
        // Parse the location
        var locationArr = location.split('.');
        if (locationArr.length === 0) {
            return;
        }
        // Find and return the navigation item
        return this.findNavigationItemById(locationArr);
    };
    /**
     * Find navigation item by location
     *
     * @param location
     * @param navigation
     */
    FuseNavigationService.prototype.findNavigationItemById = function (location, navigation) {
        if (!navigation) {
            navigation = this.navigationModel.model;
        }
        // Iterate through the given navigation
        for (var _i = 0, navigation_1 = navigation; _i < navigation_1.length; _i++) {
            var navItem = navigation_1[_i];
            // If the nav item id equals the first location...
            if (navItem.id === location[0]) {
                // If there is more location to look at...
                if (location.length > 1) {
                    // Remove the first item of the location
                    location.splice(0, 1);
                    // Go nested...
                    return this.findNavigationItemById(location, navItem.children);
                }
                else {
                    return navItem;
                }
            }
        }
    };
    /**
     * Get flattened navigation array
     * @param navigationItems
     * @returns {any[]}
     */
    FuseNavigationService.prototype.getFlatNavigation = function (navigationItems) {
        // If navigation items not provided,
        // that means we are running the function
        // for the first time...
        if (!navigationItems) {
            // Reset the flat navigation
            this.flatNavigation = [];
            // Get the entire navigation model
            navigationItems = this.navigationModel.model;
        }
        for (var _i = 0, navigationItems_1 = navigationItems; _i < navigationItems_1.length; _i++) {
            var navItem = navigationItems_1[_i];
            if (navItem.type === 'subheader') {
                continue;
            }
            if (navItem.type === 'item') {
                this.flatNavigation.push({
                    title: navItem.title,
                    type: navItem.type,
                    icon: navItem.icon || false,
                    url: navItem.url
                });
                continue;
            }
            if (navItem.type === 'collapse' || navItem.type === 'group') {
                if (navItem.children) {
                    this.getFlatNavigation(navItem.children);
                }
            }
        }
        return this.flatNavigation;
    };
    FuseNavigationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FuseNavigationService);
    return FuseNavigationService;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" matRipple (click)=\"toggleOpen($event)\">\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n    <mat-icon class=\"collapse-arrow\">keyboard_arrow_right</mat-icon>\n</a>\n\n<div class=\"children\" [@slideInOut]=\"isOpen\">\n    <ng-container *ngFor=\"let item of item.children\">\n        <fuse-nav-vertical-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-vertical-item>\n        <fuse-nav-vertical-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-vertical-collapse>\n        <fuse-nav-vertical-group *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-vertical-group>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.folded-open) :host .nav-link > span {\n  opacity: 0;\n  -webkit-transition: opacity 200ms ease;\n  transition: opacity 200ms ease; }\n\n:host .nav-link .collapse-arrow {\n  -webkit-transition: opacity .25s ease-in-out .1s, -webkit-transform .3s ease-in-out;\n  transition: opacity .25s ease-in-out .1s, -webkit-transform .3s ease-in-out;\n  transition: transform .3s ease-in-out, opacity .25s ease-in-out .1s;\n  transition: transform .3s ease-in-out, opacity .25s ease-in-out .1s, -webkit-transform .3s ease-in-out;\n  -webkit-transform: rotate(0);\n          transform: rotate(0); }\n\n:host > .children {\n  overflow: hidden; }\n\n:host.open > .nav-link .collapse-arrow {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavVerticalCollapseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseNavVerticalCollapseComponent = /** @class */ (function () {
    function FuseNavVerticalCollapseComponent(navigationService, router) {
        var _this = this;
        this.navigationService = navigationService;
        this.router = router;
        this.classes = 'nav-collapse nav-item';
        this.isOpen = false;
        // Listen for route changes
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                // Check if the url can be found in
                // one of the children of this item
                if (_this.isUrlInChildren(_this.item, event.urlAfterRedirects)) {
                    _this.expand();
                }
                else {
                    _this.collapse();
                }
            }
        });
        // Listen for collapsing of any navigation item
        this.navigationService.onNavCollapseToggled
            .subscribe(function (clickedItem) {
            if (clickedItem && clickedItem.children) {
                // Check if the clicked item is one
                // of the children of this item
                if (_this.isChildrenOf(_this.item, clickedItem)) {
                    return;
                }
                // Check if the url can be found in
                // one of the children of this item
                if (_this.isUrlInChildren(_this.item, _this.router.url)) {
                    return;
                }
                // If the clicked item is not this item, collapse...
                if (_this.item !== clickedItem) {
                    _this.collapse();
                }
            }
        });
    }
    FuseNavVerticalCollapseComponent.prototype.ngOnInit = function () {
        // Check if the url can be found in
        // one of the children of this item
        if (this.isUrlInChildren(this.item, this.router.url)) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    /**
     * Toggle collapse
     *
     * @param ev
     */
    FuseNavVerticalCollapseComponent.prototype.toggleOpen = function (ev) {
        ev.preventDefault();
        this.isOpen = !this.isOpen;
        // Navigation collapse toggled...
        this.navigationService.onNavCollapseToggled.emit(this.item);
        this.navigationService.onNavCollapseToggle.emit();
    };
    /**
     * Expand the collapsable navigation
     */
    FuseNavVerticalCollapseComponent.prototype.expand = function () {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        this.navigationService.onNavCollapseToggle.emit();
    };
    /**
     * Collapse the collapsable navigation
     */
    FuseNavVerticalCollapseComponent.prototype.collapse = function () {
        if (!this.isOpen) {
            return;
        }
        this.isOpen = false;
        this.navigationService.onNavCollapseToggle.emit();
    };
    /**
     * Check if the given parent has the
     * given item in one of its children
     *
     * @param parent
     * @param item
     * @return {any}
     */
    FuseNavVerticalCollapseComponent.prototype.isChildrenOf = function (parent, item) {
        if (!parent.children) {
            return false;
        }
        if (parent.children.indexOf(item) !== -1) {
            return true;
        }
        for (var _i = 0, _a = parent.children; _i < _a.length; _i++) {
            var children = _a[_i];
            if (children.children) {
                return this.isChildrenOf(children, item);
            }
        }
    };
    /**
     * Check if the given url can be found
     * in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {any}
     */
    FuseNavVerticalCollapseComponent.prototype.isUrlInChildren = function (parent, url) {
        if (!parent.children) {
            return false;
        }
        for (var i = 0; i < parent.children.length; i++) {
            if (parent.children[i].children) {
                if (this.isUrlInChildren(parent.children[i], url)) {
                    return true;
                }
            }
            if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseNavVerticalCollapseComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], FuseNavVerticalCollapseComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], FuseNavVerticalCollapseComponent.prototype, "isOpen", void 0);
    FuseNavVerticalCollapseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-nav-vertical-collapse',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* FuseNavigationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], FuseNavVerticalCollapseComponent);
    return FuseNavVerticalCollapseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"group-title\">\n    <span class=\"hint-text\" [translate]=\"item.translate\">{{ item.title }}</span>\n</div>\n\n<div class=\"group-items\">\n    <ng-container *ngFor=\"let item of item.children\">\n        <fuse-nav-vertical-group *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-vertical-group>\n        <fuse-nav-vertical-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-vertical-collapse>\n        <fuse-nav-vertical-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-vertical-item>\n    </ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.folded-open) :host > .group-title {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .folded:not(.folded-open) :host > .group-title > span {\n    opacity: 0;\n    -webkit-transition: opacity 200ms ease;\n    transition: opacity 200ms ease; }\n  .folded:not(.folded-open) :host > .group-title:before {\n    content: '';\n    display: block;\n    position: absolute;\n    min-width: 1.6rem;\n    border-top: 2px solid;\n    opacity: 0.2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavVerticalGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseNavVerticalGroupComponent = /** @class */ (function () {
    function FuseNavVerticalGroupComponent() {
        this.classes = 'nav-group nav-item';
    }
    FuseNavVerticalGroupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], FuseNavVerticalGroupComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseNavVerticalGroupComponent.prototype, "item", void 0);
    FuseNavVerticalGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-nav-vertical-group',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseNavVerticalGroupComponent);
    return FuseNavVerticalGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" *ngIf=\"item.url\" [routerLink]=\"[item.url]\" routerLinkActive=\"active\"\n   [routerLinkActiveOptions]=\"{exact: item.exactMatch || false}\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n</a>\n\n<span class=\"nav-link\" *ngIf=\"item.function\" (click)=\"item.function()\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.folded-open) :host .nav-link > .nav-link-title,\n.folded:not(.folded-open) :host .nav-link > .nav-link-badge {\n  opacity: 0;\n  -webkit-transition: opacity 200ms ease;\n  transition: opacity 200ms ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavVerticalItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseNavVerticalItemComponent = /** @class */ (function () {
    function FuseNavVerticalItemComponent() {
        this.classes = 'nav-item';
    }
    FuseNavVerticalItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], FuseNavVerticalItemComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FuseNavVerticalItemComponent.prototype, "item", void 0);
    FuseNavVerticalItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-nav-vertical-item',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseNavVerticalItemComponent);
    return FuseNavVerticalItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fuse-search-bar\" [ngClass]=\"{'expanded':!collapsed}\" fxFlex=\"0 1 auto\">\n    <div [ngClass]=\"toolbarColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n        <label for=\"fuse-search-bar-input\">\n            <button mat-icon-button class=\"fuse-search-bar-expander\" aria-label=\"Expand Search Bar\" (click)=\"expand()\"\n                    *ngIf=\"collapsed\">\n                <mat-icon class=\"s-24\">search</mat-icon>\n            </button>\n            <!--<span class=\"fuse-search-bar-loader\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"!collapsed\">\n                <mat-progress-spinner color=\"mat-accent\" mode=\"indeterminate\"></mat-progress-spinner>\n            </span>-->\n        </label>\n\n        <input id=\"fuse-search-bar-input\" class=\"ml-24\" type=\"text\" placeholder=\"Search\" (input)=\"search($event)\" fxFlex>\n\n        <button mat-icon-button class=\"fuse-search-bar-collapser mat-icon-button\" (click)=\"collapse()\"\n                aria-label=\"Collapse Search Bar\">\n            <mat-icon class=\"s-24\">close</mat-icon>\n        </button>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .fuse-search-bar {\n  min-width: 64px;\n  height: 64px;\n  font-size: 13px; }\n@media (max-width: 959px) {\n    :host .fuse-search-bar {\n      height: 56px; } }\n:host .fuse-search-bar .fuse-search-bar-expander,\n  :host .fuse-search-bar .fuse-search-bar-collapser {\n    cursor: pointer;\n    padding: 0 20px;\n    margin: 0;\n    width: 64px !important;\n    height: 64px !important;\n    line-height: 64px !important; }\n@media (max-width: 959px) {\n      :host .fuse-search-bar .fuse-search-bar-expander,\n      :host .fuse-search-bar .fuse-search-bar-collapser {\n        height: 56px !important;\n        line-height: 56px !important; } }\n:host .fuse-search-bar .fuse-search-bar-loader {\n    width: 64px !important;\n    height: 64px !important;\n    line-height: 64px !important; }\n@media (max-width: 959px) {\n      :host .fuse-search-bar .fuse-search-bar-loader {\n        height: 56px !important;\n        line-height: 56px !important; } }\n:host .fuse-search-bar .fuse-search-bar-collapser {\n    display: none; }\n:host .fuse-search-bar #fuse-search-bar-input {\n    display: none;\n    min-height: 64px;\n    background-color: transparent;\n    font-size: 16px; }\n:host .fuse-search-bar.expanded {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 10; }\n:host .fuse-search-bar.expanded #fuse-search-bar-input {\n      display: block; }\n:host .fuse-search-bar.expanded .fuse-search-bar-collapser {\n      display: block; }\n:host body.fuse-search-bar-expanded #toolbar {\n  z-index: 999 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseSearchBarComponent = /** @class */ (function () {
    function FuseSearchBarComponent(fuseConfig) {
        var _this = this;
        this.fuseConfig = fuseConfig;
        this.onInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.collapsed = true;
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.toolbarColor = newSettings.colorClasses.toolbar;
            });
    }
    FuseSearchBarComponent.prototype.ngOnInit = function () {
    };
    FuseSearchBarComponent.prototype.collapse = function () {
        this.collapsed = true;
    };
    FuseSearchBarComponent.prototype.expand = function () {
        this.collapsed = false;
    };
    FuseSearchBarComponent.prototype.search = function (event) {
        var value = event.target.value;
        this.onInput.emit(value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FuseSearchBarComponent.prototype, "onInput", void 0);
    FuseSearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-search-bar',
            template: __webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* FuseConfigService */]])
    ], FuseSearchBarComponent);
    return FuseSearchBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSearchBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_bar_component__ = __webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FuseSearchBarModule = /** @class */ (function () {
    function FuseSearchBarModule() {
    }
    FuseSearchBarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search_bar_component__["a" /* FuseSearchBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__search_bar_component__["a" /* FuseSearchBarComponent */]
            ]
        })
    ], FuseSearchBarModule);
    return FuseSearchBarModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fuse-shortcuts\" #shortcuts>\n\n    <div class=\"shortcuts-mobile-toggle\" *ngIf=\"!mobileShortcutsPanelActive\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n         fxHide fxShow.lt-md>\n        <button mat-icon-button (click)=\"showMobileShortcutsPanel()\">\n            <mat-icon class=\"amber-600-fg\">star</mat-icon>\n        </button>\n    </div>\n\n    <div class=\"shortcuts\" fxHide fxShow.gt-sm [ngClass]=\"toolbarColor\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlex=\"0 1 auto\">\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"w-40 h-40 p-4\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\n                     *ngFor=\"let shortcutItem of shortcutItems\">\n\n                    <a mat-icon-button matTooltip=\"{{shortcutItem.title}}\" [routerLink]=\"shortcutItem.url\">\n                        <mat-icon *ngIf=\"shortcutItem.icon\">{{shortcutItem.icon}}</mat-icon>\n                        <span *ngIf=\"!shortcutItem.icon\" class=\"h2 secondary-text text-bold\">\n                            {{shortcutItem.title.substr(0, 1).toUpperCase()}}\n                        </span>\n                    </a>\n\n                </div>\n\n                <button mat-icon-button [matMenuTriggerFor]=\"addMenu\" matTooltip=\"Click to add/remove shortcut\"\n                        (menuOpened)=\"onMenuOpen()\">\n                    <mat-icon class=\"amber-600-fg\">star</mat-icon>\n                </button>\n\n            </div>\n\n            <div class=\"shortcuts-mobile-close\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide fxShow.lt-md>\n                <button mat-icon-button (click)=\"hideMobileShortcutsPanel()\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </div>\n\n        </div>\n\n        <mat-menu #addMenu=\"matMenu\" class=\"w-240\">\n\n            <mat-form-field class=\"px-16 w-100-p\" (click)=\"$event.stopPropagation()\" floatPlaceholder=\"never\">\n                <input #searchInput matInput placeholder=\"Search for an app or a page\" (input)=\"search($event)\">\n            </mat-form-field>\n\n            <mat-divider></mat-divider>\n            <mat-nav-list *ngIf=\"!searching\" style=\"max-height: 312px; overflow: auto\" fusePerfectScrollbar>\n\n                <mat-list-item *ngFor=\"let shortcutItem of shortcutItems\"\n                               (click)=\"toggleShortcut($event, shortcutItem)\">\n                    <div class=\"w-100-p\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon mat-list-icon class=\"mr-8\" *ngIf=\"shortcutItem.icon\">{{shortcutItem.icon}}</mat-icon>\n                        <span class=\"h2 w-32 h-32 p-4 mr-8 secondary-text text-bold\" fxLayout=\"row\"\n                              fxLayoutAlign=\"center center\" *ngIf=\"!shortcutItem.icon\">\n                            {{shortcutItem.title.substr(0, 1).toUpperCase()}}\n                        </span>\n                        <p matLine fxFlex>{{shortcutItem.title}}</p>\n                        <mat-icon class=\"ml-8\">star</mat-icon>\n                    </div>\n                </mat-list-item>\n                <mat-list-item *ngIf=\"shortcutItems.length === 0\">\n                    <p>\n                        <small>No shortcuts yet!</small>\n                    </p>\n                </mat-list-item>\n            </mat-nav-list>\n\n            <mat-nav-list *ngIf=\"searching\" style=\"max-height: 312px; overflow: auto\" fusePerfectScrollbar>\n                <mat-list-item *ngFor=\"let navigationItem of filteredNavigationItems\"\n                               (click)=\"toggleShortcut($event, navigationItem)\">\n                    <div class=\"w-100-p\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon mat-list-icon class=\"mr-8\" *ngIf=\"navigationItem.icon\">{{navigationItem.icon}}</mat-icon>\n                        <span class=\"h2 w-32 h-32 p-4 mr-8 secondary-text text-bold\" fxLayout=\"row\"\n                              fxLayoutAlign=\"center center\" *ngIf=\"!navigationItem.icon\">\n                            {{navigationItem.title.substr(0, 1).toUpperCase()}}\n                        </span>\n                        <p matLine fxFlex>{{navigationItem.title}}</p>\n                        <mat-icon class=\"ml-8\" *ngIf=\"isInShortcuts(navigationItem)\">star</mat-icon>\n                    </div>\n                </mat-list-item>\n            </mat-nav-list>\n        </mat-menu>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@media (max-width: 959px) {\n  :host #fuse-shortcuts.show-mobile-panel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 99;\n    padding: 0 8px; }\n    :host #fuse-shortcuts.show-mobile-panel .shortcuts {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      height: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseShortcutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_match_media_service__ = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuseShortcutsComponent = /** @class */ (function () {
    function FuseShortcutsComponent(renderer, observableMedia, fuseMatchMedia, fuseNavigationService, fuseConfig, cookieService) {
        var _this = this;
        this.renderer = renderer;
        this.observableMedia = observableMedia;
        this.fuseMatchMedia = fuseMatchMedia;
        this.fuseNavigationService = fuseNavigationService;
        this.fuseConfig = fuseConfig;
        this.cookieService = cookieService;
        this.shortcutItems = [];
        this.searching = false;
        this.mobileShortcutsPanelActive = false;
        this.filteredNavigationItems = this.navigationItems = this.fuseNavigationService.getFlatNavigation();
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.toolbarColor = newSettings.colorClasses.toolbar;
            });
    }
    FuseShortcutsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cookieExists = this.cookieService.check('FUSE2.shortcuts');
        if (cookieExists) {
            this.shortcutItems = JSON.parse(this.cookieService.get('FUSE2.shortcuts'));
        }
        else {
            // User's shortcut items
            this.shortcutItems = [
                {
                    'title': 'Calendar',
                    'type': 'nav-item',
                    'icon': 'today',
                    'url': '/apps/calendar'
                },
                {
                    'title': 'Mail',
                    'type': 'nav-item',
                    'icon': 'email',
                    'url': '/apps/mail'
                },
                {
                    'title': 'Contacts',
                    'type': 'nav-item',
                    'icon': 'account_box',
                    'url': '/apps/contacts'
                },
                {
                    'title': 'To-Do',
                    'type': 'nav-item',
                    'icon': 'check_box',
                    'url': '/apps/todo'
                }
            ];
        }
        this.matchMediaSubscription =
            this.fuseMatchMedia.onMediaChange.subscribe(function () {
                if (_this.observableMedia.isActive('gt-sm')) {
                    _this.hideMobileShortcutsPanel();
                }
            });
    };
    FuseShortcutsComponent.prototype.ngOnDestroy = function () {
        this.matchMediaSubscription.unsubscribe();
    };
    FuseShortcutsComponent.prototype.search = function (event) {
        var value = event.target.value.toLowerCase();
        if (value === '') {
            this.searching = false;
            this.filteredNavigationItems = this.navigationItems;
            return;
        }
        this.searching = true;
        this.filteredNavigationItems = this.navigationItems.filter(function (navigationItem) {
            return navigationItem.title.toLowerCase().includes(value);
        });
    };
    FuseShortcutsComponent.prototype.toggleShortcut = function (event, itemToToggle) {
        event.stopPropagation();
        for (var i = 0; i < this.shortcutItems.length; i++) {
            if (this.shortcutItems[i].url === itemToToggle.url) {
                this.shortcutItems.splice(i, 1);
                // Save to the cookies
                this.cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
                return;
            }
        }
        this.shortcutItems.push(itemToToggle);
        // Save to the cookies
        this.cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
    };
    FuseShortcutsComponent.prototype.isInShortcuts = function (navigationItem) {
        return this.shortcutItems.find(function (item) {
            return item.url === navigationItem.url;
        });
    };
    FuseShortcutsComponent.prototype.onMenuOpen = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchInputField.nativeElement.focus();
        });
    };
    FuseShortcutsComponent.prototype.showMobileShortcutsPanel = function () {
        this.mobileShortcutsPanelActive = true;
        this.renderer.addClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    };
    FuseShortcutsComponent.prototype.hideMobileShortcutsPanel = function () {
        this.mobileShortcutsPanelActive = false;
        this.renderer.removeClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchInput'),
        __metadata("design:type", Object)
    ], FuseShortcutsComponent.prototype, "searchInputField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('shortcuts'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FuseShortcutsComponent.prototype, "shortcutsEl", void 0);
    FuseShortcutsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-shortcuts',
            template: __webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */],
            __WEBPACK_IMPORTED_MODULE_3__services_match_media_service__["a" /* FuseMatchMedia */],
            __WEBPACK_IMPORTED_MODULE_1__navigation_navigation_service__["a" /* FuseNavigationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_config_service__["a" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]])
    ], FuseShortcutsComponent);
    return FuseShortcutsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseShortcutsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shortcuts_component__ = __webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FuseShortcutsModule = /** @class */ (function () {
    function FuseShortcutsModule() {
    }
    FuseShortcutsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shortcuts_component__["a" /* FuseShortcutsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__shortcuts_component__["a" /* FuseShortcutsComponent */]
            ]
        })
    ], FuseShortcutsModule);
    return FuseShortcutsModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/theme-options/theme-options.component.html":
/***/ (function(module, exports) {

module.exports = "<button #openButton mat-icon-button class=\"open-button mat-primary-bg mat-elevation-z2\" (click)=\"openBar()\">\n    <mat-icon>settings</mat-icon>\n</button>\n\n<div class=\"theme-options-panel-overlay\" #overlay [fxHide]=\"barClosed\" [@fadeInOut]=\"!barClosed\"></div>\n\n<div #panel class=\"theme-options-panel mat-white-bg mat-elevation-z8\">\n\n    <button mat-icon-button class=\"close-button\" (click)=\"closeBar()\">\n        <mat-icon>close</mat-icon>\n    </button>\n\n    <div class=\"theme-options-panel-inner\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n        <h3>Navigation:</h3>\n        <mat-radio-group [(ngModel)]=\"fuseSettings.layout.navigation\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start start\" fxLayoutWrap>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"top\">Top</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"left\">Left</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"right\">Right</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"none\">None</mat-radio-button>\n        </mat-radio-group>\n\n        <h3>Navigation Fold (for vertical navigation):</h3>\n        <mat-slide-toggle [(ngModel)]=\"fuseSettings.layout.navigationFolded\"\n                          (change)=\"onSettingsChange()\">\n            Folded\n        </mat-slide-toggle>\n\n        <h3 class=\"mt-24\">Toolbar:</h3>\n        <mat-radio-group [(ngModel)]=\"fuseSettings.layout.toolbar\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start start\" fxLayoutWrap>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"below\">Below</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"above\">Above</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"none\">None</mat-radio-button>\n        </mat-radio-group>\n\n        <h3 class=\"mt-24\">Footer:</h3>\n        <mat-radio-group [(ngModel)]=\"fuseSettings.layout.footer\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start start\" fxLayoutWrap>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"below\">Below</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"above\">Above</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"none\">None</mat-radio-button>\n        </mat-radio-group>\n\n        <h3 class=\"mt-24\">Layout Mode:</h3>\n        <mat-radio-group [(ngModel)]=\"fuseSettings.layout.mode\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start start\" fxLayoutWrap>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"boxed\">Boxed</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"fullwidth\">Fullwidth</mat-radio-button>\n        </mat-radio-group>\n\n        <mat-divider></mat-divider>\n\n        <h3>Colors:</h3>\n        <div class=\"colors\">\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <h4 class=\"mr-8\">Toolbar Color</h4>\n                <fuse-material-color-picker [(selectedClass)]=\"fuseSettings.colorClasses.toolbar\"\n                                            (onValueChange)=\"onSettingsChange()\"></fuse-material-color-picker>\n            </div>\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <h4 class=\"mr-8\">Navigation Bar Color</h4>\n                <fuse-material-color-picker [(selectedClass)]=\"fuseSettings.colorClasses.navbar\"\n                                            (onValueChange)=\"onSettingsChange()\"></fuse-material-color-picker>\n            </div>\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <h4 class=\"mr-8\">Footer Color</h4>\n                <fuse-material-color-picker [(selectedClass)]=\"fuseSettings.colorClasses.footer\"\n                                            (onValueChange)=\"onSettingsChange()\"></fuse-material-color-picker>\n            </div>\n\n        </div>\n\n        <mat-divider></mat-divider>\n\n        <h3>Router Animation:</h3>\n        <mat-form-field class=\"w-100-p\">\n            <mat-select class=\"p-0\" [(ngModel)]=\"fuseSettings.routerAnimation\">\n                <mat-option value=\"none\">\n                    None\n                </mat-option>\n                <mat-option value=\"slideUp\">\n                    Slide up\n                </mat-option>\n                <mat-option value=\"slideDown\">\n                    Slide down\n                </mat-option>\n                <mat-option value=\"slideRight\">\n                    Slide right\n                </mat-option>\n                <mat-option value=\"slideLeft\">\n                    Slide left\n                </mat-option>\n                <mat-option value=\"fadeIn\">\n                    Fade in\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/theme-options/theme-options.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@-webkit-keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n:host {\n  position: fixed;\n  display: block;\n  right: 0;\n  top: 160px;\n  z-index: 998; }\n:host.bar-closed .theme-options-panel {\n    display: none; }\n:host .theme-options-panel {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 360px;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    z-index: 999;\n    max-height: calc(100vh - 200px);\n    padding: 24px;\n    overflow: auto; }\n@media (max-width: 599px) {\n      :host .theme-options-panel {\n        top: -120px;\n        max-height: calc(100vh - 100px);\n        width: 90vw; } }\n:host .theme-options-panel .close-button {\n      position: absolute;\n      top: 8px;\n      right: 8px; }\n:host .theme-options-panel h3 {\n      font-size: 14px;\n      font-weight: 500;\n      color: rgba(0, 0, 0, 0.54); }\n:host .theme-options-panel .mat-divider {\n      display: block !important;\n      width: 100%;\n      margin: 24px 0 16px 0; }\n:host .theme-options-panel .colors {\n      display: block !important;\n      width: 100%; }\n:host .theme-options-panel-overlay {\n    position: fixed;\n    display: block;\n    background: transparent;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 998; }\n@media (max-width: 959px) {\n      :host .theme-options-panel-overlay {\n        background: rgba(0, 0, 0, 0.37); } }\n:host .theme-options-panel-overlay.hidden {\n      display: none; }\n:host .mat-list .mat-list-item {\n    font-size: 15px; }\n:host .mat-divider {\n    margin: 16px; }\n:host .open-button {\n    position: absolute;\n    top: 0;\n    left: -48px;\n    width: 48px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0;\n    margin: 0;\n    pointer-events: auto;\n    opacity: .75;\n    z-index: 998; }\n:host .open-button mat-icon {\n      -webkit-animation: rotating 3s linear infinite;\n              animation: rotating 3s linear infinite; }\n:host .open-button:hover {\n      opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/theme-options/theme-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseThemeOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseThemeOptionsComponent = /** @class */ (function () {
    function FuseThemeOptionsComponent(animationBuilder, fuseConfig, navigationService, renderer) {
        var _this = this;
        this.animationBuilder = animationBuilder;
        this.fuseConfig = fuseConfig;
        this.navigationService = navigationService;
        this.renderer = renderer;
        this.barClosed = true;
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
            });
        // Get the nav model and add customize nav item
        // that opens the bar programmatically
        var navModel = this.navigationService.getNavigationModel();
        navModel.push({
            'id': 'custom-function',
            'title': 'Custom Function',
            'type': 'group',
            'children': [
                {
                    'id': 'customize',
                    'title': 'Customize',
                    'type': 'item',
                    'icon': 'settings',
                    'function': function () {
                        _this.openBar();
                    }
                }
            ]
        });
    }
    FuseThemeOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.listen(this.overlay.nativeElement, 'click', function () {
            _this.closeBar();
        });
    };
    FuseThemeOptionsComponent.prototype.onSettingsChange = function () {
        this.fuseConfig.setSettings(this.fuseSettings);
    };
    FuseThemeOptionsComponent.prototype.closeBar = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* style */])({ transform: 'translate3d(0,0,0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* style */])({ transform: 'translate3d(100%,0,0)' }))
            ]).create(this.panel.nativeElement);
        this.player.play();
        this.player.onDone(function () {
            _this.barClosed = true;
        });
    };
    FuseThemeOptionsComponent.prototype.openBar = function () {
        this.barClosed = false;
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* style */])({ transform: 'translate3d(100%,0,0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* style */])({ transform: 'translate3d(0,0,0)' }))
            ]).create(this.panel.nativeElement);
        this.player.play();
    };
    FuseThemeOptionsComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('openButton'),
        __metadata("design:type", Object)
    ], FuseThemeOptionsComponent.prototype, "openButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel'),
        __metadata("design:type", Object)
    ], FuseThemeOptionsComponent.prototype, "panel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('overlay'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FuseThemeOptionsComponent.prototype, "overlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.bar-closed'),
        __metadata("design:type", Boolean)
    ], FuseThemeOptionsComponent.prototype, "barClosed", void 0);
    FuseThemeOptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-theme-options',
            template: __webpack_require__("../../../../../src/app/core/components/theme-options/theme-options.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/theme-options/theme-options.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_service__["a" /* FuseNavigationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], FuseThemeOptionsComponent);
    return FuseThemeOptionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/directives/fuse-if-on-dom/fuse-if-on-dom.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseIfOnDomDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseIfOnDomDirective = /** @class */ (function () {
    function FuseIfOnDomDirective(templateRef, viewContainer, element) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.element = element;
        this.isCreated = false;
    }
    FuseIfOnDomDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (document.body.contains(this.element.nativeElement) && !this.isCreated) {
            setTimeout(function () {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }, 300);
            this.isCreated = true;
        }
        else if (this.isCreated && !document.body.contains(this.element.nativeElement)) {
            this.viewContainer.clear();
            this.isCreated = false;
        }
    };
    FuseIfOnDomDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fuseIfOnDom]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], FuseIfOnDomDirective);
    return FuseIfOnDomDirective;
}());



/***/ }),

/***/ "../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMatSidenavHelperDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FuseMatSidenavTogglerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_match_media_service__ = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_mat_sidenav_helper_service__ = __webpack_require__("../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseMatSidenavHelperDirective = /** @class */ (function () {
    function FuseMatSidenavHelperDirective(fuseMatSidenavService, fuseMatchMedia, observableMedia, matSidenav) {
        this.fuseMatSidenavService = fuseMatSidenavService;
        this.fuseMatchMedia = fuseMatchMedia;
        this.observableMedia = observableMedia;
        this.matSidenav = matSidenav;
        this.isLockedOpen = true;
    }
    FuseMatSidenavHelperDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.fuseMatSidenavService.setSidenav(this.id, this.matSidenav);
        if (this.observableMedia.isActive(this.matIsLockedOpenBreakpoint)) {
            this.isLockedOpen = true;
            this.matSidenav.mode = 'side';
            this.matSidenav.toggle(true);
        }
        else {
            this.isLockedOpen = false;
            this.matSidenav.mode = 'over';
            this.matSidenav.toggle(false);
        }
        this.matchMediaSubscription = this.fuseMatchMedia.onMediaChange.subscribe(function () {
            if (_this.observableMedia.isActive(_this.matIsLockedOpenBreakpoint)) {
                _this.isLockedOpen = true;
                _this.matSidenav.mode = 'side';
                _this.matSidenav.toggle(true);
            }
            else {
                _this.isLockedOpen = false;
                _this.matSidenav.mode = 'over';
                _this.matSidenav.toggle(false);
            }
        });
    };
    FuseMatSidenavHelperDirective.prototype.ngOnDestroy = function () {
        this.matchMediaSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.mat-is-locked-open'),
        __metadata("design:type", Object)
    ], FuseMatSidenavHelperDirective.prototype, "isLockedOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fuseMatSidenavHelper'),
        __metadata("design:type", String)
    ], FuseMatSidenavHelperDirective.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mat-is-locked-open'),
        __metadata("design:type", String)
    ], FuseMatSidenavHelperDirective.prototype, "matIsLockedOpenBreakpoint", void 0);
    FuseMatSidenavHelperDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fuseMatSidenavHelper]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__fuse_mat_sidenav_helper_service__["a" /* FuseMatSidenavHelperService */],
            __WEBPACK_IMPORTED_MODULE_3__services_match_media_service__["a" /* FuseMatchMedia */],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSidenav */]])
    ], FuseMatSidenavHelperDirective);
    return FuseMatSidenavHelperDirective;
}());

var FuseMatSidenavTogglerDirective = /** @class */ (function () {
    function FuseMatSidenavTogglerDirective(fuseMatSidenavService) {
        this.fuseMatSidenavService = fuseMatSidenavService;
    }
    FuseMatSidenavTogglerDirective.prototype.onClick = function () {
        this.fuseMatSidenavService.getSidenav(this.id).toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fuseMatSidenavToggler'),
        __metadata("design:type", Object)
    ], FuseMatSidenavTogglerDirective.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseMatSidenavTogglerDirective.prototype, "onClick", null);
    FuseMatSidenavTogglerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fuseMatSidenavToggler]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__fuse_mat_sidenav_helper_service__["a" /* FuseMatSidenavHelperService */]])
    ], FuseMatSidenavTogglerDirective);
    return FuseMatSidenavTogglerDirective;
}());



/***/ }),

/***/ "../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMatSidenavHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseMatSidenavHelperService = /** @class */ (function () {
    function FuseMatSidenavHelperService() {
        this.sidenavInstances = [];
    }
    FuseMatSidenavHelperService.prototype.setSidenav = function (id, instance) {
        this.sidenavInstances[id] = instance;
    };
    FuseMatSidenavHelperService.prototype.getSidenav = function (id) {
        return this.sidenavInstances[id];
    };
    FuseMatSidenavHelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FuseMatSidenavHelperService);
    return FuseMatSidenavHelperService;
}());



/***/ }),

/***/ "../../../../../src/app/core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusePerfectScrollbarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FusePerfectScrollbarDirective = /** @class */ (function () {
    function FusePerfectScrollbarDirective(element, fuseConfig, platform) {
        var _this = this;
        this.element = element;
        this.fuseConfig = fuseConfig;
        this.platform = platform;
        this.isDisableCustomScrollbars = false;
        this.isMobile = false;
        this.isInitialized = true;
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (settings) {
                _this.isDisableCustomScrollbars = !settings.customScrollbars;
            });
        if (this.platform.ANDROID || this.platform.IOS) {
            this.isMobile = true;
        }
    }
    FusePerfectScrollbarDirective.prototype.ngAfterViewInit = function () {
        if (this.isMobile || this.isDisableCustomScrollbars) {
            this.isInitialized = false;
            return;
        }
        // Initialize the perfect-scrollbar
        this.ps = new __WEBPACK_IMPORTED_MODULE_3_perfect_scrollbar__["a" /* default */](this.element.nativeElement, {
            wheelPropagation: true
        });
    };
    FusePerfectScrollbarDirective.prototype.ngOnDestroy = function () {
        if (!this.isInitialized || !this.ps) {
            return;
        }
        this.onSettingsChanged.unsubscribe();
        // Destroy the perfect-scrollbar
        this.ps.destroy();
    };
    FusePerfectScrollbarDirective.prototype.documentClick = function (event) {
        if (!this.isInitialized || !this.ps) {
            return;
        }
        // Update the scrollbar on document click..
        // This isn't the most elegant solution but there is no other way
        // of knowing when the contents of the scrollable container changes.
        // Therefore, we update scrollbars on every document click.
        this.ps.update();
    };
    FusePerfectScrollbarDirective.prototype.update = function () {
        if (!this.isInitialized) {
            return;
        }
        // Update the perfect-scrollbar
        this.ps.update();
    };
    FusePerfectScrollbarDirective.prototype.destroy = function () {
        this.ngOnDestroy();
    };
    FusePerfectScrollbarDirective.prototype.scrollToX = function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToY = function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
        var width = this.element.nativeElement.scrollWidth;
        this.animateScrolling('scrollLeft', width - (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
        var height = this.element.nativeElement.scrollHeight;
        this.animateScrolling('scrollTop', height - (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
        var _this = this;
        if (!speed) {
            this.element.nativeElement[target] = value;
            // PS has weird event sending order, this is a workaround for that
            this.update();
            this.update();
        }
        else if (value !== this.element.nativeElement[target]) {
            var newValue_1 = 0;
            var scrollCount_1 = 0;
            var oldTimestamp_1 = performance.now();
            var oldValue_1 = this.element.nativeElement[target];
            var cosParameter_1 = (oldValue_1 - value) / 2;
            var step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.element.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.element.nativeElement[target] = value;
                        // PS has weird event sending order, this is a workaround for that
                        _this.update();
                        _this.update();
                    }
                    else {
                        _this.element.nativeElement[target] = oldValue_1 = newValue_1;
                        oldTimestamp_1 = newTimestamp;
                        window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], FusePerfectScrollbarDirective.prototype, "documentClick", null);
    FusePerfectScrollbarDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fusePerfectScrollbar]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_platform__["a" /* Platform */]])
    ], FusePerfectScrollbarDirective);
    return FusePerfectScrollbarDirective;
}());



/***/ }),

/***/ "../../../../../src/app/core/fuseUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseUtils; });
var FuseUtils = /** @class */ (function () {
    function FuseUtils() {
    }
    FuseUtils.filterArrayByString = function (mainArr, searchText) {
        var _this = this;
        if (searchText === '') {
            return mainArr;
        }
        searchText = searchText.toLowerCase();
        return mainArr.filter(function (itemObj) {
            return _this.searchInObj(itemObj, searchText);
        });
    };
    FuseUtils.searchInObj = function (itemObj, searchText) {
        for (var prop in itemObj) {
            if (!itemObj.hasOwnProperty(prop)) {
                continue;
            }
            var value = itemObj[prop];
            if (typeof value === 'string') {
                if (this.searchInString(value, searchText)) {
                    return true;
                }
            }
            else if (Array.isArray(value)) {
                if (this.searchInArray(value, searchText)) {
                    return true;
                }
            }
            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    };
    FuseUtils.searchInArray = function (arr, searchText) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var value = arr_1[_i];
            if (typeof value === 'string') {
                if (this.searchInString(value, searchText)) {
                    return true;
                }
            }
            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    };
    FuseUtils.searchInString = function (value, searchText) {
        return value.toLowerCase().includes(searchText);
    };
    FuseUtils.generateGUID = function () {
        function S4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return S4() + S4();
    };
    FuseUtils.toggleInArray = function (item, array) {
        if (array.indexOf(item) === -1) {
            array.push(item);
        }
        else {
            array.splice(array.indexOf(item), 1);
        }
    };
    FuseUtils.handleize = function (text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };
    return FuseUtils;
}());



/***/ }),

/***/ "../../../../../src/app/core/matColors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatColors; });
var black87 = 'rgba(black, 0.87)';
var white87 = 'rgba(white, 0.87)';
var black12 = 'rgba(black, 0.12)';
var white12 = 'rgba(white, 0.12)';
var black6 = 'rgba(black, 0.06)';
var white6 = 'rgba(white, 0.06)';
var matColors = {
    'red': {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#f44336',
        600: '#e53935',
        700: '#d32f2f',
        800: '#c62828',
        900: '#b71c1c',
        A100: '#ff8a80',
        A200: '#ff5252',
        A400: '#ff1744',
        A700: '#d50000',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'pink': {
        50: '#fce4ec',
        100: '#f8bbd0',
        200: '#f48fb1',
        300: '#f06292',
        400: '#ec407a',
        500: '#e91e63',
        600: '#d81b60',
        700: '#c2185b',
        800: '#ad1457',
        900: '#880e4f',
        A100: '#ff80ab',
        A200: '#ff4081',
        A400: '#f50057',
        A700: '#c51162',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'purple': {
        50: '#f3e5f5',
        100: '#e1bee7',
        200: '#ce93d8',
        300: '#ba68c8',
        400: '#ab47bc',
        500: '#9c27b0',
        600: '#8e24aa',
        700: '#7b1fa2',
        800: '#6a1b9a',
        900: '#4a148c',
        A100: '#ea80fc',
        A200: '#e040fb',
        A400: '#d500f9',
        A700: '#aa00ff',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'deep-purple': {
        50: '#ede7f6',
        100: '#d1c4e9',
        200: '#b39ddb',
        300: '#9575cd',
        400: '#7e57c2',
        500: '#673ab7',
        600: '#5e35b1',
        700: '#512da8',
        800: '#4527a0',
        900: '#311b92',
        A100: '#b388ff',
        A200: '#7c4dff',
        A400: '#651fff',
        A700: '#6200ea',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: white87,
            A700: white87
        }
    },
    'indigo': {
        50: '#e8eaf6',
        100: '#c5cae9',
        200: '#9fa8da',
        300: '#7986cb',
        400: '#5c6bc0',
        500: '#3f51b5',
        600: '#3949ab',
        700: '#303f9f',
        800: '#283593',
        900: '#1a237e',
        A100: '#8c9eff',
        A200: '#536dfe',
        A400: '#3d5afe',
        A700: '#304ffe',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: white87
        }
    },
    'blue': {
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3',
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
        A100: '#82b1ff',
        A200: '#448aff',
        A400: '#2979ff',
        A700: '#2962ff',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'light-blue': {
        50: '#e1f5fe',
        100: '#b3e5fc',
        200: '#81d4fa',
        300: '#4fc3f7',
        400: '#29b6f6',
        500: '#03a9f4',
        600: '#039be5',
        700: '#0288d1',
        800: '#0277bd',
        900: '#01579b',
        A100: '#80d8ff',
        A200: '#40c4ff',
        A400: '#00b0ff',
        A700: '#0091ea',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: 'white'
        }
    },
    'cyan': {
        50: '#e0f7fa',
        100: '#b2ebf2',
        200: '#80deea',
        300: '#4dd0e1',
        400: '#26c6da',
        500: '#00bcd4',
        600: '#00acc1',
        700: '#0097a7',
        800: '#00838f',
        900: '#006064',
        A100: '#84ffff',
        A200: '#18ffff',
        A400: '#00e5ff',
        A700: '#00b8d4',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'teal': {
        50: '#e0f2f1',
        100: '#b2dfdb',
        200: '#80cbc4',
        300: '#4db6ac',
        400: '#26a69a',
        500: '#009688',
        600: '#00897b',
        700: '#00796b',
        800: '#00695c',
        900: '#004d40',
        A100: '#a7ffeb',
        A200: '#64ffda',
        A400: '#1de9b6',
        A700: '#00bfa5',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'green': {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
        A100: '#b9f6ca',
        A200: '#69f0ae',
        A400: '#00e676',
        A700: '#00c853',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'light-green': {
        50: '#f1f8e9',
        100: '#dcedc8',
        200: '#c5e1a5',
        300: '#aed581',
        400: '#9ccc65',
        500: '#8bc34a',
        600: '#7cb342',
        700: '#689f38',
        800: '#558b2f',
        900: '#33691e',
        A100: '#ccff90',
        A200: '#b2ff59',
        A400: '#76ff03',
        A700: '#64dd17',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'lime': {
        50: '#f9fbe7',
        100: '#f0f4c3',
        200: '#e6ee9c',
        300: '#dce775',
        400: '#d4e157',
        500: '#cddc39',
        600: '#c0ca33',
        700: '#afb42b',
        800: '#9e9d24',
        900: '#827717',
        A100: '#f4ff81',
        A200: '#eeff41',
        A400: '#c6ff00',
        A700: '#aeea00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'yellow': {
        50: '#fffde7',
        100: '#fff9c4',
        200: '#fff59d',
        300: '#fff176',
        400: '#ffee58',
        500: '#ffeb3b',
        600: '#fdd835',
        700: '#fbc02d',
        800: '#f9a825',
        900: '#f57f17',
        A100: '#ffff8d',
        A200: '#ffff00',
        A400: '#ffea00',
        A700: '#ffd600',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: black87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'amber': {
        50: '#fff8e1',
        100: '#ffecb3',
        200: '#ffe082',
        300: '#ffd54f',
        400: '#ffca28',
        500: '#ffc107',
        600: '#ffb300',
        700: '#ffa000',
        800: '#ff8f00',
        900: '#ff6f00',
        A100: '#ffe57f',
        A200: '#ffd740',
        A400: '#ffc400',
        A700: '#ffab00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: black87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'orange': {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
        A100: '#ffd180',
        A200: '#ffab40',
        A400: '#ff9100',
        A700: '#ff6d00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: 'black'
        }
    },
    'deep-orange': {
        50: '#fbe9e7',
        100: '#ffccbc',
        200: '#ffab91',
        300: '#ff8a65',
        400: '#ff7043',
        500: '#ff5722',
        600: '#f4511e',
        700: '#e64a19',
        800: '#d84315',
        900: '#bf360c',
        A100: '#ff9e80',
        A200: '#ff6e40',
        A400: '#ff3d00',
        A700: '#dd2c00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: 'white'
        }
    },
    'brown': {
        50: '#efebe9',
        100: '#d7ccc8',
        200: '#bcaaa4',
        300: '#a1887f',
        400: '#8d6e63',
        500: '#795548',
        600: '#6d4c41',
        700: '#5d4037',
        800: '#4e342e',
        900: '#3e2723',
        A100: '#d7ccc8',
        A200: '#bcaaa4',
        A400: '#8d6e63',
        A700: '#5d4037',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: white87
        }
    },
    'grey': {
        0: '#ffffff',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        1000: '#000000',
        A100: '#ffffff',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
        contrast: {
            0: black87,
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            1000: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: white87
        }
    },
    'blue-grey': {
        50: '#eceff1',
        100: '#cfd8dc',
        200: '#b0bec5',
        300: '#90a4ae',
        400: '#78909c',
        500: '#607d8b',
        600: '#546e7a',
        700: '#455a64',
        800: '#37474f',
        900: '#263238',
        A100: '#cfd8dc',
        A200: '#b0bec5',
        A400: '#78909c',
        A700: '#455a64',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: 'white',
            500: 'white',
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: white87
        }
    },
    'fuse-dark': {
        50: '#ECECEE',
        100: '#C5C6CB',
        200: '#9EA1A9',
        300: '#7D818C',
        400: '#5C616F',
        500: '#3C4252',
        600: '#353A48',
        700: '#2D323E',
        800: '#262933',
        900: '#1E2129',
        A100: '#C5C6CB',
        A200: '#9EA1A9',
        A400: '#5C616F',
        A700: '#2D323E',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: white87,
            A400: white87,
            A700: white87
        }
    },
    white: {
        500: 'white',
        contrast: {
            500: black87
        }
    },
    black: {
        500: 'black',
        contrast: {
            500: 'white'
        }
    }
};
// tslint:disable-next-line
var matPresetColors = [
    '#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162', '#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea', '#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff', '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4', '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723', '#d7ccc8', '#bcaaa4', '#8d6e63', '#5d4037', '#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121', '#ffffff', '#eeeeee', '#bdbdbd', '#616161', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238', '#cfd8dc', '#b0bec5', '#78909c', '#455a64'
];
/**
 // Color palettes from the Material Design spec.
 // See https://www.google.com/design/spec/style/color.html
 */
var MatColors = /** @class */ (function () {
    function MatColors() {
    }
    MatColors.getColor = function (colorName) {
        if (matColors[colorName]) {
            return matColors[colorName];
        }
        return false;
    };
    MatColors.all = matColors;
    MatColors.presets = matPresetColors;
    return MatColors;
}());



/***/ }),

/***/ "../../../../../src/app/core/modules/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/modules/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("../../../../../src/app/core/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_dnd__ = __webpack_require__("../../../../@swimlane/ngx-dnd/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_fuse_mat_sidenav_helper_fuse_mat_sidenav_helper_directive__ = __webpack_require__("../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_fuse_mat_sidenav_helper_fuse_mat_sidenav_helper_service__ = __webpack_require__("../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_pipes_module__ = __webpack_require__("../../../../../src/app/core/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_countdown_countdown_component__ = __webpack_require__("../../../../../src/app/core/components/countdown/countdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_match_media_service__ = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_navbar_vertical_navbar_vertical_service__ = __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_highlight_highlight_component__ = __webpack_require__("../../../../../src/app/core/components/highlight/highlight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__ = __webpack_require__("../../../../../src/app/core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_fuse_if_on_dom_fuse_if_on_dom_directive__ = __webpack_require__("../../../../../src/app/core/directives/fuse-if-on-dom/fuse-if-on-dom.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_material_color_picker_material_color_picker_component__ = __webpack_require__("../../../../../src/app/core/components/material-color-picker/material-color-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_translation_loader_service__ = __webpack_require__("../../../../../src/app/core/services/translation-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__directives_fuse_mat_sidenav_helper_fuse_mat_sidenav_helper_directive__["a" /* FuseMatSidenavHelperDirective */],
                __WEBPACK_IMPORTED_MODULE_8__directives_fuse_mat_sidenav_helper_fuse_mat_sidenav_helper_directive__["b" /* FuseMatSidenavTogglerDirective */],
                __WEBPACK_IMPORTED_MODULE_11__components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_countdown_countdown_component__["a" /* FuseCountdownComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_highlight_highlight_component__["a" /* FuseHighlightComponent */],
                __WEBPACK_IMPORTED_MODULE_17__directives_fuse_if_on_dom_fuse_if_on_dom_directive__["a" /* FuseIfOnDomDirective */],
                __WEBPACK_IMPORTED_MODULE_16__directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */],
                __WEBPACK_IMPORTED_MODULE_18__components_material_color_picker_material_color_picker_component__["a" /* FuseMaterialColorPickerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_pipes_module__["a" /* FusePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_dnd__["NgxDnDModule"],
                __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_22_ng2_charts__["ChartsModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__directives_fuse_mat_sidenav_helper_fuse_mat_sidenav_helper_directive__["a" /* FuseMatSidenavHelperDirective */],
                __WEBPACK_IMPORTED_MODULE_8__directives_fuse_mat_sidenav_helper_fuse_mat_sidenav_helper_directive__["b" /* FuseMatSidenavTogglerDirective */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_pipes_module__["a" /* FusePipesModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_countdown_countdown_component__["a" /* FuseCountdownComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_highlight_highlight_component__["a" /* FuseHighlightComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_dnd__["NgxDnDModule"],
                __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_17__directives_fuse_if_on_dom_fuse_if_on_dom_directive__["a" /* FuseIfOnDomDirective */],
                __WEBPACK_IMPORTED_MODULE_18__components_material_color_picker_material_color_picker_component__["a" /* FuseMaterialColorPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_charts__["ChartsModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_13__services_match_media_service__["a" /* FuseMatchMedia */],
                __WEBPACK_IMPORTED_MODULE_14__main_navbar_vertical_navbar_vertical_service__["a" /* FuseNavbarVerticalService */],
                __WEBPACK_IMPORTED_MODULE_9__directives_fuse_mat_sidenav_helper_fuse_mat_sidenav_helper_service__["a" /* FuseMatSidenavHelperService */],
                __WEBPACK_IMPORTED_MODULE_19__services_translation_loader_service__["a" /* FuseTranslationLoaderService */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/pipes/camelCaseToDash.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamelCaseToDashPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CamelCaseToDashPipe = /** @class */ (function () {
    function CamelCaseToDashPipe() {
    }
    CamelCaseToDashPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        return value ? String(value).replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); }) : '';
    };
    CamelCaseToDashPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'camelCaseToDash' })
    ], CamelCaseToDashPipe);
    return CamelCaseToDashPipe;
}());



/***/ }),

/***/ "../../../../../src/app/core/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuseUtils__ = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (mainArr, searchText, property) {
        return __WEBPACK_IMPORTED_MODULE_1__fuseUtils__["a" /* FuseUtils */].filterArrayByString(mainArr, searchText);
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/core/pipes/getById.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetByIdPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetByIdPipe = /** @class */ (function () {
    function GetByIdPipe() {
    }
    GetByIdPipe.prototype.transform = function (value, id, property) {
        var foundItem = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (foundItem) {
            return foundItem[property];
        }
    };
    GetByIdPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'getById',
            pure: false
        })
    ], GetByIdPipe);
    return GetByIdPipe;
}());



/***/ }),

/***/ "../../../../../src/app/core/pipes/htmlToPlaintext.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlToPlaintextPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HtmlToPlaintextPipe = /** @class */ (function () {
    function HtmlToPlaintextPipe() {
    }
    HtmlToPlaintextPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        return value ? String(value).replace(/<[^>]+>/gm, '') : '';
    };
    HtmlToPlaintextPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'htmlToPlaintext' })
    ], HtmlToPlaintextPipe);
    return HtmlToPlaintextPipe;
}());



/***/ }),

/***/ "../../../../../src/app/core/pipes/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({
                    key: key,
                    value: value[key]
                });
            }
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../../../../../src/app/core/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusePipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getById_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/getById.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__htmlToPlaintext_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/htmlToPlaintext.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camelCaseToDash_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/camelCaseToDash.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FusePipesModule = /** @class */ (function () {
    function FusePipesModule() {
    }
    FusePipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__getById_pipe__["a" /* GetByIdPipe */],
                __WEBPACK_IMPORTED_MODULE_3__htmlToPlaintext_pipe__["a" /* HtmlToPlaintextPipe */],
                __WEBPACK_IMPORTED_MODULE_4__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_5__camelCaseToDash_pipe__["a" /* CamelCaseToDashPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__getById_pipe__["a" /* GetByIdPipe */],
                __WEBPACK_IMPORTED_MODULE_3__htmlToPlaintext_pipe__["a" /* HtmlToPlaintextPipe */],
                __WEBPACK_IMPORTED_MODULE_4__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_5__camelCaseToDash_pipe__["a" /* CamelCaseToDashPipe */]
            ]
        })
    ], FusePipesModule);
    return FusePipesModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["b" /* url */] + 'auth/login', { "email": email, "password": password });
    };
    AuthService.prototype.signup = function (email, password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["b" /* url */] + 'auth/register', { "email": email, "password": password });
    };
    AuthService.prototype.forgotpassword = function (email) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["b" /* url */] + 'auth/forgotpassword', { "email": email });
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.setUser = function (user) {
        this.user = user;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseConfigService = /** @class */ (function () {
    /**
     * @param router
     * @param platform
     */
    function FuseConfigService(router, platform) {
        var _this = this;
        this.router = router;
        this.platform = platform;
        // Set the default settings
        this.defaultSettings = {
            layout: {
                navigation: 'left',
                navigationFolded: false,
                toolbar: 'below',
                footer: 'below',
                mode: 'fullwidth' // 'boxed', 'fullwidth'
            },
            colorClasses: {
                toolbar: 'mat-white-500-bg',
                navbar: 'mat-fuse-dark-700-bg',
                footer: 'mat-fuse-dark-900-bg'
            },
            customScrollbars: true,
            routerAnimation: 'fadeIn' // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
        };
        /**
         * Disable Custom Scrollbars if Browser is Mobile
         */
        if (this.platform.ANDROID || this.platform.IOS) {
            this.defaultSettings.customScrollbars = false;
        }
        // Set the settings from the default settings
        this.settings = Object.assign({}, this.defaultSettings);
        // Reload the default settings on every navigation start
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationStart */]) {
                _this.setSettings({ layout: _this.defaultSettings.layout });
            }
        });
        // Create the behavior subject
        this.onSettingsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.settings);
    }
    /**
     * Sets settings
     * @param settings
     */
    FuseConfigService.prototype.setSettings = function (settings) {
        // Set the settings from the given object
        this.settings = Object.assign({}, this.settings, settings);
        // Trigger the event
        this.onSettingsChanged.next(this.settings);
    };
    FuseConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__["a" /* Platform */]])
    ], FuseConfigService);
    return FuseConfigService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardService = /** @class */ (function () {
    function GuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    GuardService.prototype.canActivate = function () {
        if (this.authService.getUser())
            return true;
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    GuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/match-media.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMatchMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
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


var FuseMatchMedia = /** @class */ (function () {
    function FuseMatchMedia(observableMedia) {
        var _this = this;
        this.observableMedia = observableMedia;
        this.onMediaChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.activeMediaQuery = '';
        this.observableMedia.subscribe(function (change) {
            if (_this.activeMediaQuery !== change.mqAlias) {
                _this.activeMediaQuery = change.mqAlias;
                _this.onMediaChange.emit(change.mqAlias);
            }
        });
    }
    FuseMatchMedia = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__["b" /* ObservableMedia */]])
    ], FuseMatchMedia);
    return FuseMatchMedia;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/splash-screen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSplashScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FuseSplashScreenService = /** @class */ (function () {
    function FuseSplashScreenService(animationBuilder, document, router) {
        var _this = this;
        this.animationBuilder = animationBuilder;
        this.document = document;
        this.router = router;
        // Get the splash screen element
        this.splashScreenEl = this.document.body.querySelector('#fuse-splash-screen');
        // If the splash screen element exists...
        if (this.splashScreenEl) {
            // Hide it on the first NavigationEnd event
            var hideOnLoad_1 = this.router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                    setTimeout(function () {
                        _this.hide();
                        // Unsubscribe from this event so it
                        // won't get triggered again
                        hideOnLoad_1.unsubscribe();
                    }, 0);
                }
            });
        }
    }
    FuseSplashScreenService.prototype.show = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["n" /* style */])({
                    opacity: '0',
                    zIndex: '99999'
                }),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["n" /* style */])({ opacity: '1' }))
            ]).create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    FuseSplashScreenService.prototype.hide = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["n" /* style */])({ opacity: '1' }),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["n" /* style */])({
                    opacity: '0',
                    zIndex: '-10'
                }))
            ]).create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    FuseSplashScreenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* AnimationBuilder */], Object, __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]])
    ], FuseSplashScreenService);
    return FuseSplashScreenService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/translation-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTranslationLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseTranslationLoaderService = /** @class */ (function () {
    function FuseTranslationLoaderService(translate) {
        this.translate = translate;
    }
    FuseTranslationLoaderService.prototype.loadTranslations = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var locales = args.slice();
        locales.forEach(function (locale) {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            _this.translate.setTranslation(locale.lang, locale.data, true);
        });
    };
    FuseTranslationLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */]])
    ], FuseTranslationLoaderService);
    return FuseTranslationLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/main/content/content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  z-index: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_animations__ = __webpack_require__("../../../../../src/app/core/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuseContentComponent = /** @class */ (function () {
    function FuseContentComponent(router, activatedRoute, fuseConfig) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fuseConfig = fuseConfig;
        this.routeAnimationUp = false;
        this.routeAnimationDown = false;
        this.routeAnimationRight = false;
        this.routeAnimationLeft = false;
        this.routeAnimationFade = false;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .subscribe(function (event) {
            switch (_this.fuseSettings.routerAnimation) {
                case 'fadeIn':
                    _this.routeAnimationFade = !_this.routeAnimationFade;
                    break;
                case 'slideUp':
                    _this.routeAnimationUp = !_this.routeAnimationUp;
                    break;
                case 'slideDown':
                    _this.routeAnimationDown = !_this.routeAnimationDown;
                    break;
                case 'slideRight':
                    _this.routeAnimationRight = !_this.routeAnimationRight;
                    break;
                case 'slideLeft':
                    _this.routeAnimationLeft = !_this.routeAnimationLeft;
                    break;
            }
        });
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
            });
    }
    FuseContentComponent.prototype.ngOnInit = function () {
    };
    FuseContentComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerTransitionUp'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationUp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerTransitionDown'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationDown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerTransitionRight'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerTransitionLeft'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routerTransitionFade'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationFade", void 0);
    FuseContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-content',
            template: __webpack_require__("../../../../../src/app/main/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/content.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_2__core_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_config_service__["a" /* FuseConfigService */]])
    ], FuseContentComponent);
    return FuseContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout blank p-24\" fusePerfectScrollbar>\n\n    <!-- <h2>{{'SAMPLE.HELLO' | translate}}</h2> -->\n\n    <div class=\"main-wrap\">\n        <div class=\"header\">\n            <img src=\"assets/img/SpeechBubble.png\" alt=\"\">\n            <div class=\"name\">\n                {{user.user.email}}\n            </div>\n        </div>\n        <div class=\"box-outer\">\n            <div class=\"box\">\n                <div class=\"header-box\">\n                    General information\n                </div>\n                <div class=\"box-info\">\n                    <div class=\"box-item\">\n                        <div class=\"box-caption\">\n                            Gender\n                        </div>\n                        <div class=\"box-content\">\n                            Famale\n                        </div>\n                    </div>\n                    <div class=\"box-item\">\n                        <div class=\"box-caption\">\n                            Birthday\n                        </div>\n                        <div class=\"box-content\">\n                            May 8th, 1988\n                        </div>\n                    </div>\n                    <div class=\"box-item\">\n                        <div class=\"box-caption\">\n                            Locations\n                        </div>\n                        <div class=\"box-content flex-box\">\n                            <span>Istambul, Turkey <i class=\"material-icons\" style=\"position: relative; top: 4px;\">location_on</i></span>\n                            <span>New York, USA <i class=\"material-icons\" style=\"position: relative; top: 4px;\">location_on</i></span>\n                        </div>\n                    </div>\n                    <div class=\"box-item\">\n                        <div class=\"box-caption\">\n                            About Me\n                        </div>\n                        <div class=\"box-content\">\n                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati sit voluptatum alias praesentium perspiciatis hic? Ex reiciendis quis rerum excepturi, totam iste labore eligendi nemo? Odit eligendi neque minima ea et, ratione possimus magni repellat, impedit perferendis, commodi pariatur ab!\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  padding-top: 10px;\n  background-size: 100% 160%; }\n\n.header > img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  margin-right: 25px; }\n\n.name {\n  color: white;\n  font-size: 35px;\n  letter-spacing: 1px; }\n\n.box-outer {\n  padding: 25px; }\n\n.box {\n  -webkit-box-shadow: -1px 2px 11px -2px rgba(0, 0, 0, 0.75);\n  box-shadow: -1px 2px 11px -2px rgba(0, 0, 0, 0.75); }\n\n.header-box {\n  background: #15a9f4;\n  color: white;\n  padding: 14px;\n  font-size: 20px;\n  font-family: GothamPro; }\n\n.box-info {\n  padding: 15px; }\n\n.box-caption {\n  font-size: 16px;\n  font-weight: 600;\n  font-family: GothamPro;\n  margin-bottom: 5px; }\n\n.box-content {\n  font-size: 16px;\n  font-family: GothamPro; }\n\n.box-item {\n  margin-bottom: 15px; }\n\n.flex-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
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
    function ProfileComponent(authService) {
        this.authService = authService;
        this.user = this.authService.getUser();
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/main/content/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/sample/i18n/en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locale; });
var locale = {
    lang: 'en',
    data: {
        'SAMPLE': {
            'HELLO': 'Hello, World!'
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/main/content/sample/i18n/tr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locale; });
var locale = {
    lang: 'tr',
    data: {
        'SAMPLE': {
            'HELLO': 'Merhaba Dünya!'
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/main/content/sample/sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout blank p-24\" fusePerfectScrollbar>\n\n    <h2>{{user.user.email}}</h2>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/sample/sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/sample/sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_translation_loader_service__ = __webpack_require__("../../../../../src/app/core/services/translation-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_en__ = __webpack_require__("../../../../../src/app/main/content/sample/i18n/en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_tr__ = __webpack_require__("../../../../../src/app/main/content/sample/i18n/tr.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseSampleComponent = /** @class */ (function () {
    function FuseSampleComponent(translationLoader, authService) {
        this.translationLoader = translationLoader;
        this.authService = authService;
        this.translationLoader.loadTranslations(__WEBPACK_IMPORTED_MODULE_2__i18n_en__["a" /* locale */], __WEBPACK_IMPORTED_MODULE_3__i18n_tr__["a" /* locale */]);
        this.user = this.authService.getUser();
    }
    FuseSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-sample',
            template: __webpack_require__("../../../../../src/app/main/content/sample/sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/sample/sample.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_translation_loader_service__["a" /* FuseTranslationLoaderService */], __WEBPACK_IMPORTED_MODULE_4__core_services_auth_service__["a" /* AuthService */]])
    ], FuseSampleComponent);
    return FuseSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/sample/sample.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSampleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_component__ = __webpack_require__("../../../../../src/app/main/content/sample/sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_guard_service__ = __webpack_require__("../../../../../src/app/core/services/guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'sample',
        component: __WEBPACK_IMPORTED_MODULE_3__sample_component__["a" /* FuseSampleComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__core_services_guard_service__["a" /* GuardService */]]
    },
];
var FuseSampleModule = /** @class */ (function () {
    function FuseSampleModule() {
    }
    FuseSampleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sample_component__["a" /* FuseSampleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__core_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__sample_component__["a" /* FuseSampleComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__core_services_guard_service__["a" /* GuardService */]
            ]
        })
    ], FuseSampleModule);
    return FuseSampleModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutAlign.gt-xs=\"space-between center\" fxFlex>\n\n        <a href=\"http://themeforest.net/item/fuse-angularjs-material-design-admin-template/12931855?ref=srcn\"\n           target=\"_blank\" mat-button class=\"mat-pink-bg\" fxFlex=\"0 0 auto\" fxLayout=\"row\"\n           fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-16 mr-sm-4\">shopping_cart</mat-icon>\n            <span>Purchase FUSE (Angular5+)</span>\n        </a>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide fxShow.gt-xs>\n            <a mat-button href=\"http://fusetheme.com/angular/docs\" target=\"_blank\">Documentation</a>\n            <span>&bull;</span>\n            <a mat-button href=\"http://fusetheme.com/angular/changelog\" target=\"_blank\">Changelog</a>\n        </div>\n\n    </div>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  z-index: 3; }\n  :host .mat-toolbar {\n    background: inherit;\n    color: inherit;\n    -webkit-box-shadow: 0px -1px 1px -1px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.14), 0px -1px 3px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px -1px 1px -1px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.14), 0px -1px 3px 0px rgba(0, 0, 0, 0.12); }\n  :host.above {\n    position: relative;\n    z-index: 99; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseFooterComponent = /** @class */ (function () {
    function FuseFooterComponent() {
    }
    FuseFooterComponent.prototype.ngOnInit = function () {
    };
    FuseFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-footer',
            template: __webpack_require__("../../../../../src/app/main/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseFooterComponent);
    return FuseFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n    <div id=\"fuse-main-content\">\n\n        <!-- TOOLBAR: Above -->\n        <ng-container *ngIf=\"fuseSettings.layout.toolbar === 'above'\">\n            <fuse-toolbar class=\"above\" [ngClass]=\"fuseSettings.colorClasses.toolbar\"></fuse-toolbar>\n        </ng-container>\n        <!-- / TOOLBAR: Above -->\n\n        <!-- NAVBAR: Top -->\n        <fuse-navbar-horizontal class=\"top-navbar\" fxHide fxShow.gt-md\n                                [ngClass]=\"fuseSettings.colorClasses.navbar\"\n                                *ngIf=\"fuseSettings.layout.navigation === 'top'\">\n        </fuse-navbar-horizontal>\n        <!-- / NAVBAR: Top -->\n\n        <div id=\"wrapper\">\n\n            <!-- NAVBAR: Left -->\n            <fuse-navbar-vertical [folded]=\"fuseSettings.layout.navigationFolded\"\n                                  class=\"left-navbar\"\n                                  [ngClass]=\"fuseSettings.colorClasses.navbar\"\n                                  *ngIf=\"fuseSettings.layout.navigation === 'left' || fuseSettings.layout.navigation === 'top'\">\n            </fuse-navbar-vertical>\n            <!-- / NAVBAR: Left -->\n\n            <div class=\"content-wrapper\">\n\n                <!-- TOOLBAR: Below -->\n                <ng-container *ngIf=\"fuseSettings.layout.toolbar === 'below'\">\n                    <fuse-toolbar class=\"below\" [ngClass]=\"fuseSettings.colorClasses.toolbar\"></fuse-toolbar>\n                </ng-container>\n                <!-- / TOOLBAR: Below -->\n\n                <fuse-content></fuse-content>\n\n                <!-- FOOTER: Below -->\n                <!--<ng-container *ngIf=\"fuseSettings.layout.footer === 'below'\">-->\n                    <!--<fuse-footer class=\"below\" [ngClass]=\"fuseSettings.colorClasses.footer\"></fuse-footer>-->\n                <!--</ng-container>-->\n                <!-- / FOOTER: Below -->\n\n            </div>\n\n            <!-- NAVBAR: Right -->\n            <fuse-navbar-vertical [folded]=\"fuseSettings.layout.navigationFolded\"\n                                  class=\"right-navbar\"\n                                  [ngClass]=\"fuseSettings.colorClasses.navbar\"\n                                  *ngIf=\"fuseSettings.layout.navigation === 'right'\">\n            </fuse-navbar-vertical>\n            <!-- / NAVBAR: Right -->\n\n        </div>\n\n        <!-- FOOTER: Above -->\n        <ng-container *ngIf=\"fuseSettings.layout.footer === 'above'\">\n            <fuse-footer class=\"above\" [ngClass]=\"fuseSettings.colorClasses.footer\"></fuse-footer>\n        </ng-container>\n        <!-- FOOTER: Above -->\n\n    </div>\n\n    <!-- QUICK PANEL -->\n    <mat-sidenav fuseMatSidenavHelper=\"quick-panel\" align=\"end\">\n        <fuse-quick-panel></fuse-quick-panel>\n    </mat-sidenav>\n    <!-- / QUICK PANEL -->\n\n</mat-sidenav-container>\n\n<!--<fuse-theme-options></fuse-theme-options>-->\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%; }\nfuse-main > .mat-sidenav-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content,\n    fuse-main > .mat-sidenav-container > .mat-drawer-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      overflow: hidden;\n      height: 100vh; }\n@media (max-width: 959px) {\n        fuse-main > .mat-sidenav-container > .mat-sidenav-content,\n        fuse-main > .mat-sidenav-container > .mat-drawer-content {\n          height: auto !important; } }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content,\n      fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        overflow: hidden; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper,\n        fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative;\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          overflow: hidden; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper,\n          fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-flex: 1;\n                -ms-flex: 1;\n                    flex: 1;\n            overflow: hidden; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper fuse-content,\n            fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper fuse-content {\n              position: relative;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-flex: 1;\n                  -ms-flex: 1;\n                      flex: 1;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              width: 100%;\n              overflow: hidden; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper fuse-content > *:not(router-outlet):not(.ps__scrollbar-x-rail):not(.ps__scrollbar-y-rail),\n              fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper fuse-content > *:not(router-outlet):not(.ps__scrollbar-x-rail):not(.ps__scrollbar-y-rail) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-flex: 1;\n                    -ms-flex: 1;\n                        flex: 1;\n                width: 100%;\n                min-width: 100%; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper fuse-content > *.ng-animating .mat-tab-body,\n              fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper fuse-content > *.ng-animating .mat-tab-body {\n                height: 100vh; }\nfuse-main[fuse-layout-mode=\"boxed\"] {\n    max-width: 1200px;\n    margin: 0 auto;\n    -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FuseMainComponent = /** @class */ (function () {
    function FuseMainComponent(_renderer, _elementRef, fuseConfig, platform, document) {
        var _this = this;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.fuseConfig = fuseConfig;
        this.platform = platform;
        this.document = document;
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
                _this.layoutMode = _this.fuseSettings.layout.mode;
            });
        if (this.platform.ANDROID || this.platform.IOS) {
            this.document.body.className += ' is-mobile';
        }
    }
    FuseMainComponent.prototype.ngOnInit = function () {
    };
    FuseMainComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    FuseMainComponent.prototype.addClass = function (className) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    };
    FuseMainComponent.prototype.removeClass = function (className) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.fuse-layout-mode'),
        __metadata("design:type", Object)
    ], FuseMainComponent.prototype, "layoutMode", void 0);
    FuseMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__core_services_config_service__["a" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_platform__["a" /* Platform */], Object])
    ], FuseMainComponent);
    return FuseMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_modules_shared_module__ = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_content_component__ = __webpack_require__("../../../../../src/app/main/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/main/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_vertical_navbar_vertical_component__ = __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_components_navigation_navigation_module__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_vertical_navbar_vertical_toggle_directive__ = __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical-toggle.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_horizontal_navbar_horizontal_component__ = __webpack_require__("../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quick_panel_quick_panel_component__ = __webpack_require__("../../../../../src/app/main/quick-panel/quick-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_components_theme_options_theme_options_component__ = __webpack_require__("../../../../../src/app/core/components/theme-options/theme-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_components_shortcuts_shortcuts_module__ = __webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_components_search_bar_search_bar_module__ = __webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__content_profile_profile_component__ = __webpack_require__("../../../../../src/app/main/content/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var FuseMainModule = /** @class */ (function () {
    function FuseMainModule() {
    }
    FuseMainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__content_content_component__["a" /* FuseContentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FuseFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* FuseMainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_vertical_navbar_vertical_component__["a" /* FuseNavbarVerticalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__navbar_horizontal_navbar_horizontal_component__["a" /* FuseNavbarHorizontalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__["a" /* FuseToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_vertical_navbar_vertical_toggle_directive__["a" /* FuseNavbarVerticalToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_12__core_components_theme_options_theme_options_component__["a" /* FuseThemeOptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__quick_panel_quick_panel_component__["a" /* FuseQuickPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_15__content_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__core_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__core_components_navigation_navigation_module__["a" /* FuseNavigationModule */],
                __WEBPACK_IMPORTED_MODULE_13__core_components_shortcuts_shortcuts_module__["a" /* FuseShortcutsModule */],
                __WEBPACK_IMPORTED_MODULE_14__core_components_search_bar_search_bar_module__["a" /* FuseSearchBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* FuseMainComponent */]
            ]
        })
    ], FuseMainModule);
    return FuseMainModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.html":
/***/ (function(module, exports) {

module.exports = "<fuse-navigation layout=\"horizontal\"></fuse-navigation>\n"

/***/ }),

/***/ "../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavbarHorizontalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseNavbarHorizontalComponent = /** @class */ (function () {
    function FuseNavbarHorizontalComponent(fuseMainComponent) {
        this.fuseMainComponent = fuseMainComponent;
    }
    FuseNavbarHorizontalComponent.prototype.ngOnInit = function () {
        this.fuseMainComponent.addClass('fuse-nav-bar-horizontal');
    };
    FuseNavbarHorizontalComponent.prototype.ngOnDestroy = function () {
        this.fuseMainComponent.removeClass('fuse-nav-bar-horizontal');
    };
    FuseNavbarHorizontalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-navbar-horizontal',
            template: __webpack_require__("../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_component__["a" /* FuseMainComponent */]])
    ], FuseNavbarHorizontalComponent);
    return FuseNavbarHorizontalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/navbar/vertical/navbar-vertical-toggle.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavbarVerticalToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_vertical_service__ = __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseNavbarVerticalToggleDirective = /** @class */ (function () {
    function FuseNavbarVerticalToggleDirective(navbarService) {
        this.navbarService = navbarService;
    }
    FuseNavbarVerticalToggleDirective.prototype.onClick = function () {
        this.navbar = this.navbarService.getNavBar();
        if (!this.navbar[this.fuseNavbarVertical]) {
            return;
        }
        this.navbar[this.fuseNavbarVertical]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FuseNavbarVerticalToggleDirective.prototype, "fuseNavbarVertical", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavbarVerticalToggleDirective.prototype, "onClick", null);
    FuseNavbarVerticalToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fuseNavbarVertical]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__navbar_vertical_service__["a" /* FuseNavbarVerticalService */]])
    ], FuseNavbarVerticalToggleDirective);
    return FuseNavbarVerticalToggleDirective;
}());



/***/ }),

/***/ "../../../../../src/app/main/navbar/vertical/navbar-vertical.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-header\">\n\n    <div class=\"logo\">\n        <img class=\"logo-icon\" src=\"assets/images/logos/fuse.svg\">\n        <span class=\"logo-text\">FUSE</span>\n    </div>\n\n    <button mat-button class=\"toggle-button-navbar mat-icon-button\" fuseNavbarVertical=\"toggleFold\" fxHide.lt-lg>\n        <mat-icon>menu</mat-icon>\n    </button>\n\n    <button mat-button class=\"toggle-button-navbar mat-icon-button\" fuseNavbarVertical=\"closeBar\" fxHide.gt-md>\n        <mat-icon>arrow_back</mat-icon>\n    </button>\n\n</div>\n\n<div class=\"navbar-content\" fusePerfectScrollbar>\n    <fuse-navigation layout=\"vertical\"></fuse-navigation>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/navbar/vertical/navbar-vertical.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-main.fuse-nav-bar-folded:not(.fuse-nav-bar-horizontal) .content-wrapper:last-child {\n  padding-left: 64px !important; }\nfuse-main.fuse-nav-bar-folded:not(.fuse-nav-bar-horizontal) .content-wrapper:first-child {\n  padding-right: 64px !important; }\nfuse-main.fuse-nav-bar-folded:not(.fuse-nav-bar-horizontal) .content-wrapper:first-child:last-child {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\nfuse-navbar-vertical {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 256px;\n  min-width: 256px;\n  max-width: 256px;\n  background-color: #FFFFFF;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 4;\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), width 0.1s linear, min-width 0.1s linear, max-width 0.1s linear;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), width 0.1s linear, min-width 0.1s linear, max-width 0.1s linear;\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\nfuse-navbar-vertical.folded {\n    position: absolute;\n    top: 0;\n    bottom: 0; }\nfuse-navbar-vertical.folded.left-navbar {\n      left: 0; }\nfuse-navbar-vertical.folded.right-navbar {\n      right: 0; }\nfuse-navbar-vertical.folded:not(.folded-open) {\n      width: 64px;\n      min-width: 64px;\n      max-width: 64px; }\nfuse-navbar-vertical.folded:not(.folded-open) .navbar-header {\n        padding: 0 13px; }\nfuse-navbar-vertical.folded:not(.folded-open) .navbar-header .logo .logo-text {\n          opacity: 0;\n          -webkit-transition: opacity 200ms ease;\n          transition: opacity 200ms ease; }\nfuse-navbar-vertical.close {\n    -webkit-box-shadow: none;\n            box-shadow: none; }\nfuse-navbar-vertical.close.left-navbar {\n      -webkit-transform: translateX(-100%) !important;\n              transform: translateX(-100%) !important; }\nfuse-navbar-vertical.close.right-navbar {\n      -webkit-transform: translateX(100%) !important;\n              transform: translateX(100%) !important; }\n@media screen and (max-width: 1279px) {\n    fuse-navbar-vertical {\n      position: absolute;\n      top: 0;\n      bottom: 0; }\n      fuse-navbar-vertical.left-navbar {\n        left: 0; }\n      fuse-navbar-vertical.right-navbar {\n        right: 0; }\n      fuse-navbar-vertical:not(.initialized).left-navbar {\n        -webkit-transform: translateX(-100%);\n                transform: translateX(-100%); }\n      fuse-navbar-vertical:not(.initialized).right-navbar {\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%); } }\nfuse-navbar-vertical .navbar-header {\n    padding: 0 16px 0 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 64px;\n    min-height: 64px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-transition: padding 200ms ease;\n    transition: padding 200ms ease;\n    background-color: rgba(255, 255, 255, 0.05);\n    -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\nfuse-navbar-vertical .navbar-header .logo {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\nfuse-navbar-vertical .navbar-header .logo .logo-icon {\n        width: 38px;\n        height: 38px; }\nfuse-navbar-vertical .navbar-header .logo .logo-text {\n        margin-left: 8px;\n        font-size: 20px;\n        font-weight: 300;\n        letter-spacing: 0.4px; }\nfuse-navbar-vertical .navbar-content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\nfuse-navbar-horizontal + #wrapper > fuse-navbar-vertical {\n  display: none; }\n@media (max-width: 1279px) {\n    fuse-navbar-horizontal + #wrapper > fuse-navbar-vertical {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n.fuse-navbar-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 3;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/navbar/vertical/navbar-vertical.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavbarVerticalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_match_media_service__ = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_vertical_service__ = __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_components_navigation_navigation_service__ = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__ = __webpack_require__("../../../../../src/app/core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FuseNavbarVerticalComponent = /** @class */ (function () {
    function FuseNavbarVerticalComponent(fuseMainComponent, fuseMatchMedia, fuseNavigationService, navBarService, router, _renderer, _elementRef, animationBuilder, media) {
        var _this = this;
        this.fuseMainComponent = fuseMainComponent;
        this.fuseMatchMedia = fuseMatchMedia;
        this.fuseNavigationService = fuseNavigationService;
        this.navBarService = navBarService;
        this.router = router;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.animationBuilder = animationBuilder;
        this.media = media;
        this._backdropElement = null;
        this._folded = false;
        navBarService.setNavBar(this);
        this.navigationServiceWatcher =
            this.fuseNavigationService.onNavCollapseToggle.subscribe(function () {
                _this.fusePerfectScrollbarUpdateTimeout = setTimeout(function () {
                    _this.fusePerfectScrollbarDirective.update();
                }, 310);
            });
        this.matchMediaWatcher =
            this.fuseMatchMedia.onMediaChange
                .subscribe(function (mediaStep) {
                setTimeout(function () {
                    if (_this.media.isActive('lt-lg')) {
                        _this.closeBar();
                        _this.deActivateFolded();
                    }
                    else {
                        _this.openBar();
                        _this._detachBackdrop();
                    }
                });
            });
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* NavigationEnd */]) {
                if (_this.media.isActive('lt-lg')) {
                    setTimeout(function () {
                        _this.closeBar();
                    });
                }
            }
        });
    }
    Object.defineProperty(FuseNavbarVerticalComponent.prototype, "folded", {
        get: function () {
            return this._folded;
        },
        set: function (value) {
            this._folded = value;
            if (this._folded) {
                this.activateFolded();
            }
            else {
                this.deActivateFolded();
            }
        },
        enumerable: true,
        configurable: true
    });
    FuseNavbarVerticalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isClosed = false;
        this.isFoldedActive = this._folded;
        this.isFoldedOpen = false;
        this.initialized = false;
        this.updateCssClasses();
        setTimeout(function () {
            _this.initialized = true;
        });
        if (this.media.isActive('lt-lg')) {
            this.closeBar();
            this.deActivateFolded();
        }
        else {
            if (!this._folded) {
                this.deActivateFolded();
            }
            else {
                this.activateFolded();
            }
        }
    };
    FuseNavbarVerticalComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.fusePerfectScrollbarUpdateTimeout);
        this.matchMediaWatcher.unsubscribe();
        this.navigationServiceWatcher.unsubscribe();
    };
    FuseNavbarVerticalComponent.prototype.openBar = function () {
        if (!this.isClosed) {
            return;
        }
        this.isClosed = false;
        this.updateCssClasses();
        if (this.media.isActive('lt-lg')) {
            this._attachBackdrop();
        }
    };
    FuseNavbarVerticalComponent.prototype.closeBar = function () {
        if (this.isClosed) {
            return;
        }
        this.isClosed = true;
        this.updateCssClasses();
        this._detachBackdrop();
    };
    FuseNavbarVerticalComponent.prototype.toggleBar = function () {
        if (this.isClosed) {
            this.openBar();
        }
        else {
            this.closeBar();
        }
    };
    FuseNavbarVerticalComponent.prototype.toggleFold = function () {
        if (!this.isFoldedActive) {
            this.activateFolded();
        }
        else {
            this.deActivateFolded();
        }
    };
    FuseNavbarVerticalComponent.prototype.activateFolded = function () {
        this.isFoldedActive = true;
        this.fuseMainComponent.addClass('fuse-nav-bar-folded');
        this.isFoldedOpen = false;
    };
    FuseNavbarVerticalComponent.prototype.deActivateFolded = function () {
        this.isFoldedActive = false;
        this.fuseMainComponent.removeClass('fuse-nav-bar-folded');
        this.isFoldedOpen = false;
    };
    FuseNavbarVerticalComponent.prototype.onMouseEnter = function () {
        this.isFoldedOpen = true;
    };
    FuseNavbarVerticalComponent.prototype.onMouseLeave = function () {
        this.isFoldedOpen = false;
    };
    FuseNavbarVerticalComponent.prototype.updateCssClasses = function () {
        if (!this.isClosed) {
            this.fuseMainComponent.addClass('fuse-navbar-opened');
            this.fuseMainComponent.removeClass('fuse-navbar-closed');
        }
        else {
            this.fuseMainComponent.addClass('fuse-navbar-closed');
            this.fuseMainComponent.removeClass('fuse-navbar-opened');
        }
    };
    FuseNavbarVerticalComponent.prototype._attachBackdrop = function () {
        var _this = this;
        this._backdropElement = this._renderer.createElement('div');
        this._backdropElement.classList.add('fuse-navbar-backdrop');
        this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._backdropElement);
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["n" /* style */])({ opacity: 1 }))
            ]).create(this._backdropElement);
        this.player.play();
        this._backdropElement.addEventListener('click', function () {
            _this.closeBar();
        });
    };
    FuseNavbarVerticalComponent.prototype._detachBackdrop = function () {
        var _this = this;
        if (this._backdropElement) {
            this.player =
                this.animationBuilder
                    .build([
                    Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["e" /* animate */])('400ms cubic-bezier(.25,.8,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_8__angular_animations__["n" /* style */])({ opacity: 0 }))
                ]).create(this._backdropElement);
            this.player.play();
            this.player.onDone(function () {
                if (_this._backdropElement) {
                    _this._backdropElement.parentNode.removeChild(_this._backdropElement);
                    _this._backdropElement = null;
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.close'),
        __metadata("design:type", Boolean)
    ], FuseNavbarVerticalComponent.prototype, "isClosed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.folded'),
        __metadata("design:type", Boolean)
    ], FuseNavbarVerticalComponent.prototype, "isFoldedActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.folded-open'),
        __metadata("design:type", Boolean)
    ], FuseNavbarVerticalComponent.prototype, "isFoldedOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.initialized'),
        __metadata("design:type", Boolean)
    ], FuseNavbarVerticalComponent.prototype, "initialized", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__core_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */]),
        __metadata("design:type", Object)
    ], FuseNavbarVerticalComponent.prototype, "fusePerfectScrollbarDirective", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], FuseNavbarVerticalComponent.prototype, "folded", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavbarVerticalComponent.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavbarVerticalComponent.prototype, "onMouseLeave", null);
    FuseNavbarVerticalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-navbar-vertical',
            template: __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__main_component__["a" /* FuseMainComponent */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_match_media_service__["a" /* FuseMatchMedia */],
            __WEBPACK_IMPORTED_MODULE_6__core_components_navigation_navigation_service__["a" /* FuseNavigationService */],
            __WEBPACK_IMPORTED_MODULE_2__navbar_vertical_service__["a" /* FuseNavbarVerticalService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_8__angular_animations__["b" /* AnimationBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["b" /* ObservableMedia */]])
    ], FuseNavbarVerticalComponent);
    return FuseNavbarVerticalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/navbar/vertical/navbar-vertical.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavbarVerticalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseNavbarVerticalService = /** @class */ (function () {
    function FuseNavbarVerticalService() {
    }
    FuseNavbarVerticalService.prototype.setNavBar = function (ref) {
        this.navBarRef = ref;
    };
    FuseNavbarVerticalService.prototype.getNavBar = function () {
        return this.navBarRef;
    };
    FuseNavbarVerticalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FuseNavbarVerticalService);
    return FuseNavbarVerticalService;
}());



/***/ }),

/***/ "../../../../../src/app/main/quick-panel/quick-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"date\" cdkFocusRegionStart>\n\n    <h3 matSubheader cdkFocusInit>\n        <span>Today</span>\n    </h3>\n\n    <div class=\"secondary-text mat-display-1 mb-0 p-16\">\n        <div class=\"mb-12\">\n            {{date | date:'EEEE'}}\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n            <span> {{date | date:'d'}}</span>\n            <span class=\"mat-subheading-1\">th</span>\n            <span> {{date | date:'MMMM'}}</span>\n        </div>\n    </div>\n</mat-list>\n\n<mat-divider cdkFocusRegionEnd></mat-divider>\n\n<mat-list>\n    <h3 matSubheader>\n        <span>Events</span>\n    </h3>\n\n    <mat-list-item *ngFor=\"let event of events\">\n        <h3 matLine>{{event.title}}</h3>\n        <p matLine class=\"secondary-text\">{{event.detail}}</p>\n    </mat-list-item>\n</mat-list>\n\n<mat-divider></mat-divider>\n\n<mat-list>\n    <h3 matSubheader>\n        <span>Notes</span>\n    </h3>\n\n    <mat-list-item *ngFor=\"let note of notes\">\n        <h3 matLine>{{note.title}}</h3>\n        <p matLine class=\"secondary-text\">{{note.detail}}</p>\n    </mat-list-item>\n</mat-list>\n\n<mat-divider></mat-divider>\n\n<mat-list>\n    <h3 matSubheader>\n        <span>Quick Settings</span>\n    </h3>\n\n    <mat-list-item>\n        <mat-slide-toggle fxFlex class=\"mat-primary\" [(ngModel)]=\"settings.notify\" aria-label=\"Notifications\"\n                          labelPosition=\"before\">\n            <h3>Notifications</h3>\n        </mat-slide-toggle>\n    </mat-list-item>\n\n    <mat-list-item>\n        <mat-slide-toggle fxFlex class=\"mat-accent\" [(ngModel)]=\"settings.cloud\" aria-label=\"Cloud\"\n                          labelPosition=\"before\">\n            <h3>Cloud Sync</h3>\n        </mat-slide-toggle>\n    </mat-list-item>\n\n    <mat-list-item>\n        <mat-slide-toggle fxFlex class=\"mat-warn\" [(ngModel)]=\"settings.retro\" aria-label=\"Retro Thrusters\"\n                          labelPosition=\"before\">\n            <h3>Retro Thrusters</h3>\n        </mat-slide-toggle>\n    </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "../../../../../src/app/main/quick-panel/quick-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fuse-quick-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 280px;\n  min-width: 280px;\n  max-width: 280px;\n  z-index: 99;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  fuse-quick-panel .mat-slide-toggle-content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/quick-panel/quick-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseQuickPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseQuickPanelComponent = /** @class */ (function () {
    function FuseQuickPanelComponent() {
        this.notes = [];
        this.events = [];
        this.date = new Date();
        this.settings = {
            notify: true,
            cloud: false,
            retro: true
        };
    }
    FuseQuickPanelComponent.prototype.ngOnInit = function () {
    };
    FuseQuickPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-quick-panel',
            template: __webpack_require__("../../../../../src/app/main/quick-panel/quick-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/quick-panel/quick-panel.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FuseQuickPanelComponent);
    return FuseQuickPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"p-0 mat-elevation-z1\">\n\n    <mat-progress-bar *ngIf=\"showLoadingBar\" class=\"loading-bar\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n    <div fxFlex fxFill fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <div fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-button class=\"toggle-button-navbar mat-icon-button\"\n                    fuseNavbarVertical=\"toggleBar\" fxHide.gt-md>\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <div class=\"toolbar-separator\" fxHide.gt-md></div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"horizontalNav\">\n                <div class=\"logo ml-16\">\n                    <img class=\"logo-icon\" src=\"assets/images/logos/fuse.svg\">\n                </div>\n            </div>\n\n            <div class=\"px-8 px-mat-16\">\n                <fuse-shortcuts></fuse-shortcuts>\n            </div>\n\n        </div>\n\n        <div class=\"\" fxFlex=\"0 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-button [matMenuTriggerFor]=\"userMenu\"\n                    class=\"user-button\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <img class=\"avatar\" src=\"assets/images/avatars/profile.jpg\">\n                    <span class=\"username mr-12\" fxHide fxShow.gt-sm>John Doe</span>\n                    <mat-icon class=\"s-16\" fxHide.xs>keyboard_arrow_down</mat-icon>\n                </div>\n            </button>\n\n            <mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\">\n\n                <button mat-menu-item>\n                    <mat-icon>account_circle</mat-icon>\n                    <span>My Profile</span>\n                </button>\n\n                <button mat-menu-item class=\"\">\n                    <mat-icon>mail</mat-icon>\n                    <span>Inbox</span>\n                </button>\n\n                <button mat-menu-item class=\"\">\n                    <mat-icon>exit_to_app</mat-icon>\n                    <span>Logout</span>\n                </button>\n\n            </mat-menu>\n\n            <div class=\"toolbar-separator\"></div>\n\n            <fuse-search-bar (onInput)=\"search($event)\"></fuse-search-bar>\n\n            <div class=\"toolbar-separator\"></div>\n\n            <button mat-button fxHide fxShow.gt-xs\n                    class=\"language-button\"\n                    [matMenuTriggerFor]=\"languageMenu\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <img class=\"flag mr-8\" [src]=\"'assets/images/flags/'+selectedLanguage.flag+'.png'\">\n                    <span class=\"iso text-uppercase\">{{selectedLanguage.id}}</span>\n                </div>\n            </button>\n\n            <mat-menu #languageMenu=\"matMenu\" [overlapTrigger]=\"false\">\n\n                <button mat-menu-item *ngFor=\"let lang of languages\" (click)=\"setLanguage(lang)\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <img class=\"flag mr-16\" [src]=\"'assets/images/flags/'+lang.flag+'.png'\">\n                        <span class=\"iso\">{{lang.title}}</span>\n                    </div>\n                </button>\n\n            </mat-menu>\n\n            <div class=\"toolbar-separator\" fxHide fxShow.gt-xs></div>\n\n            <button mat-icon-button\n                    class=\"mat-icon-button quick-panel-toggle-button\"\n                    fuseMatSidenavToggler=\"quick-panel\"\n                    aria-label=\"Toggle quick panel\">\n                <mat-icon class=\"icon\">format_list_bulleted</mat-icon>\n            </button>\n\n        </div>\n    </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  z-index: 4; }\n:host.below {\n    z-index: 2; }\n:host .mat-toolbar {\n    background: inherit;\n    color: inherit;\n    position: relative; }\n:host .mat-toolbar .loading-bar {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      width: 100%; }\n:host .logo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n:host .logo .logo-icon {\n      width: 38px; }\n:host .user-button,\n  :host fuse-search-bar,\n  :host .language-button,\n  :host .quick-panel-toggle-button {\n    min-width: 64px;\n    height: 64px; }\n@media (max-width: 599px) {\n      :host .user-button,\n      :host fuse-search-bar,\n      :host .language-button,\n      :host .quick-panel-toggle-button {\n        height: 56px; } }\n:host .toggle-button-navbar {\n    min-width: 56px;\n    height: 56px; }\n:host .toolbar-separator {\n    height: 64px;\n    width: 1px;\n    background: rgba(0, 0, 0, 0.12); }\n@media (max-width: 599px) {\n      :host .toolbar-separator {\n        height: 56px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseToolbarComponent = /** @class */ (function () {
    function FuseToolbarComponent(router, fuseConfig, translate) {
        var _this = this;
        this.router = router;
        this.fuseConfig = fuseConfig;
        this.translate = translate;
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];
        this.languages = [
            {
                'id': 'en',
                'title': 'English',
                'flag': 'us'
            },
            {
                'id': 'tr',
                'title': 'Turkish',
                'flag': 'tr'
            }
        ];
        this.selectedLanguage = this.languages[0];
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                _this.showLoadingBar = true;
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.showLoadingBar = false;
            }
        });
        this.fuseConfig.onSettingsChanged.subscribe(function (settings) {
            _this.horizontalNav = settings.layout.navigation === 'top';
        });
    }
    FuseToolbarComponent.prototype.search = function (value) {
        // Do your search here...
        console.log(value);
    };
    FuseToolbarComponent.prototype.setLanguage = function (lang) {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;
        // Use the selected language for translations
        this.translate.use(lang.id);
    };
    FuseToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-toolbar',
            template: __webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_config_service__["a" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateService */]])
    ], FuseToolbarComponent);
    return FuseToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/i18n/en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locale; });
var locale = {
    lang: 'en',
    data: {
        'NAV': {
            'APPLICATIONS': 'Applications',
            'SAMPLE': {
                'TITLE': 'Sample',
                'BADGE': '25'
            }
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/navigation/i18n/tr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locale; });
var locale = {
    lang: 'tr',
    data: {
        'NAV': {
            'APPLICATIONS': 'Programlar',
            'SAMPLE': {
                'TITLE': 'Örnek',
                'BADGE': '15'
            }
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/navigation/navigation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavigationModel; });
var FuseNavigationModel = /** @class */ (function () {
    function FuseNavigationModel() {
        this.model = [
            {
                'id': 'applications',
                'title': 'Applications',
                'translate': 'NAV.APPLICATIONS',
                'type': 'group',
                'children': [
                    {
                        'id': 'profile',
                        'title': 'profile',
                        'translate': 'NAV.SAMPLE.TITLE',
                        'type': 'item',
                        'icon': 'users',
                        'url': '/profile',
                    }
                ]
            }
        ];
    }
    return FuseNavigationModel;
}());



/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"forgot-password\" fxLayout=\"column\" fusePerfectScrollbar style=\"height: 100%;\">\n\n  <div id=\"forgot-password-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *fuseIfOnDom>\n    <form name=\"loginForm\" [formGroup]=\"forgotPasswordForm\" novalidate>\n\n    <div id=\"forgot-password-form\">\n      <div class=\"main-caption\">\n        EILA\n      </div>\n      <div class=\"img-caption\">\n        Enter here your Email\n      </div>\n      <div class=\"email-pass-wrap\">\n        <div class=\"input-wrap\">\n          <div class=\"input-caption\">\n            EMAIL\n          </div>\n          <input class=\"input-login\" type=\"text\"  formControlName=\"email\">\n          <!-- <span class=\"star-wrap\">\n            *\n          </span> -->\n        </div>\n      </div>\n      <div class=\"buton-login\">\n        <button (click)=\"reset()\">\n          Reset\n        </button>\n      </div>\n      <div class=\"footer\">\n        <div class=\"top-text\">\n          By signing up, you are agreeing to our\n        </div>\n        <div class=\"mid-text\">\n          TERMS & CONDTIONS <span>&</span> PRIVACY POLICY\n        </div>\n\n      </div>\n    </div>\n    </form>\n    <div class=\"bot-text\">\n      Eila Technoligies, Inc\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #forgot-password {\n  width: 100%;\n  overflow: auto;\n  background-size: cover; }\n:host #forgot-password #forgot-password-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        padding: 16px; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n      width: 680px;\n      max-width: 680px;\n      padding: 30px 100px 30px 80px;\n      background: #FFFFFF; }\n@media screen and (max-width: 599px) {\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n          padding: 24px;\n          width: 100%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form {\n        width: 100%;\n        text-align: left; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n          width: 100%; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n              width: 90%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login .text {\n          margin-right: 8px; }\n.main-caption {\n  font-family: AmericanPurpose;\n  font-size: 40px;\n  letter-spacing: 25px;\n  color: #1f1e41;\n  margin-bottom: 30px; }\n.img-caption {\n  font-family: GothamPro;\n  font-size: 25px;\n  letter-spacing: 0.4px;\n  color: #424460;\n  margin-bottom: 15px; }\n.input-wrap {\n  padding: 12px;\n  border: 1px solid #f4f4f4;\n  padding-bottom: 8px;\n  padding-top: 9px;\n  border-radius: 2px;\n  margin-bottom: 15px;\n  position: relative; }\n.star-wrap {\n  position: absolute;\n  right: 13px;\n  top: 7px;\n  font-size: 16px;\n  color: #f98884;\n  font-weight: bold; }\n.input-caption {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  color: #626262; }\n.input-login {\n  font-size: 18px;\n  color: #acacac;\n  font-family: GothamPro; }\n.input-login::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #c6c6c6;\n  font-size: 18px;\n  font-family: GothamPro; }\n.input-login::-moz-placeholder {\n  /* Firefox 19+ */\n  font-size: 18px;\n  color: #c6c6c6;\n  font-family: GothamPro; }\n.input-login:-ms-input-placeholder {\n  /* IE 10+ */\n  font-size: 18px;\n  color: #c6c6c6;\n  font-family: GothamPro; }\n.input-login:-moz-placeholder {\n  /* Firefox 18- */\n  font-size: 18px;\n  color: #c6c6c6;\n  font-family: GothamPro; }\n.buton-login {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-top: 15px; }\n.buton-login > button {\n  background: #326388;\n  padding: 12px;\n  width: 240px;\n  color: #e6ebef;\n  border-radius: 2px;\n  font-weight: 500;\n  font-size: 22px;\n  cursor: pointer; }\n.footer {\n  text-align: center;\n  margin-top: 25px;\n  font-family: GothamPro; }\n.top-text {\n  font-size: 16px;\n  color: #68697e;\n  font-weight: 600; }\n.mid-text {\n  font-size: 16px;\n  color: #9fb6c8;\n  font-weight: 600; }\n.mid-text > span {\n  color: #68697e; }\n.bot-text {\n  font-size: 15px;\n  margin-top: 15px;\n  color: #737589;\n  font-weight: 500; }\n.input-name {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fuseConfig, formBuilder, authService, router) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.forgotPasswordFormErrors = {
            email: {}
        };
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]]
        });
        this.forgotPasswordForm.valueChanges.subscribe(function () {
            _this.onForgotPasswordFormValuesChanged();
        });
    };
    ForgotPasswordComponent.prototype.reset = function () {
        var _this = this;
        this.authService.forgotpassword(this.forgotPasswordForm.controls.email.value).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/login']);
        });
    };
    ForgotPasswordComponent.prototype.onForgotPasswordFormValuesChanged = function () {
        for (var field in this.forgotPasswordFormErrors) {
            if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.forgotPasswordFormErrors[field] = {};
            // Get the control
            var control = this.forgotPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.forgotPasswordFormErrors[field] = control.errors;
            }
        }
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_config_service__["a" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n\n  <div id=\"login-intro\" fxFlex fxHide fxShow.gt-xs>\n\n    <!-- <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\n      <img src=\"assets/images/logos/fuse.svg\">\n    </div>\n\n    <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\n      Welcome to the FUSE!\n    </div>\n\n    <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\n      vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\n    </div> -->\n\n  </div>\n\n  <div id=\"login-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom>\n    <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate>\n    <div class=\"login-wrap\">\n      <div class=\"main-caption\">\n        EILA\n      </div>\n      <div class=\"img-wrap\" style=\"position:relative\">\n        <div class=\"img-caption\">\n          Start celing over chat today!\n        </div>\n        <img src=\"assets/img/SpeechBubble.png\">\n        <div class=\"text-img\">\n          WHEN LIFE THROWS YOU A LEMON, BE HAPPY IT AIN`T THROWING YOU SOMETHING ELSE\n        </div>\n      </div>\n      <div class=\"input-wrap\">\n        <div class=\"input-caption\">\n          EMAIL\n        </div>\n        <input class=\"input-login\" type=\"text\" formControlName=\"email\">\n      </div>\n      <div class=\"input-wrap\">\n        <div class=\"input-caption\">\n          PASSWORD\n        </div>\n        <input class=\"input-login\" type=\"password\" formControlName=\"password\">\n      </div>\n      <div class=\"check-box-wrap\">\n        <mat-checkbox class=\"remember-me\">\n          Keep me Signed in\n        </mat-checkbox>\n        <button (click)=\"goForget()\">\n          Forgot Password?\n        </button>\n      </div>\n      <div class=\"buton-login\">\n        <button (click)=\"login()\">\n          Sing in\n        </button>\n      </div>\n      <div class=\"footer\">\n        <div class=\"top-text\">\n          By signing up, you are agreeing to our\n        </div>\n        <div class=\"mid-text\">\n          TERMS & CONDTIONS <span>&</span> PRIVACY POLICY\n        </div>\n        <div class=\"bot-text\">\n          Eila Technoligies, Inc\n        </div>\n      </div>\n    </div>\n    </form>\n    <!-- <div id=\"login-form\">\n\n      <div class=\"logo\" fxHide.gt-xs>\n        <span>F</span>\n      </div>\n\n      <div class=\"title\">LOGIN TO YOUR ACCOUNT</div>\n\n      <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" formControlName=\"email\">\n          <mat-error *ngIf=\"loginFormErrors.email.required\">\n            Email is required\n          </mat-error>\n          <mat-error *ngIf=\"!loginFormErrors.email.required && loginFormErrors.email.email\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n          <mat-error *ngIf=\"loginFormErrors.password.required\">\n            Password is required\n          </mat-error>\n        </mat-form-field>\n\n        <div class=\"remember-forgot-password\" fxLayout=\"row\" fxLayout.xs=\"column\"\n             fxLayoutAlign=\"space-between center\">\n          <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">\n            Remember Me\n          </mat-checkbox>\n\n          <a class=\"forgot-password\" [routerLink]=\"'/pages/auth/forgot-password-2'\">\n            Forgot Password?\n          </a>\n        </div>\n\n        <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"LOGIN\"\n                [disabled]=\"loginForm.invalid\">\n          LOGIN\n        </button>\n\n      </form>\n\n      <div class=\"separator\">\n        <span class=\"text\">OR</span>\n      </div>\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\">\n\n        <button mat-raised-button class=\"google\">\n          Log in with Google\n        </button>\n\n        <button mat-raised-button class=\"facebook\">\n          Log in with Facebook\n        </button>\n\n      </div>\n\n      <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <span class=\"text\">Don't have an account?</span>\n        <a class=\"link\" [routerLink]=\"'/pages/auth/register-2'\">Create an account</a>\n      </div>\n    </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #login {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/img/CoupleBg.png\") no-repeat;\n  background-size: cover;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-flow: row-reverse;\n          flex-flow: row-reverse; }\n:host #login #login-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #login #login-intro {\n        padding: 128px 64px; } }\n:host #login #login-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #login #login-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #login #login-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #login #login-form-wrapper {\n    overflow: auto;\n    width: 500px;\n    min-width: 500px;\n    max-width: 500px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #login #login-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #login #login-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #login #login-form-wrapper #login-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form {\n          text-align: center;\n          padding: 24px; } }\n:host #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n:host #login #login-form-wrapper #login-form .title {\n        font-size: 21px; }\n:host #login #login-form-wrapper #login-form .description {\n        padding-top: 8px; }\n:host #login #login-form-wrapper #login-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #login #login-form-wrapper #login-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form mat-form-field {\n              width: 80%; } }\n:host #login #login-form-wrapper #login-form form mat-checkbox {\n          margin: 0; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form .submit-button {\n              width: 80%; } }\n:host #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center;\n        color: rgba(0, 0, 0, 0.54); }\n:host #login #login-form-wrapper #login-form .separator .text {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #login #login-form-wrapper #login-form .separator .text:before, :host #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\n:host #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\n:host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n          :host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n            width: 60%; } }\n:host #login #login-form-wrapper #login-form button.google mat-icon, :host #login #login-form-wrapper #login-form button.facebook mat-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\n:host #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\n:host #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\n.login-wrap {\n  padding: 20px 50px 20px 50px; }\n.main-caption {\n  font-family: AmericanPurpose;\n  font-size: 40px;\n  letter-spacing: 25px;\n  color: #1f1e41;\n  margin-bottom: 30px; }\n.img-wrap {\n  margin-bottom: 30px; }\n.img-caption {\n  font-family: GothamPro;\n  font-size: 28px;\n  letter-spacing: 0px;\n  color: #424460;\n  margin-bottom: 15px; }\n.input-wrap {\n  padding: 12px;\n  border: 1px solid #f4f4f4;\n  padding-bottom: 8px;\n  padding-top: 9px;\n  border-radius: 2px;\n  margin-bottom: 15px; }\n.input-caption {\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  color: #626262; }\n.input-login {\n  font-size: 16px;\n  color: #acacac;\n  font-family: GothamPro; }\n.input-login::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #c6c6c6;\n  font-size: 16px;\n  font-family: GothamPro; }\n.input-login::-moz-placeholder {\n  /* Firefox 19+ */\n  font-size: 16px;\n  color: #c6c6c6;\n  font-family: GothamPro; }\n.input-login:-ms-input-placeholder {\n  /* IE 10+ */\n  font-size: 16px;\n  color: #c6c6c6;\n  font-family: GothamPro; }\n.input-login:-moz-placeholder {\n  /* Firefox 18- */\n  font-size: 16px;\n  color: #c6c6c6;\n  font-family: GothamPro; }\n.check-box-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.check-box-wrap > button {\n  color: #a1b3c2;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: GothamPro;\n  cursor: pointer;\n  letter-spacing: -0.1px; }\n.buton-login {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-top: 15px; }\n.buton-login > button {\n  background: #326388;\n  padding: 12px;\n  width: 125px;\n  color: #e6ebef;\n  border-radius: 2px;\n  font-weight: 500;\n  font-size: 15px;\n  cursor: pointer; }\n.footer {\n  text-align: center;\n  margin-top: 25px;\n  font-family: GothamPro; }\n.top-text {\n  font-size: 16px;\n  color: #68697e;\n  font-weight: 600; }\n.mid-text {\n  font-size: 16px;\n  color: #9fb6c8;\n  font-weight: 600; }\n.mid-text > span {\n  color: #68697e; }\n.bot-text {\n  font-size: 15px;\n  margin-top: 15px;\n  color: #737589;\n  font-weight: 600; }\n.text-img {\n  position: absolute;\n  font-family: Signboard;\n  width: 198px;\n  top: 100px;\n  right: 44px;\n  font-size: 16px;\n  color: #1f2142;\n  font-weight: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginComponent(fuseConfig, formBuilder, authService, router) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.loginFormErrors = {
            email: {},
            password: {}
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        // this.loginForm.valueChanges.subscribe(() => {
        //   this.onLoginFormValuesChanged();
        // });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(function (data) {
            console.log(data);
            _this.authService.setUser(data);
            _this.router.navigate(['/sample']);
        });
    };
    LoginComponent.prototype.goForget = function () {
        this.router.navigate(['/forget-password']);
    };
    LoginComponent.prototype.onLoginFormValuesChanged = function () {
        for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            var control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_config_service__["a" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"forgot-password\" fxLayout=\"column\" fusePerfectScrollbar style=\"height: 100%;\">\n\n  <div id=\"forgot-password-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *fuseIfOnDom>\n    <form name=\"regiserForm\" [formGroup]=\"regiserForm\" novalidate>\n\n    <div id=\"forgot-password-form\">\n      <div class=\"main-caption\">\n        EILA\n      </div>\n      <div class=\"img-caption\">\n        Conversational commmerce starts here\n      </div>\n      <div class=\"input-name\">\n        <div class=\"input-wrap\" style=\"width: 50%;\">\n          <div class=\"input-caption\">\n            FIRST NAME\n          </div>\n          <input class=\"input-login\" type=\"text\">\n        </div>\n        <div class=\"input-wrap\" style=\"width: 50%; margin-left: 10px;\">\n          <div class=\"input-caption\">\n            LAST NAME\n          </div>\n          <input class=\"input-login\" type=\"text\">\n        </div>\n      </div>\n      <div class=\"email-pass-wrap\">\n        <div class=\"input-wrap\">\n          <div class=\"input-caption\">\n            EMAIL\n          </div>\n          <input class=\"input-login\" type=\"text\"  formControlName=\"email\">\n          <span class=\"star-wrap\">\n            *\n          </span>\n        </div>\n        <div class=\"input-wrap\">\n          <div class=\"input-caption\">\n            PASSWORD\n          </div>\n          <input class=\"input-login\" type=\"password\"  formControlName=\"password\">\n          <span class=\"star-wrap\">\n            *\n          </span>\n        </div>\n      </div>\n      <div class=\"buton-login\">\n        <button (click)=\"signup()\">\n          Let's get rollin'\n        </button>\n      </div>\n      <div class=\"footer\">\n        <div class=\"top-text\">\n          By signing up, you are agreeing to our\n        </div>\n        <div class=\"mid-text\">\n          TERMS & CONDTIONS <span>&</span> PRIVACY POLICY\n        </div>\n\n      </div>\n    </div>\n    </form>\n    <div class=\"bot-text\">\n      Eila Technoligies, Inc\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #forgot-password {\n  width: 100%;\n  overflow: auto;\n  background-size: cover; }\n:host #forgot-password #forgot-password-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        padding: 16px; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n      width: 680px;\n      max-width: 680px;\n      padding: 30px 100px 30px 80px;\n      background: #FFFFFF; }\n@media screen and (max-width: 599px) {\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n          padding: 24px;\n          width: 100%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form {\n        width: 100%;\n        text-align: left; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n          width: 100%; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n              width: 90%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login .text {\n          margin-right: 8px; }\n.main-caption {\n  font-family: AmericanPurpose;\n  font-size: 40px;\n  letter-spacing: 25px;\n  color: #1f1e41;\n  margin-bottom: 30px; }\n.img-caption {\n  font-family: GothamPro;\n  font-size: 25px;\n  letter-spacing: 0.4px;\n  color: #424460;\n  margin-bottom: 15px; }\n.input-wrap {\n  padding: 12px;\n  border: 1px solid #f4f4f4;\n  padding-bottom: 8px;\n  padding-top: 9px;\n  border-radius: 2px;\n  margin-bottom: 15px;\n  position: relative; }\n.star-wrap {\n  position: absolute;\n  right: 13px;\n  top: 7px;\n  font-size: 16px;\n  color: #f98884;\n  font-weight: bold; }\n.input-caption {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  color: #626262; }\n.input-login {\n  font-size: 18px;\n  color: #acacac;\n  font-family: GothamPro; }\n.input-login::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #c6c6c6;\n  font-size: 18px;\n  font-family: GothamPro; }\n.input-login::-moz-placeholder {\n  /* Firefox 19+ */\n  font-size: 18px;\n  color: #c6c6c6;\n  font-family: GothamPro; }\n.input-login:-ms-input-placeholder {\n  /* IE 10+ */\n  font-size: 18px;\n  color: #c6c6c6;\n  font-family: GothamPro; }\n.input-login:-moz-placeholder {\n  /* Firefox 18- */\n  font-size: 18px;\n  color: #c6c6c6;\n  font-family: GothamPro; }\n.buton-login {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-top: 15px; }\n.buton-login > button {\n  background: #326388;\n  padding: 12px;\n  width: 240px;\n  color: #e6ebef;\n  border-radius: 2px;\n  font-weight: 500;\n  font-size: 22px;\n  cursor: pointer; }\n.footer {\n  text-align: center;\n  margin-top: 25px;\n  font-family: GothamPro; }\n.top-text {\n  font-size: 16px;\n  color: #68697e;\n  font-weight: 600; }\n.mid-text {\n  font-size: 16px;\n  color: #9fb6c8;\n  font-weight: 600; }\n.mid-text > span {\n  color: #68697e; }\n.bot-text {\n  font-size: 15px;\n  margin-top: 15px;\n  color: #737589;\n  font-weight: 500; }\n.input-name {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_config_service__ = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fuseConfig, formBuilder, authService, router) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.forgotPasswordFormErrors = {
            email: {}
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.regiserForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        // this.regiserForm.valueChanges.subscribe(() => {
        //   this.onForgotPasswordFormValuesChanged();
        // });
    };
    RegisterComponent.prototype.signup = function () {
        var _this = this;
        this.authService.signup(this.regiserForm.controls.email.value, this.regiserForm.controls.password.value).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/login']);
        });
    };
    RegisterComponent.prototype.onForgotPasswordFormValuesChanged = function () {
        for (var field in this.forgotPasswordFormErrors) {
            if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.forgotPasswordFormErrors[field] = {};
            // Get the control
            //   const control = this.forgotPasswordForm.get(field);
            //
            //   if ( control && control.dirty && !control.valid )
            //   {
            //     this.forgotPasswordFormErrors[field] = control.errors;
            //   }
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/pages/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_config_service__["a" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return url; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    hmr: false
};
var url = 'https://eila-api.herokuapp.com/v1/';


/***/ }),

/***/ "../../../../../src/hmr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hmrBootstrap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__("../../../../@angularclass/hmr/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__("../../../../../src/hmr.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
var bootstrap = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]); };
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
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
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

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
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
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
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
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
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
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
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
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