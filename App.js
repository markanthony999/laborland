import * as React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import { ContactInfo } from "./components/contactinfo";
import { globalStyles } from "./styles/global.js";

function Header() {
	return (
		<View style={{ height: 90, backgroundColor: "#0e309e" }}>
			<Text style={globalStyles.headerText}>LaborLand USA</Text>
		</View>
	);
}
function Project(props) {
	return (
		<View style={{ marginTop: 50 }}>
			<Text style={globalStyles.titleText}>
				Welcome To LaborLand USA
			</Text>

			<Text style={globalStyles.titleText}>
				Please Tell Us What Type Of Project?
			</Text>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Commercial Tasks")
				}
			>
				<Text style={globalStyles.titleText_2}>Commercial</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Residential Tasks")
				}
			>
				<Text style={globalStyles.titleText_2}>Residential</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Industrial Tasks")
				}
			>
				<Text style={globalStyles.titleText_2a}>Industrial</Text>
			</TouchableOpacity>
			{/* <Button
				color="#D24524"
				title="Next"
				onPress={() =>
					props.navigation.navigate("Commercial Tasks")
				}
			/> */}
		</View>
	);
}
function Task_Commercial(props) {
	return (
		<View>
			<Text style={globalStyles.titleText}>
				What Type Of Task Are We Performing?
			</Text>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					Restaurant/Food Service
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Delivery</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>HVAC</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Landscaping</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Painting</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Electrical</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Plumbing</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Remodeling</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					Light Carpentry
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Construction</Text>
			</TouchableOpacity>
			{/* <Button
				color="#D24524"
				title="Next"
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			/>
			<Button
				color="#D24524"
				title="Go Back"
				onPress={() => props.navigation.goBack()}
			/> */}
		</View>
	);
}
function Task_Residential(props) {
	return (
		<View>
			<Text style={globalStyles.titleText}>
				What Type Of Task Are We Performing?
			</Text>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					Appliance Repair
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>HVAC</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Cleaning</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Moving</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Landscaping</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Painting</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					Automotive Repair
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Pet Care</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					Plumbing/Electrical Repair
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					Hardwood Flooring/Carpet
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					Kitchen/Bath Remodeling
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					General Carpentry
				</Text>
			</TouchableOpacity>
			{/* <Button
				color="#D24524"
				title="Next"
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			/>
			<Button
				color="#D24524"
				title="Go Back"
				onPress={() => props.navigation.goBack()}
			/> */}
		</View>
	);
}

function Task_Industrial(props) {
	return (
		<View>
			<Text style={globalStyles.titleText}>
				What Type Of Task Are We Performing?
			</Text>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					Warehousing/Distribution
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>HVAC</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Moving/Hauling</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Landscaping</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>Painting</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					Manufacturing/Technical Assembly
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			>
				<Text style={globalStyles.titleText_2}>
					Plumbing/Electrical Repair
				</Text>
			</TouchableOpacity>
			{/* <Button
				color="#D24524"
				title="Next"
				onPress={() =>
					props.navigation.navigate("Contact Information")
				}
			/>
			<Button
				color="#D24524"
				title="Go Back"
				onPress={() => props.navigation.goBack()}
			/>
		*/}
		</View>
	);
}

function Contact_Information(props) {
	return (
		<View>
			<ContactInfo />
			{/* <Button
				color="#D24524"
				title="Go Back"
				onPress={() => props.navigation.goBack()}
			/> */}
		</View>
	);
}

const Stack = createStackNavigator();

const StackNav = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Project" component={Project} />
			<Stack.Screen
				name="Commercial Tasks"
				component={Task_Commercial}
			/>
			<Stack.Screen
				name="Residential Tasks"
				component={Task_Residential}
			/>
			<Stack.Screen
				name="Industrial Tasks"
				component={Task_Industrial}
			/>
			<Stack.Screen
				name="Contact Information"
				component={ContactInfo}
			/>
		</Stack.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Header />
			<StackNav />
		</NavigationContainer>
	);
}
