import { ContentType } from '../../enums';
import { HttpHeaders } from '@angular/common/http';

export class HttpBaseServant {
  // CAREFUL: Object is important
  // See here: https://stackoverflow.com/questions/45698594/property-data-does-not-exist-on-type-httpeventcustomer
  public static createOptions(contentType?: ContentType | null): object {
    const headers = new HttpHeaders();

    if (contentType) {
      headers.append('Content-Type', this.mapContentType(contentType));
    }

    const httpOptions = {
      headers: headers
    };

    return httpOptions;
  }

  public static createCompleteUrl(baseUrl: string, relativeUrl: string): string {
    let result = baseUrl;
    if (!result.endsWith('/')) {
      result += '/';
    }

    result += relativeUrl;

    return result;
  }

  private static mapContentType(contentType: ContentType): string {
    switch (contentType) {
      case ContentType.ApplicationJson:
        return 'application/json';
      default:
        throw new RangeError(contentType.toString() + ' is not recognized');
    }
  }
}
