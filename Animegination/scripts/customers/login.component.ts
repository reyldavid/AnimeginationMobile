import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'login',
    templateUrl: './views/login.html'
})

export class LoginComponent implements OnInit {

    ngOnInit(): any {
        console.log('login init');
    }
}
