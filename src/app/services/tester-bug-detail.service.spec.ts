import { TestBed } from '@angular/core/testing';

import { TesterBugDetailService } from './tester-bug-detail.service';

describe('TesterBugDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesterBugDetailService = TestBed.get(TesterBugDetailService);
    expect(service).toBeTruthy();
  });
});
