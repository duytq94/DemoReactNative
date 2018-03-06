import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Body, Title, Content, Button } from 'native-base'

export default class MainScreen extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Second App</Title>
					</Body>
				</Header>
				<Content>
					<View>

						<Button rounded style={{ backgroundColor: "yellow", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('SigninScreen', {});
						}}>
							<Text>SigninScreen</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "cyan", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('FetchScreen', {});
						}}>
							<Text>FetchApiScreen</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "green", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('StackScreen', {});
						}}>
							<Text style={{ color: 'white' }}>StackOverflow</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "orange", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('TabScreen', {});
						}}>
							<Text style={{ color: 'white' }}>TabScreen</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "blue", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('ProfileScreen', {});
						}}>
							<Text style={{ color: 'white' }}>ProfileScreen</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "black", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('LogicScreen', {});
						}}>
							<Text style={{ color: 'white' }}>LogicScreen</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "red", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('MapScreen', {});
						}}>
							<Text style={{ color: 'white' }}>MapScreen</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "violet", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('PhotoScreen', {});
						}}>
							<Text style={{ color: 'white' }}>PhotoScreen</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "pink", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('WebScreen', {});
						}}>
							<Text style={{ color: 'white' }}>WebScreen</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "white", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('TimeScreen', {});
						}}>
							<Text style={{ color: 'black' }}>TimeScreen</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "red", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('FacebookScreen', {});
						}}>
							<Text style={{ color: 'white' }}>FacebookScreen</Text>
						</Button>

						<Button rounded style={{ backgroundColor: "green", padding: 10 }} onPress={() => {
							this.props.navigation.navigate('ModalScreen', {});
						}}>
							<Text style={{ color: 'white' }}>ModalScreen</Text>
						</Button>
					</View>
				</Content>
			</Container>
		)
	}
}