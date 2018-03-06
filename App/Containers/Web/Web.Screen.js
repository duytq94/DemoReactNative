import React, { Component } from 'react'
import { View, Text, BackHandler, StatusBar, Image, WebView, TextInput } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Item, Form } from 'native-base'

export default class WebScreen extends Component {
	constructor(props) {
		super(props);
		backPress = this.handleBackPress.bind(this);
		this.state = {
			textInput: '',
			linkWeb: 'https://vnexpress.net/'
		}
	}

	componentWillMount() {
		BackHandler.addEventListener("hardwareBackPress", backPress);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", backPress);
	}

	handleBackPress() {
		this.props.navigation.goBack();
		return true;
	}

	onBtnGoClick() {
		this.setState({
			linkWeb: this.state.textInput,
		})
	}

	render() {
		return (
			<Container>
				<Header style={{ backgroundColor: '#ee613a' }} >
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
						<Title>WEB</Title>
					</Body>

				</Header>
				<StatusBar backgroundColor='#ee613a' />

				<View style={{ backgroundColor: '#c4c4c4', flex: 1, padding: 10 }}>
					<TextInput
						style={{ height: 50 }}
						onChangeText={(text) => this.setState({ textInput: text })}
						autoCapitalize='none'
						placeholder='url website...'
					/>
					<Button success padding={10}
						onPress={() => {
							this.onBtnGoClick();
						}}>
						<Text>Go</Text>
					</Button>
					<WebView
						source={{ uri: this.state.linkWeb }}
						style={{ marginTop: 20 }}
						startInLoadingState={true}

					/>
				</View>
			</Container >
		)
	}
}