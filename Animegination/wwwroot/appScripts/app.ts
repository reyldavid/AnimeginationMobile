import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {RouteConfig, Router} from '@angular/router-deprecated';
import {RouterLink} from '@angular/router-deprecated';
import {Component} from '@angular/core';
//import {Product} from './models/product';
//import {ApiProduct} from './models/product';
import {HomeComponent} from './products/home.component';
import {ProductComponent} from './products/product.component';
import {ProductsListComponent} from './products/productsList.component';
import {ProductsSliceComponent} from './products/productsSlice.component';
import {AboutUsComponent} from './customers/aboutUs.component';
import {AccountInfoComponent} from './customers/accountInfo.component';
import {AccountSettingsComponent} from './customers/accountSettings.component';
import {ContactUsComponent} from './customers/contactUs.component';
import {LoginComponent} from './customers/login.component';
import {RegisterComponent} from './customers/register.component';
import {OrdersComponent} from './customers/orders.component';
import {CategoriesComponent} from './products/categories.component';
import {ShoppingCartComponent} from './customers/shoppingCart.component';
import {NewsFeedComponent} from './customers/newsFeed.component';
import {SearchResultsComponent} from './products/searchResults.component';
import {CategoryListComponent} from './products/categoryList.component';
import {OnInit} from '@angular/core';
import {AuthRouterOutlet} from './security/auth.routerOutlet.component';

@Component({
    selector: 'aya-app',
    templateUrl: './views/App.html',
    directives: [AuthRouterOutlet, RouterLink]  // directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    //        { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/all', name: 'ProductsList', component: ProductsListComponent },
    { path: '/detail', name: 'Product', component: ProductComponent },
    { path: '/slice/:listTypeID/', name: 'Slice', component: ProductsSliceComponent },
    { path: '/about', name: 'About', component: AboutUsComponent },
    { path: '/account', name: 'AccountInfo', component: AccountInfoComponent },
    { path: '/settings', name: 'Settings', component: AccountSettingsComponent },
    { path: '/contact', name: 'Contact', component: ContactUsComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/orders', name: 'Orders', component: OrdersComponent },
    { path: '/genres', name: 'Categories', component: CategoriesComponent },
    { path: '/news', name: 'News', component: NewsFeedComponent },
    { path: '/cart', name: 'Cart', component: ShoppingCartComponent },
    { path: '/search', name: 'Search', component: SearchResultsComponent },
    { path: '/genre:/categoryID/', name: 'CategoryList', component: CategoryListComponent }
])

export class AppComponent implements OnInit {
    //selectedProduct: ApiProduct;

    constructor(private _router: Router) {
    }

    ngOnInit(): any {
        console.log('app init');
        localStorage.removeItem('jwt');
        this._router.navigate(['Home']);
    }

    OnHome() {
        //this.selectedProduct = null;
    }

    onSearch(searchText: string) {
        console.log('onSearch ' + searchText);
        this._router.navigate(['Search', { searchText: searchText } ]);
    }

    //OnLiClick(itemName: string) {
    //    switch (itemName) {
    //        case 'about':
    //            console.log('about click');
    //            console.log('route to about');
    //            this._router.navigate(['About']);
    //            break;
    //        case 'contact':
    //            console.log('contact click');
    //            console.log('route to contact');
    //            this._router.navigate(['Contact']);
    //            break;
    //        default:
    //            console.log('route to home');
    //            this._router.navigate(['Home']);
    //    }
    //}
}


