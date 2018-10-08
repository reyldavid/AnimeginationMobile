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
var core_2 = require('@angular/core');
var anime_api_service_1 = require('../services/anime.api.service');
var customer_service_1 = require('../services/customer.service');
var StatesDropDownComponent = (function () {
    function StatesDropDownComponent(_customerService) {
        this._customerService = _customerService;
        this.select = new core_2.EventEmitter();
        console.log('states construct');
    }
    StatesDropDownComponent.prototype.selectItem = function (value) {
        this.select.emit(value);
    };
    StatesDropDownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._customerService.getStates().then(function (states) {
            _this.states = states;
        });
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], StatesDropDownComponent.prototype, "defaultState", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], StatesDropDownComponent.prototype, "select", void 0);
    StatesDropDownComponent = __decorate([
        core_1.Component({
            selector: 'states',
            //templateUrl: '../views/statesDropDown.html', 
            template: "<select (change)=\"selectItem($event.target.value)\" class=\"form-control\" id=\"state\">\n            <option *ngFor=\"#state of states\" value={{state.StateID}} [selected]=\"state.StateName == defaultState\">\n                {{state.StateName}}\n            </option>\n         </select>",
            providers: [customer_service_1.CustomerService, anime_api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], StatesDropDownComponent);
    return StatesDropDownComponent;
}());
exports.StatesDropDownComponent = StatesDropDownComponent;
//# sourceMappingURL=statesDropDown.js.map