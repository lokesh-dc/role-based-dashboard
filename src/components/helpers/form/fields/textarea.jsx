export default function TextAreaField({
	id = "",
	type = "text",
	label = "",
	placeholder = "",
	value = "",
	changeHandler = () => {},
	required = false,
	isNoBorderVariant = false,
	rows = 4,
}) {
	return (
		<textarea
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
			rows={rows}
		/>
	);
}
