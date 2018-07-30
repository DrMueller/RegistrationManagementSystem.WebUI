import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RxFormsModule } from 'projects/drmueller/rx-forms/src/public_api';
import { NgMatExtensionsModule } from 'projects/drmueller/ng-mat-extensions/src/public_api';

import * as components from './components';
import { MaterialModule } from '../../infrastructure/shell/material';
import * as appServices from './app-services';
import * as formBuilding from './app-services/form-building';
import * as resolvers from './app-services/resolvers';
import { EventsRoutingModule } from './events-routing.module';
import * as tableBuilders from './app-services/table-building';


@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
    NgMatExtensionsModule,
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
    resolvers.EventEditResolver,
    tableBuilders.EventsOverviewColumnDefinitionsBuilderService
  ]
})

export class EventsModule { }
