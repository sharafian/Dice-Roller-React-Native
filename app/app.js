import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// custom components and styles
import { Styles } from './style'
import { Die } from './components/die';
import { Input } from './components/input';
import { Roll } from './components/roll';

// redux stuff
import { createStore } from 'redux'
import { roller, init } from './reducer'
let store = createStore(roller, init)

class Roller extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <Provider store={store}>
        <View style={Styles.container}>
          <Die />
          <Input />
          <Roll />
        </View>
      </Provider>
    )
  }
}

export { Roller }
