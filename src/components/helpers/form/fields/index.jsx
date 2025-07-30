export default function FormFieldWrapper({
	id,
	label,
	error,
	children,
	required = false,
}) {
	return (
		<div className="flex flex-col gap-1">
			{label && (
				<label htmlFor={id} className="block text-sm font-medium text-gray-700">
					{label}
					<span className="text-red-800">{required ? "*" : null}</span>
				</label>
			)}
			<div className="flex flex-col">
				{children}
				{error && <p className="text-red-800 text-sm mt-1">{error}</p>}
			</div>
		</div>
	);
}
