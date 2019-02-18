(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"] }])
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.html":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"warning\">\n      <ion-title>\n        {{capitalizeFirstLetter(categoryName)}}\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n    <br>\n    <ion-progress-bar *ngIf=\"loading === true\" type=\"indeterminate\"></ion-progress-bar>\n\n    <ion-card *ngFor=\"let item of getKeys(thumbs)\">\n        <ion-card-header>\n            <ion-card-title>\n              {{thumbs.get(item).title}}\n            </ion-card-title>\n        </ion-card-header>    \n        <ion-card-content>\n            <div [innerHTML]=\"thumbs.get(item).content\"></div>\n        </ion-card-content>\n    </ion-card>\n    <ion-button *ngIf=\"loaded === true\" (click)=\"next()\">Me shume receta</ion-button>\n\n  </ion-content>"

/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Tab4Page = /** @class */ (function () {
    function Tab4Page(wordpressService, route) {
        this.wordpressService = wordpressService;
        this.route = route;
        this.thumbs = new Map();
    }
    Tab4Page.prototype.getKeys = function (map) {
        return Array.from(map.keys());
    };
    Tab4Page.prototype.escapeRegExp = function (str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };
    Tab4Page.prototype.replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    };
    Tab4Page.prototype.capitalizeFirstLetter = function (str) {
        str = this.replaceAll(str, "-", " ");
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    Tab4Page.prototype.loadPosts = function () {
        var _this = this;
        this.loading = true;
        this.categoryName = this.route.snapshot.paramMap.get('id');
        this.wordpressService.getPostsByCat(this.categoryName, this.page).subscribe(function (data) {
            _this.items = data.posts;
            for (var _i = 0, _a = data.posts; _i < _a.length; _i++) {
                var res = _a[_i];
                if (!_this.thumbs.has(res.ID)) {
                    _this.thumbs.set(res.ID, { id: res.ID, title: res.title, content: res.content.replace('<li class="jetpack-recipe-print"><a href="#">Print</a></li>', '') });
                }
            }
            _this.loading = false;
            _this.loaded = true;
        });
    };
    Tab4Page.prototype.next = function () {
        this.page++;
        this.loadPosts();
    };
    Tab4Page.prototype.ngOnInit = function () {
        this.loading = false;
        this.page = 1;
        this.loadPosts();
    };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/tab4/tab4.page.html"),
            providers: [_services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"]],
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map