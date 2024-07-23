#!/usr/bin/node

// Concatenate arrays and string characters using spread syntax
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
