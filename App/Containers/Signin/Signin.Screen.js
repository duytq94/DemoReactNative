import React, { Component } from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  BackHandler,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native'
import styles from './Signin.Style'
import images from '../../Themes/Images'

export default class SigninScreen extends Component {
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
          <Text style={styles.titleToolbar}>SIGN IN</Text>
          <View style={styles.icBack} />
        </View>

        <ScrollView>
          <View style={{ flex: 1 }}>
            <Text style={styles.textTitle}>LET'S GET STARTED</Text>

            <View style={styles.viewInput}>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="#7e8da6"
                placeholder="COUNTRY"
                placeholderTextColor="#aeaeae"
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.refs.username.focus()
                }}
              />
            </View>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="#7e8da6"
                ref="username"
                placeholder="USERNAME"
                placeholderTextColor="#aeaeae"
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.refs.email.focus()
                }}
              />
            </View>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="#7e8da6"
                ref="email"
                placeholder="EMAIL"
                placeholderTextColor="#aeaeae"
                returnKeyType="next"
                keyboardType="email-address"
                onSubmitEditing={() => {
                  this.refs.password.focus()
                }}
              />
            </View>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="#7e8da6"
                ref="password"
                placeholder="PASSWORD"
                placeholderTextColor="#aeaeae"
                returnKeyType="next"
                keyboardType="numeric"
                onSubmitEditing={() => {
                  this.refs.confirm.focus()
                }}
              />
            </View>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="#7e8da6"
                ref="confirm"
                placeholder="CONFIRM PASSWORD"
                placeholderTextColor="#aeaeae"
                returnKeyType="next"
                keyboardType="numeric"
                onSubmitEditing={() => {
                  this.refs.phone.focus()
                }}
              />
            </View>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="#7e8da6"
                ref="phone"
                placeholder="MOBILE PHONE"
                placeholderTextColor="#aeaeae"
                returnKeyType="done"
                keyboardType="phone-pad"
              />
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.btnSignIn}>
          <Text style={styles.textSignIn}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
