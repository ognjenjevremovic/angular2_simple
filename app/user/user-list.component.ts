import { Component, EventEmitter, Output } from '@angular/core';
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

    userSelected: IUser;

    constructor(private _userService: UserService) { }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this._userService.getUsers()
            .subscribe(
                (users: IUser[]) => {
                    this.users = users;
                    //  ???
                    this.userSelected = this.users[0];
                },
                (error: any) => this.errorMessage = error
            );
    }

    showModal(event: Event, user: IUser): void {
        event.stopPropagation();
        this.userSelected = user;
        $('#deleteUserModal').modal('show');
    }

    updateUsers(): void {
        this.getUsers();
        this.userSelected = null;
        $('#deleteUserModal').modal('hide');
    }
 }
