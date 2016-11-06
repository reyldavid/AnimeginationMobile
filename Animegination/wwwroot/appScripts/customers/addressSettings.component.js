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
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var customer_service_1 = require('../services/customer.service');
var anime_api_service_1 = require('../services/anime.api.service');
var common_2 = require('@angular/common');
var statesDropDown_1 = require('../helpers/statesDropDown');
var AddressSettingsComponent = (function () {
    function AddressSettingsComponent(router, http, _customerService, _apiService, _formBuilder) {
        this.router = router;
        this.http = http;
        this._customerService = _customerService;
        this._apiService = _apiService;
        this._formBuilder = _formBuilder;
        this.token = { token: "" };
        this.addressInput = {
            UserId: "", UserName: "",
            FirstName: "", LastName: "",
            Address: "", City: "", State: "", StateId: 0, ZipCode: "",
            CellPhone: "", HomePhone: "",
            Email: "", Created: "",
            CreditCardType: "", CreditCardNumber: "", CreditCardExpiration: ""
        };
        this.token.token = localStorage.getItem('jwt');
    }
    AddressSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('address settings init');
        this._customerService.getUser(this.token)
            .then(function (userAccount) {
            _this.addressInput = userAccount;
            _this.currentState = userAccount.State;
        })
            .catch(function (error) {
            switch (error.toString()) {
                case "401":
                    //this.unauthorized = true;
                    break;
                case "404":
                    //this.notFound = true;
                    break;
                default:
                    console.log('address settings get user error: ' + error);
                    break;
            }
        });
    };
    AddressSettingsComponent.prototype.selectState = function (arg) {
        this.addressInput.StateId = arg;
    };
    AddressSettingsComponent.prototype.Update = function () {
        var _this = this;
        this.isSuccess = null;
        this.isFailure = null;
        this._customerService.updateUserAccountAddress(this.token, this.addressInput)
            .then(function (userAccount) {
            _this.addressInput.Address = userAccount.streetAddress;
            _this.addressInput.City = userAccount.city;
            _this.addressInput.State = userAccount.state;
            _this.addressInput.ZipCode = userAccount.zipCode;
            _this.isSuccess = true;
        })
            .catch(function (error) {
            switch (error.toString()) {
                case "401":
                //this.unauthorized = true;
                //break;
                case "404":
                //this.notFound = true;
                //break;
                default:
                    console.log('address settings update account error: ' + error);
                    _this.isFailure = true;
                    break;
            }
        });
    };
    AddressSettingsComponent = __decorate([
        core_1.Component({
            selector: 'address',
            templateUrl: './views/addressSettings.html',
            providers: [customer_service_1.CustomerService, anime_api_service_1.ApiService],
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.RouterLink, statesDropDown_1.StatesDropDownComponent],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http, customer_service_1.CustomerService, anime_api_service_1.ApiService, common_2.FormBuilder])
    ], AddressSettingsComponent);
    return AddressSettingsComponent;
}());
exports.AddressSettingsComponent = AddressSettingsComponent;
//# sourceMappingURL=addressSettings.component.js.map