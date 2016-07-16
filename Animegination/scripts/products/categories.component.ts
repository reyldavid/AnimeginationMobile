import {Component} from 'angular2/core';
import {Category} from '../models/category';
import {ProductService} from '../services/product.service';
import {ApiService} from '../services/anime.api.service';
import {OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
    selector: 'categories',
    templateUrl: './views/categories.html',
    providers: [ProductService, ApiService]
})

export class CategoriesComponent implements OnInit {

    public categories: Category[];

    constructor(private _productService: ProductService,
        private _route: Router, private _routeParams: RouteParams) {
    }

    OnSelectCategory(category: Category) {
        console.log('category: ' + category.Description);
        this._route.navigate(['CategoryList', { categoryID: category.CategoryID }]);
    }

    GetCategories() {
        this._productService.getCategories()
            .then((categories: Category[]) => this.categories = categories);
    }

    ngOnInit(): any {
        console.log('categories init');
        this.GetCategories();
    }
}