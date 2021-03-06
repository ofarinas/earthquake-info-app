import {EarthquakeItem} from '../models/earthquake-item';

export class EarthquakeLoader {
  load(response: any): EarthquakeItem[] {
    return response.features.map(value => this.getProperties(value));
  }

  private getProperties(value): EarthquakeItem {
    return {
      title: value.properties.title,
      mag: value.properties.mag,
      place: value.properties.place,
      time: value.properties.time,
      detail: value.properties.detail,
      status: value.properties.status,
      tsunami: value.properties.tsunami,
      url: value.properties.url,
      type: value.properties.type
    } as EarthquakeItem;
  }
}
