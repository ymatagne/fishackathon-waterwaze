import { Injectable } from '@angular/core';
import { GeoPoint } from '../models/geoPoint';

import { Subject } from 'rxjs/Subject';
import { EventsService } from './events.service';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class GeolocalisationService {

  constructor(public userService: UserService) {
  }

  initGeolocalisation() {
    navigator.geolocation.getCurrentPosition((position) => {
      var geoPoint = new GeoPoint();
      geoPoint.coordinates = [position.coords.longitude, position.coords.latitude];
      localStorage.setItem("location_ww", JSON.stringify(geoPoint));
      this.userService.create(geoPoint);
    })
  }

  getYourPosition() {
    return JSON.parse(localStorage.getItem("location_ww"));
  }

}
