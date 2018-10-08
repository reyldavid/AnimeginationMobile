import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import {ApiProduct} from '../models/product';
import {CartItem} from '../models/cartItemModel';

@Component({
    selector: 'cartItem',
    templateUrl: './views/CartItem.html'
})

export class CartItemComponent implements OnInit {

    @Input()
    public product: CartItem;

    @Output()
    public selectItem: EventEmitter<number> = new EventEmitter();

    ngOnInit(): any {
        console.log('cart item init');
    }

    selectProduct(productID) {
        console.log('aya select: ' + productID);
        this.selectItem.emit(productID);
    }

    deleteProduct(productID) {
        console.log('aya delete: ' + productID);
    }

    wishProduct(productID) {
        console.log('aya wish list: ' + productID);
    }
}