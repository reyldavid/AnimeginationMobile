import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'register',
    templateUrl: './views/register.html'
})

export class RegisterComponent implements OnInit {

    ngOnInit(): any {
        console.log('register init');
    }
}
