import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { PostJobsForm } from "../components/postjobs";

export function Post_Jobs() {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Post Jobs</Text>
			<PostJobsForm />
		</View>
	);
}
