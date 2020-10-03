import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Article } from '../model/article'

@Injectable()
export class ArticleService
{
    private port = 8080
    private article_url = `http://localhost:${this.port}/REST/articles/`

    constructor (
        private http: HttpClient
    ) {}

    public findAll (): Observable<Array<Article>>
    {
        return this.http
                   .get<Array<Article>>(this.article_url)
    }
}
