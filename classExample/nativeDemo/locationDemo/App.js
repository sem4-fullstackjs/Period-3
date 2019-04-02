// https://docs.expo.io/versions/v32.0.0/sdk/location/

import React, { Component } from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native'
import { Constants, Location, Permissions } from 'expo'

export default class App extends Component {
	state = {
		location: null,
		errorMessage: null
	}

	componentWillMount() {
		this._getLocationAsync()
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION)
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied'
			})
		}

		let location = await Location.getCurrentPositionAsync({})
		const { latitude, longitude } = location.coords
		const address = await Location.reverseGeocodeAsync({ latitude, longitude })
		this.setState({ location, address })
	}

	render() {
		let text = 'Waiting..'
		let address = ''
		if (this.state.errorMessage) {
			text = this.state.errorMessage
		} else if (this.state.location) {
			text = JSON.stringify(this.state.location)
			address = JSON.stringify(this.state.address)
		}

		return (
			<View style={styles.container}>
				<Text style={styles.paragraph}>{text}</Text>
				<Text style={styles.paragraph}>{address}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1'
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		textAlign: 'center'
	}
})
