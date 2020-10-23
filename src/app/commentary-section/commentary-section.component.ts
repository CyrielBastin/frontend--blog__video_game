import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Commentary } from '../model/commentary';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';
import { CommentaryService } from '../services/commentary.service';
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
    private user_service: UserService,
    private commentary_service: CommentaryService,
    private router: Router,
    public auth_service: AuthService
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

  onFormSubmit (form: NgForm)
  {
    const commentary = new Commentary()
    commentary.articleId = this.articleId
    commentary.comment = form.value['user_comment']
    commentary.postedAt = ""

    this.commentary_service.saveCommentary(commentary)
                           .subscribe(
                             result => this.refreshPage()
                            )
  }

  private refreshPage ()
  {
    this.router.navigate([`/refresh/${this.articleId}`])
  }
}
