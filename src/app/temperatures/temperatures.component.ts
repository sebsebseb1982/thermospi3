import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Observable} from "rxjs";
import {ISensor} from "../common/data/data.models";
import {SensorsService} from "../common/data/sensors.service";

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css']
})
export class TemperaturesComponent {
  sensors: Observable<ISensor[]>;

  constructor(private sensorsService: SensorsService) {
  }

  ngOnInit() {
    this.sensors = this.sensorsService.getSensors();
  }
}
