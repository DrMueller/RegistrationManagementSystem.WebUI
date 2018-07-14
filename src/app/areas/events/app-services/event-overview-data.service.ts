import { Injectable } from '@angular/core';

import { EventRepositoryService } from '../../../shared-domain/data-access';

import { EventOverviewEntryDto } from '../dtos';

@Injectable({
  providedIn: 'root'
})
export class EventOverviewDataService {
  public constructor(private eventRepository: EventRepositoryService) { }

  public async loadOverviewEntriesAsync(): Promise<Array<EventOverviewEntryDto>> {
    const events = await this.eventRepository.loadAllAsync();

    return events.map(event => {
      return new EventOverviewEntryDto(
        event.id,
        event.eventName,
        event.registrations.length);
    });
  }
}
