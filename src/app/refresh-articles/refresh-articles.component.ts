import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refresh-articles',
  templateUrl: './refresh-articles.component.html',
  styleUrls: ['./refresh-articles.component.scss']
})
export class RefreshArticlesComponent implements OnInit {

  constructor (
    private router: Router
  ) {}

  ngOnInit (): void
  {
    this.router.navigate(['/articles'])
  }
}
