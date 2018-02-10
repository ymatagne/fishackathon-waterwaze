import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Event } from '../models/event';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventsService {
  isOnline: Boolean;

  constructor(private http: HttpClient) {
    this.isOnline = navigator.onLine ? true : false;
    var http = this.http;
    window.addEventListener("online", function () {
      console.log("online");
      var dataToSend: Event = JSON.parse(localStorage.getItem("waterwatchoffline"))
      if (dataToSend) {
        http.post<Event>('/api/v1/events', dataToSend).subscribe(() => { console.log("Data send") });
        localStorage.remove('waterwatchoffline');
      }
    }, false);
  }

  create(event: Event): Observable<Event> {
    if (this.isOnline) {
      return this.http.post<Event>('/api/v1/events', event)
        .pipe(
        catchError(this.handleError)
        );
    } else {
      localStorage.setItem("waterwatchoffline", JSON.stringify(event));
      return new Observable(null);
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
