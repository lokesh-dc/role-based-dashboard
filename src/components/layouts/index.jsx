import NavigationBar from "../ui/navigation";
import TodoStats from "../ui/stats";

import { cookies } from "next/headers";

export default async function PageLayout({ data }) {
	const cookieStore = await cookies();
	const userCookie = cookieStore.get("user-details")?.value;
	const userDetails = userCookie ? JSON.parse(userCookie) : null;
	
	return (
		<div className="flex flex-col h-[100vh]">
			<NavigationBar userDetails={userDetails} />
			<div className="flex flex-col gap-4 bg-[#FAFAFA] h-full p-5">
				<div className="flex  justify-between items-end">
					<h1 className="text-xl font-bold">Hello, {userDetails?.fullname}</h1>
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
