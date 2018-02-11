import { Component, OnInit, ViewChild } from '@angular/core';
import { GeolocalisationService } from '../../services/geolocalisation.service';
import { EventsService } from '../../services/events.service';
import { Routes, RouterModule, Router } from "@angular/router";
import { Event } from '../../models/event';

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
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    })

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
    }
  }

  swipe(id, type) {
    switch (type) {
      case "swipeleft":
        this.router.navigate(['']);
        return;
    }
  }
  constructor(public geoService: GeolocalisationService, public eventService: EventsService, private router: Router) {
  }
}
