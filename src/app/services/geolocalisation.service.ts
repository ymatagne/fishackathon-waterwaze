import { Injectable } from '@angular/core';
import { GeoPoint } from '../models/geoPoint';

import { Subject } from 'rxjs/Subject';
import { EventsService } from './events.service';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class GeolocalisationService {

  private location = new Subject<GeoPoint>();
  location$ = this.location.asObservable();

  constructor(public userService: UserService) {
    this.getYourPosition();
    navigator.geolocation.watchPosition((position) => {
      var geoPoint = new GeoPoint();
      geoPoint.coordinates = [position.coords.longitude, position.coords.latitude];
      this.location.next(geoPoint);
    })
  }

  getYourPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      var geoPoint = new GeoPoint();
      geoPoint.coordinates = [position.coords.longitude, position.coords.latitude];
      this.location.next(geoPoint);
      this.userService.create(geoPoint);
    })
  }
}
