import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticleService } from './services/article.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesFilterComponent } from './articles-filter/articles-filter.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { GenreService } from './services/genre.service';
import { ArticleTypeService } from './services/article-type.service';
import { PlatformService } from './services/platform.service';
import { VideoGameService } from './services/video-game.service';
import { ArticlesListArticleComponent } from './articles-list-article/articles-list-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeContentComponent,
    ArticlesPageComponent,
    ArticlesFilterComponent,
    ArticlesListComponent,
    ArticlesListArticleComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArticleTypeService,
    ArticleService,
    GenreService,
    PlatformService,
    VideoGameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
