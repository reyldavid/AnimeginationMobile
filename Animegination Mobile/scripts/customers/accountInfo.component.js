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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var angular2_jwt_1 = require('angular2-jwt');
var anime_api_service_1 = require('../services/anime.api.service');
var customer_service_1 = require('../services/customer.service');
var AccountInfoComponent = (function () {
    function AccountInfoComponent(router, http, authHttp, _customerService) {
        this.router = router;
        this.http = http;
        this.authHttp = authHttp;
        this._customerService = _customerService;
        // Here we define this component's instance variables
        // They're accessible from the template
        this.token = { token: "" };
        this.userAccount = {
            UserId: "", UserName: "",
            FirstName: "", LastName: "",
            Address: "", City: "", State: "", ZipCode: "",
            CellPhone: "", HomePhone: "",
            Email: "", Created: "",
            CreditCardType: "", CreditCardNumber: "", CreditCardExpiration: ""
        };
        console.log('account info construct');
        // We get the JWT from localStorage
        this.token.token = localStorage.getItem('jwt');
        // We also store the decoded JSON from this JWT
        //this.decodedJwt = this.jwt && (<any>window).jwt_decode(this.jwt);
    }
    AccountInfoComponent.prototype.logout = function () {
        // Method to be called when the user wants to logout
        // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
        localStorage.removeItem('jwt');
        this.router.parent.navigateByUrl('/login');
    };
    AccountInfoComponent.prototype.callAnonymousApi = function () {
        //        this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
        console.log('Call Anonymous API');
    };
    AccountInfoComponent.prototype.callSecuredApi = function () {
        // We call the secured API
        //        this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
        console.log('Call Secured API');
    };
    AccountInfoComponent.prototype._callApi = function (type, url) {
        var _this = this;
        this.response = null;
        if (type === 'Anonymous') {
            // For non-protected routes, just use Http
            this.http.get(url)
                .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error.text(); });
        }
        if (type === 'Secured') {
            // For protected routes, use AuthHttp
            this.authHttp.get(url)
                .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error.text(); });
        }
    };
    AccountInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('account info init');
        this.recentPurchases = 'You Don\'t Have Any Purchases In Your Account Right Now';
        this.addressBook = 'We have no default address on file for this account';
        //this.userFullName = 'Aya Ueto';
        //this.userEmail = 'ayaueto@anime.com';
        //this.userPhone = '(925)984-2849';
        this._customerService.getUser(this.token)
            .then(function (userAccount) {
            _this.userAccount = userAccount;
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
                    console.log('account info get user error: ' + error);
                    break;
            }
        });
    };
    AccountInfoComponent.prototype.goOrders = function () {
    };
    AccountInfoComponent.prototype.goProfile = function () {
        this.router.parent.navigateByUrl('/profile');
    };
    AccountInfoComponent.prototype.goAddress = function () {
    };
    AccountInfoComponent = __decorate([
        core_1.Component({
            selector: 'accountInfo',
            templateUrl: './views/accountInfo.html',
            directives: [common_1.CORE_DIRECTIVES],
            providers: [customer_service_1.CustomerService, anime_api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http, angular2_jwt_1.AuthHttp, customer_service_1.CustomerService])
    ], AccountInfoComponent);
    return AccountInfoComponent;
}());
exports.AccountInfoComponent = AccountInfoComponent;
//# sourceMappingURL=accountInfo.component.js.map