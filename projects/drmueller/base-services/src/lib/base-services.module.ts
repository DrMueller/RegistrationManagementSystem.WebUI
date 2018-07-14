import { CommonModule } from '@angular/common';

import * as objectCreation from './areas/object-creation';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ],

})
export class BaseServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: BaseServicesModule,
      providers: [
        objectCreation.ObjectFactoryService
      ]
    };
  }
}
