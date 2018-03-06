import React, { Component } from 'react'
import { View, Text, BackHandler } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon, Footer, FooterTab, Toast } from 'native-base'
import TabOne from './TabOne.Screen';
import TabTwo from './TabTwo.Screen'

export default class TabScreen extends Component {

	constructor(props) {
		super(props);
		backPress = this.handleBackPress.bind(this);
		this.state = {
			selectedTab: 'TabOne',
			isTabOneActive: true,
			isTabTwoActive: false,
			showToast: false
		}
	}

	componentWillMount() {
		BackHandler.addEventListener("hardwareBackPress", backPress);
		console.tron.log("Tab main will mount");
	}

	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", backPress);
	}

	handleBackPress() {
		this.props.navigation.goBack();
		return true;
	}

	render() {
		// if (this.state.selectedTab == 'TabOne') {
		//     return <TabOne />
		// } else {
		//     return <TabTwo />
		// }

		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => {
							this.props.navigation.goBack();
						}}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>TabScreen</Title>
					</Body>
					<Right>
						<Button transparent onPress={() => { }}>
							<Icon name="menu" />
						</Button>
					</Right>
				</Header>

				<Content>
					{
						this.state.selectedTab == 'TabOne' ?
							<TabOne /> :
							<TabTwo />

						// if (this.state.selectedTab == 'TabOne') {
						//     <TabOne />
						// } else {
						//     <TabTwo />
						// }
					}
				</Content>

				<Footer>
					<FooterTab>

						<Button
							active={this.state.isTabOneActive}
							onPress={() => {
								this.setState({ selectedTab: 'TabOne', isTabOneActive: true, isTabTwoActive: false })
							}}>
							<Icon name="apps" />
							<Text>Tab one</Text>
						</Button>

						<Button
							active={this.state.isTabTwoActive}
							onPress={() => {
								this.setState({ selectedTab: 'TabTwo', isTabOneActive: false, isTabTwoActive: true })
							}}>
							<Icon name="camera" />
							<Text>Tab two</Text>
						</Button>

					</FooterTab>
				</Footer>
			</Container >
		)
	}

}