import { TestBed, inject } from '@angular/core/testing';

import { IndividualsNavigationService } from './individuals-navigation.service';

describe('IndividualsNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividualsNavigationService]
    });
  });

  it('should be created', inject([IndividualsNavigationService], (service: IndividualsNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
