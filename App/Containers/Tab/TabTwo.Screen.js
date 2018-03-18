import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { Text } from 'react-native'

export default class TabTwoScreen extends Component {
  componentWillMount() {
    console.tron.log('Tab two will mount')
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#f5f5f5' }}>
        <Content>
          <Text>Tab two</Text>
        </Content>
      </Container>
    )
  }
}
