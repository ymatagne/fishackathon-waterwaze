import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { Detail } from '../../models/detail';
import { GeoPoint } from '../../models/geoPoint';
import { PictureService } from '../../services/picture.service';
import { GeolocalisationService } from '../../services/geolocalisation.service';
import { EventsService } from '../../services/events.service';
import { Routes, RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-report-incident',
  templateUrl: './report-incident.component.html',
  styleUrls: ['./report-incident.component.css']
})
export class ReportIncidentComponent implements OnInit {

  public steps = ['Step 1/4 Type of problem', 'Step 2/4 Take a photo', 'Step 3/4 Confirm Photo', 'Step 4/4 Incident Details']
  public idx: Number = 0;
  event: Event = new Event();
  imageData: any;
  isImageSelected = false;
  fileToUpload: File;

  constructor(private router: Router, private pictureService: PictureService, private eventService: EventsService, private geoService: GeolocalisationService) { }
  ngOnInit() {
    this.event = new Event();
    this.event.details = new Detail();
    this.event.details.date = (Date.now()).toString();
    this.event.location = this.geoService.getYourPosition();
    var event = this.event;
  }

  setEvent(type: String) {
    this.event.type = type;
    this.idx = 1;
  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      this.isImageSelected = true;
      const reader = new FileReader();
      this.fileToUpload = event.target.files[0];

      reader.onload = (event: any) => {
        this.imageData = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
      this.idx = 2;
    }
  }

  swipe(id, type) {
    console.log(type);
    switch (type) {
      case "swiperight":
        this.router.navigate(['']);
        return;
    }
  }

  continue() {
    this.idx = 3;
    this.pictureService.upload(this.fileToUpload).subscribe((response) => {
      console.log(response)
      this.event.details.image = response.path;
    });
  }

  getIcon(event: Event) {
    switch (event.type) {
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

  submit() {
    console.log(this.event);
    this.eventService.create(this.event).subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
