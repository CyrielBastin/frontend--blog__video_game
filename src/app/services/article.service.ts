import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { NgForm } from '@angular/forms'
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

    public saveArticle (article: Article)
    {
        const jwt_token = localStorage.getItem('token')
        const httpOptions = {
                headers: new HttpHeaders({'Authorization': jwt_token, 'Access-Control-Allow-Origin': 'http://localhost:4200'})
        };
        if (article.id === 0)
        {
            article.userId = +localStorage.getItem('user_id')
            return this.http.post<Article>(`${this.article_url}/new`, article, httpOptions)
        } else
        {
            console.log(article)
            return this.http.put<Article>(`${this.article_url}/update`, article, httpOptions)
        }
    }

    public deleteArticle (id: number)
    {
        const jwt_token = localStorage.getItem('token')
        const httpOptions = {
                headers: new HttpHeaders({'Authorization': jwt_token, 'Access-Control-Allow-Origin': 'http://localhost:4200'})
        };
        return this.http.delete(`${this.article_url}/delete/${id}`, httpOptions)
    }

    public createArticleFromForm (form: NgForm): Article
    {
        let article = new Article()
        article.id = 0
        article.title = form.value['title']
        article.articleTypeId = this.convertTypeToId(form.value['type'])
        article.videoGameId = this.convertGameToId(form.value['game'])
        article.content = form.value['content']
        article.userId = +localStorage.getItem('user_id')
        article.postedAt = ""

        return article
    }

    public modifyArticleWithForm (article: Article, form: NgForm)
    {
        article.title = form.value['title']
        article.articleTypeId = this.convertTypeToId(form.value['type'])
        article.videoGameId = this.convertGameToId(form.value['game'])
        article.content = form.value['content']
    }

    private convertTypeToId (_type: string): number
    {
        switch (_type) {
            case 'News': return 1
            case 'Review': return 2
            case 'Editorial': return 3
            case 'Rumors': return 4
        }
    }

    private convertGameToId (_game: string): number
    {
        switch (_game) {
            case 'Hitman 2': return 1
            case 'Bioshock': return 2
            case 'Overwatch': return 3
            case 'Diablo III: Reaper of Souls': return 4
            case 'Diablo IV': return 5
            case 'Far Cry 5': return 6
            case 'Assassin\'s Creed Odyssey': return 7
            case 'The Sims 4': return 8
            case 'Battlefield 4': return 9
            case 'Human: Fall Flat': return 10
    }
}

}
