import React, { Component } from 'react'
import OneSignal from 'react-native-onesignal'
import { View, Image, Animated, Text } from 'react-native'

import images from '../../Themes/Images'
import { duration } from 'moment'

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ZoomInView
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            style={{ width: '100%', height: '100%' }}
            resizeMode="contain"
            source={images.logo_uit}
          />
        </ZoomInView>
        <FadeInView>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              color: '#f5a623'
            }}
          >
            WELCOME TO DEMO REACT NATIVE
          </Text>
        </FadeInView>
      </View>
    )
  }

  componentWillMount() {
    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    OneSignal.addEventListener('ids', this.onIds)
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
    OneSignal.removeEventListener('ids', this.onIds)
  }

  onReceived(notification) {
    console.log('Notification received: ', notification)
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body)
    console.log('Data: ', openResult.notification.payload.additionalData)
    console.log('isActive: ', openResult.notification.isAppInFocus)
    console.log('openResult: ', openResult)
  }

  onIds(device) {
    console.log('Device info: ', device)
  }

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('MainScreen'), 3000)
  }
}

class ZoomInView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeAnim: new Animated.Value(0)
    }
  }
  componentDidMount() {
    Animated.timing(this.state.sizeAnim, {
      toValue: 150,
      duration: 2000
    }).start()
  }
  render() {
    const width = this.state.sizeAnim
    const height = this.state.sizeAnim
    return (
      <Animated.View
        style={{
          ...this.props.style,
          width,
          height
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start()
  }

  render() {
    let { fadeAnim } = this.state

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}
