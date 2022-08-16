import { Component, Input, OnInit } from '@angular/core';
import { gender } from 'src/models/enums/Gender';

@Component({
  selector: 'app-gender-distribution',
  templateUrl: './gender-distribution.component.html',
  styleUrls: ['./gender-distribution.component.scss']
})
export class GenderDistributionComponent implements OnInit {

  @Input()
  genderData?: any;

  @Input()
  captionText?: string;

  @Input()
  captionTooltip?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
