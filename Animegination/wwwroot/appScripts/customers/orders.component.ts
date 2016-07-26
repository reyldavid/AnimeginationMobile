import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'orders',
    templateUrl: './views/orders.html'
})

export class OrdersComponent implements OnInit {

    ngOnInit(): any {
        console.log('orders init');
    }
}