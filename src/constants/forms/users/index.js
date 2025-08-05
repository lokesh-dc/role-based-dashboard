import { InputFieldType, SwitchFormActionType } from "..";

export const LoginFormConfigType = "LoginFormConfig";
export const SignupFormConfigType = "SignupFormConfig";
export const loginFormConfig = {
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
	formHelpers: {
		title: "Don't have an account?",
		subtitle: "Signup now",
		action: {
			type: SwitchFormActionType,
			to: SignupFormConfigType,
		},
	},
	onSuccess: () => {
		window.location.href = "/dashboard";
	},
};

export const signupFormConfig = {
	title: "You’re one click away from less busywork",
	fields: [
		{
			id: "fullname",
			type: "text",
			label: "Full Name",
			placeholder: "Lokesh Choudhary",
			required: true,
			fieldType: InputFieldType,
			errorMessage: "Please enter your name",
		},
		{
			id: "email",
			type: "email",
			label: "Email",
			placeholder: "example@site.com",
			unique: true,
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
			placeholder: "Minimum 8 Characters",
			required: true,
			fieldType: InputFieldType,
			isPassword: true,
			errorMessage: "Please enter a password",
		},
	],
	submitTitle: "Signup",
	submitApi: "/api/user/signup",
	submitLoadingTitle: "Signing you up...",
	formHelpers: {
		title: "Already have an account?",
		subtitle: "Login now",
		action: {
			type: SwitchFormActionType,
			to: LoginFormConfigType,
		},
	},
	onSuccess: () => {
		window.location.href = "/dashboard";
	},
};

export const getFormConfig = (type) => {
	const formtypes = {
		[LoginFormConfigType]: loginFormConfig,
		[SignupFormConfigType]: signupFormConfig,
	};
	return formtypes[type] || {};
};
