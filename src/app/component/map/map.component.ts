import { Component, OnInit } from '@angular/core';
import { GeolocalisationService } from '../../services/geolocalisation.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public lat: Number;
  public lng: Number;
  public zoom: Number;

  ngOnInit() {
    this.zoom = 16;
  }

  constructor(public geoService: GeolocalisationService, public eventService: EventsService) {
    geoService.location$.subscribe(
      location => {
        this.lat = location.coordinates[0];
        this.lng = location.coordinates[1];
      });
    this.eventService.getAllEvents().subscribe((data) => {

    })
  }
}
