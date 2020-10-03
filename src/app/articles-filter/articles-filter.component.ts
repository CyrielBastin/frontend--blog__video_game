import { Component, OnInit } from '@angular/core';
import { ArticleType } from '../model/article-type';
import { Genre } from '../model/genre';
import { Platform } from '../model/platform';
import { VideoGame } from '../model/video-game';
import { ArticleTypeService } from '../services/article-type.service';
import { GenreService } from '../services/genre.service';
import { PlatformService } from '../services/platform.service';
import { VideoGameService } from '../services/video-game.service';

@Component({
  selector: 'app-articles-filter',
  templateUrl: './articles-filter.component.html',
  styleUrls: ['./articles-filter.component.scss']
})
export class ArticlesFilterComponent implements OnInit {

  list_article_types: Array<ArticleType>
  list_video_games: Array<VideoGame>
  list_platforms: Array<Platform>
  list_genres: Array<Genre>

  constructor (
    private article_type_service: ArticleTypeService,
    private video_game_service: VideoGameService,
    private platform_service: PlatformService,
    private genre_service: GenreService
  ) {}

  ngOnInit(): void
  {
    this.article_type_service.findAll().subscribe(datas => { this.list_article_types = datas })
    this.video_game_service.findAll().subscribe(datas => { this.list_video_games = datas })
    this.platform_service.findAll().subscribe(datas => { this.list_platforms = datas })
    this.genre_service.findAll().subscribe(datas => { this.list_genres = datas })
  }
}
