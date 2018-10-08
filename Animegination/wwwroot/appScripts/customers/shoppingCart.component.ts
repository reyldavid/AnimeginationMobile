import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {CartItemComponent} from './cartItem.component';
import {ApiProduct} from '../models/product';
import {ProductService} from '../services/product.service';
import {ApiService} from '../services/anime.api.service';
import {CustomerService} from '../services/customer.service';
import {TokenModel} from '../models/tokenmodel';
import {CartItem} from '../models/cartItemModel';
import {Order} from '../models/orderModel';
import {UserAccountModel} from '../models/userAccountModel';
import {Router} from '@angular/router-deprecated';
import {RouteParams} from '@angular/router-deprecated';

@Component({
    selector: 'cart',
    templateUrl: './views/shoppingCart.html',
    providers: [ApiService, CustomerService],
    directives: [CartItemComponent]
})

export class ShoppingCartComponent implements OnInit {

    token: TokenModel = { token: "" };
    cartProducts: CartItem[];
    order: Order;
    address: { city: string, state: string } =
    {
        city: "", state: ""
    };

    constructor(private _router: Router, 
        private _routeParams: RouteParams,
        private _customerService: CustomerService,
        private _apiService: ApiService)
    {
        this.token.token = localStorage.getItem('jwt');
    }

    ngOnInit(): any {
        console.log('shopping cart init');

        this.GetCartItems();
        this.GetOrderTotals();
        this.GetShipAddress();
    }

    GetCartItems() {
        this._customerService.getCartItems(this.token, 'cart')
            .then((cartItems: CartItem[]) => {
                this.cartProducts = cartItems;
                console.log('aya shopping cart items: ');
                console.log(this.cartProducts);
            })
            .catch((error: string) => {
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
    }

    GetOrderTotals() {
        this._customerService.getOrderTotals(this.token, 'cart')
            .then((orders: Order[]) => {
                this.order = orders[0];
                console.log('aya order totals: ');
                console.log(this.order);
            })
            .catch((error: string) => {
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
    }

    GetShipAddress() {
        this._customerService.getUser(this.token)
            .then((userAccount: UserAccountModel) => {
                this.address.city = userAccount.City + ', ';
                this.address.state = userAccount.State;
            })
            .catch((error: string) => {
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
    }

    OnSelectProduct(productID) {
        console.log('selected product ID: ' + productID);
        this._router.navigate(['Product', { productID: productID }]);
    }
}
