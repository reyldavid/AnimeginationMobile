import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'newsfeed',
    templateUrl: './views/newsFeed.html'
})

export class NewsFeedComponent implements OnInit {

    ngOnInit(): any {
        console.log('news feed init');
    }
}