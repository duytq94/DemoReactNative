import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class TabTwoScreen extends Component {

  // Log life cycle
  constructor(props) {
    super(props)
    console.log('TabTwo-constructor')
  }

  componentWillMount() {
    console.log('TabTwo-componentWillMount')
  }

  componentDidMount() {
    console.log('TabTwo-componentDidMount')
  }

  componentWillUnmount() {
    console.log('TabTwo-componentWillUnmount')
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Tab two</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Check life cycle at log</Text>
      </View>
    )
  }
}
