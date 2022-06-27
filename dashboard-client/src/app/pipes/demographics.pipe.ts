import { Pipe, PipeTransform } from '@angular/core';
import { age } from 'src/models/enums/Age';
import { gender } from 'src/models/enums/Gender';
import { DemographicsIndividualBackground } from 'src/models/interfaces/DemographicsIndividualBackground';
import { isNotNullArray } from '../shared/nullCheckList';

@Pipe({
  name: 'demographicsPipe'
})
export class DemographicsPipe implements PipeTransform {

  transform(demographics: DemographicsIndividualBackground): any {
    let calculatedInputs = {
      age: [{"name": '18-24', "value": 0},
      {"name": '25-34', "value": 0},
      {"name": '35-44', "value": 0},
      {"name": '45-54', "value": 0},
      {"name": '55-64', "value": 0},
      {"name": '65-74', "value": 0},
      {"name": '75+', "value": 0},
      {"name": 'N/A', "value": 0}],
      gender: [{title: 'Female', value: 0, percentage: 0},
      {title: 'Male', value: 0, percentage: 0},
      {title: 'Non binary', value: 0, percentage: 0},
      {title: 'Prefer not to say', value: 0, percentage: 0}],
      minority: [{name: 'yes', value: 0},
      {name: 'no', value: 0},
      {name: 'Prefer not to say', value: 0}],
      education: [{title: 'High school diploma or GED', percentage: 0},
      {title: 'Some college, Associate and/or bachelor\'s degree', percentage: 0},
      {title: 'Bachelor\s degree', percentage: 0},
      {title: 'Professional degree', percentage: 0},
      {title: 'Master\s degree', percentage: 0},
      {title: 'Doctorate', percentage: 0},
      {title: 'Prefer not to say', percentage: 0}]
    };

    //Fill Age
    if (isNotNullArray(demographics.Age)) {
      for(let entry of demographics.Age) {
        if (entry !== null) calculatedInputs.age[entry].value = calculatedInputs.age[entry].value + 1;
      }
    } else {
      calculatedInputs.age = new Array();
    }

    //Fill gender
    if (isNotNullArray(demographics.Gender)) {
      for(let entry of demographics.Gender) {
        if (entry !== null) calculatedInputs.gender[entry].value = calculatedInputs.gender[entry].value + 1;
      }
    } else {
      calculatedInputs.gender = new Array();
    }
    for (let entry of calculatedInputs.gender){
      entry.percentage = Math.floor(entry.value / demographics.Gender.length * 100);
    }

    //Fill minority
    if (isNotNullArray(demographics.Minority)) {
      for(let entry of demographics.Minority) {
        if (entry !== null) calculatedInputs.minority[entry].value = calculatedInputs.minority[entry].value + 1;
      }
    } else {
      calculatedInputs.minority = new Array();
    }

    //Fill Education
    if (isNotNullArray(demographics.Education)) {
      for(let entry of demographics.Education) {
        if (entry) calculatedInputs.education[entry].percentage = calculatedInputs.education[entry].percentage + 1;
      }
      for (let entry of calculatedInputs.education){
        entry.percentage = Math.floor(entry.percentage / demographics.Education.length * 100);
      }
      calculatedInputs.education.sort((a:any, b:any) => (a.percentage > b.percentage ? -1 : 1));
    } else {
      calculatedInputs.education = new Array();
    }

    return calculatedInputs;
  }

}
