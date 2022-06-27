import { Pipe, PipeTransform } from '@angular/core';
import { Mentoring } from 'src/models/interfaces/Mentoring';
import { average } from '../shared/average';
import { isNotNullArray } from '../shared/nullCheckList';

@Pipe({
  name: 'mentoringPipe'
})
export class MentoringPipe implements PipeTransform {

  transform(mentoring: Mentoring): any {

    let calculatedInput = {
      improvement: [] as string[],
      percievedSupport: [] as any[]
    }

    //Fill improvement opportunities
    if (isNotNullArray(mentoring.MentoringOther)) calculatedInput.improvement = mentoring.MentoringOther.filter(text => text !== undefined);

    //Fill percieved Support
    if (isNotNullArray(mentoring.MentoringOther)) {
      for(let entry of Object.entries(mentoring.MentoringExperience)) {
        if ((entry[1] as []).length > 0 && isNotNullArray(entry[1])) {
          calculatedInput.percievedSupport.push({
            "name": entry[0],
            "value": average(entry[1].filter(value => value !== null && value !== undefined)) + 1
          });
        }
      }
    }

    return calculatedInput;
  }

}
