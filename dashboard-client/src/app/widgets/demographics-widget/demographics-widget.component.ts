import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { DemographicsIndividualBackground } from 'src/models/interfaces/DemographicsIndividualBackground';

@Component({
  selector: 'app-demographics-widget',
  templateUrl: './demographics-widget.component.html',
  styleUrls: ['./demographics-widget.component.scss']
})
export class DemographicsWidgetComponent implements OnInit {

  @Input()
  formData?: any;

  below = LegendPosition.Below;

  constructor() { }

  ngOnInit(): void {
  }

}
