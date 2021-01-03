import React from "react";
import { Button, TextInput, View, Text, ScrollView } from "react-native";
import { formStyles } from "../styles/form.js";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
	jobtitle: yup.string().required().min(4),
	skills_reqd: yup.string().required().min(8),
	description: yup.string().required().min(8),
	region: yup.string().required().min(8),
	schedule: yup.string().required().min(8),
	time: yup.string().required().min(4),
	rate: yup.string().required().min(8),
});

export function JobSearchForm() {
	return (
		<ScrollView>
			<View style={formStyles.container}>
				<Formik
					initialValues={{
						jobtitle: "",
						skills_reqd: "",
						description: "",
						region: "",
						schedule: "",
						time: "",
						rate: "",
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
								placeholder="Job Title"
								onChangeText={props.handleChange(
									"jobtitle"
								)}
								value={props.values.jobtitle}
								onBlur={props.handleBlur("jobtitle")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.jobtitle &&
									props.errors.jobtitle}
							</Text>
							<TextInput
								multiline
								style={formStyles.input}
								placeholder="Skills Required"
								onChangeText={props.handleChange(
									"skills_reqd"
								)}
								value={props.values.skills_reqd}
								onBlur={props.handleBlur("skills_reqd")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.skills_reqd &&
									props.errors.skills_reqd}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Description"
								onChangeText={props.handleChange(
									"description"
								)}
								value={props.values.description}
								onBlur={props.handleBlur("description")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.description &&
									props.errors.description}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Region"
								onChangeText={props.handleChange(
									"region"
								)}
								value={props.values.region}
								onBlur={props.handleBlur("region")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.region &&
									props.errors.region}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Schedule"
								onChangeText={props.handleChange(
									"schedule"
								)}
								value={props.values.schedule}
								onBlur={props.handleBlur("schedule")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.schedule &&
									props.errors.schedule}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Time"
								onChangeText={props.handleChange(
									"time"
								)}
								value={props.values.time}
								onBlur={props.handleBlur("time")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.time &&
									props.errors.time}
							</Text>
							<TextInput
								style={formStyles.input}
								placeholder="Rate"
								onChangeText={props.handleChange(
									"rate"
								)}
								value={props.values.rate}
								onBlur={props.handleBlur("rate")}
							/>
							<Text style={formStyles.errorText}>
								{props.touched.rate &&
									props.errors.rate}
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
