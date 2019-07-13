import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUserProfilesComponent } from './project-user-profiles.component';

describe('ProjectUserProfilesComponent', () => {
  let component: ProjectUserProfilesComponent;
  let fixture: ComponentFixture<ProjectUserProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectUserProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUserProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
