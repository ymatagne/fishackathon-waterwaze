import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from '../app/component/map/map.component';
import { EventComponent } from '../app/component/event/event.component';
import { HomeComponent } from '../app/component/home/home.component';
import { PictureComponent } from './component/picture/picture.component';
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
        path: 'event',
        component: EventComponent
    },
    {
        path: 'picture',
        component: PictureComponent
    }, {
        path: 'logcatch',
        component: LogCatchComponent
    }
];