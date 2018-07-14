import { TestBed, inject } from '@angular/core/testing';

import { EventOverviewDataService } from './event-overview-data.service';

describe('EventOverviewDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventOverviewDataService]
    });
  });

  it('should be created', inject([EventOverviewDataService], (service: EventOverviewDataService) => {
    expect(service).toBeTruthy();
  }));
});
