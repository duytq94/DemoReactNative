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
    this.state = {}
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

        <View
          style={{
            width: '100%',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <ZoomInView>
            <Image
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
              source={images.logo_uit}
            />
          </ZoomInView>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>ZOOM IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>ZOOM OUT</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>FADE IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>FADE OUT</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>BLINK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>SLIDE UP</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>ROTATE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>MOVE</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>BOUNCE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>COMBINE</Text>
          </TouchableOpacity>
        </View>
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
