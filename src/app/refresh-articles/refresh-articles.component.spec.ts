import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshArticlesComponent } from './refresh-articles.component';

describe('RefreshArticlesComponent', () => {
  let component: RefreshArticlesComponent;
  let fixture: ComponentFixture<RefreshArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
