import moment from 'moment';
import React, {Component} from 'react';
import {
  BackHandler,
  DatePickerAndroid,
  DatePickerIOS,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import images from '../../Themes/Images';
import styles from './Time.Style';


export default class TimeScreen extends Component {
  constructor(props) {
    super(props)
    backPress = this.handleBackPress.bind(this)
    this.state = {
      currentTime: moment().format('MMMM Do YYYY, hh:mm:ss a'),
      currentTimestamp: new Date().getTime(),
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

  getTimestamp() {
    this.setState({
      currentTimestamp: new Date().getTime(),
    })
  }

  setDate(newDate) {
  }

  showDatePicker() {
    try {
      const {action, year, month, day} = DatePickerAndroid.open({
        date: new Date(2020, 4, 25)
      })
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message)
    }
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back}/>
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>TIME</Text>
          <View style={styles.icBack}/>
        </View>

        {/*Current time*/}
        <TouchableOpacity
          style={styles.btnDone}
          onPress={() => {
            this.getTime()
          }}
        >
          <Text style={styles.textBtnDone}>Get current time</Text>
        </TouchableOpacity>
        <Text style={{color: 'black', textAlign: 'center'}}>
          {this.state.currentTime}
        </Text>

        <View style={{height: 30}}/>

        {/*Current timestamp*/}
        <TouchableOpacity
          style={styles.btnDone}
          onPress={() => {
            this.getTimestamp()
          }}
        >
          <Text style={styles.textBtnDone}>Get current timestamp</Text>
        </TouchableOpacity>
        <Text style={{color: 'black', textAlign: 'center'}}>
          {this.state.currentTimestamp}
        </Text>

        <View style={{height: 30}}/>

        {/*Show picker on android or calendar on iOS */}
        {
          Platform.OS === 'android' ?
            <TouchableOpacity
              style={styles.btnDone}
              onPress={() => {
                this.showDatePicker()
              }}
            >
              <Text style={styles.textBtnDone}>Show picker</Text>
            </TouchableOpacity> :
            <DatePickerIOS
              date={new Date()}
              onDateChange={this.setDate}/>
        }

      </View>
    )
  }
}
