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
var core_1 = require('angular2/core');
var products_offline_1 = require('../products/products.offline');
var anime_api_service_1 = require('./anime.api.service');
var ProductService = (function () {
    function ProductService(_apiService) {
        this._apiService = _apiService;
    }
    ProductService.prototype.getProducts = function () {
        return Promise.resolve(products_offline_1.PRODUCTS);
    };
    ProductService.prototype.getApiProduct = function (productId) {
        var apiProduct;
        this._apiService.getAnimeProduct(productId)
            .subscribe(function (data) { return apiProduct = data; }, function (error) { return alert(error); }, function () { return console.log("Api Product seikoo"); });
        return Promise.resolve(apiProduct);
    };
    ProductService.prototype.getApiProducts = function () {
        //let apiProducts: ApiProduct[];
        //this._apiService.getAnimeProducts()
        //    .subscribe(
        //    (data: ApiProduct[]) => apiProducts = data,
        //    error => alert(error),
        //    () => console.log("Yoku itadakimashishita ")
        //);
        //return Promise.resolve(apiProducts);
        var _this = this;
        return new Promise(function (resolve) {
            _this._apiService.getAnimeProducts()
                .subscribe(function (data) { return resolve(data); }, function (error) { return alert(error); }, function () { return console.log("Api Products seikoo"); });
        });
    };
    ProductService.prototype.getApiListing = function (listTypeID) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._apiService.getAnimeListing(listTypeID)
                .subscribe(function (data) { return resolve(data); }, function (error) { return alert(error); }, function () { return console.log("Api Listing seikoo"); });
        });
    };
    ProductService.prototype.getApiListType = function (listTypeID) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._apiService.getAnimeListType(listTypeID)
                .subscribe(function (data) { return resolve(data); }, function (error) { return alert(error); }, function () { return console.log("Api List Type seikoo"); });
        });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [anime_api_service_1.ApiService])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map