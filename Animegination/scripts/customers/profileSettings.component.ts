import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { CustomerService } from '../services/customer.service';
import { ApiService } from '../services/anime.api.service';
import { contentHeaders } from '../services/headers';
import { TokenModel } from '../models/tokenmodel';
import { ControlGroup } from '@angular/common';
import { Control } from '@angular/common';
import { FormBuilder } from '@angular/common';
import { Validators } from '@angular/common';
import { ProfileSettings } from '../models/profileSettingsModel';
import { UserAccountModel } from '../models/userAccountModel';
import { UserAccountReturnModel } from '../models/userAccountReturnModel';
import { phonePipe } from '../helpers/phonePipe';

@Component({
    selector: 'profile',
    templateUrl: './views/profileSettings.html',
    providers: [CustomerService, ApiService],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink],
    pipes: [phonePipe]
})

export class ProfileSettingsComponent implements OnInit {

    token: TokenModel = { token: "" };
    isSuccess: boolean;
    isFailure: boolean;
    profileForm: ControlGroup;

    profileInput: UserAccountModel = {
        UserId: "", UserName: "",
        FirstName: "", LastName: "",
        Address: "", City: "", State: "", StateId: 0, ZipCode: "",
        CellPhone: "", HomePhone: "",
        Email: "", Created: "",
        CreditCardType: "", CreditCardNumber: "", CreditCardExpiration: ""
    };

    constructor(public router: Router,
        public http: Http,
        private _customerService: CustomerService,
        private _apiService: ApiService,
        private _formBuilder: FormBuilder)
    {
        this.token.token = localStorage.getItem('jwt');
    }

    ngOnInit(): any {
        console.log('profile settings init');

        this._customerService.getUser(this.token)
            .then((userAccount: UserAccountModel) => {
                this.profileInput = userAccount;
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
                        console.log('profile settings get user error: ' + error);
                        break;
                }
            });
    }

    Update() {
        this.isSuccess = null;
        this.isFailure = null;

        this._customerService.updateUserAccountNames(this.token, this.profileInput)
            .then((userAccount: UserAccountReturnModel) => {
                this.profileInput.FirstName = userAccount.firstName;
                this.profileInput.LastName = userAccount.lastName;
                this.profileInput.Email = userAccount.emailAddress;
                this.profileInput.CellPhone = userAccount.cellPhoneNumber;
                this.profileInput.HomePhone = userAccount.homePhoneNumber;
                this.isSuccess = true;
            })
            .catch((error: string) => {
                switch (error.toString()) {
                    case "401":
                        //this.unauthorized = true;
                        //break;
                    case "404":
                        //this.notFound = true;
                        //break;
                    default:
                        console.log('profile settings update account error: ' + error);
                        this.isFailure = true;
                        break;
                }
            });
    }
}
