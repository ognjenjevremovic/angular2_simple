"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UserFilterPipe = (function () {
    function UserFilterPipe() {
    }
    UserFilterPipe.prototype.transform = function (users, filterByName) {
        filterByName = filterByName ? filterByName.toLocaleLowerCase() : null;
        return filterByName ? users.filter(function (user) { return user.name.first.toLocaleLowerCase().includes(filterByName) || user.name.last.toLocaleLowerCase().includes(filterByName); }) : users;
    };
    return UserFilterPipe;
}());
UserFilterPipe = __decorate([
    core_1.Pipe({
        name: 'filterByName'
    })
], UserFilterPipe);
exports.UserFilterPipe = UserFilterPipe;
//# sourceMappingURL=user-filter.pipe.js.map