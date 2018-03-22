// const assert = require('./assert')
import { equal } from 'assert'

export function myFunction() {
  function it() {
    equal(1, arguments[0]);
  }
  it();
}

function hisFunction() {
  console.log("his");
}

const bb = hisFunction() + equal();

export const aaa = hisFunction() + equal()

export { hisFunction }

// export default aa  = 3;
// export default function aaa () {}
