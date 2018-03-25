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

        {/* Image demo */}
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
          ) : this.state.whichBtnClick === 'blink' ? (
            <BlinkView>
              <Image
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
                source={images.logo_uit}
              />
            </BlinkView>
          ) : this.state.whichBtnClick === 'combine' ? (
            <CombineView>
              <Image
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
                source={images.logo_uit}
              />
            </CombineView>
          ) : null}
        </View>

        {/* Buttons */}
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
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => this.setState({ whichBtnClick: 'bounce' })}
            style={styles.btn}
          >
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
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => this.setState({ whichBtnClick: 'blink' })}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>BLINK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ whichBtnClick: 'combine' })}
            style={styles.btn}
          >
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
    this.zoomInAnim = new Animated.Value(0)
  }
  componentDidMount() {
    const anim = Animated.timing(this.zoomInAnim, {
      toValue: 100,
      duration: 2000
    })
    Animated.loop(anim).start()
  }
  render() {
    const width = this.zoomInAnim
    const height = this.zoomInAnim
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
    this.zoomOutAnim = new Animated.Value(100)
  }

  componentDidMount() {
    const anim = Animated.timing(this.zoomOutAnim, {
      toValue: 0,
      duration: 2000
    })
    Animated.loop(anim).start()
  }

  render() {
    const width = this.zoomOutAnim
    const height = this.zoomOutAnim
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
    const anim = Animated.timing(this.fadeAnim, {
      toValue: 1,
      duration: 2000
    })
    Animated.loop(anim).start()
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
    const anim = Animated.timing(this.fadeAnim, {
      toValue: 0,
      duration: 2000
    })
    Animated.loop(anim).start()
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
    this.slideUpAnim = new Animated.Value(-80)
  }

  componentDidMount() {
    const anim = Animated.timing(this.slideUpAnim, {
      toValue: 80,
      duration: 2000
    })
    Animated.loop(anim).start()
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
    const anim = Animated.timing(this.moveAnim, {
      toValue: 100,
      duration: 2000
    })
    Animated.loop(anim).start()
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
    const anim = Animated.timing(this.rotateAnim, {
      toValue: 1,
      duration: 2000
    })
    Animated.loop(anim).start()
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

    this.bounceAnim = new Animated.Value(160)
  }

  componentDidMount() {
    const anim = Animated.spring(this.bounceAnim, {
      toValue: -20,
      friction: 1.2
    })
    Animated.loop(anim).start()
  }

  render() {
    return (
      <Animated.View style={{ marginBottom: this.bounceAnim }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

class BlinkView extends Component {
  constructor(props) {
    super(props)

    this.blinkAnim = new Animated.Value(0)
  }

  componentDidMount() {
    const anim = Animated.timing(this.blinkAnim, {
      toValue: 1,
      duration: 200
    })
    Animated.loop(anim).start()
  }

  render() {
    return (
      <Animated.View style={{ opacity: this.blinkAnim }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

class CombineView extends Component {
  constructor(props) {
    super(props)

    this.combineAnim1 = new Animated.Value(-200)
    this.combineAnim2 = new Animated.Value(-160)
    this.combineAnim3 = new Animated.Value(-100)
    this.combineAnim4 = new Animated.Value(-80)
  }

  componentDidMount() {
    const anim1 = Animated.timing(this.combineAnim1, {
      toValue: 0,
      duration: 2000
    })
    const anim2 = Animated.timing(this.combineAnim2, {
      toValue: 0,
      duration: 2000
    })
    const anim3 = Animated.timing(this.combineAnim3, {
      toValue: 100,
      duration: 2000
    })
    const anim4 = Animated.timing(this.combineAnim4, {
      toValue: 80,
      duration: 2000
    })
    Animated.loop(Animated.sequence([anim1, anim2, anim3, anim4])).start()
  }

  render() {
    return (
      <Animated.View
        style={{
          marginLeft: this.combineAnim1,
          marginBottom: this.combineAnim2,
          marginRight: this.combineAnim3,
          marginTop: this.combineAnim4
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}
