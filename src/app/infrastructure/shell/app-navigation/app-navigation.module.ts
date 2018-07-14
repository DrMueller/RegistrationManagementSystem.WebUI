import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';

import * as components from './components';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

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
    RouterModule
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
