import * as React from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

export default class Radio extends React.Component {
	state = {
		value: "first",
	};

	render() {
		return (
			<RadioButton.Group
				onValueChange={(value) => this.setState({ value })}
				value={this.state.value}
			>
				<View>
					<Text>First</Text>
					<RadioButton value="first" />
				</View>
				<View>
					<Text>Second</Text>
					<RadioButton value="second" />
				</View>
				<View>
					<Text>Second</Text>
					<RadioButton value="third" />
				</View>
			</RadioButton.Group>
		);
	}
}
