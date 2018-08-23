import { Injectable } from '@angular/core';

import { AdalConfiguration } from 'projects/drmueller/security/src/public_api';

import { environment } from 'src/environments/environment';
import { AppInfo } from '../models';

@Injectable()
export class EnvironmentService {
  public get isProduction(): boolean {
    return environment.production;
  }

  public get coreServiceBaseUrl(): string {
    return environment.coreServiceBaseUrl;
  }

  public get adalConfiguration(): AdalConfiguration {
    return <AdalConfiguration> environment.adalConfig;
  }

  public get activateSecurity(): boolean {
    return environment.activateSecurity;
  }

  public get appInfo(): AppInfo {
    return <AppInfo>environment.appInfo;
  }
}
