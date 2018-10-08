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
var phonePipe_1 = require('../helpers/phonePipe');
var ProfileSettingsComponent = (function () {
    function ProfileSettingsComponent(router, http, _customerService, _apiService, _formBuilder) {
        this.router = router;
        this.http = http;
        this._customerService = _customerService;
        this._apiService = _apiService;
        this._formBuilder = _formBuilder;
        this.token = { token: "" };
        this.profileInput = {
            UserId: "", UserName: "",
            FirstName: "", LastName: "",
            Address: "", City: "", State: "", StateId: 0, ZipCode: "",
            CellPhone: "", HomePhone: "",
            Email: "", Created: "",
            CreditCardType: "", CreditCardNumber: "", CreditCardExpiration: ""
        };
        this.token.token = localStorage.getItem('jwt');
    }
    ProfileSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('profile settings init');
        this._customerService.getUser(this.token)
            .then(function (userAccount) {
            _this.profileInput = userAccount;
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
                    console.log('profile settings get user error: ' + error);
                    break;
            }
        });
    };
    ProfileSettingsComponent.prototype.Update = function () {
        var _this = this;
        this.isSuccess = null;
        this.isFailure = null;
        this._customerService.updateUserAccountNames(this.token, this.profileInput)
            .then(function (userAccount) {
            _this.profileInput.FirstName = userAccount.firstName;
            _this.profileInput.LastName = userAccount.lastName;
            _this.profileInput.Email = userAccount.emailAddress;
            _this.profileInput.CellPhone = userAccount.cellPhoneNumber;
            _this.profileInput.HomePhone = userAccount.homePhoneNumber;
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
                    console.log('profile settings update account error: ' + error);
                    _this.isFailure = true;
                    break;
            }
        });
    };
    ProfileSettingsComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            templateUrl: './views/profileSettings.html',
            providers: [customer_service_1.CustomerService, anime_api_service_1.ApiService],
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.RouterLink],
            pipes: [phonePipe_1.phonePipe]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http, customer_service_1.CustomerService, anime_api_service_1.ApiService, common_2.FormBuilder])
    ], ProfileSettingsComponent);
    return ProfileSettingsComponent;
}());
exports.ProfileSettingsComponent = ProfileSettingsComponent;
//# sourceMappingURL=profileSettings.component.js.map