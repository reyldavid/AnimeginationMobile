import {Component} from '@angular/core';
import {ApiProduct} from '../models/product';
import {ProductService} from '../services/product.service';
import {ApiService} from '../services/anime.api.service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {RouteParams} from '@angular/router-deprecated';

@Component({
    selector: 'searchResults',
    templateUrl: './views/searchResults.html',
    providers: [ProductService, ApiService]
})

export class SearchResultsComponent implements OnInit {
    searchText: string;
    public apiProducts: ApiProduct[];

    constructor(private _productService: ProductService,
        private _router: Router,
        private _routeParams: RouteParams) { }

    OnSelectProduct(product: ApiProduct) {
        console.log('selected product ID: ' + product.ProductID);
        this._router.navigate(['Product', { productID: product.ProductID }]);
    }

    GetSearchResults(searchText: string) {
        this._productService.getSearchResults(
            searchText).then((apiProducts: ApiProduct[]) => this.apiProducts = apiProducts);
    }

    ngOnInit(): any {
        console.log('search results init');
        this.searchText = this._routeParams.get('searchText');
        this.GetSearchResults(this.searchText);
    }
}
