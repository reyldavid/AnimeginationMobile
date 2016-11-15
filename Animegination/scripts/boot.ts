///<reference path="../typings/browser.d.ts"/>
/////<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';
import {FORM_PROVIDERS} from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {Globals} from './services/globals';
//import 'intl/index';
//import 'intl/locale-data/jsonp/en.js';

bootstrap(
    AppComponent,
    [
        FORM_PROVIDERS,
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        Globals,
        provide(APP_BASE_HREF, { useValue: '/' }),
        provide(LocationStrategy, { useClass: HashLocationStrategy }),
        provide(AuthHttp, {
            useFactory: (http) => {
                return new AuthHttp(new AuthConfig({
                    tokenName: 'jwt'
                }), http);
            },
            deps: [Http]
        })
    ]);
