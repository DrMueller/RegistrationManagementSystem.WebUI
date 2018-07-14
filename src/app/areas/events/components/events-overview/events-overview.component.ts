import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { NavigationService, EventOverviewDataService } from '../../app-services';
import { EventOverviewEntryDto } from '../../dtos';
import { EventsOverviewDataSource } from './events-overview-datasource';
import { EmptyDataSource } from 'src/app/infrastructure/data-sources';

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

  public constructor(
    private navigationService: NavigationService,
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

  public deleteSelectedEvent(): void {

  }

  public async ngOnInit(): Promise<void> {
    const overviewEntries = await this.dataService.loadOverviewEntriesAsync();
    this.dataSource = new EventsOverviewDataSource(this.paginator, this.sort, overviewEntries);
  }
}
