import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {UiSharedModule} from './ui-shared.module';
import {EarthquakeService} from './services/earthquake.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{
        provide: EarthquakeService, useValue: {
          init: () => {
          },
          getEarthquakeInfo: () => {
          }
        }
      }],
      imports: [UiSharedModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'earthquake-info-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('earthquake-info-app');
  });

});
