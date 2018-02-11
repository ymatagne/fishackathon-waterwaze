import { Component, OnInit } from '@angular/core';
import { GeolocalisationService } from './services/geolocalisation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public geoService: GeolocalisationService) {
    geoService.initGeolocalisation();
  }
}