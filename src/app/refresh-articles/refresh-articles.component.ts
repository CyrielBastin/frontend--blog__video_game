import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-refresh-articles',
  templateUrl: './refresh-articles.component.html',
  styleUrls: ['./refresh-articles.component.scss']
})
export class RefreshArticlesComponent implements OnInit {

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit (): Promise<boolean>
  {
    const id = this.route.snapshot.params['id']
    switch (id) {
      case '-1': return this.router.navigate(['/articles'])
      default: return this.router.navigate([`/articles/${id}`])
    }
  }
}
