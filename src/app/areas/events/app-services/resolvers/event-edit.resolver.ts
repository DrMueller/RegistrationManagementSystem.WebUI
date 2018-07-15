import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { EventEditService } from '..';
import { EventEditDto } from '../../dtos';

@Injectable()
export class EventEditResolver implements Resolve<Promise<EventEditDto>>  {
  public constructor(private eventEditService: EventEditService) {
  }

  public async resolve(route: ActivatedRouteSnapshot): Promise<EventEditDto> {
    const eventId = route.paramMap.get('eventId');
    if (!eventId || eventId === '-1') {
      return Promise.resolve(new EventEditDto());
    }

    const event = await this.eventEditService.getByIdAsync(eventId);
    return event;
  }
}
