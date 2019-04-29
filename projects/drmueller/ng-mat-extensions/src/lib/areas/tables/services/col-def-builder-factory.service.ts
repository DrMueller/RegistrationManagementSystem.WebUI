import { Injectable } from '@angular/core';

import { ColDefBuilderService } from './col-def-builder.service';

@Injectable({
  providedIn: 'root'
})
export class ColDefBuilderFactoryService {
  public createBuilder(): ColDefBuilderService {
    return new ColDefBuilderService();
  }
}

