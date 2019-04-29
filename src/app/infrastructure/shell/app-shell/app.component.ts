import { Component, OnInit } from '@angular/core';

import { SecurityUserService } from 'projects/drmueller/security/src/public_api';
import { EnvironmentService } from 'src/app/infrastructure/core-services/environment';

import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})

export class AppComponent implements OnInit {
  public constructor(
    private securityUserService: SecurityUserService,
    environmentService: EnvironmentService) {
    this.securityUserService.initialize(environmentService.adalConfiguration);
  }

  private test(): void {
  }

  private test1(): void {
  }

  public getRouterOutletState(outlet: any): string {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public ngOnInit(): void {
    this.securityUserService.handleCallback();
  }
}
