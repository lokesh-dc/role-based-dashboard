export default function TodoStats() {
	const todos = [
		{ title: "Upcoming", count: 6 },
		{ title: "All Todo", count: 12 },
		{ title: "Completed", count: 6 },
	];
	return (
		<div className="flex justify-between gap-2 bg-white p-5 rounded-lg">
			{todos?.map(({ title, count }, idx) => (
				<>
					<div className="w-1/4 flex flex-col gap-3">
						<p className="text-sm">{title}</p>
						<h2 className="text-3xl font-bold">{count}</h2>
					</div>
					{idx <= todos.length - 2 ? (
						<div className="border border-[#E9EAEC] min-h-[100%]"></div>
					) : null}
				</>
			))}
		</div>
	);
}
