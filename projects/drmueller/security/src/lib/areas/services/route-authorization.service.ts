import { Injectable } from '@angular/core';
import { SecurityUserService } from './security-user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteAuthorizationService {

  public constructor(private securityUserService: SecurityUserService) { }

  public checkIfUserIsAuthorizedForRoute(route: string): boolean {
    if (route.startsWith('/')) {
      route = route.substr(1);
    }

    const currentUser = this.securityUserService.getCurrentUser();
    if (!currentUser.isAuthenticated) {
      return route === 'home'; // Home is always allowed
    }

    return true;
  }
}
