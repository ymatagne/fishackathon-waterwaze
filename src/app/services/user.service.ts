import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { GeoPoint } from '../models/geoPoint';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }
  create(geoPoint: GeoPoint) {
    if (navigator.onLine) {
      var user = new User();
      user.username = new Date().getTime().toString();
      user.password = 'password';
      user.location = geoPoint;
      this.http.post<Event>('/api/v1/user', user).subscribe(() => { console.log("Data send") });
    }
  }
}
