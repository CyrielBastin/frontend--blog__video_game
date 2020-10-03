import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesPageComponent },
  { path: '', component: HomeContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
