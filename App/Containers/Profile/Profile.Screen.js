import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  BackHandler,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

import styles from './Profile.Style'
import images from '../../Themes/Images'

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.backPress = this.handleBackPress.bind(this)

    this.state = {
      avatarSource: '',
      backgroundSource: ''
    }
  }

  pickPhoto(isChangeAvatar) {
    var options = {
      title: 'Choose ',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = {uri: response.uri}

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        if (isChangeAvatar) {
          this.setState({avatarSource: source})
        } else {
          this.setState({backgroundSource: source})
        }
      }
    })
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPress)
    console.log('duy log storage', this.state.storagePermission)
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
          <Text style={styles.titleToolbar}>EDIT PROFILE</Text>
          <View style={styles.icBack}/>
        </View>

        <StatusBar backgroundColor="#000000"/>

        {/* Change background */}
        <View>
          <Image
            resizeMode="cover"
            source={
              this.state.backgroundSource
                ? this.state.backgroundSource
                : images.bg_avatar
            }
            style={{height: 150}}
          />
          <TouchableOpacity
            onPress={() => this.pickPhoto(false)}
            style={styles.btnChangeBackground}
          >
            <Image
              style={{width: 30, height: 30}}
              source={images.ic_camera}
            />
          </TouchableOpacity>
        </View>

        {/* Change avatar */}
        <View style={styles.viewWrapAvatar}>
          <Image
            style={styles.imageChangeAvatar}
            source={
              this.state.avatarSource
                ? this.state.avatarSource
                : images.ic_avatar
            }
          />
          <TouchableOpacity
            onPress={() => this.pickPhoto(true)}
            style={styles.btnChangeAvatar}
          >
            <Image
              style={{width: 40, height: 40}}
              source={images.ic_camera}
            />
          </TouchableOpacity>
        </View>

        {/* Input field */}
        <View>
          <ScrollView>
            <View style={{margin: 10, flex: 1}}>
              <View style={styles.viewItemInput}>
                <Text style={styles.textTitleInput}>Username</Text>
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholder="Harry King"
                  placeholderTextColor="#aeaeae"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.refs.countryInput.focus()
                  }}
                />
                <View style={styles.viewBreakLine}/>
              </View>

              <View style={styles.viewItemInput}>
                <Text style={styles.textTitleInput}>Country</Text>
                <TextInput
                  ref="countryInput"
                  style={styles.textInput}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholder="Singapore"
                  placeholderTextColor="#aeaeae"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.refs.addressInput.focus()
                  }}
                />
                <View style={styles.viewBreakLine}/>
              </View>

              <View style={styles.viewItemInput}>
                <Text style={styles.textTitleInput}>Address</Text>
                <TextInput
                  ref="addressInput"
                  style={styles.textInput}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholder="4 Leng Kee Road, Singapore"
                  placeholderTextColor="#aeaeae"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.refs.aboutMeInput.focus()
                  }}
                />
                <View style={styles.viewBreakLine}/>
              </View>

              <View style={styles.viewItemInput}>
                <Text style={styles.textTitleInput}>About me</Text>
                <TextInput
                  ref="aboutMeInput"
                  style={styles.textInput}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholder="Fun"
                  placeholderTextColor="#aeaeae"
                  multiline={true}
                />
                <View style={styles.viewBreakLine}/>
              </View>

              <TouchableOpacity style={styles.btnDone}>
                <Text style={styles.textBtnDone}>DONE</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>


      </View>
    )
  }
}
