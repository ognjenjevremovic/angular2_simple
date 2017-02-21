import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../core/user.service';
import { IUser } from './user.interface';

@Component({
    moduleId: module.id,
    templateUrl: 'user-add.component.html'
})
export class AddUserComponent implements OnInit {
    user: IUser;

    constructor(private _userService: UserService, private _router: Router) { }

    ngOnInit(): void {
        this.resetUser();
    }

    resetUser(): void {
        this.user = {
            _id: '',
            name: {
                first: '',
                last: ''
            },
            date_joined: '',
            avatar: '',
            email: '',
            location: {
                city: '',
                state: ''
            },
            bio: ''
        };
    }

    addUser(): void {
        this._userService.addUser(this.user)
            .subscribe(
                (user: IUser) => {
                    console.log(`User with an id of ${user._id} added`);
                    this._router.navigate(['/users']);
                }
            );
    }
}