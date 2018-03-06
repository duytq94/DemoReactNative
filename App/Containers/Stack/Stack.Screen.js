import React, { Component } from 'react'
import { View, Text, FlatList, Image, BackHandler, TextInput, TouchableOpacity, RefreshControl, Linking } from 'react-native'
import { Container, Header, Body, Title, Content, Button, Left, Right, Icon } from 'native-base'

import { connect } from 'react-redux'
import { StackAction } from './Stack.Action'

export class StackScreen extends Component {

	itemFlatList({ item }) {
		return (
			<TouchableOpacity onPress={() => {
				Linking.openURL(item.link);
			}}>
				<View style={{ padding: 10, flexDirection: 'row' }}>
					<Image source={{ uri: item.owner.profile_image }}
						style={{ borderRadius: 20, margin: 10, width: 40, height: 40 }} />
					<View style={{ flex: 5 }}>
						<Text style={{ color: 'white' }}>{item.title}</Text>
						<Text>{item.link}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}

	refreshList() {
		this.props.getList(StackAction.site('stackoverflow'));
	}

	constructor(props) {
		super(props);
		backPress = this.handleBackPress.bind(this);
	}

	componentWillMount() {
		BackHandler.addEventListener("hardwareBackPress", backPress);
		this.props.getList(StackAction.site('stackoverflow'));

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
				<Header>
					<Left>
						<Button transparent onPress={() => {
							this.props.navigation.goBack();
						}}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>StackScreen</Title>
					</Body>
					<Right>
						<Button transparent onPress={() => { }}>
							<Icon name="menu" />
						</Button>
					</Right>
				</Header>

				<Content style={{ backgroundColor: "#9999AA" }}
					refreshControl={
						<RefreshControl
							refreshing={this.props.isFetching}
							onRefresh={this.refreshList.bind(this)}
							colors={["red"]}
						/>
					}>
					<FlatList
						style={{ backgroundColor: "#6699AA" }}
						colors={["red"]}
						data={this.props.data}
						renderItem={this.itemFlatList}
						keyExtractor={(item, index) => index}
					/>
				</Content>
			</Container >
		)
	}

}

function mapStateToProps(state) {
	if (state.stack.data) {
		return {
			isFetching: state.stack.isFetching,
			data: state.stack.data.items,
			error: state.stack.error
		}
	} else {
		return {
			isFetching: state.stack.isFetching,
			data: [],
			error: state.stack.error
		};
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getList: (request) => dispatch(request)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StackScreen);