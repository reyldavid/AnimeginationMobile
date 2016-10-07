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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var headers_1 = require('../services/headers');
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
        headers.append("AnimeApiClientKey", "AA46C009-49F8-4411-A4D6-131D4BA6D91B");
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
        var errMsg = (error.message) ? error.message :
            error.status ? error.status :
                error.statusText ? error.statusText :
                    error.ok ? error.ok :
                        'Server error';
        console.log('api error: ' + errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ApiService.prototype.getAnimeListType = function (listTypeID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/listtypes/" + listTypeID, { headers: headers_1.contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getAnimeProduct = function (productID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/products/" + productID, { headers: headers_1.contentHeaders })
            .map(this.extractFirst)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getAnimeProducts = function () {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/products", { headers: headers_1.contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getAnimeListing = function (listTypeID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/Listings/" + listTypeID, { headers: headers_1.contentHeaders })
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
        var result = this._http.get("https://animegination2.azurewebsites.net/api/similars/" + productID, { headers: headers_1.contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getSearchResults = function (searchText) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/search/" + searchText, { headers: headers_1.contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getCategory = function (categoryID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/categories/" + categoryID, { headers: headers_1.contentHeaders })
            .map(this.extractFirst)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getCategories = function () {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/categories", { headers: headers_1.contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.getCategoryList = function (categoryID) {
        var result = this._http.get("https://animegination2.azurewebsites.net/api/categorylist/" + categoryID, { headers: headers_1.contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.userLogin = function (username, password) {
        var body = JSON.stringify({ username: username, password: password });
        var result = this._http.post("https://animegination2.azurewebsites.net/api/accounts/login", body, { headers: headers_1.contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.createUser = function (registerModel) {
        var body = JSON.stringify(registerModel);
        var result = this._http.post("https://animegination2.azurewebsites.net/api/accounts/create", body, { headers: headers_1.contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);
        return result;
    };
    ApiService.prototype.createUserAccount = function (registerModel) {
        var body = JSON.stringify(registerModel);
        var result = this._http.post("https://animegination2.azurewebsites.net/api/useraccounts", body, { headers: headers_1.contentHeaders })
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