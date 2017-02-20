import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
        private _userService: UserService
    ) { }

    ngOnInit(): void {
        let userId: number = +this._route.snapshot.params['id'];
        this._userService.getUserById(userId).subscribe(
            (user: IUser) => this.user = user
        );
    }
}
