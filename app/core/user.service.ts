import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUser } from '../user/user.interface';

@Injectable()
export class UserService {
    private _usersEndpoint: string = 'http://localhost:4000/api/users';
    private _userEndpoint: string = 'http://localhost:4000/api/user';
    private _users: IUser[];
    private _userSelected: IUser;

    constructor(
        private _http: Http,
    ) { }

    getUsers(): Observable<IUser[]> {
        return this._http.get(this._usersEndpoint)
            .map((data: Response) => data.json().users as IUser[])
            .catch(this.handleError);
    }

    getUserById(userId: string): Observable<IUser> {
        return this._http.get(`${this._userEndpoint}/${userId}`)
            .map((data: Response) => data.json().user as IUser)
            .catch(this.handleError);
    }

    removeUserById(userId: string): Observable<IUser> {
        return this._http.delete(`${this._userEndpoint}/${userId}`)
            .map((data: Response) => data.json().user)
            .catch(this.handleError);
    }

    addUser(newUser: IUser): Observable<IUser> {
        return this._http.post(`${this._userEndpoint}`, newUser)
            .map((data: Response) => data.json().user as IUser)
            .catch(this.handleError);
    }

    updateUser(user: IUser): Observable<IUser> {
        return this._http.put(`${this._userEndpoint}/${user._id}`, user)
                .map((data: Response) => data.json())
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
