import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IUser } from '../user/user.interface';

@Injectable()
export class UserService {
    private _endpoint: string = '/api/sample-users.json';
    private _users: IUser[];

    constructor(private _http: Http) { }

    getUsers(): Observable<IUser[]>{
        return this._http.get(this._endpoint)
                .map((response: Response) => response.json() as IUser[])
                .do((users: IUser[]) => this._users = users)
                .catch(this.handleError);
    }
    getUserById(userId: number): Observable<IUser> {
        return this.getUsers()
            .map(
                (users: IUser[]) => this._users.find(
                    (user: IUser) => user.id === userId
                )
            );
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
