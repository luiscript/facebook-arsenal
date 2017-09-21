import React, { Component } from 'react';

import {
  QueryRenderer,
  graphql
} from 'react-relay';

import { StackNavigator } from 'react-navigation'

import { environment } from '../relayEnvironment';
import LoadingComponent from '../components/loadingComponent';
import ArtistList from '../components/artistFlatList';
import ArtistAlbums from '../components/artistAlbums';

const artistQuery = graphql`
  query mainQuery{
    ...artistFlatList
  }
`

class Main extends Component {
  static navigationOptions = {
    headerTitle: 'Music app',
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#007ACC',
        marginTop: 24
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={artistQuery}
        render={({error, props}) => {
          if (error) {
            return <LoadingComponent message='Error'/>
          }else if(props) {
            return <ArtistList data={props} {...this.props} />
          }
          return <LoadingComponent message='Loading'/>
        }}
      />
    );
  }
}

const Nav = StackNavigator({
  Home:     { screen: Main },
  Albums:   { screen: ArtistAlbums },
});

export default Nav;

