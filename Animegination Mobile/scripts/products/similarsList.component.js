"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('../services/product.service');
var anime_api_service_1 = require('../services/anime.api.service');
var core_2 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var SimilarsListComponent = (function () {
    function SimilarsListComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
        this.currentProduct = null;
        this.productSelected = new core_2.EventEmitter();
    }
    SimilarsListComponent.prototype.OnSelectProduct = function (product) {
        //this.currentProduct = product;
        //this.productSelected.emit(product);
        console.log('selected product ID: ' + product.ProductID);
        this._router.navigate(['Product', { productID: product.ProductID }]);
    };
    SimilarsListComponent.prototype.GetSimilarsList = function (productID) {
        var _this = this;
        this._productService.getApiSimilars(productID).then(function (apiProducts) { return _this.apiProducts = apiProducts; });
    };
    SimilarsListComponent.prototype.ngOnInit = function () {
        console.log('similars list init');
    };
    SimilarsListComponent.prototype.ngOnChanges = function (changes) {
        for (var propname in changes) {
            var chng = changes[propname];
            var cur = chng.currentValue;
            var prev = chng.previousValue;
            if (propname == "productID" && !chng.isFirstChange()) {
                this.similarsTitle = 'Customers Who Bought This Item Also Bought';
                this.GetSimilarsList(this.productID);
            }
        }
    };
    SimilarsListComponent = __decorate([
        core_1.Component({
            selector: 'similarsList',
            templateUrl: './views/similarsList.html',
            providers: [product_service_1.ProductService, anime_api_service_1.ApiService],
            inputs: ['productID'],
            outputs: ['productSelected']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_deprecated_1.Router])
    ], SimilarsListComponent);
    return SimilarsListComponent;
}());
exports.SimilarsListComponent = SimilarsListComponent;
//# sourceMappingURL=similarsList.component.js.map