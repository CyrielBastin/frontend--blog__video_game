import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  display_title = false
  display_type = false
  display_game = false
  display_content = false
  id: number
  article: Article
  article_type: string
  article_game: string
  //
  list_types: Array<ArticleType>
  list_games: Array<VideoGame>

  constructor (
    private article_service: ArticleService,
    private article_type_service: ArticleTypeService,
    private game_service: VideoGameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit (): void
  {
    this.id = this.route.snapshot.params['id']
    if (this.id)
    {
      this.article_service
          .getOneById(this.id)
          .subscribe(
            (datas) => { this.feedArticleAndFeedMembers(datas) },
            (error) => { this.router.navigate(['/error']) }
          )
    }
    
    this.fetchTypesAndGames()
  }

  feedArticleAndFeedMembers (datas: Article)
  {
    if (datas.id === 0) this.router.navigate(['/error'])

    this.article = datas
    this.display_title = true
    this.display_type = true
    this.display_game = true
    this.display_content = true
    
    this.article_type = this.getArticleType(datas.articleTypeId)
    this.article_game = this.getArticleGame(datas.videoGameId)
  }

  getArticleType (id: number): string
  {
    switch (id) {
      case 1: return 'News'
      case 2: return 'Review'
      case 3: return 'Editorial'
      case 4: return 'Rumors'
    }
  }

  getArticleGame (id: number): string
  {
    switch (id) {
      case 1: return 'Hitman 2'
      case 2: return 'Bioshock'
      case 3: return 'Overwatch'
      case 4: return 'Diablo III: Reaper of Souls'
      case 5: return 'Diablo IV'
      case 6: return 'Far Cry 5'
      case 7: return 'Assassin\'s Creed Odyssey'
      case 8: return 'The Sims 4'
      case 9: return 'Battlefield 4'
      case 10: return 'Human: Fall Flat'
    }
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

  onFormSubmit (form: NgForm)
  {
    if (this.id !== undefined) {
      this.article_service.modifyArticleWithForm(this.article, form)

      this.article_service.saveArticle(this.article).subscribe(result => this.goToArticles())
    } else {
      const article = this.article_service.createArticleFromForm(form)
      this.article_service.saveArticle(article).subscribe(result => this.goToArticles())
    }
  }


  private goToArticles ()
  {
    this.router.navigate(['/articles'])
  }
}
