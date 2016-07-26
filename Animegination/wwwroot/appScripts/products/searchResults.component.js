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
var router_deprecated_2 = require('@angular/router-deprecated');
var SearchResultsComponent = (function () {
    function SearchResultsComponent(_productService, _router, _routeParams) {
        this._productService = _productService;
        this._router = _router;
        this._routeParams = _routeParams;
    }
    SearchResultsComponent.prototype.OnSelectProduct = function (product) {
        console.log('selected product ID: ' + product.ProductID);
        this._router.navigate(['Product', { productID: product.ProductID }]);
    };
    SearchResultsComponent.prototype.GetSearchResults = function (searchText) {
        var _this = this;
        this._productService.getSearchResults(searchText).then(function (apiProducts) { return _this.apiProducts = apiProducts; });
    };
    SearchResultsComponent.prototype.ngOnInit = function () {
        console.log('search results init');
        this.searchText = this._routeParams.get('searchText');
        this.GetSearchResults(this.searchText);
    };
    SearchResultsComponent = __decorate([
        core_1.Component({
            selector: 'searchResults',
            templateUrl: './views/searchResults.html',
            providers: [product_service_1.ProductService, anime_api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_deprecated_1.Router, router_deprecated_2.RouteParams])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
exports.SearchResultsComponent = SearchResultsComponent;
//# sourceMappingURL=searchResults.component.js.map