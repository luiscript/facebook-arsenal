import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import queryType from './queryType';

const schema = new GraphQLSchema({
  query: queryType,
})

module.exports = schema
