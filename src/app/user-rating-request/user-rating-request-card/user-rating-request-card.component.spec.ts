import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingRequestCardComponent } from './user-rating-request-card.component';

describe('UserRatingRequestCardComponent', () => {
  let component: UserRatingRequestCardComponent;
  let fixture: ComponentFixture<UserRatingRequestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRatingRequestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRatingRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
