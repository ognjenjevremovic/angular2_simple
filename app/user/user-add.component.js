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
var AddUserComponent = (function () {
    function AddUserComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.resetUser();
    };
    AddUserComponent.prototype.resetUser = function () {
        this.user = {
            name: {
                first: '',
                last: ''
            },
            date_joined: '',
            avatar: '',
            email: '',
            location: {
                city: '',
                state: ''
            },
            bio: ''
        };
    };
    AddUserComponent.prototype.addUser = function () {
        var _this = this;
        this._userService.addUser(this.user)
            .subscribe(function (user) {
            _this._router.navigate(['/users']);
        });
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user-add.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=user-add.component.js.map