import React, { Component } from 'react';

import {
  FlatList,
  View,
  Text
} from 'react-native';


import {
  createFragmentContainer,
  graphql
} from 'react-relay';

import ArtistRow from './artistRow';

class ArtistList extends Component {
  render() {
    const data = this.props.data.artistsList;
    return (
      <FlatList
        style={{flex: 1}}
        data={data.edges}
        keyExtractor={(item, index) => item.node.key}
        renderItem={({item}) => <ArtistRow {...item.node} navigation={this.props.navigation}/> }
      />
    );
  }
}


export default createFragmentContainer(ArtistList, graphql`
fragment artistFlatList on artistsList{
  artistsList(last: 15) @connection(key: "artistFlatList_artistsList", filters: []){
    edges{
      node{
        key: id
        name
        albums{
          edges{
            node{
              key: id
              title
              coverUrl
              description
            }
          }
        }
      }
    }
  }
}
`);
