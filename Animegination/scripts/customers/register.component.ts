import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { CustomerService } from '../services/customer.service';
import { ApiService } from '../services/anime.api.service';
import { contentHeaders } from '../services/headers';
import { TokenModel } from '../models/tokenmodel';
import { RegisterModel } from '../models/registermodel';
import { ControlGroup } from '@angular/common';
import { Control } from '@angular/common';
import { FormBuilder } from '@angular/common';
import { Validators } from '@angular/common';

@Component({
    selector: 'register',
    templateUrl: './views/register.html',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [CustomerService, ApiService]
})

export class RegisterComponent implements OnInit {

    constructor(public router: Router,
        public http: Http,
        public _customerService: CustomerService,
        private _formBuilder: FormBuilder) { }

    registerForm: ControlGroup;

    token: TokenModel = { "token": "" };
    registerInput: RegisterModel = {
        UserId: "",
        Username: "",
        RoleName: "",
        Password: "",
        ConfirmPassword: "",
        FirstName: "",
        LastName: "",
        Address: "",
        City: "",
        StateId: 8, // CA, by default
        ZipCode: "",
        CellPhone: "",
        HomePhone: "",
        Email: "",
        CreditCardType: "",
        CreditCardNumber: "",
        CreditCardExpiration: ""
    };
    isFailedRegistration: boolean = false;

    Register() {
        this.isFailedRegistration = false;

        this.registerInput.Username = this.username.value;
        this.registerInput.FirstName = this.firstname.value;
        this.registerInput.LastName = this.lastname.value;
        this.registerInput.Email = this.email.value;
        this.registerInput.Password = this.password.value;
        this.registerInput.ConfirmPassword = this.confirmPassword.value;

        this._customerService.register(this.registerInput)
            .then((token: TokenModel) => {
                this.token = token;
                localStorage.setItem('jwt', this.token.token);
                this.router.parent.navigateByUrl('/account');
            })
            .catch((error: string) => {
                this.isFailedRegistration = true;
                console.log('register error: ' + error);
            });
    }

    username: Control;
    firstname: Control;
    lastname: Control;
    email: Control;
    password: Control;
    confirmPassword: Control;

    ngOnInit(): any {
        console.log('register init');

        this.username = new Control('', Validators.compose([Validators.required, Validators.minLength(5)]));
        this.firstname = new Control('', Validators.required);
        this.lastname = new Control('', Validators.required);
        this.email = new Control('', Validators.compose([Validators.required,
            Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')]));
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));
        this.confirmPassword = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));

        //this.registerForm = this._formBuilder.group({
        //    username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        //    firstname: ['', Validators.required],
        //    lastname: ['', Validators.required],
        //    email: ['', Validators.compose([Validators.required,
        //        Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')])],
        //    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        //    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        //});

        this.registerForm = this._formBuilder.group({
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        });
    }
}
