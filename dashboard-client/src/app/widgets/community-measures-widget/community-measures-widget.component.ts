import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-community-measures-widget',
  templateUrl: './community-measures-widget.component.html',
  styleUrls: ['./community-measures-widget.component.scss']
})
export class CommunityMeasuresWidgetComponent implements OnInit {

  community_legend:boolean = false;
  community_legendTitle: string = "";
  community_showXAxis: boolean = true;
  community_showYAxis: boolean = true;
  community_gradient: boolean = false;
  community_showLegend: boolean = false;
  community_showXAxisLabel: boolean = false;
  community_yAxisLabel: string = '';
  community_showYAxisLabel: boolean = false;
  community_xAxisLabel: string = '';

  social_view: [number, number] = [900, 300];

  Social_maxYAxisTickLength = 50;

  // CommunityData = [
  //   {"name": 'I identify with other members of this community.', "value": 3.3},
  //   {"name": 'I am like other members of this community.', "value": 2.4},
  //   {"name": 'This community is an important reflection of who I am.', "value": 1.2},
  //   {"name": 'I would like to continue working with this community.', "value": 2},
  //   {"name": 'I dislike being a member of this community.', "value": 1},
  //   {"name": 'I would rather belong to another community.', "value": 4}
  // ];
  //
  // SocialData = [
  //   {"name": ' I feel I am part of this community.', "value": 3.3},
  //   {"name": 'I am interested in what goes on in this community.', "value": 2.4},
  //   {"name": 'Interacting with other members of this community makes me want to try new things.', "value": 1.2},
  //   {"name": 'I am willing to spend time to support general activities in this community.', "value": 2},
  //   {"name": 'Through this community I come into contact with new people all the time.', "value": 1},
  //   {"name": 'There are several people in this community that I trust to help me solve my problems.', "value": 4},
  //   {"name": 'I know someone in this community that I can turn to if I urgently need help.', "value": 3.5},
  //   {"name": 'There is someone in this community that I can turn to for advice about making important \n' +
  //       'decision.', "value": 2.4},
  //   {"name": 'The other members of this community would be good job references for me.', "value": 1.7},
  //   {"name": 'I do not know people in this community well enough to get them to do anything important.', "value": 1.7}
  // ];
  @Input()
  formData?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
