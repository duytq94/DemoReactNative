import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class TabOneScreen extends Component {

  componentDidMount() {
    console.log('TabOne-value from state at root is: ', this.props.stateAtRoot)
    this.props.updateState({
      stateAtRoot: 'State at root is changed by TabOne'
    })
    setTimeout(() => console.log('TabOne-value from state at root after changed: ', this.props.stateAtRoot), 500)
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Tab one</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Check state at log</Text>
      </View>
    )
  }
}
