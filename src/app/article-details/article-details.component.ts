import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article';
import { ArticleTypeService } from '../services/article-type.service';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';
import { VideoGameService } from '../services/video-game.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article
  article_type: string
  image: string

  constructor (
    private route: ActivatedRoute,
    private article_service: ArticleService,
    private article_type_service: ArticleTypeService,
    private video_game_service: VideoGameService,
    private router: Router,
    public auth_service: AuthService
  ) {}

  ngOnInit (): void
  {
    const id = this.route.snapshot.params['id']
    this.article_service
        .getOneById(id)
        .subscribe(
          (datas) => { this.setDatasOrError(datas) },
          (error) => { this.router.navigate(['/error']) }
        )
    setTimeout(() => { this.fetchImageAndType() }, 100)
  }

  private setDatasOrError (data: Article)
  {
    if (data.id === 0) this.router.navigate(['/error'])
    this.article = data
  }

  private fetchImageAndType ()
  {
    this.article_type_service
        .getOneById(this.article.articleTypeId)
        .subscribe(
          (datas) => { this.article_type = datas.type }
        )
    this.video_game_service
        .getOneById(this.article.videoGameId)
        .subscribe(
          (datas) => { this.image = datas.image }
        )
  }

  getType (): string
  {
    const badge = 'badge'
    const px = 'px-24'
    switch (this.article_type)
    {
      case 'News': return `${badge} badge-success ${px}`
      case 'Review': return `${badge} badge-secondary ${px}`
      case 'Editorial': return `${badge} badge-info ${px}`
      case 'Rumors': return `${badge} badge-warning ${px}`
    }
  }

  onDelete (id: number)
  {
    this.article_service.deleteArticle(id).subscribe(result => this.router.navigate(['/articles']))
  }
}
