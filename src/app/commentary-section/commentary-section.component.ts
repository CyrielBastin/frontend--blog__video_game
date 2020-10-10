import { Component, Input, OnInit } from '@angular/core';
import { Commentary } from '../model/commentary';
import { ArticleService } from '../services/article.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-commentary-section',
  templateUrl: './commentary-section.component.html',
  styleUrls: ['./commentary-section.component.scss']
})
export class CommentarySectionComponent implements OnInit {

  @Input() articleId: number
  list_commentaries: Array<Commentary>

  constructor (
    private article_service: ArticleService,
    private user_service: UserService
  ) {}

  ngOnInit(): void
  {
    this.article_service
        .getAllCommentariesByArticleIdDesc(this.articleId)
        .subscribe(
          (datas) => { this.list_commentaries = datas }
        )
    setTimeout(() => { this.fetchUserDatas() }, 100)
  }

  fetchUserDatas ()
  {
    for (let comment of this.list_commentaries)
    {
      this.user_service.getOneById(comment.userId)
      .subscribe(
        (datas) => { comment['user'] = datas }
      )
    }
  }
}
