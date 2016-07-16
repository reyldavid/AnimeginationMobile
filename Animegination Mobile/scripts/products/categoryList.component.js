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
var product_service_1 = require('../services/product.service');
var anime_api_service_1 = require('../services/anime.api.service');
var router_1 = require('angular2/router');
var CategoryListComponent = (function () {
    function CategoryListComponent(_productService, _router, _routeParams) {
        this._productService = _productService;
        this._router = _router;
        this._routeParams = _routeParams;
        this.category = { CategoryID: 0, CategoryName: "", Description: "", ImageFile: "" };
    }
    CategoryListComponent.prototype.OnSelectProduct = function (product) {
        this._router.navigate(['Product', { productID: product.ProductID }]);
    };
    CategoryListComponent.prototype.GetCategoryList = function (categoryID) {
        var _this = this;
        this._productService.getCategoryList(categoryID).then(function (apiProducts) { return _this.apiProducts = apiProducts; });
    };
    CategoryListComponent.prototype.GetCategory = function (categoryID) {
        var _this = this;
        this._productService.getCategory(categoryID).then(function (category) { return _this.category = category; });
    };
    CategoryListComponent.prototype.ngOnInit = function () {
        console.log('category list init');
        this.cateogryID = this._routeParams.get('categoryID');
        this.GetCategoryList(this.cateogryID);
        this.GetCategory(this.cateogryID);
    };
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: 'categoryList',
            templateUrl: './views/categoryList.html',
            providers: [product_service_1.ProductService, anime_api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router, router_1.RouteParams])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=categoryList.component.js.map