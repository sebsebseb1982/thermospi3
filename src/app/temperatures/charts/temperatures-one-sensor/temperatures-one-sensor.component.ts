import {Component, Input, OnInit} from '@angular/core';
import {ISensor, ITemperatureMeasure} from "../../../common/data/data.models";
import {Chart} from "angular-highcharts";
import {SeriesZigzagOptions} from "highcharts";
import {TemperatureMeasuresService} from "../../../common/data/temperature-measures.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-temperatures-one-sensor',
  templateUrl: './temperatures-one-sensor.component.html',
  styleUrls: ['./temperatures-one-sensor.component.css']
})
export class TemperaturesOneSensorComponent implements OnInit {
  @Input() sensor: ISensor;
  chart: Chart;

  constructor(private temperatureMeasuresService: TemperatureMeasuresService) {
  }

  ngOnInit() {
    this.temperatureMeasuresService.getMeasuresBySensor(this.sensor).subscribe((measures: ITemperatureMeasure[]) => {
      this.chart = new Chart({
        chart: {
          type: 'spline',
          height: 250
        },
        title: {
          text: 'Température durant les dernières 24 heures'
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

  private prepareSerieFormMeasures(measures: ITemperatureMeasure[]) {
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
