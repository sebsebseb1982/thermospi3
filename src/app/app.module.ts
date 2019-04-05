import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule} from "@angular/material";
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { HumidityComponent } from './humidity/humidity.component';
import { TemperaturesComponent } from './temperatures/temperatures.component';
import { HumidityStatusComponent } from './home/charts/humidity-status/humidity-status.component';
import { TemperatureStatusComponent } from './home/charts/temperature-status/temperature-status.component';
import {TitleService} from "./common/title.service";
import {DataModule} from "./data/data.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    HumidityComponent,
    TemperaturesComponent,
    HumidityStatusComponent,
    TemperatureStatusComponent
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
    MatMenuModule
  ],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(titleService: TitleService) {
    titleService.init();
  }
}
