import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCandidatesComponent } from './project-candidates.component';

describe('ProjectCandidatesComponent', () => {
  let component: ProjectCandidatesComponent;
  let fixture: ComponentFixture<ProjectCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
