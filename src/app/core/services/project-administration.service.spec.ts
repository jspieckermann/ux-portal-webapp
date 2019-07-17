import { TestBed } from '@angular/core/testing';

import { ProjectAdministrationService } from './project-administration.service';

describe('ProjectAdministrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectAdministrationService = TestBed.get(ProjectAdministrationService);
    expect(service).toBeTruthy();
  });
});
