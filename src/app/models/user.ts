import { GeoPoint } from './geoPoint'

export class User {
    public username: String;
    public password: String = '';
    public location: GeoPoint;
}
