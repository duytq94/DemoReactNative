import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  BackHandler,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import MapView from 'react-native-maps'
import Polyline from '@mapbox/polyline'
import Toast from 'react-native-simple-toast'

import styles from './Map.Style'
import images from '../../Themes/Images'

export default class MapScreen extends Component {
  constructor(props) {
    super(props)
    backPress = this.handleBackPress.bind(this)
    this.state = {
      coords: [],
      toolbarHeight: 47,
      markerCoord: { latitude: 10.8015, longitude: 106.653 },
      isLoading: false
    }
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', backPress)

    // Rerender view so map can show button "my location"
    setTimeout(() => this.setState({ toolbarHeight: 48 }), 500)

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      },
      error => {
        this.setState({
          error: error.message
        })
      },
      { enableHighAccuracy: false, timeout: 10000 }
    )
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', backPress)
  }

  handleBackPress() {
    this.props.navigation.goBack()
    return true
  }

  async getDirection(from, to) {
    try {
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=AIzaSyBNgfNRXRU2kRgbW92vjq38_ryPSiCJT5Y`
      )

      let respJson = await resp.json()
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points)
      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({ coords: coords, isLoading: false })
      return coords
    } catch (error) {
      Toast.show(`${error}`)
      this.setState({ isLoading: false })
    }
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={[styles.toolbar, { height: this.state.toolbarHeight }]}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back} />
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>MAP</Text>
          <View style={styles.icBack} />
        </View>

        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            region={{
              latitude: 10.8015,
              longitude: 106.653,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            showsMyLocationButton={true}
            showsUserLocation={true}
          >
            <MapView.Marker
              coordinate={this.state.markerCoord}
              title="title test"
              description="description test"
            />

            <MapView.Polyline
              coordinates={this.state.coords}
              strokeWidth={3}
              strokeColor="red"
            />
          </MapView>
        </View>

        <Text style={{ color: 'black', textAlign: 'center', marginTop: 10 }}>
          Your latitude: {this.state.latitude}
        </Text>
        <Text style={{ color: 'black', textAlign: 'center' }}>
          Your longitude: {this.state.longitude}
        </Text>
        {this.state.error ? (
          <Text style={{ color: 'black', textAlign: 'center' }}>
            Error: {this.state.error}
          </Text>
        ) : null}

        <TouchableOpacity
          style={styles.btnDirection}
          onPress={() => {
            this.setState({ isLoading: true })
            this.getDirection(
              `${this.state.latitude},${this.state.longitude}`,
              '10.8015,106.653'
            )
          }}
        >
          <Text style={styles.textBtnDirection}>Get direction</Text>
        </TouchableOpacity>

        {this.state.isLoading ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : null}
      </View>
    )
  }
}
