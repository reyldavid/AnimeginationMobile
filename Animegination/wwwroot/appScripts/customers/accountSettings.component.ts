import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'settings',
    templateUrl: './views/accountSettings.html'
})

export class AccountSettingsComponent implements OnInit {

    ngOnInit(): any {
        console.log('account settings init');
    }
}
