import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

const {
  connectionDefinitions,
  connectionFromPromisedArray,
  connectionArgs
} = require('graphql-relay');

import { getArtists } from './mockData';
import { nodeField } from './node';
import ArtistType  from './types/artistType';

const { connectionType: ArtistConnection  } =
connectionDefinitions({nodeType: ArtistType});

const queryType = new GraphQLObjectType({
  name: 'artistsList',
  description: "A collection of Artists.",
  fields: () => ({
    artistsList: {
      description: "Returns a collection of artists",
      type: ArtistConnection,
      args: connectionArgs,
      resolve: (_, args) => connectionFromPromisedArray(
        getArtists(),
        args
      )
    }
  }),
  node: nodeField
});

module.exports = queryType
