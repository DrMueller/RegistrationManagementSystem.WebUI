import { ModuleWithProviders, NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import * as components from './areas/components';
import * as services from './areas/services';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  entryComponents: [
    components.ErrorDisplayComponent
  ],
  declarations: [
    components.ErrorDisplayComponent
  ],
  exports: [
    components.ErrorDisplayComponent
  ]
})

export class ErrorHandlingModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorHandlingModule,
      providers: [
        { provide: ErrorHandler, useClass: services.CustomErrorHandlerService },
        services.ErrorUnwrappingService,
        services.IgnoredErrorsService,
        services.ErrorInformationFactoryService
      ]
    };
  }
}
