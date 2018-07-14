import { HttpBaseService } from '../../../../../base-services/src/lib/areas/http';
import { IParameterlessConstructor } from '../../../../../language-extensions/src/lib/areas/language-extensions/types';

import { IIdentifiable } from '../data-abstractions';
import { IRepository } from './repository.interface';

export abstract class RepositoryBaseService<TModel extends IIdentifiable> implements IRepository<TModel> {
  protected constructor(
    private httpBaseService: HttpBaseService,
    private ctor: IParameterlessConstructor<TModel>,
    protected relativeUrl: string,
  ) { }

  public async deleteAsync(id: string): Promise<void> {
    await this.httpBaseService.deleteAsync(this.relativeUrl + '/' + id);
  }

  public async loadAllAsync(): Promise<TModel[]> {
    return await this.httpBaseService.getArrayAsync<TModel>(this.relativeUrl, this.ctor);
  }

  public async loadByIdAsync(id: string): Promise<TModel> {
    return await this.httpBaseService.getAsync<TModel>(this.relativeUrl + '/' + id, this.ctor);
  }

  public async loadByIdsAsync(ids: string[]): Promise<TModel[]> {
    return await this.httpBaseService.getArrayAsync(this.relativeUrl + '/' + ids.join(','), this.ctor);
  }

  public async saveAsync(model: TModel): Promise<TModel> {
    return await this.httpBaseService.putAsync<TModel>(this.relativeUrl, model, this.ctor);
  }
}
