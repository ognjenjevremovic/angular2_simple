import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../core/user.service';

import { IUser } from './user.interface';

@Component({
    moduleId: module.id,
    templateUrl: 'user-details.component.html',
    styleUrls: ['user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
    user: IUser;

    constructor(
        private _route: ActivatedRoute,
        private _userService: UserService,
        private _router: Router
    ) { }

    ngOnInit(): void {
        let userId: string = this._route.snapshot.params['id'];
        this._userService.getUserById(userId).subscribe(
            (user: IUser) => this.user = user
        );
    }

    removeUser(): void {
        this._userService.removeUserById(this.user._id)
            .subscribe(
                (data) => {
                    console.log(data);
                    this._router.navigate(['/users']);
                }
            );
    }
}
