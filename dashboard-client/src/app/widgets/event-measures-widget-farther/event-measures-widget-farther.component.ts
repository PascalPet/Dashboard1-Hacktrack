import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-measures-widget-farther',
  templateUrl: './event-measures-widget-farther.component.html',
  styleUrls: ['./event-measures-widget-farther.component.scss']
})
export class EventMeasuresWidgetFartherComponent implements OnInit {

  @Input()
  formData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
