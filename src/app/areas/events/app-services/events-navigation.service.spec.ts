import { TestBed, inject } from '@angular/core/testing';

import { EventsNavigationService } from './events-navigation.service';

describe('EventsNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsNavigationService]
    });
  });

  it('should be created', inject([EventsNavigationService], (service: EventsNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
