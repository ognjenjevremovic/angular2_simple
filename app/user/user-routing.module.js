"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_list_component_1 = require("./user-list.component");
var user_details_component_1 = require("./user-details.component");
var user_add_component_1 = require("./user-add.component");
var user_edit_component_1 = require("./user-edit.component");
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'adduser', component: user_add_component_1.AddUserComponent },
                { path: 'users', component: user_list_component_1.UserListComponent },
                { path: 'user/:id', component: user_details_component_1.UserDetailsComponent },
                { path: 'edituser/:id', component: user_edit_component_1.EditUserComponent }
            ])
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], UserRoutingModule);
exports.UserRoutingModule = UserRoutingModule;
//# sourceMappingURL=user-routing.module.js.map