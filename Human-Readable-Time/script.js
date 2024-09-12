'use strict';

function humanReadable(seconds) {
  let hours = Math.trunc(seconds / 3600);
  let minutes = Math.trunc((seconds % 3600) / 60);
  let secs = seconds % 60;

  function format(value) {
    return value.toString().padStart(2, '0');
  }
  return `${format(hours)}:${format(minutes)}:${format(secs)}`;
}
