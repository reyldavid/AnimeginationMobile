import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './views/login.html'
})

export class LoginComponent implements OnInit {

    ngOnInit(): any {
        console.log('login init');
    }
}
