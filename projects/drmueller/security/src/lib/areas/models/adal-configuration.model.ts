import { Endpoint } from '.';

export class AdalConfiguration {
  constructor(
    public readonly tenant: string,
    public readonly clientId: string,
    public readonly redirectUri: string,
    public readonly endpoints: Endpoint[]) {
  }
}
