import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router-deprecated';
import { AuthHttp } from 'angular2-jwt';
import { ApiService } from '../services/anime.api.service';
import { CustomerService } from '../services/customer.service';
import { TokenModel } from '../models/tokenModel';
import { UserAccountModel } from '../models/userAccountModel';
import { Globals } from '../services/globals';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'accountInfo',
    templateUrl: './views/accountInfo.html',
    directives: [CORE_DIRECTIVES],
    providers: [CustomerService, ApiService]
})

export class AccountInfoComponent implements OnInit {

    // Here we define this component's instance variables
    // They're accessible from the template
    token: TokenModel = { token: "" };
    userAccount: UserAccountModel = {
        UserId: "", UserName: "",
        FirstName: "", LastName: "",
        Address: "", City: "", State: "", StateId: 0, ZipCode: "",
        CellPhone: "", HomePhone: "",
        Email: "", Created: "",
        CreditCardType: "", CreditCardNumber: "", CreditCardExpiration: ""
    };
    response: string;
    recentPurchases: string;
    missingAddressBook: string;
    incompleteAddressBook: string;
    userFullName: string;
    userEmail: string;
    userPhone: string;

    constructor(public router: Router, public http: Http,
        public authHttp: AuthHttp,
        private _customerService: CustomerService,
        private _globals: Globals,
        private _loginService: LoginService)
    {
        console.log('account info construct');
        // We get the JWT from localStorage
        this.token.token = localStorage.getItem('jwt');
        // We also store the decoded JSON from this JWT
        //this.decodedJwt = this.jwt && (<any>window).jwt_decode(this.jwt);
    }

    logout() {
        // Method to be called when the user wants to logout
        // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
        localStorage.removeItem('jwt');
        this.router.parent.navigateByUrl('/login');
    }

    callAnonymousApi() {
//        this._callApi('Anonymous', this._globals.localHostUrl + 'random-quote');
        console.log('Call Anonymous API');
    }

    callSecuredApi() {
        // We call the secured API
//        this._callApi('Secured', this._globals.localHostUrl + 'protected/random-quote');
        console.log('Call Secured API');
    }

    _callApi(type, url) {
        this.response = null;
        if (type === 'Anonymous') {
            // For non-protected routes, just use Http
            this.http.get(url)
                .subscribe(
                response => this.response = response.text(),
                error => this.response = error.text()
                );
        }
        if (type === 'Secured') {
            // For protected routes, use AuthHttp
            this.authHttp.get(url)
                .subscribe(
                response => this.response = response.text(),
                error => this.response = error.text()
                );
        }
    }

    ngOnInit(): any {
        console.log('account info init');
        this.recentPurchases = 'You Don\'t Have Any Purchases In Your Account Right Now';
        this.missingAddressBook = 'We have no default address on file for this account';
        this.incompleteAddressBook = "The default address on file is incomplete";
        //this.userFullName = 'Aya Ueto';
        //this.userEmail = 'ayaueto@anime.com';
        //this.userPhone = '(925)984-2849';

        this._customerService.getUser(this.token)
            .then((userAccount: UserAccountModel) => {
                this.userAccount = userAccount;

                console.log('aya login firstName: ' + userAccount.FirstName);

                this._loginService.login(userAccount.FirstName);
            })
            .catch((error: string) => {
                switch (error.toString()) {
                    case "401":
                        //this.unauthorized = true;
                        break;
                    case "404":
                        //this.notFound = true;
                        break;
                    default:
                        console.log('account info get user error: ' + error);
                        break;
                }
            });
    }

    goOrders() {
    }

    goProfile() {
        this.router.parent.navigateByUrl('/profile');
    }

    goAddress() {
        this.router.parent.navigateByUrl('/address');
    }
}
