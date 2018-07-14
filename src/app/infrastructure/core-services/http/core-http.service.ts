import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnvironmentService } from '../environment';
import { ObjectFactoryService } from 'projects/drmueller/base-services/src/lib/areas/object-creation';
import { HttpBaseService } from 'projects/drmueller/base-services/src/lib/areas/http';

@Injectable()
export class CoreHttpService extends HttpBaseService {
  constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService, environmentService: EnvironmentService) {
    super(httpClient, objectFactoryService, environmentService.coreServiceBaseUrl);
  }
}
