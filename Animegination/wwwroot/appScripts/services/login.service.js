"use strict";
var core_1 = require('@angular/core');
var LoginService = (function () {
    function LoginService() {
        this.userLoggedIn = new core_1.EventEmitter();
    }
    LoginService.prototype.login = function (firstName) {
        console.log('aya firstName emit: ' + firstName);
        this.userLoggedIn.emit(firstName);
    };
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map