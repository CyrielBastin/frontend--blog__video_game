import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';

@Injectable()
export class AuthService
{
    private port = 8080
    private login_url = `http://localhost:${this.port}/login`

    constructor (
        private http: HttpClient,
        private user_service: UserService
    ) {}

    public login (credentials)
    {
        return this.http.post(this.login_url, credentials, { responseType: 'text' })
    }

    public logout ()
    {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('user_id')
        localStorage.removeItem('role')
    }

    public isLoggedIn (): boolean
    {
        const token = localStorage.getItem('token')
        const helper = new JwtHelperService()
        if (helper.isTokenExpired(token)) {
            this.logout()
            return false
        }
        return true
    }

    public getRole ()
    {
        return localStorage.getItem('role')
    }

    public saveUserInfos (token: string)
    {
        const username = new JwtHelperService().decodeToken(token)['sub']
        const user = this.user_service.getOneByUsername(username).subscribe(response => {
        this.insertIntoLocalStorage(response, token)
        })
    }

    private insertIntoLocalStorage (response, token)
    {
        localStorage.setItem('token', token)
        localStorage.setItem('username', response['username'])
        localStorage.setItem('user_id', response['id'])
        localStorage.setItem('role', response['role'])
    }
}
