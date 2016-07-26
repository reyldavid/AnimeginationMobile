import {Component} from '@angular/core';
import {ApiProduct} from '../models/product';
import {ProductService} from '../services/product.service';
import {ApiService} from '../services/anime.api.service';
import {OnInit} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {OnChanges} from '@angular/core';

@Component({
    selector: 'similarsList',
    templateUrl: './views/similarsList.html',
    providers: [ProductService, ApiService],
    inputs: ['productID'],
    outputs: ['productSelected']
})

export class SimilarsListComponent implements OnInit, OnChanges {
    productID: number;
    similarsTitle: string;
    public apiProducts: ApiProduct[];
    public currentProduct: ApiProduct = null;
    productSelected = new EventEmitter<ApiProduct>();

    constructor(private _productService: ProductService, private _router: Router) { }

    OnSelectProduct(product: ApiProduct) {
        //this.currentProduct = product;
        //this.productSelected.emit(product);
        console.log('selected product ID: ' + product.ProductID);
        this._router.navigate(['Product', { productID: product.ProductID }]);
    }

    GetSimilarsList(productID: number) {
        this._productService.getApiSimilars(
            productID).then((apiProducts: ApiProduct[]) => this.apiProducts = apiProducts);
    }

    ngOnInit(): any {
        console.log('similars list init');
    }

    ngOnChanges(changes) {
        for (let propname in changes) {
            let chng = changes[propname];
            let cur = chng.currentValue;
            let prev = chng.previousValue;

            if (propname == "productID" && !chng.isFirstChange()) {
                this.similarsTitle = 'Customers Who Bought This Item Also Bought';
                this.GetSimilarsList(this.productID);
            }
        }
    }
}
