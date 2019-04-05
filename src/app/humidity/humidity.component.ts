import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {SensorsService} from "../data/sensors.service";

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];

  constructor(private breakpointObserver: BreakpointObserver, private sensorsService: SensorsService) {
  }

  ngOnInit() {
    this.sensorsService.getSensors().subscribe((res) => {
      this.cards = [{
        title: res[0].code,
        col: 1,
        row: 1
      }, {
        title: res[1].code,
        col: 1,
        row: 1
      }];
    });
  }
}
