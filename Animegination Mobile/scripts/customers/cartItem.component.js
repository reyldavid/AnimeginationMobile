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
var core_2 = require('@angular/core');
var CartItemComponent = (function () {
    function CartItemComponent() {
        this.selectItem = new core_2.EventEmitter();
    }
    CartItemComponent.prototype.ngOnInit = function () {
        console.log('cart item init');
    };
    CartItemComponent.prototype.selectProduct = function (productID) {
        console.log('aya select: ' + productID);
        this.selectItem.emit(productID);
    };
    CartItemComponent.prototype.deleteProduct = function (productID) {
        console.log('aya delete: ' + productID);
    };
    CartItemComponent.prototype.wishProduct = function (productID) {
        console.log('aya wish list: ' + productID);
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Object)
    ], CartItemComponent.prototype, "product", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], CartItemComponent.prototype, "selectItem", void 0);
    CartItemComponent = __decorate([
        core_1.Component({
            selector: 'cartItem',
            templateUrl: './views/CartItem.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CartItemComponent);
    return CartItemComponent;
}());
exports.CartItemComponent = CartItemComponent;
//# sourceMappingURL=cartItem.component.js.map