webpackJsonp([5],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LunchPageModule", function() { return LunchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lunch__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LunchPageModule = /** @class */ (function () {
    function LunchPageModule() {
    }
    LunchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lunch__["a" /* LunchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lunch__["a" /* LunchPage */]),
            ],
        })
    ], LunchPageModule);
    return LunchPageModule;
}());

//# sourceMappingURL=lunch.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LunchPage; });
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


var LunchPage = /** @class */ (function () {
    function LunchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.week = "0";
    }
    LunchPage.prototype.selectedTab = function (sld) {
        this.slider.slideTo(sld);
    };
    LunchPage.prototype.moveTab = function ($event) {
        this.week = $event._snapIndex.toString();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], LunchPage.prototype, "slider", void 0);
    LunchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lunch',template:/*ion-inline-start:"/home/pedro/Downloads/cardapioiff/src/pages/lunch/lunch.html"*/'<ion-header>\n    <ion-card>\n      <ion-navbar color="secondary">\n        <ion-title text-center>ALMOÇO</ion-title>\n      </ion-navbar>\n      <ion-card-content>\n        <strong>Início:   </strong>11:30 <br>\n        <strong> Término: </strong>13:30\n      </ion-card-content>\n      </ion-card>\n\n      <ion-segment color="dark" [(ngModel)]="week">\n\n        <ion-segment-button value="0" (click)="selectedTab(0)">\n          SEG\n        </ion-segment-button>\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n          TER\n        </ion-segment-button>\n        <ion-segment-button value="2" (click)="selectedTab(2)">\n          QUA\n        </ion-segment-button>\n        <ion-segment-button value="3" (click)="selectedTab(3)">\n          QUI\n        </ion-segment-button>\n        <ion-segment-button value="4" (click)="selectedTab(4)">\n          SEX\n        </ion-segment-button>\n\n      </ion-segment>\n</ion-header>\n\n<ion-content>\n  <ion-slides #slider (ionSlideWillChange)="moveTab($event)">\n    <ion-slide>\n      <h1>SEGUNDA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>TERÇA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>QUARTA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>QUINTA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>SEXTA</h1>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/cardapioiff/src/pages/lunch/lunch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LunchPage);
    return LunchPage;
}());

//# sourceMappingURL=lunch.js.map

/***/ })

});
//# sourceMappingURL=5.js.map