import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardPanelComponent } from './user-card-panel.component';

describe('UserCardPanelComponent', () => {
  let component: UserCardPanelComponent;
  let fixture: ComponentFixture<UserCardPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
