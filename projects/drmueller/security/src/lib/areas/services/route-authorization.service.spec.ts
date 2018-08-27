import { TestBed, inject } from '@angular/core/testing';

import { RouteAuthorizationService } from './route-authorization.service';

describe('RouteAuthorizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteAuthorizationService]
    });
  });

  it('should be created', inject([RouteAuthorizationService], (service: RouteAuthorizationService) => {
    expect(service).toBeTruthy();
  }));
});
