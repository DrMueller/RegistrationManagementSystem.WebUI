import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { EventsNavigationService, EventOverviewDataService } from '../../app-services';
import { EventOverviewEntryDto } from '../../dtos';
import { EventsOverviewDataSource } from './events-overview-datasource';
import { EmptyDataSource } from '../../../../infrastructure/data-sources';

@Component({
  selector: 'app-events-overview',
  templateUrl: './events-overview.component.html',
  styleUrls: ['./events-overview.component.scss']
})

export class EventsOverviewComponent implements OnInit {
  public displayedColumns = ['eventName', 'registrationsCount'];
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;
  public dataSource: DataSource<EventOverviewEntryDto> = new EmptyDataSource<EventOverviewEntryDto>();
  private selection = new SelectionModel<EventOverviewEntryDto>(true);

  private overviewEntries: EventOverviewEntryDto[];

  public constructor(
    private navigationService: EventsNavigationService,
    private dataService: EventOverviewDataService
  ) {
  }

  public get isEventSelected(): boolean {
    return this.selection.selected.length > 0;
  }

  public editSelectedEvent(): void {
    this.navigationService.navigateToEdit(this.selection.selected[0].id);
  }

  public toggleSelection(row: EventOverviewEntryDto): void {
    this.selection.toggle(row);
  }

  public createEvent(): void {
    this.navigationService.navigateToEdit('-1');
  }

  public isRowSelected(row: EventOverviewEntryDto): boolean {
    return this.selection.isSelected(row);
  }

  public async deleteSelectedEventsAsync(): Promise<void> {
    const deletePromises = this.selection.selected.map(dto => {
      const indx = this.overviewEntries.indexOf(dto);
      this.overviewEntries.splice(indx, 1);
      return this.dataService.deleteEventAsync(dto.id);
    });

    await Promise.all(deletePromises);
    this.dataSource = new EventsOverviewDataSource(this.paginator, this.sort, this.overviewEntries);
    this.selection.clear();
  }

  public async ngOnInit(): Promise<void> {
    this.overviewEntries = await this.dataService.loadOverviewEntriesAsync();
    this.dataSource = new EventsOverviewDataSource(this.paginator, this.sort, this.overviewEntries);
  }
}
