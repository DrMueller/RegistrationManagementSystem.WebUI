import { TestBed, inject } from '@angular/core/testing';

import { ColDefBuilderFactoryService } from './col-def-builder-factory.service';

describe('ColumnDefinitionsBuilderFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColDefBuilderFactoryService]
    });
  });

  it('should be created', inject([ColDefBuilderFactoryService], (service: ColDefBuilderFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
