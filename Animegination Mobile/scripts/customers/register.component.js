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
var common_3 = require('@angular/common');
var common_4 = require('@angular/common');
var RegisterComponent = (function () {
    function RegisterComponent(router, http, _customerService, _formBuilder) {
        this.router = router;
        this.http = http;
        this._customerService = _customerService;
        this._formBuilder = _formBuilder;
        this.token = { token: "" };
        this.registerInput = {
            UserId: "",
            Username: "",
            RoleName: "",
            Password: "",
            ConfirmPassword: "",
            FirstName: "",
            LastName: "",
            Address: "",
            City: "",
            StateId: 8,
            ZipCode: "",
            CellPhone: "",
            HomePhone: "",
            Email: "",
            CreditCardType: "",
            CreditCardNumber: "",
            CreditCardExpiration: ""
        };
        this.isFailedRegistration = false;
    }
    RegisterComponent.prototype.Register = function () {
        var _this = this;
        this.isFailedRegistration = false;
        this.registerInput.Username = this.username.value;
        this.registerInput.FirstName = this.firstname.value;
        this.registerInput.LastName = this.lastname.value;
        this.registerInput.Email = this.email.value;
        this.registerInput.Password = this.password.value;
        this.registerInput.ConfirmPassword = this.confirmPassword.value;
        this._customerService.register(this.registerInput)
            .then(function (token) {
            _this.token = token;
            localStorage.setItem('jwt', _this.token.token);
            _this.router.parent.navigateByUrl('/account');
        })
            .catch(function (error) {
            _this.isFailedRegistration = true;
            console.log('register error: ' + error);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        console.log('register init');
        this.username = new common_2.Control('', common_4.Validators.compose([common_4.Validators.required, common_4.Validators.minLength(5)]));
        this.firstname = new common_2.Control('', common_4.Validators.required);
        this.lastname = new common_2.Control('', common_4.Validators.required);
        this.email = new common_2.Control('', common_4.Validators.compose([common_4.Validators.required,
            common_4.Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')]));
        this.password = new common_2.Control('', common_4.Validators.compose([common_4.Validators.required, common_4.Validators.minLength(6)]));
        this.confirmPassword = new common_2.Control('', common_4.Validators.compose([common_4.Validators.required, common_4.Validators.minLength(6)]));
        //this.registerForm = this._formBuilder.group({
        //    username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        //    firstname: ['', Validators.required],
        //    lastname: ['', Validators.required],
        //    email: ['', Validators.compose([Validators.required,
        //        Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')])],
        //    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        //    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        //});
        this.registerForm = this._formBuilder.group({
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: './views/register.html',
            directives: [router_deprecated_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [customer_service_1.CustomerService, anime_api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http, customer_service_1.CustomerService, common_3.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map