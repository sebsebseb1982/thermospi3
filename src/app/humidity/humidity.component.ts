import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {SensorsService} from "../data/sensors.service";
import any = jasmine.any;

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards;

  constructor(private breakpointObserver: BreakpointObserver, private sensorsService: SensorsService) {
  }

  ngOnInit() {


    this.cards = this.sensorsService.getSensors();


  }
}
