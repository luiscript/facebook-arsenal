import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from 'graphql';

import {
  connectionDefinitions,
  connectionFromPromisedArray,
  connectionArgs,
  globalIdField,
} from 'graphql-relay';

import { nodeInterface } from '../node';
import { getArtistAlbums } from '../mockData';

import { AlbumType } from '../types';

const { connectionType: AlbumConnection  } =
  connectionDefinitions({nodeType: AlbumType});

const ArtistType = new GraphQLObjectType({
  name: 'ArtistType',
  description: "Returns artist info.",
  fields: () => ({
    id:         globalIdField(),
    name:       { type: GraphQLString },
    albums:     {
                  type: AlbumConnection,
                  args: connectionArgs,
                  resolve: (artist, args) => connectionFromPromisedArray(
                    getArtistAlbums(artist.id),
                    args
                  )
                }
  }),
  interfaces: [nodeInterface]
});

module.exports = ArtistType;
