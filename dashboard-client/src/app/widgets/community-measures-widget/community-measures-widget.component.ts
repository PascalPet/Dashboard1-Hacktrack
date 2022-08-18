import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-community-measures-widget',
  templateUrl: './community-measures-widget.component.html',
  styleUrls: ['./community-measures-widget.component.scss']
})
export class CommunityMeasuresWidgetComponent implements OnInit {

  @Input()
  formData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
