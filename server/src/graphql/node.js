import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay';

import {
  getArtists,
  getAlbum,
  getSong
} from './mockData';


const getObjectById = (type, id) => {
  const types = {
    artistType: getArtist,
    albumType: getAlbum,
    songType: getSong
  }
  return types[type](id);
};

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId)
    return getObjectById(type, id)
  },
  (object) => {
    const {
      ArtistType,
      AlbumType,
      SongType
    } = require('./types');

    if(object.hasOwnProperty('albums')) return ArtistType
    else if(object.hasOwnProperty('songs')) return AlbumType;
    else if(object.hasOwnProperty('songId')) return SongType;

    return null;
  }
)

exports.nodeInterface = nodeInterface;
exports.nodeField = nodeField;
