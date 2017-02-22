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
var UserModalComponent = (function () {
    function UserModalComponent(_userService) {
        this._userService = _userService;
        this.userDeleted = new core_1.EventEmitter();
    }
    UserModalComponent.prototype.removeUser = function () {
        var _this = this;
        this._userService.removeUserById(this.user._id)
            .subscribe(function () { return _this.userDeleted.emit(); });
    };
    return UserModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserModalComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserModalComponent.prototype, "userDeleted", void 0);
UserModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user-modal.component.html',
        selector: 'ua-user-modal'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserModalComponent);
exports.UserModalComponent = UserModalComponent;
//# sourceMappingURL=user-modal.component.js.map