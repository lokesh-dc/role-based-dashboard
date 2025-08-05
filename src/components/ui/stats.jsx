export default function TodoStats({ allCount = 0, completed = 0 }) {
	const todos = [
		{ title: "All Todo", count: allCount },
		{ title: "Completed", count: completed },
		{ title: "Upcoming", count: allCount - completed },
	];
	return (
		<div className="flex justify-between gap-2 bg-white p-5 rounded-lg">
			{todos?.map(({ title, count }, idx) => (
				<>
					<div key={idx} className="w-1/4 flex flex-col gap-3">
						<p className="text-sm">{title}</p>
						<h2 className="text-3xl font-bold">{count}</h2>
					</div>
					{idx <= todos.length - 2 ? (
						<div
							key={`${idx}-di`}
							className="border border-[#E9EAEC] min-h-[100%]"
						></div>
					) : null}
				</>
			))}
		</div>
	);
}
