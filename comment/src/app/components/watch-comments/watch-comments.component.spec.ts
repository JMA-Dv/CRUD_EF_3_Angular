import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchCommentsComponent } from './watch-comments.component';

describe('WatchCommentsComponent', () => {
  let component: WatchCommentsComponent;
  let fixture: ComponentFixture<WatchCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
