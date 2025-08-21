export default function Tag({
	title,
	classes = "bg-[#E7F7EF] text-[#0CAF60]",
}) {
	return (
		<div
			className={`flex w-fit px-2 py-1 rounded-full justify-center items-center text-xs ${classes}`}
		>
			{title}
		</div>
	);
}
