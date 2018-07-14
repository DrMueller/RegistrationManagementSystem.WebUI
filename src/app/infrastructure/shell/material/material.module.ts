import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class MaterialModule { }
