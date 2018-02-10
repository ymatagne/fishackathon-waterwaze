import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from '../app/component/map/map.component';
import { EventComponent } from '../app/component/event/event.component';
import { HomeComponent } from '../app/component/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'event',
        component: EventComponent
    }
];