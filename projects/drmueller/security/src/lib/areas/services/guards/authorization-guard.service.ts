import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';

import { RouteAuthorizationService } from '../route-authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuardService {
  public constructor(private router: Router, private routeAuthorizationService: RouteAuthorizationService) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.routeAuthorizationService.checkIfUserIsAuthorizedForRoute(route.routeConfig.path)) {
      return true;
    }

    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
