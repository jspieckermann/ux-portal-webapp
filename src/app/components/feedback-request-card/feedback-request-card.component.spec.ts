import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackRequestCardComponent } from './feedback-request-card.component';

describe('FeedbackRequestCardComponent', () => {
  let component: FeedbackRequestCardComponent;
  let fixture: ComponentFixture<FeedbackRequestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackRequestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
