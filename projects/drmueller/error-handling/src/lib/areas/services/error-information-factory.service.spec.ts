import { TestBed, inject } from '@angular/core/testing';

import { ErrorInformationFactoryService } from './error-information-factory.service';

describe('ErrorInformationFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorInformationFactoryService]
    });
  });

  it('should be created', inject([ErrorInformationFactoryService], (service: ErrorInformationFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
