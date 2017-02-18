webpackJsonp([17,30],{

/***/ 713:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inbox_component__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inbox_routes__ = __webpack_require__(835);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InboxModule = (function () {
    function InboxModule() {
    }
    InboxModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__inbox_routes__["a" /* default */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__inbox_component__["a" /* InboxComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], InboxModule);
    return InboxModule;
}());
/* harmony default export */ exports["default"] = InboxModule;


/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InboxComponent = (function () {
    function InboxComponent() {
    }
    InboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(945),
            styles: [__webpack_require__(919)]
        }), 
        __metadata('design:paramtypes', [])
    ], InboxComponent);
    return InboxComponent;
}());


/***/ },

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inbox_component__ = __webpack_require__(768);


var inboxRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__inbox_component__["a" /* InboxComponent */] }
];
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(inboxRoutes);


/***/ },

/***/ 919:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 945:
/***/ function(module, exports) {

module.exports = "<div class=\"animate\">\t\t\t\t\n\t<div class=\"inbox-container-wrap\">\n\t\t<div class=\"inbox-container\">\n\t\t\t<div class=\"col email-options ps-container\">\n\t\t\t\t<div class=\"padding-15\">\n\t\t\t\t\t<div class=\"butt-container\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn btn-primary btn-block btn-rounded\">Compose</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"main-options\">\n\t\t\t\t\t\t<li class=\"activeli\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<span class=\"title\"> &nbsp; Inbox</span>\n\t\t\t\t\t\t\t\t<span class=\"label label-pill label-primary middle pull-right\">10</span>\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<span class=\"title\"> &nbsp; Junk Mail</span>\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<span class=\"title\"> &nbsp; Drafts</span>\n\t\t\t\t\t\t\t\t<span class=\"label label-pill label-danger middle pull-right\">16</span>\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t<span class=\"title\"> &nbsp; Sent</span>\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<span class=\"title\"> &nbsp; Trash</span>\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<hr class=\"poor\">\n\t\t\t\t\t\t<h5>LABELS</h5>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<span class=\"title\"> &nbsp; Clients <i class=\"fa fa-stop pull-right faorange\"></i></span>\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<span class=\"title\"> &nbsp; Social <i class=\"fa fa-stop pull-right fayellow\"></i></span>\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<span class=\"title\"> &nbsp; Family <i class=\"fa fa-stop pull-right facyan\"></i></span>\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<span class=\"title\"> &nbsp; Friends <i class=\"fa fa-stop pull-right fapurple\"></i></span>\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"message-list-wrapper\">\n\t\t\t<div class=\"searchbox\">\n\t\t\t\t<span class=\"sebox\">Inbox</span> (14 unread) <i class=\"fa fa-envelope-o\"></i>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Search Inbox...\">\n\t\t\t</div>\t\n\t\t\t<div class=\"wrap-list\">\n\t\t\t\t<div class=\"messages-list\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option45\">\n\t\t\t\t\t\t\t\t\t\t<input id=\"Option45\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"messages-item-subject\"> Nicole Bell</span>\n\t\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\"><i class=\"fa fa-paperclip\"></i>&nbsp;7th Jan</span>\n\t\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option55\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option55\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\"> John Doe </span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\"><i class=\"fa fa-paperclip\"></i>&nbsp;4th Jan</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear Mr. Clarks I am interested in Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item active-message\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option65\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option65\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\"> Jane Doe </span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\">&nbsp;1st Jan</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear Mr. Clarks In response Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star fa-starred\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option42\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option42\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\">  Peter Drury </span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\">&nbsp;29th Dec</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear Mr. Clarks, As we discussed Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option32\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option32\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\"> John Smith </span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\"><i class=\"fa fa-paperclip\"></i>&nbsp;26th Dec</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear Peter, Good Day! Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option92\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option92\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\">Congratulations </span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\">&nbsp;7th jan</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear friend Peter Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option30\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option30\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\"> Sincere request to keep in touch.</span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\"><i class=\"fa fa-paperclip\"></i>&nbsp;7th jan</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear Mr. Clarks,I was shocked Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option45\">\n\t\t\t\t\t\t\t\t\t\t<input id=\"Option45\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"messages-item-subject\"> Nicole Bell</span>\n\t\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\"><i class=\"fa fa-paperclip\"></i>&nbsp;7th Jan</span>\n\t\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option55\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option55\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\"> John Doe </span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\"><i class=\"fa fa-paperclip\"></i>&nbsp;4th Jan</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear Mr. Clarks I am interested in Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option65\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option65\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\"> Jane Doe </span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\">&nbsp;1st Jan</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear Mr. Clarks In response Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star fa-starred\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option42\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option42\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\">  Peter Drury </span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\">&nbsp;29th Dec</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear Mr. Clarks, As we discussed Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option32\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option32\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\"> John Smith </span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\"><i class=\"fa fa-paperclip\"></i>&nbsp;26th Dec</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear Peter, Good Day! Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option92\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option92\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\">Congratulations </span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\">&nbsp;7th jan</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear friend Peter Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"messages-item\">\n\t\t\t\t\t\t\t<div class=\"leftist\"><i class=\"fa fa-star\"></i>\t\n\t\t\t\t\t\t\t\t<label class=\"checkbox1\" for=\"Option30\">\n\t\t\t\t\t\t\t\t\t<input id=\"Option30\" type=\"checkbox\" class=\"\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<span class=\"messages-item-subject\"> Sincere request to keep in touch.</span>\n\t\t\t\t\t\t\t<span class=\"date-class text-muted pull-right\"><i class=\"fa fa-paperclip\"></i>&nbsp;7th jan</span>\n\t\t\t\t\t\t\t<span class=\"messages-item-content\"><p>Dear Mr. Clarks,I was shocked Lorem ipsum dolor sit amet,</p></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\t\n\t\t\t</div>\t\n\t\t</div>\n\t\t<div class=\"text-wrapper bg-white\">\n\t\t\t<div class=\"wrap-message\">\t\n\t\t\t\t<div class=\"n0-scroll\">\n\t\t\t\t\t<div class=\"message-topic\">\n\t\t\t\t\t\t<i class=\"fa fa-star m-r-xs text-primary\"></i> Development Files <span class=\"pull-right text-muted\"><a href=\"\"><i class=\"fa fa-reply\"></i></a><a href=\"\"><i class=\"fa fa-trash-o\"></i></a></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"message-sender\">\n\t\t\t\t\t\t<img class=\"img-circle sender-img m-r-xs\" src=\"assets/images/flat-avatar.png\" alt=\"\"> \n\t\t\t\t\t\t<a href=\"javascript:void(0)\">Kumar Sanket</a> to <a href=\"javascript:void(0)\">me</a> &nbsp;<i class=\"fa fa-caret-square-o-down\"></i>\n\t\t\t\t\t\t<small class=\"pull-right m-t-sm\">\n\t\t\t\t\t\t\t<i class=\"fa fa-paperclip\"></i> &nbsp;<a href=\"javascript:;\">(2)</a> &nbsp;&nbsp; Today 7:30 AM\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"message-content\">\n\t\t\t\t\t<p>Hi Peter,</p>\n\t\t\t\t\t<p>Thanks for the e-mail. It is always nice to hear from people, especially from you, Scott.</p>\n\t\t\t\t\t<p>I have not got any reply, a positive or negative one, from Seibido yet.<br>Let's wait and hope that it will make a BOOK.</p>\n\t\t\t\t\t<p>Have you finished your paperwork for Kaken and writing academic articles?<br>If you have some free time in the near future, I want to meet you and explain to you our next project.</p> \n\t\t\t\t\t<p>Why not drink out in Hiroshima if we are accepted?<br>We need to celebrate ourselves, don't we?<br>Let's have a small end-of-the-year party!</p> <p>Sincerely, K. Nakagawa</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"messagefooter\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-rounded pull-right\"><i class=\"fa fa-reply\"></i> Reply</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }

});
//# sourceMappingURL=17.bundle.map