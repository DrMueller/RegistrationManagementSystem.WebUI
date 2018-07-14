import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataAccessModule } from '../../../shared-domain/data-access';
import { BaseServicesModule } from 'projects/drmueller/base-services/src/public_api';

import { AppNavigationModule } from '../app-navigation';
import { MaterialModule } from '../material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreServicesModule } from '../../core-services';

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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
