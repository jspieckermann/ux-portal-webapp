import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileAdministrationComponent } from './user-profile-administration.component';

describe('UserProfileAdministrationComponent', () => {
  let component: UserProfileAdministrationComponent;
  let fixture: ComponentFixture<UserProfileAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
