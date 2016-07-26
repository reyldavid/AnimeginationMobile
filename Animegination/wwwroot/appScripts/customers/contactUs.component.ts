import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './views/contactUs.html'
})

export class ContactUsComponent implements OnInit {

    ngOnInit(): any {
        console.log('contact us init');
    }
}

