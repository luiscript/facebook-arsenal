import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import { artists } from './mockData';
import { nodeField } from './node';
import ArtistType  from './types/artistType';

const queryType = new GraphQLObjectType({
  name: 'ArtistList',
  description: "A collection of Artists.",
  fields: () => ({
    artistsList: {
      description: "Returns a collection of artists",
      type: new GraphQLList(ArtistType),
      resolve: () => {
        return artists
      }
    }
  }),
  node: nodeField
});

module.exports = queryType
