import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./home/home.component";
import {TemperaturesComponent} from "./temperatures/temperatures.component";
import {HumidityComponent} from "./humidity/humidity.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Accueil'
    }
  },
  {
    path: 'temperatures',
    component: TemperaturesComponent,
    data: {
      title: 'Températures'
    }
  },
  {
    path: 'humidity',
    component: HumidityComponent,
    data: {
      title: 'Humidité'
    }
  }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
