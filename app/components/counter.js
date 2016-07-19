import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'

// custom components and styles
import { Styles } from '../style'

class Counter extends Component {
  constructor (props) {
    super()
    this.state = {error: false}
  }

  update (text) {
    const re = this.props.allowNegative? (/^(\-?)[0-9]+$/):(/^[0-9]+$/)
    if (text.match(re)) {
      this.setState({error: false})
      this.props.update(text, this.props.field)
    } else {
      this.setState({error: true})
    }
  }

  render () {
    const style = this.state.error? Styles.counterError:Styles.counterView
    return (
      <View style={style}>
        <TextInput
          defaultValue={this.props[this.props.field]}
          keyboardType='numeric'
          style={Styles.counterText}
          onChangeText={(text) => this.update(text)}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => (state)
const mapDispatchToProps = (dispatch) => ({
  update: (value, key) => { dispatch({
    type: 'update',
    value,
    key
  })}
})

module.exports = {
  Counter: connect(mapStateToProps, mapDispatchToProps)(Counter)
}
