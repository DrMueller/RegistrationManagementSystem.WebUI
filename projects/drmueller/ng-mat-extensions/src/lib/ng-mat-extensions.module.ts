import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import * as table from './areas/tables';

@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  declarations: [
    table.MatTableComponent
  ],
  exports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    table.MatTableComponent
  ]
})
export class NgMatExtensionsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgMatExtensionsModule,
      providers: [
        table.ColumnDefinitionsBuilderFactoryService
      ]
    };
  }
}
