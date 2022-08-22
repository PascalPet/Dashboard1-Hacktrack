import { Component, Input, OnInit } from '@angular/core';
import { colorScheme } from '../../shared/scheme';

@Component({
  selector: 'app-mentoring-widget',
  templateUrl: './mentoring-widget.component.html',
  styleUrls: ['./mentoring-widget.component.scss']
})
export class MentoringWidgetComponent implements OnInit {

  @Input()
  formData?: any;

  colorScheme = colorScheme;

  constructor() { }

  ngOnInit(): void {
  }

}
