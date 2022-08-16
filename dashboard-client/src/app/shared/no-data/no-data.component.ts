import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {

  @Input()
  captionText?: string;

  @Input()
  captionTooltip?: string;

  @Input()
  tooltipLeft?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
