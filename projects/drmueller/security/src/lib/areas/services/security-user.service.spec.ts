import { TestBed, inject } from '@angular/core/testing';

import { SecurityUserService } from './security-user.service';

describe('SecurityUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityUserService]
    });
  });

  it('should be created', inject([SecurityUserService], (service: SecurityUserService) => {
    expect(service).toBeTruthy();
  }));
});
