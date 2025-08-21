import { InputFieldType } from "..";

export const UpdateTaskFormConfigType = "UpdateTaskFormConfigType";

export const UpdateTaskConfig = {
	title: "Welcome to GGTodo",
	description: "To get started, please sign in",
	fields: [
		{
			id: "email",
			type: "email",
			label: "Email",
			placeholder: "Enter your registered email",
			required: true,
			fieldType: InputFieldType,
			validations: (email) => {
				"/^[^s@]+@[^s@]+.[^s@]+$/".test(email);
			},
			errorMessage: "Please enter a valid email address",
		},
		{
			id: "password",
			type: "password",
			label: "Password",
			placeholder: "Enter your password",
			required: true,
			fieldType: InputFieldType,
			isPassword: true,
			errorMessage: "Please enter a valid password",
		},
	],
	submitTitle: "Login",
	submitApi: "/api/user/login",
	submitLoadingTitle: "Logging you in...",
	onSuccess: () => {
		window.location.href = "/dashboard";
	},
};
