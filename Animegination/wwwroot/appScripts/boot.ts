///<reference path="../typings/browser.d.ts"/>
/////<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from 'angular2/router';

bootstrap(AppComponent,
    [ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(APP_BASE_HREF, { useValue: '/' }),
        provide(LocationStrategy, { useClass: HashLocationStrategy })
    ]);
