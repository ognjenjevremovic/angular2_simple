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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../core/user.service");
var UserDetailsComponent = (function () {
    function UserDetailsComponent(_route, _userService) {
        this._route = _route;
        this._userService = _userService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = +this._route.snapshot.params['id'];
        this._userService.getUserById(userId).subscribe(function (user) { return _this.user = user; });
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user-details.component.html',
        styleUrls: ['user-details.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_service_1.UserService])
], UserDetailsComponent);
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=user-details.component.js.map