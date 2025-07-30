import { InputFieldType } from "@/constants/forms";
import FormFieldWrapper from "./fields";
import InputField from "./fields/input";
export default function FieldsContainer({
	config,
	formErrors = {},
	formData = {},
	formDataSetter = () => {},
}) {
	function handleFieldChange(event) {
		const { name, value } = event.target;
		formDataSetter((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}

	return (
		<div className="flex flex-col gap-4">
			{config?.map((fieldConfig, index) => {
				const { fieldType, id, label, required = false } = fieldConfig;

				const formFieldConfig = {
					...fieldConfig,
					changeHandler: handleFieldChange,
					value: formData[id] || "",
				};

				const renderField = () => {
					switch (fieldType) {
						case InputFieldType:
							return <InputField key={id} {...formFieldConfig} />;
						default:
							return null;
					}
				};

				return (
					<FormFieldWrapper
						key={id || index}
						required={required}
						label={label}
						error={formErrors[id]}
					>
						{renderField()}
					</FormFieldWrapper>
				);
			})}
		</div>
	);
}
