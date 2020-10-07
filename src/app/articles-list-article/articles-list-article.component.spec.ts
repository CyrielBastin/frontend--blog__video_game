import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListArticleComponent } from './articles-list-article.component';

describe('ArticlesListArticleComponent', () => {
  let component: ArticlesListArticleComponent;
  let fixture: ComponentFixture<ArticlesListArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesListArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
