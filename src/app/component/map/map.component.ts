import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public lat: Number;
  public lng: Number;
  public zoom: Number;

  ngOnInit() {
    this.zoom = 16;
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    })
  }

  clickOnTheMap(event) {
    console.log(event);
  }
}
