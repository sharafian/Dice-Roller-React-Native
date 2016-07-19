import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Styles } from './style';
// import { Die } from './components/die';
// import { Input } from './components/input';

class Roller extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={Styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={Styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

module.exports = { Roller }
