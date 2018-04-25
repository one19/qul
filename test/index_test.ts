import test from 'ava';
import { parse } from '../src';

interface Types {
  object: 'ObjectTypeDefinition';
  scalar: 'ScalarTypeDefinition';
  interface: 'InterfaceTypeDefinition';
  union: 'UnionTypeDefinition';
  enum: 'EnumTypeDefinition';
  input: 'InputObjectTypeDefinition';
}

const typeNames: Types = {
  object: 'ObjectTypeDefinition',
  scalar: 'ScalarTypeDefinition',
  interface: 'InterfaceTypeDefinition',
  union: 'UnionTypeDefinition',
  enum: 'EnumTypeDefinition',
  input: 'InputObjectTypeDefinition'
};

test('returns udefined on invalid schema', t => {
  t.deepEqual(parse('something'), undefined);
});

test('returns objecty things well-parsed', t => {
  const parsed = parse(`
      type testymesty {
        scroogle: string
      }
    `);
  const parsedDef = parsed && parsed.definitions[0];
  t.deepEqual(parsed && parsed.definitions.length, 1);
  t.deepEqual(parsedDef.kind, typeNames.object);

  if (parsedDef.kind === typeNames.object) {
    t.deepEqual(parsedDef.name.value, 'testymesty');
    t.deepEqual(parsedDef.kind, typeNames.object);
    t.deepEqual(parsedDef.fields.length, 1);
  }
});
