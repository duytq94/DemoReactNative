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
    this.state = {
      whichBtnClick: 'zoom in'
    }
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
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20
          }}
        >
          {this.state.whichBtnClick === 'zoom in' ? (
            <ZoomInView>
              <Image
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
                source={images.logo_uit}
              />
            </ZoomInView>
          ) : this.state.whichBtnClick === 'zoom out' ? (
            <ZoomOutView>
              <Image
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
                source={images.logo_uit}
              />
            </ZoomOutView>
          ) : this.state.whichBtnClick === 'fade in' ? (
            <FadeInView>
              <Image
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
                source={images.logo_uit}
              />
            </FadeInView>
          ) : this.state.whichBtnClick === 'fade out' ? (
            <FadeOutView>
              <Image
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
                source={images.logo_uit}
              />
            </FadeOutView>
          ) : this.state.whichBtnClick === 'slide up' ? (
            <SlideUpView>
              <Image
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
                source={images.logo_uit}
              />
            </SlideUpView>
          ) : this.state.whichBtnClick === 'move' ? (
            <MoveView>
              <Image
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
                source={images.logo_uit}
              />
            </MoveView>
          ) : this.state.whichBtnClick === 'rotate' ? (
            <RotateView>
              <Image
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
                source={images.logo_uit}
              />
            </RotateView>
          ) : this.state.whichBtnClick === 'bounce' ? (
            <BounceView>
              <Image
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
                source={images.logo_uit}
              />
            </BounceView>
          ) : null}
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => this.setState({ whichBtnClick: 'zoom in' })}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>ZOOM IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ whichBtnClick: 'zoom out' })}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>ZOOM OUT</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => this.setState({ whichBtnClick: 'fade in' })}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>FADE IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ whichBtnClick: 'fade out' })}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>FADE OUT</Text>
          </TouchableOpacity>
        </View>
        <View
          onPress={() => this.setState({ whichBtnClick: 'bounce' })}
          style={{ flexDirection: 'row' }}
        >
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>BOUNCE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ whichBtnClick: 'slide up' })}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>SLIDE UP</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => this.setState({ whichBtnClick: 'rotate' })}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>ROTATE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ whichBtnClick: 'move' })}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>MOVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

class ZoomInView extends Component {
  constructor(props) {
    super(props)
    this.zoomAnim = new Animated.Value(0)
  }
  componentDidMount() {
    Animated.timing(this.zoomAnim, {
      toValue: 100,
      duration: 2000
    }).start()
  }
  render() {
    const width = this.zoomAnim
    const height = this.zoomAnim
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

class ZoomOutView extends Component {
  constructor(props) {
    super(props)
    this.zoomAnim = new Animated.Value(100)
  }

  componentDidMount() {
    Animated.timing(this.zoomAnim, {
      toValue: 0,
      duration: 2000
    }).start()
  }

  render() {
    const width = this.zoomAnim
    const height = this.zoomAnim
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

class FadeInView extends Component {
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
    const opacity = this.fadeAnim

    return (
      <Animated.View style={{ opacity }}>{this.props.children}</Animated.View>
    )
  }
}

class FadeOutView extends Component {
  constructor(props) {
    super(props)
    this.fadeAnim = new Animated.Value(1)
  }

  componentDidMount() {
    Animated.timing(this.fadeAnim, {
      toValue: 0,
      duration: 2000
    }).start()
  }

  render() {
    const opacity = this.fadeAnim

    return (
      <Animated.View style={{ opacity }}>{this.props.children}</Animated.View>
    )
  }
}

class SlideUpView extends Component {
  constructor(props) {
    super(props)
    this.slideUpAnim = new Animated.Value(-50)
  }

  componentDidMount() {
    Animated.timing(this.slideUpAnim, {
      toValue: 50,
      duration: 2000
    }).start()
  }

  render() {
    const slideUpAnim = this.slideUpAnim

    return (
      <Animated.View style={{ marginBottom: slideUpAnim }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

class MoveView extends Component {
  constructor(props) {
    super(props)
    this.moveAnim = new Animated.Value(-100)
  }

  componentDidMount() {
    Animated.timing(this.moveAnim, {
      toValue: 100,
      duration: 2000
    }).start()
  }

  render() {
    const moveAnim = this.moveAnim

    return (
      <Animated.View style={{ marginLeft: moveAnim }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

class RotateView extends Component {
  constructor(props) {
    super(props)
    this.rotateAnim = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.rotateAnim, {
      toValue: 1,
      duration: 2000
    }).start()
  }

  render() {
    const interpolateRotation = this.rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const animatedStyle = {
      transform: [{ rotate: interpolateRotation }]
    }

    return (
      <Animated.View style={animatedStyle}>{this.props.children}</Animated.View>
    )
  }
}

class BounceView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounceAnim: new Animated.Value(0.3)
    }
  }

  componentDidMount() {
    this.state.bounceAnim.setValue(0.3)
    Animated.spring(this.state.bounceAnim, {
      toValue: 1,
      friction: 1
    }).start()
  }

  render() {
    return (
      <Animated.View style={{ transform: [{ scale: this.state.bounceAnim }] }}>
        {this.props.children}
      </Animated.View>
    )
  }
}
