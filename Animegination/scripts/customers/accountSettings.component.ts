import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'settings',
    templateUrl: './views/accountSettings.html'
})

export class AccountSettingsComponent implements OnInit {

    ngOnInit(): any {
        console.log('account settings init');
    }
}
