import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule, MatInputModule, MatSelectModule, MatRadioModule} from "@angular/material";
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { HumidityComponent } from './humidity/humidity.component';
import { TemperaturesComponent } from './temperatures/temperatures.component';
import { HumidityStatusComponent } from './home/charts/humidity-status/humidity-status.component';
import { TemperatureStatusComponent } from './home/charts/temperature-status/temperature-status.component';
import {TitleService} from "./common/title.service";
import {DataModule} from "./common/data/data.module";
import { ConfigurationComponent } from './configuration/configuration.component';
import { ReactiveFormsModule } from '@angular/forms';
import {CookieService} from "ngx-cookie-service";
import { HumidityOneSensorComponent } from './humidity/charts/humidity-one-sensor/humidity-one-sensor.component';
import {ChartModule} from "angular-highcharts";
import { TemperaturesOneSensorComponent } from './temperatures/charts/temperatures-one-sensor/temperatures-one-sensor.component';
import { TemperaturesAllSensorsComponent } from './temperatures/charts/temperatures-all-sensors/temperatures-all-sensors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    HumidityComponent,
    TemperaturesComponent,
    HumidityStatusComponent,
    TemperatureStatusComponent,
    ConfigurationComponent,
    HumidityOneSensorComponent,
    TemperaturesOneSensorComponent,
    TemperaturesAllSensorsComponent
  ],
  imports: [
    DataModule,
    BrowserModule,
    MatCardModule,
    MatSidenavModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    ChartModule
  ],
  providers: [TitleService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(titleService: TitleService) {
    titleService.init();
  }
}
