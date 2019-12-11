import { TestBed } from '@angular/core/testing';

import { TesterModuleStatusService } from './tester-module-status.service';

describe('TesterModuleStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesterModuleStatusService = TestBed.get(TesterModuleStatusService);
    expect(service).toBeTruthy();
  });
});
