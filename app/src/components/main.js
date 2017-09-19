import React, { Component } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { width, height} = Dimensions.get('window');

class ArtistRow extends Component {
  render(){
    return (
        <TouchableOpacity style = {styles.row}>
          <View>
            <Text>
              {this.props.name}
            </Text>
          </View>
          <View style={{flex: 1}}>
          </View>
          <View style={{marginRight: 15}}>
            <Text>
              >
            </Text>
          </View>
      </TouchableOpacity>

    )
  }
}

class MainComponent extends Component {
  render() {
    return (
      <FlatList
          style={styles.list}
          data = {this.props.artistsList}
          renderItem = {({item}) => <ArtistRow key={item.key} {...item} />}
       />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex:1,
    marginTop: 20,
    alignSelf: 'stretch'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    height: 60,
  }
});

export default MainComponent;
