import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'register',
    templateUrl: './views/register.html'
})

export class RegisterComponent implements OnInit {

    ngOnInit(): any {
        console.log('register init');
    }
}
