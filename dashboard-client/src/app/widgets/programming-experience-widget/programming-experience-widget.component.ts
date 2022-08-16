import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming-experience-widget',
  templateUrl: './programming-experience-widget.component.html',
  styleUrls: ['./programming-experience-widget.component.scss']
})
export class ProgrammingExperienceWidgetComponent implements OnInit {

  @Input()
  formData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
