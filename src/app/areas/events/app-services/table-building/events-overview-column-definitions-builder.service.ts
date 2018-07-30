import { Injectable } from '@angular/core';

import { ColumnDefinitionsBuilderFactoryService, ColumnDefinitions } from 'projects/drmueller/ng-mat-extensions/src/public_api';

@Injectable({
  providedIn: 'root'
})
export class EventsOverviewColumnDefinitionsBuilderService {

  constructor(private builderFactory: ColumnDefinitionsBuilderFactoryService) { }

  public buildDefinitions(): ColumnDefinitions {
    return this.builderFactory
      .createBuilder()
      .withColumnDefinition('eventName', 'Event Name', 'eventName')
      .withColumnDefinition('registrationsCount', 'Registrations', 'registrationsCount')
      .build();
  }
}
