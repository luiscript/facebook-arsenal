import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import {
  QueryRenderer,
  graphql
} from 'react-relay';

import { environment } from '../relayEnvironment';

import MainComponent from '../components/main';

const artistQuery = graphql`
  query mainQuery{
    artistsList{
      name
      key: id
    }
  }
`

class Main extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={artistQuery}
        render={({error, props}) => {
          if (error) {
            return (
              <View>
              <Text>
                Error
              </Text>
            </View>
            )
          }else if(props) {
            return <MainComponent {...props} />
          }
          return (
            <View>
              <Text>
                Loading...
              </Text>
            </View>
          )
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
