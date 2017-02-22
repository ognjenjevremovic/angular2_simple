import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IUser } from './user.interface';
import { UserService } from '../core/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'user-edit.component.html'
})
export class EditUserComponent implements OnInit {
    username: Object;
    user: IUser;
    errorMessage: string;

    constructor(
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit(): void {
        let userId: string = this._route.snapshot.params['id'];
        this._userService.getUserById(userId)
            .subscribe(
                (user: IUser) => {
                    this.username = Object.assign({}, user.name);
                    this.user = user;
                }
            );
    }

    updateUser(): void {
        this._userService.updateUser(this.user)
            .subscribe(
                (data) => this._router.navigate(['/users']),
                (err) => this.errorMessage = err
            );
    }
}
