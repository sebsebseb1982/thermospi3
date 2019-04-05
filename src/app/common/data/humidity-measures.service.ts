import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {IHumidityMeasure, ISensor} from "./data.models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HumidityMeasuresService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  public getMeasuresBySensor(sensor: ISensor): Observable<IHumidityMeasure[]> {
    return this.http.get<IHumidityMeasure[]>(`https://api.mlab.com/api/1/databases/thermospi2/collections/humidityMeasures?q={"sensorId": "${sensor.id}"}&s={"date": 1}&apiKey=${this.cookieService.get('mLabAPIKey')}`);
  }
}
