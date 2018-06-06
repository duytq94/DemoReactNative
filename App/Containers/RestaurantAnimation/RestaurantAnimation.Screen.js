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
  Animated,
} from 'react-native'

import styles from './RestaurantAnimation.Style'
import images from '../../Themes/Images'

export default class RestaurantAnimationScreen extends Component {
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
        {/* Toolbar */}
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back} />
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>RESTAURANT</Text>
          <View style={styles.icBack} />
        </View>

        {/* Tab indicator */}
        <View style={styles.tabIndicator}>
          <View style={styles.viewWrapItemTabIndicator}>
            <Image resizeMode="contain" style={styles.icTabIndicator} source={images.ic_home} />
            <Text style={styles.textTabIndicator}>Dashboard</Text>
          </View>
          <View style={styles.viewWrapItemTabIndicator}>
            <Image resizeMode="contain" style={styles.icTabIndicator} source={images.ic_menu} />
            <Text style={styles.textTabIndicator}>Menus</Text>
          </View>
          <View style={styles.viewWrapItemTabIndicator}>
            <Image resizeMode="contain" style={styles.icTabIndicator} source={images.ic_seat} />
            <Text style={styles.textTabIndicator}>Seats</Text>
          </View>
        </View>
      </View>
    )
  }
}
