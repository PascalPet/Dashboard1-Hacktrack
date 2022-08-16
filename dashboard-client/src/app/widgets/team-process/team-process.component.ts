import { Component, Input, OnInit } from '@angular/core';
import { TeamProcess } from 'src/models/interfaces/TeamProcess';
@Component({
  selector: 'app-team-process',
  templateUrl: './team-process.component.html',
  styleUrls: ['./team-process.component.scss']
})
export class TeamProcessComponent implements OnInit {
 
  @Input()
  formData?: any;
  

  constructor() { }

  ngOnInit(): void {
  }

  

}
