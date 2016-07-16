import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'accountInfo',
    templateUrl: './views/accountInfo.html'
})

export class AccountInfoComponent implements OnInit {

    ngOnInit(): any {
        console.log('account info init');
    }
}
