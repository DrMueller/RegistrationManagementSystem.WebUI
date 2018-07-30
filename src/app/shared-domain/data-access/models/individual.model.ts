import { IIdentifiable } from 'projects/drmueller/data-access/src/lib/areas/data-abstractions';

import { EmailAddress } from './email-address.model';

export class Individual implements IIdentifiable {
  public id: string;
  public firstName: string;
  public lastname: string;
  public emailAddress: EmailAddress;
}
