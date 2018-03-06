import React, { Component } from 'react'
import { View, Text, BackHandler, StatusBar, Image } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Item, Form } from 'native-base'
import ImagePicker from 'react-native-image-picker'

export default class PhotoScreen extends Component {
	constructor(props) {
		super(props);
		backPress = this.handleBackPress.bind(this);
		this.state = {
			avatarSource: require('../../../assets/ic_avatar.png'),
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

	onBtnPhotoClick() {
		var options = {
			title: 'Chọn hình',
			customButtons: [
				{ name: 'fb', title: 'Choose Photo from Facebook' },
			],
			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};

		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				let source = { uri: response.uri };

				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					avatarSource: source
				});
			}
		});
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
						<Title>PHOTO</Title>
					</Body>

				</Header>
				<StatusBar backgroundColor='#ee613a' />

				<View style={{ backgroundColor: '#c4c4c4', flex: 1, padding: 10 }}>
					<Button success
						onPress={() => {
							this.onBtnPhotoClick();
						}}>
						<Text>Open gallery</Text>
					</Button>
					<Image source={this.state.avatarSource} style={{ width: 200, height: 200 }} />
				</View>
			</Container>
		)
	}
}