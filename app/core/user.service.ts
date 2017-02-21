import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IUser } from '../user/user.interface';

@Injectable()
export class UserService {
    private _usersEndpoint: string = 'http://localhost:4000/api/users';
    private _userEndpoint: string = 'http://localhost:4000/api/user';
    private _users: IUser[];

    constructor(
        private _http: Http,
    ) { }

    getUsers(): Observable<IUser[]> {
        return this._http.get(this._usersEndpoint)
            .map((data: Response) => data.json().users as IUser[])
            .do((users: IUser[]) => this._users = users)
            .catch(this.handleError);
    }

    getUserById(userId: string): Observable<IUser> {
        return this.getUsers()
            .map(
                (users: IUser[]): IUser => users.find(
                    (user: IUser): boolean => user._id === userId
                )
            );
    }

    removeUserById(userId: string): Observable<IUser> {
        return this._http.delete(`${this._userEndpoint}/${userId}`)
            .map((data: Response) => data.json().user)
            .do((user: IUser) => user)
            .catch(this.handleError);
    }

    addUser(newUser: IUser): Observable<IUser> {
        return this._http.post(`${this._userEndpoint}`, newUser)
            .map((data: Response) => data.json().user)
            .do((user: IUser) => {
                console.log(user);
                return user;
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
