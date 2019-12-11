import { TestBed } from '@angular/core/testing';

import { TesterCreateBugService } from './tester-create-bug.service';

describe('TesterCreateBugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesterCreateBugService = TestBed.get(TesterCreateBugService);
    expect(service).toBeTruthy();
  });
});
