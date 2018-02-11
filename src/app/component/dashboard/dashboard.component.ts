import { Component, OnInit, ViewChild } from '@angular/core';
import { GeolocalisationService } from '../../services/geolocalisation.service';
import { EventsService } from '../../services/events.service';
import { Routes, RouterModule, Router } from "@angular/router";
import { Event } from '../../models/event';
import { GeoPoint } from '../../models/geoPoint';
import { ElementRef } from '@angular/core';

import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public lat: number;
  public lng: number;
  public zoom: Number;
  public events;
  chart: Highcharts.ChartObject;

  @ViewChild('chartTarget') chartTarget: ElementRef;

  @ViewChild("map") map;

  ngOnInit() {
    this.zoom = 7;
    this.events = []
    var geoPoint: GeoPoint = this.geoService.getYourPosition();
    this.lng = Number.parseInt(geoPoint.coordinates[0].toString());
    this.lat = Number.parseInt(geoPoint.coordinates[1].toString());

    this.eventService.getAllEvents().subscribe((data) => {
      this.events = data;
    })

    this.chart = chart(this.chartTarget.nativeElement, {});

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
    return event.details && event.details.image && (event.type === 'catch' || event.type === 'invasive' || event.type === 'waterway' || event.type === 'pollution' || event.type === 'fish');
  }

  constructor(public geoService: GeolocalisationService, public eventService: EventsService, private router: Router) {
  }

}
