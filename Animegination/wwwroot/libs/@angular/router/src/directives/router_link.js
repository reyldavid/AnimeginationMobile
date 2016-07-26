"use strict";
var core_1 = require('@angular/core');
var router_1 = require('../router');
var segments_1 = require('../segments');
var lang_1 = require('../facade/lang');
var async_1 = require('../facade/async');
var RouterLink = (function () {
    function RouterLink(_routeSegment, _router) {
        var _this = this;
        this._routeSegment = _routeSegment;
        this._router = _router;
        this._changes = [];
        this.isActive = false;
        this._subscription =
            async_1.ObservableWrapper.subscribe(_router.changes, function (_) { _this._updateTargetUrlAndHref(); });
    }
    RouterLink.prototype.ngOnDestroy = function () { async_1.ObservableWrapper.dispose(this._subscription); };
    Object.defineProperty(RouterLink.prototype, "routerLink", {
        set: function (data) {
            this._changes = data;
            this._updateTargetUrlAndHref();
        },
        enumerable: true,
        configurable: true
    });
    RouterLink.prototype.onClick = function () {
        if (!lang_1.isString(this.target) || this.target == '_self') {
            this._router.navigate(this._changes, this._routeSegment);
            return false;
        }
        return true;
    };
    RouterLink.prototype._updateTargetUrlAndHref = function () {
        var tree = this._router.createUrlTree(this._changes, this._routeSegment);
        if (lang_1.isPresent(tree)) {
            this.href = this._router.serializeUrl(tree);
            this.isActive = this._router.urlTree.contains(tree);
        }
        else {
            this.isActive = false;
        }
    };
    RouterLink.decorators = [
        { type: core_1.Directive, args: [{ selector: '[routerLink]' },] },
    ];
    RouterLink.ctorParameters = [
        { type: segments_1.RouteSegment, decorators: [{ type: core_1.Optional },] },
        { type: router_1.Router, },
    ];
    RouterLink.propDecorators = {
        'target': [{ type: core_1.Input },],
        'href': [{ type: core_1.HostBinding },],
        'isActive': [{ type: core_1.HostBinding, args: ['class.router-link-active',] },],
        'routerLink': [{ type: core_1.Input },],
        'onClick': [{ type: core_1.HostListener, args: ["click",] },],
    };
    return RouterLink;
}());
exports.RouterLink = RouterLink;
//# sourceMappingURL=router_link.js.map