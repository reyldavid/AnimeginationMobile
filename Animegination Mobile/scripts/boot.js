"use strict";
///<reference path="../typings/browser.d.ts"/>
/////<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_1 = require('./app');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var common_2 = require('@angular/common');
var common_3 = require('@angular/common');
var angular2_jwt_1 = require('angular2-jwt');
var globals_1 = require('./services/globals');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
    common_1.FORM_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    globals_1.Globals,
    core_1.provide(common_2.APP_BASE_HREF, { useValue: '/' }),
    core_1.provide(common_3.LocationStrategy, { useClass: common_3.HashLocationStrategy }),
    core_1.provide(angular2_jwt_1.AuthHttp, {
        useFactory: function (http) {
            return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
                tokenName: 'jwt'
            }), http);
        },
        deps: [http_1.Http]
    })
]);
//# sourceMappingURL=boot.js.map