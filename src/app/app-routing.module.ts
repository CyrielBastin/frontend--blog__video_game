import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleNewOrEditComponent } from './article-new-or-edit/article-new-or-edit.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RefreshArticlesComponent } from './refresh-articles/refresh-articles.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesPageComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: 'articles/new/create', component: ArticleNewOrEditComponent },
  { path: 'articles/edit/:id', component: ArticleNewOrEditComponent },
  { path: 'sign-up', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'refresh/:id', component: RefreshArticlesComponent },
  { path: '', component: HomeContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
