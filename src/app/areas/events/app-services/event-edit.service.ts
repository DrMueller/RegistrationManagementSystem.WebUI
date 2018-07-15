import { Injectable } from '@angular/core';

import * as models from '../../../shared-domain/data-access/models';
import {
  EmailRepositoryService, EventRepositoryService, IndividualRepositoryService
} from '../../../shared-domain/data-access/repositories';

import { EventEditDto, EventRegistrationDto } from '../dtos';

@Injectable()
export class EventEditService {

  public constructor(
    private emailRepository: EmailRepositoryService,
    private individualRepository: IndividualRepositoryService,
    private eventRepository: EventRepositoryService) { }

  public async getByIdAsync(eventId: string): Promise<EventEditDto> {
    const event = await this.eventRepository.loadByIdAsync(eventId);
    const result = new EventEditDto();
    result.eventId = eventId;
    result.eventName = event.eventName;
    result.registrations = await this.loadEventRegistrationsAsync(event);
    return result;
  }

  public async saveAsync(dto: EventEditDto): Promise<void> {
    const modelEvent = new models.Event();
    modelEvent.id = dto.eventId;
    modelEvent.eventName = dto.eventName;

    await this.eventRepository.saveAsync(modelEvent);
  }

  private async loadEventRegistrationsAsync(modelEvent: models.Event): Promise<EventRegistrationDto[]> {
    const individualIds = modelEvent.registrations.map(reg => reg.individualId);
    const emailIds = modelEvent.registrations.map(reg => reg.emailId);
    const emails = await this.emailRepository.loadByIdsAsync(emailIds);
    const individuals = await this.individualRepository.loadByIdsAsync(individualIds);

    const result = modelEvent.registrations.map(reg => {
      const dto = new EventRegistrationDto();
      dto.id = reg.id;

      const individual = individuals.find(f => f.id === reg.individualId);
      dto.individualFirstName = individual.firstName;
      dto.individualLastname = individual.lastname;
      dto.emailSubject = emails.find(f => f.id === reg.emailId).subject;

      return dto;
    });

    return result;
  }
}
