import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesPageComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: '', component: HomeContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
