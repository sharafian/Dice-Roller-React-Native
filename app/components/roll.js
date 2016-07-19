import React, { Component } from 'react'
import Button from 'react-native-button'
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'

// custom components and styles
import { Styles } from '../style'

class Roll extends Component {
  constructor (props, context) {
    super(props, context)
  }
  render () {
    return (
      <View style={Styles.rollView}>
        <Button
          style={Styles.rollButton}
          onPress={() => this.props.roll()}
        >
          Roll it. 
        </Button>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  roll: () => { dispatch({
    type: 'roll',
  })}
})

module.exports = {
  Roll: connect(mapStateToProps, mapDispatchToProps)(Roll)
}
