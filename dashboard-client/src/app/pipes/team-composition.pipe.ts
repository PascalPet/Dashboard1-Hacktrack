import { Pipe, PipeTransform } from '@angular/core';
import { TeamComposition } from 'src/models/interfaces/TeamComposition';
import { role } from '../../models/enums/Role';
import { average } from '../shared/average';
import { isNotNullArray } from '../shared/nullCheckList';
import {standardDeviation} from "../shared/standardDeviation";

@Pipe({
  name: 'teamCompositionPipe'
})
export class TeamCompositionPipe implements PipeTransform {

  transform(teamComposition: TeamComposition): any {
    let calculatedInputs = {
      teamSize: 0 as number | null,

      TeamLeader: [{"name": 'Yes', "value": 0},
        {"name": 'Someone else', "value": 0},
        {"name": 'Nobody', "value": 0}]
      ,
      TeamManager: [{"name": 'Yes', "value": 0},
      {"name": 'Someone else', "value": 0},
      {"name": 'Nobody', "value": 0}]
    ,
      SocialLeader: [{"name": 'Yes', "value": 0},
      {"name": 'Someone else', "value": 0},
      {"name": 'Nobody', "value": 0}]
    ,
      teamID: [] as string[],
      resourcesURL:[] as string[]
    ,
      familiarity: {
        avg: 0,
        sd: 0
      }
  };

  let  calculatedInput : {[k: string]: any} = {};
  let  helpAverageList:any[]  = [];
  let  helpSdList: any[] = [];

  for(const secondSet of Object.entries(teamComposition.TeamFamiliarity)) {
    if ((secondSet[1] as []).length !== 0 && isNotNullArray(secondSet[1])) {
      helpAverageList.push(average(secondSet[1].filter((value: any) => value !== null)));
      helpSdList.push(standardDeviation(secondSet[1].filter((value: any) => value !== null)));
    }
  }

  if (helpAverageList.length !== 0) {
    calculatedInputs.familiarity.avg = Math.round((average(helpAverageList) + 1 + Number.EPSILON) * 100) / 100;
    calculatedInputs.familiarity.sd = Math.round((average(helpSdList) + Number.EPSILON) * 100) / 100;
  } else {
    calculatedInputs.familiarity = {} as {avg: number, sd: number};
  }

  if (isNotNullArray(teamComposition.TeamSize) && teamComposition.TeamSize.filter(size => !isNaN(size)).length > 0) {
    calculatedInputs.teamSize = Math.round((average(teamComposition.TeamSize.filter(size => !isNaN(size) && size !== undefined && size !== null)) + Number.EPSILON) * 100) / 100;
  } else {
    calculatedInputs.teamSize = null;
  }

  if (isNotNullArray(teamComposition.TeamLeader)) {
    for(let entry of teamComposition.TeamLeader.filter(value => value !== null)) {
      calculatedInputs.TeamLeader[entry].value = calculatedInputs.TeamLeader[entry].value + 1;
    }
  } else {
    calculatedInputs.TeamLeader = new Array();
  }

  if (isNotNullArray(teamComposition.TeamManager)) {
    for(let entry of teamComposition.TeamManager.filter(value => value !== null)) {
      calculatedInputs.TeamManager[entry].value = calculatedInputs.TeamManager[entry].value + 1;
    }
  } else {
    calculatedInputs.TeamManager = new Array();
  }

  if (isNotNullArray(teamComposition.SocialLeader)) {
    for(let entry of teamComposition.SocialLeader.filter(value => value !== null)) {
      calculatedInputs.SocialLeader[entry].value = calculatedInputs.SocialLeader[entry].value + 1;
    }
  } else {
    calculatedInputs.SocialLeader = new Array();
  }

  calculatedInputs.teamID = teamComposition.TeamId.filter(value => value !== null && value !== undefined);
  calculatedInputs.resourcesURL = teamComposition.ResourcesURL.filter(value => value !== null && value !== undefined);
  return calculatedInputs;
}
}
