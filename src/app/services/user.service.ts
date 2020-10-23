import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
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

    public getOneByUsername (username: string): Observable<User>
    {
        return this.http
                   .get<User>(`${this.user_url}/name/${username}`)
    }

    public createUserFromForm (form: NgForm): User
    {
        let user = new User()
        user.id = 0
        user.username = form.value['username']
        user.password = form.value['password']
        user.email = form.value['email']
        user.avatar = form.value['avatar']
        user.role = 1

        return user
    }

    public register (user: User)
    {
        return this.http
                   .post<User>(`${this.url}/sign-up`, user)
    }
}
