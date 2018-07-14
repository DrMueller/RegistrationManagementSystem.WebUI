import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IParameterlessConstructor } from '@drmueller/language-extensions/drmueller-language-extensions';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { ObjectFactoryService } from '../../object-creation';
import { ContentType } from '../enums';
import { HttpBaseServant } from './servants';

export abstract class HttpBaseService {
  protected constructor(
    private httpClient: HttpClient,
    private objectFactoryService: ObjectFactoryService,
    private baseUrl: string) { }

  public async getArrayAsync<T>(
    relativeUrl: string,
    ctor: IParameterlessConstructor<T>): Promise<T[]> {

    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = HttpBaseServant.createOptions();
    const array = await this.processResponse(this.httpClient.get<T[]>(completeUrl, requestOptions));

    const arrayResult = array.map(item => {
      const newObj = this.objectFactoryService.create(item, ctor);
      return newObj;
    });

    return arrayResult;
  }

  public deleteAsync(relativeUrl: string): Promise<void> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = HttpBaseServant.createOptions();
    const result = this.processResponse<void>(this.httpClient.delete<void>(completeUrl, requestOptions));

    return result;
  }

  public getAsync<T>(relativeUrl: string, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    const completeUrl = HttpBaseServant.createCompleteUrl(this.baseUrl, relativeUrl);
    const requestOptions = HttpBaseServant.createOptions();

    return this.processResponse(this.httpClient.get<T>(completeUrl, requestOptions), ctor);
  }

  public patchAsync<T>(relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = HttpBaseServant.createOptions(contentType);
    return this.processResponse<T>(this.httpClient.patch<T>(completeUrl, body, requestOptions), ctor);
  }

  public postAsync<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = HttpBaseServant.createOptions(contentType);
    return this.processResponse(this.httpClient.post<T>(completeUrl, body, requestOptions), ctor);
  }

  public putAsync<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = HttpBaseServant.createOptions(contentType);
    return this.processResponse(this.httpClient.put<T>(completeUrl, body, requestOptions), ctor);
  }

  private createCompleteUrl(relativeUrl: string): string {
    return HttpBaseServant.createCompleteUrl(this.baseUrl, relativeUrl);
  }

  private processResponse<T>(response: Observable<T>, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    let mappedResult = response;

    if (ctor) {
      mappedResult = mappedResult.pipe(
        map(f => {
          const newObj = this.objectFactoryService.create(f, ctor);
          return newObj;
        })
      );
    }

    const result = mappedResult.toPromise();
    return result;
  }
}
