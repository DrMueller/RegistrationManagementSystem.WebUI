import { TestBed, inject } from '@angular/core/testing';

import { EventsOverviewColumnDefinitionsBuilderService } from './events-overview-column-definitions-builder.service';

describe('EventsOverviewColumnDefinitionsBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsOverviewColumnDefinitionsBuilderService]
    });
  });

  it('should be created', inject([EventsOverviewColumnDefinitionsBuilderService],
    (service: EventsOverviewColumnDefinitionsBuilderService) => {
      expect(service).toBeTruthy();
    }));
});
