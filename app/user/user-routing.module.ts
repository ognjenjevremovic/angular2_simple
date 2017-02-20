import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserDetailsComponent } from './user-details.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'users', component: UserListComponent },
            { path: 'user/:id', component: UserDetailsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
