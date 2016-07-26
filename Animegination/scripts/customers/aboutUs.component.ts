import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './views/aboutUs.html'
})

export class AboutUsComponent implements OnInit {

    ngOnInit(): any {
        console.log('about init');
        console.log('about href ' + window.location.href);
        console.log('about path ' + window.location.pathname);
    }
}

