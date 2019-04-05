import {Component, Input, OnInit} from '@angular/core';
import {IHumidityMeasure, ISensor} from "../../../common/data/data.models";
import {Chart} from "angular-highcharts";
import {HumidityMeasuresService} from "../../../common/data/humidity-measures.service";
import * as _ from 'lodash';
import {SeriesZigzagOptions} from "highcharts";

@Component({
  selector: 'app-humidity-one-sensor',
  templateUrl: './humidity-one-sensor.component.html',
  styleUrls: ['./humidity-one-sensor.component.css']
})
export class HumidityOneSensorComponent implements OnInit {

  @Input() sensor: ISensor;
  chart: Chart;

  constructor(private humidityMeasuresService: HumidityMeasuresService) {
  }

  ngOnInit() {
    this.humidityMeasuresService.getMeasuresBySensor(this.sensor).subscribe((measures: IHumidityMeasure[]) => {
      this.chart = new Chart({
        chart: {
          type: 'spline',
          height: 250
        },
        title: {
          text: 'Humidité durant les dernières 24 heures'
        },
        credits: {
          enabled: false
        },
        series: [this.prepareSerieFormMeasures(measures)],
        xAxis: {
          type: 'datetime'
        }
      });
    });
  }

  private prepareSerieFormMeasures(measures: IHumidityMeasure[]) {
    return <SeriesZigzagOptions><any>{
      name: this.sensor.label,
      data: _.map(
        measures,
        (measure) => {
          return [
            new Date(measure.date.$date).getTime(),
            measure.value
          ]
        }
      )
    };
  }
}
