import React, { Component } from 'react'
import { View, Text, BackHandler, StatusBar, Image, WebView, TextInput, DatePickerAndroid } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Item, Form } from 'native-base'
import moment from 'moment'
// import DateTimePicker from 'react-native-modal-datetime-picker'

export default class TimeScreen extends Component {
	constructor(props) {
		super(props);
		backPress = this.handleBackPress.bind(this);
		this.state = {
			dateTimeCurrent: moment().format('MMMM Do YYYY, hh:mm:ss a'),
			isDatePickerVisible: false,
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

	getTime() {
		this.setState({
			time: moment().format('MMMM Do YYYY, hh:mm:ss a')
		})
	}

	showDatePicker() {
		// this.setState({
		//     isDatePickerVisible: true,
		// })
		try {
			const { action, year, month, day } = DatePickerAndroid.open({
				// Use `new Date()` for current date.
				// May 25 2020. Month 0 is January.
				date: new Date(2020, 4, 25)
			});
			if (action !== DatePickerAndroid.dismissedAction) {
				// Selected year, month (0-11), day
			}
		} catch ({ code, message }) {
			console.warn('Cannot open date picker', message);
		}
	}

	onPickerResult(date) {
		this.onPickerCancel();
	}

	onPickerCancel() {
		this.setState({
			isDatePickerVisible: false,
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
						<Title>TIME</Title>
					</Body>

				</Header>
				<StatusBar backgroundColor='#ee613a' />

				<View style={{ backgroundColor: '#c4c4c4', flex: 1, padding: 10 }}>
					<Button success padding={10} onPress={() => {
						this.getTime();
					}}>
						<Text style={{ color: 'white' }}>Get time</Text>
					</Button>
					<Text>{this.state.dateTimeCurrent}</Text>

					<Button padding={10} onPress={() => {
						this.showDatePicker();
					}}>
						<Text style={{ color: 'white' }} >Show picker</Text>
					</Button>
					{/* <DateTimePicker
                        isVisibile={this.state.isDatePickerVisible}
                        onConfirm={this.onPickerResult}
                        onCancel={this.onPickerCancel}
                    /> */}
				</View>
			</Container >
			// <View style={{ flex: 1 }}>
			//     <DateTimePicker
			//         isVisibile={true}
			//         onConfirm={this.onPickerResult}
			//         onCancel={this.onPickerCancel}
			//     />
			// </View>
		)
	}
}