import { Directive, Self } from '@angular/core';
import {PieChartComponent, PolarChartComponent} from '@swimlane/ngx-charts';

@Directive({
  selector: '[appChartMarginRemoval]'
})
export class ChartMarginRemovalDirective {

  constructor(@Self() pieChart: PieChartComponent) {
      pieChart.margins = [0, 0, 5, 0];
    }
}
