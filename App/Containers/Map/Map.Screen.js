import React, { Component } from 'react'
import { View, Text, BackHandler, StatusBar } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Item, Form } from 'native-base'
import MapView from 'react-native-maps'
import Polyline from '@mapbox/polyline'
import Toast from 'react-native-simple-toast'

export default class MapScreen extends Component {

	constructor(props) {
		super(props);
		backPress = this.handleBackPress.bind(this);
		this.state = {
			coords: [],
			statusBarHeight: 48,
			markerCoord: { latitude: 10.8015, longitude: 106.653 },
		}
	}

	componentWillMount() {
		BackHandler.addEventListener("hardwareBackPress", backPress);

		// Rerender view so map can show button "my location"
		setTimeout(() => this.setState({ statusBarHeight: 49 }), 500);

		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					error: null
				});
			},
			(error) => {
				this.setState({
					error: error.message
				})
			},
			{ enableHighAccuracy: false, timeout: 10000 }
		)
	}

	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", backPress);
	}

	handleBackPress() {
		this.props.navigation.goBack();
		return true;
	}

	async getDirection(from, to) {
		try {
			let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=AIzaSyBNgfNRXRU2kRgbW92vjq38_ryPSiCJT5Y`);

			let respJson = await resp.json();
			let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
			let coords = points.map((point, index) => {
				return {
					latitude: point[0],
					longitude: point[1]
				}
			})
			this.setState({ coords: coords })
			return coords;
		} catch (error) {
			Toast.show(`${error}`)
		}
	}

	render() {
		return (
			<Container>
				<Header style={{ height: this.state.statusBarHeight }} backgroundColor='#ee613a'>
					<Left>
						<Button transparent light
							style={{ width: 50, height: 50 }}
							onPress={() => {
								this.props.navigation.goBack();
							}}
						>
							<Icon name='ios-arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title>Google Map</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name='menu' />
						</Button>
					</Right>
				</Header>
				<StatusBar backgroundColor='#ee613a' />

				<View style={{ backgroundColor: 'green', flex: 1 }}>
					<MapView
						style={{ flex: 1 }}
						region={{
							latitude: 10.8015,
							longitude: 106.653,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
						showsMyLocationButton={true}
						showsUserLocation={true}
					>

						<MapView.Marker
							coordinate={this.state.markerCoord}
							title='title test'
							description='description test'
						/>

						<MapView.Polyline
							coordinates={this.state.coords}
							strokeWidth={5}
							strokeColor="red" />

					</MapView>

					<Button onPress={() => {
						this.getDirection(`${this.state.latitude},${this.state.longitude}`, '10.8015,106.653');
					}}>
						<Text>Get direction</Text>
					</Button>

					<Text style={{ color: 'white' }}>Latitude: {this.state.latitude}</Text>
					<Text style={{ color: 'white' }}>Longitude: {this.state.longitude}</Text>
					{this.state.error ? <Text style={{ color: 'white' }}>Error: {this.state.error}</Text> : null}

				</View>
			</Container>
		)
	}
}