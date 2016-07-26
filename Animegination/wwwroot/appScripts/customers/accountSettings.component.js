"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AccountSettingsComponent = (function () {
    function AccountSettingsComponent() {
    }
    AccountSettingsComponent.prototype.ngOnInit = function () {
        console.log('account settings init');
    };
    AccountSettingsComponent = __decorate([
        core_1.Component({
            selector: 'settings',
            templateUrl: './views/accountSettings.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());
exports.AccountSettingsComponent = AccountSettingsComponent;
//# sourceMappingURL=accountSettings.component.js.map