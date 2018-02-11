import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from '../app/component/map/map.component';
import { HomeComponent } from '../app/component/home/home.component';
import { LogCatchComponent } from './component/log-catch/log-catch.component';

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
        path: 'logcatch',
        component: LogCatchComponent
    }
];