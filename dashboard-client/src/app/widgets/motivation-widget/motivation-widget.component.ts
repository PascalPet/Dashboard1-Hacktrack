import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivation-widget',
  templateUrl: './motivation-widget.component.html',
  styleUrls: ['./motivation-widget.component.scss']
})
export class MotivationWidgetComponent implements OnInit {

  @Input()
  formData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
