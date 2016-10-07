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
//let styles = require('./login.css');
//let template = require('./views/login.html');
var LoginComponent = (function () {
    function LoginComponent(router, http, _customerService) {
        this.router = router;
        this.http = http;
        this._customerService = _customerService;
        this.token = { "token": "" };
        this.loginInput = { username: "", password: "" };
        this.isInvalidAccount = false;
    }
    LoginComponent.prototype.Login = function () {
        var _this = this;
        //event.preventDefault();
        this.isInvalidAccount = false;
        this._customerService.userLogin(this.loginInput.username, this.loginInput.password)
            .then(function (token) {
            _this.token = token;
            localStorage.setItem('jwt', _this.token.token);
            _this.router.parent.navigateByUrl('/account');
        })
            .catch(function (error) {
            switch (error.toString()) {
                case "404":
                    _this.isInvalidAccount = true;
                    break;
                default:
                    console.log('user login error: ' + error);
                    break;
            }
        });
        //this.http.post('http://localhost:3001/sessions/create',
        //    body, { headers: contentHeaders })
        //    .subscribe(
        //    response => {
        //        localStorage.setItem('jwt', response.json().id_token);
        //        this.router.parent.navigateByUrl('/account');
        //    },
        //    error => {
        //        alert(error.text());
        //        console.log('login error: ' + error.text());
        //    }
        //);
    };
    //signup(event) {
    //    event.preventDefault();
    //    this.router.parent.navigateByUrl('/register');
    //}
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login init');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './views/login.html',
            directives: [router_deprecated_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [customer_service_1.CustomerService, anime_api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http, customer_service_1.CustomerService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map