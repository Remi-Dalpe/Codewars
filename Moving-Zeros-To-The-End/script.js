'use strict';

function moveZeros(arr) {
  let zeros = arr.filter((item) => item === 0);
  let nonZero = arr.filter((item) => item !== 0);
  return nonZero.concat(zeros);
}
