import { GeoPoint } from './geoPoint';
import { Detail } from './detail';
export class Event {
    public type: String;
    public location: GeoPoint
    public detail: Detail;
}
