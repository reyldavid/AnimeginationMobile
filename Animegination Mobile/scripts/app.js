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
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
//import {Product} from './models/product';
//import {ApiProduct} from './models/product';
var home_component_1 = require('./products/home.component');
var product_component_1 = require('./products/product.component');
var productsList_component_1 = require('./products/productsList.component');
var productsSlice_component_1 = require('./products/productsSlice.component');
var aboutUs_component_1 = require('./customers/aboutUs.component');
var accountInfo_component_1 = require('./customers/accountInfo.component');
var accountSettings_component_1 = require('./customers/accountSettings.component');
var contactUs_component_1 = require('./customers/contactUs.component');
var login_component_1 = require('./customers/login.component');
var register_component_1 = require('./customers/register.component');
var orders_component_1 = require('./customers/orders.component');
var categories_component_1 = require('./products/categories.component');
var shoppingCart_component_1 = require('./customers/shoppingCart.component');
var newsFeed_component_1 = require('./customers/newsFeed.component');
var searchResults_component_1 = require('./products/searchResults.component');
var categoryList_component_1 = require('./products/categoryList.component');
var profileSettings_component_1 = require('./customers/profileSettings.component');
var auth_routerOutlet_component_1 = require('./security/auth.routerOutlet.component');
var AppComponent = (function () {
    //selectedProduct: ApiProduct;
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('app init');
        localStorage.removeItem('jwt');
        this._router.navigate(['Home']);
    };
    AppComponent.prototype.OnHome = function () {
        //this.selectedProduct = null;
    };
    AppComponent.prototype.onSearch = function (searchText) {
        console.log('onSearch ' + searchText);
        this._router.navigate(['Search', { searchText: searchText }]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'aya-app',
            templateUrl: './views/App.html',
            directives: [auth_routerOutlet_component_1.AuthRouterOutlet, router_deprecated_2.RouterLink] // directives: [ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            //        { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
            { path: '/', name: 'Home', component: home_component_1.HomeComponent },
            { path: '/all', name: 'ProductsList', component: productsList_component_1.ProductsListComponent },
            { path: '/detail', name: 'Product', component: product_component_1.ProductComponent },
            { path: '/slice/:listTypeID/', name: 'Slice', component: productsSlice_component_1.ProductsSliceComponent },
            { path: '/about', name: 'About', component: aboutUs_component_1.AboutUsComponent },
            { path: '/account', name: 'AccountInfo', component: accountInfo_component_1.AccountInfoComponent },
            { path: '/settings', name: 'Settings', component: accountSettings_component_1.AccountSettingsComponent },
            { path: '/contact', name: 'Contact', component: contactUs_component_1.ContactUsComponent },
            { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
            { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
            { path: '/orders', name: 'Orders', component: orders_component_1.OrdersComponent },
            { path: '/genres', name: 'Categories', component: categories_component_1.CategoriesComponent },
            { path: '/news', name: 'News', component: newsFeed_component_1.NewsFeedComponent },
            { path: '/cart', name: 'Cart', component: shoppingCart_component_1.ShoppingCartComponent },
            { path: '/search', name: 'Search', component: searchResults_component_1.SearchResultsComponent },
            { path: '/genre:/categoryID/', name: 'CategoryList', component: categoryList_component_1.CategoryListComponent },
            { path: '/profile', name: 'ProfileSettings', component: profileSettings_component_1.ProfileSettingsComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map