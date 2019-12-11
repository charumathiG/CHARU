import { TestBed } from '@angular/core/testing';

import { TesterProjectService } from './tester-project.service';

describe('TesterProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesterProjectService = TestBed.get(TesterProjectService);
    expect(service).toBeTruthy();
  });
});
