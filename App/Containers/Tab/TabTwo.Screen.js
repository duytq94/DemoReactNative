import React, { Component } from 'react'
import { View, Text, Image, BackHandler, TextInput, TouchableOpacity } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Footer, FooterTab } from 'native-base'

export default class TabTwoScreen extends Component {

	componentWillMount() {
		console.tron.log("Tab two will mount");
	}

	render() {
		return (
			<Container style={{ backgroundColor: "#ffd8f3" }}>
				<Content>
					<Text>Tab two</Text>
				</Content>
			</Container >
		)
	}

}