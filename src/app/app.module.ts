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
import { CommentarySectionComponent } from './commentary-section/commentary-section.component';
import { UserService } from './services/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleNewOrEditComponent } from './article-new-or-edit/article-new-or-edit.component';
import { FormsModule } from '@angular/forms';
import { RefreshArticlesComponent } from './refresh-articles/refresh-articles.component';
import { CommentaryService } from './services/commentary.service';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeContentComponent,
    ArticlesPageComponent,
    ArticlesFilterComponent,
    ArticlesListComponent,
    ArticlesListArticleComponent,
    ArticleDetailsComponent,
    CommentarySectionComponent,
    ArticleNewOrEditComponent,
    RefreshArticlesComponent,
    SignupPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    ArticleTypeService,
    ArticleService,
    GenreService,
    PlatformService,
    VideoGameService,
    UserService,
    CommentaryService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
