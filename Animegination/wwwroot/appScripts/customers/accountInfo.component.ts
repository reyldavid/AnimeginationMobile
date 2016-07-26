import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'accountInfo',
    templateUrl: './views/accountInfo.html'
})

export class AccountInfoComponent implements OnInit {

    ngOnInit(): any {
        console.log('account info init');
    }
}
