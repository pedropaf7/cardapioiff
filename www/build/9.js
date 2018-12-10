webpackJsonp([9],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPageModule", function() { return AppPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppPageModule = /** @class */ (function () {
    function AppPageModule() {
    }
    AppPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app__["a" /* AppPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__app__["a" /* AppPage */]),
            ],
        })
    ], AppPageModule);
    return AppPageModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPage; });
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
 * Generated class for the AppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppPage = /** @class */ (function () {
    function AppPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AppPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppPage');
    };
    AppPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-app',template:/*ion-inline-start:"/home/pedro/Downloads/cardapioiff/src/pages/app/app.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>App</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="assets/imgs/logo.png"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        Pedro Ferreira\'s Company\n      </ion-card-title>\n      <p>\n        Aplicativo desenvolvido na disciplina de Programação Orientada a Objetos Aplicada\n      </p>\n    </ion-card-content>\n\n    <ion-item>\n      <ion-icon name=\'settings\' item-start style="color: green"></ion-icon>\n      IF Fluminense\n      <ion-badge item-end>campus Campos-Centro</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'settings\' item-start style="color: green"></ion-icon>\n      Curso\n      <ion-badge item-end>Sistemas de Informação</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'settings\' item-start style="color: green"></ion-icon>\n      Período\n      <ion-badge item-end>5º</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'settings\' item-start style="color: green"></ion-icon>\n      Ano\n      <ion-badge item-end>2018</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'settings\' item-start style="color: green"></ion-icon>\n      E-mail\n      <ion-badge item-end>pedropaf7@gmail.com</ion-badge>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/cardapioiff/src/pages/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AppPage);
    return AppPage;
}());

//# sourceMappingURL=app.js.map

/***/ })

});
//# sourceMappingURL=9.js.map