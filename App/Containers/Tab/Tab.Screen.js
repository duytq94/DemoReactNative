import React, {Component} from 'react'
import {BackHandler, Image, Text, TouchableOpacity, View} from 'react-native'

import TabOne from './TabOne.Screen'
import TabTwo from './TabTwo.Screen'

import styles from './Tab.Style'
import images from '../../Themes/Images'

export default class TabScreen extends Component {
  constructor(props) {
    super(props)
    this.backPress = this.handleBackPress.bind(this)
    this.state = {
      isTabOneActive: true,
      stateAtRoot: 'This is state at root'
    }
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPress)
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
            <Image style={styles.icBack} source={images.ic_back}/>
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>TAB</Text>
          <View style={styles.icBack}/>
        </View>

        <View style={{flex: 1}}>
          {
            this.state.isTabOneActive ?
              <TabOne {...this.state} {...this.props} updateState={this.setState.bind(this)}/> :
              <TabTwo/>
          }
        </View>

        <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
          <TouchableOpacity
            style={
              this.state.isTabOneActive ? styles.btnActive : styles.btnPassive
            }
            onPress={() => {
              this.setState({
                isTabOneActive: true
              })
            }}>
            <Text
              style={
                this.state.isTabOneActive
                  ? styles.textActive
                  : styles.textPassive
              }>
              TAB ONE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              this.state.isTabOneActive ? styles.btnPassive : styles.btnActive
            }
            onPress={() => {
              this.setState({
                isTabOneActive: false
              })
            }}>
            <Text
              style={
                this.state.isTabOneActive
                  ? styles.textPassive
                  : styles.textActive
              }>
              TAB TWO
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
