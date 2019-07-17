import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingCardComponent } from './user-rating-card.component';

describe('UserRatingCardComponent', () => {
  let component: UserRatingCardComponent;
  let fixture: ComponentFixture<UserRatingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRatingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
