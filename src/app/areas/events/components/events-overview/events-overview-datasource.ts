// import { DataSource } from '@angular/cdk/collections';
// import { MatPaginator, MatSort } from '@angular/material';

// import { merge, Observable, of as observableOf } from 'rxjs';
// import { map } from 'rxjs/operators';

// import { EventOverviewEntryDto } from '../../dtos';

// export class EventsOverviewDataSource extends DataSource<EventOverviewEntryDto> {
//   public constructor(
//     private paginator: MatPaginator,
//     private sort: MatSort,
//     private data: EventOverviewEntryDto[]
//   ) {
//     super();
//   }

//   public disconnect() { }
//   public connect(): Observable<EventOverviewEntryDto[]> {
//     const dataMutations = [
//       observableOf(this.data),
//       this.paginator.page,
//       this.sort.sortChange
//     ];

//     this.paginator.length = this.data.length;

//     return merge(...dataMutations).pipe(map(() => {
//       return this.getPagedData(this.getSortedData([...this.data]));
//     }));
//   }

//   private getPagedData(data: EventOverviewEntryDto[]) {
//     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
//     return data.splice(startIndex, this.paginator.pageSize);
//   }

//   private getSortedData(data: EventOverviewEntryDto[]) {
//     if (!this.sort.active || this.sort.direction === '') {
//       return data;
//     }

//     return data.sort((a, b) => {
//       const isAsc = this.sort.direction === 'asc';
//       switch (this.sort.active) {
//         case 'eventName': return compare(a.eventName, b.eventName, isAsc);
//         case 'registrationsCount': return compare(+a.registrationsCount, +b.registrationsCount, isAsc);
//         default: return 0;
//       }
//     });
//   }
// }

// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
