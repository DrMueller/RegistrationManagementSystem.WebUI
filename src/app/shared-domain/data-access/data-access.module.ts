import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as repositories from './repositories';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: []
})

export class DataAccessModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataAccessModule,
      providers: [
        repositories.EmailRepositoryService,
        repositories.EventRepositoryService,
        repositories.IndividualRepositoryService
      ]
    };
  }
}
