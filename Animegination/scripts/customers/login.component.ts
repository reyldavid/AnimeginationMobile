import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { CustomerService } from '../services/customer.service';
import { ApiService } from '../services/anime.api.service';
import { contentHeaders } from '../services/headers';
import { TokenModel } from '../models/tokenmodel';
import { LoginModel } from '../models/loginmodel';

//let styles = require('./login.css');
//let template = require('./views/login.html');

@Component({
    selector: 'login',
    templateUrl: './views/login.html',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [CustomerService, ApiService]
//    ,
    //template: template,
    //styles: [styles]
})

export class LoginComponent implements OnInit {

    constructor(public router: Router,
        public http: Http,
        public _customerService: CustomerService) { }

    token: TokenModel = { "token": "" };
    loginInput: LoginModel = { username: "", password: "" };
    isInvalidAccount: boolean = false;

    Login() {
        //event.preventDefault();
        this.isInvalidAccount = false;
        this._customerService.userLogin(this.loginInput.username, this.loginInput.password)
            .then((token: TokenModel) => {
                this.token = token;
                localStorage.setItem('jwt', this.token.token);

                this.router.parent.navigateByUrl('/account');
            })
            .catch((error: string) => {
                switch (error.toString()) {
                    case "404":
                        this.isInvalidAccount = true;
                        break;
                    default:
                        console.log('user login error: ' + error);
                        break;
                }
            });

        //this.http.post( this._globals.localHostUrl + 'sessions/create',
        //    body, { headers: contentHeaders })
        //    .subscribe(
        //    response => {
        //        localStorage.setItem('jwt', response.json().id_token);
        //        this.router.parent.navigateByUrl('/account');
        //    },
        //    error => {
        //        alert(error.text());
        //        console.log('login error: ' + error.text());
        //    }
        //);
    }

    //signup(event) {
    //    event.preventDefault();
    //    this.router.parent.navigateByUrl('/register');
    //}

    ngOnInit(): any {
        console.log('login init');
    }
}
