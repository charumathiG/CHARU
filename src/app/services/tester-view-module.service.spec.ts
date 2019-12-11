import { TestBed } from '@angular/core/testing';

import { TesterViewModuleService } from './tester-view-module.service';

describe('TesterViewModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesterViewModuleService = TestBed.get(TesterViewModuleService);
    expect(service).toBeTruthy();
  });
});
