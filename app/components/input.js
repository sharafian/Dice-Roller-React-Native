import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'

// custom components and styles
import { Styles } from '../style'
import { Counter } from './counter'

class Input extends Component {
  render () {
    return (
      <View style={ Styles.input }>
        <Counter field='quantity' />
        <Text style={Styles.separator}>d</Text>
        <Counter field='sides' />
        <Text style={Styles.separator}>+</Text>
        <Counter field='bonus' allowNegative='true' />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  quantity: state.quantity,
  sides: state.sides,
  bonus: state.bonus
})

module.exports = { 
  Input: connect(mapStateToProps)(Input)
}
