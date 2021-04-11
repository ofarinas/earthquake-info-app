import {AfterViewInit, Component, OnInit} from '@angular/core';
import {EarthquakeService} from '../../services/earthquake.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(public earthquakeService: EarthquakeService) {
  }
}
