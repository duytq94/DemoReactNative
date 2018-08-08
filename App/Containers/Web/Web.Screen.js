import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  BackHandler,
  TextInput,
  TouchableOpacity,
  ScrollView,
  WebView,
  ActivityIndicator
} from 'react-native'

import styles from './Web.Style'
import images from '../../Themes/Images'

export default class WebScreen extends Component {
  constructor(props) {
    super(props)
    this.backPress = this.handleBackPress.bind(this)
    this.state = {
      textInput: '',
      linkWeb: 'https://tinhte.vn/',
      isLoading: false
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

  onBtnGoClick() {
    this.setState({
      linkWeb: this.state.textInput
    })
  }

  onLoadStart = () => {
    this.setState({ isLoading: true })
    console.log('start')
  }

  onLoadEnd = () => {
    this.setState({ isLoading: false })
    console.log('end')
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back} />
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>WEB</Text>
          <View style={styles.icBack} />
        </View>

        <TextInput
          style={{ height: 50, marginLeft: 10, marginRight: 10 }}
          onChangeText={text => this.setState({ textInput: text })}
          autoCapitalize="none"
          placeholder="Input URL (eg: https://tinhte.vn)"
        />

        <WebView
          source={{ uri: this.state.linkWeb }}
          style={{ flex: 1, backgroundColor: '#f5f5f5' }}
          startInLoadingState={false}
          onLoadStart={this.onLoadStart}
          onLoad={this.onLoadEnd}
        />

        <TouchableOpacity
          style={styles.btnGo}
          onPress={() => {
            this.onBtnGoClick()
          }}
        >
          <Text style={styles.textBtnGo}>GO</Text>
        </TouchableOpacity>

        {this.state.isLoading ? (
          <ActivityIndicator style={styles.loading} size="large" />
        ) : null}
      </View>
    )
  }
}
