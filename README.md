[![NPM version](https://badge.fury.io/js/react-native-virtual-keyboard.svg)](http://badge.fury.io/js/react-native-virtual-keyboard)

Software/virtual numeric keyboard, which can be used instead of Android/iOS ones if it suits your app style better.

![screenshot_1](https://raw.github.com/nshaposhnik/react-native-virtual-keyboard/master/example/screenshot.jpg)

## Installation
```bash
$ npm i react-native-virtual-keyboard --save
```

## Basic Usage
```jsx
import VirtualKeyboard from 'react-native-virtual-keyboard';

class Example extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}

	render() {
		return (
			<View style={{flex:1}}>
				<Text>{this.state.text}</Text>
				<VirtualKeyboard color='white' pressMode='string' onPress={(val) => this.changeText(val)} />
			</View>
		);
	}

	changeText(newText) {
		this.setState({text: newText});
	}

}
```

## Props

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| pressMode | string | 'string' | Value to pass to onPress. 'char' = each individual pressed symbol, 'string' = form and pass whole string |
| color | string | 'gray' | color of text and backspace tinting (if enabled) |
| onPress | function | \*required | The handler when a key is pressed. If pressMode === 'char', 'back' is passed for backspace |
| backspaceImg | number | 'backspace.png' | Image to use for backspace. Default one is used if nothing provided. To use image from version 1.0.7 and below, use require('./node_modules/react-native-virtual-keyboard/src/backspace_old.png') |
| applyBackspaceTint | bool | true | tint backspace with tintColor style option, or leave it as it is |
| decimal | bool | false | display '.' decimal on keyboard |
| rowStyle | style | - | override style for rows |
| cellStyle | style | - | override style for cells |

## Contribution

- [@nshaposhnik](mailto:shaposhnik.nikita@gmail.com) The main author.
- [@fedealconada](mailto:federico.alconada@icloud.com)
