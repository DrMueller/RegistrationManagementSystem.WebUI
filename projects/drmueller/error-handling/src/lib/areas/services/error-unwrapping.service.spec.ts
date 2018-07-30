import { TestBed, inject } from '@angular/core/testing';

import { ErrorUnwrappingService } from './error-unwrapping.service';

describe('ErrorUnwrappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorUnwrappingService]
    });
  });

  it('should be created', inject([ErrorUnwrappingService], (service: ErrorUnwrappingService) => {
    expect(service).toBeTruthy();
  }));
});
