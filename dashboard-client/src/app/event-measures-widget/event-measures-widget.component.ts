import {Component, Input, OnInit} from '@angular/core';
import {LegendPosition, Color, ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-event-measures-widget',
  templateUrl: './event-measures-widget.component.html',
  styleUrls: ['./event-measures-widget.component.scss']
})
export class EventMeasuresWidgetComponent implements OnInit {

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

  schemeType: string = 'linear';

  event_colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#293462',  '#1829EE', '#7aa3e5','#EC9B3B', '#F7D716'],
  };

  polar_colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#9C0F48',  '#1829EE', '#F7D716'],
  };
  below = LegendPosition.Below;

  @Input()
  formData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
