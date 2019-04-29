import { Injectable } from '@angular/core';

import { ColumnDefinition, ColumnDefinitions } from '../models';

@Injectable({
  providedIn: 'root'
})

export class ColDefBuilderService {
  private _definitions: ColumnDefinition[];

  constructor() {
    this._definitions = [];
  }

  public withColumnDefinition(name: string, headerDescription: string, propertyName: string): ColDefBuilderService {
    const colDef = new ColumnDefinition(name, headerDescription, propertyName);
    this._definitions.push(colDef);
    return this;
  }

  public build(): ColumnDefinitions {
    return new ColumnDefinitions(this._definitions);
  }
}
