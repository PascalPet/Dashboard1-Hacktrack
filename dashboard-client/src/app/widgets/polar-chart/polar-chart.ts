import {Component, NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.html',
  styleUrls: ['./polar-chart.scss']
})
export class polarChart implements OnInit{
  view: any[] = [700, 320];

  // options
  legend:boolean = true;
  legendTitle: string = "";
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  multi = [
    {
      "name": "Pre-event webinar",
      "series": [
        {
          "name": "enjoyable",
          "value": 62000000
        },
        {
          "name": "satisfied",
          "value": 73000000
        },
        {
          "name": "useful",
          "value": 89400000
        }
      ]
    },

    {
      "name": "Checkpoints",
      "series": [
        {
          "name": "enjoyable",
          "value": 250000000
        },
        {
          "name": "satisfied",
          "value": 309000000
        },
        {
          "name": "useful",
          "value": 311000000
        }
      ]
    },

    {
      "name": "Mentoring sessions",
      "series": [
        {
          "name": "enjoyable",
          "value": 58000000
        },
        {
          "name": "satisfied",
          "value": 50000020
        },
        {
          "name": "useful",
          "value": 58000000
        }
      ]
    },
  ];

  constructor() {

  }

  ngOnInit(): void {
  }
}
