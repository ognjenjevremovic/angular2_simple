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
var http_1 = require("@angular/http");
var observable_1 = require("rxjs/observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._usersEndpoint = 'http://localhost:4000/api/users';
        this._userEndpoint = 'http://localhost:4000/api/user';
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this._http.get(this._usersEndpoint)
            .map(function (data) { return data.json().users; })
            .do(function (users) { return _this._users = users; })
            .catch(this.handleError);
    };
    UserService.prototype.getUserById = function (userId) {
        return this.getUsers()
            .map(function (users) { return users.find(function (user) { return user._id === userId; }); });
    };
    UserService.prototype.removeUserById = function (userId) {
        return this._http.delete(this._userEndpoint + "/" + userId)
            .map(function (data) { return data.json().user; })
            .do(function (user) { return user; })
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (newUser) {
        return this._http.post("" + this._userEndpoint, newUser)
            .map(function (data) { return data.json().user; })
            .do(function (user) {
            console.log(user);
            return user;
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        return observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map