import { isNil } from 'ramda';

function wrap(fun) {
  run();
}

function _final() {
  return isNil('final');
}

var final = wrap(_final); 

export { final }
