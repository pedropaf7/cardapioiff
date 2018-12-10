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


/**
 * Generated class for the BreakfastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BreakfastPage = /** @class */ (function () {
    function BreakfastPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BreakfastPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BreakfastPage');
    };
    BreakfastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-breakfast',template:/*ion-inline-start:"/home/pedro/Downloads/cardapioiff/src/pages/breakfast/breakfast.html"*/'<ion-header>\n    <ion-card>\n      <ion-navbar color="secondary">\n      <ion-card-header>\n        <strong>Lanche da Manhã</strong>\n      </ion-card-header></ion-navbar>\n      <ion-card-content>\n        Início:   8:30 <br>\n        Término: 9:00\n      </ion-card-content>\n      </ion-card>\n</ion-header>\n\n<ion-content>\n\n  <div padding>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="Seg">\n      Seg\n    </ion-segment-button>\n    <ion-segment-button value="Ter">\n      Ter\n    </ion-segment-button>\n    <ion-segment-button value="Qua">\n      Qua\n    </ion-segment-button>\n    <ion-segment-button value="Qui">\n      Qui\n    </ion-segment-button>\n    <ion-segment-button value="Sex">\n      Sex\n    </ion-segment-button>\n  </ion-segment>\n\n</div>\n\n<div [ngSwitch]="pet">\n  <ion-list *ngSwitchCase="\'Seg\'">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="img/thumbnail-puppy-1.jpg">\n      </ion-thumbnail>\n      <h2>Ruby</h2>\n    </ion-item>\n    <tbody>\n										<tr>\n											<th scope="row">Salada 1</th>\n											<td>REPOLHO (80g = 13,7kcal)</td>\n										</tr>\n										<tr>\n											<th scope="row">Salada 2</th>\n											<td>PEPINO COM TOMATE (80g = 9kcal)</td>\n										</tr>\n										<tr>\n											<th scope="row">Salada 3</th>\n											<td>BETERRABA RALADA (80g = 39,1kcal)</td>\n										</tr>\n										<tr>\n											<th scope="row">Complemento</th>\n											<td>ARROZ BRANCO (200g =260 kcal)<br> FEIJÃO PRETO (160g = 145 Kcal)<br> ARROZ INTEGRAL (200g = 224kcal)<br></td>\n										</tr>\n										<!-- <tr>\n											<th scope="row">Complemento 2</th>\n											<td>Feijão preto (160g = 145Kcal)</td>\n										</tr>\n										<tr>\n											<th scope="row">Complemento 3</th>\n											<td>Arroz integral (200g = 224Kcal)</td>\n										</tr> -->\n										<tr>\n											<th scope="row">Guarnição</th>\n											<td>BATATA PALHA (35g=217Kcal)</td>\n										</tr>\n										<tr>\n											<th scope="row">Proteína 1</th>\n											<td>STROGONOFF DE FRANGO (120g=250KCAL)</td>\n										</tr>\n										<tr>\n											<th scope="row">Proteína 2</th>\n											<td>CARNE A PRIMAVERA (140g = 190kcal)</td>\n										</tr>\n										<tr>\n											<th scope="row">Proteína 3</th>\n											<td>STROGONOFF DE VEGETARIANO (160g = 195 kcal)</td>\n										</tr>\n										<tr>\n											<th scope="row">Sobremesa 1</th>\n											<td>MAÇÃ (80kcal)</td>\n										</tr>\n										<tr>\n											<th scope="row">Sobremesa 2</th>\n											<td>LARANJA (66 kcal)</td>\n										</tr>\n										<tr>\n											<th scope="row">Suco</th>\n											<td>SUCO DE GOIABA (200ml = 120 kcal)</td>\n										</tr>\n										<tr>\n											<th scope="row">Valor Calórico</th>\n											<td>1100Kcal</td>\n										</tr>\n\n									</tbody>\n  </ion-list>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/cardapioiff/src/pages/breakfast/breakfast.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BreakfastPage);
    return BreakfastPage;
}());

//# sourceMappingURL=breakfast.js.map

/***/ })

});
//# sourceMappingURL=8.js.map