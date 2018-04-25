import * as graphql from 'graphql';

export const parse = (schema: string): graphql.DocumentNode | void => {
  let ret;
  try {
    ret = graphql.parse(schema);
  } catch (error) {
    console.error('Unable to parse schema or query');
    if (error.message.match(/syntax/gi)) {
      console.error(`${error.message}\n${JSON.stringify(error.locations)}`);
    }
  }

  return ret;
};
