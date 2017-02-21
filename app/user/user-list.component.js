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
var user_service_1 = require("../core/user.service");
var UserListComponent = (function () {
    function UserListComponent(_userService) {
        this._userService = _userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    UserListComponent.prototype.removeUser = function (event, userId) {
        var _this = this;
        event.stopPropagation();
        this._userService.removeUserById(userId)
            .subscribe(function (user) {
            var userIndex = _this.users.findIndex(function (user) { return user._id === userId; });
            _this.users.splice(userIndex, 1);
        }, function (error) { return console.log("Error occured!"); });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user-list.component.html',
        styleUrls: ['user-list.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map