import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

import { IndividualOverviewEntryDto } from '../../dtos';
import { SelectionModel } from '@angular/cdk/collections';
import { EmptyDataSource } from '../../../../infrastructure/data-sources';
import { IndividualsNavigationService, IndividualsOverviewDataService } from '../../app-services';
import { IndividualsOverviewDataSource } from './individuals-overview-datasource';

@Component({
  selector: 'app-individuals-overview',
  templateUrl: './individuals-overview.component.html',
  styleUrls: ['./individuals-overview.component.scss']
})
export class IndividualsOverviewComponent implements OnInit {
  public displayedColumns = ['eventName', 'registrationsCount'];
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;
  public dataSource: DataSource<IndividualOverviewEntryDto> = new EmptyDataSource<IndividualOverviewEntryDto>();
  private selection = new SelectionModel<IndividualOverviewEntryDto>(true);

  private overviewEntries: IndividualOverviewEntryDto[];

  public constructor(
    private navigationService: IndividualsNavigationService,
    private dataService: IndividualsOverviewDataService
  ) {
  }

  public async deleteSelectedIndividualsAsync(): Promise<void> {
    const deletePromises = this.selection.selected.map(dto => {
      const indx = this.overviewEntries.indexOf(dto);
      this.overviewEntries.splice(indx, 1);
      return this.dataService.deleteIndividualAsync(dto.id);
    });

    await Promise.all(deletePromises);
    this.dataSource = new IndividualsOverviewDataSource(this.paginator, this.sort, this.overviewEntries);
    this.selection.clear();
  }

  public async ngOnInit(): Promise<void> {
    this.overviewEntries = await this.dataService.loadOverviewEntriesAsync();
    this.dataSource = new IndividualsOverviewDataSource(this.paginator, this.sort, this.overviewEntries);
  }
}
