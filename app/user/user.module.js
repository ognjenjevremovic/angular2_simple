"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var user_routing_module_1 = require("./user-routing.module");
var shared_module_1 = require("../shared/shared.module");
var user_list_component_1 = require("./user-list.component");
var user_details_component_1 = require("./user-details.component");
var user_add_component_1 = require("./user-add.component");
var user_edit_component_1 = require("./user-edit.component");
var user_filter_pipe_1 = require("./user-filter.pipe");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            user_routing_module_1.UserRoutingModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            user_list_component_1.UserListComponent,
            user_details_component_1.UserDetailsComponent,
            user_add_component_1.AddUserComponent,
            user_edit_component_1.EditUserComponent,
            user_filter_pipe_1.UserFilterPipe
        ]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map