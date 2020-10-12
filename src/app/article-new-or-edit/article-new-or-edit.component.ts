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
            (datas) => { this.feedArticleAndFeedMembers(datas) }
          )
    }
    
    this.fetchTypesAndGames()
  }

  feedArticleAndFeedMembers (datas: Article)
  {
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

  // When submitting the form to add or edit an article
  onSubmit (form: NgForm)
  {
    if (this.id !== undefined) {
      this.article.title = form.value['title']
      this.article.articleTypeId = this.convertTypeToId(form.value['type'])
      this.article.videoGameId = this.convertGameToId(form.value['game'])
      this.article.content = form.value['content']

      //console.log(this.article)
      this.article_service.saveArticle(this.article).subscribe(result => this.goToArticles())
    } else {
    let article = new Article()
    article.id = 0
    article.title = form.value['title']
    article.articleTypeId = this.convertTypeToId(form.value['type'])
    article.videoGameId = this.convertGameToId(form.value['game'])
    article.content = form.value['content']
    article.userId = 0
    article.postedAt = ""

    //console.log(article)
    this.article_service.saveArticle(article).subscribe(result => this.goToArticles())
    }
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

  private goToArticles ()
  {
    this.router.navigate(['/articles'])
  }
}
