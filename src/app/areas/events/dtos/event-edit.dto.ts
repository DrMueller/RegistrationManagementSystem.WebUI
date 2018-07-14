import { EventRegistrationDto } from '.';

export class EventEditDto {
  public eventId: string;
  public eventName: string;
  public registrations: EventRegistrationDto[];

  constructor() {
    this.registrations = new Array<EventRegistrationDto>();
  }
}
