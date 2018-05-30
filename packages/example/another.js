import { final } from './end'

export function what() {
  console.log('what');
  return 'what' + final();
}

export function the() {
  console.log('the');
  return 'the';
}

export function foo() {
  return 'foo';
}
