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

class Die extends Component {
  render () {
    return (
      <View style={Styles.dieView}>
        <Text style={Styles.dieText}>{ this.props.result }</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  result: state.result
})

module.exports = {
  Die: connect(mapStateToProps)(Die)
}
