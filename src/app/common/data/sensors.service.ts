import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from "ngx-cookie-service";
import {ISensor, SensorType} from "./data.models";

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  public getSensorsByType(sensorType: SensorType): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(`https://api.mlab.com/api/1/databases/thermospi2/collections/sensors?q={"type": "${sensorType}"}&s={"label": 1}&apiKey=${this.cookieService.get('mLabAPIKey')}`);
  }

  public getSensors(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(`https://api.mlab.com/api/1/databases/thermospi2/collections/sensors?s={"label": 1}&apiKey=${this.cookieService.get('mLabAPIKey')}`);
  }
}
