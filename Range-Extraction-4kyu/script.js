'use strict';

function solution(list) {
  let result = [];
  let rangeStart = list[0];
  let rangeEnd = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] === rangeEnd + 1) {
      rangeEnd = list[i];
    } else {
      if (rangeEnd - rangeStart >= 2) {
        result.push(`${rangeStart}-${rangeEnd}`);
      } else if (rangeEnd - rangeStart === 1) {
        result.push(`${rangeStart},${rangeEnd}`);
      } else {
        result.push(`${rangeStart}`);
      }
      rangeStart = list[i];
      rangeEnd = list[i];
    }
  }

  // Handle the final range or single number
  if (rangeEnd - rangeStart >= 2) {
    result.push(`${rangeStart}-${rangeEnd}`);
  } else if (rangeEnd - rangeStart === 1) {
    result.push(`${rangeStart},${rangeEnd}`);
  } else {
    result.push(`${rangeStart}`);
  }

  return result.join(',');
}
