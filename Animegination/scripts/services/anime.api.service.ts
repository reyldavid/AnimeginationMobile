import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ApiProduct} from '../models/product';
import {ListType} from '../models/listtype';
import {Category} from '../models/category';
import 'rxjs/Rx';
//import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    constructor (private _http: Http) {
    }

    private getHeaders() {
        var headers = new Headers();

        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");

        return headers;
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
       let body: any = res.json();
       return body || {};
    }

    private extractFirst(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        let body: any = res.json()[0];
        return body || {};
    }

    handleError(error: any) {
        let errMsg = error.message || 'Server error';
        console.log('error: ');
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

    getAnimeListType(listTypeID: number): Observable<ListType> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/listtypes/" + listTypeID,
            { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getAnimeProduct(productID: string): Observable<ApiProduct> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/products/" + productID,
            { headers: this.getHeaders() })
            .map(this.extractFirst)
            .catch(this.handleError);

        return result;
    }

    getAnimeProducts(): Observable<ApiProduct[]> {
        
        var result = this._http.get("https://animegination2.azurewebsites.net/api/products",
            { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getAnimeListing(listTypeID: number): Observable<ApiProduct[]> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/Listings/" + listTypeID,
            { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getDummyData(): Observable<ApiProduct> {
        return this._http.get("../appScripts/products/dummy.product.json")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getSimilarsListing(productID: number): Observable<ApiProduct[]> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/similars/" + productID,
            { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getSearchResults(searchText: string): Observable<ApiProduct[]> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/search/" + searchText,
            { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getCategory(categoryID: string): Observable<Category> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/categories/" + categoryID,
            { headers: this.getHeaders() })
            .map(this.extractFirst)
            .catch(this.handleError);

        return result;
    }

    getCategories(): Observable<Category[]> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/categories",
            { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getCategoryList(categoryID: string): Observable<ApiProduct[]> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/categorylist/" + categoryID,
            { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }
}