import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {

  list_articles: Array<Article>

  constructor (
    private article_service: ArticleService
  ) {}

  ngOnInit(): void
  {
    this.article_service
        .findAll()
        .subscribe(
          (datas) => {
            this.list_articles = datas
          }
        )
  }

}
