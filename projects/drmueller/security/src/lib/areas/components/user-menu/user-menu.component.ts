import { Component, NgZone } from '@angular/core';

import { SecurityUserService } from '../../services';
import { SecurityUser } from '../../models';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { UserClaimsComponent } from '../user-claims';
import { ModalDialogService } from '../../../../../../ng-mat-extensions/src/lib/areas';

@Component({
  selector: 'drm-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  public constructor(
    private securityUserService: SecurityUserService,
    private modalDialogService: ModalDialogService
    ) { }

  public get securityUser(): SecurityUser {
    return this.securityUserService.getCurrentUser();
  }

  public showClaims(): void {
    this.modalDialogService.showModalDialog(this.securityUser, UserClaimsComponent);
  }

  public logIn(): void {
    this.securityUserService.logIn();
  }

  public logOut(): void {
    this.securityUserService.logOut();
  }
}
