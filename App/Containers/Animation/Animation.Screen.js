import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  BackHandler,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Animated
} from 'react-native'
import Permissions from 'react-native-permissions'
import ImagePicker from 'react-native-image-picker'

import styles from './Animation.Style'
import images from '../../Themes/Images'

export default class ProfileScreen extends Component {
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
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back} />
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>Animation</Text>
          <View style={styles.icBack} />
        </View>

        <ZoomInView
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <Image
            style={{ width: '100%', height: '100%' }}
            resizeMode="contain"
            source={images.logo_uit}
          />
        </ZoomInView>

        <FadeInView
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={images.logo_uit}
          />
        </FadeInView>
      </View>
    )
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
      toValue: 100,
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
