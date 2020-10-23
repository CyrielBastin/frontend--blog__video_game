import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentary } from '../model/commentary';

@Injectable()
export class CommentaryService
{
    private port = 8080
    private commentary_url = `http://localhost:${this.port}/REST/commentaries`

    constructor (
        private http: HttpClient
    ) {}

    saveCommentary (commentary: Commentary)
    {
        commentary.id = 0
        commentary.userId = +localStorage.getItem('user_id')
        return this.http.post<Commentary>(`${this.commentary_url}/new`, commentary, {
            headers: { 'Authorization': localStorage.getItem('token') }
        })
    }
}
