"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var AuthRouterOutlet = (function (_super) {
    __extends(AuthRouterOutlet, _super);
    function AuthRouterOutlet(_viewContainerRef, _loader, _parentRouter, nameAttr) {
        _super.call(this, _viewContainerRef, _loader, _parentRouter, nameAttr);
        this.parentRouter = _parentRouter;
        // The Boolean following each route below
        // denotes whether the route requires authentication to view
        this.publicRoutes = {
            '': true,
            'home': true,
            'productsList': true,
            'product': true,
            'slice': true,
            'about': true,
            'contact': true,
            'login': true,
            'register': true,
            'categories': true,
            'news': true,
            'search': true,
            'categoryList': true,
            'genres': true
        };
    }
    AuthRouterOutlet.prototype.activate = function (instruction) {
        var url = instruction.urlPath;
        console.log('router url: ' + url);
        console.log('jwt: ' + localStorage.getItem('jwt'));
        if (!url.includes('slice') && !url.includes('genre') && !url.includes('detail')) {
            if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
                this.parentRouter.navigateByUrl('/login');
            }
        }
        return _super.prototype.activate.call(this, instruction);
    };
    AuthRouterOutlet = __decorate([
        core_1.Directive({
            selector: 'router-outlet'
        }),
        __param(3, core_1.Attribute('name')), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.DynamicComponentLoader, router_deprecated_1.Router, String])
    ], AuthRouterOutlet);
    return AuthRouterOutlet;
}(router_deprecated_1.RouterOutlet));
exports.AuthRouterOutlet = AuthRouterOutlet;
//# sourceMappingURL=auth.routerOutlet.component.js.map