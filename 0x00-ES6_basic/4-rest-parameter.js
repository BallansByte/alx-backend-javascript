#!/usr/bin/node
// Function using rest parameter syntax
export default function returnHowManyArguments(...args) {
  return args.length;
}
