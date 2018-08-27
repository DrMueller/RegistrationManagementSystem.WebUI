import { Claim } from './claim.model';

export class SecurityUser {
  public constructor(
    public readonly userName: string,
    public readonly isAuthenticated: boolean,
    public readonly claims: Claim[]) {
  }

  public static createUnauthenticated(): SecurityUser {
    return new SecurityUser('Guest', false, []);
  }
}
