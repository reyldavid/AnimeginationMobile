import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router-deprecated';
import { AuthHttp } from 'angular2-jwt';

@Component({
    selector: 'accountInfo',
    templateUrl: './views/accountInfo.html',
    directives: [CORE_DIRECTIVES]
})

export class AccountInfoComponent implements OnInit {

    // Here we define this component's instance variables
    // They're accessible from the template
    jwt: string;
    decodedJwt: string;
    response: string;
    api: string;

    constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
        console.log('account info construct');
        // We get the JWT from localStorage
        this.jwt = localStorage.getItem('jwt');
        // We also store the decoded JSON from this JWT
        this.decodedJwt = this.jwt;
        //this.decodedJwt = this.jwt && (<any>window).jwt_decode(this.jwt);
    }

    logout() {
        // Method to be called when the user wants to logout
        // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
        localStorage.removeItem('jwt');
        this.router.parent.navigateByUrl('/login');
    }

    callAnonymousApi() {
//        this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
        console.log('Call Anonymous API');
    }

    callSecuredApi() {
        // We call the secured API
//        this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
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
    }
}
