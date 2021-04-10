import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(public httpClient: HttpClient) {
  }

  async get(url: string): Promise<any> {
    try {
      return await this.httpClient.get<any>(url, this.getHttpOptions()).pipe(take(1)).toPromise();
    } catch (error) {
      return this.normalizeReponse(error);
    }
  }

  private normalizeReponse(error): any {
    const text = error.error.text.replace(');', '');
    return JSON.parse(text.split('eqfeed_callback(')[1]);
  }

  getHttpOptions(): any {
    return {
      headers: new HttpHeaders({'Content-Type': 'plain/text'})
    };
  }
}
