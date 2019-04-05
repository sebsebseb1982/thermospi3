import {NgModule} from '@angular/core';
import {SensorsService} from "./sensors.service";
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import {HumidityMeasuresService} from "./humidity-measures.service";
import {TemperatureMeasuresService} from "./temperature-measures.service";

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [
    SensorsService,
    HumidityMeasuresService,
    TemperatureMeasuresService,
    CookieService
  ],
  bootstrap: []
})
export class DataModule {

}
