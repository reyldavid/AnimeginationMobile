"use strict";
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var app_1 = require('./app');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var router_2 = require('angular2/router');
browser_1.bootstrap(app_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
    core_1.provide(router_2.APP_BASE_HREF, { useValue: '/' })
]);
//# sourceMappingURL=boot.js.map