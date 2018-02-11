import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from '../app/component/map/map.component';
import { HomeComponent } from '../app/component/home/home.component';
import { LogCatchComponent } from './component/log-catch/log-catch.component';
import { ReportIncidentComponent } from './component/report-incident/report-incident.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

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
        path: 'catch',
        component: LogCatchComponent
    },
    {
        path: 'incident',
        component: ReportIncidentComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];