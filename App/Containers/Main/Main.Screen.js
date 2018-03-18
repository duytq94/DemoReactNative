import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './Main.Style'

export default class MainScreen extends Component {
	render() {
		return (
			<View>

				<View style={styles.toolbar}>
					<Text style={styles.titleToolbar}>MAIN</Text>
				</View>

				<ScrollView>
					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('SigninScreen', {});
					}}>
						<Text style={styles.textBtn} >Signin Screen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('FetchScreen', {});
					}}>
						<Text style={styles.textBtn}>FetchApi Screen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('ListScreen', {});
					}}>
						<Text style={styles.textBtn}>List Screen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('TabScreen', {});
					}}>
						<Text style={styles.textBtn}>Tab Screen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('ProfileScreen', {});
					}}>
						<Text style={styles.textBtn}>ProfileScreen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('LogicScreen', {});
					}}>
						<Text style={styles.textBtn}>LogicScreen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('MapScreen', {});
					}}>
						<Text style={styles.textBtn}>MapScreen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('PhotoScreen', {});
					}}>
						<Text style={styles.textBtn}>PhotoScreen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('WebScreen', {});
					}}>
						<Text style={styles.textBtn}>WebScreen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('TimeScreen', {});
					}}>
						<Text style={styles.textBtn}>TimeScreen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('FacebookScreen', {});
					}}>
						<Text style={styles.textBtn}>FacebookScreen</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => {
						this.props.navigation.navigate('ModalScreen', {});
					}}>
						<Text style={styles.textBtn}>ModalScreen</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		)
	}
}