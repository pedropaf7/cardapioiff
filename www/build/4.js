webpackJsonp([4],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefeitorioPageModule", function() { return RefeitorioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__refeitorio__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RefeitorioPageModule = /** @class */ (function () {
    function RefeitorioPageModule() {
    }
    RefeitorioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__refeitorio__["a" /* RefeitorioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__refeitorio__["a" /* RefeitorioPage */]),
            ],
        })
    ], RefeitorioPageModule);
    return RefeitorioPageModule;
}());

//# sourceMappingURL=refeitorio.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefeitorioPage; });
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
 * Generated class for the RefeitorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RefeitorioPage = /** @class */ (function () {
    function RefeitorioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RefeitorioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RefeitorioPage');
    };
    RefeitorioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refeitorio',template:/*ion-inline-start:"/home/pedro/Downloads/cardapioiff/src/pages/refeitorio/refeitorio.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>refeitorio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-navbar color="secondary">\n    <ion-card-header>\n      <strong>Horário de Funcionamento</strong>\n    </ion-card-header></ion-navbar>\n    <ion-card-content>\n      Das 7:00 às 21:00.\n    </ion-card-content>\n    </ion-card>\n  <ion-card>\n    <ion-navbar color="secondary">\n    <ion-card-header>\n      <strong>Horário para Café</strong>\n    </ion-card-header></ion-navbar>\n    <ion-card-content>\n      Manhã: <br>\n      Tarde:<br>\n      Noite:\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-navbar color="secondary">\n    <ion-card-header>\n      <strong>Contato</strong>\n    </ion-card-header></ion-navbar>\n    <ion-card-content>\n      Chefia:<br>\n      E-mail:<br>\n      Telefone:\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-navbar color="secondary">\n    <ion-card-header>\n      <strong>Funcionários</strong>\n    </ion-card-header></ion-navbar>\n    <ion-card-content>\n      <ion-card>\n        <ion-card-content>\n          Nome:<br>\n          Cargo:<br>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-content>\n          Nome:<br>\n          Cargo:<br>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-content>\n          Nome:<br>\n          Cargo:<br>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-content>\n          Nome:<br>\n          Cargo:<br>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-content>\n          Nome:<br>\n          Cargo:<br>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-content>\n          Nome:<br>\n          Cargo:<br>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-content>\n          Nome:<br>\n          Cargo:<br>\n        </ion-card-content>\n      </ion-card>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/cardapioiff/src/pages/refeitorio/refeitorio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RefeitorioPage);
    return RefeitorioPage;
}());

//# sourceMappingURL=refeitorio.js.map

/***/ })

});
//# sourceMappingURL=4.js.map