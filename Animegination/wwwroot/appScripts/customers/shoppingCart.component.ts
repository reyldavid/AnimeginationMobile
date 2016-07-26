import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'cart',
    templateUrl: './views/shoppingCart.html'
})

export class ShoppingCartComponent implements OnInit {

    ngOnInit(): any {
        console.log('shopping cart init');
    }
}