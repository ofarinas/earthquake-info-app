import {TestBed} from '@angular/core/testing';

import {EarthquakeService} from './earthquake.service';
import {HttpService} from './http.service';

describe('ErthquakeService', () => {
  let service: EarthquakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: HttpService, useValue: {
          init: () => {
          }
        }
      }]
    });
    service = TestBed.inject(EarthquakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
