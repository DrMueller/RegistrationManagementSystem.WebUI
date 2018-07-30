import { TestBed, inject } from '@angular/core/testing';

import { IgnoredErrorsService } from './ignored-errors.service';

describe('IgnoredErrorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IgnoredErrorsService]
    });
  });

  it('should be created', inject([IgnoredErrorsService], (service: IgnoredErrorsService) => {
    expect(service).toBeTruthy();
  }));
});
