import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

import VirtualKeyboard from 'react-native-virtual-keyboard';

class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>{this.state.text}</Text>
				<VirtualKeyboard color='black' pressMode='string' onPress={(val) => this.changeText(val)} />
			</View>
		);
	}

	changeText(newText) {
		this.setState({ text: newText });
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});

module.exports = Example;