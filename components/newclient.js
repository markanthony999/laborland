import React from "react";
import {
	StyleSheet,
	Button,
	TextInput,
	View,
	Text,
	ScrollView,
} from "react-native";
import { formStyles } from "../styles/form.js";
import { Formik } from "formik";
import * as yup from "yup";
//import { string } from "yup/lib/locale";

const reviewSchema = yup.object({
	name: yup.string().required().min(8),
	address: yup.string().required().min(8),
	phone: yup.number().required().min(10),
	email: yup.number().required().min(8),
	skill_1: yup.string().required().min(8),
	skill_2: yup.string().required().min(8),
	skill_3: yup.string().required().min(8),
	bank: yup.string().required().min(4),
	accountinfo: yup.string().required().min(8),
});

export function NewValetForm() {
	return (
		<ScrollView>
			<View style={formStyles.container}>
				<Formik
					initialValues={{
						name: "",
						address: "",
						phone: "",
						email: "",
						skill_1: "",
						skill_2: "",
						skill_3: "",
						bank: "",
						accountinfo: "",
					}}
					validationSchema={reviewSchema}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					{(props) => (
						<View>
							<TextInput
								style={formStyles.input}
								placeholder="Name"
								onChangeText={props.handleChange(
									"name"
								)}
								value={props.values.name}
								onBlur={props.handleBlur("name")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.name &&
									props.errors.name}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Address"
								onChangeText={props.handleChange(
									"address"
								)}
								value={props.values.body}
								onBlur={props.handleBlur("address")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.address &&
									props.errors.address}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Phone"
								onChangeText={props.handleChange(
									"phone"
								)}
								value={props.values.phone}
								onBlur={props.handleBlur("phone")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.phone &&
									props.errors.phone}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Email"
								onChangeText={props.handleChange(
									"email"
								)}
								value={props.values.email}
								onBlur={props.handleBlur("email")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.email &&
									props.errors.email}
							</Text>

							<Text style={formStyles.titleText}>
								Skills
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Skill 1"
								onChangeText={props.handleChange(
									"skill_1"
								)}
								value={props.values.skill_1}
								onBlur={props.handleBlur("skill_1")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.skill_1 &&
									props.errors.skill_1}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Skill 2"
								onChangeText={props.handleChange(
									"skill_2"
								)}
								value={props.values.skill_2}
								onBlur={props.handleBlur("skill_2")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.skill_2 &&
									props.errors.skill_2}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Skill 3"
								onChangeText={props.handleChange(
									"skill_3"
								)}
								value={props.values.skill_3}
								onBlur={props.handleBlur("skill_3")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.skill_3 &&
									props.errors.skill_3}
							</Text>
							<Text style={formStyles.titleText}>
								Availability
							</Text>
							<Text style={formStyles.errorText}>
								"Calendar, Clock, Map Widget inserted
								here"
							</Text>
							<Text style={formStyles.titleText}>
								Account Information
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Bank"
								onChangeText={props.handleChange(
									"bank"
								)}
								value={props.values.bank}
								onBlur={props.handleBlur("bank")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.bank &&
									props.errors.bank}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Account Info"
								onChangeText={props.handleChange(
									"accountinfo"
								)}
								value={props.values.accountinfo}
								onBlur={props.handleBlur("accountinfo")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.accountinfo &&
									props.errors.accountinfo}
							</Text>
							<Button
								title="submit"
								color="#D24524"
								onPress={props.handleSubmit}
							/>
						</View>
					)}
				</Formik>
			</View>
		</ScrollView>
	);
}
