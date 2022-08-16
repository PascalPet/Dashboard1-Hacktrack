import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-widget',
  templateUrl: './basic-widget.component.html',
  styleUrls: ['./basic-widget.component.scss']
})
export class BasicWidgetComponent implements OnInit {

  @Input()
  dataBasicWidget?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
