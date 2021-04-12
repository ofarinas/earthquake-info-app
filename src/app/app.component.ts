import {Component, OnInit} from '@angular/core';
import {EarthquakeService} from './services/earthquake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'earthquake-info-app';
  constructor(public earthquakeService: EarthquakeService) {
  }


  async ngOnInit(): Promise<void> {
    await this.earthquakeService.init();
  }

}
