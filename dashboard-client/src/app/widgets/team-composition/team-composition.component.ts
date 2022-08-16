import { Component, Input, OnInit } from '@angular/core';
import { TeamComposition } from 'src/models/interfaces/TeamComposition';
@Component({
  selector: 'app-team-composition',
  templateUrl: './team-composition.component.html',
  styleUrls: ['./team-composition.component.scss']
})
export class TeamCompositionComponent implements OnInit {
  @Input()
  formData?: any;

  JSON = JSON;
  
  constructor() {}

  ngOnInit(): void {
  }

}
