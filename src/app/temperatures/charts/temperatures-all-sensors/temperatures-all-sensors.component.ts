import {Component, Input, OnInit} from '@angular/core';
import {ISensor, ITemperatureMeasure} from "../../../common/data/data.models";
import {Chart} from "angular-highcharts";
import {TemperatureMeasuresService} from "../../../common/data/temperature-measures.service";
import {SeriesZigzagOptions} from "highcharts";
import * as _ from 'lodash';


@Component({
  selector: 'app-temperatures-all-sensors',
  templateUrl: './temperatures-all-sensors.component.html',
  styleUrls: ['./temperatures-all-sensors.component.css']
})
export class TemperaturesAllSensorsComponent implements OnInit {
  @Input() sensors: ISensor[];
  chart: Chart;

  constructor(private temperatureMeasuresService: TemperatureMeasuresService, ) {
  }

  ngOnInit() {
    this.temperatureMeasuresService.getAllMeasures().subscribe((measures: ITemperatureMeasure[]) => {
      this.chart = new Chart({
        chart: {
          type: 'spline',
          height: 500
        },
        title: {
          text: 'Température durant les dernières 24 heures'
        },
        credits: {
          enabled: false
        },
        series: this.prepareSeriesFormMeasures(measures),
        xAxis: {
          type: 'datetime'
        }
      });
    });
  }

  private prepareSeriesFormMeasures(measures: ITemperatureMeasure[]) {
    let series : SeriesZigzagOptions[] = [];

    this.sensors.forEach((sensor: ISensor) => {
      series.push( <SeriesZigzagOptions><any>{
        name: sensor.label,
        data: _.map(
          _.filter(measures, {'sensorId': sensor.id}),
          (measure) => {
            return [
              new Date(measure.date.$date).getTime(),
              measure.value
            ]
          }
        )
      });
    });

    return series;
  }
}
