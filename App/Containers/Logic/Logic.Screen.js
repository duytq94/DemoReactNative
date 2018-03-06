import React, { Component } from 'react'
import { View, Text, BackHandler, AsyncStorage } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Item, Form } from 'native-base'
import PropTypes from 'prop-types'
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class LogicScreen extends Component {

	static defaultProps = {
		name: 'duy',
		age: 18,
	}

	static propTypes = {
		name: PropTypes.string,
		age: PropTypes.number,
	}

	constructor(props) {
		super(props);
		backPress = this.handleBackPress.bind(this);
		// this.props.varA = 5;
	}

	componentWillMount() {
		BackHandler.addEventListener("hardwareBackPress", backPress);

		// const values = [3, 7, 9];
		// function sum(arr) {
		//     var total = 0;
		//     for (const value of arr) {
		//         total += value;
		//     }
		//     return total;
		// }
		// console.log(sum(values));
		// console.log('duy', this.props.varA);

	}

	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", backPress);
	}

	handleBackPress() {
		this.props.navigation.goBack();
		return true;
	}

	async writeData() {
		try {
			await AsyncStorage.setItem('duytq', JSON.stringify(this.props));
		} catch (error) {
			console.log('duy write error', error);
		}
	}

	async readData() {
		try {
			const value = await AsyncStorage.getItem('duytq');
			if (value !== null) {
				console.log('duy success', JSON.parse(value));
			}
		} catch (error) {
			console.log('duy error', error);
		}
	}

	testPromise() {
		var promise = new Promise(function a() {
			for (let i = 0; i < 1000000; i++) {
				console.log('duy i', i);
			}
		})
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
					<Greeting name='binh' />
					<Greeting {...this.props} />
					<Button onPress={() => this.writeData()}>
						<Text>Write</Text>
					</Button>
					<Button onPress={() => this.readData()}>
						<Text>Read</Text>
					</Button>
					<Button onPress={() => this.testPromise()}>
						<Text>Test promise</Text>
					</Button>
					<Button onPress={() => this.testHeavyTask()}>
						<Text>Heavy task</Text>
					</Button>
					<Button onPress={() => this.props.navigation.navigate('ProfileScreen', {})}>
						<Text>Go to profile screen</Text>
					</Button>
				</View>

			</Container >
		)
	}
}

class Greeting extends Component {
	render() {
		return (
			<Text style={{ color: 'red' }} > Hello {this.props.name || 'ReactNative'}. Your age is {this.props.age || '100'}</ Text>
		)
	}
}