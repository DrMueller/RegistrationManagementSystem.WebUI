import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { SecurityUser } from '../../models';

@Component({
  selector: 'drm-user-claims',
  templateUrl: './user-claims.component.html',
  styleUrls: ['./user-claims.component.scss']
})
export class UserClaimsComponent {
  public constructor(
    public dialogRef: MatDialogRef<UserClaimsComponent>,
    @Inject(MAT_DIALOG_DATA) public securityUser: SecurityUser) { }
}
