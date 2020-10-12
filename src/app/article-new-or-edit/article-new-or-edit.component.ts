import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/article';
import { ArticleType } from '../model/article-type';
import { VideoGame } from '../model/video-game';
import { ArticleTypeService } from '../services/article-type.service';
import { ArticleService } from '../services/article.service';
import { VideoGameService } from '../services/video-game.service';

@Component({
  selector: 'app-article-new-or-edit',
  templateUrl: './article-new-or-edit.component.html',
  styleUrls: ['./article-new-or-edit.component.scss']
})
export class ArticleNewOrEditComponent implements OnInit {

  id: number
  article: Article
  list_types: Array<ArticleType>
  list_games: Array<VideoGame>

  constructor (
    private article_service: ArticleService,
    private article_type_service: ArticleTypeService,
    private game_service: VideoGameService,
    private route: ActivatedRoute
  ) {}

  ngOnInit (): void
  {
    this.id = this.route.snapshot.params['id']
    if (this.id)
    {
      this.article_service
          .getOneById(this.id)
          .subscribe(
            (datas) => { this.article = datas }
          )
    }
    
    this.fetchTypesAndGames()
  }

  fetchTypesAndGames ()
  {
    this.article_type_service
        .getAll()
        .subscribe(
          (datas) => { this.list_types = datas }
        )
    this.game_service
        .getAll()
        .subscribe(
          (datas) => { this.list_games = datas }
        )
  }
}
