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
var router_deprecated_1 = require('@angular/router-deprecated');
var CategoriesComponent = (function () {
    function CategoriesComponent(_productService, _route, _routeParams) {
        this._productService = _productService;
        this._route = _route;
        this._routeParams = _routeParams;
    }
    CategoriesComponent.prototype.OnSelectCategory = function (category) {
        console.log('category: ' + category.Description);
        this._route.navigate(['CategoryList', { categoryID: category.CategoryID }]);
    };
    CategoriesComponent.prototype.GetCategories = function () {
        var _this = this;
        this._productService.getCategories()
            .then(function (categories) { return _this.categories = categories; });
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        console.log('categories init');
        this.GetCategories();
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'categories',
            templateUrl: './views/categories.html',
            providers: [product_service_1.ProductService, anime_api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map