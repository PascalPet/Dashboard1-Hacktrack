import { Component, Input, OnInit } from '@angular/core';
import { colorScheme } from '../../shared/scheme';

@Component({
  selector: 'app-motivation-widget',
  templateUrl: './motivation-widget.component.html',
  styleUrls: ['./motivation-widget.component.scss']
})
export class MotivationWidgetComponent implements OnInit {

  @Input()
  formData?: any;

  colorScheme = colorScheme;

  constructor() { }

  ngOnInit(): void {
  }

}
