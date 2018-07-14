import { TestBed, inject } from '@angular/core/testing';

import { AppNavigationEntryFactoryService } from './app-navigation-entry-factory.service';

describe('AppNavigationEntryFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppNavigationEntryFactoryService]
    });
  });

  it('should be created', inject([AppNavigationEntryFactoryService], (service: AppNavigationEntryFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
