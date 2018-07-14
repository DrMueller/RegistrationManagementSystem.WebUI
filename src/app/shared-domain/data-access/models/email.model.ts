import { IIdentifiable } from 'projects/drmueller/data-access/src/lib/areas/data-abstractions';

export class Email implements IIdentifiable {
  public id: string;
  public subject: string;
}
