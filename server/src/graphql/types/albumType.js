import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import {
  connectionDefinitions,
  connectionFromPromisedArray,
  connectionArgs,
  globalIdField,
} from 'graphql-relay';

import SongType from './songType';
import { getAlbumSongs } from '../mockData';
import { nodeInterface } from '../node';

const { connectionType: SongConnection  } =
  connectionDefinitions({nodeType: SongType});

const AlbumType = new GraphQLObjectType({
  name: "AlbumType",
  description: "Returns an album",
  fields: () => ({
    id:           globalIdField(),
    artistId:     { type: GraphQLString },
    title:        { type: GraphQLString },
    coverUrl:     { type: GraphQLString },
    description:  { type: GraphQLString },
    songs:        {
                    type: SongConnection,
                    args: connectionArgs,
                    resolve: (album, args) => connectionFromPromisedArray(
                      getAlbumSongs(album.id),
                      args
                    )
                  }
  }),
  interfaces: [nodeInterface]
});

module.exports = AlbumType;
