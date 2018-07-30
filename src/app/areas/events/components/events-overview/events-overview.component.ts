import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { EventsNavigationService, EventOverviewDataService } from '../../app-services';
import { EventOverviewEntryDto } from '../../dtos';
import { ColumnDefinitions } from 'projects/drmueller/ng-mat-extensions/src/public_api';

import { EventsOverviewColumnDefinitionsBuilderService } from '../../app-services/table-building';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-events-overview',
  templateUrl: './events-overview.component.html',
  styleUrls: ['./events-overview.component.scss']
})

export class EventsOverviewComponent implements OnInit {
  public columnDefinitions: ColumnDefinitions;
  public data: EventOverviewEntryDto[] = [];
  public selectedItems: EventOverviewEntryDto[] = [];

  public constructor(
    private navigationService: EventsNavigationService,
    private dataService: EventOverviewDataService,
    private colDefBuilder: EventsOverviewColumnDefinitionsBuilderService) {
  }

  public get areEventsSelected(): boolean {
    return this.data && this.data.length > 0;
  }

  public editSelectedEvent(): void {
    this.navigationService.navigateToEdit(this.selectedItems[0].id);
  }

  public rowSelectionChanged(selectedItems: EventOverviewEntryDto[]): void {
    this.selectedItems = selectedItems;
  }

  public createEvent(): void {
    this.navigationService.navigateToEdit('-1');
  }

  public async deleteSelectedEventsAsync(): Promise<void> {
    const deletePromises = this.selectedItems.map(dto => {
      const indx = this.selectedItems.indexOf(dto);
      this.selectedItems.splice(indx, 1);

      debugger;
      const indx2 = this.data.indexOf(dto);
      this.data.splice(indx2, 1);

      return this.dataService.deleteEventAsync(dto.id);
    });

    await Promise.all(deletePromises);
  }

  public async ngOnInit(): Promise<void> {
    this.columnDefinitions = this.colDefBuilder.buildDefinitions();
    this.data = await this.dataService.loadOverviewEntriesAsync();
  }
}
