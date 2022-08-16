import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-answers-list',
  templateUrl: './long-answers-list.component.html',
  styleUrls: ['./long-answers-list.component.scss']
})
export class LongAnswersListComponent implements OnInit {

  @Input()
  answerList = Array<string>();

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
