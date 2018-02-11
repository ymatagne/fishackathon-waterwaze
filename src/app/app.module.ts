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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserService } from './services/user.service';

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
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9Wf_SdMfHT-PLengQFgBvC7eb2HERL38'
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [GeolocalisationService, EventsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
