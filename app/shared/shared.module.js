"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var user_header_component_1 = require("./user-header.component");
var user_modal_component_1 = require("./user-modal.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            router_1.RouterModule
        ],
        declarations: [
            user_header_component_1.UserHeaderComponent,
            user_modal_component_1.UserModalComponent
        ],
        exports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            user_header_component_1.UserHeaderComponent,
            user_modal_component_1.UserModalComponent
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map