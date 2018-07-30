import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTable, Sort } from '@angular/material';

import { ColumnDefinitions } from '../../models';
import { TableSortingService } from '../../services';

@Component({
  selector: 'drm-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent<T> implements OnInit {

  // PAGING AUCH
  @Output() public selectionChanged = new EventEmitter<T[]>();

  @Input() public columnDefinitions: ColumnDefinitions;
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatTable) public matTable: MatTable<T>;

  private _data: T[];
  private selection = new SelectionModel<T>(true);

  public constructor(private sortingService: TableSortingService) {
  }

  @Input() public set data(values: T[]) {
    this._data = values;
    if (this.matTable) {
      this.matTable.renderRows();
    }
  }

  public get data(): T[] {
    return this._data;
  }

  public get entriesCount(): number {
    if (!this.data) {
      return 0;
    }

    return this.data.length;
  }

  public isRowSelected(row: T): boolean {
    return this.selection.isSelected(row);
  }

  public ngOnInit() {
  }

  public sortingChanged(sort: Sort): void {
    this.data = this.sortingService.sortEntries(this.data, sort, this.columnDefinitions);
    this.matTable.renderRows();
  }

  public toggleRowSelection(row: T): void {
    this.selection.toggle(row);
    this.selectionChanged.emit(this.selection.selected);
  }
}
