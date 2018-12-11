webpackJsonp([1],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPageModule", function() { return StaffPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffPageModule = /** @class */ (function () {
    function StaffPageModule() {
    }
    StaffPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff__["a" /* StaffPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff__["a" /* StaffPage */]),
            ],
        })
    ], StaffPageModule);
    return StaffPageModule;
}());

//# sourceMappingURL=staff.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffPage = /** @class */ (function () {
    function StaffPage(navCtrl, navParams, fb, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.entrar = function () {
            var _a = _this.cadastro.value, user = _a.user, senha = _a.senha;
            if (user === 'admin' && senha === 'iff') {
                _this.navCtrl.push("CadastroFoodPage");
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: "ERROR ¬¬", subTitle: 'Você errou o usuário ou a senha! :(', buttons: ['OK']
                });
                alert_1.present();
            }
        };
        this.cadastro = fb.group({
            user: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])),
            senha: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)]))
        });
    }
    StaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffPage');
    };
    StaffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff',template:/*ion-inline-start:"/home/pedro/Downloads/cardapioiff/src/pages/staff/staff.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Staff</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n      <form [formGroup]=\'cadastro\'>\n      <ion-list>\n      <ion-item>\n        <ion-label floating>Usuário</ion-label>\n        <ion-input type="text" formControlName="user" [ngClass]="{\'invalida\': !cadastro.get(\'user\').valid && cadastro.get(\'user\').dirty}"></ion-input>\n      </ion-item>\n      <p *ngIf="!cadastro.get(\'user\').valid && cadastro.get(\'user\').dirty">Preencha o campo corretamente</p>\n\n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="password" formControlName="senha" [ngClass]="{\'invalida\': !cadastro.get(\'senha\').valid && cadastro.get(\'senha\').dirty}"></ion-input>\n      </ion-item>\n       <p *ngIf="cadastro.get(\'senha\').errors && cadastro.get(\'senha\').errors.invalido">Senha inválida</p>\n\n    </ion-list>\n\n    <div padding>\n      <button ion-button color="primary" block (click)="entrar()">Entrar</button>\n    </div>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/cardapioiff/src/pages/staff/staff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], StaffPage);
    return StaffPage;
}());

//# sourceMappingURL=staff.js.map

/***/ })

});
//# sourceMappingURL=1.js.map