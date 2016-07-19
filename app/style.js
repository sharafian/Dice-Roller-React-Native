import React, { Component } from 'react';
import {
  Dimensions,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  dieView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  dieText: {
    fontSize: 180,
    textAlign: 'center',
  },

  input: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  separator: {
    fontSize: 32,
    textAlign: 'center',
    width: 40,
  },

  counterText: {
    fontSize: 32,
    textAlign: 'center',
    width: 80,
  },
  counterView: {
    backgroundColor: '#f5fcff'
  },
  counterError: {
    backgroundColor: '#f5fcff',
    opacity: 0.2
  },

  rollView: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  rollButton: {
    fontSize: 80,
    textAlign: 'center',
    justifyContent: 'center',
    height: 100,
    width: Dimensions.get('window').width,
    backgroundColor: '#eeeeee',
    color: '#f5fcff'
  }
});

module.exports = { Styles }
