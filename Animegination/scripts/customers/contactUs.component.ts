import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'contact',
    templateUrl: './views/contactUs.html'
})

export class ContactUsComponent implements OnInit {

    ngOnInit(): any {
        console.log('contact us init');
    }
}

