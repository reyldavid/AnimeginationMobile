"use strict";
///<reference path="../typings/browser.d.ts"/>
/////<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_1 = require('./app');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('angular2/router');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' }),
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=boot.js.map