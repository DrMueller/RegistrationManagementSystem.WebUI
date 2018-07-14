import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment';
import { AppInfo } from '../models';

@Injectable()
export class EnvironmentService {
  public get isProduction(): boolean {
    return environment.production;
  }

  public get coreServiceBaseUrl(): string {
    return environment.coreServiceBaseUrl;
  }

  public get adalConfig(): any {
    return environment.adalConfig;
  }

  public get activateSecurity(): boolean {
    return environment.activateSecurity;
  }

  public get appInfo(): AppInfo {
    return <AppInfo>environment.appInfo;
  }
}
