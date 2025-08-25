import { formatDate } from "@/utils/dates";

export default function Table({
	children,
	title = "",
	desription = "",
	data = [],
	dataColumns = [],
}) {
	const formatCell = (dataItem, fieldRule) => {
		const key = fieldRule.dataKey;
		const value = dataItem[key];

		if (fieldRule?.type == "multi") return fieldRule?.formatData(dataItem);
		if (fieldRule?.type == "actions")
			return fieldRule?.renderComponents(dataItem);
		if (fieldRule?.formatData) return fieldRule?.formatData(value);
		return value;
	};
	return (
		<div className="rounded-xl p-3 bg-white flex flex-col gap-6">
			<div className="flex justify-between">
				<div className="flex flex-col">
					<h1 className="text-2xl text-bold">{title}</h1>
					<p className="text-[#848D9A] text-xs">{desription}</p>
				</div>
				{children}
			</div>
			<div className="flex flex-col p-2 rounded-lg">
				<div className="bg-[#fafafa] flex gap-4 justify-around">
					{dataColumns?.map(({ title }, colIdx) => (
						<div key={colIdx} className="w-full text-[#657081] p-2 ">
							{title}
						</div>
					))}
				</div>
				{data.map((item, idx) => (
					<div
						key={idx}
						className="flex justify-around items-center border-b border-dashed p-2 gap-4 border-[#E6E7EA]"
					>
						{dataColumns.map((col, idx) => (
							<div
								key={idx}
								className={`w-full ${idx != 0 ? "p-2" : ""} text-sm`}
							>
								{formatCell(item, col)}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
