import { Component, NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.html',
  styleUrls: ['./bubble-chart.scss']
})
export class bubbleChart implements OnInit{

  view: [number, number] = [700, 400];

  // options
  legend:boolean = true;
  legendTitle: string = "";
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'useful';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'employable';
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = -70;
  yScaleMax: number = -85;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  bubbleData = [
    {
      name: 'average',
      series: [
        {
          name: '1',
          x: '1',
          y: -80.3,
          r: -80.4
        },
        {
          name: '2',
          x: '2',
          y: -80.3,
          r: -78
        },
        {
          name: '3',
          x: '3',
          y: -75.4,
          r: -79
        },
        {
          name: '4',
          x: '4',
          y: -80.3,
          r: -80.4
        },
        {
          name: '5',
          x: '5',
          y: -80.3,
          r: -80.4
        }
      ]
    },
  ];

  constructor() {

  }

  ngOnInit(): void {
  }
}
