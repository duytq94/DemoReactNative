import React, { Component } from 'react'
import { View, Text, Image, BackHandler, TextInput, TouchableOpacity } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Footer, FooterTab } from 'native-base'

export default class TabOneScreen extends Component {

	componentWillMount() {
		console.tron.log("Tab one will mount");
	}

	render() {
		return (
			<Container style={{ backgroundColor: "#fc9f9f" }}>
				<Content>
					<Text>Tab one</Text>
				</Content>
			</Container >
		)
	}

}