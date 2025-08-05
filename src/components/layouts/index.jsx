import NavigationBar from "../ui/navigation";
import TodoStats from "../ui/stats";

export default function PageLayout({ data }) {
	return (
		<div className="flex flex-col h-[100vh]">
			<NavigationBar />
			<div className="flex flex-col gap-4 bg-[#FAFAFA] h-full p-5">
				<div className="flex  justify-between items-end">
					<h1 className="text-xl font-bold">Hello, Lokesh</h1>
					<p className="text-xs">Last Login Time : 16/08/2023 18:00</p>
				</div>
				<TodoStats
					allCount={data?.length}
					completed={data?.filter(({ completed }) => completed == true)?.length}
				/>
			</div>
		</div>
	);
}
