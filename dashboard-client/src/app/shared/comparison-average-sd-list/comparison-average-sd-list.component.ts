import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison-average-sd-list',
  templateUrl: './comparison-average-sd-list.component.html',
  styleUrls: ['./comparison-average-sd-list.component.scss']
})
export class ComparisonAverageSdListComponent implements OnInit {

  @Input()
  answerList = Array<any>();

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
