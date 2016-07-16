///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from 'angular2/router';

bootstrap(AppComponent,
    [ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(APP_BASE_HREF, { useValue: '/' }),
        provide(LocationStrategy, { useClass: HashLocationStrategy })
    ]);
