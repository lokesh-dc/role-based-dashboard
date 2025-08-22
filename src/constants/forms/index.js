import {
	editProfileFormConfig,
	loginFormConfig,
	LoginFormConfigType,
	signupFormConfig,
	SignupFormConfigType,
	UpdateFormConfigType,
} from "./users";
import { UpdateTaskConfig, UpdateTaskFormConfigType } from "./tasks";

export const getFormConfig = (type) => {
	console.log("getFormConfig", type);
	const formtypes = {
		[LoginFormConfigType]: loginFormConfig,
		[SignupFormConfigType]: signupFormConfig,
		[UpdateFormConfigType]: editProfileFormConfig,
		[UpdateTaskFormConfigType]: UpdateTaskConfig,
	};
	return formtypes[type] || {};
};
