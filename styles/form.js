import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
	container: {
		marginBottom: 70,
	},
	titleText: {
		fontSize: 18,
		color: "#333",
		textAlign: "center",
	},
	input: {
		padding: 15,
		marginLeft: 15,
		width: 375,
		height: 35,
		borderWidth: 1,
		borderColor: "#000",
		fontSize: 18,
		borderRadius: 5,
		padding: 5,
	},
	errorText: {
		color: "crimson",
		fontWeight: "bold",
		// marginBottom: 3,
		// marginTop: 3,
		textAlign: "center",
	},
});
