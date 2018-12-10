webpackJsonp([8],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakfastPageModule", function() { return BreakfastPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breakfast__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BreakfastPageModule = /** @class */ (function () {
    function BreakfastPageModule() {
    }
    BreakfastPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__breakfast__["a" /* BreakfastPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__breakfast__["a" /* BreakfastPage */]),
            ],
        })
    ], BreakfastPageModule);
    return BreakfastPageModule;
}());

//# sourceMappingURL=breakfast.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakfastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreakfastPage = /** @class */ (function () {
    function BreakfastPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.week = "0";
    }
    BreakfastPage.prototype.selectedTab = function (sld) {
        this.slider.slideTo(sld);
    };
    BreakfastPage.prototype.moveTab = function (event) {
        this.week = event._snapIndex.toString();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]) === "function" && _a || Object)
    ], BreakfastPage.prototype, "slider", void 0);
    BreakfastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-breakfast',template:/*ion-inline-start:"/home/pedro/Downloads/cardapioiff/src/pages/breakfast/breakfast.html"*/'<ion-header>\n    <ion-card>\n      <ion-navbar color="secondary">\n      <ion-card-header>\n        <ion-title text-center><strong>Lanche da Manhã</strong></ion-title>\n      </ion-card-header></ion-navbar>\n      <ion-card-content>\n        Início:   8:30 <br>\n        Término: 9:00\n      </ion-card-content>\n      </ion-card>\n\n      <ion-segment color="dark" [(ngModel)]="week">\n\n        <ion-segment-button value="0" (click)="selectedTab(0)">\n          SEG\n        </ion-segment-button>\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n          TER\n        </ion-segment-button>\n        <ion-segment-button value="2" (click)="selectedTab(2)">\n          QUA\n        </ion-segment-button>\n        <ion-segment-button value="3" (click)="selectedTab(3)">\n          QUI\n        </ion-segment-button>\n        <ion-segment-button value="4" (click)="selectedTab(4)">\n          SEX\n        </ion-segment-button>\n\n      </ion-segment>\n</ion-header>\n\n<ion-content>\n  <ion-slides #slider (ionSlideWillChange)="moveTab($event)">\n    <ion-slide>\n      <h1>SEGUNDA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>TERÇA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>QUARTA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>QUINTA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>SEXTA</h1>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/cardapioiff/src/pages/breakfast/breakfast.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
    ], BreakfastPage);
    return BreakfastPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=breakfast.js.map

/***/ })

});
//# sourceMappingURL=8.js.map