import { EventRegistration } from './event-registration.model';
import { IIdentifiable } from 'projects/drmueller/data-access/src/lib/areas/data-abstractions';

export class Event implements IIdentifiable {
  public eventName: string;
  public id: string;
  public registrations: EventRegistration[];
}
