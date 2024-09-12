'use strict';

function rgb(r, g, b) {
  function toHex(value) {
    const clamped = Math.max(0, Math.min(255, value));
    return clamped.toString(16).padStart(2, '0').toUpperCase();
  }
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}
