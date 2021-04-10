import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {EarthquakeLoader} from '../utils/earthquake-loader';


@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {

  private earthquakeInfo: any;

  constructor(public httpClient: HttpService) {
  }

  getEarthquakeInfo(): any {
    return this.earthquakeInfo;
  }

  async init(): Promise<any> {
    this.earthquakeInfo = new EarthquakeLoader().load(await this.httpClient.get('http://localhost:4200/api'));
  }
}
