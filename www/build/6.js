webpackJsonp([6],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinnerPageModule", function() { return DinnerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dinner__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DinnerPageModule = /** @class */ (function () {
    function DinnerPageModule() {
    }
    DinnerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dinner__["a" /* DinnerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dinner__["a" /* DinnerPage */]),
            ],
        })
    ], DinnerPageModule);
    return DinnerPageModule;
}());

//# sourceMappingURL=dinner.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DinnerPage; });
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


/**
 * Generated class for the DinnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DinnerPage = /** @class */ (function () {
    function DinnerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DinnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DinnerPage');
    };
    DinnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dinner',template:/*ion-inline-start:"/home/pedro/Downloads/cardapioiff/src/pages/dinner/dinner.html"*/'<ion-header>\n    <ion-card>\n      <ion-navbar color="secondary">\n      <ion-card-header>\n        <strong>Janta</strong>\n      </ion-card-header></ion-navbar>\n      <ion-card-content>\n        Início:   7:20 <br>\n        Término: 8:50\n      </ion-card-content>\n      </ion-card>\n</ion-header>\n\n<ion-content>\n\n  <div padding>\n  <ion-segment >\n    <ion-segment-button value="Seg">\n      Seg\n    </ion-segment-button>\n    <ion-segment-button value="Ter">\n      Ter\n    </ion-segment-button>\n    <ion-segment-button value="Qua">\n      Qua\n    </ion-segment-button>\n    <ion-segment-button value="Qui">\n      Qui\n    </ion-segment-button>\n    <ion-segment-button value="Sex">\n      Sex\n    </ion-segment-button>\n  </ion-segment>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/cardapioiff/src/pages/dinner/dinner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DinnerPage);
    return DinnerPage;
}());

//# sourceMappingURL=dinner.js.map

/***/ })

});
//# sourceMappingURL=6.js.map