import { Component, EventEmitter } from '@angular/core';
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
        this.getUsers();
    }

    getUsers(): void {
        this._userService.getUsers()
            .subscribe(
                (users: IUser[]) => this.users = users,
                (error: any) => this.errorMessage = error
            );
    }

    removeUser(event: Event, userId: string): void {
        event.stopPropagation();

        this._userService.removeUserById(userId)
            .subscribe(
                (user: IUser) => {
                    let userIndex: number = this.users.findIndex(
                        (user: IUser) => user._id === userId
                    );
                    this.users.splice(userIndex, 1);
                },
                (error: any) => console.log(`Error occured!`)
            );
    }
 }
