import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {ISensor, ITemperatureMeasure} from "./data.models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TemperatureMeasuresService {


  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  public getMeasuresBySensor(sensor: ISensor): Observable<ITemperatureMeasure[]> {
    return this.http.get<ITemperatureMeasure[]>(`https://api.mlab.com/api/1/databases/thermospi2/collections/temperatures?q={"sensorId": "${sensor.id}"}&s={"date": 1}&apiKey=${this.cookieService.get('mLabAPIKey')}`);
  }
}
