import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {EarthquakeLoader} from '../utils/earthquake-loader';
import {environment} from '../../environments/environment';


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
    this.earthquakeInfo = new EarthquakeLoader().load(await this.httpClient.get(environment.earthQuakeServiceUrl));
  }
}
