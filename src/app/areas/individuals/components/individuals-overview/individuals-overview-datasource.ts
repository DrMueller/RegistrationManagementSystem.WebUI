import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';

import { merge, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

import { IndividualOverviewEntryDto } from '../../dtos';

export class IndividualsOverviewDataSource extends DataSource<IndividualOverviewEntryDto> {
  public constructor(
    private paginator: MatPaginator,
    private sort: MatSort,
    private data: IndividualOverviewEntryDto[]
  ) {
    super();
  }

  public disconnect() { }
  public connect(): Observable<IndividualOverviewEntryDto[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  private getPagedData(data: IndividualOverviewEntryDto[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: IndividualOverviewEntryDto[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';

      const valueA = a[this.sort.active];
      const valueB = b[this.sort.active];

      return compare(valueA, valueB, isAsc);
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
