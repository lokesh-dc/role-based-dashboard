import { DateFieldType, InputFieldType, TextAreaFieldType } from "../fields";

export const UpdateTaskFormConfigType = "UpdateTaskFormConfig";

export const UpdateTaskConfig = {
	title: "Add Task",
	fields: [
		{
			id: "title",
			type: "text",
			label: "Title",
			placeholder: "Enter title",
			required: true,
			fieldType: InputFieldType,
			errorMessage: "Please enter task title here",
		},
		{
			id: "description",
			type: "text",
			label: "Description",
			placeholder: "Enter Description",
			required: false,
			fieldType: TextAreaFieldType,
			rows: 3,
			errorMessage: "Please enter task description here",
		},
		{
			id: "dueDate",
			type: "date",
			label: "Due Date",
			placeholder: "Select Due Date",
			required: true,
			fieldType: DateFieldType,
			errorMessage: "Please select Due Date",
		},
		{
			id: "dueDate",
			type: "time",
			label: "Due Date",
			placeholder: "Select Due Date",
			required: true,
			fieldType: DateFieldType,
			errorMessage: "Please select Due Date",
		},
	],
	submitTitle: "Login",
	submitApi: "/api/user/login",
	submitLoadingTitle: "Logging you in...",
	onSuccess: () => {
		window.location.href = "/dashboard";
	},
};
