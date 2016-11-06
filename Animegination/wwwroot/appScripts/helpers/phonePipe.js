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
var phonePipe = (function () {
    function phonePipe() {
    }
    phonePipe.prototype.transform = function (val) {
        var viewVal = val.trim().replace(/^\+/, '');
        viewVal = viewVal.replace(/[^0-9]/g, '').slice(0, 10);
        var area, number;
        //if (viewVal.match(/[^0-9]/)) {
        //    return viewVal;
        //}
        switch (viewVal.length) {
            case 1:
            case 2:
            case 3:
                area = viewVal;
                break;
            default:
                area = viewVal.slice(0, 3);
                number = viewVal.slice(3);
        }
        if (number) {
            if (number.length > 3) {
                number = number.slice(0, 3) + '-' + number.slice(3, 7);
            }
            else {
                number = number;
            }
            return ("(" + area + ") " + number).trim().slice(0, 13);
        }
        else {
            return "(" + area;
        }
    };
    phonePipe = __decorate([
        core_1.Pipe({
            name: 'phone'
        }), 
        __metadata('design:paramtypes', [])
    ], phonePipe);
    return phonePipe;
}());
exports.phonePipe = phonePipe;
//# sourceMappingURL=phonePipe.js.map