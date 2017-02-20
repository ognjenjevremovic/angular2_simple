import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { IUser } from './user.interface';
import { UserService } from '../core/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'user-list.component.html',
    styleUrls: ['user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: IUser[];
    errorMessage: string;
    nameFilter: string;

    constructor(private _userService: UserService) { }

    ngOnInit(): void {
       this._userService.getUsers()
            .subscribe(
                (users: IUser[]) => this.users = users,
                (error: any) => this.errorMessage = error
            );
    }
 }
