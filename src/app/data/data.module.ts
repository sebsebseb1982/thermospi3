import {NgModule} from '@angular/core';
import {SensorsService} from "./sensors.service";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [SensorsService],
  bootstrap: []
})
export class DataModule {

}
