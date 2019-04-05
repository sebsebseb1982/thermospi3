import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(private httpClient: HttpClient) {}

  public getSensors(){
    return this.httpClient.get(`http://5ca71dcb8e58df0014602d45.mockapi.io/conges`);
  }
}
