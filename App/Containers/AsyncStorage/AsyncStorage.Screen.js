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
  AsyncStorage
} from 'react-native'
import Toast from 'react-native-simple-toast'

import styles from './AsyncStorage.Style'
import images from '../../Themes/Images'

export default class AsyncStorageScreen extends Component {
  constructor(props) {
    super(props)
    this.backPress = this.handleBackPress.bind(this)
    this.state = {
      inputKey: '',
      inputValue: '',
      yourKey: '',
      yourContent: '',
      isProcessing: false
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

  async writeData(data) {
    if (this.state.inputKey && this.state.inputValue) {
      try {
        await AsyncStorage.setItem(this.state.inputKey, this.state.inputValue, () => {
          Toast.show('Save success')
        })
      } catch (error) {
        Toast.show('Can not write data to disk')
      }
    } else {
      Toast.show('Key and value are not empty')
    }
  }

  async readData() {
    if (this.state.yourKey) {
    try {
      const value = await AsyncStorage.getItem(this.state.yourKey)
      if (value !== null) {
        this.setState({
          yourContent: value
        })
      }
    } catch (error) {
      Toast.show('Can not read data from disk')
      console.log(error)
    }}
    else {
      Toast.show('Input your key')
    }
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back}/>
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>ASYNC STORAGE</Text>
          <View style={styles.icBack}/>
        </View>

        <ScrollView>
          <View style={styles.viewBody}>
            {/* Write */}
            <View style={styles.viewItemInput}>
              <Text style={styles.textTitleInput}>Input content</Text>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Hello I'm React Native"
                placeholderTextColor="#aeaeae"
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.refs.keyInput.focus()
                }}
                onChangeText={text => this.setState({inputValue: text})}
              />
              <View style={styles.breakLine}/>
            </View>
            <View style={styles.viewItemInput}>
              <Text style={styles.textTitleInput}>Input key</Text>
              <TextInput
                ref="keyInput"
                style={styles.textInput}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="12345"
                placeholderTextColor="#aeaeae"
                returnKeyType="done"
                onChangeText={text => this.setState({inputKey: text})}
              />
              <View style={styles.breakLine}/>
            </View>
            <TouchableOpacity
              onPress={() => this.writeData()}
              style={styles.btnSave}
            >
              <Text style={styles.textBtnSave}>SAVE</Text>
            </TouchableOpacity>

            {/* Read */}
            <View style={styles.viewItemInput}>
              <Text style={styles.textTitleInput2}>Your key</Text>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="12345"
                placeholderTextColor="#aeaeae"
                returnKeyType="done"
                onChangeText={text => this.setState({yourKey: text})}
              />
              <View style={styles.breakLine}/>
            </View>
            <View style={styles.viewItemInput}>
              <Text style={styles.textTitleInput2}>Your content</Text>
              <Text style={styles.textInput}>{this.state.yourContent}</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.readData()}
              style={styles.btnRead}
            >
              <Text style={styles.textBtnRead}>READ</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
