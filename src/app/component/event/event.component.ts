import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { GeolocalisationService } from '../../services/geolocalisation.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public event: Event;

  constructor(public geoService: GeolocalisationService, public eventsService: EventsService) {
    this.event = new Event();
    geoService.location$.subscribe(
      location => {
        this.event.location = location;
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.eventsService.create(this.event).subscribe(() => { });
  }

}
