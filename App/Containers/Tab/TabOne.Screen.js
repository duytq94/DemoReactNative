import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { Text } from 'react-native'

export default class TabOneScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#f5f5f5' }}>
        <Content>
          <Text>Tab one</Text>
        </Content>
      </Container>
    )
  }
}
