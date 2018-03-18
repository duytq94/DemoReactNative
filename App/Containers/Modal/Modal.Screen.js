import React, { Component } from 'react'
import {
  View,
  Text,
  BackHandler,
  Modal,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native'

import styles from './Modal.Style'
import images from '../../Themes/Images'

export default class ModalScreen extends Component {
  constructor(props) {
    super(props)
    backPress = this.handleBackPress.bind(this)

    this.state = {
      dialogVisible: false
    }
  }

  openModal() {
    this.setState({ dialogVisible: true })
  }

  onDialogDismiss() {
    this.setState({ dialogVisible: false })
  }

  onDialogDone() {
    this.setState({ dialogVisible: false })
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
          <Text style={styles.titleToolbar}>DIALOG</Text>
          <View style={styles.icBack} />
        </View>

        <View style={styles.viewBody}>
          <TouchableOpacity
            onPress={() => this.openModal()}
            style={styles.btnOpenDialog}
          >
            <Text style={styles.textBtnOpenDialog}>OPEN DIALOG</Text>
          </TouchableOpacity>
        </View>

        <Modal
          transparent={true}
          visible={this.state.dialogVisible}
          animationType={'fade'}
          onRequestClose={() => this.closeModal()}
        >
          <TouchableOpacity
            onPress={() => this.onDialogDismiss()}
            style={styles.backgroundDialog}
          >
            <View style={styles.viewDialog}>
              <View style={styles.viewTitleDialog}>
                <Text style={styles.textTitleDialog}>DEMO REACT NATIVE</Text>
              </View>
              <TextInput
                placeholder="Username"
                style={styles.textInputDialog}
                underlineColorAndroid="#8e8e93"
                onChangeText={textUserInput =>
                  this.setState({ currentText: textUserInput })
                }
                numberOfLines={1}
              />
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                style={styles.textInputDialog}
                underlineColorAndroid="#8e8e93"
                onChangeText={textUserInput =>
                  this.setState({ currentText: textUserInput })
                }
                numberOfLines={1}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}
              >
                <TouchableOpacity
                  style={styles.btnDismissDialog}
                  onPress={() => this.onDialogDismiss()}
                >
                  <Text style={styles.textBtnDialog}>DISMISS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnDoneDialog}
                  onPress={() => this.onDialogDone()}
                >
                  <Text style={styles.textBtnDialog}>DONE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    )
  }
}
