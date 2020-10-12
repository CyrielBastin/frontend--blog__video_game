import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNewOrEditComponent } from './article-new-or-edit.component';

describe('ArticleNewOrEditComponent', () => {
  let component: ArticleNewOrEditComponent;
  let fixture: ComponentFixture<ArticleNewOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleNewOrEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleNewOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
