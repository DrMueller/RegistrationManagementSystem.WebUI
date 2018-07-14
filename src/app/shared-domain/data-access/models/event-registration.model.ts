import { IIdentifiable } from 'projects/drmueller/data-access/src/lib/areas/data-abstractions';

export class EventRegistration implements IIdentifiable {
  public id: string;
  public emailId: string;
  public individualId: string;
}
