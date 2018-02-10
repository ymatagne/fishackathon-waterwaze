import { GeoPoint } from './geoPoint';
import { Detail } from './detail';
export class Event {
    public type: String;
    public geoPoint: GeoPoint
    public detail: Detail;
}
