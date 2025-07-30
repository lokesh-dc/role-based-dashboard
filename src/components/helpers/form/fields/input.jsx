export default function InputField({
	id = "",
	type = "text",
	label = "",
	placeholder = "",
	value = "",
	changeHandler = () => {},
	required = false,
}) {
	return (
		<input
			name={id}
			type={type}
			placeholder={placeholder}
			value={value}
			required={required}
			onChange={changeHandler}
			className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
		/>
	);
}
