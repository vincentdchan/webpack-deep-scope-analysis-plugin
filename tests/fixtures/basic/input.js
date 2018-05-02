import { equal as eq, deepEqual } from './assert'

export function myFunction() {
  function it() {
    eq(1, arguments[0]);
  }
  deepEqual(1, 1);
  it();
}

function hisFunction() {
  console.log("his");
}

const what = function () {
  eq();
}

const bb = hisFunction() + eq();

export const aaa = hisFunction() + eq()

export { hisFunction as myFun }
export * from "./assert"
