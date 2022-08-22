import { Pipe, PipeTransform } from '@angular/core';
import { ProjectMeasures } from 'src/models/interfaces/ProjectMeasures';
import { average } from 'src/app/shared/average';
import { standardDeviation } from '../shared/standardDeviation';
import { isNotNullArray } from '../shared/nullCheckList';
import { CommunityMeasures } from "../../models/interfaces/CommunityMeasures";
import { TeamProcess } from "../../models/interfaces/TeamProcess";
import { removeNullAnswers } from "../shared/removeNullAnswers";

@Pipe({
  name: 'projectMeasuresPipe'
})
export class ProjectMeasuresPipe implements PipeTransform {

  transform(multipleLikertQuestions: ProjectMeasures | CommunityMeasures | TeamProcess): any {
    let  calculatedInput : {[k: string]: any} = {};
    let  helpAverageList:any[]  = [];
    let  helpSdList: any[] = [];

    for(let firstSet of Object.entries(multipleLikertQuestions)){
      removeNullAnswers(firstSet[1])
      for(const secondSet of Object.entries(firstSet[1]) as any[]){
        if ((secondSet[1] as []).length !== 0 && isNotNullArray(secondSet[1])){
          helpAverageList.push(average(secondSet[1].filter((value:any) => value !== null)));
          helpSdList.push(standardDeviation(secondSet[1].filter((value:any) => value !== null)));
        }
      }
      if (helpAverageList.length !== 0) {
        calculatedInput[firstSet[0]] = {
          avg : Math.round((average(helpAverageList) + 1 + Number.EPSILON) * 100) / 100,
          sd: Math.round((average(helpSdList) + Number.EPSILON) * 100) / 100
        };
      } else {
        calculatedInput[firstSet[0]] = [];
      }
      helpAverageList = [];
      helpSdList = [];
    }

  return calculatedInput;
  }

}
