import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NewValetForm } from "./components/newclient";
import { JobSearchForm } from "./components/postjobs";
import Logo from "./assets/icon1.png";
import { globalStyles } from "./styles/global.js";

function Header() {
	return (
		<View style={{ height: 80, backgroundColor: "#dddddd" }}>
			<Image
				source={Logo}
				style={{
					width: 50,
					height: 60,
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: 20,
					marginBottom: 20,
				}}
			/>
		</View>
	);
}
function NewValetScreen() {
	return (
		<View>
			<Text style={globalStyles.titleText}>New Valet </Text>
			<NewValetForm />
		</View>
	);
}

function HomeScreen() {
	return (
		<View>
			<Text style={globalStyles.titleText}>Valet Home </Text>
		</View>
	);
}

// function PostJobScreen() {
// 	return (
// 		<View>
// 			<Text style={globalStyles.titleText}>Post Jobs</Text>
// 		</View>
// 	);
// }

function SearchScreen(props) {
	return (
		<View style>
			<Text style={globalStyles.titleText}>Jobs Search</Text>
			<JobSearchForm />
			<Button
				color="#D24524"
				title="Go to Results"
				onPress={() =>
					props.navigation.navigate("Jobs Search Results")
				}
			/>
		</View>
	);
}
function SearchResultsScreen(props) {
	return (
		<View>
			<Text style={globalStyles.titleText}>Jobs Search Resuts</Text>
			<Text style={{ padding: 24 }}>
				The quick brown fox jumped over the lazy dog
			</Text>
			<Button
				color="#D24524"
				title="Go To Accept Job"
				onPress={() => props.navigation.navigate("Accept Job")}
			/>
			<Button
				color="#D24524"
				title="Go Back"
				onPress={() => props.navigation.goBack()}
			/>
		</View>
	);
}

function AcceptJobsScreen(props) {
	return (
		<View>
			<Text style={globalStyles.titleText}>Accept Job</Text>

			<Button
				color="#D24524"
				title="Go Back"
				onPress={() => props.navigation.goBack()}
			/>
		</View>
	);
}

function InvoiceScreen() {
	return (
		<View>
			<Text style={globalStyles.titleText}>Payouts</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="New Valet" component={NewValetScreen} />
			<Tab.Screen name="Valet Home" component={HomeScreen} />
			<Tab.Screen name="Jobs Search" component={StackNav} />
			<Tab.Screen name="Payouts" component={InvoiceScreen} />
		</Tab.Navigator>
	);
}

const StackNav = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Jobs Search" component={SearchScreen} />
			<Stack.Screen
				name="Jobs Search Results"
				component={SearchResultsScreen}
			/>
			<Stack.Screen name="Accept Job" component={AcceptJobsScreen} />
		</Stack.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Header />
			<MyTabs />
		</NavigationContainer>
	);
}
