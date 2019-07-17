import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingRequestComponent } from './user-rating-request.component';

describe('UserRatingRequestComponent', () => {
  let component: UserRatingRequestComponent;
  let fixture: ComponentFixture<UserRatingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRatingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRatingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
