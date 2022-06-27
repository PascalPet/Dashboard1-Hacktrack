import { Pipe, PipeTransform } from '@angular/core';
import { IndividualMeasures } from 'src/models/interfaces/IndividualMeasures';
import { average } from '../shared/average';
import { isNotNullArray } from '../shared/nullCheckList';

@Pipe({
  name: 'individualMeasuresPipe'
})
export class IndividualMeasuresPipe implements PipeTransform {

  transform(individualMeasures: IndividualMeasures): any {
    
    let calculatedInputs = {
      participations: 0 as number | null,
      otherMotivations: [] as any[],
      motivationDistribution: [] as any[]
    }
    
    //Fill participations
    if (individualMeasures.EventParticipation.filter(value => !isNaN(value) && value !== null).length > 0) {
      calculatedInputs.participations = Math.round(average(individualMeasures.EventParticipation.filter(value => !isNaN(value) && value !== null)));
    } else {
      calculatedInputs.participations = null;
    }

    //Fill motivation distribution
    let nullChecker = false;
    for (let entry of Object.entries(individualMeasures.Motivation)) {
      if (isNotNullArray(entry[1])) {
        calculatedInputs.motivationDistribution.push(
          {
            "name": entry[0],
            "value": average(entry[1].filter(value => value !== null)) + 1
          });
      }
    }

    //Fill other motivations
    this.count(individualMeasures.MotivationOther.filter(text => text !== null && text !== undefined), calculatedInputs.otherMotivations);

    return calculatedInputs;
  }

  count(array: string[], target: any) {
    array.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] != current) {
        if (cnt > 0) {
          target.push({
            "text": current,
            "amount": cnt 
          });
        }
        current = array[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    if (cnt > 0) {
      target.push({
        "text": current,
        "amount": cnt 
      });
    }
  }

}
