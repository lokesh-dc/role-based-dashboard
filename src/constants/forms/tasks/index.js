import { DateFieldType, InputFieldType, TextAreaFieldType } from "../fields";

export const UpdateTaskFormConfigType = "UpdateTaskFormConfig";
export const AddTaskFormConfigType = "AddTaskFormConfig";

export const AddTaskConfig = {
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
			type: "datetime-local",
			label: "Due Date",
			placeholder: "Select Due Date",
			required: true,
			fieldType: DateFieldType,
			errorMessage: "Please select Due Date",
		},
	],
	submitTitle: "Update Task",
	submitApi: "/api/user/login",
	submitLoadingTitle: "Creating...",
	onSuccess: () => {
		window.location.href = "/dashboard";
	},
};

export const UpdateTaskConfig = {
	...AddTaskConfig,
	title: "Update Task",
	submitTitle: "Update Task",
	submitApi: "/api/user/login",
	submitLoadingTitle: "Updating...",
	onSuccess: () => {
		window.location.href = "/dashboard";
	},
};
