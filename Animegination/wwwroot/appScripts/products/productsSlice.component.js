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
var product_component_1 = require('./product.component');
var product_service_1 = require('../services/product.service');
var anime_api_service_1 = require('../services/anime.api.service');
var core_2 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var ProductsSliceComponent = (function () {
    function ProductsSliceComponent(_productService, _router, _routeParams) {
        this._productService = _productService;
        this._router = _router;
        this._routeParams = _routeParams;
        this.listType = { "ListTypeID": 0, "ListTypeName": "", "Description": "" };
        this.currentProduct = null;
        this.productSelected = new core_2.EventEmitter();
    }
    ProductsSliceComponent.prototype.OnSelectProduct = function (product) {
        //this.currentProduct = product;
        //this.productSelected.emit(product);
        console.log('product slice product ID: ' + product.ProductID);
        this._router.navigate(['Product', { productID: product.ProductID }]);
    };
    ProductsSliceComponent.prototype.GetProductsSlice = function (listTypeID) {
        var _this = this;
        this._productService.getApiListing(listTypeID).then(function (apiProducts) { return _this.apiProducts = apiProducts.slice(0, 4); });
    };
    ProductsSliceComponent.prototype.GetSliceList = function (listTypeID) {
        var _this = this;
        this._productService.getApiListing(listTypeID).then(function (apiProducts) { return _this.apiProducts = apiProducts; });
    };
    ProductsSliceComponent.prototype.GetProductListType = function (listTypeID) {
        var _this = this;
        this._productService.getApiListType(listTypeID).then(function (listType) { return _this.listType = listType; });
    };
    ProductsSliceComponent.prototype.ngOnInit = function () {
        console.log('product slice init');
        this.listTypeIDparam = this._routeParams.get('listTypeID');
        if (this.listTypeID === undefined) {
            this.listTypeID = Number(this.listTypeIDparam);
            this.GetSliceList(this.listTypeID);
        }
        else {
            this.GetProductsSlice(this.listTypeID);
        }
        this.GetProductListType(this.listTypeID);
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
        __metadata('design:paramtypes', [product_service_1.ProductService, router_deprecated_1.Router, router_deprecated_2.RouteParams])
    ], ProductsSliceComponent);
    return ProductsSliceComponent;
}());
exports.ProductsSliceComponent = ProductsSliceComponent;
//# sourceMappingURL=productsSlice.component.js.map