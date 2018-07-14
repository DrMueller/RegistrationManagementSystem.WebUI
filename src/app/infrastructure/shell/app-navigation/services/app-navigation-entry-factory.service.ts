import { Injectable } from '@angular/core';
import { AppNavigationEntry } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppNavigationEntryFactoryService {
  public constructor() { }

  public createEntries(): AppNavigationEntry[] {
    const result = new Array<AppNavigationEntry>();

    result.push(this.createWithSecurity('Home', '/home'));
    result.push(this.createWithSecurity('Events', '/events'));
    result.push(this.createWithSecurity('E-Mails', '/emails'));
    result.push(this.createWithSecurity('Individuals', '/individuals'));

    return result;
  }

  private createWithSecurity(displayText: string, route: string): AppNavigationEntry {
    // TODO
    return new AppNavigationEntry(displayText, route, true);
  }
}
