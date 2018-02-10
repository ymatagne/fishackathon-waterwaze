import { Injectable } from '@angular/core';
import { GeoPoint } from '../models/geoPoint';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class GeolocalisationService {

  private location = new Subject<GeoPoint>();
  location$ = this.location.asObservable();

  constructor() {
    navigator.geolocation.getCurrentPosition((position) => {
      var geoPoint = new GeoPoint();
      geoPoint.coordinates = [position.coords.longitude, position.coords.latitude];
      this.location.next(geoPoint);
    })
  }
}
