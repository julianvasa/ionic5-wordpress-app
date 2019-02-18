(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-title>\n      Kërkim\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <br>\n  <ion-progress-bar *ngIf=\"searching === true\" type=\"indeterminate\"></ion-progress-bar>\n\n  <ion-card>\n    <ion-input [(ngModel)]=\"searchStr\" placeholder=\"Recete, Perberes...\"></ion-input>\n  </ion-card>\n  <ion-button (click)=\"search()\">Kërko</ion-button>\n\n  <br>\n  \n  <ion-card *ngFor=\"let item of getKeys(thumbs)\">\n      <ion-card-header>\n          <ion-card-title>\n            {{thumbs.get(item).title}}\n          </ion-card-title>\n      </ion-card-header>    \n      <ion-card-content>\n          <div [innerHTML]=\"thumbs.get(item).content\"></div>\n      </ion-card-content>\n  </ion-card>\n  <ion-button *ngIf=\"loaded === true\" (click)=\"next()\">Me shume receta</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Tab3Page = /** @class */ (function () {
    function Tab3Page(wordpressService, route) {
        this.wordpressService = wordpressService;
        this.route = route;
        this.thumbs = new Map();
    }
    Tab3Page.prototype.search = function () {
        this.searching = true;
        this.thumbs = new Map();
        this.loadPosts();
    };
    Tab3Page.prototype.loadPosts = function () {
        var _this = this;
        this.categoryName = this.route.snapshot.paramMap.get('id');
        if (this.searchStr != undefined) {
            this.wordpressService.search(this.searchStr, this.page).subscribe(function (data) {
                _this.items = data.posts;
                for (var _i = 0, _a = data.posts; _i < _a.length; _i++) {
                    var res = _a[_i];
                    if (!_this.thumbs.has(res.ID)) {
                        _this.thumbs.set(res.ID, { id: res.ID, title: res.title, content: res.content.replace('<li class="jetpack-recipe-print"><a href="#">Print</a></li>', '') });
                    }
                }
                _this.searching = false;
                _this.loaded = true;
            });
        }
    };
    Tab3Page.prototype.getKeys = function (map) {
        return Array.from(map.keys());
    };
    Tab3Page.prototype.next = function () {
        this.page++;
        this.loadPosts();
    };
    Tab3Page.prototype.ngOnInit = function () {
        this.searching = false;
        this.page = 1;
        this.loadPosts();
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            providers: [_services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"]],
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map