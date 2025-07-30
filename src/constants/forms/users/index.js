import { InputFieldType, SwitchFormActionType } from "..";

export const LoginFormConfigType = "LoginFormConfig";
export const SignupFormConfigType = "SignupFormConfig";
export const loginFormConfig = {
	title: "Welcome Back",
	description: "Let's get you logged in",
	fields: [
		{
			id: "email",
			type: "email",
			label: "Email",
			placeholder: "example@gmail.com",
			required: true,
			fieldType: InputFieldType,
			validations: (email) => {
				"/^[^s@]+@[^s@]+.[^s@]+$/".test(email);
			},
			errorMessage: "Please enter a valid email address",
		},
		{
			id: "password",
			type: "text",
			label: "Password",
			placeholder: "*********",
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
		window.location.href = "/forms";
	},
};

export const signupFormConfig = {
	title: "Welcome",
	description: "Let's get you signed up in no time",
	fields: [
		// {
		// 	id: "fullName",
		// 	type: "text",
		// 	label: "Full Name",
		// 	placeholder: "Lokesh Choudhary",
		// 	required: false,
		// 	fieldType: InputFieldType,
		// 	errorMessage: "Please enter your name",
		// },
		{
			id: "email",
			type: "email",
			label: "Email",
			placeholder: "Enter your email",
			unique: true,
			required: true,
			fieldType: InputFieldType,
			validations: (email) => {
				"/^[^s@]+@[^s@]+.[^s@]+$/".test(email);
			},
			errorMessage: "Please enter a valid email address",
		},
		{
			id: "username",
			type: "text",
			label: "User Name",
			placeholder: "lokesh-dc",
			unique: true,
			required: true,
			isApiDependent: true,
			apiEndpoint: "/api/users/username/check",
			fieldType: InputFieldType,
			validations: (email) => {
				"/^[^s@]+@[^s@]+.[^s@]+$/".test(email);
			},
			errorMessage: "Please enter a valid username",
		},
		{
			id: "password",
			type: "text",
			label: "Password",
			placeholder: "Enter your password",
			required: true,
			fieldType: InputFieldType,
			isPassword: true,
			errorMessage: "Please enter a password",
		},
		{
			id: "confirmPassword",
			type: "text",
			label: "Confirm Password",
			placeholder: "Confirm your password",
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
		window.location.href = "/forms";
	},
};

export const getFormConfig = (type) => {
	const formtypes = {
		[LoginFormConfigType]: loginFormConfig,
		[SignupFormConfigType]: signupFormConfig,
	};
	return formtypes[type] || {};
};
