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
var anime_api_service_1 = require('./anime.api.service');
var CustomerService = (function () {
    function CustomerService(_apiService) {
        this._apiService = _apiService;
    }
    CustomerService.prototype.userLogin = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._apiService.userLogin(username, password)
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('login error: ' + error);
                reject(error);
            }, function () { return console.log("Api User Login seikoo"); });
        });
    };
    CustomerService.prototype.register = function (registerModel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._apiService.createUser(registerModel)
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('register part-1 error: ' + error);
                reject(error);
            }, function () { return console.log("Api Register Part-1 seikoo"); });
        })
            .then(function (userReturn) {
            registerModel.UserId = userReturn.id;
            return new Promise(function (resolve, reject) {
                _this._apiService.createUserAccount(registerModel)
                    .subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    console.log('register part-2 error: ' + error);
                    reject(error);
                }, function () { return console.log("Api Register Part-2 seikoo"); });
            });
        });
    };
    CustomerService.prototype.createUser = function (registerModel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._apiService.createUser(registerModel)
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('create user error: ' + error);
                reject(error);
            }, function () { return console.log("Api Create User seikoo"); });
        });
    };
    CustomerService.prototype.createUserAccount = function (registerModel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._apiService.createUserAccount(registerModel)
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('create user account error: ' + error);
                reject(error);
            }, function () { return console.log("Api Create User Account seikoo"); });
        });
    };
    CustomerService.prototype.getUser = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._apiService.getUserAccount(token)
                .subscribe(function (data) {
                resolve(data);
            }, function (error) { console.log('get user error: ' + error); reject(error); }, function () { return console.log("Api Get User seikoo"); });
        });
    };
    CustomerService.prototype.updateUserAccountNames = function (token, userAccountModel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._apiService.putUserAccountNames(token, userAccountModel)
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('update user account error: ' + error);
                reject(error);
            }, function () { return console.log("Api Update User Account seikoo"); });
        });
    };
    CustomerService.prototype.updateUserAccountAddress = function (token, userAccountModel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._apiService.putUserAccountAddress(token, userAccountModel)
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('update user address error: ' + error);
                reject(error);
            }, function () { return console.log("Api Update User Address seikoo"); });
        });
    };
    CustomerService.prototype.getStates = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._apiService.getStates()
                .subscribe(function (data) { return resolve(data); }, function (error) { return alert(error); }, function () { return console.log("Api States seikoo"); });
        });
    };
    CustomerService.prototype.getCartItems = function (token, cartType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._apiService.getCartItems(token, cartType)
                .subscribe(function (data) {
                resolve(data);
                console.log('aya cartitems: ');
                console.log(data);
            }, function (error) { console.log('get cart items: ' + error); reject(error); }, function () { return console.log("Api Get Cart Items seikoo"); });
        });
    };
    CustomerService.prototype.getOrderTotals = function (token, cartType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._apiService.getOrderTotals(token, cartType)
                .subscribe(function (data) {
                resolve(data);
                console.log('aya orders: ');
                console.log(data);
            }, function (error) { console.log('get order totals: ' + error); reject(error); }, function () { return console.log("Api Get Order Totals seikoo"); });
        });
    };
    CustomerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [anime_api_service_1.ApiService])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map