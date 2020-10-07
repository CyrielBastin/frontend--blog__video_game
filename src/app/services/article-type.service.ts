import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ArticleType } from '../model/article-type'

@Injectable()
export class ArticleTypeService
{
    private port = 8080
    private article_type_url = `http://localhost:${this.port}/REST/article-types`

    constructor (
        private http: HttpClient
    ) {}

    public findAll (): Observable<Array<ArticleType>>
    {
        return this.http
                   .get<Array<ArticleType>>(this.article_type_url)
    }

    public findOneById (id: number): Observable<ArticleType>
    {
        return this.http
                   .get<ArticleType>(`${this.article_type_url}/${id}`)
    }
}
