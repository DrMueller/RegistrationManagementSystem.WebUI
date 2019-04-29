import { TestBed, inject } from '@angular/core/testing';

import { ColDefBuilderService } from './col-def-builder.service';

describe('ColumnDefinitionsBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColDefBuilderService]
    });
  });

  it('should be created', inject([ColDefBuilderService], (service: ColDefBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
