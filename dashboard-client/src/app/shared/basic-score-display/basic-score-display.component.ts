import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-score-display',
  templateUrl: './basic-score-display.component.html',
  styleUrls: ['./basic-score-display.component.scss']
})
export class BasicScoreDisplayComponent implements OnInit {

  @Input()
  captionText?: string;

  @Input()
  captionTooltip?: string;

  @Input()
  scoreNumber?: number;

  @Input()
  bestPossibleNumber?: number;

  @Input()
  sd?: number;

  @Input()
  tooltipLeft?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
