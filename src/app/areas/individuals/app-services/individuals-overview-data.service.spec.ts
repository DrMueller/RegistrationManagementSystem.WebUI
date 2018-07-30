import { TestBed, inject } from '@angular/core/testing';

import { IndividualsOverviewDataService } from './individuals-oberview-data.service';

describe('IndividualsOerviewDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividualsOverviewDataService]
    });
  });

  it('should be created', inject([IndividualsOverviewDataService], (service: IndividualsOverviewDataService) => {
    expect(service).toBeTruthy();
  }));
});
