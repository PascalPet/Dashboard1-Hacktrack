import { Component, Input, OnInit } from '@angular/core';
import { ProjectMeasures } from 'src/models/interfaces/ProjectMeasures';

@Component({
  selector: 'app-project-measures-widget',
  templateUrl: './project-measures-widget.component.html',
  styleUrls: ['./project-measures-widget.component.scss']
})
export class ProjectMeasuresWidgetComponent implements OnInit {
@Input() 
formData?: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
