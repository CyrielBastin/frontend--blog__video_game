import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  list_articles: Array<Article>

  constructor (
    private article_service: ArticleService
  ) {}

  ngOnInit(): void
  {
    this.article_service
        .findAllByPostedAtDesc()
        .subscribe(
          (datas) => { this.list_articles = datas }
        )
  }
}
