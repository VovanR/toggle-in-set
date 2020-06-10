const test = require('ava');
const fn = require('.');

test('is function', t => {
  t.is(typeof fn, 'function');
});

test('should remove if exists', t => {
  const set = new Set([1, 2, 3]);
  const value = 2;
  t.deepEqual(fn(set, value), new Set([1, 3]));
});

test('should add if does not exists', t => {
  const set = new Set([1, 2, 3]);
  const value = 4;
  t.deepEqual(fn(set, value), new Set([1, 2, 3, 4]));
});
