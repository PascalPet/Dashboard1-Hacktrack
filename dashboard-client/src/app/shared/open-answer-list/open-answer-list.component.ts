import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-answer-list',
  templateUrl: './open-answer-list.component.html',
  styleUrls: ['./open-answer-list.component.scss']
})
export class OpenAnswerListComponent implements OnInit {

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
