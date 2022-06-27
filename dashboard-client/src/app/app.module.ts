import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './shell/shell.component';
import { ClarityIcons,
          cogIcon,
          resizeIcon,
          infoCircleIcon,
          refreshIcon,
          exclamationCircleIcon
} from '@cds/core/icon';
import { BasicWidgetComponent } from './basic-widget/basic-widget.component';
import { BasicScoreDisplayComponent } from './basic-score-display/basic-score-display.component';
import { HttpClientModule } from '@angular/common/http';
import { MotivationWidgetComponent } from './motivation-widget/motivation-widget.component';
import { polarChart} from "./polar-chart/polar-chart";
import { bubbleChart} from "./bubble-chart/bubble-chart";
import { OpenAnswerListComponent } from './open-answer-list/open-answer-list.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MentoringWidgetComponent } from './mentoring-widget/mentoring-widget.component';
import { LongAnswersListComponent } from './long-answers-list/long-answers-list.component';
import { ProgrammingExperienceWidgetComponent } from './programming-experience-widget/programming-experience-widget.component';
import { ComparisonAverageSdListComponent } from './comparison-average-sd-list/comparison-average-sd-list.component';
import { ChartMarginRemovalDirective } from './directives/chart-margin-removal.directive';
import { DemographicsWidgetComponent } from './demographics-widget/demographics-widget.component';
import { GenderDistributionComponent } from './demographics-widget/gender-distribution/gender-distribution.component';
import { ProjectMeasuresWidgetComponent } from './project-measures-widget/project-measures-widget.component';
import { ProjectMeasuresPipe } from './pipes/project-measures.pipe';
import { EventMeasuresWidgetComponent } from "./event-measures-widget/event-measures-widget.component";
import { EventMeasuresWidgetFartherComponent } from "./event-measures-widget-farther/event-measures-widget-farther.component";
import { CommunityMeasuresWidgetComponent } from "./community-measures-widget/community-measures-widget.component";
import { TeamCompositionComponent} from "./team-composition/team-composition.component";
import { TeamProcessComponent} from "./team-process/team-process.component";
import { DemographicsPipe } from './pipes/demographics.pipe';
import { ProgrammingExperiencePipe } from './pipes/programming-experience.pipe';
import { IndividualMeasuresPipe } from './pipes/individual-measures.pipe';
import { MentoringPipe } from './pipes/mentoring.pipe';
import { TeamCompositionPipe } from './pipes/team-composition.pipe';
import { TeamProcessPipe } from './pipes/team-process.pipe';
import { EventMeasuresPipe } from "./pipes/event-measures.pipe";
import { EventMeasuresFartherPipe } from "./pipes/event-measures-farther.pipe";
import { CommunityMeasuresPipe } from "./pipes/community-measures.pipe";
import {PolarChartMarginRemovalDirective} from "./directives/polar-chart-margin-removal.directive";
import { FormsModule } from '@angular/forms';
import { NoDataComponent } from './no-data/no-data.component';

ClarityIcons.addIcons(cogIcon, resizeIcon, infoCircleIcon, refreshIcon, exclamationCircleIcon);

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    BasicWidgetComponent,
    BasicScoreDisplayComponent,
    MotivationWidgetComponent,
    OpenAnswerListComponent,
    MentoringWidgetComponent,
    LongAnswersListComponent,
    ProgrammingExperienceWidgetComponent,
    ComparisonAverageSdListComponent,
    ChartMarginRemovalDirective,
    DemographicsWidgetComponent,
    GenderDistributionComponent,
    ProjectMeasuresWidgetComponent,
    ProjectMeasuresPipe,
    EventMeasuresWidgetComponent,
    EventMeasuresWidgetFartherComponent,
    CommunityMeasuresWidgetComponent,
    TeamCompositionComponent,
    TeamProcessComponent,
    polarChart,
    bubbleChart,
    OpenAnswerListComponent,
    DemographicsPipe,
    ProgrammingExperiencePipe,
    IndividualMeasuresPipe,
    MentoringPipe,
    TeamCompositionPipe,
    TeamProcessPipe,
    EventMeasuresPipe,
    EventMeasuresFartherPipe,
    CommunityMeasuresPipe,
    PolarChartMarginRemovalDirective,
    NoDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
