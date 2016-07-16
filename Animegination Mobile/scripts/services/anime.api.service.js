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
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
//import 'rxjs/add/operator/map';
var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        return headers;
    };
    ApiService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        var body = res.json();
        return body || {};
    };
    ApiService.prototype.extractFirst = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        var body = res.json()[0];
        return body || {};
    };
    ApiService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.log('error: ');
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ApiService.prototype.getAnimeListType = function (listTypeID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/listtypes/" + listTypeID, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getAnimeProduct = function (productID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/products/" + productID, { headers: this.getHeaders() })
            .map(this.extractFirst)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getAnimeProducts = function () {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/products", { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getAnimeListing = function (listTypeID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/Listings/" + listTypeID, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getDummyData = function () {
        return this._http.get("../appScripts/products/dummy.product.json")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.getSimilarsListing = function (productID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/similars/" + productID, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getSearchResults = function (searchText) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/search/" + searchText, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getCategory = function (categoryID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/categories/" + categoryID, { headers: this.getHeaders() })
            .map(this.extractFirst)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getCategories = function () {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/categories", { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getCategoryList = function (categoryID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/categorylist/" + categoryID, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=anime.api.service.js.map