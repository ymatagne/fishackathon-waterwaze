import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './component/map/map.component';
import { EventComponent } from './component/event/event.component';
import { HomeComponent } from './component/home/home.component';
import { routes } from './app-routing.module';
import { GeolocalisationService } from './services/geolocalisation.service';
import { EventsService } from './services/events.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EventComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9Wf_SdMfHT-PLengQFgBvC7eb2HERL38'
    }),
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [GeolocalisationService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
