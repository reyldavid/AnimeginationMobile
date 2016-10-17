import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ApiProduct} from '../models/product';
import {ListType} from '../models/listtype';
import {Category} from '../models/category';
import {ClaimModel} from '../models/claimmodel';
import {TokenModel} from '../models/tokenmodel';
import {RegisterModel} from '../models/registermodel';
import {LoginModel} from '../models/loginmodel';
import {UserReturnModel} from '../models/userReturnModel';
import {UserAccountModel} from '../models/userAccountModel';
import {contentHeaders} from '../services/headers';
import 'rxjs/Rx';
//import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    constructor (private _http: Http) {
    }
    claim: ClaimModel;
    token: TokenModel;

    private getHeaders() {
        var headers = new Headers();

        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        headers.append("AnimeApiClientKey", "AA46C009-49F8-4411-A4D6-131D4BA6D91B");

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
        let errMsg = (error.message) ? error.message : 
            error.status ? error.status :
                error.statusText ? error.statusText :
                    error.ok ? error.ok :
                        'Server error';
        console.log('api error: ' + errMsg);
        return Observable.throw(errMsg);
    }

    getAnimeListType(listTypeID: number): Observable<ListType> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/listtypes/" + listTypeID,
            { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getAnimeProduct(productID: string): Observable<ApiProduct> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/products/" + productID,
            { headers: contentHeaders })
            .map(this.extractFirst)
            .catch(this.handleError);

        return result;
    }

    getAnimeProducts(): Observable<ApiProduct[]> {
        
        var result = this._http.get("https://animegination2.azurewebsites.net/api/products",
            { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getAnimeListing(listTypeID: number): Observable<ApiProduct[]> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/Listings/" + listTypeID,
            { headers: contentHeaders })
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
            { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getSearchResults(searchText: string): Observable<ApiProduct[]> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/search/" + searchText,
            { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getCategory(categoryID: string): Observable<Category> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/categories/" + categoryID,
            { headers: contentHeaders })
            .map(this.extractFirst)
            .catch(this.handleError);

        return result;
    }

    getCategories(): Observable<Category[]> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/categories",
            { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getCategoryList(categoryID: string): Observable<ApiProduct[]> {

        var result = this._http.get("https://animegination2.azurewebsites.net/api/categorylist/" + categoryID,
            { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    userLogin(username: string, password: string): Observable<TokenModel> {
        let body = JSON.stringify({ username, password });

        var result = this._http.post("https://animegination2.azurewebsites.net/api/accounts/login",
            body, { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    createUser(registerModel: RegisterModel): Observable<UserReturnModel> {
        let body = JSON.stringify(registerModel);

        var result = this._http.post("https://animegination2.azurewebsites.net/api/accounts/create",
            body, { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    createUserAccount(registerModel: RegisterModel): Observable<TokenModel> {
        let body = JSON.stringify(registerModel);

        var result = this._http.post("https://animegination2.azurewebsites.net/api/useraccounts",
            body, { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    getUserAccount(token: TokenModel): Observable<UserAccountModel> {
        contentHeaders.set("JWTToken", token.token);

        //var result = this._http.get("http://localhost:65164/api/useraccounts/",
        var result = this._http.get("https://animegination2.azurewebsites.net/api/useraccounts/",
            { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }

    putUserAccount(token: TokenModel, userAccount: UserAccountModel): Observable<UserAccountModel> {

        contentHeaders.set("JWTToken", token.token);
        let body = JSON.stringify(userAccount);

        //var result = this._http.put("http://localhost:65164/api/useraccounts/names",
        var result = this._http.put("https://animegination2.azurewebsites.net/api/useraccounts/names",
            body, { headers: contentHeaders })
            .map(this.extractData)
            .catch(this.handleError);

        return result;
    }
}