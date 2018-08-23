import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { SecurityModule } from 'projects/drmueller/security/src/public_api';

import * as components from './components';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    SecurityModule
  ],
  declarations: [
    components.AppNavigationComponent,
    AppNavigationComponent
  ],
  exports: [
    components.AppNavigationComponent
  ]
})
export class AppNavigationModule { }
