import { Injectable } from '@angular/core';
import { AppNavigationEntry } from '../models';
import { RouteAuthorizationService } from 'projects/drmueller/security/src/lib/areas';

@Injectable({
  providedIn: 'root'
})
export class AppNavigationEntryFactoryService {
  public constructor(private routeAuthorizationService: RouteAuthorizationService) { }

  public createEntries(): AppNavigationEntry[] {
    const result = new Array<AppNavigationEntry>();

    result.push(this.createWithSecurity('Home', '/home'));
    result.push(this.createWithSecurity('Events', '/events'));
    result.push(this.createWithSecurity('E-Mails', '/emails'));
    result.push(this.createWithSecurity('Individuals', '/individuals'));

    return result;
  }

  private createWithSecurity(displayText: string, route: string): AppNavigationEntry {
    return new AppNavigationEntry(displayText, route, this.routeAuthorizationService.checkIfUserIsAuthorizedForRoute(route));
  }
}
