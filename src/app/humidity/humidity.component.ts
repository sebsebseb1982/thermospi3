import {Component, OnInit} from '@angular/core';
import {SensorsService} from "../common/data/sensors.service";
import {Observable} from "rxjs";
import {ISensor} from "../common/data/data.models";

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {
  sensors: Observable<ISensor[]>;

  constructor(private sensorsService: SensorsService) {
  }

  ngOnInit() {
    this.sensors = this.sensorsService.getSensorsByType('radio-temperature-humidity');
  }
}
