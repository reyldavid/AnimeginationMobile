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
var productsSlice_component_1 = require('./productsSlice.component');
var HomeComponent = (function () {
    function HomeComponent() {
        this.featuredTitles = 1;
        this.newItems = 2;
        this.topSellers = 3;
        this.bargainBin = 4;
        this.closeOut = 5;
        this.liveAction = 6;
        this.recommendations = 7;
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('home init');
        console.log('home href ' + window.location.href);
        console.log('home path ' + window.location.pathname);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            directives: [productsSlice_component_1.ProductsSliceComponent],
            templateUrl: './views/home.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map