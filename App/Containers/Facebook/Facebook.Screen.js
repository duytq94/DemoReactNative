import React, { Component } from 'react'
import { View, Text, BackHandler, AsyncStorage } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Item, Form } from 'native-base'
import PropTypes from 'prop-types'

export default class FacebookScreen extends Component {

	constructor(props) {
		super(props);
		backPress = this.handleBackPress.bind(this);
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

	render() {
		return (
			<Container>
				<Header style={{ height: 48 }} backgroundColor='#ee613a'>
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
				</Header>

				<View>

				</View>

			</Container>
		)
	}
}
