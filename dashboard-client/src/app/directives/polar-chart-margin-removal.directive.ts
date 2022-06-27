import { Directive, Self } from '@angular/core';
import {PieChartComponent, PolarChartComponent} from '@swimlane/ngx-charts';

@Directive({
  selector: '[appPolarChartMarginRemoval]'
})
export class PolarChartMarginRemovalDirective {

  constructor(@Self() pieChart: PolarChartComponent) {
      pieChart.margin = [0, -0, -40, 10];
    }
}
