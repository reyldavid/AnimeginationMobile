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
var cartItem_component_1 = require('./cartItem.component');
var anime_api_service_1 = require('../services/anime.api.service');
var customer_service_1 = require('../services/customer.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(_router, _routeParams, _customerService, _apiService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._customerService = _customerService;
        this._apiService = _apiService;
        this.token = { token: "" };
        this.address = {
            city: "", state: ""
        };
        this.token.token = localStorage.getItem('jwt');
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        console.log('shopping cart init');
        this.GetCartItems();
        this.GetOrderTotals();
        this.GetShipAddress();
    };
    ShoppingCartComponent.prototype.GetCartItems = function () {
        var _this = this;
        this._customerService.getCartItems(this.token, 'cart')
            .then(function (cartItems) {
            _this.cartProducts = cartItems;
            console.log('aya shopping cart items: ');
            console.log(_this.cartProducts);
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
                    console.log('get cart items error: ' + error);
                    break;
            }
        });
    };
    ShoppingCartComponent.prototype.GetOrderTotals = function () {
        var _this = this;
        this._customerService.getOrderTotals(this.token, 'cart')
            .then(function (orders) {
            _this.order = orders[0];
            console.log('aya order totals: ');
            console.log(_this.order);
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
                    console.log('get order totals error: ' + error);
                    break;
            }
        });
    };
    ShoppingCartComponent.prototype.GetShipAddress = function () {
        var _this = this;
        this._customerService.getUser(this.token)
            .then(function (userAccount) {
            _this.address.city = userAccount.City + ', ';
            _this.address.state = userAccount.State;
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
                    console.log('get shipping address error: ' + error);
                    break;
            }
        });
    };
    ShoppingCartComponent.prototype.OnSelectProduct = function (productID) {
        console.log('selected product ID: ' + productID);
        this._router.navigate(['Product', { productID: productID }]);
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            templateUrl: './views/shoppingCart.html',
            providers: [anime_api_service_1.ApiService, customer_service_1.CustomerService],
            directives: [cartItem_component_1.CartItemComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_2.RouteParams, customer_service_1.CustomerService, anime_api_service_1.ApiService])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=shoppingCart.component.js.map