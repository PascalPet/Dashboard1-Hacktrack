import { Component, Input, OnInit } from '@angular/core';
import { colorScheme } from '../../shared/scheme';

@Component({
  selector: 'app-programming-experience-widget',
  templateUrl: './programming-experience-widget.component.html',
  styleUrls: ['./programming-experience-widget.component.scss']
})
export class ProgrammingExperienceWidgetComponent implements OnInit {

  colorScheme = colorScheme;

  @Input()
  formData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
