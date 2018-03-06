import React, { Component } from 'react'
import { View, Text, BackHandler, Modal, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'

export default class ModalScreen extends Component {
	constructor(props) {
		super(props)
		backPress = this.handleBackPress.bind(this);

		this.state = {
			dialogVisible: false,
		}
	}

	openModal() {
		this.setState({ dialogVisible: true })
	}

	onDialogDismiss() {
		this.setState({ dialogVisible: false })
	}

	onDialogDone() {
		this.setState({ dialogVisible: false })
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
			<View style={styles.plan_tab_scroll_v1_v2}>
				<ScrollView>

					<TouchableOpacity onPress={() => {
						console.log('duy', 'aaa')
					}}
						style={styles.what_tab_background_dialog}>
						<View style={styles.what_tab_view_dialog}>
							<Text style={styles.what_tab_title_dialog}>Add your description here</Text>
							<TextInput
								defaultValue={this.state.currentDescription}
								underlineColorAndroid='#8e8e93'
								onChangeText={(textUserInput) => this.setState({ currentDescription: textUserInput })}
								maxLength={50} />

						</View>
					</TouchableOpacity>

				</ScrollView>
			</View>

		)
	}
}

const styles = StyleSheet.create({
	plan_tab_scroll_v1_v2: {
		height: '100%',
		paddingLeft: 15.4,
		paddingRight: 15.7,
		backgroundColor: 'green'
	},
	plan_tab_scroll_v1_v2_v1: {
		flexDirection: 'row',
		height: 39.4,
		marginBottom: 15.4
	},
	plan_tab_scroll_v1_v2_v1_touch2: {
		borderRadius: 19.7,
		borderWidth: 1,
		borderColor: '#d6d6d7',
		backgroundColor: '#ffffff',
		flex: 1,
		marginLeft: 14.9
	},
	plan_tab_scroll_v1_v2_v1_touch2_v1: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	plan_tab_scroll_v1_v2_v1_touch2_v1_t1: {
		fontSize: 15.4,
		fontFamily: 'SFUIDisplay-Medium',
		color: '#203152',
		marginLeft: 9.5
	},
	plan_tab_scroll_v1_v2_v3_touch1: {
		borderRadius: 19.7,
		backgroundColor: '#203152',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	plan_tab_scroll_v1_v2_v3_touch1_t1: {
		fontSize: 15.4,
		fontFamily: 'SFUIDisplay-Black',
		color: '#ffffff'
	},
	plan_tab_scroll_v1_v2_v3_touch2: {
		borderRadius: 19.7,
		backgroundColor: '#5dbecb',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10.6
	},
	plan_tab_scroll_v1_v2_v3_touch2_t1: {
		fontSize: 15.4,
		fontFamily: 'SFUIDisplay-Black',
		color: '#ffffff'
	},

	// What tab
	what_tab_touchable_add_new: {
		width: '100%',
		height: 48,
		backgroundColor: '#7e8da6',
		borderRadius: 8,
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 15,
	},
	what_tab_text_add_new: {
		fontSize: 15.4,
		fontFamily: 'SF-UI-Display-Medium',
		color: 'white',
		marginLeft: 13.4
	},
	what_tab_ic_plus: {
		width: 19.2,
		height: 19.2,
		resizeMode: 'contain',
		marginLeft: 11.5
	},
	what_tab_touchable_add_option: {
		width: '100%',
		height: 48,
		backgroundColor: 'white',
		borderRadius: 8,
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 15,
		borderColor: 'rgba(142, 142, 147, 0.1)',
		borderWidth: 1
	},
	what_tab_text_add_option: {
		fontSize: 15.4,
		fontFamily: 'SF-UI-Display-Medium',
		color: '#7e8da6',
		marginLeft: 18.2
	},
	what_tab_ic_remove_item_option: {
		width: 23,
		height: 23,
		marginLeft: 18.2,
		marginRight: 18.2
	},
	what_tab_dismiss_touchable_dialog: {
		width: '40%',
		height: 40,
		backgroundColor: '#203152',
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 15,
	},
	what_tab_done_touchable_dialog: {
		width: '40%',
		height: 40,
		backgroundColor: '#5dbecb',
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 15,
		marginLeft: 10
	},
	what_tab_text_touchable_dialog: {
		fontSize: 15.4,
		fontFamily: 'SF-UI-Display-Medium',
		color: 'white',
	},
	what_tab_title_dialog: {
		fontSize: 17.3,
		fontFamily: 'SF-UI-Display-Medium',
		color: '#203152',
		marginBottom: 15,
		alignSelf: 'center'
	},
	what_tab_background_dialog: {
		width: '80%',
		height: '100%',
		backgroundColor: 'yellow'
	},
	what_tab_view_dialog: {
		borderRadius: 8,
		marginTop: 150,
		padding: 10,
		alignSelf: 'center',
		borderColor: '#8e8e93',
		borderWidth: 0.8,
		width: '80%',
		height: 180,
		backgroundColor: 'white'
	},

	// Footer
	footer_type_fee_wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 19.7,
		borderWidth: 1,
		borderColor: '#d6d6d7',
		backgroundColor: '#ffffff',
		flex: 1
	},
	footer_type_fee_text: {
		fontSize: 15.4,
		fontFamily: 'SFUIDisplay-Medium',
		color: '#203152',
		marginLeft: 18.2
	},
})
