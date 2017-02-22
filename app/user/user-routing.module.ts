import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserDetailsComponent } from './user-details.component';
import { AddUserComponent } from './user-add.component';
import { EditUserComponent } from './user-edit.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'adduser', component: AddUserComponent },
            { path: 'users', component: UserListComponent },
            { path: 'user/:id', component: UserDetailsComponent },
            { path: 'edituser/:id', component: EditUserComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
