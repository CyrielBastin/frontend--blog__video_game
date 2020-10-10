import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class UserService
{
    private port = 8080
    private user_url = `http://localhost:${this.port}/REST/users`

    constructor (
        private http: HttpClient
    ) {}

    public getOneById (id: number): Observable<User>
    {
        return this.http
                   .get<User>(`${this.user_url}/${id}`)
    }
}
