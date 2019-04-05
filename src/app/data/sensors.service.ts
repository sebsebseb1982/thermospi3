import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  private sensorsObservable = this.http.get<any[]>(`http://5ca71dcb8e58df0014602d45.mockapi.io/conges`);

  constructor(private http: HttpClient) {}

  public getSensors(): Observable<any[]>{
    return this.sensorsObservable;
  }
}
