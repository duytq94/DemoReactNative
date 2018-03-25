import React, { Component } from 'react'
import OneSignal from 'react-native-onesignal'
import { View, Image, Animated, Text } from 'react-native'

import images from '../../Themes/Images'
import styles from './Launch.Style'

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.viewWrapZoomIn}>
        <ZoomInView style={styles.zoomInView}>
          <Image
            style={styles.imageLogo}
            resizeMode="contain"
            source={images.logo_uit}
          />
        </ZoomInView>
        <FadeInView>
          <Text style={styles.textWelcome}>WELCOME TO DEMO REACT NATIVE</Text>
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

    this.zoomAnim = new Animated.Value(0)
  }
  componentDidMount() {
    Animated.timing(this.zoomAnim, {
      toValue: 150,
      duration: 2000
    }).start()
  }
  render() {
    const width = this.zoomAnim
    const height = this.zoomAnim
    return (
      <Animated.View
        style={{
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
  constructor(props) {
    super(props)
    this.fadeAnim = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start()
  }

  render() {
    return (
      <Animated.View
        style={{
          opacity: this.fadeAnim
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}
