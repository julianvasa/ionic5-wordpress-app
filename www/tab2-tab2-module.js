(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"warning\">\n      <ion-title>\n        Kategoritë\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n    <br>\n    <ion-progress-bar *ngIf=\"loading === true\" type=\"indeterminate\"></ion-progress-bar>\n\n    <ion-list>\n      <ion-item *ngFor=\"let item of getKeys(cats)\" [routerLink]=\"'/tabs/kategoria/'+ cats.get(item).slug\" detail>    \n          <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"{{cats.get(item).imageUrl}}\">\n              </ion-avatar>\n          </ion-item>\n          <ion-label>\n            <h2>{{cats.get(item).name}}</h2>\n            <p>{{cats.get(item).post_count}} receta</p>\n          </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wordpress.service */ "./src/app/services/wordpress.service.ts");



var Tab2Page = /** @class */ (function () {
    function Tab2Page(wordpressService) {
        this.wordpressService = wordpressService;
        this.cats = new Map();
    }
    Tab2Page.prototype.getKeys = function (map) {
        return Array.from(map.keys());
    };
    Tab2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.wordpressService.getCategories().subscribe(function (data) {
            _this.items = data.categories;
            for (var _i = 0, _a = data.categories; _i < _a.length; _i++) {
                var res = _a[_i];
                if (!_this.cats.has(res.ID) && res.parent == 0 && res.name != "Uncategorized" && res.post_count > 10) {
                    var image = "https://unegatuaj960568913.files.wordpress.com/2019/02/food.png?resize=160%2C160";
                    switch (res.name) {
                        case "Ëmbëlsira":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/cake.png?resize=160%2C160";
                            break;
                        case "Receta për fëmijë":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/gingerbread.png?resize=160%2C160";
                            break;
                        case "Pjata të dyta":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/steak.png?resize=160%2C160";
                            break;
                        case "Pjata të para":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/spaguetti.png?resize=160%2C160";
                            break;
                        case "Kuzhina vegjetariane":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/vegetables.png?resize=160%2C160";
                            break;
                        case "Antipasta":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/starter.png?resize=160%2C160";
                            break;
                        case "Receta Verore":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/fruit_salad.png?resize=160%2C160";
                            break;
                        case "Supa":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/soup.png?resize=160%2C160";
                            break;
                        case "Torta":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/cake.png?resize=160%2C160";
                            break;
                        case "Garnitura":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/salad.png?resize=160%2C160";
                            break;
                        case "Këshilla kuzhine":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/food.png?resize=160%2C160";
                            break;
                        case "Krishtlindje dhe Viti i Ri":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/cake.png?resize=160%2C160";
                            break;
                        case "Sallatë":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/salad.png?resize=160%2C160";
                            break;
                        case "Receta të shëndetshme":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/healthy.png?resize=160%2C160";
                            break;
                        case "Biskota":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/gingerbread.png?resize=160%2C160";
                            break;
                        case "Vezë":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/food.png?resize=160%2C160";
                            break;
                        case "Ëmbëlsira për Krishtlindje dhe Vitin e Ri":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/basket.png?resize=160%2C160";
                            break;
                        case "Pica dhe torta të kripura":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/pizza.png?resize=160%2C160";
                            break;
                        case "Koha për një kafe/çaj":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/food.png?resize=160%2C160";
                            break;
                        case "Bukë":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/bread.png?resize=160%2C160";
                            break;
                        case "Rizoto":
                            image = "https://unegatuaj960568913.files.wordpress.com/2019/02/rice.png?resize=160%2C160";
                            break;
                        default: image = "https://unegatuaj960568913.files.wordpress.com/2019/02/food.png?resize=160%2C160";
                    }
                    _this.cats.set(res.ID, { id: res.ID, slug: res.slug, post_count: res.post_count, imageUrl: image, name: res.name });
                }
            }
            _this.loading = false;
        });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            providers: [_services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"]],
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map