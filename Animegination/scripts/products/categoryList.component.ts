import {Component} from 'angular2/core';
import {Category} from '../models/category';
import {ApiProduct} from '../models/product';
import {ProductService} from '../services/product.service';
import {ApiService} from '../services/anime.api.service';
import {OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
    selector: 'categoryList',
    templateUrl: './views/categoryList.html',
    providers: [ProductService, ApiService]
})

export class CategoryListComponent implements OnInit {
    cateogryID: string;
    public category: Category = { CategoryID: 0, CategoryName: "", Description: "", ImageFile: "" };
    public apiProducts: ApiProduct[];

    constructor(private _productService: ProductService,
        private _router: Router,
        private _routeParams: RouteParams) { }

    OnSelectProduct(product: ApiProduct) {
        this._router.navigate(['Product', { productID: product.ProductID }]);
    }

    GetCategoryList(categoryID: string) {
        this._productService.getCategoryList(
            categoryID).then((apiProducts: ApiProduct[]) => this.apiProducts = apiProducts);
    }

    GetCategory(categoryID: string) {
        this._productService.getCategory(
            categoryID).then((category: Category) => this.category = category);
    }

    ngOnInit(): any {
        console.log('category list init');
        this.cateogryID = this._routeParams.get('categoryID');
        this.GetCategoryList(this.cateogryID);
        this.GetCategory(this.cateogryID);
    }
}
