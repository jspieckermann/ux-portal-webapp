import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedbackEntryComponent } from './user-feedback-entry.component';

describe('UserFeedbackEntryComponent', () => {
  let component: UserFeedbackEntryComponent;
  let fixture: ComponentFixture<UserFeedbackEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFeedbackEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedbackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
