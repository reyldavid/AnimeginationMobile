import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'orders',
    templateUrl: './views/orders.html'
})

export class OrdersComponent implements OnInit {

    ngOnInit(): any {
        console.log('orders init');
    }
}