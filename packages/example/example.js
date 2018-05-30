// const assert = require('./assert')
import aaaEq, { equal as eq } from './assert'
// import { deepEqual } from 'assert'

export function myFunction() {
  function it() {
    eq(1, arguments[0]);
  }
  // deepEqual(1, 1);
  it();
}

function hisFunction() {
  console.log("his");
  aaaEq;
}

const what = function () {
  eq();
}

const bb = hisFunction() + eq();

export const aaa = hisFunction() + eq()

export { hisFunction as myFun }
// export * from "./assert"

// export default aa  = 3;
// export default function aaa () {}

function fun1() {
  // deepEqual(1, 1);
}

function fun2() {
  fun1();
}

function fun3() {
  fun2();
}

function fun4() {
  fun3();
}

export class ExportCls1 {

  constructor() {
    fun4();
  }

}

export class ExportCls2 {

  add() {
    this.name = eq;
  }

}

export default function () {

}
