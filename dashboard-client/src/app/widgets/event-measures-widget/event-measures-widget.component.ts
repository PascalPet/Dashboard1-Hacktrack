import {Component, Input, OnInit} from '@angular/core';
import {LegendPosition} from "@swimlane/ngx-charts";
import { colorScheme } from '../../shared/scheme';

@Component({
  selector: 'app-event-measures-widget',
  templateUrl: './event-measures-widget.component.html',
  styleUrls: ['./event-measures-widget.component.scss']
})
export class EventMeasuresWidgetComponent implements OnInit {

  colorScheme = colorScheme;

  overall_view: [number, number] = [300, 300];
  polar_view: [number, number] = [1100, 400];
  future_view: [number, number] = [600, 400];

  overall_legend:boolean = true;
  overall_legendTitle: string = "";
  overall_showXAxis: boolean = true;
  overall_showYAxis: boolean = true;
  overall_gradient: boolean = false;
  overall_showLegend: boolean = true;
  overall_showXAxisLabel: boolean = true;
  overall_yAxisLabel: string = '';
  overall_showYAxisLabel: boolean = true;
  overall_xAxisLabel: string = '';
  overall_maxRadius: number = 5;
  overall_minRadius: number = 1;
  overall_yScaleMin: number = -10;
  overall_yScaleMax: number = 10;

  polar_legend:boolean = true;
  polar_legendTitle: string = "";
  polar_showLabels: boolean = true;
  polar_animations: boolean = true;
  polar_xAxis: boolean = true;
  polar_yAxis: boolean = true;
  polar_showYAxisLabel: boolean = false;
  polar_showXAxisLabel: boolean = false;
  polar_xAxisLabel: string = 'Year';
  polar_yAxisLabel: string = 'Population';

  overall_colorScheme = {domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
  polar_colorScheme = {domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']};

  below = LegendPosition.Below;

  @Input()
  formData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
