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
import { AddressModel } from '../models/addressModel';
import { UserAccountModel } from '../models/userAccountModel';
import { UserAccountReturnModel } from '../models/userAccountReturnModel';
import { StatesDropDownComponent } from '../helpers/statesDropDown';

@Component({
    selector: 'address',
    templateUrl: './views/addressSettings.html',
    providers: [CustomerService, ApiService],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink, StatesDropDownComponent],
})

export class AddressSettingsComponent implements OnInit {

    token: TokenModel = { token: "" };
    isSuccess: boolean;
    isFailure: boolean;
    addressForm: ControlGroup;
    currentState: string;

    addressInput: UserAccountModel = {
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
        private _formBuilder: FormBuilder) {
        this.token.token = localStorage.getItem('jwt');
    }

    ngOnInit(): any {
        console.log('address settings init');

        this._customerService.getUser(this.token)
            .then((userAccount: UserAccountModel) => {
                this.addressInput = userAccount;
                this.currentState = userAccount.State;
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
                        console.log('address settings get user error: ' + error);
                        break;
                }
            });
    }

    selectState(arg) {
        this.addressInput.StateId = arg;
    }

    Update() {
        this.isSuccess = null;
        this.isFailure = null;

        this._customerService.updateUserAccountAddress(this.token, this.addressInput)
            .then((userAccount: UserAccountReturnModel) => {
                this.addressInput.Address = userAccount.streetAddress;
                this.addressInput.City = userAccount.city;
                this.addressInput.State = userAccount.state;
                this.addressInput.ZipCode = userAccount.zipCode;
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
                        console.log('address settings update account error: ' + error);
                        this.isFailure = true;
                        break;
                }
            });
    }
}
