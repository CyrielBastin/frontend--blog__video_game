import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Genre } from '../model/genre'

@Injectable()
export class GenreService
{
    private port = 8080
    private genre_url = `http://localhost:${this.port}/REST/genres/`

    constructor (
        private http: HttpClient
    ) {}

    public getAll (): Observable<Array<Genre>>
    {
        return this.http
                   .get<Array<Genre>>(this.genre_url)
    }
}
