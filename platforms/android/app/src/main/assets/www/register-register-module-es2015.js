(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <div class=\"wave-container\">\n    <h3>Halaman Register</h3>\n    <img src=\"assets/2register.png\">\n\n    \n   <form  #loginForm=ngForm  (ngSubmit)=\"register()\">\n    <ion-item>\n      <ion-label position=\"floating\"  required>Nama Lengkap <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input  type=\"name\"></ion-input>\n    </ion-item>\n    \n    <!-- required name=\"name\" [(ngModel)]=\"form.name\"   -->\n     <ion-item>\n       <ion-label position=\"floating\"  required>Email <ion-text color=\"danger\">*</ion-text></ion-label>\n       <ion-input required  type=\"email\"  ></ion-input>\n     </ion-item>\n     <!-- name=\"email\" [(ngModel)]=\"form.email\"    -->\n\n     <ion-item>\n       <ion-label position=\"floating\">Password <ion-text color=\"danger\">*</ion-text></ion-label>\n       <ion-input required  type=\"password\" required></ion-input>\n     </ion-item>\n<!-- [(ngModel)]=\"form.password\" name=\"password\"  -->\n     <ion-button shape=\"round\" color=\"primary\"  (click)=\"loadActionSheet()\" style=\"margin-top:20px;\" type=\"submit\" [disabled]=\"!loginForm.valid\">\n       UPLOAD CITRA WAJAH &nbsp;<ion-icon  name=\"log-in\"></ion-icon>\n     </ion-button>\n     <ion-button shape=\"round\"  color=\"primary\" style=\"margin-top:20px;\" type=\"submit\" [disabled]=\"!loginForm.valid\">\n      DAFTAR &nbsp;<ion-icon  name=\"log-in\"></ion-icon>\n    </ion-button>\n\n     \n\n\n  <br> <br> <br>\n\n    <ion-col size=\"12\">\n      <ion-text color=\"primary\" class=\"ion-text\" style=\"justify-content: center;\">\n       <b>akun sudah terdaftar,  <br> silahkan login</b>\n      </ion-text>\n    </ion-col>\n  <br>\n    <ion-button color=\"warning\" shape=\"round\" routerLink=\"/login\" class=\"ion-text-capitalize\">\n      Login\n    </ion-button>\n\n\n   </form>\n\n\n    \n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#fff\" fill-opacity=\"1\" d=\"M0,64L120,101.3C240,139,480,213,720,202.7C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z\"></path></svg>\n    </div>\n\n    <ion-footer class=\"ion-no-border\">\n      <ion-toolbar>\n        <ion-title>\n          <span class=\"ion-float-left\">Delvan Nofrizaldi</span> \n            <span class=\"ion-float-right\">techinschool.id</span>\n        </ion-title>\n      </ion-toolbar>\n    </ion-footer> \n    \n  \n</ion-content>\n\n\n\n");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff;\n}\n\n.wave-container {\n  position: relative;\n  color: #FFF;\n  text-align: center;\n  overflow: hidden;\n  background: #091d23;\n}\n\n.wave-container img {\n  margin-bottom: 2rem;\n}\n\n.wave-container > svg {\n  display: block;\n}\n\nh1 {\n  font-size: 4rem;\n  margin: 2rem auto;\n}\n\nion-footer ion-toolbar {\n  --background: rgba(0,0,0,0);\n}\n\nion-footer ion-toolbar ion-title {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kbHZuL1RlY2hJblNjaG9vbC8yLlNLUklQU0kvVUkgQVBMSUtBU0kvQ09WSUQtMTktSU9OSUM1LUFuZ3VsYXI5LVVJLW1hc3Rlci9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtBQ0ZKOztBRElJO0VBQ0UsbUJBQUE7QUNGTjs7QURPRTtFQUNFLGNBQUE7QUNKSjs7QURRRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFNJO0VBQ0UsMkJBQUE7QUNOTjs7QURPTTtFQUNFLGVBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIFxuICAgIFxuICAud2F2ZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gICAgYmFja2dyb3VuZDogIzA5MWQyMztcbiAgICBcbiAgICBpbWcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG4gIFxuICB9XG4gIFxuICAud2F2ZS1jb250YWluZXIgPiBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICBcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgfVxuICBcbiAgaW9uLWZvb3RlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ud2F2ZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMwOTFkMjM7XG59XG4ud2F2ZS1jb250YWluZXIgaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLndhdmUtY29udGFpbmVyID4gc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW46IDJyZW0gYXV0bztcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RegisterPage = class RegisterPage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map