webpackJsonp([3,30],{

/***/ 705:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_js_component__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_js_routes__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartJsModule = (function () {
    function ChartJsModule() {
    }
    ChartJsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__chart_js_routes__["a" /* default */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__chart_js_component__["a" /* ChartJsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartJsModule);
    return ChartJsModule;
}());
/* harmony default export */ exports["default"] = ChartJsModule;


/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChartJsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartJsComponent = (function () {
    function ChartJsComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut chart
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    // common events for all type of chart
    ChartJsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartJsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartJsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart-js',
            template: __webpack_require__(937),
            styles: [__webpack_require__(911)]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartJsComponent);
    return ChartJsComponent;
}());


/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_js_component__ = __webpack_require__(760);


var chartJsRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__chart_js_component__["a" /* ChartJsComponent */] }
];
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(chartJsRoutes);


/***/ },

/***/ 886:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new core_1.EventEmitter();
        this.chartHover = new core_1.EventEmitter();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                this.chart.data.datasets = this.getDatasets();
                if (changes.hasOwnProperty('labels')) {
                    this.chart.data.labels = this.labels;
                }
                this.chart.update();
            }
            else {
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        if (typeof Chart === 'undefined') {
            throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
        }
        return new Chart(ctx, opts);
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error, \n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    BaseChartDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'canvas[baseChart]' },] },
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    BaseChartDirective.propDecorators = {
        'data': [{ type: core_1.Input },],
        'datasets': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'chartType': [{ type: core_1.Input },],
        'colors': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'chartClick': [{ type: core_1.Output },],
        'chartHover': [{ type: core_1.Output },],
    };
    return BaseChartDirective;
}());
exports.BaseChartDirective = BaseChartDirective;
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        BaseChartDirective
                    ],
                    exports: [
                        BaseChartDirective
                    ],
                    imports: []
                },] },
    ];
    /** @nocollapse */
    ChartsModule.ctorParameters = [];
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ },

/***/ 887:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(886));


/***/ },

/***/ 911:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 937:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header card-primary card-inverse\">\n\t\t\t\t<h3 class=\"card-title\">Line Chart</h3>\n\t\t\t</div>\n\t\t\t<div class=\"card-block\">\n\t\t\t\t<canvas baseChart\n\t\t\t\t\t[datasets]=\"lineChartData\"\n\t\t\t\t\t[labels]=\"lineChartLabels\"\n\t\t\t\t\t[options]=\"lineChartOptions\"\n\t\t\t\t\t[legend]=\"lineChartLegend\"\n\t\t\t\t\t[chartType]=\"lineChartType\"\n\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t(chartClick)=\"chartClicked($event)\"\n\t\t\t\t\theight=\"140\" >\n\t\t\t\t</canvas>\n\t\t\t</div>\n\t\t</div>\n    </div>\n    <div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header card-primary card-inverse\">\n\t\t\t\t<h3 class=\"card-title\">Bar Chart</h3>\n\t\t\t</div>\n\t\t\t<div class=\"card-block\">\n\t\t\t\t<canvas baseChart\n\t\t            [datasets]=\"barChartData\"\n\t\t            [labels]=\"barChartLabels\"\n\t\t            [options]=\"barChartOptions\"\n\t\t            [legend]=\"barChartLegend\"\n\t\t            [chartType]=\"barChartType\"\n\t\t            (chartHover)=\"chartHovered($event)\"\n\t\t            (chartClick)=\"chartClicked($event)\"\n\t\t            height=\"140\" >\n\t\t        </canvas>\n\t\t\t</div>\n\t\t</div>\n    </div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header card-primary card-inverse\">\n\t\t\t\t<h3 class=\"card-title\">Doughnut Chart</h3>\n\t\t\t</div>\n\t\t\t<div class=\"card-block\">\n\t\t\t\t<canvas baseChart\n\t\t\t\t\t[data]=\"doughnutChartData\"\n\t\t\t\t\t[labels]=\"doughnutChartLabels\"\n\t\t\t\t\t[chartType]=\"doughnutChartType\"\n\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t(chartClick)=\"chartClicked($event)\" \n\t\t\t\t\theight=\"140\" >\n\t\t\t\t</canvas>\n\t\t\t</div>\n\t\t</div>\n    </div>\n    <div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header card-primary card-inverse\">\n\t\t\t\t<h3 class=\"card-title\">Radar Chart</h3>\n\t\t\t</div>\n\t\t\t<div class=\"card-block\">\n\t\t\t\t<canvas baseChart\n\t\t\t\t\t[datasets]=\"radarChartData\"\n\t\t\t\t\t[labels]=\"radarChartLabels\"\n\t\t\t\t\t[chartType]=\"radarChartType\"\n\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t(chartClick)=\"chartClicked($event)\"\n\t\t\t\t\theight=\"140\" >\n\t\t\t\t</canvas>\n\t\t\t</div>\n\t\t</div>\n    </div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header card-primary card-inverse\">\n\t\t\t\t<h3 class=\"card-title\">Pie Chart</h3>\n\t\t\t</div>\n\t\t\t<div class=\"card-block\">\n\t\t\t\t<canvas baseChart\n\t\t\t\t\t[data]=\"pieChartData\"\n\t\t\t\t\t[labels]=\"pieChartLabels\"\n\t\t\t\t\t[chartType]=\"pieChartType\"\n\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t(chartClick)=\"chartClicked($event)\"\n\t\t\t\t\theight=\"140\" >\n\t\t\t\t</canvas>\n\t\t\t</div>\n\t\t</div>\n    </div>\n    <div class=\"col-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header card-primary card-inverse\">\n\t\t\t\t<h3 class=\"card-title\">Polar Area Chart</h3>\n\t\t\t</div>\n\t\t\t<div class=\"card-block\">\n\t\t\t\t<canvas baseChart\n\t\t\t\t\t[data]=\"polarAreaChartData\"\n\t\t\t\t\t[labels]=\"polarAreaChartLabels\"\n\t\t\t\t\t[legend]=\"polarAreaLegend\"\n\t\t\t\t\t[chartType]=\"polarAreaChartType\"\n\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t\t(chartClick)=\"chartClicked($event)\"\n\t\t\t\t\theight=\"140\" >\n\t\t\t\t</canvas>\n\t\t\t</div>\n\t\t</div>\n    </div>\n</div>"

/***/ }

});
//# sourceMappingURL=3.bundle.map