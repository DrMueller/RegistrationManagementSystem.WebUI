import { Injectable } from '@angular/core';

import { RepositoryBaseService } from 'projects/drmueller/data-access/src/lib/areas';
import { CoreHttpService } from '../../../infrastructure/core-services';

import { Event } from '../models';

@Injectable()
export class EventRepositoryService extends RepositoryBaseService<Event> {
  public constructor(coreHttpService: CoreHttpService) {
    super(coreHttpService, Event, 'events');
  }
}
