import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Article } from '../model/article'
import { Commentary } from '../model/commentary'

@Injectable()
export class ArticleService
{
    private port = 8080
    private article_url = `http://localhost:${this.port}/REST/articles`

    constructor (
        private http: HttpClient
    ) {}

    public getAll (): Observable<Array<Article>>
    {
        return this.http
                   .get<Array<Article>>(this.article_url)
    }

    public getAllByPostedAtDesc (): Observable<Array<Article>>
    {
        return this.http
                   .get<Array<Article>>(`${this.article_url}/desc`)
    }

    public getOneById (id: number): Observable<Article>
    {
        return this.http
                   .get<Article>(`${this.article_url}/${id}`)
    }

    public getAllCommentariesByArticleIdDesc (id: number): Observable<Array<Commentary>>
    {
        return this.http
                   .get<Array<Commentary>>(`${this.article_url}/${id}/commentaries/desc`)
    }
}
