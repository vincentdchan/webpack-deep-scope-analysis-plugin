// const assert = require('./assert')
import { equal } from './assert'

export function myFunction() {
  function it() {
    equal(1, arguments[0]);
  }
  it();
}
