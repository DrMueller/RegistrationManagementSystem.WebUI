import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';

import { MaterialModule } from '../../infrastructure/shell/material';

import * as components from './components';
import * as appServices from './app-services';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [
    components.EventEditComponent,
    components.EventsComponent,
    components.EventsOverviewComponent
  ],
  providers: [
    appServices.NavigationService
  ]
})

export class EventsModule { }
