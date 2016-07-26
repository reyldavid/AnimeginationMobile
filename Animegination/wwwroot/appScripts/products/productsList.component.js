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
//import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
var core_1 = require('@angular/core');
var product_component_1 = require('./product.component');
var product_service_1 = require('../services/product.service');
var anime_api_service_1 = require('../services/anime.api.service');
var core_2 = require('@angular/core');
var ProductsListComponent = (function () {
    function ProductsListComponent(_productService) {
        this._productService = _productService;
        this.currentProduct = null;
        this.productSelected = new core_2.EventEmitter();
    }
    //OnSelectProduct(product: Product) {
    //    this.currentProduct = product;
    //    this.productSelected.emit(product);
    //}
    ProductsListComponent.prototype.OnSelectProduct = function (product) {
        this.currentProduct = product;
        this.productSelected.emit(product);
    };
    ProductsListComponent.prototype.GetProducts = function () {
        var _this = this;
        //this._productService.getProducts().then((products: Product[]) => this.products = products);
        this._productService.getApiProducts().then(function (apiProducts) { return _this.apiProducts = apiProducts; });
    };
    ProductsListComponent.prototype.ngOnInit = function () {
        console.log('product list init');
        this.GetProducts();
    };
    ProductsListComponent = __decorate([
        core_1.Component({
            selector: 'productsList',
            templateUrl: './views/productsList.html',
            directives: [product_component_1.ProductComponent],
            providers: [product_service_1.ProductService, anime_api_service_1.ApiService],
            outputs: ['productSelected']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=productsList.component.js.map