import React, { Component } from 'react'
import {
  View,
  Text,
  BackHandler,
  StatusBar,
  Image,
  WebView,
  TextInput,
  DatePickerAndroid,
  DatePickerIOS,
  TouchableOpacity
} from 'react-native'
import moment from 'moment'
// import DateTimePicker from 'react-native-modal-datetime-picker'

import Toast from 'react-native-simple-toast'

import styles from './Time.Style'
import images from '../../Themes/Images'

export default class TimeScreen extends Component {
  constructor(props) {
    super(props)
    backPress = this.handleBackPress.bind(this)
    this.state = {
      currentTime: moment().format('MMMM Do YYYY, hh:mm:ss a'),
      isDatePickerVisible: false
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

  getTime() {
    this.setState({
      currentTime: moment().format('MMMM Do YYYY, hh:mm:ss a')
    })
  }

  showDatePicker() {
    try {
      const { action, year, month, day } = DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2020, 4, 25)
      })
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message)
    }
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back} />
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>TIME</Text>
          <View style={styles.icBack} />
        </View>

        <TouchableOpacity
          style={styles.btnDone}
          onPress={() => {
            this.getTime()
          }}
        >
          <Text style={styles.textBtnDone}>Get current time</Text>
        </TouchableOpacity>
        <Text style={{ color: 'black', textAlign: 'center' }}>
          {this.state.currentTime}
        </Text>

        <View style={{ height: 100 }} />

        <TouchableOpacity
          style={styles.btnDone}
          onPress={() => {
            this.showDatePicker()
          }}
        >
          <Text style={styles.textBtnDone}>Show picker</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
