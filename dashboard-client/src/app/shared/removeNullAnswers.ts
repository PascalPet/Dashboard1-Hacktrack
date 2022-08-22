export function removeNullAnswers(questionObject: {[k: string]: (number|null)[]}) {
  for(let questionSet of Object.entries(questionObject)) {
    let index = 0;
    for(let answer of questionSet[1]) {
      if (answer !== null) {
        break;
      } else {
        for(let questionSet of Object.entries(questionObject)) {
          questionSet[1].splice(index, 1);
        }
        index = index - 1;
      }
      index++;
    }
  }
}
