import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class UserService
{
    private port = 8080
    private user_url = `http://localhost:${this.port}/REST/users`
    private url = `http://localhost:${this.port}`

    constructor (
        private http: HttpClient
    ) {}

    public getOneById (id: number): Observable<User>
    {
        return this.http
                   .get<User>(`${this.user_url}/${id}`)
    }

    public register (user: User)
    {
        return this.http
                   .post<User>(`${this.url}/sign-up`, user)
    }

    public login (userinfo)
    {
        return this.http
                   .post(`${this.url}/login`, userinfo, { responseType: "text" })
    }
}
