import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert
} from 'react-native'
import styles from './Main.Style'

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    BackHandler.addEventListener('hardwareBackPress', function() {
      Alert.alert(
        'Exit app',
        'Are you sure to exit?',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
          }
        ],
        {
          cancelable: false
        }
      )
      return true
    })
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <Text style={styles.titleToolbar}>MAIN</Text>
        </View>

        <ScrollView>
          <View style={styles.viewContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('FetchScreen', {})
              }}
            >
              <Text style={styles.textBtn}>FetchApi Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('AnimationScreen', {})
              }}
            >
              <Text style={styles.textBtn}>Animation Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('ListScreen', {})
              }}
            >
              <Text style={styles.textBtn}>List Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('TabScreen', {})
              }}
            >
              <Text style={styles.textBtn}>Tab Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('ProfileScreen', {})
              }}
            >
              <Text style={styles.textBtn}>Profile Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('AsyncStorageScreen', {})
              }}
            >
              <Text style={styles.textBtn}>AsyncStorage Screen</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('MapScreen', {})
              }}
            >
              <Text style={styles.textBtn}>Map Screen</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('WebScreen', {})
              }}
            >
              <Text style={styles.textBtn}>Web Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('TimeScreen', {})
              }}
            >
              <Text style={styles.textBtn}>Time Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('ModalScreen', {})
              }}
            >
              <Text style={styles.textBtn}>Modal(Dialog) Screen</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
