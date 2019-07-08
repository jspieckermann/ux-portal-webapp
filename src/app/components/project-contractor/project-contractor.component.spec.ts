import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContractorComponent } from './project-contractor.component';

describe('ProjectContractorComponent', () => {
  let component: ProjectContractorComponent;
  let fixture: ComponentFixture<ProjectContractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectContractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
