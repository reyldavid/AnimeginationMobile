//import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Component} from 'angular2/core';
import {ProductComponent} from './product.component';
//import {Product} from '../models/product';
import {ApiProduct} from '../models/product';
import {ProductService} from '../services/product.service';
import {ApiService} from '../services/anime.api.service';
import {OnInit} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
    selector: 'productsList',
    templateUrl: './views/productsList.html',
    directives: [ProductComponent],
    providers: [ProductService, ApiService],
    outputs: ['productSelected']
})

export class ProductsListComponent implements OnInit {
    //public products: Product[];
    public apiProducts: ApiProduct[];
    public currentProduct: ApiProduct = null;
    productSelected = new EventEmitter<ApiProduct>();

    constructor(private _productService: ProductService) { }

    //OnSelectProduct(product: Product) {
    //    this.currentProduct = product;
    //    this.productSelected.emit(product);
    //}

    OnSelectProduct(product: ApiProduct) {
        this.currentProduct = product;
        this.productSelected.emit(product);
    }

    GetProducts() {
        //this._productService.getProducts().then((products: Product[]) => this.products = products);
        this._productService.getApiProducts().then((apiProducts: ApiProduct[]) => this.apiProducts = apiProducts);
    }

    ngOnInit(): any {
        console.log('product list init');
        this.GetProducts();
    }
}