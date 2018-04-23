import test from 'ava';
import { parse } from '../src';

test('returns an object for an input string', t => {
  t.deepEqual(parse('something'), {});
});