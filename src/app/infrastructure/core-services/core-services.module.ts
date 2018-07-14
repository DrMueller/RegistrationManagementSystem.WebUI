import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import * as environment from './environment';
import * as http from './http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule

  ],
  declarations: [],
  providers: [
    HttpClientModule
  ]
})

export class CoreServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreServicesModule,
      providers: [
        environment.EnvironmentService,
        http.CoreHttpService,
      ]
    };
  }
}
