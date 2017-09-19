import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from 'graphql';

import {
  globalIdField
} from 'graphql-relay';

import { nodeInterface } from '../node';

const SongType = new GraphQLObjectType({
  name: "SongType",
  description: "Returns a single song",
  fields: () => ({
    id:       globalIdField(),
    albumId:  { type: GraphQLID },
    title:    { type: GraphQLString },
    length:   { type: GraphQLString }
  }),
  interfaces: [nodeInterface]
})

module.exports = SongType;
