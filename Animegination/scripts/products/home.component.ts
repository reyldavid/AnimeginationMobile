import {Component} from '@angular/core';
import {ProductsSliceComponent} from './productsSlice.component';
import {OnInit} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'home',
    directives: [ProductsSliceComponent],
    templateUrl: './views/home.html'
})

export class HomeComponent implements OnInit {
    featuredTitles: number = 1;
    newItems: number = 2;
    topSellers: number = 3;
    bargainBin: number = 4;
    closeOut: number = 5;
    liveAction: number = 6;
    recommendations: number = 7;

    ngOnInit(): any {
        console.log('home init');
        console.log('home href ' + window.location.href);
        console.log('home path ' + window.location.pathname);
    }
}