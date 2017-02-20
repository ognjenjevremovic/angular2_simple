import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { UserListComponent } from './user-list.component';
import { UserDetailsComponent } from './user-details.component';
import { UserFilterPipe } from './user-filter.pipe';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule
    ],
    declarations: [
        UserListComponent,
        UserDetailsComponent,
        UserFilterPipe
    ]
})
export class UserModule { }
