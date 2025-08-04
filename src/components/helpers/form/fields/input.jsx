export default function InputField({
	id = "",
	type = "text",
	label = "",
	placeholder = "",
	value = "",
	changeHandler = () => {},
	required = false,
	isNoBorderVariant = false,
}) {
	return (
		<input
			name={id}
			type={type}
			placeholder={placeholder}
			value={value}
			required={required}
			onChange={changeHandler}
			className={`p-2 rounded focus:outline-none ${
				isNoBorderVariant
					? ""
					: "border border-secondary-alfa focus:ring-primary"
			}`}
		/>
	);
}
