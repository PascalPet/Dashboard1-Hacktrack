import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentoring-widget',
  templateUrl: './mentoring-widget.component.html',
  styleUrls: ['./mentoring-widget.component.scss']
})
export class MentoringWidgetComponent implements OnInit {

  @Input()
  formData?: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
