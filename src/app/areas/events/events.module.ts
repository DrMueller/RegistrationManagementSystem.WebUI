import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RxFormsModule } from 'projects/drmueller/rx-forms/src/public_api';

import * as components from './components';
import { MaterialModule } from '../../infrastructure/shell/material';
import * as appServices from './app-services';
import * as formBuilding from './app-services/form-building';
import * as resolvers from './app-services/resolvers';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
    RxFormsModule
  ],
  declarations: [
    components.EventEditComponent,
    components.EventsComponent,
    components.EventsOverviewComponent
  ],
  providers: [
    appServices.EventsNavigationService,
    appServices.EventEditService,
    appServices.EventOverviewDataService,
    formBuilding.EventEditFormBuilderService,
    resolvers.EventEditResolver
  ]
})

export class EventsModule { }
