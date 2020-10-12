import { Component, Input, OnInit } from '@angular/core';
import { ArticleTypeService } from '../services/article-type.service';
import { VideoGameService } from '../services/video-game.service';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list-article',
  templateUrl: './articles-list-article.component.html',
  styleUrls: ['./articles-list-article.component.scss']
})
export class ArticlesListArticleComponent implements OnInit {

  @Input() id: number
  @Input() title: string
  @Input() postedAt: string
  @Input() content: string
  @Input() videoGameId: number
  @Input() articleTypeId: number
  image: string
  type: string
  // icon for edit
  fa_pencil_alt = faPencilAlt
  // icon for delete
  fa_times = faTimes


  constructor (
    private video_game_service: VideoGameService,
    private article_type_service: ArticleTypeService,
    private article_service: ArticleService,
    private router: Router
  ) {}

  ngOnInit (): void
  {
    this.video_game_service
        .getOneById(this.videoGameId)
        .subscribe(
          (datas) => { this.image = datas.image }
        )
    this.article_type_service
        .getOneById(this.articleTypeId)
        .subscribe(
          ((datas) => { this.type = datas.type })
        )
  }

  getType (): string
  {
    const badge = 'badge'
    const px = 'px-18'
    switch (this.type)
    {
      case 'News': return `${badge} badge-success ${px}`
      case 'Review': return `${badge} badge-secondary ${px}`
      case 'Editorial': return `${badge} badge-info ${px}`
      case 'Rumors': return `${badge} badge-warning ${px}`
    }
  }

  onDelete (id: number)
  {
    this.article_service.deleteArticle(id).subscribe(result => this.refreshArticles())
  }

  refreshArticles ()
  {
    this.router.navigate(['/refresh'])
  }
}
