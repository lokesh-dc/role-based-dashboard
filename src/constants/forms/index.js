import {
	editProfileFormConfig,
	loginFormConfig,
	LoginFormConfigType,
	signupFormConfig,
	SignupFormConfigType,
	UpdateFormConfigType,
} from "./users";

export const InputFieldType = "inputFieldType";

// Form Actions
export const SwitchFormActionType = "switchForm";

export const getFormConfig = (type) => {
	const formtypes = {
		[LoginFormConfigType]: loginFormConfig,
		[SignupFormConfigType]: signupFormConfig,
		[UpdateFormConfigType]: editProfileFormConfig,
	};
	return formtypes[type] || {};
};
