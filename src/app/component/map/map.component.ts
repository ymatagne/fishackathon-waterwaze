import { Component, OnInit, ViewChild } from '@angular/core';
import { GeolocalisationService } from '../../services/geolocalisation.service';
import { EventsService } from '../../services/events.service';
import { Routes, RouterModule, Router } from "@angular/router";
import { Event } from '../../models/event';
import { GeoPoint } from '../../models/geoPoint';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public lat: number;
  public lng: number;
  public zoom: Number;
  public events;

  @ViewChild("map") map;

  ngOnInit() {
    this.zoom = 16;
    this.events = []
    var geoPoint: GeoPoint = this.geoService.getYourPosition();
    this.lng = Number.parseInt(geoPoint.coordinates[0].toString());
    this.lat = Number.parseInt(geoPoint.coordinates[1].toString());

    this.eventService.getAllEvents().subscribe((data) => {
      this.events = data;
    })
  }

  getIcon(event: Event) {
    switch (event.type) {
      case "user":
        return "/assets/user.png";
      case "catch":
        return "/assets/fish.png"
      case "invasive":
        return "/assets/invasive.png";
      case "waterway":
        return "/assets/waterway.png"
      case "pollution":
        return "/assets/pollution.png"
      case "algae":
        return "/assets/algae.png"
    }
  }

  havePicture(event) {
    return event.details && event.details.image &&(event.type === 'catch' || event.type === 'invasive' || event.type === 'waterway' || event.type === 'pollution' || event.type === 'fish');
  }
  swipe(type) {
    switch (type) {
      case "swipeleft":
        this.router.navigate(['']);
        return;
    }
  }
  constructor(public geoService: GeolocalisationService, public eventService: EventsService, private router: Router) {
  }
}
