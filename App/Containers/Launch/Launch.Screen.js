import React, {Component} from 'react'
import {Animated, Image, Text, View} from 'react-native'

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
