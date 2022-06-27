import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs';
import { EventMeasures } from "../../models/interfaces/EventMeasures";
import { average } from '../shared/average';
import { isNotNullArray } from '../shared/nullCheckList';
import { standardDeviation } from '../shared/standardDeviation';

@Pipe({
  name: 'eventMeasuresFartherPipe'
})
export class EventMeasuresFartherPipe implements PipeTransform {

  transform(eventFartherMeasures: EventMeasures): any {

    let eventFartherInput = {
      RecommendationInput: 0 as number | null,
      goodInput: [] as any[],
      improveInput: [] as any[],
      openInput: [] as any[]
    };

    if (isNotNullArray(eventFartherMeasures.RecommendationLikelyness) && eventFartherMeasures.RecommendationLikelyness.filter(value => !isNaN(value)).length > 0) {
      eventFartherInput.RecommendationInput = Math.round(average(eventFartherMeasures.RecommendationLikelyness.filter(value => !isNaN(value))));
    } else {
      eventFartherInput.RecommendationInput = null;
    }

    if (isNotNullArray(eventFartherMeasures.GoodEvent) && eventFartherMeasures.GoodEvent.filter(value => value !== undefined).length > 0) eventFartherInput.goodInput = eventFartherMeasures.GoodEvent.filter(value => value !== undefined);
    if (isNotNullArray(eventFartherMeasures.ImproveEvent) && eventFartherMeasures.ImproveEvent.filter(value => value !== undefined).length > 0) eventFartherInput.improveInput = eventFartherMeasures.ImproveEvent.filter(value => value !== undefined);
    if (isNotNullArray(eventFartherMeasures.OpenSharing) && eventFartherMeasures.OpenSharing.filter(value => value !== undefined).length > 0) eventFartherInput.openInput = eventFartherMeasures.OpenSharing.filter(value => value !== undefined);

    return eventFartherInput;
  };
}
