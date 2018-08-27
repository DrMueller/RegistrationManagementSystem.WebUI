/// <reference path="../../../../node_modules/adal-angular4/adal-angular.d.ts" />.
import { Injectable } from '@angular/core';

import { AdalService } from 'adal-angular4';

import { AdalConfiguration, Claim, SecurityUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SecurityUserService {
  public constructor(
    private adalService: AdalService) { }

  public getCurrentUser(): SecurityUser {
    if (this.adalService.userInfo.authenticated) {
      const claims = this.getClaimsFromUser();

      return new SecurityUser(
        this.getUserName(),
        this.adalService.userInfo.authenticated,
        claims);
    }

    return SecurityUser.createUnauthenticated();
  }

  public handleCallback(): void {
    // Adal removes the has for some reason, therefore re-add it
    const currentLocationHash = window.location.hash;
    this.adalService.handleWindowCallback();
    if (this.adalService.userInfo.error) {
      throw new Error(this.adalService.userInfo.error);
    }

    window.location.hash = currentLocationHash;
  }

  public initialize(adalConfig: AdalConfiguration): void {
    const nativeConfig = <adal.Config>{
      tenant: adalConfig.tenant,
      redirectUri: adalConfig.redirectUri,
      clientId: adalConfig.clientId
    };

    const endpointMap = new Map<string, string>();
    adalConfig.endpoints.forEach(endpoint => {
      endpointMap.set(endpoint.url, endpoint.keyValue);
    });

    nativeConfig.endpoints = endpointMap;
    this.adalService.init(nativeConfig);
  }

  public logIn(): void {
    this.adalService.login();
  }

  public logOut(): void {
    this.adalService.logOut();
  }

  private getClaimsFromUser(): Claim[] {
    const profile = this.adalService.userInfo.profile;
    if (!profile) {
      return new Array<Claim>();
    }

    let claims = Object.keys(profile).map(f => {
      return new Claim(f, profile[f]);
    });

    claims = claims.sort((a, b) => (a.claimType > b.claimType ? 1 : -1));
    return claims;
  }

  private getUserName(): string {
    if (this.adalService.userInfo.profile && this.adalService.userInfo.profile.unique_name) {
      return this.adalService.userInfo.profile.unique_name;
    }

    return 'UNKNOWN';
  }
}
