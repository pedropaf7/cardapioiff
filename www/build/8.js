webpackJsonp([8],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroFoodPageModule", function() { return CadastroFoodPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_food__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroFoodPageModule = /** @class */ (function () {
    function CadastroFoodPageModule() {
    }
    CadastroFoodPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_food__["a" /* CadastroFoodPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_food__["a" /* CadastroFoodPage */]),
            ],
        })
    ], CadastroFoodPageModule);
    return CadastroFoodPageModule;
}());

//# sourceMappingURL=cadastro-food.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroFoodPage; });
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


var CadastroFoodPage = /** @class */ (function () {
    function CadastroFoodPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.week = "0";
    }
    CadastroFoodPage.prototype.selectedTab = function (sld) {
        this.slider.slideTo(sld);
    };
    CadastroFoodPage.prototype.moveTab = function ($event) {
        this.week = $event._snapIndex.toString();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], CadastroFoodPage.prototype, "slider", void 0);
    CadastroFoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-food',template:/*ion-inline-start:"/home/pedro/Downloads/cardapioiff/src/pages/cadastro-food/cadastro-food.html"*/'<ion-header>\n    <ion-card>\n      <ion-navbar color="secondary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title text-center > CADASTRAR REFEIÇÃO</ion-title>\n      </ion-navbar>\n      <ion-card-content>\n        <strong> Dia: </strong>11/12/18\n      </ion-card-content>\n      </ion-card>\n\n      <ion-segment color="dark" [(ngModel)]="week">\n\n        <ion-segment-button value="0" (click)="selectedTab(0)">\n          SEG\n        </ion-segment-button>\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n          TER\n        </ion-segment-button>\n        <ion-segment-button value="2" (click)="selectedTab(2)">\n          QUA\n        </ion-segment-button>\n        <ion-segment-button value="3" (click)="selectedTab(3)">\n          QUI\n        </ion-segment-button>\n        <ion-segment-button value="4" (click)="selectedTab(4)">\n          SEX\n        </ion-segment-button>\n\n      </ion-segment>\n</ion-header>\n\n<ion-content>\n  <ion-slides #slider (ionSlideWillChange)="moveTab($event)">\n    <ion-slide>\n      <h1>SEGUNDA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>TERÇA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>QUARTA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>QUINTA</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>SEXTA</h1>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/cardapioiff/src/pages/cadastro-food/cadastro-food.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastroFoodPage);
    return CadastroFoodPage;
}());

//# sourceMappingURL=cadastro-food.js.map

/***/ })

});
//# sourceMappingURL=8.js.map