'use strict';

function solution(list) {
  let result = [];
  let start = list[0];
  let end = list[0];
  // Iterate list from second element
  for (let i = 1; i <= list.lenght; i++) {
    if (list[i] === end + 1) {
      //If number is consecutive, extend range
      end = list[i];
    } else {
      //If number is not consecutive, end range & start new range
      if (start === end) {
        // Single value
        result.push(start.toString());
      } else if (end === start + 1) {
        // Two number range, format separately
        result.push(start.toString());
        result.push(end.toString());
      } else {
        // Range of more than 2 numbers
        result.push(`${start}-${end}`);
      }
      // Start new range
      start = list[i];
      ens = list[i];
    }
  }
  return result.join(',');
}
