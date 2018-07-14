import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class EmptyDataSource<T> extends DataSource<T> {
  public data: T[] = [];

  public connect(): Observable<T[]> {

    return new Observable();
    // return Observable.empty<Response>();
  }

  public disconnect() { }
}
