import React, { Component } from 'react'
import { View, Text, BackHandler, Image, StatusBar, StyleSheet, ScrollView, TextInput, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Item, Form } from 'native-base'

export default class SigninScreen extends Component {

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

			<Container style={{ backgroundColor: 'black' }}>

				<StatusBar hidden={true} />

				<Image
					source={require('../../../assets/bg_signin.png')}
					style={{ opacity: 0.4, position: 'absolute', width: Dimensions.get('window').width, height: Dimensions.get('window').height }} />

				<Content>

					<KeyboardAvoidingView
						behavior='padding'
					>
						<Button transparent light
							style={{ width: 50, height: 50 }}
							onPress={() => {
								this.props.navigation.goBack();
							}}
						>
							<Icon name='ios-arrow-back' />
						</Button>

						<Text style={{
							color: 'white',
							fontSize: 24.7,
							alignSelf: 'center',
							marginTop: 40,
							marginBottom: 20,
							fontFamily: 'SFUIText-Bold'
						}}>
							LET'S GET STARTED
                    </Text>

						<Item style={styles.itemInput}>
							<Icon name='globe' style={styles.iconInput} />
							<TextInput style={styles.textInput} underlineColorAndroid='transparent' placeholder='COUNTRY' placeholderTextColor='#aeaeae'
								returnKeyType='next' onSubmitEditing={() => {
									this.refs.username.focus();
								}} />
						</Item>
						<Item style={styles.itemInput}>
							<Icon name='unlock' style={styles.iconInput} />
							<TextInput style={styles.textInput} underlineColorAndroid='transparent' ref='username' placeholder='USERNAME' placeholderTextColor='#aeaeae'
								returnKeyType='next' onSubmitEditing={() => {
									this.refs.email.focus();
								}} />
						</Item>
						<Item style={styles.itemInput}>
							<Icon name='home' style={styles.iconInput} />
							<TextInput style={styles.textInput} underlineColorAndroid='transparent' ref='email' placeholder='EMAIL' placeholderTextColor='#aeaeae'
								returnKeyType='next' keyboardType='email-address' onSubmitEditing={() => {
									this.refs.password.focus();
								}} />
						</Item>
						<Item style={styles.itemInput}>
							<Icon name='home' style={styles.iconInput} />
							<TextInput style={styles.textInput} underlineColorAndroid='transparent' ref='password' placeholder='PASSWORD' placeholderTextColor='#aeaeae'
								returnKeyType='next' keyboardType='numeric' onSubmitEditing={() => {
									this.refs.confirm.focus();
								}} />
						</Item>
						<Item style={styles.itemInput}>
							<Icon name='home' style={styles.iconInput} />
							<TextInput style={styles.textInput} underlineColorAndroid='transparent' ref='confirm' placeholder='CONFIRM PASSWORD' placeholderTextColor='#aeaeae'
								returnKeyType='next' keyboardType='numeric' onSubmitEditing={() => {
									this.refs.phone.focus();
								}} />
						</Item>
						<Item style={styles.itemInput}>
							<Icon name='home' style={styles.iconInput} />
							<TextInput style={styles.textInput} underlineColorAndroid='transparent' ref='phone' placeholder='MOBILE PHONE' placeholderTextColor='#aeaeae'
								returnKeyType='done' keyboardType='phone-pad' />
						</Item>

						<Button full style={{
							borderRadius: 10,
							backgroundColor: '#e86d4b',
							borderColor: '#e86d4b',
							alignSelf: 'center',
							width: 300,
							height: 60,
							marginTop: 30,
							marginBottom: 30
						}}>
							<Text style={{
								color: 'white',
								fontSize: 19.3,
								position: 'absolute',
								fontFamily: 'SFUIText-Bold'
							}}>
								SIGN UP
                        </Text>
						</Button>

					</KeyboardAvoidingView>

				</Content>

			</Container >
		)
	}
}

const styles = StyleSheet.create({
	itemInput: {
		marginTop: 10,
		marginLeft: 30,
		borderColor: '#aeaeae',
		marginRight: 30,

	},
	textInput: {
		color: 'white',
		marginLeft: 20,
		fontFamily: 'SFUIText-Light',
		fontSize: 16,
		flex: 1,
	},
	iconInput: {
		color: 'white',
		left: 15
	}
})