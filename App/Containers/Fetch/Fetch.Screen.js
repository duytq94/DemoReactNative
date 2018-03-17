import React, { Component } from 'react'
import { View, Text, BackHandler } from 'react-native'
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Button,
  Left,
  Right,
  Icon
} from 'native-base'

import { connect } from 'react-redux'
import { FetchAction } from './Fetch.Action'

class FetchScreen extends Component {
  constructor(props) {
    super(props)
    backPress = this.handleBackPress.bind(this)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', backPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', backPress)
  }

  handleBackPress() {
    this.props.navigation.goBack()
    return true
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack()
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>FetchApiScreen</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => {}}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content style={{ backgroundColor: 'cyan' }}>
          <Button
            onPress={() => {
              this.props.getDataLocal(FetchAction.localRequest('hello'))
            }}
          >
            <Text>Test data</Text>
          </Button>

          <Button
            onPress={() => {
              this.props.getUser(FetchAction.userRequest('duy'))
            }}
          >
            <Text>Fetch user</Text>
          </Button>

          {this.props.isFetching ? (
            <Text>Fetching...</Text>
          ) : (
            <View>
              <Text>Data: {this.props.data}</Text>
              {this.props.error ? <Text>Has error</Text> : null}
            </View>
          )}
        </Content>
      </Container>
    )
  }
}

// this state from redux, not state of this component
function mapStateToProps(state) {
  return {
    isFetching: state.fetch.isFetching,
    data: state.fetch.data,
    error: state.fetch.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDataLocal: request => dispatch(request),
    getUser: request => dispatch(request)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchScreen)
