import { Injectable } from '@angular/core';

import { RepositoryBaseService } from 'projects/drmueller/data-access/src/lib/areas';
import { CoreHttpService } from '../../../infrastructure/core-services';

import { Email } from '../models';

@Injectable()
export class EmailRepositoryService extends RepositoryBaseService<Email> {
  public constructor(coreHttpService: CoreHttpService) {
    super(coreHttpService, Email, 'emails');
  }
}
