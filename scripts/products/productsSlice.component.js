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
var product_component_1 = require('./product.component');
var product_service_1 = require('../services/product.service');
var anime_api_service_1 = require('../services/anime.api.service');
var core_2 = require('angular2/core');
var ProductsSliceComponent = (function () {
    function ProductsSliceComponent(_productService) {
        this._productService = _productService;
        this.listType = { "ListTypeID": 0, "ListTypeName": "", "Description": "" };
        this.currentProduct = null;
        this.productSelected = new core_2.EventEmitter();
    }
    ProductsSliceComponent.prototype.OnSelectProduct = function (product) {
        this.currentProduct = product;
        this.productSelected.emit(product);
    };
    ProductsSliceComponent.prototype.GetProductsSlice = function (listTypeID) {
        var _this = this;
        this._productService.getApiListing(listTypeID).then(function (apiProducts) { return _this.apiProducts = apiProducts; });
    };
    ProductsSliceComponent.prototype.GetProductListType = function (listTypeID) {
        var _this = this;
        this._productService.getApiListType(listTypeID).then(function (listType) { return _this.listType = listType; });
    };
    ProductsSliceComponent.prototype.ngOnInit = function () {
        console.log('product slice init');
        this.GetProductListType(this.listTypeID);
        this.GetProductsSlice(this.listTypeID);
    };
    ProductsSliceComponent = __decorate([
        core_1.Component({
            selector: 'productsSlice',
            templateUrl: './views/productsSlice.html',
            directives: [product_component_1.ProductComponent],
            providers: [product_service_1.ProductService, anime_api_service_1.ApiService],
            inputs: ['listTypeID'],
            outputs: ['productSelected']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductsSliceComponent);
    return ProductsSliceComponent;
}());
exports.ProductsSliceComponent = ProductsSliceComponent;
//# sourceMappingURL=productsSlice.component.js.map