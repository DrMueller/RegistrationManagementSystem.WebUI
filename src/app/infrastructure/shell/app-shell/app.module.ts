import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BaseServicesModule } from 'projects/drmueller/base-services/src/public_api';
import { ErrorHandlingModule } from 'projects/drmueller/error-handling/src/public_api';
import { NgMatExtensionsModule } from 'projects/drmueller/ng-mat-extensions/src/public_api';
import { RxFormsModule } from 'projects/drmueller/rx-forms/src/public_api';
import { SecurityModule } from 'projects/drmueller/security/src/public_api';

import { DataAccessModule } from '../../../shared-domain/data-access';
import { CoreServicesModule } from '../../core-services';
import { AppNavigationModule } from '../app-navigation';
import { MaterialModule } from '../material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppNavigationModule,
    AppRoutingModule,
    BaseServicesModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    CoreServicesModule.forRoot(),
    DataAccessModule.forRoot(),
    FlexLayoutModule,
    MaterialModule,
    NgMatExtensionsModule.forRoot(),
    RxFormsModule.forRoot(),
    ErrorHandlingModule.forRoot(),
    SecurityModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
